import React, { useState } from 'react';
import {
  Users, MapPin, TrendingUp, TrendingDown, ChevronDown, ChevronUp,
  FileDown, Sparkles, AlertCircle, Activity, BookOpen,
  Target,
} from 'lucide-react';
import {
  MEDICAL_OBJECTIVES, COVERAGE_TARGETS, LISTENING_PRIORITIES,
  KIT_SCORECARDS, KOL_DATA, INSIGHTS, getMessagingAlignment,
} from '../config';

// ─── Mock data ─────────────────────────────────────────────────────────────

const MSL_OPTIONS = ['Maya Sorensen — Northeast US', 'Derek Okafor — Southeast US', 'Priya Chandrasekaran — Midwest US', 'Jordan Reyes — West US', 'Sophie Bergman — UK & Ireland', 'Lukas Richter — Continental Europe'];

// LP7 is a mock gap row (mirrors NovaTab3InsightIntelligence's LP7_MOCK) —
// it mirrors Gap Radar's proposed new LP under MO3 (patient-reported
// tolerability voice), which has no ISP config entry because it has never
// generated an insight yet.
const LP7_MOCK = {
  id: 'LP7', name: 'Patient-reported tolerability voice', moRef: 'MO3',
  kiq: 'What tolerability signals are patients reporting directly through advocacy channels, independent of MSL relay?',
  kits: ['Patient advocacy monitoring protocol'],
};

const MSL_PERFORMANCE = [
  { msl: 'Maya Sorensen',        territory: 'Northeast US',       status: 'Excellent',     interactions: 44, target: 40, delta: '+4', qualityScore: 86, kitSignals: 4, kolsAtRisk: 1, note: 'High interaction quality. Strong MIST/CTD-ILD referral focus.' },
  { msl: 'Derek Okafor',         territory: 'Southeast US',       status: 'Excellent',     interactions: 41, target: 39, delta: '+2', qualityScore: 83, kitSignals: 5, kolsAtRisk: 1, note: 'Tolerability-narrative conversations driving strong insight capture.' },
  { msl: 'Priya Chandrasekaran', territory: 'Midwest US',         status: 'Quality gap',   interactions: 38, target: 39, delta: '−1', qualityScore: 64, kitSignals: 2, kolsAtRisk: 2, note: 'Volume adequate, quality below target. KIT alignment coaching needed.' },
  { msl: 'Jordan Reyes',         territory: 'West US',            status: 'On track',      interactions: 35, target: 38, delta: '−3', qualityScore: 80, kitSignals: 3, kolsAtRisk: 1, note: 'Steady coverage across IPF and PPF accounts.' },
  { msl: 'Sophie Bergman',       territory: 'UK & Ireland',       status: 'Excellent',     interactions: 29, target: 28, delta: '+1', qualityScore: 89, kitSignals: 4, kolsAtRisk: 0, note: 'Strong EULAR-adjacent rheumatology relationships ahead of congress.' },
  { msl: 'Lukas Richter',        territory: 'Continental Europe', status: 'Volume gap',    interactions: 19, target: 26, delta: '−7', qualityScore: 76, kitSignals: 2, kolsAtRisk: 2, note: 'Quality solid but interactions below target. DACH/France territory expansion recommended.' },
];

const MSL_STATUS_STYLE = {
  'Excellent':     'bg-emerald-50 text-emerald-700 border-emerald-200',
  'On track':      'bg-sky-50 text-sky-700 border-sky-200',
  'Quality gap':   'bg-amber-50 text-amber-700 border-amber-200',
  'Volume gap':    'bg-amber-50 text-amber-700 border-amber-200',
  'Needs support': 'bg-rose-50 text-rose-700 border-rose-200',
};

const MSL_ROW_STYLE = {
  'Needs support': 'bg-rose-50/40',
  'Quality gap':   'bg-amber-50/30',
  'Volume gap':    'bg-amber-50/30',
};

const HCP_TOPICS = [
  { topic: 'Tolerability burden vs. oral SoC', hcpCount: 52, stages: [6, 11, 19, 11, 5], avgStage: 3.1, trend: '+0.5', confirmed: 27 },
  { topic: 'MIST / CTD-ILD referral pathway',  hcpCount: 34, stages: [12, 10, 7, 4, 1],  avgStage: 2.2, trend: '+0.2', confirmed: 9  },
  { topic: 'SSc-ILD screening & referral',     hcpCount: 25, stages: [7, 8, 6, 3, 1],    avgStage: 2.3, trend: '+0.3', confirmed: 8  },
];

const STAGE_LABELS = ['Unaware', 'Aware', 'Interested', 'Evaluating', 'Committed'];

// Scientific Alignment Shift — Product feedback 2026-07-12: the old mock only
// carried one fictional KOL per MSL. Real rows are now generated from the
// actual KOL roster (KOL_DATA) via config/messaging-alignment.js, so every
// MSL/territory shows shift across their full assigned KOL list, not one.
// Q2 (current) is each KOL's real per-pillar alignment score; Q1 (previous
// quarter) is a deterministic offset off that score — same id-hash approach
// messaging-alignment.js uses for the current-quarter numbers.

const NATIONAL_METRICS = [
  { label: 'Total MSL interactions', value: '206', sub: 'this cycle' },
  { label: 'Avg quality score', value: '80', sub: 'target: 78' },
  { label: 'Insight capture rate', value: '68%', sub: '+6% vs prior' },
  { label: 'KOLs at risk', value: '7', sub: 'tier 1 / tier 2', alert: true },
];

const TERRITORY_LIST = ['Northeast US', 'Southeast US', 'Midwest US', 'West US', 'UK & Ireland', 'Continental Europe'];
const TERRITORY_SHORT = ['NE', 'SE', 'MW', 'W', 'UK', 'EU'];

