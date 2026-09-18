# Security Policy

## Supported versions

This repository's own documentation and examples are versioned via automated tagging (see [`.github/workflows/release.yml`](.github/workflows/release.yml)), independent of the live **AI Crawler & Content-Signal Permission Delta Monitor** Actor's own version number on Apify. There is no long-term-support branch — this is a single-maintainer, independently-operated repository, not an enterprise product with a formal support matrix.

## What's actually in scope

Honestly assessed, this repository's attack surface is minimal:

- **No source code.** This repo contains only `README.md`, `LICENSE`, and worked `examples/` snippets — there is nothing here that compiles or executes as part of a build.
- **No dependency tree.** There is no `package.json` and nothing installs from a registry when you clone this repository — there is no application supply-chain surface for `npm audit` to cover. Its `.github/dependabot.yml` only tracks the GitHub Actions used by this repo's own CI, not an application dependency tree.
- **No credential handling.** This repository never asks for, stores, or transmits an Apify API token or any other secret. The example snippets show *where* you'd put your own token to call the live Actor; none of that ever touches this repository or its automation.
- **No user-supplied code execution.** There is no runtime here at all — nothing in this repo accepts or executes input.

## Reporting a vulnerability

**Preferred: GitHub Private Vulnerability Reporting.** This repository has private vulnerability reporting enabled — go to the **Security** tab → **Report a vulnerability** to open a private advisory visible only to the maintainer. Use this for anything about this repository itself (e.g. a malicious link slipped into a doc, a supply-chain concern about a GitHub Action this repo's workflows use).

**A security concern about the live Actor's actual behavior** (the proprietary logic that runs on Apify, not this repository) should also go through this repository's private vulnerability reporting, or directly via the [Store page](https://apify.com/stefano_seggio/ai-crawler-content-signal-permission-monitor) — this repository doesn't contain that code, but the maintainer is the same person and either channel reaches them.

**Do not** open a public GitHub issue for a suspected security vulnerability — use private reporting instead so the disclosure stays coordinated.

## Response expectations

This is an independently developed and maintained repository with no contractual security SLA. In practice, reports are typically triaged within 48 hours, though there is no guaranteed fix timeline.

## Enterprise / institutional customers

If your organization requires a signed security addendum, a formal disclosure SLA, or a security questionnaire, open an issue against the [Store page](https://apify.com/stefano_seggio/ai-crawler-content-signal-permission-monitor) or connect via [LinkedIn](https://www.linkedin.com/in/stefanoseggio-deltaregistry) — these are handled case-by-case, not something this file can commit to on Stefano's behalf.
