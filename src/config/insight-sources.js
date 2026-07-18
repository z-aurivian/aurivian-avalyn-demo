// Insight Source Value Matrix — NOVA's "Insight Sources & Impact" tab.
// Quantifies the value of each insight-source channel: volume,
// quality, leads-to-action, cost, and an aggregated ROI score.

export const INSIGHT_SOURCES = [
  { id: 'is-1', source: 'MSL Field Reports',        volume: 486, qualityScore: 84, leadsToActionPct: 44, costPerInsight: 210,  roiScore: 8.0 },
  { id: 'is-2', source: 'Advisory Boards',           volume: 22,  qualityScore: 95, leadsToActionPct: 77, costPerInsight: 4800, roiScore: 8.7 },
  { id: 'is-3', source: 'Congress Feedback (ATS/ERS/EULAR)', volume: 158, qualityScore: 79, leadsToActionPct: 38, costPerInsight: 960,  roiScore: 6.6 },
  { id: 'is-4', source: 'Med Info Inquiries',        volume: 312, qualityScore: 70, leadsToActionPct: 25, costPerInsight: 52,   roiScore: 7.3 },
  { id: 'is-5', source: 'Social Listening',          volume: 1840, qualityScore: 38, leadsToActionPct: 7,  costPerInsight: 14,   roiScore: 4.1 },
  { id: 'is-6', source: 'Patient Advocacy Engagement (PFF / Scleroderma Foundation)', volume: 64, qualityScore: 61, leadsToActionPct: 19, costPerInsight: 340, roiScore: 5.5 },
];

// KIT Relevance Trend — 6-month relevance score per KIT.
export const KIT_RELEVANCE_TREND = [
  { month: 'Jan 2026', 'Route Differentiation': 71, 'Tolerability Burden': 82, 'SSc-ILD Referral': 62, 'Nerandomilast Response': 40, 'Trial Awareness': 69 },
  { month: 'Feb 2026', 'Route Differentiation': 74, 'Tolerability Burden': 85, 'SSc-ILD Referral': 65, 'Nerandomilast Response': 48, 'Trial Awareness': 70 },
  { month: 'Mar 2026', 'Route Differentiation': 79, 'Tolerability Burden': 87, 'SSc-ILD Referral': 68, 'Nerandomilast Response': 58, 'Trial Awareness': 71 },
  { month: 'Apr 2026', 'Route Differentiation': 84, 'Tolerability Burden': 90, 'SSc-ILD Referral': 72, 'Nerandomilast Response': 71, 'Trial Awareness': 72 },
  { month: 'May 2026', 'Route Differentiation': 89, 'Tolerability Burden': 93, 'SSc-ILD Referral': 78, 'Nerandomilast Response': 85, 'Trial Awareness': 73 },
  { month: 'Jun 2026', 'Route Differentiation': 92, 'Tolerability Burden': 95, 'SSc-ILD Referral': 81, 'Nerandomilast Response': 90, 'Trial Awareness': 74 },
];
