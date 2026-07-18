// Background signals — Demo Brief §11.
// Legacy feed that also powers the Insight Journey kanban's Captured-lane
// "fresh signal" cards. Derivative of predictive-signals.js.

export const SIGNALS = [
  {
    agent: 'LUCA',
    timestamp: '2026-06-15T09:12:00Z',
    headline: '2 emerging SSc-ILD KOLs crossed the watch threshold ahead of EULAR',
    context: 'Publication cadence and EUSTAR-affiliated congress-speaking frequency both up meaningfully vs. prior 6 months. Neither is currently on the SSc-ILD engagement list.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    agent: 'ARIA',
    timestamp: '2026-06-13T15:30:00Z',
    headline: 'Nerandomilast (Jascayd) sequencing questions dominating ATS session Q&A',
    context: 'Multiple ATS 2026 sessions pivoted mid-Q&A to PDE4B sequencing regardless of scheduled topic. No equivalent Avalyn response material currently distributed.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-06-12T11:00:00Z',
    headline: 'Recurrence threshold hit: tolerability-burden discontinuation narrative',
    context: 'Insight AI3 recorded a fourth source this month — now Prioritised status. Strategy-to-Action recommends full deployment of the tolerability/adherence conversation guide.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    agent: 'LUCA',
    timestamp: '2026-06-10T08:45:00Z',
    headline: 'Sentiment shift: Vincent Cottin increasingly bridging pulm/rheum referral',
    context: 'Two recent congress talks and a co-authored EULAR abstract show Cottin framing CTD-ILD/PPF referral as a joint pulm-rheum responsibility.',
    suggestedAction: { label: 'Open KOL profile', path: '/kol' },
  },
  {
    agent: 'NOVA',
    timestamp: '2026-06-08T16:20:00Z',
    headline: 'New publication on ATLAS dose-response data cited at ERS satellite session',
    context: 'ATLAS Ph1b data (100mg BID near-stabilized FVC through 48 weeks) resurfaced in scientific exchange. Relevant to MO1 (MIST evidence generation) and AI7.',
    suggestedAction: { label: 'Open in NOVA', path: '/insights' },
  },
];
