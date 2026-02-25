---
'my-package': minor
---

Add prototype website for money-making encyclopedia (fixes #1)

- Add MARKET-RESEARCH.md with findings from 10 categories of money-making automation projects
- Add website/ directory with a GitHub Pages site featuring 6 money-making methods:
  - Bandwidth Sharing (Honeygain, EarnApp, Docker stack)
  - Crypto Trading Bot (Freqtrade step-by-step guide)
  - Freelance Job Alerts (RSS-to-email automation, no ToS violations)
  - Affiliate Content (Hugo static site + affiliate programs)
  - Microsoft Rewards (daily activity automation)
  - Stock Trading Bot (Backtrader + Alpaca paper trading)
- Each page has a "Start making money" button and per-step "Run this step" buttons
- All automation is transparent: every action is logged with timestamps
- Users can always do everything manually or let the automation run steps for them
- Add GitHub Actions workflow (.github/workflows/pages.yml) to auto-deploy website to GitHub Pages
- All content is Public Domain (Unlicense)
