# run_monitor.py - calls the AI Crawler & Content-Signal Permission Delta Monitor via apify-client
# pip install apify-client
import os
from apify_client import ApifyClient

# Reads your Apify API token from an environment variable - never hardcode it.
# Get a token from https://console.apify.com/settings/integrations
client = ApifyClient(os.environ["APIFY_API_TOKEN"])

# Minimal input matching this Actor's real input_schema.json - "domains" is the only required field.
run_input = {
    "domains": ["cloudflare.com", "openai.com"],
    "trackedBots": ["GPTBot", "ClaudeBot", "Google-Extended", "PerplexityBot"],
    "checkContentSignals": True,
    "checkLlmsTxt": True,
    "onlyNew": True,
    "deltaStateName": "own-sites",
}

# .call() starts the run on Apify's infrastructure and blocks until it reaches a terminal status.
run = client.actor("eWDx4XY54R5GXysFi").call(run_input=run_input)

print(f"Run finished with status: {run['status']}")

# Delta events (BASELINE_SNAPSHOT / ALLOWED / DISALLOWED / CHANGED / NO_CHANGE)
# land in this run's default dataset, one record per domain per event.
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(f"{item['domain']}: {item['event_type']} (fetched {item['scraped_at']})")
