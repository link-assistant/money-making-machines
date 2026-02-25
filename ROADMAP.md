# Roadmap

This document outlines the planned development stages for **Money Making
Machines**.

## Phase 1 — Proof of Concept ✅ (current)

**Goal:** Validate the core concept with a small set of working method pages.

- [x] Market research (`MARKET-RESEARCH.md`) — 50+ existing projects catalogued
      across 10 categories
- [x] Static GitHub Pages website with shared CSS and JavaScript
- [x] 6 initial method pages:
  - [x] Bandwidth Sharing (Honeygain, EarnApp, Peer2Profit, PacketStream)
  - [x] Crypto Trading Bot (Freqtrade)
  - [x] Freelance Job Alerts (RSS to email)
  - [x] Affiliate Content Site (Hugo + affiliate programs)
  - [x] Microsoft Rewards automation
  - [x] Stock Trading Bot (Backtrader + Alpaca)
- [x] `AutomationRunner` ES module — shared step execution with timestamp logs
- [x] GitHub Actions workflow — auto-deploy to GitHub Pages on push to `main`
- [x] `MISSION.md`, `GOALS.md`, `ROADMAP.md`

## Phase 2 — Content Expansion

**Goal:** Grow the encyclopedia to 20+ documented methods.

- [ ] Add 14+ new method pages to reach the 20-method target
- [ ] Suggested new methods:
  - [ ] Print-on-demand (Printful + Etsy integration)
  - [ ] AI content writing for affiliate blogs
  - [ ] YouTube automation (scripting + TTS + auto-upload)
  - [ ] Dropshipping with automated order fulfillment
  - [ ] Domain flipping with automated valuation tools
  - [ ] Selling digital products (Gumroad automation)
  - [ ] API arbitrage (price comparison + reselling)
  - [ ] Bug bounty hunting automation
  - [ ] Kindle Direct Publishing with AI-assisted writing
  - [ ] Social media growth + sponsored posts
- [ ] Standardize method page template into a reusable HTML include

## Phase 3 — Automation Depth

**Goal:** Make automations more capable and user-configurable.

- [ ] Allow users to save configuration (API keys, preferences) in
      `localStorage` so they only enter it once
- [ ] Add a global dashboard page showing all configured methods and their
      status
- [ ] Implement step retry logic in `AutomationRunner`
- [ ] Add progress persistence so automations resume after page reload
- [ ] Support export of automation logs as `.txt` or `.json`

## Phase 4 — Community & Ecosystem

**Goal:** Make contribution frictionless and grow the community.

- [ ] Method page generator script — scaffold a new method page from a template
      with one command
- [ ] Contribution guide for adding a new method (video walkthrough)
- [ ] Automated link-checking CI job to catch broken URLs in guides
- [ ] Case study pages — real user reports of income earned with each method
- [ ] i18n support — allow method pages in multiple languages
- [ ] Mirror on IPFS for censorship resistance

## Phase 5 — Infrastructure & Reliability

**Goal:** Make the platform robust for large-scale use.

- [ ] Move from inline `<script>` to bundled ES modules with a build step
- [ ] Add Playwright end-to-end tests for each method page automation
- [ ] Add Lighthouse CI for performance and accessibility budgets
- [ ] CDN caching and asset optimization
- [ ] Automated dependency update PRs via Dependabot or Renovate

---

_This roadmap is a living document. Priorities may shift based on community
feedback and contributions._
