/**
 * Clinical Trials Data — Avalyn Inhaled Antifibrotic Landscape
 * Illustrative RAG-context data for the demo. Avalyn's own trials (MIST,
 * AURA-IPF) and named competitor trials (TETON, FIBRONEER-IPF, SENSCIS,
 * INBUILD) reflect real, public trial identities per RESEARCH_SUMMARY.md;
 * NCT ids and enrollment figures for the broader "landscape" entries below
 * are illustrative placeholders, not verified ClinicalTrials.gov records.
 */

// =============================================================================
// AP01 (inhaled pirfenidone) — Active / Key Trials
// =============================================================================
export const TRIALS_AP01 = [
  {
    nctId: 'NCT06329401',
    title: 'MIST: A Phase 2b Study of Inhaled Pirfenidone (AP01) in Progressive Pulmonary Fibrosis',
    officialTitle: 'A Randomized, Double-Blind, Placebo-Controlled, Phase 2b Study to Evaluate the Efficacy and Safety of Inhaled Pirfenidone (AP01) in Subjects With Progressive Pulmonary Fibrosis, Including CTD-ILD',
    status: 'ACTIVE_NOT_RECRUITING',
    phase: 'Phase 2b',
    conditions: ['Progressive Pulmonary Fibrosis', 'CTD-ILD', 'SSc-ILD'],
    interventions: ['AP01 (inhaled pirfenidone)', 'Placebo'],
    sponsor: 'Avalyn Pharmaceuticals',
    startDate: '2024-09',
    completionDate: '2027-09',
    enrollment: 375,
    locationCount: 62,
    studyType: 'INTERVENTIONAL',
  },
  {
    nctId: 'NCT05201001',
    title: 'ATLAS: A Phase 1b Dose-Escalation Study of Inhaled Pirfenidone in Progressive Fibrosing ILD',
    officialTitle: 'A Phase 1b, Open-Label, Dose-Escalation Study to Evaluate the Safety, Tolerability and Pharmacokinetics of AP01 (Inhaled Pirfenidone) in Subjects With Progressive Fibrosing Interstitial Lung Disease',
    status: 'COMPLETED',
    phase: 'Phase 1b',
    conditions: ['Progressive Fibrosing ILD'],
    interventions: ['AP01 (inhaled pirfenidone)'],
    sponsor: 'Avalyn Pharmaceuticals',
    startDate: '2021-11',
    completionDate: '2023-02',
    enrollment: 32,
    locationCount: 6,
    studyType: 'INTERVENTIONAL',
  },
];

// =============================================================================
// AP02 (inhaled nintedanib) — Active / Key Trials
// =============================================================================
export const TRIALS_AP02 = [
  {
    nctId: 'NCT07194382',
    title: 'AURA-IPF: A Phase 2 Study of Inhaled Nintedanib (AP02) in Treatment-Naive IPF',
    officialTitle: 'A Randomized, Double-Blind, Placebo-Controlled, Phase 2 Study to Evaluate the Efficacy and Safety of Inhaled Nintedanib (AP02) in Treatment-Naive Subjects With Idiopathic Pulmonary Fibrosis',
    status: 'RECRUITING',
    phase: 'Phase 2',
    conditions: ['Idiopathic Pulmonary Fibrosis'],
    interventions: ['AP02 (inhaled nintedanib)', 'Placebo'],
    sponsor: 'Avalyn Pharmaceuticals',
    startDate: '2026-03',
    completionDate: '2027-12',
    enrollment: 120,
    locationCount: 38,
    studyType: 'INTERVENTIONAL',
  },
];

