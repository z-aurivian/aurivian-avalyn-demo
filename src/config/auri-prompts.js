// Auri canned Q&A — Demo Brief §12.
// Backs the chatbot's suggested prompts and the offline/fallback path.

export const AURI_PROMPTS = [
  {
    prompt: 'Where are our biggest strategic coverage gaps?',
    response:
      'Two MO-level gaps stand out right now:\n\n• **MO3 (Tolerability/adherence narrative)** — flagged Gap despite AI3 being the highest-recurrence insight this cycle (4 sources). The conversation guide (A5) is Accepted but not yet fully deployed across all territories.\n• **MO5 (Inhaled-category competitive response)** — flagged Gap. Nerandomilast\'s approval (AI6) and inhaled-prostacyclin mechanism confusion (AI5) are both active but the response materials (A7, A8) are still in progress.',
    cites: [
      { type: 'mo', id: 'MO3' },
      { type: 'mo', id: 'MO5' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI6' },
      { type: 'action', id: 'A5' },
    ],
  },
  {
    prompt: 'Summarise the most important signals from the last congress cycle.',
    response:
      'Three themes dominated ATS 2026:\n\n1. **Tolerability burden vs. oral antifibrotics** (highest MSL recurrence) — patients and physicians describing GI/dermatologic AEs as the top discontinuation driver on Esbriet/Ofev.\n2. **Nerandomilast sequencing questions** — the newly approved oral PDE4B mechanism pulled Q&A in multiple sessions regardless of scheduled topic.\n3. **Inhaled-category confusion** — several attendees conflated an inhaled antifibrotic with inhaled treprostinil (Tyvaso/TPIP), reinforcing the need for a mechanism-differentiation deck.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI6' },
      { type: 'insight', id: 'AI5' },
    ],
  },
  {
    prompt: 'Which insights are driving the most action right now?',
    response:
      '**AI3 (Tolerability burden)** is the most load-bearing — recurs 4× this cycle, confidence 89%, Prioritised. The conversation guide (A5) is Accepted and already deployed to Field Medical.\n\n**AI6 (Nerandomilast reshaping sequencing)** is the most strategically time-sensitive — A8 (rapid-response briefing) has been flagged *Changed* impact, having shifted MSL scientific-exchange materials within 3 weeks of the signal.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI6' },
      { type: 'action', id: 'A5' },
      { type: 'action', id: 'A8' },
    ],
  },
  {
    prompt: 'Who should we engage for the SSc-ILD screening push?',
    response:
      'The most pragmatic path runs through Oliver Distler (SENSCIS PI, EUSTAR) and Christopher Denton (UCL/Royal Free, EULAR-local) — both Tier 1 and already engaged on AP01\'s CTD-ILD data at EULAR 2025/2026. Dinesh Khanna (Michigan) is a strong complementary voice given his co-location with pulmonology KOL Kevin Flaherty — a natural rheum-pulm co-management pairing for the screening algorithm (A6).',
    cites: [
      { type: 'kol', id: 'kol-13' },
      { type: 'kol', id: 'kol-16' },
      { type: 'kol', id: 'kol-14' },
      { type: 'action', id: 'A6' },
    ],
  },
  {
    prompt: 'How is AP01 different from the inhaled treprostinil competitors?',
    response:
      'AP01 is an inhaled reformulation of pirfenidone — an antifibrotic — while Tyvaso/Tyvaso DPI (United Therapeutics) and TPIP (Insmed) are inhaled prostacyclin analogues, a vasodilator mechanism. TETON-1/TETON-2 both met their primary FVC endpoint in IPF via a different biological pathway. AP01\'s differentiation is route of administration on a proven antifibrotic mechanism, not a novel mechanism itself — the mechanism-differentiation deck (A7) is being built specifically to resolve field confusion on this point (AI5).',
    cites: [
      { type: 'insight', id: 'AI5' },
      { type: 'action', id: 'A7' },
      { type: 'kol', id: 'kol-8' },
    ],
  },
  {
    prompt: 'What is the status of the MIST trial?',
    response:
      'MIST (Phase 2b, NCT06329401) is evaluating AP01 in progressive pulmonary fibrosis, including CTD-ILD, with FVC at week 52 as the primary endpoint. Enrollment of 375 patients completed in June 2026; topline data are expected H2 2027. The earlier ATLAS Phase 1b trial (published in *Thorax*, 2023) showed a dose-response signal at 100mg BID with near-stabilized FVC through 48 weeks vs. continued decline at the lower dose, though without a placebo arm.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI7' },
    ],
  },
  {
    prompt: 'What would NOVA change about the current plan if given free rein?',
    response:
      'Three concrete changes:\n\n1. **Prioritise A5 deployment (tolerability conversation guide) to the remaining territories** — MO3 is a Gap despite AI3 being the single highest-recurrence insight.\n2. **Accelerate the mechanism-differentiation deck (A7)** — AI5\'s confusion risk compounds every cycle inhaled treprostinil data (TETON, TPIP) gets more airtime.\n3. **Formalise the MIST/CTD-ILD referral line (A2)** — AI1 is Prioritised and the single-point-of-contact fix is low-cost, high-leverage.',
    cites: [
      { type: 'mo', id: 'MO3' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI5' },
      { type: 'action', id: 'A7' },
      { type: 'action', id: 'A2' },
    ],
  },
  {
    prompt: 'What is Avalyn\'s pipeline?',
    response:
      'Three inhaled programs, all built on the PARI eFlow® nebulizer platform:\n\n• **AP01** — inhaled pirfenidone, progressive pulmonary fibrosis (PPF) including CTD-ILD/SSc-ILD. Lead trial: MIST (Ph2b), enrollment complete, topline H2 2027.\n• **AP02** — inhaled nintedanib, treatment-naive IPF. Lead trial: AURA-IPF (Ph2), first patient dosed March 2026, data late 2027.\n• **AP03** — inhaled pirfenidone + nintedanib fixed-dose combination. Preclinical/IND-enabling, Phase 1 planned later 2026.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI2' },
    ],
  },
  {
    prompt: 'Which KOLs bridge pulmonology and rheumatology on SSc-ILD?',
    response:
      'Vincent Cottin (Lyon) is the clearest bridge — active in both fibrosing-ILD pulmonology and CTD-ILD referral pathways, and LUCA flags him as increasingly framing referral as a joint pulm-rheum responsibility. Toby Maher and Ivan Rosas also touch CTD-ILD from the pulmonology side, while Oliver Distler, Dinesh Khanna and Christopher Denton anchor the rheumatology side — Khanna and Flaherty\'s shared Michigan affiliation is a natural co-management pairing to feature in referral-pathway materials.',
    cites: [
      { type: 'kol', id: 'kol-7' },
      { type: 'kol', id: 'kol-13' },
      { type: 'kol', id: 'kol-14' },
      { type: 'kol', id: 'kol-1' },
    ],
  },
  {
    prompt: 'How should we respond to nerandomilast\'s approval?',
    response:
      'Nerandomilast (Jascayd, Boehringer) was approved in IPF (Oct 2025) and PPF (Dec 2025) — the first new IPF mechanism in a decade, and it\'s actively reshaping first-line sequencing conversations in the field (AI6, 3× recurrence). A8 (rapid-response briefing and MSL sequencing FAQ) was produced within 3 weeks of the signal and has already lifted MSL sequencing-confidence from 52% to 78% (i2i-3). The next step is positioning AP02 as a route-of-administration choice that can be considered alongside, not only after, oral mechanism options.',
    cites: [
      { type: 'insight', id: 'AI6' },
      { type: 'action', id: 'A8' },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'Where are our biggest strategic coverage gaps?',
  'Summarise the most important signals from the last congress cycle.',
  'How is AP01 different from the inhaled treprostinil competitors?',
  'Who should we engage for the SSc-ILD screening push?',
  'What would NOVA change about the current plan if given free rein?',
];
