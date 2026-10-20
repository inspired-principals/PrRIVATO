import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { AI_AGENTS } from '../ai/agents';
import { completeWithProvider, getProviderConfig, isProviderConfigured, type AgentMessage } from './modelProvider';

type MiddlewareStack = {
  use: (
    path: string,
    middleware: (request: IncomingMessage, response: ServerResponse, next: (error?: Error) => void) => void,
  ) => void;
};

const MAX_BODY_BYTES = 20_000;
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 3_000;
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

const sendJson = (response: ServerResponse, status: number, payload: unknown) => {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(payload));
};

const readJson = async (request: IncomingMessage) => {
  const chunks: Buffer[] = [];
  let size = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BODY_BYTES) throw new Error('Request is too large.');
    chunks.push(buffer);
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
};

export const agentApiPlugin = (env: Record<string, string | undefined>): Plugin => {
  const provider = getProviderConfig(env);
  const requestsByIp = new Map<string, number[]>();

  const install = (middlewares: MiddlewareStack) => {
    middlewares.use('/api/health', (_request, response) => {
      sendJson(response, 200, {
        status: 'ok',
        provider: provider.provider,
        configured: isProviderConfigured(provider),
        agents: AI_AGENTS.map(({ id, label }) => ({ id, label })),
      });
    });

    middlewares.use('/api/agents/chat', (request, response, next) => {
      if (request.method !== 'POST') {
        sendJson(response, 405, { error: 'Use POST for agent chat.' });
        return;
      }

      const origin = request.headers.origin;
      const host = request.headers.host;
      let sameOrigin = false;
      try {
        sameOrigin = Boolean(origin && host && new URL(origin).host === host);
      } catch {
        sameOrigin = false;
      }
      if (!sameOrigin) {
        sendJson(response, 403, { error: 'Requests must come from this site.' });
        return;
      }

      void (async () => {
        const ip = request.socket.remoteAddress ?? 'unknown';
        const now = Date.now();
        for (const [address, timestamps] of requestsByIp) {
          if (!timestamps.some(time => now - time < RATE_WINDOW_MS)) requestsByIp.delete(address);
        }
        const recentRequests = (requestsByIp.get(ip) ?? []).filter(time => now - time < RATE_WINDOW_MS);
        if (recentRequests.length >= RATE_LIMIT) {
          sendJson(response, 429, { error: 'Request limit reached. Please try again in a minute.' });
          return;
        }
        recentRequests.push(now);
        requestsByIp.set(ip, recentRequests);

        if (!isProviderConfigured(provider)) {
          sendJson(response, 503, {
            error: provider.provider === 'local'
              ? 'Local AI is not configured. Set LOCAL_MODELS to an installed local model in .env.local.'
              : 'OpenRouter is selected but OPENROUTER_API_KEY is missing. Restart the dev server after configuring it.',
          });
          return;
        }

        let body: { agentId?: string; messages?: { role?: string; content?: string }[] };
        try {
          body = await readJson(request);
        } catch (error) {
          sendJson(response, 400, { error: error instanceof Error ? error.message : 'Invalid request.' });
          return;
        }

        const agent = AI_AGENTS.find(candidate => candidate.id === body.agentId);
        const messages = body.messages?.slice(-MAX_MESSAGES);
        if (!agent || !messages?.length || messages.some(message =>
          !['user', 'assistant'].includes(message.role ?? '') ||
          typeof message.content !== 'string' ||
          message.content.length > MAX_MESSAGE_LENGTH
        )) {
          sendJson(response, 400, { error: 'Choose a valid agent and provide a short conversation.' });
          return;
        }

        const modelMessages: AgentMessage[] = [
          {
            role: 'system',
            content: `${agent.prompt}\n\nOnly when the user explicitly asks to prepare one, you may request a form by ending your response with exactly one marker: [FORM:PMA_APPLICATION], [FORM:TRUST_DEED], or [FORM:AFFIDAVIT_OF_TRUTH]. Do not invent legal facts or guarantee outcomes.`,
          },
          ...messages.map(message => ({ role: message.role as 'user' | 'assistant', content: message.content! })),
        ];

        const completion = await completeWithProvider(provider, modelMessages);
        if (completion) {
          const formMatch = completion.text.match(/\[FORM:(PMA_APPLICATION|TRUST_DEED|AFFIDAVIT_OF_TRUTH)\]/);
          sendJson(response, 200, {
            agent: agent.label,
            model: completion.model,
            text: completion.text.replace(/\s*\[FORM:(?:PMA_APPLICATION|TRUST_DEED|AFFIDAVIT_OF_TRUTH)\]\s*/, '\n').trim(),
            form: formMatch ? { formType: formMatch[1] } : null,
          });
          return;
        }

        sendJson(response, 502, {
          error: provider.provider === 'local'
            ? 'The local model could not be reached. Check LOCAL_MODEL_URL and the installed model name.'
            : 'Free OpenRouter models are temporarily unavailable. Please try again shortly.',
        });
      })().catch(error => next(error instanceof Error ? error : new Error('Agent request failed.')));
    });
  };

  return {
    name: 'privato-agent-api',
    configureServer(server) {
      install(server.middlewares);
    },
    configurePreviewServer(server) {
      install(server.middlewares);
    },
  };
};