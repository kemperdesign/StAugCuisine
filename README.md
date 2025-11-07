<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Osv76PEDgocA5iNZxGHA_lNW1QDVxFUV

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Persistence
This build saves all data to your browser's IndexedDB under the database `food_cost_db`. Data persists across restarts.

## OpenAI API Key
Add `VITE_OPENAI_API_KEY=sk-...` to `.env.local` if you plan to add AI helpers. The current app does not call the API by default.
