// Strategic content for Avalyn Pharmaceuticals Medical Affairs Demo
// Last updated: 2026-07-18

export const STRATEGIC_IMPERATIVES = [
  {
    id: 'si-001',
    name: 'MIST / AURA-IPF Evidence Generation & Referral Pathway',
    category: 'Patient-Related',
    description:
      'Build the community referral infrastructure so CTD-ILD and progressive-pulmonary-fibrosis patients can reach MIST trial sites, and IPF patients can reach AURA-IPF sites, without depending on a single academic contact per region. Early identification and clean referral logistics remain the most impactful levers before either trial reads out.',
    successMetrics: [
      'MIST/AURA-IPF referral-conversation rate in tracked pulmonology and rheumatology accounts',
      'CTD-ILD screening-to-referral conversion rate',
      'Community-to-academic-center referral turnaround time',
      'Net new patients screened for trial eligibility per quarter',
    ],
    keyActions: [
      'Publish and distribute the MIST/CTD-ILD referral eligibility checklist to community rheumatology',
      'Stand up a single-point-of-contact referral line for community sites',
      'Deploy digital disease-awareness content targeting community pulmonologists and rheumatologists',
      'Establish rapid-referral pathways with top ILD centers of excellence in the US and Europe',
    ],
  },
  {
    id: 'si-002',
    name: 'Tolerability & Adherence Differentiation',
    category: 'Patient-Related',
    description:
      'Build and disseminate the clinical case that inhaled delivery meaningfully reduces the GI, hepatic and dermatologic tolerability burden that drives discontinuation on oral pirfenidone (Esbriet) and nintedanib (Ofev). This is Avalyn\'s clearest wedge — the highest-recurrence field signal this cycle.',
    successMetrics: [
      'Tolerability/adherence conversation-guide adoption rate across MSL field team',
      'MSL-reported resolution rate on adherence-related HCP questions',
      'Community-pulmonologist-reported tolerability concern volume (target: qualitative decline)',
      'Patient advocacy channel sentiment on tolerability burden',
    ],
    keyActions: [
      'Finalize and fully deploy the tolerability/adherence conversation guide to all MSL territories',
      'Generate company-reported PK/exposure data summaries, clearly labeled as company-reported pending independent replication',
      'Develop patient-facing tolerability materials in partnership with the Pulmonary Fibrosis Foundation and Scleroderma Foundation',
      'Track discontinuation-driver language across MSL, ad board and congress channels',
    ],
  },
  {
    id: 'si-003',
    name: 'Clinical & Scientific Leadership in Inhaled Antifibrotic Therapy',
    category: 'Differentiation',
    description:
      'Establish Avalyn as the definitive voice on inhaled reformulation of proven antifibrotic mechanisms through strategic publication planning, systematic KOL engagement, and congress presence at ATS, ERS and EULAR. Anchor scientific credibility on the ATLAS Phase 1b dose-response signal ahead of MIST and AURA-IPF topline data.',
    successMetrics: [
      'Peer-reviewed publication count in top-tier pulmonology and rheumatology journals',
      'KOL engagement score across the 18-KOL tiered advocacy network',
      'Congress share of voice at ATS, ERS and EULAR',
      'Advisory board participation rate among Tier 1 KOLs',
    ],
    keyActions: [
      'Execute a publication plan anchored on ATLAS dose-response data, MIST design/rationale, and AURA-IPF design/rationale',
      'Build a tiered KOL network across pulmonology/ILD and rheumatology/SSc-ILD (current: 18 KOLs)',
      'Sponsor and shape fibrosing-ILD-focused symposia at ATS, ERS and EULAR',
      'Commission a mechanism-differentiation deck separating inhaled antifibrotic from inhaled prostacyclin',
    ],
  },
  {
    id: 'si-004',
    name: 'Competitive Positioning Against Oral Incumbency and Inhaled Prostacyclins',
    category: 'Differentiation',
    description:
      'Defend Avalyn\'s inhaled-antifibrotic positioning against two distinct pressures: oral mechanism improvement (nerandomilast/Jascayd, admilparant) and inhaled-category confusion with inhaled prostacyclins (Tyvaso/TETON, TPIP), which are a different drug class entirely. No competitor currently offers a like-for-like inhaled antifibrotic.',
    successMetrics: [
      'Share of scientific voice at pulmonology congresses vs. United Therapeutics (TETON)',
      'Mechanism-differentiation-deck reach among Tier 1/2 KOLs',
      'Nerandomilast rapid-response cycle time',
      'HCP-reported clarity on inhaled-antifibrotic vs. inhaled-prostacyclin distinction',
    ],
    keyActions: [
      'Maintain a standing, quarterly-refreshed nerandomilast competitive-response FAQ for MSLs',
      'Commission and distribute the mechanism-differentiation deck ahead of ERS 2026',
      'Track TETON-1/TETON-2 and TPIP congress visibility as an early-warning signal for category confusion',
      'Position AP03 (fixed-dose combination) as a long-horizon differentiator once IND-enabling work completes',
    ],
  },
];

