// ============================================================================
// Avalyn demo data — thin re-export shim for RAG/legacy consumers.
// Canonical exports (KOL_DATA, KIT_SCORECARDS, EMERGING_THEMES, etc.) live
// in src/config/*. This file exists because src/api/rag.js and
// src/api/auriApi.js import KIT_SCORECARDS, COMPETITOR_DATA, KOL_DATA and
// PRODUCT_OPTIONS from '../data/demoData'. KIT_SCORECARDS here is the flat
// config array (not product-keyed) — RAG lookups that index it by product
// id will simply find nothing and fall through, which is expected.
// ============================================================================

export { PRODUCT_OPTIONS, CONGRESS_OPTIONS } from '../config/clientConfig';
export { KIT_SCORECARDS } from '../config/kit-scorecards';
export { KOL_DATA } from '../config/kols';

// No structured per-competitor dataset for Avalyn's RAG layer yet — the
// qualitative competitive landscape lives in strategicContent.js
// (COMPETITIVE_LANDSCAPE) and config/therapeutic-area.js (competitors[]).
export const COMPETITOR_DATA = {};
