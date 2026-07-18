// VEGA — Strategic Analytics agent.
// Implements the "must-have" measures from the Aurivian extended analytics
// document (Vision Doc, Strategic Analytics, Section 5).
// MSL roster (canonical — reused in NovaTab2FieldStrategy.js and the
// companion capture app's TEAM_MEMBERS):
//   Maya Sorensen         — Northeast US
//   Derek Okafor          — Southeast US
//   Priya Chandrasekaran  — Midwest US
//   Jordan Reyes          — West US
//   Sophie Bergman        — UK & Ireland
//   Lukas Richter         — Continental Europe

// 1.1 HCP Awareness Progression — movement of HCPs along the awareness ladder.
export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '24% of targeted pulmonology/rheumatology HCPs have reached sustained practice-relevant engagement (actively referring into MIST/AURA-IPF or citing inhaled-route rationale unprompted) vs. an estimated 15% industry benchmark for clinical-stage biotechs at this trial stage. Slowest conversion: Knowledgeable → Intent (61%, avg 58 days). Primary blocker: uncertainty about referral logistics. Recommended action: deploy the MIST/CTD-ILD referral checklist (A1/A2) to close this specific gap.',
  stages: [
    { stage: 'Sustained engagement (referring/citing)', hcps: 187, pctTotal: 24, vsQ4: '+9%'  },
    { stage: 'Actively evaluating',                      hcps: 254, pctTotal: 33, vsQ4: '+11%' },
    { stage: 'Intent to engage',                          hcps: 391, pctTotal: 51, vsQ4: '+6%'  },
    { stage: 'Knowledgeable',                             hcps: 612, pctTotal: 79, vsQ4: '+8%'  },
    { stage: 'Aware only',                                hcps: 274, pctTotal: 35, vsQ4: '-6%'  },
  ],
};

// 1.2 Interaction Quality vs Quantity — by MSL/Region.
export const VEGA_INTERACTION_QUALITY = {
  insight: 'Derek Okafor shows strong interaction volume and quality in Southeast US, driven by tolerability-narrative conversations. Lukas Richter shows a volume gap in Continental Europe — likely reflecting the smaller current KOL base relative to UK & Ireland; recommend expanding DACH/France territory outreach ahead of EULAR. Priya Chandrasekaran shows a quality gap worth a joint field visit.',
  rows: [
    { msl: 'Maya Sorensen',        region: 'Northeast US',       interactions: 44, vsTarget: '+10%', quality: 8.6, insightRate: 79, overall: 'Excellent' },
    { msl: 'Derek Okafor',         region: 'Southeast US',       interactions: 41, vsTarget: '+5%',  quality: 8.3, insightRate: 74, overall: 'Excellent' },
    { msl: 'Priya Chandrasekaran', region: 'Midwest US',         interactions: 38, vsTarget: '-3%',  quality: 6.4, insightRate: 48, overall: 'Quality gap' },
    { msl: 'Jordan Reyes',         region: 'West US',            interactions: 35, vsTarget: '-8%',  quality: 8.0, insightRate: 71, overall: 'On track' },
    { msl: 'Sophie Bergman',       region: 'UK & Ireland',       interactions: 29, vsTarget: '+2%',  quality: 8.9, insightRate: 84, overall: 'Excellent' },
    { msl: 'Lukas Richter',        region: 'Continental Europe', interactions: 19, vsTarget: '-27%', quality: 7.6, insightRate: 62, overall: 'Volume gap' },
  ],
};

// 1.3 Engagement Gap Tracker — Tier 1/2 KOLs not contacted within window.
export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Talmadge E. King, Jr.', tier: 'Tier 2', lastContact: '2026-04-22', gap: '9 weeks', action: 'Re-engage urgently' },
  { kol: 'Maureen D. Mayes',      tier: 'Tier 2', lastContact: '2026-05-10', gap: '6 weeks', action: 'Re-engage urgently' },
  { kol: 'Naftali Kaminski',      tier: 'Tier 2', lastContact: '2026-05-18', gap: '5 weeks', action: 'Schedule soon' },
  { kol: 'Christopher P. Denton', tier: 'Tier 1', lastContact: '2026-05-24', gap: '4 weeks', action: 'Schedule soon' },
  { kol: 'Ganesh Raghu',          tier: 'Tier 1', lastContact: '2026-06-10', gap: '1 week',  action: 'On track' },
];

