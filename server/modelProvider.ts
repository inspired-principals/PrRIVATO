import { FREE_MODELS } from '../ai/agents';

export type AgentMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type ProviderConfig = {
  provider: 'local' | 'openrouter';
  localUrl: string;
  localModels: string[];
  localApiKey?: string;
  openRouterApiKey?: string;
  openRouterModels: string[];
};

export const getProviderConfig = (env: Record<string, string | undefined>): ProviderConfig => ({
  provider: env.AI_PROVIDER?.trim().toLowerCase() === 'openrouter' ? 'openrouter' : 'local',
  localUrl: env.LOCAL_MODEL_URL?.trim() || 'http://127.0.0.1:11434/v1/chat/completions',
  localModels: env.LOCAL_MODELS?.split(',').map(model => model.trim()).filter(Boolean) ?? [],
  localApiKey: env.LOCAL_MODEL_API_KEY?.trim(),
  openRouterApiKey: env.OPENROUTER_API_KEY?.trim(),
  openRouterModels: [
    ...(env.OPENROUTER_MODELS?.split(',').map(model => model.trim()).filter(Boolean) ?? []),
    ...FREE_MODELS.map(model => model.id),
  ],
});

export const isProviderConfigured = (config: ProviderConfig) => config.provider === 'local'
  ? config.localModels.length > 0
  : Boolean(config.openRouterApiKey && config.openRouterModels.length);

export const completeWithProvider = async (config: ProviderConfig, messages: AgentMessage[]) => {
  const models = config.provider === 'local' ? config.localModels : [...new Set(config.openRouterModels)];
  const endpoint = config.provider === 'local'
    ? config.localUrl
    : 'https://openrouter.ai/api/v1/chat/completions';
  const apiKey = config.provider === 'local' ? config.localApiKey : config.openRouterApiKey;

  for (const model of models) {
    let response: Response;
    try {
      response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
          'Content-Type': 'application/json',
          ...(config.provider === 'openrouter' ? { 'X-Title': 'PRIVATO' } : {}),
        },
        body: JSON.stringify({ model, messages, max_tokens: 700, stream: false }),
        signal: AbortSignal.timeout(45_000),
      });
    } catch {
      continue;
    }

    if (!response.ok) continue;

    try {
      const result = await response.json() as {
        choices?: { message?: { content?: string | null } }[];
      };
      const text = result.choices?.[0]?.message?.content?.trim();
      if (text) return { model, text };
    } catch {
      continue;
    }
  }

  return null;
};