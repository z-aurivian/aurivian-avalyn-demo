# Aurivian — Future-State Data Sources Reference

*Compiled 2026-07-14. Covers the data categories a production Aurivian (ARIA congress intelligence, LUCA KOL intelligence, NOVA medical insight + strategy-to-action) would need to ingest. Demos today run on synthetic/config-driven data; this document maps what real-world sourcing would require and cost.*

## Summary

Every demo we've built to date runs on hand-authored config data standing in for the real intelligence layer Aurivian would need in production. This document inventories what that real layer looks like: free/open government and public sources (literature, trial registries, FDA/CMS/NPI data, grants, patents, guidelines) that cover a meaningful baseline at no cost, alongside the paid enterprise vendors (IQVIA, H1, Definitive Healthcare/Monocl, Citeline, Komodo, Symplur, Within3, and others) needed for KOL identification, prescribing/claims data, congress intelligence, and social listening. The headline finding is that pricing across nearly this entire paid landscape is quote-only — vendors don't publish rate cards — so budget planning should work from ranges and flagged risk areas (opaque enterprise pricing, 2026's sharp social-API cost shifts, the lack of official congress APIs, regional regulatory gaps, and NCCN's commercial licensing requirement) rather than fixed numbers until we're in direct procurement conversations.

**How to read pricing in this doc:** almost every enterprise pharma-data vendor is quote-only — no public rate card. Where a number appears, its source is noted in parentheses. Numbers marked "third-party estimate" are analyst/press figures, not vendor-published, and should be treated as directional only, not used in a pricing model.

---

## Part 1 — Free / Open Data Sources

### Medical literature & real-world evidence
| Source | What it provides | Access notes |
|---|---|---|
| PubMed / PMC (NCBI E-utilities) | Biomedical literature, abstracts, full text (PMC subset) | Free, no key; 3 req/sec (10 with free API key) |
| Europe PMC | Literature + preprints, citation links | Free, no key/registration, full REST API |
| Semantic Scholar | Literature graph, citations, embeddings | Free; shared rate-limit pool, higher throughput with free API key |
| CORE | Open-access aggregator, 200M+ papers | Free with rate limits; faster tiers via paid membership |
| bioRxiv / medRxiv | Preprints | Free metadata API; full text via AWS S3 for text-mining |

### Clinical trials registries
| Source | What it provides | Access notes |
|---|---|---|
| ClinicalTrials.gov (API v2) | US + global trial registrations, statuses, results | Free, no auth |
| EU CTIS / EudraCT | EU trial registrations | Free web access; no official API (undocumented public JSON endpoint exists) |
| WHO ICTRP | Global trial registry aggregator | Free; no formal REST API — CSV/XML + bulk-request form |
| ISRCTN | UK/international trial registry | Free data access via API (registering a *new* trial costs GBP 250 — data access itself is free) |

### Regulatory, safety & payments transparency
| Source | What it provides | Access notes |
|---|---|---|
| FDA openFDA API | Adverse events, labeling, recalls, enforcement actions | Free; no key: 240 req/min, 1,000/day per IP. With free key: 240 req/min, 120,000/day |
| FDA Orange Book | Approved drug products + patent/exclusivity data | Free, bulk download |
| CMS Open Payments (Sunshine Act) | HCP financial-relationship disclosures (2024: 16.16M records / $13.18B) | Free, no auth; REST API + bulk download; annual refresh by June 30 |
| NPPES NPI Registry | HCP identity/specialty verification | Free; no official rate limit but undocumented throttling on batch use; 200 records/request max |
| EMA open data (ePI API) | EU medicine authorizations, EPARs | Free, no key required |
| Health Canada Drug Product Database | Canadian drug approvals | Free API, JSON/XML, nightly updates |
| PMDA (Japan) | Japanese approvals/safety | Free web search only — **no confirmed public REST API**; would need bespoke scraping/integration |

### Grants, funding & patents
| Source | What it provides | Access notes |
|---|---|---|
| NIH RePORTER API | US federal grant funding tied to investigators/institutions | Free, no auth, RESTful v2 |
| USPTO / Google Patents | Patent filings, IP lineage | Free |
| grants.gov | Federal grant opportunities | Free API; one report of blocked datacenter IPs — pilot-test before relying on it |
| SEC EDGAR | Public company filings, deal disclosures | Free, well-established public API |