// 2.1 Share of Scientific Voice — vs competitors.
export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Social and congress-abstract share of voice is softening against United Therapeutics (TETON program) at pulmonology congresses (-4pts), while Avalyn holds steady share in the rheumatology/EULAR channel. Recommend the mechanism-differentiation deck (A7) ahead of ERS 2026.',
  rows: [
    { source: 'Congress abstracts (ATS 2026)',       us: '11%', compA: '19%', compB: '14%', compC: '9%',  trend: 'down' },
    { source: 'Congress abstracts (EULAR 2026)',      us: '14%', compA: '4%',  compB: '3%',  compC: '2%',  trend: 'up'   },
    { source: 'Peer-reviewed publications (12m)',     us: '8%',  compA: '22%', compB: '11%', compC: '31%', trend: 'flat' },
    { source: 'KOL active endorsements',              us: '16%', compA: '21%', compB: '9%',  compC: '18%', trend: 'up'   },
    { source: 'Social / digital mentions',            us: '9%',  compA: '27%', compB: '12%', compC: '15%', trend: 'down' },
  ],
};

// 2.2 KOL Sentiment Velocity — rate-of-change of alignment.
export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Oliver Distler',    score: 91, change30d: '+3.6', velocity: '+1.2 ↑↑', interpretation: 'Positive acceleration — top-priority EULAR advisory board candidate' },
  { kol: 'Vincent Cottin',    score: 84, change30d: '+2.9', velocity: '+0.9 ↑',  interpretation: 'Steady positive — strong cross-indication bridge voice, maintain cadence' },
  { kol: 'Steven D. Nathan',  score: 52, change30d: '-4.1', velocity: '-1.6 ↓↓', interpretation: 'Worsening faster — TETON PI increasingly skeptical, urgent mechanism-differentiation conversation needed' },
  { kol: 'Ivan O. Rosas',     score: 71, change30d: '+2.2', velocity: '+0.4 ↑',  interpretation: 'Emerging positive — good near-term advisory-board candidate' },
];

// 4.1 Care Gap Closure Tracking — patient-level outcome of MA activity.
export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'CTD-ILD referral into MIST screening',   linkedMO: 'MO1',   baseline: '19%',      current: '31% (+12pts)',  patientsImpacted: '~140 additional patients screened for MIST eligibility' },
  { gap: 'Time from SSc diagnosis to pulm referral', linkedMO: 'MO4', baseline: '11 months', current: '8 months (-3mo)', patientsImpacted: '~90 SSc-ILD patients reaching pulmonology earlier' },
  { gap: 'Tolerability-driven early discontinuation', linkedMO: 'MO3', baseline: '~22% by wk 24', current: '~17% by wk 24 (-5pts)', patientsImpacted: 'Estimated 60+ patients retained on oral SoC longer via improved counseling' },
];

// 4.2 ROMI — financial framing.
export const VEGA_ROMI = {
  netValueCreated: '$4.1M',
  roiPct: '138%',
  returnPerPound: '$2.38',
  rows: [
    { category: 'Pre-launch scientific equity built (KOL/advocacy)', value: '$2.3M', methodology: 'Advisory-board and publication-plan investment value, benchmarked against comparable pre-launch respiratory programs' },
    { category: 'Trial enrollment acceleration (MIST/AURA-IPF)',     value: '$1.4M', methodology: 'Referral-pathway and site-support activity mapped to estimated per-patient enrollment cost avoidance' },
    { category: 'Competitive narrative protection',                  value: '$0.9M', methodology: 'Estimated mindshare protected from inhaled-prostacyclin and oral-mechanism competitive messaging' },
    { category: 'Total Medical Affairs investment',                  value: '-$2.5M', methodology: 'Field Medical, advisory boards, congress presence, content — Q2 2026 period' },
  ],
};

// 4.3 Medical Affairs Impact Index — composite executive headline metric.
export const VEGA_IMPACT_INDEX = {
  overall: 68,
  vsQ4: '+11',
  target: 70,
  dimensions: [
    { dim: 'Execution excellence',      score: 76, commentary: 'Field interactions and content deployment tracking close to target; Continental Europe territory volume below target' },
    { dim: 'External ecosystem impact', score: 71, commentary: 'KOL network expanding fastest in rheumatology/SSc-ILD ahead of EULAR; pulmonology share of voice softening vs. TETON' },
    { dim: 'HCP practice change',       score: 62, commentary: '24% sustained engagement vs. ~15% comparable-stage benchmark — solid but early, gated by referral-pathway clarity' },
    { dim: 'Patient care gap closure',  score: 65, commentary: 'MIST screening referral +12pts, SSc-ILD time-to-referral -3 months — both moving in the right direction' },
    { dim: 'Internal ecosystem impact', score: 66, commentary: 'HEOR and Clinical Development collaboration on the tolerability narrative (A5) is a bright spot; MO5 competitive-response coordination needs tightening' },
  ],
};