export const COMPETITIVE_LANDSCAPE = [
  {
    id: 'comp-001',
    name: 'Tyvaso / Tyvaso DPI',
    genericName: 'treprostinil (inhaled)',
    company: 'United Therapeutics',
    mechanism: 'Inhaled prostacyclin analogue — vasodilatory/anti-proliferative signaling via IP receptor agonism, not antifibrotic',
    approvedIndications: [
      'Pulmonary arterial hypertension (PAH)',
      'PH-ILD (pulmonary hypertension associated with interstitial lung disease)',
    ],
    keyTrials: [
      'TETON-1 — Phase III, IPF, met primary FVC endpoint (NEJM 2025)',
      'TETON-2 — Phase III, IPF, met primary FVC endpoint (NEJM 2025)',
    ],
    strengths: [
      'Most advanced inhaled competitor by trial maturity — two positive Phase III readouts in IPF',
      'Established commercial and REMS-adjacent infrastructure from PAH franchise',
      'Strong KOL relationships in the pulmonary hypertension and ILD-overlap community',
      'DPI formulation offers dosing convenience versus nebulized delivery',
    ],
    weaknesses: [
      'Different drug class — prostacyclin analogue, not an antifibrotic mechanism',
      'Vasodilatory side effects (cough, headache, flushing) distinct from antifibrotic tolerability profile',
      'No approved IPF indication yet despite positive TETON data',
      'Category-confusion risk actually works in both directions — some physicians assume Avalyn and UT compete head-to-head',
    ],
    strategicThreatLevel: 'Medium',
    marketStatus: 'Approved in PAH/PH-ILD; IPF filing anticipated following TETON-1/TETON-2',
    summary:
      'Tyvaso/TETON is the most advanced inhaled competitor by trial maturity, but it is not a like-for-like inhaled antifibrotic — it is a prostacyclin analogue with a different mechanism and side-effect profile. The real strategic risk is category confusion: HCPs conflating "inhaled therapy in IPF" as a single competitive set rather than distinguishing antifibrotic from vasodilator mechanisms.',
  },
  {
    id: 'comp-002',
    name: 'TPIP',
    genericName: 'treprostinil palmitil (inhaled)',
    company: 'Insmed',
    mechanism: 'Inhaled prostacyclin analogue prodrug — same drug class as Tyvaso, distinct formulation',
    approvedIndications: ['None yet — investigational'],
    keyTrials: [
      'Phase II in PPF/IPF — ongoing',
      'Phase III in PH-ILD — ongoing',
    ],
    strengths: [
      'Prodrug formulation designed for extended pulmonary retention and less frequent dosing',
      'Backed by Insmed\'s inhaled-delivery development experience',
    ],
    weaknesses: [
      'Earlier-stage than Tyvaso/TETON — no Phase III IPF data yet',
      'Same category-confusion risk as Tyvaso — different mechanism than an inhaled antifibrotic',
    ],
    strategicThreatLevel: 'Low-Medium',
    marketStatus: 'Investigational — Phase II/III',
    summary:
      'TPIP is an earlier-stage version of the same inhaled-prostacyclin category risk that Tyvaso/TETON represents. Its primary relevance to Avalyn is reinforcing the need for a durable mechanism-differentiation narrative as more "inhaled" therapies enter the ILD conversation.',
  },
  {
    id: 'comp-003',
    name: 'Ofev',
    genericName: 'nintedanib (oral)',
    company: 'Boehringer Ingelheim',
    mechanism: 'Oral tyrosine kinase inhibitor targeting VEGFR, FGFR and PDGFR',
    approvedIndications: [
      'Idiopathic pulmonary fibrosis (IPF)',
      'Progressive pulmonary fibrosis (PPF) — INBUILD',
      'SSc-ILD — SENSCIS',
    ],
    keyTrials: [
      'INPULSIS-1/-2 — Phase III, IPF, reduced FVC decline',
      'INBUILD — Phase III, PPF, reduced FVC decline across multiple ILD etiologies',
      'SENSCIS — Phase III, SSc-ILD, reduced FVC decline',
    ],
    strengths: [
      'Broadest approved indication footprint of any antifibrotic (IPF, PPF, SSc-ILD)',
      'Deep, decade-plus real-world evidence base and prescriber familiarity',
      'Established market access and reimbursement pathways across major markets',
    ],
    weaknesses: [
      'Diarrhea in 62-76% of patients; ~21% discontinuation vs. ~15% on placebo',
      'GI tolerability burden is the specific gap AP02 is designed to address',
      'No inhaled/lung-targeted formulation of its own',
    ],
    strategicThreatLevel: 'High',
    marketStatus: 'Approved and launched globally across IPF, PPF and SSc-ILD',
    summary:
      'Ofev is the standard-of-care incumbent AP02 is most directly positioned against. Its tolerability burden — particularly GI — is well documented and is the central evidentiary target for Avalyn\'s inhaled-reformulation thesis. Its indication breadth (including SSc-ILD via SENSCIS) also means it is the incumbent Avalyn must displace in the rheumatology-adjacent CTD-ILD conversation.',
  },
  {
    id: 'comp-004',
    name: 'Jascayd',
    genericName: 'nerandomilast (oral)',
    company: 'Boehringer Ingelheim',
    mechanism: 'Oral PDE4B inhibitor — first new IPF mechanism in a decade',
    approvedIndications: [
      'Idiopathic pulmonary fibrosis (IPF) — approved Oct 2025',
      'Progressive pulmonary fibrosis (PPF) — approved Dec 2025',
    ],
    keyTrials: [
      'FIBRONEER-IPF — Phase III, IPF, positive FVC readout (NEJM 2025)',
      'FIBRONEER-ILD — Phase III, PPF',
    ],
    strengths: [
      'Genuinely novel mechanism — not another TKI or antifibrotic reformulation',
      'Rapid, back-to-back approvals in IPF and PPF within a single quarter',
      'Actively reshaping first-line sequencing conversations in the field (AI6)',
    ],
    weaknesses: [
      'Still an oral therapy — the GI/systemic tolerability question is not yet fully characterized in practice',
      'No inhaled or lung-targeted delivery option',
    ],
    strategicThreatLevel: 'High',
    marketStatus: 'Approved and recently launched in IPF and PPF',
    summary:
      'Nerandomilast is the most consequential recent competitive event — a genuinely new oral mechanism, not just an incremental improvement on pirfenidone/nintedanib. It is actively reshaping how pulmonologists think about first-line sequencing, and Avalyn\'s response (A8, rapid-response briefing) treats it as a standing competitive-intelligence priority rather than a one-time event.',
  },
  {
    id: 'comp-005',
    name: 'admilparant',
    genericName: 'BMS-986278 (oral)',
    company: 'Bristol Myers Squibb',
    mechanism: 'Oral LPA1 (lysophosphatidic acid receptor 1) antagonist',
    approvedIndications: ['None yet — investigational'],
    keyTrials: [
      'Phase III in IPF — ongoing',
      'Phase III in PPF — ongoing',
    ],
    strengths: [
      'Novel oral mechanism with Phase III programs in both IPF and PPF simultaneously',
      'Backed by BMS commercial and development infrastructure',
    ],
    weaknesses: [
      'No approved indication yet — data still pending',
      'Oral delivery carries the same systemic-exposure profile question as other oral antifibrotics',
    ],
    strategicThreatLevel: 'Medium',
    marketStatus: 'Investigational — Phase III',
    summary:
      'admilparant is an emerging oral-mechanism competitor to monitor rather than actively counter today. Its dual IPF/PPF Phase III program mirrors Avalyn\'s own dual-indication strategy across AP01 and AP02, making it a useful long-horizon comparator for evidence-generation planning.',
  },
  {
    id: 'comp-006',
    name: 'Esbriet',
    genericName: 'pirfenidone (oral)',
    company: 'Roche / Genentech',
    mechanism: 'Oral antifibrotic (pyridone) — same active compound class as AP01, delivered orally',
    approvedIndications: ['Idiopathic pulmonary fibrosis (IPF)'],
    keyTrials: [
      'ASCEND — Phase III, IPF, reduced FVC decline',
      'CAPACITY — Phase III, IPF, reduced FVC decline',
    ],
    strengths: [
      'Long-established originator with extensive real-world experience',
      'Same underlying antifibrotic mechanism AP01 is built on — a known, well-characterized efficacy profile',
    ],
    weaknesses: [
      'Facing generic erosion, weakening commercial position',
      'Nausea (36%) and rash (30%) drive 14.6% discontinuation vs. 9.6% on placebo',
      'No inhaled or lung-targeted formulation',
    ],
    strategicThreatLevel: 'Medium',
    marketStatus: 'Facing generic erosion; oral pirfenidone genericized in most markets',
    summary:
      'Esbriet is the direct oral analog of AP01\'s active compound — the tolerability data on generic oral pirfenidone (GI and dermatologic AEs) is the clearest evidentiary anchor for AP01\'s inhaled-reformulation thesis. Its commercial decline via genericization reduces its threat as a branded competitor but keeps its tolerability profile highly relevant to the differentiation narrative.',
  },
];

