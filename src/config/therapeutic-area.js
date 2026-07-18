// Therapeutic area — Demo Brief §3.

export const THERAPEUTIC_AREA = {
  name: 'Pulmonary Fibrosis / Interstitial Lung Disease',
  subIndications: ['IPF', 'PPF', 'CTD-ILD', 'SSc-ILD'],
  // Key competitors (name, company, MoA, competitive posture).
  competitors: [
    {
      name: 'Tyvaso / Tyvaso DPI',
      generic: 'treprostinil (inhaled)',
      company: 'United Therapeutics',
      moa: 'Inhaled prostacyclin analogue',
      posture: 'Most advanced inhaled competitor, but a different drug class — TETON-1/TETON-2 both met primary FVC endpoint in IPF (NEJM). Not a like-for-like inhaled antifibrotic.',
    },
    {
      name: 'TPIP',
      generic: 'treprostinil palmitil (inhaled)',
      company: 'Insmed',
      moa: 'Inhaled prostacyclin analogue (prodrug)',
      posture: 'Earlier-stage inhaled competitor — Phase 2 in PPF/IPF, Phase 3 in PH-ILD. Same category-ambiguity risk as Tyvaso.',
    },
    {
      name: 'Ofev',
      generic: 'nintedanib (oral)',
      company: 'Boehringer Ingelheim',
      moa: 'Oral tyrosine kinase inhibitor',
      posture: 'Standard-of-care incumbent in IPF, SSc-ILD (SENSCIS) and PPF (INBUILD). Tolerability burden (diarrhea 62-76%, 21% discontinuation) is Avalyn\'s core wedge.',
    },
    {
      name: 'Jascayd',
      generic: 'nerandomilast (oral)',
      company: 'Boehringer Ingelheim',
      moa: 'Oral PDE4B inhibitor',
      posture: 'Newest oral mechanism — approved IPF Oct 2025, PPF Dec 2025. First new IPF mechanism in a decade; reshaping first-line sequencing conversations.',
    },
    {
      name: 'admilparant',
      generic: 'BMS-986278 (oral)',
      company: 'Bristol Myers Squibb',
      moa: 'Oral LPA1 antagonist',
      posture: 'Phase 3 in both IPF and PPF. Emerging oral mechanism competitor to watch.',
    },
    {
      name: 'Esbriet',
      generic: 'pirfenidone (oral)',
      company: 'Roche / Genentech',
      moa: 'Oral antifibrotic (pyridone)',
      posture: 'Facing generic erosion. Same oral tolerability burden (nausea 36%, rash 30%, 14.6% discontinuation) that AP01 is designed to reduce via inhaled reformulation.',
    },
  ],
  // Patient advocacy / society orgs worth namechecking.
  advocacyOrgs: [
    'Pulmonary Fibrosis Foundation (PFF)',
    'Scleroderma Foundation',
    'EUSTAR (EULAR Scleroderma Trials and Research group)',
  ],
};
