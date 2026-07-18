// Insight-to-Impact — Vision Doc Module 2 (Insights to Action) impact view.
// Surfaces the lineage from a captured insight → action taken → measurable
// outcome, with timeframe and impact score.

export const INSIGHT_TO_IMPACT = [
  {
    id: 'i2i-1',
    insight: 'Community rheumatologists lack a clear MIST/CTD-ILD referral pathway.',
    action: 'MIST/CTD-ILD referral eligibility checklist deployed to Field Medical across US + UK/EU territories.',
    outcome: '+21% referral-conversation rate in tracked rheumatology accounts; community-site inquiries to the MIST coordinating team up 1.8×.',
    timeframe: '6 weeks',
    impactScore: 8,
    relatedInsight: 'AI1',
    relatedMO: 'MO1',
  },
  {
    id: 'i2i-2',
    insight: 'Tolerability burden is the leading discontinuation driver cited in the field.',
    action: 'Tolerability/adherence conversation guide built and deployed contrasting inhaled vs. oral GI/hepatic/dermatologic burden.',
    outcome: 'Guide adopted in 9 of 12 pulmonology KOL scientific-exchange sessions in Q2; MSL-reported adherence-question resolution up meaningfully.',
    timeframe: '8 weeks',
    impactScore: 8,
    relatedInsight: 'AI3',
    relatedMO: 'MO3',
  },
  {
    id: 'i2i-3',
    insight: 'Nerandomilast approval is reshaping first-line IPF sequencing questions in the field.',
    action: 'Rapid-response briefing and MSL sequencing FAQ produced within 3 weeks of the signal being flagged.',
    outcome: 'MSL confidence score on sequencing questions (self-reported) rose from 52% to 78% across the pulmonology field team.',
    timeframe: '3 weeks',
    impactScore: 7,
    relatedInsight: 'AI6',
    relatedMO: 'MO5',
  },
  {
    id: 'i2i-4',
    insight: 'SSc-ILD patients are reaching pulmonology evaluation too late in the disease course.',
    action: 'Scoping session held with EULAR-aligned rheumatology KOLs on an EUSTAR-consistent screening algorithm.',
    outcome: 'Draft screening algorithm co-authored with 2 Tier 1 rheumatology KOLs; scheduled for EULAR 2026 advisory board review.',
    timeframe: '10 weeks',
    impactScore: 6,
    relatedInsight: 'AI4',
    relatedMO: 'MO4',
  },
];