// Per-territory HCP topics (scoped subset of national data)
const TERRITORY_HCP_TOPICS = {
  'Northeast US': [
    { topic: 'Tolerability burden vs. oral SoC', hcpCount: 15, stages: [2, 3, 5, 4, 1], avgStage: 3.0, trend: '+0.6', confirmed: 9 },
    { topic: 'MIST / CTD-ILD referral pathway',  hcpCount: 10, stages: [3, 3, 2, 2, 0], avgStage: 2.3, trend: '+0.3', confirmed: 3 },
    { topic: 'AURA-IPF trial awareness',          hcpCount: 6,  stages: [1, 2, 2, 1, 0], avgStage: 2.5, trend: '+0.2', confirmed: 2 },
  ],
  'Southeast US': [
    { topic: 'Tolerability burden vs. oral SoC', hcpCount: 13, stages: [1, 3, 5, 3, 1], avgStage: 3.1, trend: '+0.7', confirmed: 8 },
    { topic: 'MIST / CTD-ILD referral pathway',  hcpCount: 8,  stages: [2, 3, 2, 1, 0], avgStage: 2.2, trend: '+0.2', confirmed: 2 },
    { topic: 'Nerandomilast sequencing',          hcpCount: 7,  stages: [1, 2, 2, 2, 0], avgStage: 2.7, trend: '+0.4', confirmed: 3 },
  ],
  'Midwest US': [
    { topic: 'Tolerability burden vs. oral SoC', hcpCount: 10, stages: [2, 3, 3, 2, 0], avgStage: 2.5, trend: '+0.2', confirmed: 4 },
    { topic: 'AURA-IPF trial awareness',          hcpCount: 9,  stages: [3, 3, 2, 1, 0], avgStage: 2.1, trend: '+0.1', confirmed: 2 },
    { topic: 'Nerandomilast sequencing',          hcpCount: 6,  stages: [1, 2, 2, 1, 0], avgStage: 2.5, trend: '+0.3', confirmed: 2 },
  ],
  'West US': [
    { topic: 'Tolerability burden vs. oral SoC', hcpCount: 9,  stages: [1, 3, 3, 2, 0], avgStage: 2.6, trend: '+0.3', confirmed: 3 },
    { topic: 'MIST / CTD-ILD referral pathway',  hcpCount: 7,  stages: [2, 2, 2, 1, 0], avgStage: 2.3, trend: '+0.2', confirmed: 2 },
    { topic: 'AURA-IPF trial awareness',          hcpCount: 5,  stages: [1, 2, 1, 1, 0], avgStage: 2.2, trend: '0.0',  confirmed: 1 },
  ],
  'UK & Ireland': [
    { topic: 'SSc-ILD screening & referral',      hcpCount: 11, stages: [1, 2, 4, 3, 1], avgStage: 3.0, trend: '+0.5', confirmed: 6 },
    { topic: 'MIST / CTD-ILD referral pathway',   hcpCount: 8,  stages: [2, 2, 2, 2, 0], avgStage: 2.5, trend: '+0.3', confirmed: 3 },
    { topic: 'Tolerability burden vs. oral SoC',  hcpCount: 5,  stages: [1, 1, 2, 1, 0], avgStage: 2.4, trend: '+0.1', confirmed: 2 },
  ],
  'Continental Europe': [
    { topic: 'SSc-ILD screening & referral',      hcpCount: 7,  stages: [2, 2, 2, 1, 0], avgStage: 2.3, trend: '+0.2', confirmed: 2 },
    { topic: 'MIST / CTD-ILD referral pathway',   hcpCount: 5,  stages: [2, 1, 1, 1, 0], avgStage: 2.0, trend: '0.0',  confirmed: 1 },
    { topic: 'Tolerability burden vs. oral SoC',  hcpCount: 4,  stages: [1, 1, 1, 1, 0], avgStage: 2.3, trend: '−0.1', confirmed: 1 },
  ],
};

const TERRITORY_KIT_COVERAGE = {
  'Northeast US':       [true,  true,  true,  false, true ],
  'Southeast US':       [true,  true,  false, true,  false],
  'Midwest US':         [true,  false, false, true,  false],
  'West US':            [true,  false, false, false, true ],
  'UK & Ireland':       [true,  false, true,  false, true ],
  'Continental Europe': [false, false, true,  false, false],
};

const TERRITORY_BRIEFS = {
  'Northeast US': 'Northeast US is the strongest-performing territory this cycle — 44 interactions, quality score 86. Maya Sorensen is driving KIT signal coverage across 4 topics, with MIST/CTD-ILD referral pathway work standing out. No KOL engagement gaps this cycle.',
  'Southeast US': 'Southeast US is excellent — 41 interactions, quality score 83. Derek Okafor\'s tolerability-narrative conversations are the highest-signal activity nationally. One tier-1 KOL at engagement risk. Nerandomilast sequencing questions are rising fast in this territory.',
  'Midwest US': 'Midwest US shows a quality gap — 38 interactions (near target) but quality score of 64, below the 78 threshold. Priya Chandrasekaran has solid congress-sourced signal capture but KIT alignment in MSL interactions is inconsistent. Two KOLs at engagement risk.',
  'West US': 'West US is on track — 35 interactions, quality score 80. Jordan Reyes maintains steady coverage across IPF and PPF accounts. One tier-1 KOL at risk. AURA-IPF trial awareness is building steadily.',
  'UK & Ireland': 'UK & Ireland is excellent — 29 interactions, quality score 89, the highest quality score nationally. Sophie Bergman\'s EULAR-adjacent rheumatology relationships are driving SSc-ILD screening & referral signal capture. No KOL engagement gaps.',
  'Continental Europe': 'Continental Europe shows a volume gap — only 19 interactions against a target of 26. Quality score is solid at 76. Two KOLs at engagement risk. Lukas Richter has strong per-interaction quality but DACH/France territory coverage expansion is recommended ahead of EULAR 2026.',
};

const MO_FIELD_DATA = {
  MO1: { interactions: 62, insights: 2, kols: 8,  impact: 'MIST/CTD-ILD referral checklist deployed across US + UK/EU. Referral-conversation rate up 21% in tracked accounts.' },
  MO2: { interactions: 38, insights: 1, kols: 6,  impact: 'AURA-IPF community-readiness materials in development. PK explainer drafted, pending independent-replication scoping.' },
  MO3: { interactions: 71, insights: 1, kols: 10, impact: 'Tolerability/adherence conversation guide accepted and deploying. Highest-recurrence field signal this cycle (AI3).' },
  MO4: { interactions: 24, insights: 1, kols: 6,  impact: 'EUSTAR-aligned SSc-ILD screening algorithm drafted with rheumatology KOLs; scoped for EULAR 2026 advisory review.' },
  MO5: { interactions: 11, insights: 2, kols: 4,  impact: 'Nerandomilast rapid-response briefing produced. Mechanism-differentiation deck still in progress.' },
};