export const MARKET_ACCESS_INTELLIGENCE = {
  pricingContext:
    'Avalyn is a clinical-stage company (IPO\'d Nasdaq: AVLN, April 2026) with no approved, commercially priced product yet. Market access strategy is being built in parallel with clinical development, anchored on the tolerability-driven value proposition versus generic oral pirfenidone and branded Ofev/Jascayd, once AP01/AP02 reach registration.',
  remsProgram:
    'No REMS program applies to AP01 or AP02 at this stage — both are pre-registration. Inhaled nebulized delivery via the PARI eFlow®/eRapid platform will require device training and patient education infrastructure at launch, distinct from oral dosing.',
  payerChallenges: [
    'Anticipated step-therapy dynamics: payers will likely require documented intolerance to oral pirfenidone/nintedanib before covering an inhaled reformulation, absent superiority data',
    'Device-and-drug combination products (nebulizer + formulation) often face more complex reimbursement pathways than oral-only therapies',
    'Outcomes-based contracting models are increasingly discussed for high-cost respiratory therapies and will likely apply at launch',
    'International reference pricing and HTA bodies will scrutinize company-reported PK/exposure claims closely — independent replication will matter for market access, not just clinical credibility',
  ],
  orphanDrugDynamics:
    'PPF and CTD-ILD/SSc-ILD populations may qualify for orphan-adjacent regulatory pathways in some markets given smaller population sizes relative to broad IPF, though no orphan designation has been publicly confirmed for any Avalyn asset — do not present designation status as confirmed.',
};

