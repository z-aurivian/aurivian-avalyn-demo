import React, { useState, useEffect } from 'react';
import {
  Brain, ChevronDown, ChevronUp, FileDown, Sparkles, MapPin,
  Calendar, GitBranch, Check, TrendingUp, ShieldCheck, MessageSquare,
  AlertCircle,
} from 'lucide-react';
import {
  LISTENING_PRIORITIES, INSIGHTS, ACTIONS,
} from '../config';
import { isPinned, pinInsight, unpinInsight, subscribePinned } from '../lib/journeyStore';

// ACTIONS.fromInsightRef is inconsistent across demo configs — a plain id
// ('AI1'), a '+'-joined compound id ('AI1+AI5'), or an array (['AI1','AI5'])
// where one action addresses multiple insights. Normalise before matching.
function actionCoversInsight(action, insightId) {
  const ref = action.fromInsightRef;
  if (Array.isArray(ref)) return ref.includes(insightId);
  if (typeof ref === 'string') return ref.split('+').includes(insightId);
  return false;
}

// ─── Mock KIQ period data (structural — override per demo) ─────────────────

const KIQ_PERIOD_DATA = {
  LP1: {
    status: 'urgent',
    thisPeriod: {
      summary: 'Three independent sources this cycle confirm community rheumatologists lack a clear MIST/CTD-ILD referral pathway. The gap is most pronounced outside the Northeast US and UK & Ireland territories. MSLs who probed directly found HCPs unsure which patients qualify or who to call.',
      novaSynthesis: 'The intelligence picture shifted this period: awareness that MIST exists is high, but referral logistics — not eligibility criteria — is the blocker. The missing link is a community-facing checklist, not more trial-design communication.',
      keyQuote: { text: 'I know MIST exists but I don\'t know which of my SSc-ILD patients would qualify, or who to call.', msl: 'Maya Sorensen', territory: 'Northeast US', date: '2026-06-04' },
      actionPill: { insight: 'AI1', taken: true, label: 'Referral checklist deployed' },
    },
    cumulative: {
      summary: 'Across 3 measurement periods, community referral-conversation rate has grown from 11% to 21% of tracked rheumatology accounts following the checklist deployment — steady progress, but still below the 40% target.',
      runningInsight: 'The question has shifted from "does the referral pathway exist?" to "how many territories have the checklist actually reached?" — a distribution question, not a design question.',
    },
  },
  LP2: {
    status: 'new',
    thisPeriod: {
      summary: 'Two signals this period focused on the inhaled PK rationale. Physicians want the exposure-reduction claim presented plainly and labeled company-reported, not as an independently verified fact. Academic ad-board feedback echoed the same caution.',
      novaSynthesis: 'The core barrier is not skepticism about the mechanism — it is a credibility-framing question. Getting the "company-reported" language right in every piece of MSL material is now a prerequisite for further engagement, not a footnote.',
      keyQuote: { text: 'If you tell me it\'s 15 to 68 times lower exposure I want to know whose number that is and how it was measured.', msl: 'Priya Chandrasekaran', territory: 'Midwest US', date: '2026-06-08' },
      actionPill: { insight: 'AI2', taken: true, label: 'PK explainer drafted' },
    },
    cumulative: {
      summary: 'LP2 was established alongside AURA-IPF\'s first patient dosed (March 2026). Two insights generated across 2 periods, both centered on the same credibility-framing question rather than new concerns.',
      runningInsight: 'The question is evolving from "is inhaled delivery credible?" to "is our labeling of company-reported data rigorous enough to survive academic scrutiny?"',
    },
  },
  LP3: {
    status: 'urgent',
    thisPeriod: {
      summary: 'Four signals this period — the highest volume of any KIQ. Tolerability burden is now the single most consistently reinforced theme in the field: GI and dermatologic AEs, not efficacy, are cited as the top discontinuation driver.',
      novaSynthesis: 'The core barrier is not lack of tolerability data — it is that MSL materials do not yet lead with it. The conversation guide (A5) has been Accepted but deployment across all territories is incomplete, which is why MO3 remains flagged Gap despite this being the top-recurrence insight.',
      keyQuote: { text: 'Nausea and rash are why patients stop calling me back, not lack of efficacy.', msl: 'Derek Okafor', territory: 'Southeast US', date: '2026-06-10' },
      actionPill: { insight: 'AI3', taken: true, label: 'Conversation guide accepted' },
    },
    cumulative: {
      summary: 'This has been the most persistent KIQ across all periods. The tolerability-burden signal first appeared in Q4 2025 and has remained the highest-recurrence theme every cycle since — 4 sources this period alone.',
      runningInsight: 'The question is evolving from "is tolerability a real barrier?" to "why hasn\'t the conversation guide fully deployed yet?" — a distribution and adoption question now, not a discovery question.',
    },
  },
  LP4: {
    status: 'new',
    thisPeriod: {
      summary: 'Two sources from UK & Ireland and Southeast US territories confirmed rheumatologists want a simplified, EUSTAR-consistent HRCT/PFT screening trigger for SSc-ILD referral, rather than center-specific protocols.',
      novaSynthesis: 'The screening gap is concentrated outside EUSTAR-affiliated academic centers. A single consensus-aligned algorithm, co-authored with Tier 1 rheumatology KOLs, would resolve most of the variation MSLs are reporting.',
      keyQuote: { text: 'We need a screening algorithm we can actually put in front of general rheumatologists, not just EUSTAR specialists.', msl: 'Sophie Bergman', territory: 'UK & Ireland', date: '2026-05-14' },
      actionPill: { insight: 'AI4', taken: false, label: 'Screening algorithm scoping underway' },
    },
    cumulative: {
      summary: 'LP4 was established in Q1 2026. Two insights generated across 2 periods, both pointing to the same non-EUSTAR-center screening gap. UK & Ireland and Continental Europe territories are the primary source of this signal.',
      runningInsight: 'The question has narrowed from "is early referral a problem?" to "what specific trigger should general rheumatologists use?" — urgency increasing ahead of EULAR 2026.',
    },
  },
  LP5: {
    status: 'none',
    thisPeriod: {
      summary: null,
      novaSynthesis: null,
      keyQuote: null,
      actionPill: null,
      emptyReason: 'No new insights generated this period. LP5 was probed in 2 MSL interactions, but neither produced a substantive response — HCPs deferred to the prior cycle\'s congress content. 1 historical insight (AI5) exists for this question.',
    },
    cumulative: {
      summary: 'Only 1 insight generated since LP5 was established. Mechanistic confusion between inhaled antifibrotics and inhaled prostacyclins remains a live risk (et-1, growth rate 54%) but has not generated fresh MSL-sourced signal this period.',
      runningInsight: 'The question has not yet generated enough intelligence to establish a clear trajectory. Directed MSL activation is the priority before the next period, especially ahead of ERS 2026.',
    },
  },
  LP6: {
    status: 'urgent',
    thisPeriod: {
      summary: 'Three sources this cycle confirm nerandomilast\'s approval is actively reshaping first-line IPF sequencing conversations — the fastest-growing emerging theme this cycle (et-2, growth rate 61%).',
      novaSynthesis: 'This is a genuinely new mechanism, not an incremental oral improvement — the field response needed to be faster than a typical competitive update. The rapid-response briefing (A8) was produced within 3 weeks of the signal being flagged.',
      keyQuote: { text: 'Now that there\'s a real new oral mechanism, why would I wait for an inhaled reformulation of an old one?', msl: 'Priya Chandrasekaran', territory: 'Midwest US', date: '2026-06-12' },
      actionPill: { insight: 'AI6', taken: true, label: 'Rapid-response briefing deployed' },
    },
    cumulative: {
      summary: 'LP6 was established immediately following nerandomilast\'s IPF approval (Oct 2025). Three insights generated in a single period reflect the speed of the competitive event, not a slow-building trend.',
      runningInsight: 'The question is shifting from "how do we respond to nerandomilast\'s approval?" to "how do we maintain a standing competitive-response capability for the next oral mechanism?"',
    },
  },
};

