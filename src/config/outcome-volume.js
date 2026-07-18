// Outcome Volume (RaaS) — Demo Brief §10.
// Powers the persistent header chip. Results-as-a-Service: customers
// pre-commit to an outcome volume; we show real-time consumed/remaining.

export const OUTCOME_VOLUME = {
  period: 'Q2 2026',
  committed: 760,
  consumed: 512,
  // Optional per-agent breakdown
  byAgent: {
    aria: { committed: 250, consumed: 178 },
    luca: { committed: 260, consumed: 169 },
    nova: { committed: 250, consumed: 165 },
  },
  // Optional momentum note ("+12% vs last quarter")
  momentumNote: '+9% vs Q1 2026',
};
