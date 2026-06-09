---
'my-package': minor
---

Add prototype website for money-making encyclopedia (fixes #1)

- Add MARKET-RESEARCH.md with findings from 13 categories of money-making automation projects
- Add website/ directory with a GitHub Pages site featuring 9 money-making methods:
  - Bandwidth Sharing (Honeygain, EarnApp, IPRoyal Pawns, Repocket, Docker money4band stack)
  - Crypto Trading Bot (Freqtrade step-by-step guide)
  - Freelance Job Alerts (native saved-search alerts + RSS, no ToS violations)
  - Affiliate Content (Hugo static site + affiliate programs)
  - Microsoft Rewards (daily activity guide)
  - Stock Trading Bot (Backtrader/backtesting.py/NautilusTrader + Alpaca paper trading)
  - AI Data Labeling & RLHF (DataAnnotation, Outlier, Mercor)
  - GPU & Compute Sharing (Salad, Vast.ai, io.net)
  - Digital Products & Print-on-Demand (Gumroad, Etsy, Printful, Printify)
- Each page has a "Start making money" button and per-step "Run this step" buttons
- All automation is transparent: every action is logged with timestamps
- Users can always do everything manually or let the automation run steps for them
- Add GitHub Actions workflow (.github/workflows/pages.yml) to auto-deploy website to GitHub Pages
- All content is Public Domain (Unlicense)

2026-06 refresh — verified every external claim live (GitHub stars, licenses, payout minimums, doc URLs) and fixed outdated/broken information:

- Bandwidth Sharing: corrected payout minimums, moved money4band to the maintained `MRColorR` repo, refreshed the app list (IPRoyal Pawns, Repocket)
- Freelance Job Alerts: pivoted away from the retired Upwork RSS feed (now `410 Gone`) to native saved-search alerts and managed monitors (Vollna, GigRadar)
- Microsoft Rewards: replaced dead/archived bots with the maintained `TheNetsky/Microsoft-Rewards-Script`, fixed a false license claim, and added a high-risk warning
- Crypto & Stock Trading Bots: updated star counts (Freqtrade ~51K, Hummingbot ~19K, Backtrader ~22K) and added maintained alternatives (backtesting.py, NautilusTrader, zipline-reloaded)
- Added three new method pages (AI Data Labeling & RLHF, GPU & Compute Sharing, Digital Products & Print-on-Demand) and refreshed MARKET-RESEARCH.md / GOALS.md / ROADMAP.md accordingly