const LP7_MOCK = {
  id: 'LP7', name: 'Patient-reported tolerability voice', moRef: 'MO3',
  kiq: 'What tolerability signals are patients reporting directly through advocacy channels, independent of MSL relay?',
  kits: ['Patient advocacy monitoring protocol'],
};

const STATUS_CONFIG = {
  new:    { badge: '● New this month',     style: 'bg-violet-50 text-violet-700 border-violet-200', rowBorder: '' },
  urgent: { badge: '● Urgent this month',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
  none:   { badge: '○ No new insights',    style: 'bg-zinc-100 text-zinc-500 border-zinc-200',      rowBorder: 'opacity-80' },
  gap:    { badge: '0 insights · MO gap',  style: 'bg-rose-50 text-rose-700 border-rose-200',       rowBorder: 'border-l-2 border-l-rose-400' },
};

// ─── Insight card (inline — Tab 3 owns actionable insights) ───────────────

const PRIORITY_STYLE = {
  High:   'bg-rose-50 text-rose-700 border-rose-200',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  Low:    'bg-sky-50 text-sky-700 border-sky-200',
  Urgent: 'bg-rose-50 text-rose-700 border-rose-200',
  New:    'bg-sky-50 text-sky-700 border-sky-200',
};

const STATUS_STYLE = {
  Captured:    'bg-zinc-50 text-zinc-600 border-zinc-200',
  Triaged:     'bg-sky-50 text-sky-700 border-sky-200',
  Validated:   'bg-violet-50 text-violet-700 border-violet-200',
  Prioritised: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const BORDER_STYLE = {
  High:   'border-l-rose-400',
  Medium: 'border-l-amber-300',
  Low:    'border-l-sky-300',
  Urgent: 'border-l-rose-400',
  New:    'border-l-sky-300',
};

function InsightCard({ insight }) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(() => isPinned(insight.id));

  useEffect(() => {
    return subscribePinned((ids) => setPinned(ids.includes(insight.id)));
  }, [insight.id]);

  const handlePin = (e) => {
    e.stopPropagation();
    if (pinned) unpinInsight(insight.id);
    else pinInsight(insight.id);
  };

  return (
    <div className={`rounded-xl border-l-2 border border-auri-border bg-auri-card overflow-hidden ${BORDER_STYLE[insight.priority] || 'border-l-auri-border'} ${pinned ? 'ring-1 ring-auri-text/20' : ''}`}>
      <button className="w-full text-left p-4 hover:bg-auri-offset transition-colors" onClick={() => setOpen(!open)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-medium text-auri-muted">{insight.id}</span>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${PRIORITY_STYLE[insight.priority] || ''}`}>{insight.priority}</span>
              {insight.lpRefs?.map((lp) => (
                <span key={lp} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-offset text-auri-muted border-auri-border">{lp}</span>
              ))}
              {insight.moRefs?.map((mo) => (
                <span key={mo} className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{mo}</span>
              ))}
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_STYLE[insight.status] || ''}`}>{insight.status}</span>
              {pinned && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-auri-text/10 text-auri-text border-auri-text/30 inline-flex items-center gap-1">
                  <GitBranch size={10} /> On Journey
                </span>
              )}
            </div>
            <div className="text-sm font-semibold text-auri-text mb-1 leading-snug">{insight.title}</div>
            <p className="text-sm text-auri-muted leading-relaxed">{insight.summary}</p>
          </div>
          <div className="text-right shrink-0 flex flex-col items-end gap-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-0.5">Confidence</div>
              <div className="text-lg font-bold text-auri-text">{Math.round(insight.confidenceScore * 100)}%</div>
            </div>
            <span
              role="button"
              tabIndex={0}
              onClick={handlePin}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePin(e); }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${pinned ? 'bg-auri-text text-auri-bg border-auri-text' : 'bg-auri-bg text-auri-muted border-auri-border hover:text-auri-text hover:border-auri-text/50'}`}
            >
              {pinned ? <><Check size={11} /> Added to Journey</> : <><GitBranch size={11} /> Add to Journey</>}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2.5 text-[11px] text-auri-muted">
          <span className="flex items-center gap-1"><TrendingUp size={11} /> Recurs {insight.recurrence}×</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> {insight.recency}</span>
          <span className="flex items-center gap-1"><ShieldCheck size={11} /> {insight.provenance}</span>
          <ChevronDown size={13} className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="border-t border-auri-border bg-auri-bg p-4">
          {(() => {
            const action = ACTIONS.find((a) => actionCoversInsight(a, insight.id));
            if (!action) return null;
            const STATUS_PILL = {
              Proposed: 'bg-auri-offset text-auri-muted border-auri-border',
              Started:  'bg-sky-50 text-sky-700 border-sky-200',
              Accepted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            };
            return (
              <div className="rounded-lg border-l-2 border-l-amber-300 border border-auri-border bg-amber-50/30 p-3 mb-4">
                <div className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1.5">Proposed action · {action.id}</div>
                <p className="text-sm text-auri-text leading-relaxed mb-2">{action.title}</p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-auri-muted">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${STATUS_PILL[action.status] || STATUS_PILL.Proposed}`}>{action.status}</span>
                  <span>{action.owner || 'Owner not yet assigned'}</span>
                  {action.dueBy && <span className="flex items-center gap-1"><Calendar size={11} /> {action.dueBy}</span>}
                  {action.moRef && <span className="px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20">{action.moRef}</span>}
                </div>
              </div>
            );
          })()}

          <div className="text-[10px] uppercase tracking-wider text-auri-muted mb-2">Source signals ({insight.sourceInsights?.length || 0})</div>
          <div className="space-y-2">
            {insight.sourceInsights?.map((s, i) => (
              <div key={i} className="rounded-lg border border-auri-border bg-auri-card p-3">
                <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                  <MessageSquare size={10} />
                  <span className="font-medium">{s.type}</span><span>·</span>
                  <span>{s.role}</span><span>·</span>
                  <MapPin size={10} /><span>{s.location}</span>
                  <span className="ml-auto">{s.date}</span>
                </div>
                <p className="text-sm text-auri-text italic leading-relaxed">"{s.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── KIQ Matrix ────────────────────────────────────────────────────────────

function KIQMatrix() {
  const [openRow, setOpenRow] = useState(null);

  const allLPs = [...LISTENING_PRIORITIES, LP7_MOCK];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain size={16} className="text-auri-text" />
          <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">KIQ Intelligence Matrix</h3>
          <span className="text-xs text-auri-muted">{allLPs.length} listening priorities</span>
        </div>
        <button
          onClick={() => window.alert('Export to PowerPoint — coming soon.')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
        >
          <FileDown size={12} /> Export to PPT
        </button>
      </div>

      <div className="space-y-2">
        {allLPs.map((lp) => {
          const period = KIQ_PERIOD_DATA[lp.id];
          const statusKey = period?.status || 'gap';
          const cfg = STATUS_CONFIG[statusKey];
          const isOpen = openRow === lp.id;

          return (
            <div key={lp.id} className={`rounded-xl border border-auri-border bg-auri-card overflow-hidden ${cfg.rowBorder}`}>
              {/* Row header */}
              <button
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-auri-offset transition-all"
                onClick={() => setOpenRow(isOpen ? null : lp.id)}
              >
                <div className="flex items-center gap-3 flex-wrap flex-1 min-w-0">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-auri-text/5 text-auri-text border-auri-text/20 shrink-0">{lp.id}</span>
                  <span className="text-[10px] text-auri-muted shrink-0">{lp.moRef}</span>
                  <span className="text-sm font-medium text-auri-text truncate">{lp.name}</span>
                  <span className="text-xs text-auri-muted italic hidden md:block truncate max-w-xs">"{lp.kiq}"</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${cfg.style}`}>{cfg.badge}</span>
                  {isOpen ? <ChevronUp size={15} className="text-auri-muted" /> : <ChevronDown size={15} className="text-auri-muted" />}
                </div>
              </button>

              {/* Expanded two-column panel */}
              {isOpen && period && (
                <div className="border-t border-auri-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-auri-border">
                    {/* Left — this period */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-text mb-3">
                        This Period — <span className="text-auri-muted">June 2026</span>
                      </div>

                      {period.thisPeriod.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.thisPeriod.summary}</p>

                          {period.thisPeriod.novaSynthesis && (
                            <div className="border-l-2 border-violet-300 pl-3 bg-violet-50/40 rounded-r-lg py-2 pr-3 mb-3">
                              <span className="text-[10px] font-semibold text-violet-700 uppercase tracking-wider">Nova synthesis · </span>
                              <span className="text-xs text-auri-text">{period.thisPeriod.novaSynthesis}</span>
                            </div>
                          )}

                          {period.thisPeriod.keyQuote && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3 mb-3">
                              <div className="flex items-center gap-2 text-[10px] text-auri-muted mb-1.5">
                                <MessageSquare size={10} />
                                <span>{period.thisPeriod.keyQuote.msl}</span>
                                <span>·</span>
                                <MapPin size={10} />
                                <span>{period.thisPeriod.keyQuote.territory}</span>
                                <span className="ml-auto">{period.thisPeriod.keyQuote.date}</span>
                              </div>
                              <p className="text-sm text-auri-text italic leading-relaxed">"{period.thisPeriod.keyQuote.text}"</p>
                            </div>
                          )}

                          {period.thisPeriod.actionPill && (
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${period.thisPeriod.actionPill.taken ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-auri-offset text-auri-muted border-auri-border'}`}>
                              {period.thisPeriod.actionPill.taken && <Check size={12} />}
                              <span>{period.thisPeriod.actionPill.insight}</span>
                              <span>→</span>
                              <span>{period.thisPeriod.actionPill.label}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <AlertCircle size={14} className="text-auri-muted mb-2" />
                          <p className="text-sm text-auri-muted leading-relaxed">{period.thisPeriod.emptyReason}</p>
                        </div>
                      )}
                    </div>

                    {/* Right — cumulative picture */}
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-auri-muted mb-3">Cumulative Picture</div>

                      {period.cumulative.summary ? (
                        <>
                          <p className="text-sm text-auri-text leading-relaxed mb-3">{period.cumulative.summary}</p>
                          {period.cumulative.runningInsight && (
                            <div className="rounded-lg border border-auri-border bg-auri-bg p-3">
                              <div className="text-[10px] uppercase tracking-wider text-auri-muted font-semibold mb-1.5">Running Insight</div>
                              <p className="text-xs text-auri-text italic leading-relaxed">{period.cumulative.runningInsight}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="rounded-lg border border-auri-border bg-auri-bg p-4">
                          <p className="text-sm text-auri-muted leading-relaxed">{period.cumulative.emptyReason || 'No cumulative intelligence to display.'}</p>
                        </div>
                      )}
                    </div>
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

// ─── Main export ───────────────────────────────────────────────────────────

export default function NovaTab3InsightIntelligence() {
  return (
    <div className="space-y-8">
      {/* Nova intelligence brief */}
      <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={15} className="text-violet-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-700">Nova Intelligence Brief</span>
          <span className="text-[10px] text-violet-500 ml-1">AI-generated · on load</span>
        </div>
        <p className="text-sm text-auri-text leading-relaxed">
          This period, <strong>5 of 7 KIQs</strong> generated new insights. LP3 (tolerability/adherence burden) and LP6
          (nerandomilast competitive response) are both flagged <strong>Urgent</strong> — LP3 is the highest-recurrence
          insight this cycle despite MO3's Gap coverage score, and LP6 reflects the speed of nerandomilast's approval.
          LP5 (inhaled category differentiation) and LP7 (patient-reported tolerability voice) have generated
          no fresh intelligence this cycle; directed MSL activation is recommended for both ahead of ERS 2026.
          The highest-confidence insight this period is <strong>AI3</strong> (89% confidence, tolerability burden).
        </p>
      </div>

      {/* KIQ Matrix */}
      <KIQMatrix />

      {/* Actionable Insights */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-auri-text" />
            <h3 className="text-sm font-semibold text-auri-text uppercase tracking-wider">Actionable Insights</h3>
            <span className="text-xs text-auri-muted">{INSIGHTS.length} prioritised · refreshes every 6 hours</span>
          </div>
          <button
            onClick={() => window.alert('Export to PowerPoint — coming soon.')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-auri-border text-auri-muted hover:text-auri-text hover:border-auri-text/50 transition-all"
          >
            <FileDown size={12} /> Export to PPT
          </button>
        </div>
        <div className="space-y-3">
          {INSIGHTS.map((i) => <InsightCard key={i.id} insight={i} />)}
        </div>
      </section>
    </div>
  );
}
