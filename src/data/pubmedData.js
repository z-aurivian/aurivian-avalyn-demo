// Illustrative literature-context data for the Avalyn demo's RAG fallback
// path. Real trial names, journals and mechanisms are used where public
// (ATLAS/Thorax 2023, FIBRONEER-IPF/NEJM, TETON/NEJM); individual PMIDs
// below are illustrative placeholders for demo purposes, not verified
// PubMed records, per the "synthetic data is fine and expected" convention.

export const PUBMED_AP01 = [
  { pmid: '38112204', title: 'ATLAS: A phase 1b dose-escalation study of inhaled pirfenidone (AP01) in progressive fibrosing interstitial lung disease', authors: ['Maher TM', 'Cottin V', 'Flaherty KR'], journal: 'Thorax', pubDate: '2023 Jun', doi: '10.1136/thorax-2023-219876' },
  { pmid: '41712001', title: 'Design and rationale of MIST: a phase 2b trial of inhaled pirfenidone in progressive pulmonary fibrosis and CTD-ILD', authors: ['Raghu G', 'Maher TM', 'Richeldi L'], journal: 'ATS 2026 Abstract', pubDate: '2026 May', doi: null },
  { pmid: '41712045', title: 'Screening and referral gaps for connective-tissue-disease-associated ILD: a multidisciplinary perspective', authors: ['Cottin V', 'Rosas IO'], journal: 'ERS 2026 Abstract', pubDate: '2026 Sep', doi: null },
  { pmid: '41712088', title: 'EUSTAR consensus update on ILD screening in systemic sclerosis', authors: ['Distler O', 'Denton CP', 'Del Galdo F'], journal: 'EULAR 2026 Abstract', pubDate: '2026 Jun', doi: null },
  { pmid: '39882140', title: 'Tolerability and discontinuation patterns on oral pirfenidone in idiopathic pulmonary fibrosis: a real-world review', authors: ['King TE Jr', 'Noble PW'], journal: 'Respir Med', pubDate: '2024 Nov', doi: '10.1016/j.rmed.2024.107812' },
];

export const PUBMED_AP02 = [
  { pmid: '41712110', title: 'AURA-IPF: design and rationale of a phase 2 study of inhaled nintedanib in treatment-naive idiopathic pulmonary fibrosis', authors: ['Brown KK', 'Martinez FJ', 'Kaminski N'], journal: 'ATS 2026 Abstract', pubDate: '2026 May', doi: null },
  { pmid: '38224471', title: 'Gastrointestinal tolerability of oral nintedanib: a systematic review of discontinuation rates', authors: ['Martinez FJ', 'Rosas IO'], journal: 'Eur Respir Rev', pubDate: '2024 Mar', doi: '10.1183/16000617.0021-2024' },
  { pmid: '41712132', title: 'Inhaled route reformulation of tyrosine kinase inhibitors in pulmonary fibrosis: a rationale review', authors: ['Richeldi L', 'Cottin V'], journal: 'ERS 2026 Abstract', pubDate: '2026 Sep', doi: null },
];

export const PUBMED_COMPETITORS = {
  nerandomilast: [
    { pmid: '39441882', title: 'Nerandomilast in idiopathic pulmonary fibrosis: a randomized, controlled, phase 3 trial (FIBRONEER-IPF)', authors: ['Richeldi L', 'Maher TM', 'Kolb M'], journal: 'N Engl J Med', pubDate: '2025 Sep', doi: '10.1056/NEJMoa2412032' },
    { pmid: '39501203', title: 'PDE4B inhibition in progressive pulmonary fibrosis: FIBRONEER-ILD trial design', authors: ['Maher TM', 'Cottin V'], journal: 'Eur Respir J', pubDate: '2025 Oct', doi: '10.1183/13993003.01120-2025' },
  ],
  'tyvaso/teton': [
    { pmid: '39298765', title: 'Inhaled treprostinil in idiopathic pulmonary fibrosis: TETON-1 and TETON-2', authors: ['Nathan SD', 'Waxman A'], journal: 'N Engl J Med', pubDate: '2025 May', doi: '10.1056/NEJMoa2401234' },
  ],
  tpip: [
    { pmid: '41712155', title: 'Treprostinil palmitil inhalation powder in progressive pulmonary fibrosis: phase 2 results', authors: ['Nathan SD'], journal: 'ATS 2026 Abstract', pubDate: '2026 May', doi: null },
  ],
  esbriet: [
    { pmid: '35112998', title: 'Long-term real-world tolerability of oral pirfenidone: adherence and discontinuation predictors', authors: ['King TE Jr'], journal: 'Chest', pubDate: '2022 Aug', doi: '10.1016/j.chest.2022.05.014' },
  ],
};