// Fibrosis / inhaled-delivery biology — replaces the Alexion-era complement
// biology reference module. Field names (overview / c5Inhibition /
// proximalInhibition / diseaseConnections) are kept for rag.js compatibility
// but content is fully rewritten for the pulmonary fibrosis/ILD space.
export const FIBROSIS_BIOLOGY = {
  overview:
    'Pulmonary fibrosis is a progressive scarring process in which recurrent alveolar epithelial injury drives fibroblast activation, myofibroblast differentiation, and excessive extracellular matrix deposition, progressively stiffening lung tissue and impairing gas exchange. IPF is the prototypical idiopathic form; progressive pulmonary fibrosis (PPF) describes a similar trajectory across multiple non-IPF etiologies, including connective-tissue-disease-associated ILD (CTD-ILD). Both approved oral antifibrotics — pirfenidone and nintedanib — target this fibrotic cascade through distinct but overlapping mechanisms, and both carry meaningful systemic tolerability burden at oral doses required to achieve adequate lung exposure.',
  c5Inhibition:
    'Pirfenidone (the active compound in AP01 and in Esbriet) is thought to act through multiple pathways including inhibition of TGF-β-mediated fibroblast proliferation and collagen synthesis, along with anti-inflammatory effects. At oral doses required for adequate lung tissue concentration, pirfenidone produces meaningful systemic exposure — associated with GI (nausea, dyspepsia) and dermatologic (photosensitive rash) adverse events that drive discontinuation in a meaningful minority of patients. AP01 reformulates pirfenidone for direct inhaled delivery via the PARI eFlow® platform, with the goal of concentrating drug in lung tissue while sharply reducing systemic exposure — company-reported reductions of roughly 15-68x versus oral dosing, not yet independently replicated.',
  proximalInhibition:
    'Nintedanib (the active compound in AP02 and in Ofev) is a small-molecule tyrosine kinase inhibitor targeting VEGFR, FGFR and PDGFR signaling implicated in fibroblast proliferation and migration. Oral nintedanib carries a well-documented GI tolerability burden — diarrhea in 62-76% of patients, with roughly 21% discontinuation versus 15% on placebo. AP02 applies the same inhaled-reformulation logic as AP01: deliver nintedanib directly to lung tissue via the eFlow® platform to preserve antifibrotic efficacy while reducing the systemic exposure responsible for GI toxicity. Distinct from either antifibrotic mechanism, inhaled prostacyclin analogues (treprostinil, in Tyvaso/TETON and TPIP) act through IP-receptor-mediated vasodilatory and anti-proliferative signaling — a different pharmacology entirely, despite sharing the "inhaled" delivery route.',
  diseaseConnections: {
    IPF:
      'Idiopathic pulmonary fibrosis (IPF) is a chronic, progressive fibrosing interstitial lung disease of unknown cause, typically presenting in patients over 60 with a UIP (usual interstitial pneumonia) radiographic/histologic pattern. Prevalence estimates vary widely by case definition (roughly 30-90 per 100,000). Median survival without treatment is historically 3-5 years from diagnosis. Both oral pirfenidone and oral nintedanib are approved and slow FVC decline, but neither halts or reverses fibrosis, and tolerability-driven discontinuation remains a persistent adherence challenge. AP02 (inhaled nintedanib) is being developed specifically for treatment-naive IPF via the AURA-IPF Phase 2 trial.',
    PPF:
      'Progressive pulmonary fibrosis (PPF) describes a shared clinical trajectory of worsening fibrosis across multiple non-IPF ILD etiologies — including CTD-ILD, hypersensitivity pneumonitis, and unclassifiable ILD — once patients meet defined criteria for physiological, symptomatic or radiographic progression. Verified prevalence is approximately 70.3 per 100,000 (Olson et al., 2021). Nintedanib is approved for PPF (INBUILD trial); pirfenidone has no PPF approval, which is the gap AP01\'s MIST trial (Phase 2b) is designed to address.',
    'CTD-ILD':
      'Connective-tissue-disease-associated interstitial lung disease (CTD-ILD) encompasses ILD arising in the context of autoimmune conditions such as rheumatoid arthritis, systemic sclerosis, and inflammatory myositis. Management sits at the intersection of rheumatology and pulmonology, and referral timing is frequently inconsistent — a recurring field signal (AI1, AI4) that Avalyn\'s referral-pathway and screening-algorithm work is designed to address.',
    'SSc-ILD':
      'Systemic sclerosis-associated interstitial lung disease (SSc-ILD) is the leading cause of death in systemic sclerosis, accounting for roughly a third of SSc-related mortality. Systemic sclerosis affects approximately 1 in 6,500 adults. Nintedanib is approved for SSc-ILD (SENSCIS trial); first-line management often centers on immunosuppression (commonly mycophenolate mofetil), with tocilizumab (Actemra) also approved. No pirfenidone-class agent is currently approved for SSc-ILD — the population AP01\'s MIST trial is powered to include, and the reason EULAR (a rheumatology congress) is a strategic priority alongside ATS/ERS.',
  },
};

