// Congress roster — Demo Brief §3 (+ §8 for per-congress ARIA data).
// Avalyn's three named congresses: ATS (pulmonology), ERS (pulmonology),
// EULAR (rheumatology — SSc-ILD/CTD-ILD messaging).

export const CONGRESS_OPTIONS = [
  {
    id: 'ats-2026',
    name: 'ATS 2026',
    fullName: 'American Thoracic Society International Conference 2026',
    location: 'Orlando, FL',
    date: 'May 15–20, 2026',
    available: true,
  },
  {
    id: 'eular-2026',
    name: 'EULAR 2026',
    fullName: 'EULAR Congress 2026',
    location: 'London, UK (ExCeL)',
    date: 'Jun 3–6, 2026',
    available: true,
  },
  {
    id: 'trend-ats-eular',
    name: 'Trend: ATS → EULAR',
    fullName: 'Sentiment trend ATS 2026 to EULAR 2026',
    location: '—',
    date: '—',
    available: true,
    isTrend: true,
  },
  {
    id: 'ers-2026',
    name: 'ERS 2026',
    fullName: 'European Respiratory Society International Congress 2026',
    location: 'Barcelona, Spain',
    date: 'Sep 5–9, 2026',
    available: true,
  },
  { id: 'ats-2027',   name: 'ATS 2027',   fullName: 'American Thoracic Society International Conference 2027', location: 'TBD', date: 'May 2027', available: false, comingSoon: true },
  { id: 'eular-2027', name: 'EULAR 2027', fullName: 'EULAR Congress 2027',                                     location: 'TBD', date: 'June 2027', available: false, comingSoon: true },
];
