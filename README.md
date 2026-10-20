<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1PC8ZUyPhhxB6Nz8DW3BOgtGSvQxsk4oJ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy [.env.example](.env.example) to `.env.local`, then set `LOCAL_MODELS` to a model already installed in your local Ollama-compatible server. The default configuration sends prompts only to that local endpoint. Keep `AI_PROVIDER=local` for closed-system operation.
3. Run the app:
   `npm run dev`

The assistant routes conversations to modular intake, research, service, and general agents based on the current page. Hosted free models are optional: set `AI_PROVIDER=openrouter` and `OPENROUTER_API_KEY` only after approving that prompts may leave the local system. The agent status indicator shows whether the selected provider is configured. Free model availability and rate limits can change.

The agent API currently runs as Vite server middleware for local development and preview; it is not a production backend. Production deployment needs a separately hosted, authenticated server adapter before enabling public access.
