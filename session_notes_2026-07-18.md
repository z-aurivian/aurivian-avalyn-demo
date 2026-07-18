# Session Notes — 2026-07-18 — Avalyn Demo Build

## What happened
Built the full Avalyn Pharmaceuticals demo from scratch, from a 1-page requirements PDF (`Avalyn Demo Requirements & Scope.pdf`) with almost no detail beyond: inhaled pipeline AP01/AP02/AP03, congresses ATS/ERS/EULAR, all 4 agents including new Nova, 6-month pilot, <$100k budget.

## Research phase
Deep-researched Avalyn Pharmaceuticals (real company, Nasdaq: AVLN, IPO'd Apr 2026) via background agent — company history/leadership, AP01 (inhaled pirfenidone)/AP02 (inhaled nintedanib)/AP03 (combo) pipeline detail, IPF/PPF/SSc-ILD therapeutic area context, 18 real KOLs (12 pulmonology + 6 rheumatology — the rheum angle matters because EULAR is a stated focus congress, tied to CTD-ILD/SSc-ILD), ATS/ERS/EULAR 2026 dates, and competitive landscape (United Therapeutics/TETON, Insmed/TPIP, Boehringer/nerandomilast, BMS/admilparant, Roche/Esbriet).

Full research preserved in `research/` folder in the demo repo:
- `RESEARCH_SUMMARY.md` — consolidated, build-ready summary with a "flags / do-not-fabricate" section
- `avalyn_company_pipeline_research.md`, `ipf_ild_therapeutic_area_research.md` — full source detail

## Build phase
Three sequential/parallel background agents did the actual build (this kept my own context clean while producing ~150+ tool calls of real work):
1. **Main demo build** — full `src/config/*` bundle, `src/data/*` fixes, Nova Tab1/2/3 hardcoded content rewrite, contamination sweep, build test. Fixed a pre-existing `k.tier` vs `k.engagementTier` bug in NovaTab2 (per the standing new-demo checklist item 9).
2. **Pulse Brief** — `public/pulse_avalyn_brief.html`, editorial cream/paper/teal design system, headline tension: Avalyn's unproven inhaled-antifibrotic thesis vs. United Therapeutics' TETON already proving inhaled-for-PF works (different mechanism). No audio track (no TTS tool available this session).
3. **Congress Capture app** (separate repo) — customized from the GSK capture app, congress = ATS 2026 (Orlando, May 15-20). Found and fixed two pre-existing functional bugs inherited from GSK's capture app: a social-post data shape mismatch (`SOCIAL_POSTS` fields didn't match what `SocialPostCard.js`/`SocialStream.js` actually read) and a missing `title` field on daily summaries that `DailySummaryModal.js` needed. **Worth checking whether the live GSK capture app has the same broken Social tab / Daily Brief modal.**

## Canonical shared data (reused verbatim across demo + capture app)
**MSL roster** (synthetic, since no real one exists):
| Name | Territory |
|---|---|
| Maya Sorensen | Northeast US |
| Derek Okafor | Southeast US |
| Priya Chandrasekaran | Midwest US |
| Jordan Reyes | West US |
| Sophie Bergman | UK & Ireland |
| Lukas Richter | Continental Europe |

**KOLs** (18 real): Pulmonology/ILD — Kevin R. Flaherty, Kevin K. Brown, Ganesh Raghu, Toby M. Maher, Fernando J. Martinez, Luca Richeldi, Vincent Cottin, Steven D. Nathan (tagged Skeptic — he's TETON's PI for competitor United Therapeutics), Naftali Kaminski, Ivan O. Rosas, Talmadge E. King Jr., Paul W. Noble. Rheumatology/SSc-ILD — Oliver Distler, Dinesh Khanna, Elizabeth R. Volkmann, Christopher P. Denton, Maureen D. Mayes, Francesco Del Galdo.

## Repos
- `git@github.com:z-aurivian/aurivian-avalyn-demo.git` — pushed to `main`
- `git@github.com:z-aurivian/aurivian-avalyn-capture-app.git` — pushed to `main`
- Both build cleanly (`CI=false npm run build`), only harmless unused-var ESLint warnings.

## Not yet done / next steps
- **Vercel deploy** — repos are pushed but not yet connected to Vercel projects. Needs user to confirm before I create new Vercel projects (production-facing action, first-time setup for these two repos).
- **Pulse Brief audio** — no ElevenLabs/TTS generation was available this session; brief has no audio player. Past demos (argenx, UCB, BSV) use ElevenLabs Dyego "News Presenter" voice — can be added later if wanted.
- Consider checking the live GSK capture app for the social-post/daily-summary bugs found and fixed here.