// Keyed by KOL last name (lowercase) — matches config/kols.js roster.
export const PUBMED_KOL = {
  flaherty: [
    { pmid: '41712001', title: 'Design and rationale of MIST: a phase 2b trial of inhaled pirfenidone in PPF and CTD-ILD', authors: ['Raghu G', 'Maher TM', 'Flaherty KR'], journal: 'ATS 2026 Abstract', pubDate: '2026 May', doi: null },
    { pmid: '37845210', title: 'Nintedanib in progressive fibrosing interstitial lung diseases (INBUILD): final results', authors: ['Flaherty KR', 'Wells AU'], journal: 'Lancet Respir Med', pubDate: '2023 Jan', doi: '10.1016/S2213-2600(22)00320-1' },
  ],
  raghu: [
    { pmid: '38012455', title: 'ATS/ERS/JRS/ALAT clinical practice guideline update: idiopathic pulmonary fibrosis and progressive pulmonary fibrosis', authors: ['Raghu G'], journal: 'Am J Respir Crit Care Med', pubDate: '2024 Feb', doi: '10.1164/rccm.202306-1113ST' },
  ],
  richeldi: [
    { pmid: '39441882', title: 'Nerandomilast in idiopathic pulmonary fibrosis: a randomized, controlled, phase 3 trial (FIBRONEER-IPF)', authors: ['Richeldi L', 'Maher TM'], journal: 'N Engl J Med', pubDate: '2025 Sep', doi: '10.1056/NEJMoa2412032' },
    { pmid: '38112204', title: 'ATLAS: A phase 1b dose-escalation study of inhaled pirfenidone (AP01) in progressive fibrosing interstitial lung disease', authors: ['Maher TM', 'Cottin V', 'Richeldi L'], journal: 'Thorax', pubDate: '2023 Jun', doi: '10.1136/thorax-2023-219876' },
  ],
  cottin: [
    { pmid: '41712045', title: 'Screening and referral gaps for connective-tissue-disease-associated ILD: a multidisciplinary perspective', authors: ['Cottin V', 'Rosas IO'], journal: 'ERS 2026 Abstract', pubDate: '2026 Sep', doi: null },
    { pmid: '36998211', title: 'The spectrum of progressive fibrosing interstitial lung disease: a review', authors: ['Cottin V'], journal: 'Eur Respir Rev', pubDate: '2023 Mar', doi: '10.1183/16000617.0210-2022' },
  ],
  distler: [
    { pmid: '41712088', title: 'EUSTAR consensus update on ILD screening in systemic sclerosis', authors: ['Distler O', 'Denton CP', 'Del Galdo F'], journal: 'EULAR 2026 Abstract', pubDate: '2026 Jun', doi: null },
    { pmid: '32304249', title: 'Nintedanib for systemic sclerosis-associated interstitial lung disease (SENSCIS)', authors: ['Distler O', 'Highland KB'], journal: 'N Engl J Med', pubDate: '2019 Jun', doi: '10.1056/NEJMoa1903076' },
  ],
  khanna: [
    { pmid: '41712190', title: 'Outcome measures in systemic sclerosis-associated ILD clinical trials: a Scleroderma Clinical Trials Consortium perspective', authors: ['Khanna D'], journal: 'Arthritis Rheumatol', pubDate: '2025 Nov', doi: '10.1002/art.42901' },
  ],
  denton: [
    { pmid: '41712088', title: 'EUSTAR consensus update on ILD screening in systemic sclerosis', authors: ['Distler O', 'Denton CP', 'Del Galdo F'], journal: 'EULAR 2026 Abstract', pubDate: '2026 Jun', doi: null },
  ],
};

// Keyed-by-product pattern for multi-product support
export const PUBMED_BY_PRODUCT = {
  ap01: PUBMED_AP01,
  ap02: PUBMED_AP02,
};

// Back-compat aliases for legacy call sites during the naming transition.
export const PUBMED_SOLIRIS = PUBMED_AP01;
export const PUBMED_ULTOMIRIS = PUBMED_AP02;
