// ============================================================================
// Congress Intelligence Data — Avalyn (ATS / ERS / EULAR)
// Keys off CONGRESS_OPTIONS from config
// ============================================================================

import { PRODUCT_OPTIONS } from '../config';

const productNames = PRODUCT_OPTIONS.map(p => p.name); // ['AP01', 'AP02', 'AP03']

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-ATS 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'ATS 2026'],
  scientific: [
    { period: 'Post-ATS 2025', [productNames[0]]: 54, [productNames[1]]: 48, 'Nerandomilast': 51, 'Tyvaso/TETON': 58, Other: 46 },
    { period: 'Q4 2025',       [productNames[0]]: 58, [productNames[1]]: 52, 'Nerandomilast': 62, 'Tyvaso/TETON': 61, Other: 47 },
    { period: 'Q1 2026',       [productNames[0]]: 63, [productNames[1]]: 55, 'Nerandomilast': 68, 'Tyvaso/TETON': 63, Other: 48 },
    { period: 'Q2 2026',       [productNames[0]]: 67, [productNames[1]]: 58, 'Nerandomilast': 74, 'Tyvaso/TETON': 66, Other: 49 },
    { period: 'ATS 2026',      [productNames[0]]: 71, [productNames[1]]: 60, 'Nerandomilast': 79, 'Tyvaso/TETON': 69, Other: 50 },
  ],
  social: [
    { period: 'Post-ATS 2025', [productNames[0]]: 41, [productNames[1]]: 36, 'Nerandomilast': 44, 'Tyvaso/TETON': 62, Other: 40 },
    { period: 'Q4 2025',       [productNames[0]]: 44, [productNames[1]]: 39, 'Nerandomilast': 52, 'Tyvaso/TETON': 65, Other: 41 },
    { period: 'Q1 2026',       [productNames[0]]: 47, [productNames[1]]: 41, 'Nerandomilast': 59, 'Tyvaso/TETON': 68, Other: 42 },
    { period: 'Q2 2026',       [productNames[0]]: 50, [productNames[1]]: 43, 'Nerandomilast': 66, 'Tyvaso/TETON': 71, Other: 43 },
    { period: 'ATS 2026',      [productNames[0]]: 53, [productNames[1]]: 45, 'Nerandomilast': 72, 'Tyvaso/TETON': 74, Other: 44 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'ATLAS: A phase 1b dose-response study of inhaled pirfenidone in progressive fibrosing ILD', journalOrCongress: 'Thorax', date: '2023-06', product: productNames[0], sentiment: 'positive' },
  { title: 'MIST: rationale and design of a phase 2b trial of inhaled pirfenidone in PPF and CTD-ILD', journalOrCongress: 'ATS 2026 Abstract', date: '2026-05', product: productNames[0], sentiment: 'positive' },
  { title: 'AURA-IPF: phase 2 design of inhaled nintedanib in treatment-naive IPF', journalOrCongress: 'ATS 2026 Abstract', date: '2026-05', product: productNames[1], sentiment: 'neutral' },
  { title: 'Nerandomilast in idiopathic pulmonary fibrosis: a randomized, controlled, phase 3 trial', journalOrCongress: 'NEJM', date: '2025-09', product: 'Nerandomilast', sentiment: 'positive' },
  { title: 'TETON-1 and TETON-2: inhaled treprostinil in idiopathic pulmonary fibrosis', journalOrCongress: 'NEJM', date: '2025-05', product: 'Tyvaso/TETON', sentiment: 'positive' },
  { title: 'Screening for interstitial lung disease in systemic sclerosis: a EUSTAR consensus update', journalOrCongress: 'EULAR 2026 Abstract', date: '2026-06', product: productNames[0], sentiment: 'positive' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'LinkedIn', author: 'Prof. Vincent Cottin', topic: 'CTD-ILD referral pathway gaps', date: '2026-05-19', product: productNames[0], sentiment: 'neutral' },
  { platform: 'Twitter', author: 'Pulmonology fellow network', topic: 'Nerandomilast sequencing debate', date: '2026-06-01', product: 'Nerandomilast', sentiment: 'positive' },
  { platform: 'Conference backchannel', author: 'Multiple', topic: 'Inhaled antifibrotic vs. inhaled prostacyclin confusion', date: '2026-05-18', product: productNames[0], sentiment: 'neutral' },
  { platform: 'LinkedIn', author: 'Dr. Oliver Distler', topic: 'EUSTAR SSc-ILD screening consensus', date: '2026-06-08', product: productNames[0], sentiment: 'positive' },
  { platform: 'Patient advocacy forum', author: 'Pulmonary Fibrosis Foundation community', topic: 'Tolerability burden on oral antifibrotics', date: '2026-06-02', product: productNames[1], sentiment: 'negative' },
];

