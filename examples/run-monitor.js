// run-monitor.js - calls the AI Crawler & Content-Signal Permission Delta Monitor via apify-client
// npm install apify-client
const { ApifyClient } = require('apify-client');

// Reads your Apify API token from an environment variable - never hardcode it.
// Get a token from https://console.apify.com/settings/integrations
const client = new ApifyClient({ token: process.env.APIFY_API_TOKEN });

async function main() {
    // Minimal input matching this Actor's real input_schema.json - "domains" is the only required field.
    const input = {
        domains: ['cloudflare.com', 'openai.com'],
        trackedBots: ['GPTBot', 'ClaudeBot', 'Google-Extended', 'PerplexityBot'],
        checkContentSignals: true,
        checkLlmsTxt: true,
        onlyNew: true,
        deltaStateName: 'own-sites',
    };

    // .call() starts the run on Apify's infrastructure and blocks until it reaches a terminal status.
    const run = await client.actor('eWDx4XY54R5GXysFi').call(input);

    console.log(`Run finished with status: ${run.status}`);

    // Delta events (BASELINE_SNAPSHOT / ALLOWED / DISALLOWED / CHANGED / NO_CHANGE)
    // land in this run's default dataset, one record per domain per event.
    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    for (const item of items) {
        console.log(`${item.domain}: ${item.event_type} (fetched ${item.scraped_at})`);
    }
}

main().catch((err) => {
    console.error('Actor run failed:', err.message);
    process.exit(1);
});
