# Contributing

This repository is a **documentation and integration wrapper** for the **AI Crawler & Content-Signal Permission Delta Monitor** Apify Actor — not the Actor's source code. The Actor's real, proprietary TypeScript implementation is closed-source and runs exclusively on Apify's platform; nothing in this repository builds or runs it. This repo holds only `README.md`, `LICENSE`, and worked `examples/` snippets, independently maintained by Stefano Seggio as part of the [Delta Registry](https://github.com/stefanoseggio) fleet — there is no separate contributor team, but documentation fixes and example improvements are welcome.

## What "contributing" means here

There is no source code to change, so a contribution here is one of:

- Fixing a documentation error (wrong field name, stale pricing, broken link, an inaccurate description of what the Actor actually does).
- Fixing an outdated or broken code sample under `examples/` (e.g. a call that no longer matches the Actor's real current input/output schema).
- Proposing documentation for a filter or output field the Actor already supports but this repo doesn't yet describe.

This repository cannot fix a bug in the Actor's actual behavior — that logic is closed-source and lives on Apify. If you've found an actual data/behavior defect in a live run, report it on the [Store page's Issues tab](https://apify.com/stefano_seggio/ai-crawler-content-signal-permission-monitor) instead of opening a PR here.

## Testing your change

There's no local `apify run` workflow possible here (no source to run), so verify any doc/example change against the real, live Actor instead:

- Run it directly from the [Apify Store](https://apify.com/stefano_seggio/ai-crawler-content-signal-permission-monitor) (Console → Try for free), or
- Use one of the Quickstart snippets in the README (cURL / Python / Node.js) against the live Actor with your own Apify API token.

Confirm the field names, event types, and behavior you're documenting actually match what the live Actor returns before submitting.

## Branch naming

- `docs/<short-description>` — README/documentation changes (the most common kind of change here)
- `fix/<short-description>` — corrections to `examples/` snippets
- `chore/<short-description>` — repo tooling, CI, governance-file changes

## Commit convention

This repository follows [Conventional Commits](https://www.conventionalcommits.org/), even though there's no compiled code to version:

```
<type>(<optional scope>): <short summary>

<optional body>
```

Types used here: `docs`, `fix`, `chore`. The `type` prefix drives this repo's automated changelog via `release-please` (see [`.github/workflows/release.yml`](.github/workflows/release.yml)) — release-please tracks this repository's own documentation history, which is versioned independently of the live Actor's real version number on Apify.

## Pull requests

1. Branch, make your change, and open a PR against `main` using the repository's [PR template](.github/PULL_REQUEST_TEMPLATE.md).
2. Confirm the change is accurate against the live Actor's real current behavior (see "Testing your change" above) before requesting review.
3. Do not add source code, a `package.json`, or any build tooling to this repository — it is deliberately source-free; the real implementation stays on Apify.

## Questions or non-doc issues

For questions that aren't a documentation fix (pricing, licensing, enterprise inquiries, or an actual Actor behavior bug), use the Apify Store's Issues tab on the [live Actor page](https://apify.com/stefano_seggio/ai-crawler-content-signal-permission-monitor) rather than a GitHub issue here.