// Back-compat alias — some legacy call sites may still reference the old
// identifier during the transition; both point to the same object.
export const COMPLEMENT_BIOLOGY = FIBROSIS_BIOLOGY;

export const PIPELINE_INTELLIGENCE = [
  {
    id: 'pipe-001',
    name: 'AP01 (inhaled pirfenidone)',
    mechanism:
      'Inhaled reformulation of pirfenidone delivered via the PARI eFlow®/eRapid nebulizer platform, targeting lung-tissue concentration with reduced systemic exposure',
    stage: 'Phase 2b (MIST, NCT06329401)',
    indication: 'Progressive pulmonary fibrosis (PPF), including CTD-ILD (RA-ILD, SSc-ILD, HP)',
    expectedTimeline:
      'Enrollment of 375 patients completed June 2026; topline FVC-at-week-52 data expected H2 2027',
    significance:
      'AP01 is Avalyn\'s lead and most advanced asset. Its earlier Phase 1b ATLAS trial (Thorax, 2023) showed a real dose-response signal — 100mg BID produced near-stabilized FVC through 48 weeks versus continued decline at the lower dose, though without a placebo arm. MIST is designed to generate the first pirfenidone-class evidence in PPF and CTD-ILD, indications where nintedanib is approved but pirfenidone is not — directly relevant to the EULAR/SSc-ILD strategic priority.',
  },
  {
    id: 'pipe-002',
    name: 'AP02 (inhaled nintedanib)',
    mechanism:
      'Inhaled reformulation of nintedanib via the same eFlow®/eRapid platform, aiming to preserve antifibrotic efficacy while reducing the systemic exposure responsible for GI toxicity',
    stage: 'Phase 2 (AURA-IPF, NCT07194382)',
    indication: 'Idiopathic pulmonary fibrosis (IPF), treatment-naive',
    expectedTimeline: 'First patient dosed March 2026; data expected late 2027',
    significance:
      'AP02 targets the largest and most-studied antifibrotic indication (IPF) and the most extensively documented oral tolerability burden (Ofev\'s 62-76% diarrhea rate). Following nerandomilast\'s late-2025 approvals, AP02\'s positioning increasingly needs to address not just Ofev but the broader question of how an inhaled reformulation fits once a genuinely new oral mechanism exists.',
  },
  {
    id: 'pipe-003',
    name: 'AP03 (inhaled pirfenidone + nintedanib fixed-dose combination)',
    mechanism:
      'Fixed-dose combination of inhaled pirfenidone and inhaled nintedanib via the eFlow® platform, exploring whether combined antifibrotic mechanisms delivered locally can outperform either agent alone without compounding systemic toxicity',
    stage: 'Preclinical / IND-enabling',
    indication: 'Pulmonary fibrosis — specific lead indication not yet finalized',
    expectedTimeline: 'Phase 1 planned for later 2026',
    significance:
      'AP03 is Avalyn\'s longest-horizon asset and its clearest platform-differentiation play — no competitor has announced an inhaled fixed-dose combination antifibrotic. It provides pipeline depth beyond AP01/AP02 and a potential answer to the "why not just take both orally" question once combination oral regimens are studied.',
  },
];