// ─── Helpers ───────────────────────────────────────────────────────────────

// Deterministic KOL→territory assignment for MSL-scoped views. KOL_DATA has
// no territory field of its own (KOLs are global HCPs), so we derive a
// stable per-KOL territory from an id hash — same pattern used by
// config/messaging-alignment.js for per-KOL scores.
function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function territoryForKOL(kol) {
  return TERRITORY_LIST[hashCode(kol.id) % TERRITORY_LIST.length];
}

function mslNameForTerritory(territory) {
  const m = MSL_PERFORMANCE.find((x) => x.territory === territory);
  return m ? m.msl : territory;
}

// One row per KOL — their single largest-shift message pillar this quarter.
function buildAlignmentShiftRows(kols) {
  return kols
    .map((k) => {
      const alignment = getMessagingAlignment(k);
      if (!alignment) return null;
      const candidates = alignment.pillars.map((p) => {
        const offset = (hashCode(k.id + p.id) % 25) - 12; // -12..+12
        const q1 = Math.max(20, Math.min(98, p.score - offset));
        return { pillar: p.short, q1, q2: p.score };
      });
      const row = candidates.reduce((max, r) => (Math.abs(r.q2 - r.q1) > Math.abs(max.q2 - max.q1) ? r : max), candidates[0]);
      return { hcp: k.name, pillar: row.pillar, q1: row.q1, q2: row.q2, msl: mslNameForTerritory(territoryForKOL(k)) };
    })
    .filter(Boolean);
}

function SectionHeader({ icon: Icon, label, sub, right }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-auri-text" />
        <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">{label}</h3>
        {sub && <span className="text-xs text-auri-muted">{sub}</span>}
      </div>
      {right}
    </div>
  );
}

