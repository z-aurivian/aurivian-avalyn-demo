// Portfolio — Demo Brief §2.
// Products surface in the header selector and scope most agent views.

export const PRODUCT_OPTIONS = [
  {
    id: 'ap01',
    name: 'AP01',
    generic: 'inhaled pirfenidone',
    indications: ['Progressive Pulmonary Fibrosis (PPF)', 'CTD-ILD', 'SSc-ILD'],
    stage: 'Phase 2b (MIST)',
  },
  {
    id: 'ap02',
    name: 'AP02',
    generic: 'inhaled nintedanib',
    indications: ['Idiopathic Pulmonary Fibrosis (IPF)'],
    stage: 'Phase 2 (AURA-IPF)',
  },
  {
    id: 'ap03',
    name: 'AP03',
    generic: 'inhaled pirfenidone + nintedanib (fixed-dose combination)',
    indications: ['Pulmonary Fibrosis (indication TBD)'],
    stage: 'Preclinical / IND-enabling',
  },
];

// Platform / mechanism lens — Avalyn's cross-asset platform is the PARI
// eFlow® / eRapid nebulizer system underlying all three programs.
export const PLATFORM_LENS = {
  name: 'PARI eFlow®',
  description:
    'Exclusively licensed eFlow®/eRapid nebulizer platform (2017) used to reformulate proven oral antifibrotics for targeted lung delivery, aiming to preserve efficacy while sharply reducing systemic exposure (company-reported).',
  appliesToProducts: ['ap01', 'ap02', 'ap03'],
};