export const MOCK_INGESTION = {
  agendas: 9,
  abstracts: 612,
  posters: 247,
  speakers: 168,
  publicationsLinked: 384,
  sessions: [
    { title: 'Progressive Pulmonary Fibrosis: Diagnosis, Classification and Emerging Therapy', track: 'Pulmonology', products: [productNames[0], productNames[1]] },
    { title: 'Inhaled Therapeutics in ILD: Antifibrotics, Prostacyclins and Delivery Science', track: 'Clinical Trials', products: [productNames[0], productNames[1], 'Tyvaso/TETON'] },
    { title: 'CTD-ILD and SSc-ILD: Screening, Referral and Multidisciplinary Care', track: 'Rheumatology / Pulmonology Crossover', products: [productNames[0]] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'ats-2026': {
    agendas: 9,
    abstracts: 612,
    posters: 247,
    speakers: 168,
    publicationsLinked: 384,
    sessions: [
      { title: 'Progressive Pulmonary Fibrosis: Diagnosis, Classification and Emerging Therapy', track: 'Pulmonology', products: [productNames[0], productNames[1]] },
      { title: 'Inhaled Therapeutics in ILD: Antifibrotics, Prostacyclins and Delivery Science', track: 'Clinical Trials', products: [productNames[0], productNames[1], 'Tyvaso/TETON'] },
      { title: 'New Oral Mechanisms in IPF: Nerandomilast and Beyond', track: 'Clinical Trials', products: ['Nerandomilast'] },
    ],
  },
  'ers-2026': {
    agendas: 8,
    abstracts: 578,
    posters: 231,
    speakers: 152,
    publicationsLinked: 356,
    sessions: [
      { title: 'AURA-IPF and the Case for Inhaled Antifibrotic Reformulation', track: 'Clinical Trials', products: [productNames[1]] },
      { title: 'European Perspectives on Progressive Fibrosing ILD', track: 'Pulmonology', products: [productNames[0], productNames[1]] },
      { title: 'Tolerability and Adherence on Oral Antifibrotic Therapy', track: 'Patient Care', products: [productNames[0], productNames[1]] },
    ],
  },
  'eular-2026': {
    agendas: 6,
    abstracts: 341,
    posters: 128,
    speakers: 94,
    publicationsLinked: 189,
    sessions: [
      { title: 'SSc-ILD Screening: Toward a EUSTAR Consensus Algorithm', track: 'Rheumatology', products: [productNames[0]] },
      { title: 'Antifibrotic Therapy in Systemic Sclerosis-Associated ILD', track: 'Clinical Trials', products: [productNames[0]] },
      { title: 'Multidisciplinary Rheum-Pulm Co-Management Models', track: 'Rheumatology / Pulmonology Crossover', products: [productNames[0]] },
    ],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'Tolerability burden driving discontinuation on oral antifibrotics',
    momentum: 95,
    mentions: 61,
    summary: 'Pulmonologists across community and academic centers consistently cite GI (nausea, diarrhea) and dermatologic (rash, photosensitivity) adverse events as the leading reason patients ask about alternatives to Esbriet/Ofev. This is Avalyn\'s clearest and most consistently reinforced wedge this cycle.',
    action: 'Finalize and fully deploy the tolerability/adherence conversation guide (A5) across all MSL territories ahead of ERS 2026.',
  },
  {
    theme: 'Nerandomilast approval reshaping first-line sequencing conversations',
    momentum: 90,
    mentions: 54,
    summary: 'Following nerandomilast\'s IPF (Oct 2025) and PPF (Dec 2025) approvals, session Q&A repeatedly pivots to how the new PDE4B mechanism changes first-line sequencing — and whether an inhaled reformulation of an older mechanism still has a role.',
    action: 'Complete the nerandomilast rapid-response briefing (A8) and prepare an ERS 2026 session specifically addressing inhaled route positioning alongside new oral mechanisms.',
  },
  {
    theme: 'Inhaled-category confusion: antifibrotic vs. prostacyclin',
    momentum: 83,
    mentions: 46,
    summary: 'Community physicians and some congress attendees conflate an inhaled antifibrotic with inhaled treprostinil (Tyvaso, TPIP) purely on shared delivery route. TETON-1/TETON-2\'s prominent NEJM readouts have amplified this risk.',
    action: 'Commission a mechanism-differentiation deck (A7) explicitly separating inhaled-antifibrotic from inhaled-prostacyclin categories for MSL and KOL use.',
  },
  {
    theme: 'SSc-ILD screening and early referral gaps',
    momentum: 76,
    mentions: 34,
    summary: 'Rheumatologists outside EUSTAR-affiliated academic centers want a simplified, consensus-aligned screening trigger for early pulmonology referral in systemic sclerosis, rather than center-specific protocols.',
    action: 'Advance the EUSTAR-aligned screening algorithm one-pager (A6) toward EULAR 2026 advisory board review.',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[0]} (Avalyn)`, share: 11, mentions: 62 },
  { product: `${productNames[1]} (Avalyn)`, share: 8,  mentions: 41 },
  { product: 'Jascayd / nerandomilast (Boehringer Ingelheim)', share: 19, mentions: 108 },
  { product: 'Tyvaso / Tyvaso DPI (United Therapeutics)',      share: 22, mentions: 127 },
  { product: 'Ofev / nintedanib (Boehringer Ingelheim)',       share: 24, mentions: 139 },
  { product: 'Other (Esbriet, TPIP, admilparant)',             share: 16, mentions: 88  },
];

export const MOCK_TRIALS = {
  total: 21,
  linkedToKOLs: 16,
  byIndication: { IPF: 11, PPF: 6, 'CTD-ILD': 3, 'SSc-ILD': 4 },
  sample: [
    { nctId: 'NCT06329401', title: 'MIST: A Phase 2b study of inhaled pirfenidone (AP01) in progressive pulmonary fibrosis', phase: 'Phase 2b', sponsor: 'Avalyn Pharmaceuticals', product: productNames[0], indication: 'PPF / CTD-ILD', status: 'Enrollment complete', sites: 62 },
    { nctId: 'NCT07194382', title: 'AURA-IPF: A Phase 2 study of inhaled nintedanib (AP02) in treatment-naive IPF', phase: 'Phase 2', sponsor: 'Avalyn Pharmaceuticals', product: productNames[1], indication: 'IPF', status: 'Active, recruiting', sites: 38 },
    { nctId: 'NCT04552704', title: 'TETON-1: Inhaled treprostinil in idiopathic pulmonary fibrosis', phase: 'Phase 3', sponsor: 'United Therapeutics', product: 'Tyvaso/TETON', indication: 'IPF', status: 'Completed', sites: 91 },
    { nctId: 'NCT05255120', title: 'FIBRONEER-IPF: Nerandomilast in idiopathic pulmonary fibrosis', phase: 'Phase 3', sponsor: 'Boehringer Ingelheim', product: 'Nerandomilast', indication: 'IPF', status: 'Completed', sites: 145 },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 1840,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'LinkedIn', mentions: 612, kolsTracked: 48 },
    { platform: 'Twitter / X', mentions: 498, kolsTracked: 36 },
    { platform: 'PubMed / alerts', mentions: 341, kolsTracked: 82 },
    { platform: 'Conference backchannels', mentions: 389, kolsTracked: 54 },
  ],
  sample: [
    { platform: 'LinkedIn', author: 'Prof. Vincent Cottin', topic: 'CTD-ILD referral pathway gaps', sentiment: 'neutral', date: '2026-05-19' },
    { platform: 'Twitter', author: 'Pulmonology fellow network', topic: 'Nerandomilast sequencing debate', sentiment: 'positive', date: '2026-06-01' },
    { platform: 'PubMed alert', author: 'Multiple', topic: 'SSc-ILD screening consensus update (EUSTAR)', sentiment: 'positive', date: '2026-06-08' },
  ],
};

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText',      status: 'connected', description: 'ATS/ERS/EULAR agendas, abstracts, posters, speakers, linked publications' },
  { id: 'trials',   label: 'Clinical Trials',         iconId: 'Activity',      status: 'available',  description: 'MIST, AURA-IPF and competitor trial sponsorship, sites, outcomes by product' },
  { id: 'social',   label: 'Social & Digital',        iconId: 'MessageCircle', status: 'available',  description: 'Scientific and digital footprint signals across pulmonology and rheumatology' },
];

export function getDemoContext() {
  return {
    ingestion: MOCK_INGESTION,
    themes: MOCK_THEMES,
    competitorVisibility: MOCK_COMPETITOR_VISIBILITY,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
    trendSentiment: MOCK_TREND_SENTIMENT,
    scientificArticles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrendSources: MOCK_SOCIAL_TREND_SOURCES,
  };
}