// =============================================================================
// Competitor trials
// =============================================================================
export const TRIALS_COMPETITORS = {
  nerandomilast: [
    {
      nctId: 'NCT05321069',
      title: 'FIBRONEER-IPF: Nerandomilast in Idiopathic Pulmonary Fibrosis',
      officialTitle: 'A Randomized, Double-Blind, Placebo-Controlled, Phase 3 Trial of Nerandomilast in Subjects With Idiopathic Pulmonary Fibrosis',
      status: 'COMPLETED',
      phase: 'Phase 3',
      conditions: ['Idiopathic Pulmonary Fibrosis'],
      interventions: ['Nerandomilast', 'Placebo'],
      sponsor: 'Boehringer Ingelheim',
      startDate: '2022-06',
      completionDate: '2025-06',
      enrollment: 1177,
      locationCount: 233,
      studyType: 'INTERVENTIONAL',
    },
    {
      nctId: 'NCT05321082',
      title: 'FIBRONEER-ILD: Nerandomilast in Progressive Pulmonary Fibrosis',
      officialTitle: 'A Randomized, Double-Blind, Placebo-Controlled, Phase 3 Trial of Nerandomilast in Subjects With Progressive Pulmonary Fibrosis',
      status: 'COMPLETED',
      phase: 'Phase 3',
      conditions: ['Progressive Pulmonary Fibrosis'],
      interventions: ['Nerandomilast', 'Placebo'],
      sponsor: 'Boehringer Ingelheim',
      startDate: '2022-09',
      completionDate: '2025-09',
      enrollment: 1176,
      locationCount: 241,
      studyType: 'INTERVENTIONAL',
    },
  ],
  'tyvaso/teton': [
    {
      nctId: 'NCT04708782',
      title: 'TETON-1: Inhaled Treprostinil in Idiopathic Pulmonary Fibrosis',
      officialTitle: 'A Randomized, Double-Blind, Placebo-Controlled, Phase 3 Study of Treprostinil Inhalation Solution in Subjects With Idiopathic Pulmonary Fibrosis',
      status: 'COMPLETED',
      phase: 'Phase 3',
      conditions: ['Idiopathic Pulmonary Fibrosis'],
      interventions: ['Treprostinil (inhaled)', 'Placebo'],
      sponsor: 'United Therapeutics',
      startDate: '2021-01',
      completionDate: '2024-12',
      enrollment: 396,
      locationCount: 91,
      studyType: 'INTERVENTIONAL',
    },
    {
      nctId: 'NCT05255120',
      title: 'TETON-2: Inhaled Treprostinil in Idiopathic Pulmonary Fibrosis',
      officialTitle: 'A Randomized, Double-Blind, Placebo-Controlled, Phase 3 Study of Treprostinil Inhalation Solution in Subjects With Idiopathic Pulmonary Fibrosis (Confirmatory)',
      status: 'COMPLETED',
      phase: 'Phase 3',
      conditions: ['Idiopathic Pulmonary Fibrosis'],
      interventions: ['Treprostinil (inhaled)', 'Placebo'],
      sponsor: 'United Therapeutics',
      startDate: '2022-02',
      completionDate: '2025-08',
      enrollment: 379,
      locationCount: 88,
      studyType: 'INTERVENTIONAL',
    },
  ],
  tpip: [
    {
      nctId: 'NCT05147805',
      title: 'Treprostinil Palmitil Inhalation Powder in Progressive Pulmonary Fibrosis',
      officialTitle: 'A Phase 2, Randomized, Placebo-Controlled Study of TPIP in Subjects With Progressive Pulmonary Fibrosis',
      status: 'ACTIVE_NOT_RECRUITING',
      phase: 'Phase 2',
      conditions: ['Progressive Pulmonary Fibrosis', 'Idiopathic Pulmonary Fibrosis'],
      interventions: ['TPIP (treprostinil palmitil, inhaled)', 'Placebo'],
      sponsor: 'Insmed Incorporated',
      startDate: '2023-05',
      completionDate: '2026-11',
      enrollment: 130,
      locationCount: 42,
      studyType: 'INTERVENTIONAL',
    },
  ],
  admilparant: [
    {
      nctId: 'NCT06003426',
      title: 'admilparant (BMS-986278) in Idiopathic Pulmonary Fibrosis',
      officialTitle: 'A Phase 3, Randomized, Double-Blind, Placebo-Controlled Study of Admilparant in Subjects With Idiopathic Pulmonary Fibrosis',
      status: 'RECRUITING',
      phase: 'Phase 3',
      conditions: ['Idiopathic Pulmonary Fibrosis'],
      interventions: ['Admilparant', 'Placebo'],
      sponsor: 'Bristol Myers Squibb',
      startDate: '2023-11',
      completionDate: '2027-06',
      enrollment: 720,
      locationCount: 180,
      studyType: 'INTERVENTIONAL',
    },
  ],
};

// =============================================================================
// Landmark completed trials (approval-defining, historical reference)
// =============================================================================
export const TRIALS_COMPLETED_LANDMARK = [
  { nctId: 'NCT02597933', title: 'INBUILD: Nintedanib in Progressive Fibrosing Interstitial Lung Diseases', status: 'COMPLETED', phase: 'Phase 3', sponsor: 'Boehringer Ingelheim', enrollment: 663, completionDate: '2019-10' },
  { nctId: 'NCT02597933', title: 'SENSCIS: Nintedanib in Systemic Sclerosis-Associated ILD', status: 'COMPLETED', phase: 'Phase 3', sponsor: 'Boehringer Ingelheim', enrollment: 576, completionDate: '2019-05' },
  { nctId: 'NCT01366209', title: 'ASCEND: Pirfenidone in Idiopathic Pulmonary Fibrosis', status: 'COMPLETED', phase: 'Phase 3', sponsor: 'Genentech/InterMune', enrollment: 555, completionDate: '2014-05' },
  { nctId: 'NCT00287716', title: 'CAPACITY: Pirfenidone in Idiopathic Pulmonary Fibrosis', status: 'COMPLETED', phase: 'Phase 3', sponsor: 'InterMune', enrollment: 779, completionDate: '2008-11' },
];

export const TRIAL_STATS = {
  fetchDate: '2026-07-18',
  source: 'Illustrative demo data (ClinicalTrials.gov-style shape)',
  counts: {
    ap01Active: TRIALS_AP01.length,
    ap02Active: TRIALS_AP02.length,
    nerandomilastActive: TRIALS_COMPETITORS.nerandomilast.length,
    tetonActive: TRIALS_COMPETITORS['tyvaso/teton'].length,
    tpipActive: TRIALS_COMPETITORS.tpip.length,
    admilparantActive: TRIALS_COMPETITORS.admilparant.length,
    completedLandmark: TRIALS_COMPLETED_LANDMARK.length,
  },
  get totalActive() {
    return this.counts.ap01Active + this.counts.ap02Active +
      this.counts.nerandomilastActive + this.counts.tetonActive +
      this.counts.tpipActive + this.counts.admilparantActive;
  },
};

// Keyed-by-product pattern for multi-product support
export const TRIALS_BY_PRODUCT = {
  ap01: TRIALS_AP01,
  ap02: TRIALS_AP02,
};

// Back-compat aliases for legacy call sites during the naming transition.
export const TRIALS_SOLIRIS = TRIALS_AP01;
export const TRIALS_ULTOMIRIS = TRIALS_AP02;