### Clinical guidelines
| Source | What it provides | Access notes |
|---|---|---|
| ECRI Guidelines Trust | Cross-society guideline repository (successor to AHRQ's retired National Guideline Clearinghouse) | Free, registration required |
| NICE (UK) | UK clinical guidelines | Free public access |
| AAAAI / ACR / ESMO guideline pages | Society-specific guidelines | Free public access (format/depth varies by society) |
| NCCN Guidelines | Oncology guidelines | Free for non-commercial citation — **fee required for commercial/pharma-sponsored use**, scoped by viewership and license term; quote via NCCN's Permissions Request Form. *Flag: Aurivian's use would count as commercial.* |

### Social / digital listening (low-cost tier)
| Source | What it provides | Access notes |
|---|---|---|
| YouTube Data API v3 | Medical education video engagement | Free; 10,000 quota units/day default (a search call costs 100 units, ~100 searches/day cap); no paid tier, only request-based quota increases |

---

## Part 2 — Paid Data Sources

*Grouped by function. Every entry below is enterprise/quote-only unless a specific figure is cited.*

### KOL / HCP identification & profiling
| Vendor | What it provides | Pricing |
|---|---|---|
| IQVIA OneKey | Global HCP/HCO reference data — 25M+ HCPs, 6M+ HCOs, 118 countries | Not publicly disclosed. Unverified third-party estimates cite ~$50K+/yr |
| Definitive Healthcare (incl. Monocl) | HCP/HCO data platform; Monocl is the dedicated KOL-ID product (16M+ expert profiles) | "Contact sales" — no rate card |
| H1.co (HCP Universe) | AI-driven global KOL/HCP database linking publications, trials, affiliations, social activity, "rising star" scoring | Demo-request only, no public pricing. **Closest direct analog to Aurivian's LUCA module** |
| Veeva Link (Key People) | Curated KOL/digital-opinion-leader database | Not publicly disclosed |
| Clarivate Cortellis (KOL module) | KOL scoring blending claims/publications/social data | Not publicly disclosed |
| Anju Software (TA Scan / TA Scan CRM) | KOL identification + Medical Affairs Suite | Not publicly disclosed |
| Doximity Marketing Solutions | Physician network (2M+ US MDs), sponsored content/engagement — not itself an ID tool | Campaign-based, no public rate card |

### Medical literature & RWE (paid tier)
| Vendor | What it provides | Pricing |
|---|---|---|
| Elsevier Scopus | ~90M+ record citation database | Not publicly disclosed; API access requires a separate quoted commercial "Data as a Service" license |
| Clarivate Web of Science | Multidisciplinary citation index | Not publicly disclosed; public-record institutional "technology fees" alone have ranged $0–$13,000/yr across universities |
| Dimensions.ai (full Analytics API) | Extended literature/grants/patents linkage graph | Quote-only. (A commonly-cited $10–30K/yr figure is a stale 2018 estimate — not verified current) |
| OVID / Wolters Kluwer | Clinical literature platform (MEDLINE, licensed Embase) | Not publicly disclosed; no self-serve API found |

### Clinical trial intelligence (paid tier)
| Vendor | What it provides | Pricing |
|---|---|---|
| Citeline Trialtrove / Sitetrove (Norstella) | Trial-design competitive intelligence; Sitetrove covers 570,000+ investigators / 199,000+ sites — directly reusable for KOL-via-trials identification | Not publicly disclosed |
| GlobalData Clinical Trials Database | Trial + investigator/contact data | Not publicly disclosed |
| Clarivate Cortellis Clinical Trials Intelligence | Investigator ID / site selection | Not publicly disclosed |

### Prescribing / claims / formulary data
| Vendor | What it provides | Pricing |
|---|---|---|
| IQVIA Xponent | Prescriber-level US Rx dispensing data — core mechanism for volume-based KOL tiering | Not publicly disclosed; one low-confidence source describes pricing scaled by delivery frequency + number of tracked measures, plus a global-license fee on top of local subscription |
| IQVIA LAAD | Patient-level open claims (Rx + medical) | Not publicly disclosed |
| IQVIA NPA (National Prescription Audit) | ~93% of US outpatient Rx activity | Not publicly disclosed; a discounted academic tier ("SMART NSP/NPA for Universities") confirms pricing is tiered by segment |
| HealthVerity (Symphony Health data) | Open/closed claims, ~305M patients. *Note: Symphony Health was acquired by HealthVerity, closing May 8 2026 — it is no longer part of ICON plc* | Not publicly disclosed |
| Komodo Health | Claims + AI analytics ("Healthcare Map") | Not publicly disclosed; third-party analyst commentary (not vendor-published) suggests enterprise pharma contracts "often exceed $5M/year" |
| Merative MarketScan | Patient/outcomes claims data, 200M+ covered lives — weakest direct fit for KOL-ID, stronger for outcomes/RWE | Rare public anchor: one academic institution lists incremental per-study fees of $10,000 (or 10% of award, whichever is greater) for awards ≤$250K, flat $25,000 above that; commercial-funder pricing is negotiated case-by-case |

### Congress / conference intelligence
| Vendor | What it provides | Pricing |
|---|---|---|
| Symplur Signals | Congress/social-media analytics (hashtag tracking, HCP-influencer mapping) | Not publicly disclosed (a stale 2014 figure of "$1,099/mo" is out of date) |
| Sorcero Congress Intelligence | AI pre/live/post-congress abstract summarization — direct functional analog to ARIA | Not publicly disclosed |
| Ferma Congress (ZoomRx) | Real-time coverage across 250+ conferences / 9 therapeutic areas | Not publicly disclosed |
| DelveInsight conference coverage | Strategic tracking across major oncology/respiratory congresses | Not publicly disclosed |
| GlobalData | Broad pharma intelligence platform | Not publicly disclosed; note one source states GlobalData does **not** offer conference-specific coverage — don't treat it as a congress-intelligence substitute |

**Important gap:** no official developer API exists for ASCO, ESMO, or most major societies — they publish only web portals (abstracts, schedules), not REST APIs. Real congress-data ingestion requires either a licensed aggregator (Sorcero/Ferma/DelveInsight-style) or manual/scraped collection — a build risk to flag, not just a cost line.

### Social / digital listening (enterprise tier)
| Vendor | What it provides | Pricing |
|---|---|---|
| X (Twitter) API | Real-time HCP/KOL commentary, congress-hashtag tracking | As of Feb 2026: pay-as-you-go default, $0.015/post written ($0.20 if it contains a link), $0.005/post read (2M read cap/mo). Legacy Basic ($200/mo) and Pro ($5,000/mo) tiers are closed to new signups. Enterprise tier ~$42,000/mo |
| Reddit API | Patient/HCP forum sentiment | Free tier: 100 queries/min (not usable at scale). Commercial tier: **~$12,000/month for up to 50M calls**, overage ~$0.24/1,000 calls. Access now requires manual approval under Reddit's "Responsible Builder Policy" (2–4 week review) |
| Symplur Signals | Purpose-built healthcare social listening | Not publicly disclosed |
| Sermo | Physician panel/market research, 1.3M+ verified HCPs across 150 countries — on-demand surveys, not organic sentiment | Third-party (non-Sermo) market-research writeups cite: Panels Express under $10,000/project; life-sciences-grade Panels ~$16,000/project. Not vendor-confirmed |
| Doximity Marketing Solutions | Targeted HCP ad/insight delivery | Not publicly disclosed; scoped by audience size/composition |
| Within3 | Virtual advisory board / insight-capture platform used by top-20 pharma — direct functional overlap with NOVA's insight-generation module | Not publicly disclosed |

### Competitive intelligence, company/deal data
| Vendor | What it provides | Pricing |
|---|---|---|
| Clarivate Cortellis | Full-stack pharma intelligence: competitive, deals, regulatory, clinical trials, drug discovery | Not publicly disclosed. Closest full-suite analog to Aurivian's total ambition |
| Evaluate (EvaluatePharma / Omnium / Epi) | Consensus pharma financial/revenue forecasting | Custom, seat- and product-scoped, quote-based — no public price |
| GlobalData Pharma Intelligence | TA/pipeline/market-access intelligence | Not publicly disclosed; unverified third-party estimates suggest mid-five to low-six-figures/year |
| PitchBook | M&A/licensing deal tracking | No public pricing page, but verified-buyer breakdowns show $20,000–$124,000/yr contracts; single-seat entry typically $15,000–$20,000/yr |
| Crunchbase Pro | Lower-cost company/funding tracking | **Published pricing: $49/mo ($588/yr) annual, or $99/mo month-to-month** — the one vendor in this entire list with a real public rate card |

---

## Key Flags for Product Planning

1. **Pricing opacity is the norm, not the exception.** Of ~30 paid vendors surveyed, only Crunchbase Pro publishes a real rate card. Every enterprise pharma-data vendor (Cortellis, Evaluate, GlobalData, Symplur, Within3, Sorcero, Ferma, IQVIA, Komodo, H1, Definitive Healthcare) requires a sales quote. Budget planning should model ranges, not point estimates, until we're in active procurement conversations.
2. **Social-API costs shifted sharply in 2026.** X killed its flat-fee tiers for new signups and moved to metered pay-per-use; Reddit now requires manual approval and jumps straight from an unusable free tier to ~$12K/month commercial. Any assumption of "cheap social listening" needs revisiting.
3. **No official congress developer APIs exist** (ASCO, ESMO, etc. are web-only). ARIA's real-world data pipeline depends on either a licensed aggregator or a scraping/manual-capture pipeline — a build-risk item, not just a line item.
4. **Global regulatory coverage has a real gap at Japan.** EMA and Health Canada have usable free APIs; PMDA does not — parity across regions shouldn't be assumed without a dedicated integration plan.
5. **NCCN commercial licensing is a compliance trigger.** Since Aurivian would be a pharma-sponsored commercial tool, NCCN guideline use requires a paid permission, unlike the free non-commercial tier most people assume applies.
6. **Symphony Health ownership changed.** Now part of HealthVerity (acquired May 8, 2026), not ICON plc — relevant if any partner conversations reference the old ownership.
7. **H1.co and Within3 are the closest functional analogs** to LUCA (KOL intelligence) and NOVA (insight capture) respectively — useful both as competitive reference points and as potential data-partnership/acquisition targets rather than pure build-vs-buy line items.

---

*Compiled from vendor sites, public pricing pages, government API documentation, and (where explicitly marked) third-party analyst estimates. Figures without a citation note should be treated as unverified and re-confirmed directly with the vendor before use in a budget or contract.*
