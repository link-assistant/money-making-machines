# MARKET-RESEARCH.md

Market research for the **money-making-machines** project — an Unlicense (Public Domain) encyclopedia for making money online with automated software.

---

## Table of Contents

1. [Freelance Automation Tools](#1-freelance-automation-tools)
2. [Crypto / DeFi Bots](#2-crypto--defi-bots)
3. [Content Monetization Automation](#3-content-monetization-automation)
4. [E-Commerce Automation](#4-e-commerce-automation)
5. [Survey / Reward Bots](#5-survey--reward-bots)
6. [Ad Revenue Automation](#6-ad-revenue-automation)
7. [Stock / Investment Automation](#7-stock--investment-automation)
8. [Similar Encyclopedias and Guides](#8-similar-encyclopedias-and-guides)
9. [Workflow / General Automation Platforms](#9-workflow--general-automation-platforms)
10. [Bandwidth Sharing Passive Income](#10-bandwidth-sharing-passive-income)
11. [AI Data Labeling & RLHF](#11-ai-data-labeling--rlhf)
12. [GPU & Compute Sharing](#12-gpu--compute-sharing)
13. [Digital Products & Print-on-Demand](#13-digital-products--print-on-demand)
14. [Key Takeaways and Gaps](#14-key-takeaways-and-gaps)

---

## 1. Freelance Automation Tools

Tools that automate job discovery, proposal writing, or gig management on Upwork, Fiverr, Freelancer, and similar platforms.

| Project                                    | URL                                                                                                                          | License                | Automation? | Description                                                                                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upwork-AI-jobs-applier                     | https://github.com/kaymen99/Upwork-AI-jobs-applier                                                                           | MIT                    | Yes         | Python-based AI agent that finds and qualifies Upwork jobs, writes personalized cover letters, and prepares interview answers based on user skills. Uses LLM (large language model) agents. |
| Upwork-Auto-Jobs-Applier (UpworkScribe AI) | https://github.com/AIXerum/Upwork-Auto-Jobs-Applier-using-AI                                                                 | Not specified          | Yes         | Scrapes Upwork for job listings, classifies job matches via AI, and generates personalized proposals automatically.                                                                         |
| upwork-bot                                 | https://github.com/itsmeeep/upwork-bot                                                                                       | Not specified          | Yes         | JavaScript bot that reads Upwork RSS feeds and sends Discord notifications when new matching jobs are posted. Scheduled interval-based alerting.                                            |
| Upwork-Job-Scraper                         | https://github.com/calebmwelsh/Upwork-Job-Scraper                                                                            | Not specified          | Yes         | Playwright-based web scraper that automates Upwork job searches and saves results to CSV or JSON.                                                                                           |
| fiverr_scraper                             | https://github.com/omar-elmaria/fiverr_scraper                                                                               | Not specified          | Partial     | Python script that crawls gig listings from Fiverr categories for market research and competitive analysis.                                                                                 |
| fiverr-gig-optimizer                       | https://github.com/madezmedia/fiverr-gig-optimizer                                                                           | Not specified          | Yes         | AI-powered Fiverr gig optimization platform built with Python and Streamlit; analyzes market data to recommend gig improvements.                                                            |
| n8n multi-platform workflow                | https://n8n.io/workflows/7782-automate-job-discovery-and-ai-proposals-across-upwork-freelancer-guru-and-pph-with-openrouter/ | n8n (source-available) | Yes         | n8n workflow that monitors RSS feeds from Upwork, Freelancer, Guru, and PeoplePerHour, generates AI proposals, and logs to Google Sheets.                                                   |

**Notes:**

- Most platforms (Upwork, Fiverr) have Terms of Service that restrict unauthorized bots. These tools exist but carry account-ban risk.
- The most defensible automation is notification/alerting (RSS watchers) rather than automated applying.
- AI-powered proposal drafting (human-in-the-loop) is the safest middle ground.

---

## 2. Crypto / DeFi Bots

Open-source trading bots, arbitrage bots, yield farming tools, and market-making software for cryptocurrency markets.

| Project                     | URL                                                         | License       | Stars | Description                                                                                                                                                                     |
| --------------------------- | ----------------------------------------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Freqtrade                   | https://github.com/freqtrade/freqtrade                      | GPL-3.0       | ~51K  | The most popular open-source crypto trading bot. Python. Supports all major exchanges via CCXT. Has backtesting, Telegram/WebUI control, and FreqAI (machine learning module).  |
| Jesse                       | https://github.com/jesse-ai/jesse                           | MIT           | ~7.3K | Advanced Python crypto trading framework focused on accuracy in backtesting, strategy optimization, and live trading. Has JesseGPT AI assistant for writing strategies.         |
| OctoBot                     | https://github.com/Drakkar-Software/OctoBot                 | GPL-3.0       | ~5.1K | Modular Python trading robot supporting DCA, Grid, AI, and TradingView strategies. Serves 20,000+ users. Supports 15+ exchanges including Binance and Hyperliquid.              |
| Hummingbot                  | https://github.com/hummingbot/hummingbot                    | Apache-2.0    | ~19K  | Open-source framework for high-frequency market-making and arbitrage on 140+ trading venues (CEX + DEX). $34B+ in user trading volume in the past year.                         |
| Superalgos                  | https://github.com/Superalgos/Superalgos                    | Apache-2.0    | ~4K   | Visual drag-and-drop crypto bot designer with integrated charting, data mining, backtesting, paper trading, and multi-server deployment. Community-driven with native SA token. |
| defi-bot (ExtropyIO)        | https://github.com/ExtropyIO/defi-bot                       | Not specified | —     | Node.js DeFi arbitrage bot tutorial: fetches prices across DEXes, detects arbitrage, executes via flash loans on Uniswap forks. Educational reference.                          |
| Defi-Trading-Arbitrage-Bot  | https://github.com/mcgraneder/Defi-Trading-Arbitrage-Bot    | Not specified | —     | Solidity + JS DeFi arbitrage bot using flash loans across Uniswap V2 forks (Sushiswap, Crowswap, Sakeswap).                                                                     |
| ArbitrageBot (fendouai)     | https://github.com/fendouai/ArbitrageBot                    | Not specified | —     | Detects arbitrage opportunities across exchanges, includes trading clients.                                                                                                     |
| OpenTrader                  | https://github.com/Open-Trader/opentrader                   | Not specified | —     | Open-source crypto trading bot with DCA and GRID strategies; includes a web UI.                                                                                                 |
| awesome-crypto-trading-bots | https://github.com/botcrypto-io/awesome-crypto-trading-bots | CC0/open      | —     | Curated awesome-list of crypto trading bots, TA libraries, market data sources, and data providers.                                                                             |
| best-of-algorithmic-trading | https://github.com/merovinh/best-of-algorithmic-trading     | Not specified | —     | Ranked list of 93+ algorithmic trading open-source projects (240K total stars) across 7 categories. Updated weekly.                                                             |

**Key patterns observed:**

- GPL-3.0 is the dominant license (Freqtrade, OctoBot). Apache-2.0 used by Hummingbot and Superalgos. Jesse uses MIT.
- None use Unlicense/Public Domain — a gap this project can fill with educational content.
- Flash loan arbitrage bots are common but require smart contract expertise and ETH gas.

---

## 3. Content Monetization Automation

Tools for automated blog post generation, YouTube automation, affiliate content, and SEO-driven publishing.

| Project                                     | URL                                                                           | License       | Automation? | Description                                                                                                                                          |
| ------------------------------------------- | ----------------------------------------------------------------------------- | ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| AutoBlog-AI-Blog-Generator                  | https://github.com/ikramhasan/AutoBlog-AI-Blog-Generator                      | Not specified | Yes         | Generates hundreds of blog posts for free using local LLMs. Batch blog creation pipeline.                                                            |
| AI-Generated-WordPress-Blog-Post-Automation | https://github.com/imgeraldalinio/AI-Generated-WordPress-Blog-Post-Automation | Not specified | Yes         | Automates WordPress blog post generation using AI; integrates OpenAI with WordPress REST API.                                                        |
| YouTube-Automation-Bot                      | https://github.com/PrintN/YouTube-Automation-Bot                              | MIT           | Yes         | Finds, creates, and uploads YouTube videos fully automatically using the YouTube Data API. Can run on GitHub Actions schedule (daily video uploads). |
| BotTuber                                    | https://github.com/sam5epi0l/BotTuber                                         | Not specified | Yes         | Fully automated YouTube channel management: automated title, description, tags, watermark. Supports both interactive and fully automated modes.      |
| youtube-automation-agent                    | https://github.com/darkzOGx/youtube-automation-agent                          | Not specified | Yes         | AI-powered YouTube channel manager using Gemini or OpenAI. Creates, optimizes, and publishes videos 24/7. No coding required.                        |
| AI-Content-Studio                           | https://github.com/naqashafzal/AI-Content-Studio                              | Not specified | Yes         | 100% free open-source tool that writes scripts, generates voiceovers, creates videos, and uploads them automatically. Targets YouTube growth.        |
| Python-YouTube-Automation                   | https://github.com/Flexonze/I-automated-a-YouTube-channel-using-Python-and-AI | Not specified | Yes         | Demonstrates fully automated YouTube channel using Python and AI; educational walkthrough.                                                           |
| mangosqueezy                                | https://github.com/mangosqueezy/mangosqueezy                                  | Not specified | Yes         | AI agent to find and manage affiliates for businesses automatically.                                                                                 |
| Smart Affiliate Link Manager (WordPress)    | https://wordpress.org/plugins/smart-affiliate-link-manager/                   | GPL-2.0       | Yes         | WordPress plugin that automates affiliate link insertion across blog posts. Saves keywords/links in WP database.                                     |
| AffiliatePress                              | https://github.com/reputeinfosystems/affiliatepress-affiliate-marketing       | GPL-2.0       | Yes         | WordPress plugin for creating and managing affiliate programs, tracking commissions, with email automation for affiliate communication.              |
| eLitius                                     | https://github.com/intelliants/elitius                                        | Not specified | Partial     | Free open-source affiliate tracking software (PHP/MySQL) with customizable templates.                                                                |

**Key patterns observed:**

- YouTube automation is an active and growing area with many projects in 2024-2025.
- Most content automation tools use AI APIs (OpenAI, Gemini) — API cost is the main barrier.
- Affiliate link automation for WordPress is well-served by GPL plugins but lacks a Public Domain option.

---

## 4. E-Commerce Automation

Dropshipping bots, Amazon price tracking, inventory management, and repricing tools.

| Project                                              | URL                                                                                       | License        | Automation? | Description                                                                                                                                                      |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dropshipping-scraper                                 | https://github.com/TodorYadkov/dropshipping-scraper                                       | Not specified  | Yes         | Scrapes product data from multiple e-commerce platforms for dropshipping research and price monitoring.                                                          |
| Automated-Dropshipping-Price-Sentiment-Analysis-Tool | https://github.com/Pasindunabesinghe/Automated-Dropshipping-Price-Sentiment-Analysis-Tool | Not specified  | Yes         | UiPath-based automation: searches Amazon and BestBuy, performs sentiment analysis on reviews, generates reports, automates email delivery.                       |
| PriceGhost                                           | https://github.com/clucraft/PriceGhost                                                    | Not specified  | Yes         | Self-hosted price tracking app that monitors products from any website using multiple scraping strategies (JSON-LD, meta tags, CSS selectors, headless browser). |
| amazon-price-tracker (GitHub topic)                  | https://github.com/topics/amazon-price-tracker                                            | Various        | Yes         | Hub for multiple open-source Amazon price tracker projects with varied licenses.                                                                                 |
| Shopify GitHub org                                   | https://shopify.github.io/                                                                | Apache-2.0/MIT | Partial     | Shopify open-source tools (themes, APIs, SDKs) that can be used to build automated storefronts.                                                                  |

**Commercial tools noted (non-open-source, but market context):**

- **DSers** — AliExpress official partner, free tier, bulk order processing for Shopify/WooCommerce.
- **Inventory Source** — Automated dropship inventory sync with Shopify, WooCommerce, Amazon, Walmart.
- **Tactical Arbitrage** — Online arbitrage product research and automated comparisons (paid).
- **CamelCamelCamel** / **Keepa** — Amazon price history trackers (free, proprietary).

**Key patterns observed:**

- True open-source dropshipping automation is sparse; most mature tools are SaaS.
- Price scraping tools are well-represented but Amazon actively blocks scrapers.
- A Public Domain step-by-step guide with open-source code would fill a clear gap.

---

## 5. Survey / Reward Bots

Automated survey completion, Microsoft Rewards farming, and points accumulation tools.

| Project                  | URL                                                        | License       | Automation? | Description                                                                                                                                             |
| ------------------------ | ---------------------------------------------------------- | ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft-Rewards-Farmer | https://github.com/scarpex/Microsoft-Rewards-Farmer        | Not specified | Yes         | Selenium-based bot that farms Microsoft Reward Points by automating Bing searches, quizzes, and daily tasks.                                            |
| ms-rewards-automation    | https://github.com/hei1sme/ms-rewards-automation           | Not specified | Yes         | Python + Selenium automation for Microsoft Rewards tasks using a persistent Edge browser session. Performs searches and completes Daily Set activities. |
| Microsoft-Rewards-Bot    | https://github.com/blackluv/Microsoft-Rewards-Bot          | Not specified | Yes         | Runs Selenium in headless mode to complete Bing search requests and quizzes for all three platforms (PC, Edge, mobile).                                 |
| pulse-survey-bot         | https://github.com/jerhadf/pulse-survey-bot                | Not specified | Yes         | Bot to automatically complete surveys on the Pulse website; bypasses timers and accumulates redeemable reward points.                                   |
| super-survey-bot-desktop | https://github.com/codeWonderland/super-survey-bot-desktop | Not specified | Yes         | Desktop app that answers paid surveys automatically.                                                                                                    |
| qi-bot                   | https://github.com/jbyrneie/qi-bot                         | Not specified | Yes         | Automates survey tasks on the qi survey platform.                                                                                                       |

**Notes:**

- Microsoft Rewards is one of the most documented and legitimate reward automation targets; Microsoft allows API-based interactions within limits.
- Most paid-survey automation violates Terms of Service and risks account bans.
- Earnings are low (typically $1-5/month for Rewards points, redeemable for gift cards).

---

## 6. Ad Revenue Automation

Tools and techniques for maximizing ad revenue, header bidding, programmatic advertising optimization.

| Project       | URL                                     | License    | Automation? | Description                                                                                                                                                                                                                 |
| ------------- | --------------------------------------- | ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prebid.js     | https://github.com/prebid/Prebid.js/    | Apache-2.0 | Yes         | The leading open-source header bidding library. Enables publishers to run simultaneous real-time auctions from hundreds of ad demand partners before calling the ad server. Can increase revenue 35-65% over AdSense alone. |
| Prebid Server | https://github.com/prebid/prebid-server | Apache-2.0 | Yes         | Server-side companion to Prebid.js. Offloads bidder calls from the browser to a server for faster page loads and app monetization.                                                                                          |

**Conceptual-only / ToS-violating (not recommended, noted for research completeness):**

- AdSense-Income (https://github.com/CryptoidCoder/AdSense-Income) — A Python bot concept claiming to generate AdSense earnings; violates Google's policies and would result in account termination. Listed here as an example of what NOT to build.

**Key patterns observed:**

- Legitimate ad revenue automation means header bidding (Prebid.js), ad placement optimization, and A/B testing — not click fraud.
- Google AdSense Auto Ads natively automate ad placement using machine learning (built-in, no third-party needed).
- Click fraud / invalid traffic automation is explicitly prohibited and actively detected by Google; accounts are permanently banned.
- Prebid.js is the only significant open-source tool in this space and is production-grade.

---

## 7. Stock / Investment Automation

Open-source algorithmic trading frameworks for stocks, crypto, and other financial instruments.

| Project           | URL                                               | License    | Stars | Language    | Description                                                                                                                                               |
| ----------------- | ------------------------------------------------- | ---------- | ----- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Freqtrade         | https://github.com/freqtrade/freqtrade            | GPL-3.0    | ~51K  | Python      | Crypto-focused but also supports stock data. ML strategy optimization (FreqAI), backtesting, Telegram control.                                            |
| Jesse             | https://github.com/jesse-ai/jesse                 | MIT        | ~7.3K | Python      | Clean crypto trading framework with emphasis on correct backtesting. JesseGPT AI helps write strategies.                                                  |
| Hummingbot        | https://github.com/hummingbot/hummingbot          | Apache-2.0 | ~19K  | Python      | Market-making and arbitrage bot for 140+ crypto exchanges (CEX + DEX).                                                                                    |
| Backtrader        | https://github.com/mementum/backtrader            | GPL-3.0    | ~22K  | Python      | General-purpose Python backtesting library for stocks and crypto. Clean API, local execution. Author stopped active development ~2018; still widely used. |
| backtesting.py    | https://github.com/kernc/backtesting.py           | AGPL-3.0   | ~8K   | Python      | Lightweight, fast backtesting framework; popular maintained alternative to Backtrader.                                                                    |
| NautilusTrader    | https://github.com/nautechsystems/nautilus_trader | LGPL-3.0   | ~23K  | Python/Rust | High-performance algorithmic trading platform with event-driven backtesting and live trading.                                                             |
| QuantConnect LEAN | https://github.com/QuantConnect/Lean              | Apache-2.0 | ~9K   | C#/Python   | Full algorithmic trading engine supporting stocks, futures, options, crypto. Cloud and local.                                                             |
| Zipline-reloaded  | https://github.com/stefan-jansen/zipline-reloaded | Apache-2.0 | ~1.5K | Python      | Maintained fork of Quantopian's now-abandoned Zipline event-driven backtester.                                                                            |
| Superalgos        | https://github.com/Superalgos/Superalgos          | Apache-2.0 | ~4K   | JavaScript  | Visual bot designer with charting, data mining, multi-server deployment.                                                                                  |
| OctoBot           | https://github.com/Drakkar-Software/OctoBot       | GPL-3.0    | ~5.1K | Python      | Modular crypto bot with AI connectors, TradingView integration, 40+ built-in strategies.                                                                  |

**Curated lists:**
| Resource | URL | Description |
|---|---|---|
| best-of-algorithmic-trading | https://github.com/merovinh/best-of-algorithmic-trading | 93 ranked projects, 240K total stars, updated weekly. |
| awesome-crypto-trading-bots | https://github.com/botcrypto-io/awesome-crypto-trading-bots | Curated list of bots, TA libraries, data providers. |

**Key patterns observed:**

- GPL-3.0 is common (Freqtrade, Backtrader, OctoBot). Apache-2.0 for LEAN, Zipline, Hummingbot. MIT for Jesse.
- None use Unlicense — a Public Domain version would be unique.
- Stock trading automation (vs crypto) has higher regulatory risk and broker API complexity.

---

## 8. Similar Encyclopedias and Guides

Existing publicly available comprehensive guides, wikis, and curated lists for making money online.

| Project                                 | URL                                                      | License       | Description                                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| awesome-passive-income (yourincomehome) | https://github.com/yourincomehome/awesome-passive-income | Not specified | Curated list of ways to make money online. Covers affiliate networks, email marketing, trading, survey sites (Swagbucks, Toluna, InboxDollars), and Patreon. |
| awesome-passive-income (kamotos)        | https://github.com/kamotos/awesome-passive-income        | Not specified | Another curated list of passive income methods.                                                                                                              |
| awesome-online-earning                  | https://github.com/onmyway133/awesome-online-earning     | Not specified | Ways to earn extra money online; includes survey sites (Vindale).                                                                                            |
| Wiki Money Online                       | https://www.moneyonline.wiki/                            | Not specified | Blog-style wiki covering strategies like bandwidth sharing and website monetization. Not a structured encyclopedia.                                          |
| Passive-Guide (sediklaabidi)            | https://github.com/sediklaabidi/Passive-Guide            | Not specified | Guide and code for building a crypto arbitrage bot for passive income.                                                                                       |

**Key gap identified:**
All existing "awesome lists" are static Markdown files with links — they do not have:

- Interactive step-by-step guides
- Automation execution (a "Start" button)
- A clear Public Domain / Unlicense license
- Per-step manual fallback alongside automation

This project (money-making-machines) would be the **first Public Domain interactive encyclopedia** for automated money-making with runnable steps.

---

## 9. Workflow / General Automation Platforms

General-purpose automation tools that can be applied to money-making workflows.

| Project      | URL                                          | License                                                            | Automation? | Description                                                                                                                                                                             |
| ------------ | -------------------------------------------- | ------------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n8n          | https://github.com/n8n-io/n8n                | Sustainable Use License (source-available, self-hostable for free) | Yes         | Node-based workflow automation. Connects 400+ services. Strong for freelance job monitoring, content pipelines, e-commerce alerts. People are selling n8n workflows for $3K-$10K/month. |
| Activepieces | https://github.com/activepieces/activepieces | MIT                                                                | Yes         | Open-source Zapier alternative under MIT license. Integrates with OpenAI, WordPress, and many SaaS tools. Good for blog automation pipelines.                                           |

---

## 10. Bandwidth Sharing Passive Income

Docker stacks and tools for earning passive income by sharing unused internet bandwidth.

| Project      | URL                                          | License       | Automation? | Description                                                                                                                                                                                                           |
| ------------ | -------------------------------------------- | ------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| money4band   | https://github.com/MRColorR/money4band       | Not specified | Yes         | Multi-platform self-updating Docker Compose stack that runs Honeygain, EarnApp, IPRoyal Pawns, PacketStream, Peer2Profit, Repocket, Earnfm, and more. Includes auto-updater and web dashboard. Pays in USD or crypto. |
| CashFactory  | https://github.com/OlivierGaland/CashFactory | Not specified | Yes         | Lightweight Docker image running multiple passive income bandwidth-sharing apps (Honeygain, EarnApp, IPRoyal Pawns, PacketStream, Peer2Profit).                                                                       |
| Wifi-Cashbot | https://github.com/PoPzQ/Wifi-Cashbot        | Not specified | Yes         | Docker stack for passive bandwidth income. Runs Honeygain and EarnApp among others.                                                                                                                                   |

**Earnings context:** Typically $1-5/month per device from bandwidth alone; referral programs generate the majority of income for active users.

**Security note:** Proxyware apps share your IP address with third parties. Running in Docker containers reduces but does not eliminate risk. Trend Micro has documented risks including being used for malicious traffic routing.

---

## 11. AI Data Labeling & RLHF

The AI training boom (2024–2026) created strong, ongoing demand for humans to produce and evaluate model-training data (RLHF — Reinforcement Learning from Human Feedback). Unlike old microtask/survey sites, these platforms pay competitively and prioritise specialised expertise.

| Platform       | URL                             | Model                                                                       | Pay & payout                              |
| -------------- | ------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| DataAnnotation | https://www.dataannotation.tech | Writing and reviewing AI training data; preference rating, response writing | Typically ~$15–$40+/hr; weekly PayPal     |
| Outlier        | https://outlier.ai              | Expert RLHF projects (coding, STEM, languages); run by Scale AI             | Rate varies by project/skill tier; PayPal |
| Mercor         | https://mercor.com              | Matches vetted experts to AI-training and interview-based gigs              | Project/hourly rates; varies by expertise |

**Key patterns observed:**

- Pay scales sharply with verified expertise (programming, math, law, medicine, non-English fluency).
- Work is **active**, not passive, but offers flexible, self-scheduled hours.
- Platforms continuously score accuracy; quality determines access to higher-paid queues.
- Legitimate platforms never charge a fee to start — this is a common scam signal to flag in guides.
- This is a genuinely current, high-demand category that did not meaningfully exist in earlier money-making encyclopedias.

---

## 12. GPU & Compute Sharing

The AI compute shortage made spare GPU cycles a sellable commodity. Marketplaces let owners of gaming/workstation GPUs rent idle capacity to AI training, inference, and rendering workloads.

| Platform | URL               | Model                                                          | Notes                                                       |
| -------- | ----------------- | -------------------------------------------------------------- | ----------------------------------------------------------- |
| Salad    | https://salad.com | Desktop app shares your GPU while idle; easiest for beginners  | Pays cash or rewards; sandboxed container workloads         |
| Vast.ai  | https://vast.ai   | GPU-rental marketplace; you host and set your own hourly price | Higher earning potential, more setup (Docker + host client) |
| io.net   | https://io.net    | Decentralised GPU network for AI workloads                     | Crypto payouts                                              |

**Key patterns observed:**

- Earnings depend heavily on hardware — a modern high-VRAM card (e.g. RTX 4090) can earn roughly **$50–$200+/month** when well-utilised; older/low-VRAM cards earn little.
- **Electricity cost must be subtracted** — in high-cost regions it can erase the profit. This is the critical caveat for any honest guide.
- Reputable platforms sandbox third-party jobs; users should never run untrusted code outside the official client.
- Semi-passive: setup is one-time, then the client runs in the background with auto-start.

---

## 13. Digital Products & Print-on-Demand

Create-once-sell-forever products where the platform automates delivery and payment. Two complementary models: digital downloads (near-zero marginal cost) and print-on-demand/POD (no inventory held).

| Platform | URL                      | Model                                                               | Notes                                                     |
| -------- | ------------------------ | ------------------------------------------------------------------- | --------------------------------------------------------- |
| Gumroad  | https://gumroad.com      | Simplest digital-download storefront; instant automated delivery    | You own the customer relationship; flat + percentage fees |
| Etsy     | https://www.etsy.com     | Marketplace with large built-in traffic for printables and POD      | Listing + transaction fees; strong organic discovery      |
| Printful | https://www.printful.com | POD fulfilment connecting to Etsy/Shopify; prints & ships per order | No inventory; you keep margin over base cost              |
| Printify | https://printify.com     | POD with a wide partner network, often lower base prices            | No inventory; connects to major marketplaces              |
| Canva    | https://www.canva.com    | Free design tool for products and POD artwork                       | Export print-ready PNG/PDF                                |

**Key patterns observed:**

- Fulfilment (delivery, printing, shipping, payment) is **fully automated**; the upfront work is design and listing.
- Getting **sales** still requires good designs, niche focus, and some marketing — listing alone is not income.
- Copyright/trademark compliance is essential: POD platforms remove infringing listings and ban repeat offenders. Guides must stress original work.
- A catalogue of many small earners compounds over time — a realistic scaling path.

---

## 14. Key Takeaways and Gaps

### What already exists:

- Many individual bots and tools exist across every category.
- Curated "awesome lists" exist but are static Markdown files with no interactivity.
- Most serious tools (Freqtrade, Hummingbot) have GPL-3.0 or Apache-2.0 licenses.

### What is missing (opportunity for this project):

1. **Public Domain (Unlicense) coverage** — No significant money-making automation encyclopedia uses Unlicense. This project would be the first.
2. **Interactive, step-by-step guides** — Existing guides are read-only. No project offers a "do this step manually OR click to automate it" UX.
3. **Beginner-accessible encyclopedia** — Most tools require significant technical knowledge. A structured encyclopedia with progressive disclosure (simple text → automated script) would fill a real gap.
4. **Cross-category coverage under one roof** — Existing awesome lists link out to disparate projects. A unified encyclopedia with consistent page structure per method would be unique.
5. **Transparent automation** — No existing project shows users exactly what each automation step does before executing it; this project's "replay step by step" concept is novel.

### Recommended encyclopedia entries (based on automation maturity and current relevance):

1. **AI data labeling & RLHF (DataAnnotation/Outlier/Mercor)** — Highest current demand; legitimate, competitive pay, beginner-accessible.
2. **Bandwidth sharing (Honeygain/EarnApp/IPRoyal Pawns)** — Zero-effort truly passive income; Docker (money4band) makes it reproducible.
3. **Digital products & print-on-demand (Gumroad/Etsy/Printful/Printify)** — Create-once, automated fulfilment forever; strong scaling path.
4. **Freqtrade crypto trading** — Most popular, best documented, GPL-3.0, large community.
5. **Microsoft Rewards automation** — Low income but legitimate and well-documented (automation is now higher-risk; manual is recommended).
6. **GPU & compute sharing (Salad/Vast.ai/io.net)** — Monetises hardware you already own; semi-passive once configured.

### Notes from the 2026-06 refresh (broken/changed since the original research):

- **money4band** moved to the `MRColorR` GitHub namespace and now uses a guided Python setup (`python3 main.py`) rather than the older repo path.
- **Upwork RSS job feeds** were retired (Aug 2024) — `/ab/feed/jobs/rss` now returns `410 Gone`. Per-keyword Freelancer feeds are likewise unreliable; guides pivoted to native saved-search alerts and managed monitors (Vollna, GigRadar).
- Several **Microsoft Rewards bots** are dead: `farshadz1997/Microsoft-Rewards-Bot` is disabled and `charlesbel/Microsoft-Rewards-Bot` was archived (2024). `TheNetsky/Microsoft-Rewards-Script` (GPL-3.0, Playwright) is the actively-maintained option — but automation carries real account-ban risk.
- Star counts grew: Freqtrade ~51K, Hummingbot ~19K, Backtrader ~22K (its author stopped active development ~2018). Zipline is now best used via the maintained `zipline-reloaded` fork.

---

_Research originally conducted: 2026-02-24. Refreshed: 2026-06-09. All URLs verified as active at time of the refresh._

_This document is released under the [Unlicense](LICENSE) — Public Domain._