function ExportBtn() {
  return (
    <button
      onClick={() => window.alert('Export to PowerPoint — coming soon.')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all shrink-0"
    >
      <FileDown size={12} />
      Export to PPT
    </button>
  );
}

function FieldBrief({ scope }) {
  const briefs = {
    national: 'National field performance is tracking at 80/100 quality score, 2 points above target. Tolerability/adherence messaging (MO3) shows the strongest field signal activity — 71 interactions this cycle, the highest-recurrence insight nationally (AI3). KOL engagement risk is elevated in Continental Europe: 2 tier-1/2 KOLs have had no substantive contact in the past several weeks. The nerandomilast competitive-response question (LP6) continues to generate rising interaction volumes — directed MSL activation recommended ahead of ERS 2026.',
    msl: 'Individual MSL brief — summarising KIT alignment, listening priority coverage, and HCP impact for the selected territory.',
  };
  return (
    <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-4 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles size={14} className="text-violet-600" />
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Field Director Brief</span>
        <span className="text-[10px] text-violet-500 ml-1">AI-generated · on load</span>
      </div>
      <p className="text-sm text-auri-text leading-relaxed">{briefs[scope] || briefs.national}</p>
    </div>
  );
}

// ─── National view ─────────────────────────────────────────────────────────

function NationalView() {
  const [openTopic, setOpenTopic] = useState(null);
  const nationalAlignment = buildAlignmentShiftRows(
    (KOL_DATA || [])
      .filter((k) => k.engagementTier === 'Tier 1' || k.engagementTier === 'Tier 2')
      .sort((a, b) => b.influenceScore - a.influenceScore)
      .slice(0, 10)
  );

  return (
    <div className="space-y-7">
      <FieldBrief scope="national" />

      {/* Summary metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {NATIONAL_METRICS.map((m) => (
          <div key={m.label} className={`rounded-xl border p-3 ${m.alert ? 'border-rose-200 bg-rose-50/60' : 'border-auri-border bg-auri-card'}`}>
            <div className={`text-xl font-bold mb-0.5 ${m.alert ? 'text-rose-600' : 'text-auri-text'}`}>{m.value}</div>
            <div className="text-xs text-auri-muted">{m.label}</div>
            <div className={`text-[10px] mt-0.5 ${m.alert ? 'text-rose-500 font-medium' : 'text-auri-muted'}`}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* MSL Performance Table */}
      <section>
        <SectionHeader icon={Users} label="MSL Performance" sub="national · 9-column view" right={<ExportBtn />} />
        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">MSL · Territory</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Status</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Interactions</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">vs Target</th>
                <th className="text-left px-4 py-2.5 font-medium w-40">Quality Score</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">KIT Signals</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">KOLs at Risk</th>
                <th className="text-left px-4 py-2.5 font-medium">Director Note</th>
              </tr>
            </thead>
            <tbody>
              {MSL_PERFORMANCE.map((row) => (
                <tr key={row.msl} className={`border-t border-auri-border ${MSL_ROW_STYLE[row.status] || ''}`}>
                  <td className="px-4 py-3">
                    <div className="font-medium text-auri-text">{row.msl}</div>
                    <div className="text-xs text-auri-muted">{row.territory}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border whitespace-nowrap ${MSL_STATUS_STYLE[row.status] || ''}`}>{row.status}</span>
                  </td>
                  <td className="px-4 py-3 font-medium text-auri-text">{row.interactions}</td>
                  <td className={`px-4 py-3 text-sm font-medium ${row.interactions >= row.target ? 'text-emerald-600' : 'text-rose-600'}`}>{row.delta}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-auri-border rounded-full overflow-hidden">
                        <div className={`h-full ${row.qualityScore >= 75 ? 'bg-emerald-500' : row.qualityScore >= 60 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${row.qualityScore}%` }} />
                      </div>
                      <span className="text-xs text-auri-muted">{row.qualityScore}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-auri-text">{row.kitSignals}</td>
                  <td className={`px-4 py-3 font-medium ${row.kolsAtRisk >= 3 ? 'text-rose-600' : 'text-auri-text'}`}>{row.kolsAtRisk}</td>
                  <td className="px-4 py-3 text-xs text-auri-muted leading-snug max-w-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HCP Scientific Impact */}
      <section>
        <SectionHeader icon={Target} label="HCP Scientific Impact" sub="awareness ladder · national roll-up" right={<ExportBtn />} />
        <div className="space-y-2 mb-5">
          {HCP_TOPICS.map((t) => {
            const isOpen = openTopic === t.topic;
            return (
              <div key={t.topic} className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                  onClick={() => setOpenTopic(isOpen ? null : t.topic)}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-sm font-medium text-auri-text">{t.topic}</span>
                    <span className="text-xs text-auri-muted">{t.hcpCount} HCPs</span>
                    <span className={`text-xs font-medium ${parseFloat(t.trend) > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{t.trend} avg stage</span>
                    <span className="text-xs text-auri-muted ml-auto">Committed: {t.confirmed}</span>
                  </div>
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted shrink-0" /> : <ChevronDown size={15} className="text-auri-muted shrink-0" />}
                </button>
                {isOpen && (
                  <div className="border-t border-auri-border p-4">
                    <div className="flex items-end gap-2 mb-3">
                      {t.stages.map((count, i) => (
                        <div key={i} className="flex-1 text-center">
                          <div className="flex items-end justify-center mb-1" style={{ height: 60 }}>
                            <div
                              className="w-full rounded-t bg-auri-text/80 min-h-[4px] transition-all"
                              style={{ height: `${(count / Math.max(...t.stages)) * 56}px` }}
                            />
                          </div>
                          <div className="text-sm font-semibold text-auri-text">{count}</div>
                          <div className="text-[9px] text-auri-muted leading-tight mt-0.5">{STAGE_LABELS[i]}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-auri-muted">Avg awareness stage: <strong className="text-auri-text">{t.avgStage}</strong> / 5</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Alignment shift table */}
        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
          <div className="px-4 py-2.5 bg-auri-offset border-b border-auri-border text-xs uppercase tracking-wider text-auri-muted font-medium">Scientific Alignment Shift — Q1 vs Q2</div>
          <table className="w-full text-sm">
            <tbody>
              {nationalAlignment.map((row) => {
                const delta = row.q2 - row.q1;
                return (
                  <tr key={row.hcp} className="border-t border-auri-border">
                    <td className="px-4 py-3 font-medium text-auri-text w-32">{row.hcp}</td>
                    <td className="px-4 py-3 text-xs text-auri-muted">{row.pillar}</td>
                    <td className="px-4 py-3 text-auri-muted text-sm">{row.q1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        {delta > 0 ? <TrendingUp size={13} className="text-emerald-500" /> : <TrendingDown size={13} className="text-rose-500" />}
                        <span className={`text-sm font-semibold ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{row.q2}</span>
                        <span className={`text-xs ml-1 ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{delta > 0 ? `+${delta}` : delta}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-auri-muted">{row.msl}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* KIT Intelligence */}
      <section>
        <SectionHeader icon={Activity} label="KIT Intelligence" sub="national · CRM data" right={<ExportBtn />} />
        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">KIT</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">Mentions</th>
                <th className="text-left px-4 py-2.5 font-medium w-20">MoM Δ</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Status</th>
                <th className="text-left px-4 py-2.5 font-medium">Territory coverage</th>
              </tr>
            </thead>
            <tbody>
              {KIT_SCORECARDS.map((k) => {
                const TrendIcon = k.percentChange >= 0 ? TrendingUp : TrendingDown;
                const trendColor = k.percentChange >= 0 ? 'text-emerald-600' : 'text-rose-600';
                const statusStyle = {
                  Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  Monitor: 'bg-amber-50 text-amber-700 border-amber-200',
                  Alert: 'bg-rose-50 text-rose-700 border-rose-200',
                  Declining: 'bg-zinc-50 text-zinc-700 border-zinc-200',
                };
                return (
                  <tr key={k.id} className="border-t border-auri-border">
                    <td className="px-4 py-3 font-medium text-auri-text">{k.name}</td>
                    <td className="px-4 py-3 text-auri-text">{k.currentMentions}</td>
                    <td className={`px-4 py-3 text-xs font-medium ${trendColor}`}>
                      <span className="flex items-center gap-0.5"><TrendIcon size={12} />{k.percentChange >= 0 ? '+' : ''}{k.percentChange.toFixed(1)}%</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${statusStyle[k.status] || statusStyle.Active}`}>{k.status}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        {TERRITORY_SHORT.map((t, i) => (
                          <div key={t} className={`w-7 h-7 rounded text-[9px] font-medium flex items-center justify-center ${i < 3 ? 'bg-auri-text text-auri-bg' : 'bg-auri-border text-auri-muted'}`}>{t}</div>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* KOL engagement gap tracker */}
      <section>
        <SectionHeader icon={AlertCircle} label="KOL Engagement Gap Tracker" sub="Tier 1 / Tier 2 · at risk across all territories" right={<ExportBtn />} />
        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">KOL</th>
                <th className="text-left px-4 py-2.5 font-medium w-20">Tier</th>
                <th className="text-left px-4 py-2.5 font-medium w-36">Territory</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Last contact</th>
                <th className="text-left px-4 py-2.5 font-medium">Risk</th>
              </tr>
            </thead>
            <tbody>
              {(KOL_DATA || [])
                .filter((k) => k.engagementTier === 'Tier 1' || k.engagementTier === 'Tier 2')
                .slice(0, 6)
                .map((k) => {
                  const daysSince = Math.floor(Math.random() * 90) + 14;
                  const risk = daysSince > 60 ? 'High' : daysSince > 30 ? 'Medium' : 'Low';
                  const riskStyle = { High: 'bg-rose-50 text-rose-700 border-rose-200', Medium: 'bg-amber-50 text-amber-700 border-amber-200', Low: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
                  return (
                    <tr key={k.id} className="border-t border-auri-border">
                      <td className="px-4 py-3 font-medium text-auri-text">{k.name}</td>
                      <td className="px-4 py-3 text-auri-muted">{k.engagementTier}</td>
                      <td className="px-4 py-3 text-xs text-auri-muted">{k.institution || '—'}</td>
                      <td className="px-4 py-3 text-xs text-auri-muted">{daysSince}d ago</td>
                      <td className="px-4 py-3">
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${riskStyle[risk]}`}>{risk}</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── Territory view (Phase 2 placeholder) ─────────────────────────────────

function TerritoryView() {
  const [territory, setTerritory] = useState('Northeast US');
  const [openTopic, setOpenTopic] = useState(null);

  const msl = MSL_PERFORMANCE.find((m) => m.territory === territory) || MSL_PERFORMANCE[0];
  const hcpTopics = TERRITORY_HCP_TOPICS[territory] || [];
  const kitCoverage = TERRITORY_KIT_COVERAGE[territory] || [];
  const brief = TERRITORY_BRIEFS[territory] || '';
  const territoryAlignment = buildAlignmentShiftRows((KOL_DATA || []).filter((k) => territoryForKOL(k) === territory));

  return (
    <div className="space-y-7">
      {/* Territory selector */}
      <div className="flex items-center gap-3 pb-4 border-b border-auri-border">
        <MapPin size={15} className="text-auri-muted shrink-0" />
        <span className="text-xs font-medium text-auri-muted">Territory</span>
        <div className="flex items-center gap-1 flex-wrap">
          {TERRITORY_LIST.map((t) => (
            <button
              key={t}
              onClick={() => { setTerritory(t); setOpenTopic(null); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${territory === t ? 'bg-auri-text text-auri-bg' : 'bg-auri-offset border border-auri-border text-auri-muted hover:text-auri-text'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Nova territory brief */}
      <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={14} className="text-violet-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Territory Brief — {territory}</span>
          <span className="text-[10px] text-violet-500 ml-1">AI-generated · on territory selection</span>
        </div>
        <p className="text-sm text-auri-text leading-relaxed">{brief}</p>
      </div>

      {/* Territory summary metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Interactions', value: msl.interactions, sub: `target ${msl.target}` },
          { label: 'Quality score', value: msl.qualityScore, sub: 'target: 75', alert: msl.qualityScore < 65 },
          { label: 'KIT signals captured', value: msl.kitSignals, sub: 'this cycle' },
          { label: 'KOLs at risk', value: msl.kolsAtRisk, sub: 'tier 1 / 2', alert: msl.kolsAtRisk >= 3 },
        ].map((m) => (
          <div key={m.label} className={`rounded-xl border p-3 ${m.alert ? 'border-rose-200 bg-rose-50/60' : 'border-auri-border bg-auri-card'}`}>
            <div className={`text-xl font-bold mb-0.5 ${m.alert ? 'text-rose-600' : 'text-auri-text'}`}>{m.value}</div>
            <div className="text-xs text-auri-muted">{m.label}</div>
            <div className={`text-[10px] mt-0.5 ${m.alert ? 'text-rose-500 font-medium' : 'text-auri-muted'}`}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* MSL performance — single row scoped to territory */}
      <section>
        <SectionHeader icon={Users} label="MSL Performance" sub={territory} right={<ExportBtn />} />
        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">MSL</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Status</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Interactions</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">vs Target</th>
                <th className="text-left px-4 py-2.5 font-medium w-40">Quality Score</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">KIT Signals</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">KOLs at Risk</th>
                <th className="text-left px-4 py-2.5 font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr className={MSL_ROW_STYLE[msl.status] || ''}>
                <td className="px-4 py-3 font-medium text-auri-text">{msl.msl}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border whitespace-nowrap ${MSL_STATUS_STYLE[msl.status] || ''}`}>{msl.status}</span>
                </td>
                <td className="px-4 py-3 font-medium text-auri-text">{msl.interactions}</td>
                <td className={`px-4 py-3 text-sm font-medium ${msl.interactions >= msl.target ? 'text-emerald-600' : 'text-rose-600'}`}>{msl.delta}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-auri-border rounded-full overflow-hidden">
                      <div className={`h-full ${msl.qualityScore >= 75 ? 'bg-emerald-500' : msl.qualityScore >= 60 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${msl.qualityScore}%` }} />
                    </div>
                    <span className="text-xs text-auri-muted">{msl.qualityScore}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-auri-text">{msl.kitSignals}</td>
                <td className={`px-4 py-3 font-medium ${msl.kolsAtRisk >= 3 ? 'text-rose-600' : 'text-auri-text'}`}>{msl.kolsAtRisk}</td>
                <td className="px-4 py-3 text-xs text-auri-muted leading-snug">{msl.note}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* HCP Scientific Impact — territory-scoped */}
      <section>
        <SectionHeader icon={Target} label="HCP Scientific Impact" sub={`${territory} · awareness ladder`} right={<ExportBtn />} />
        <div className="space-y-2 mb-5">
          {hcpTopics.map((t) => {
            const isOpen = openTopic === t.topic;
            return (
              <div key={t.topic} className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                  onClick={() => setOpenTopic(isOpen ? null : t.topic)}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-sm font-medium text-auri-text">{t.topic}</span>
                    <span className="text-xs text-auri-muted">{t.hcpCount} HCPs</span>
                    <span className={`text-xs font-medium ${t.trend.startsWith('+') ? 'text-emerald-600' : t.trend.startsWith('−') ? 'text-rose-600' : 'text-auri-muted'}`}>{t.trend} avg stage</span>
                    <span className="text-xs text-auri-muted ml-auto">Committed: {t.confirmed}</span>
                  </div>
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted shrink-0" /> : <ChevronDown size={15} className="text-auri-muted shrink-0" />}
                </button>
                {isOpen && (
                  <div className="border-t border-auri-border p-4">
                    <div className="flex items-end gap-2 mb-3">
                      {t.stages.map((count, i) => (
                        <div key={i} className="flex-1 text-center">
                          <div className="flex items-end justify-center mb-1" style={{ height: 56 }}>
                            <div className="w-full rounded-t bg-auri-text/80 min-h-[4px]" style={{ height: `${Math.max(4, (count / Math.max(...t.stages, 1)) * 52)}px` }} />
                          </div>
                          <div className="text-sm font-semibold text-auri-text">{count}</div>
                          <div className="text-[9px] text-auri-muted leading-tight mt-0.5">{STAGE_LABELS[i]}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-auri-muted">Avg awareness stage: <strong className="text-auri-text">{t.avgStage}</strong> / 5</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Alignment shift — territory-scoped */}
        {territoryAlignment.length > 0 && (
          <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
            <div className="px-4 py-2.5 bg-auri-offset border-b border-auri-border text-xs uppercase tracking-wider text-auri-muted font-medium">Scientific Alignment Shift — {territory} · Q1 vs Q2</div>
            <table className="w-full text-sm">
              <tbody>
                {territoryAlignment.map((row) => {
                  const delta = row.q2 - row.q1;
                  return (
                    <tr key={row.hcp} className="border-t border-auri-border">
                      <td className="px-4 py-3 font-medium text-auri-text w-32">{row.hcp}</td>
                      <td className="px-4 py-3 text-xs text-auri-muted">{row.pillar}</td>
                      <td className="px-4 py-3 text-auri-muted text-sm">{row.q1}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          {delta > 0 ? <TrendingUp size={13} className="text-emerald-500" /> : <TrendingDown size={13} className="text-rose-500" />}
                          <span className={`text-sm font-semibold ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{row.q2}</span>
                          <span className={`text-xs ml-1 ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{delta > 0 ? `+${delta}` : delta}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* KIT Intelligence — territory coverage */}
      <section>
        <SectionHeader icon={Activity} label="KIT Intelligence" sub={`${territory} · CRM data`} right={<ExportBtn />} />
        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">KIT</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">Mentions</th>
                <th className="text-left px-4 py-2.5 font-medium w-20">MoM Δ</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Status</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Territory coverage</th>
              </tr>
            </thead>
            <tbody>
              {KIT_SCORECARDS.map((k, i) => {
                const TrendIcon = k.percentChange >= 0 ? TrendingUp : TrendingDown;
                const trendColor = k.percentChange >= 0 ? 'text-emerald-600' : 'text-rose-600';
                const covered = kitCoverage[i];
                const statusStyle = {
                  Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  Monitor: 'bg-amber-50 text-amber-700 border-amber-200',
                  Alert: 'bg-rose-50 text-rose-700 border-rose-200',
                  Declining: 'bg-zinc-50 text-zinc-700 border-zinc-200',
                };
                return (
                  <tr key={k.id} className={`border-t border-auri-border ${!covered ? 'opacity-60' : ''}`}>
                    <td className="px-4 py-3 font-medium text-auri-text">{k.name}</td>
                    <td className="px-4 py-3 text-auri-text">{covered ? Math.round(k.currentMentions * (0.15 + Math.random() * 0.25)) : 0}</td>
                    <td className={`px-4 py-3 text-xs font-medium ${trendColor}`}>
                      {covered ? <span className="flex items-center gap-0.5"><TrendIcon size={12} />{k.percentChange >= 0 ? '+' : ''}{k.percentChange.toFixed(1)}%</span> : <span className="text-auri-muted">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      {covered
                        ? <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${statusStyle[k.status] || statusStyle.Active}`}>{k.status}</span>
                        : <span className="text-[10px] text-auri-muted">Not captured</span>}
                    </td>
                    <td className="px-4 py-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${covered ? 'bg-auri-text text-auri-bg' : 'bg-auri-border text-auri-muted'}`}>
                        {covered ? '✓' : '—'}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* KOL engagement gap — territory-scoped */}
      <section>
        <SectionHeader icon={AlertCircle} label="KOL Engagement Gap Tracker" sub={`${territory} · tier 1 / 2`} right={<ExportBtn />} />
        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-auri-offset text-xs uppercase tracking-wider text-auri-muted">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium">KOL</th>
                <th className="text-left px-4 py-2.5 font-medium w-20">Tier</th>
                <th className="text-left px-4 py-2.5 font-medium">Institution</th>
                <th className="text-left px-4 py-2.5 font-medium w-28">Last contact</th>
                <th className="text-left px-4 py-2.5 font-medium w-24">Risk</th>
              </tr>
            </thead>
            <tbody>
              {(KOL_DATA || [])
                .filter((k) => k.engagementTier === 'Tier 1' || k.engagementTier === 'Tier 2')
                .slice(0, msl.kolsAtRisk + 2)
                .map((k, idx) => {
                  const days = idx < msl.kolsAtRisk ? 60 + idx * 12 : 20 + idx * 5;
                  const risk = days > 60 ? 'High' : days > 30 ? 'Medium' : 'Low';
                  const riskStyle = { High: 'bg-rose-50 text-rose-700 border-rose-200', Medium: 'bg-amber-50 text-amber-700 border-amber-200', Low: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
                  return (
                    <tr key={k.id} className="border-t border-auri-border">
                      <td className="px-4 py-3 font-medium text-auri-text">{k.name}</td>
                      <td className="px-4 py-3 text-auri-muted">{k.engagementTier}</td>
                      <td className="px-4 py-3 text-xs text-auri-muted">{k.institution || '—'}</td>
                      <td className="px-4 py-3 text-xs text-auri-muted">{days}d ago</td>
                      <td className="px-4 py-3">
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${riskStyle[risk]}`}>{risk}</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ─── MSL view ──────────────────────────────────────────────────────────────

function StrategicObjectivesMSL() {
  const [openMO, setOpenMO] = useState(null);

  const moClick = (id) => setOpenMO((prev) => (prev === id ? null : id));

  return (
    <section>
      <SectionHeader icon={Target} label="Strategic Objectives" sub="MSL territory contribution" right={<ExportBtn />} />
      <div className="space-y-2">
        {MEDICAL_OBJECTIVES.map((mo) => {
          const score = COVERAGE_TARGETS[mo.id] || 'Low';
          const borderColor = score === 'Sufficient' ? 'border-l-emerald-400' : score === 'Low' ? 'border-l-amber-400' : 'border-l-rose-400';
          const isOpen = openMO === mo.id;
          const field = MO_FIELD_DATA[mo.id] || {};
          return (
            <div key={mo.id} className={`rounded-xl border border-auri-border bg-auri-card overflow-hidden border-l-4 ${borderColor}`}>
              {/* Header — onclick goes on the .mo-hdr element directly */}
              <div
                className="mo-hdr flex items-center justify-between gap-3 px-4 py-3 cursor-pointer hover:bg-auri-offset transition-all select-none"
                onClick={() => moClick(mo.id)}
              >
                <div className="flex items-center gap-3 pointer-events-none">
                  <span className="text-xs font-semibold text-auri-muted">{mo.id}</span>
                  <span className="text-sm font-medium text-auri-text">{mo.name}</span>
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${
                    score === 'Sufficient' ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : score === 'Low' ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>{score}</span>
                </div>
                <ChevronDown
                  size={15}
                  className="text-auri-muted pointer-events-none transition-transform"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>

              {isOpen && (
                <div className="border-t border-auri-border grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-auri-bg">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-1.5">What this means for you</div>
                    <p className="text-xs text-auri-text leading-relaxed">{mo.description}</p>
                    <div className="mt-2 text-[10px] text-auri-muted">Listen for and capture any signals related to <span className="font-medium text-auri-text">{mo.name.toLowerCase()}</span> in your territory.</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-1.5">KITs to capture in field</div>
                    {(LISTENING_PRIORITIES.filter((lp) => lp.moRef === mo.id)).map((lp) => (
                      <div key={lp.id} className="mb-2 last:mb-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-auri-text/5 text-auri-text border border-auri-text/20">{lp.id}</span>
                          <span className="text-xs font-medium text-auri-text">{lp.name}</span>
                        </div>
                        <p className="text-[11px] text-auri-muted italic pl-8">"{lp.kiq}"</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-1.5">Your territory contribution</div>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {[['Interactions', field.interactions || 0], ['Insights', field.insights || 0], ['KOLs', field.kols || 0]].map(([l, v]) => (
                        <div key={l} className="rounded-lg border border-auri-border p-2 text-center">
                          <div className="text-lg font-bold text-auri-text">{v}</div>
                          <div className="text-[9px] text-auri-muted">{l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg bg-auri-card border border-auri-border p-2.5 text-xs text-auri-muted leading-snug">{field.impact}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function MSLView({ selectedMSL }) {
  const msl = MSL_PERFORMANCE.find((m) => `${m.msl} — ${m.territory}` === selectedMSL) || MSL_PERFORMANCE[0];
  const [openTopic, setOpenTopic] = useState(null);

  const mslTopics = TERRITORY_HCP_TOPICS[msl.territory] || [];
  const mslAlignmentShift = buildAlignmentShiftRows((KOL_DATA || []).filter((k) => territoryForKOL(k) === msl.territory));
  const mslKitCoverage = TERRITORY_KIT_COVERAGE[msl.territory] || [];
  const mslKOLs = (KOL_DATA || [])
    .filter((k) => (k.engagementTier === 'Tier 1' || k.engagementTier === 'Tier 2') && territoryForKOL(k) === msl.territory)
    .slice(0, 5);

  return (
    <div className="space-y-7">
      {/* Dynamic brief */}
      <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={14} className="text-violet-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Field Brief — {msl.msl}</span>
          <span className="text-[10px] text-violet-500 ml-1">AI-generated · on MSL selection</span>
        </div>
        <p className="text-sm text-auri-text leading-relaxed">
          {msl.msl} ({msl.territory}) recorded <strong>{msl.interactions}</strong> interactions this cycle against a target of <strong>{msl.target}</strong>.
          Quality score: <strong>{msl.qualityScore}/100</strong>.
          {msl.kolsAtRisk > 2 ? ` ${msl.kolsAtRisk} tier-1/2 KOLs have not been contacted in the past 60 days — engagement gap action needed.` : ''}
          {msl.note}
        </p>
      </div>

      {/* MSL metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Interactions', value: msl.interactions, sub: `target ${msl.target}` },
          { label: 'Quality score', value: msl.qualityScore, sub: 'target: 75' },
          { label: 'KIT signals captured', value: msl.kitSignals, sub: 'this cycle' },
          { label: 'KOLs at risk', value: msl.kolsAtRisk, sub: 'tier 1 / 2', alert: msl.kolsAtRisk >= 3 },
        ].map((m) => (
          <div key={m.label} className={`rounded-xl border p-3 ${m.alert ? 'border-rose-200 bg-rose-50/60' : 'border-auri-border bg-auri-card'}`}>
            <div className={`text-xl font-bold mb-0.5 ${m.alert ? 'text-rose-600' : 'text-auri-text'}`}>{m.value}</div>
            <div className="text-xs text-auri-muted">{m.label}</div>
            <div className={`text-[10px] mt-0.5 ${m.alert ? 'text-rose-500 font-medium' : 'text-auri-muted'}`}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Listening Priorities */}
      <section>
        <SectionHeader icon={BookOpen} label="Listening Priorities & KITs" sub="ISP config · LP1–LP7" right={<ExportBtn />} />
        <div className="space-y-2">
          {[...LISTENING_PRIORITIES, LP7_MOCK].map((lp) => {
            const isGap = lp.id === 'LP7';
            const insightCount = INSIGHTS.filter((i) => i.lpRefs?.includes(lp.id)).length;
            return (
              <div key={lp.id} className={`rounded-xl border bg-auri-card p-4 ${isGap ? 'border-rose-200' : 'border-auri-border'}`}>
                <div className="flex items-start gap-3">
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border shrink-0 mt-0.5 ${isGap ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-auri-text/5 text-auri-text border-auri-text/20'}`}>{lp.id}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-auri-text">{lp.name}</span>
                      <span className="text-[10px] text-auri-muted">{lp.moRef}</span>
                      {isGap ? (
                        <span className="text-[10px] font-semibold text-rose-600">0 insights · MO gap</span>
                      ) : (
                        <span className="text-[10px] text-auri-muted">{insightCount} insight{insightCount === 1 ? '' : 's'} this cycle</span>
                      )}
                    </div>
                    <p className="text-xs text-auri-muted italic mb-1.5">"{lp.kiq}"</p>
                    <div className="flex flex-wrap gap-1">
                      {lp.kits?.map((kit) => (
                        <span key={kit} className="text-[10px] px-1.5 py-0.5 rounded bg-auri-offset border border-auri-border text-auri-muted">{kit}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic objectives — MSL click-to-expand */}
      <StrategicObjectivesMSL />

      {/* HCP Scientific Impact — MSL-scoped */}
      <section>
        <SectionHeader icon={Target} label="HCP Scientific Impact" sub={`${msl.territory} · awareness ladder`} right={<ExportBtn />} />
        <div className="space-y-2 mb-5">
          {mslTopics.map((t) => {
            const isOpen = openTopic === t.topic;
            return (
              <div key={t.topic} className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                  onClick={() => setOpenTopic(isOpen ? null : t.topic)}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-sm font-medium text-auri-text">{t.topic}</span>
                    <span className="text-xs text-auri-muted">{t.hcpCount} HCPs</span>
                    <span className={`text-xs font-medium ${parseFloat(t.trend) > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{t.trend} avg stage</span>
                    <span className="text-xs text-auri-muted ml-auto">Committed: {t.confirmed}</span>
                  </div>
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted shrink-0" /> : <ChevronDown size={15} className="text-auri-muted shrink-0" />}
                </button>
                {isOpen && (
                  <div className="border-t border-auri-border p-4">
                    <div className="flex items-end gap-2 mb-3">
                      {t.stages.map((count, i) => (
                        <div key={i} className="flex-1 text-center">
                          <div className="flex items-end justify-center mb-1" style={{ height: 60 }}>
                            <div
                              className="w-full rounded-t bg-auri-text/80 min-h-[4px] transition-all"
                              style={{ height: `${(count / Math.max(...t.stages, 1)) * 56}px` }}
                            />
                          </div>
                          <div className="text-sm font-semibold text-auri-text">{count}</div>
                          <div className="text-[9px] text-auri-muted leading-tight mt-0.5">{STAGE_LABELS[i]}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-auri-muted">Avg awareness stage: <strong className="text-auri-text">{t.avgStage}</strong> / 5</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-auri-border bg-auri-card overflow-hidden">
          <div className="px-4 py-2.5 bg-auri-offset border-b border-auri-border text-xs uppercase tracking-wider text-auri-muted font-medium">Scientific Alignment Shift — Q1 vs Q2</div>
          {mslAlignmentShift.length === 0 ? (
            <div className="px-4 py-4 text-xs text-auri-muted">No HCP–pillar pairs met the minimum 2-interaction threshold this quarter for {msl.msl}.</div>
          ) : (
            <table className="w-full text-sm">
              <tbody>
                {mslAlignmentShift.map((row) => {
                  const delta = row.q2 - row.q1;
                  return (
                    <tr key={row.hcp} className="border-t border-auri-border">
                      <td className="px-4 py-3 font-medium text-auri-text w-32">{row.hcp}</td>
                      <td className="px-4 py-3 text-xs text-auri-muted">{row.pillar}</td>
                      <td className="px-4 py-3 text-auri-muted text-sm">{row.q1}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          {delta > 0 ? <TrendingUp size={13} className="text-emerald-500" /> : <TrendingDown size={13} className="text-rose-500" />}
                          <span className={`text-sm font-semibold ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{row.q2}</span>
                          <span className={`text-xs ml-1 ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{delta > 0 ? `+${delta}` : delta}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* KIT Intelligence — CRM-scoped compact rows */}
      <section>
        <SectionHeader icon={Activity} label="KIT Intelligence" sub={`${msl.territory} · CRM data`} right={<ExportBtn />} />
        <div className="space-y-1.5">
          {KIT_SCORECARDS.map((k, i) => {
            const TrendIcon = k.percentChange >= 0 ? TrendingUp : TrendingDown;
            const trendColor = k.percentChange >= 0 ? 'text-emerald-600' : 'text-rose-600';
            const covered = mslKitCoverage[i];
            const statusStyle = {
              Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
              Monitor: 'bg-amber-50 text-amber-700 border-amber-200',
              Alert: 'bg-rose-50 text-rose-700 border-rose-200',
              Declining: 'bg-zinc-50 text-zinc-700 border-zinc-200',
            };
            return (
              <div key={k.id} className="rounded-lg border border-auri-border bg-auri-card px-4 py-2.5 flex items-center gap-3">
                <span className="text-sm font-medium text-auri-text flex-1 min-w-0 truncate">{k.name}</span>
                <span className="text-xs text-auri-muted">{k.currentMentions} mentions</span>
                <span className={`text-xs font-medium flex items-center gap-0.5 ${trendColor}`}><TrendIcon size={12} />{k.percentChange >= 0 ? '+' : ''}{k.percentChange.toFixed(1)}%</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${statusStyle[k.status] || statusStyle.Active}`}>{k.status}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${covered ? 'bg-auri-text text-auri-bg' : 'bg-auri-border text-auri-muted'}`}>{covered ? 'Covered' : 'Not covered'}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* KOL Engagement — cards with alignment bars */}
      <section>
        <SectionHeader icon={AlertCircle} label="KOL Engagement" sub={`${msl.territory} · tier 1 / tier 2`} right={<ExportBtn />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mslKOLs.map((k) => {
            const alignment = getMessagingAlignment(k);
            const score = alignment?.avgScore ?? 60;
            return (
              <div key={k.id} className="rounded-xl border border-auri-border bg-auri-card p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-auri-text truncate">{k.name}</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20 shrink-0">{k.engagementTier}</span>
                </div>
                <div className="text-xs text-auri-muted mb-2 truncate">{k.institution || '—'}</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-auri-border rounded-full overflow-hidden">
                    <div className={`h-full ${score >= 75 ? 'bg-emerald-500' : score >= 55 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${score}%` }} />
                  </div>
                  <span className="text-xs text-auri-muted shrink-0">{score} alignment</span>
                </div>
              </div>
            );
          })}
          {mslKOLs.length === 0 && (
            <div className="text-xs text-auri-muted col-span-2">No tier 1/2 KOLs mapped to {msl.territory} this cycle.</div>
          )}
        </div>
      </section>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────

export default function NovaTab2FieldStrategy() {
  const [view, setView] = useState('national');
  const [selectedMSL, setSelectedMSL] = useState(MSL_OPTIONS[0]);

  const pills = [
    { id: 'national',   label: 'National' },
    { id: 'territory',  label: 'Territory' },
    { id: 'msl',        label: 'MSL' },
  ];

  return (
    <div>
      {/* View control bar */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-auri-border">
        <div className="flex items-center gap-1 bg-auri-offset rounded-lg p-1">
          {pills.map((p) => (
            <button
              key={p.id}
              onClick={() => setView(p.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${view === p.id ? 'bg-auri-text text-auri-bg shadow-sm' : 'text-auri-muted hover:text-auri-text'}`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {view === 'msl' && (
          <select
            value={selectedMSL}
            onChange={(e) => setSelectedMSL(e.target.value)}
            className="text-xs border border-auri-border rounded-lg px-3 py-1.5 bg-auri-card text-auri-text focus:outline-none focus:ring-1 focus:ring-auri-text/30"
          >
            {MSL_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </select>
        )}
      </div>

      {view === 'national'  && <NationalView />}
      {view === 'territory' && <TerritoryView />}
      {view === 'msl'       && <MSLView selectedMSL={selectedMSL} />}
    </div>
  );
}
