// Strategic framework — Demo Brief §4.
// This is NOVA's spine: ISP → POA (Medical Objectives) → Listening
// Priorities → KIQs / KITs. Drives the Strategy-to-Action surface and the
// coverage scoring displayed on the Command Center.

export const ISP_PILLARS = [
  { id: 'p1', title: 'Establish AP01 as the first inhaled antifibrotic in PPF and CTD-ILD',
    description: 'Build MIST-anchored evidence and KOL conviction across pulmonology and rheumatology so inhaled pirfenidone is understood ahead of topline data.' },
  { id: 'p2', title: 'Build AP02 evidence to unseat oral IPF incumbency',
    description: 'Generate AURA-IPF data and community-pulmonologist readiness before oral competitors (Ofev, Jascayd) further entrench first-line practice.' },
  { id: 'p3', title: 'Own the inhaled-delivery category',
    description: 'Establish route of administration — not mechanism — as Avalyn\'s defining differentiation, versus both oral antifibrotics and inhaled prostacyclins.' },
  { id: 'p4', title: 'Build an SSc-ILD rheumatology beachhead',
    description: 'Use EULAR and rheumatology KOL relationships to establish screening and referral pathways ahead of AP01\'s eventual pulmonology launch.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'MIST evidence generation & CTD-ILD KOL engagement',
    description: 'Build KOL and community conviction around inhaled pirfenidone\'s PPF/CTD-ILD profile ahead of MIST topline (H2 2027), anchored on the earlier ATLAS dose-response signal.',
    ispPillarRef: 'p1' },
  { id: 'MO2', name: 'AURA-IPF community readiness',
    description: 'Prepare IPF community pulmonologists to evaluate inhaled nintedanib as AURA-IPF enrollment and early data mature toward 2027.',
    ispPillarRef: 'p2' },
  { id: 'MO3', name: 'Tolerability & adherence differentiation narrative',
    description: 'Build and disseminate the clinical case that inhaled delivery meaningfully reduces the GI/hepatic/dermatologic burden driving discontinuation on oral pirfenidone and nintedanib.',
    ispPillarRef: 'p3' },
  { id: 'MO4', name: 'SSc-ILD scientific exchange (EULAR-anchored)',
    description: 'Deepen rheumatology KOL relationships and screening/referral pathway education so SSc-ILD patients reach pulmonology co-management earlier.',
    ispPillarRef: 'p4' },
  { id: 'MO5', name: 'Inhaled-category competitive response',
    description: 'Track and respond to inhaled treprostinil (TETON, TPIP) and the newly approved oral nerandomilast so Avalyn\'s inhaled-antifibrotic positioning stays differentiated and current.',
    ispPillarRef: 'p3' },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'MIST trial & CTD-ILD referral pathway awareness',
    moRef: 'MO1', kiq: 'Are rheumatologists and pulmonologists aware of the MIST trial and how CTD-ILD patients are routed into it?',
    kits: ['MIST trial fact sheet', 'CTD-ILD referral pathway one-pager'] },
  { id: 'LP2', name: 'AURA-IPF & inhaled nintedanib community confidence',
    moRef: 'MO2', kiq: 'What would give community pulmonologists confidence to consider inhaled nintedanib once AURA-IPF data reads out?',
    kits: ['AURA-IPF investigator deck', 'Inhaled PK explainer'] },
  { id: 'LP3', name: 'Oral antifibrotic tolerability/adherence burden',
    moRef: 'MO3', kiq: 'How are pulmonologists and patients describing the tolerability burden driving discontinuation on Esbriet/Ofev?',
    kits: ['Tolerability burden summary', 'Adherence conversation guide'] },
  { id: 'LP4', name: 'SSc-ILD screening & rheum-pulm co-management',
    moRef: 'MO4', kiq: 'What screening and referral gaps keep SSc-ILD patients from reaching pulmonology evaluation early enough?',
    kits: ['EUSTAR screening algorithm brief', 'Rheum-pulm co-management model'] },
  { id: 'LP5', name: 'Inhaled category differentiation vs treprostinil',
    moRef: 'MO5', kiq: 'How are KOLs distinguishing an inhaled antifibrotic from inhaled treprostinil (TETON/TPIP) mechanistically and clinically?',
    kits: ['Mechanism differentiation deck', 'TETON/TPIP competitive FAQ'] },
  { id: 'LP6', name: 'Nerandomilast (Jascayd) competitive response readiness',
    moRef: 'MO5', kiq: 'How is the new PDE4B mechanism (nerandomilast) shifting pulmonologist treatment-sequencing conversations?',
    kits: ['Nerandomilast rapid-response brief'] },
];

// Coverage score per MO at the moment of the demo.
export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Gap',
  MO4: 'Low',
  MO5: 'Gap',
};
