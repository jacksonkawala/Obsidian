---
title: Wiki Log
updated: 2026-05-01

---

# Wiki Log

Chronological record of wiki operations.

## [2026-04-25] ingest+audit | TSF 21-23 Apr + Geotech 22-24 Apr + highlight rendering

**Sources:**
- `raw/tsf/Kenmare_TSF_Summary_Report 21042026.pdf`
- `raw/tsf/Kenmare_TSF_Summary_Report 22042026.pdf`
- `raw/tsf/Kenmare_TSF_Summary_Report 23042026.pdf`
- `raw/geotech/Daily Geotechnical Report 22_04_2026.pdf`
- `raw/geotech/Daily Geotechnical Report 23_04_2026.pdf`
- `raw/geotech/Daily Geotechnical Report 24_04_2026.pdf`

**Pages created:**
- `wiki/tsf/nataka-tsf-daily-2026-04-21.md`
- `wiki/tsf/nataka-tsf-daily-2026-04-22.md`
- `wiki/tsf/nataka-tsf-daily-2026-04-23.md`
- `wiki/geotech/daily-geotech-2026-04-22.md`
- `wiki/geotech/daily-geotech-2026-04-23.md`
- `wiki/geotech/daily-geotech-2026-04-24.md`

**Pages updated:**
- `wiki/tsf/nataka-tsf.md` — rolled current status to 24 Apr / 23 Apr TSF summary: 63% filled, 5.30 m freeboard, Tails 3A still overtopping and eroding Lift 1.
- `wiki/kenmare/kenmare-moma.md` — added latest operational update for WCPC plant beaching, WCPB HTC/Lake Johari backflow risk, Old DMB Red sequence, and persistent data-quality issues.
- `index.md` — added six new report pages and updated date.
- `log.md` — this entry.
- `CLAUDE.md` and `AGENTS.md` — added highlight convention so future ingests mark critical alert phrases and Highlights sections consistently.
- `viewer/src/components/MarkdownRenderer.jsx` and `.css` — critical headings, bold alert phrases, and alert table cells now render red with a glow.

### Claude Ingest Audit

Claude's 17-21 Apr ingest captured the major operational chain correctly: WCPC Red-to-Orange, Old DMB escalation, Paddock 73 recovery, Tails 1B safety-flag anomaly, Paddock 9C stale readings, TSF pool/freeboard contradictions, and Tails 3A overtopping through 21 Apr. The main gap was not quality but incompleteness: the ingest stopped before the 21-23 Apr TSF summaries and 22-24 Apr geotech reports.

### Key Findings Added

- **Tails 3A remains unresolved through 24 Apr.** The retention berm is still overtopping and wet tailings are still eroding / encroaching on Lift 1 sidewall.
- **WCPC plant became beached / non-operational.** On 24 Apr the WCP-C Dredge Pond was raised to **10.50 mRL** to refloat the plant; the report says water should not exceed 10.50 mRL and dewatering must follow relocation.
- **WCPC Water Body remains Orange but critical** at 9.60 mRL and 1.40 m freeboard through 24 Apr.
- **Old DMB Red Alert persisted 21-23 Apr** at 21.50 mRL / 1.50 m freeboard, then improved to 21.35 mRL / 1.65 m on 24 Apr while still called Red.
- **WCPB HTC discharge adds a Lake Johari backflow risk** from 22 Apr onward.
- **SMO berm mining by HME** was flagged on 22 Apr; berm reinstatement and barricading recommended.
- **MSP Rejects in Paddock 16C** continue building toward berm elevation, with backflow/overtopping risk.
- **TSF filled fraction advanced to 63%** by 23 Apr; freeboard moved 5.40 (21-22) → 5.30 (23-24).
- **Data-quality issues continued:** duplicate TSF Ref 53 on 21/22 Apr, §4 date stuck at 21/04 in 22/23 Apr TSF summaries, Supernatant Pump 1 duplicated, 23 Apr slimes-vs-water-received mismatch, PDP-1 blank fields on 23/24 Apr, WCPB Starboard Corner blank table on 22 Apr, and Paddock 9C stuck at 17.00 mRL.

## [2026-04-21] ingest+audit | Daily Geotech 21 Apr 2026

**Source:** `raw/geotech/Daily Geotechnical Report 21_04_2026.pdf` (44 pages)
**Report:** Daily Geotechnical Report, Ref 090/GTC/2026, 21-04-2026 (06:00–11:00)

**Also present but not ingested:** `raw/geotech/TSF_Wk21042026.pptx` — PPTX is currently open in PowerPoint (only the `~$` Office lock file is on disk; the main file is not yet saved). User explicitly asked to skip this source for now; revisit once the PPTX is saved and closed.

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-21.md` — NEW: full report summary with facility-freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: status rolled to 21 Apr; WCPC downgrade, Old DMB Red, pool 24.70/24.75 contradiction, Tails 1B sixth day, Tails 3A still overtopping
- `wiki/kenmare/kenmare-moma.md` — UPDATED: all facility statuses refreshed to 21 Apr including Old DMB Red, WCPC Orange, WCP-C Dredge Pond rising, Paddock 73 fully recovered, Paddock 9C seventh stale day
- `index.md` — UPDATED: added 21 Apr geotech entry to Geotech section

### Key Findings (operational)

- **Old DMB Pit RED ALERT — first day.** WL +0.35 m to 21.50 mRL; Berm 12C freeboard 1.50 m (Red). Inflows ceased; MSP Rejects rerouted to Paddock 16C. Non-Compliance row contradicts by reading "None."
- **WCPC Water Body downgraded Red → Orange.** First alert-level improvement after at least 10 consecutive Red days. WL 9.60 mRL (−0.20), port-sidewall FB 1.40 m. Narrative still "critical."
- **Tails 3A retention berm still overtopping** on 21 Apr — unresolved from 20 Apr. Plant on shut; liquefaction and HME risks called out.
- **TSF WL 24.70 mRL per §4 table, narrative says 24.75 mRL** — new intra-report contradiction on a single data point.
- **Paddock 73 fully recovered** from 18 Apr Orange Alert — WL 41.85 → 40.80 mRL over four days; Berm 73 FB back to 2.90 m. Toe seepage continues under monitoring.
- **SMO front-berm FB climbing back**: 0.90 m (18 Apr) → 1.20 m (20 Apr) → 1.30 m (21 Apr). Separation-berm slumps still present.
- **WCPB Starboardside Corner Red** unchanged at 14.50 mRL across five readings (17, 18, 20, 21 Apr and prior).
- **Old DMB / Paddock 11C separation-berm erosion** persistent 17, 18, 20, 21 Apr; now compounded by Red Alert on Old DMB itself.
- **Paddock 61 emergency pipes** still burnt — not reinstated across 17, 18, 20, 21 Apr despite repeated remedial agreement.

### Cross-Report Inconsistencies Audit (21 Apr)

New issues surfaced or continued from prior audit:

1. **TSF WL narrative vs table mismatch** (new on 21 Apr) — Highlights text "currently at 24.75 mRL" vs §4 table "today 24.70 / previous 24.75, change −0.05."
2. **TSF Non-Compliance row "None"** while narrative explicitly demands liner reinstatement, pipeline repositioning, wall rehabilitation — now fourth consecutive report (18, 20, 21 Apr).
3. **Old DMB Pit Non-Compliance row "None" despite Red Alert** (21 Apr) — same pattern; tick-box cell not wired to alert escalation.
4. **WCPC Water Body "halt all inflows" recommendation still not acted on** — HMC stacker remains the listed inflow across 18, 20, 21 Apr (four consecutive reports).
5. **PDP-1 and PDP-2 liner-theft paragraphs verbatim identical** — fourth consecutive report with the same copy-paste (18, 20, 21 Apr).
6. **110 kV pole erosion text duplicated** under WCP-A Dredge Pond and PDP-1 — unchanged pattern.
7. **Paddock 9C "WL to be confirmed"** for seventh consecutive reading (15–21 Apr) at unchanged 17.00 mRL. Inspection appears to have paused on this paddock.
8. **Tails 1B marked Safe with +4 m stacking-point variance for sixth consecutive inspection** (16, 17, 18, 20, 21 Apr). Asymmetric with BB2 (+1.60 m berm-height variance → Orange). Systematic, not transient.
9. **"Managers informed" colour shading inconsistent** — red for WCPC Water Body and WCPB Corner; orange for Paddock 73; yellow for ISOA. No legend.
10. **No §4 "Priority actions for the week" table on 21 Apr** — 17 Apr report carried this block; 21 Apr omits it. Template inconsistency.
11. **No Finishing Pond standalone table on 21 Apr** — only referenced as a WCPA inflow source. Omission vs 20 Apr.
12. **BB1 return-water migration concern** — 17 Apr standalone narrative replaced by embedded remark in BB1 / BB1_Kwale stacker rows on 21 Apr: "construct retention berm to prevent water/slurry migration towards DMC pit." Still unresolved, now less prominent.
13. **Tails 3B photo-only** with no geometry or commentary — consistent across recent reports.
14. **Float-off Pond "Safe to operate" shown yellow** despite green freeboard cells — unexplained colour coding.

## [2026-04-21] ingest+audit | Daily Geotech 18 & 20 Apr + TSF 17, 19 & 20 Apr

**Sources:**
- `raw/geotech/Daily Geotechnical Report 18_04_2026.pdf` (44 pages)
- `raw/geotech/Daily Geotechnical Report 20_04_2026.pdf` (44 pages; 19 Apr geotech not issued)
- `raw/tsf/Kenmare_TSF_Summary_Report 17042026.pdf` (Ref 50/TSF/2026)
- `raw/tsf/Kenmare_TSF_Summary_Report 19042026.pdf` (Ref 51/TSF/2026; 18 Apr TSF not issued)
- `raw/tsf/Kenmare_TSF_Summary_Report 20042026.pdf` (Ref 52/TSF/2026)

**Pages created:**
- `wiki/tsf/nataka-tsf-daily-2026-04-17.md`
- `wiki/geotech/daily-geotech-2026-04-18.md`
- `wiki/tsf/nataka-tsf-daily-2026-04-19.md`
- `wiki/geotech/daily-geotech-2026-04-20.md`
- `wiki/tsf/nataka-tsf-daily-2026-04-20.md`

**Pages updated:**
- `wiki/tsf/nataka-tsf.md` — current status rolled to 20 Apr; Key Concerns restructured around WCPC (≥day 10), Old DM Pit new Orange, Tails 3 retention berm overtopped, Paddock 73 Orange-then-recovered, SMO escalation, Lift 1 resumption (29 May completion, 52-day margin); 20 Apr water balance table.
- `wiki/kenmare/kenmare-moma.md` — facility statuses refreshed to 20 Apr; stacker narratives extended with Tails 3 overtopping, BB1 concern status unclear, C1 tails O/E "Not Safe" flag, HTC backflow risk, SMO S1 wording change.
- `index.md` — added 17, 19, 20 Apr TSF and 18, 20 Apr geotech entries.

### Cross-Report Logical Inconsistencies Audit

Findings summarised from the five-report chain (17–20 Apr) and cross-checked against earlier entries (08–16 Apr):

1. **Pool-elevation multi-value bug (persistent, structural).** The TSF summary reports from 15, 17, 19, and 20 Apr each contain two or three different pool elevations within the same document: the Section 1 summary-table "pool elevation basis" for freeboard, the §2 Operational Notes, and the §4 Pool/Freeboard table. Typical discrepancies 0.10–0.65 m. Pattern: the summary-table row is not refreshed when §4 is updated. **17 Apr** summary table shows 24.6 mRL / 5.4 m but §4 shows 24.10 / 5.90 m. **19 Apr** summary table shows 24.6 / 5.4 but §4 shows 24.75 / 5.25. **20 Apr** has three values (24.70 / 24.75 / 24.80).
2. **"Supernatant Pump 1" duplicated in Return Water table** — six consecutive TSF summaries (15, 16, 17, 19, 20 Apr) with the same copy-paste bug; second row should be Pump 2.
3. **§4 header date runs one day ahead of report date** — 17 Apr says 18/04, 19 Apr says 20/04, 20 Apr says 21/04 — systematic template error.
4. **Cover-page aerial dated 18-03-2026** across 17, 19, 20 Apr TSF summaries — one month stale on the template image.
5. **PDP mass-balance gap** — 17, 19, and 20 Apr TSF water-balance tables show **zero reported PDP inflows** (WCP-A→PDP = 0, P73→PDP = 0, makeup = 0) while PDP has large outflows to TSF plus seepage. On 19 Apr the implied balance is −55,193 m³/d. But the 18, 20 Apr geotech inspections confirm PDP-1 WL unchanged at 34.00 mRL and PDP-2 unchanged at 31.90 mRL — so the ponds are not actually draining. Conclusion: an unmetered inflow (likely raw water) exists and is missing from the table. Three reports now with this gap.
6. **Tails 1B safety-flag anomaly** — now fifth day (16, 17, 18 Apr; 19 Apr geotech not issued; 20 Apr) marked "Safe to Operate = Yes" despite unchanged +4.00 m stacking-point, +2.50 m base, and +1.50 m berm-height variances with roping at U/F and O/F eroding the berm. 13, 14, 15 Apr reports with identical geometry flagged NOT SAFE. Asymmetric with BB2, where +1.60 m berm-height variance alone drew the Orange flag. Systematic assessment change or safety-logic misalignment, not a transient data error.
7. **TSF pool trajectory invisible from any single source.** Reconstruction requires three reports: 18 Apr geotech (24.10 mRL), 19 Apr TSF summary "prev day = 5.70 m" implying ~24.30 mRL, 19 Apr TSF "today = 24.75 mRL", 20 Apr TSF §4 = 24.70 mRL. Combined: 24.10 → ~24.30 → 24.75 → 24.70 across 18–20 Apr. No single report shows the full sequence.
8. **TSF alert threshold asymmetry.** A +0.45 m single-day pool rise on 20 Apr (24.30 → 24.75 mRL implied) was not called out as an alert, while Old DM Pit's +0.15 m rise the same day triggered an Orange Alert narrative. The asymmetry reflects that TSF freeboard (5.25–5.30 m) is still Yellow while Old DM Pit crossed a hard max-allowable limit, but the contrast is worth flagging to the inspection team.
9. **MSP Rejects now a closed loop.** Discharge: Old DM Pit → redirect OUT 15 Apr (Orange) → cascade into P16C 16–18 Apr (backflow, sidewall erosion) → **recommended BACK to P16C 20 Apr** (Old DM Pit re-entered Orange). No stable destination has been identified.
10. **BB1 stacker return-water migration concern (17 Apr)** — raised as a breach risk in 17 Apr narrative but not repeated in BB1 sections of 18 or 20 Apr. Status unclear: unresolved, or dropped from report scope. Worth explicit resolution in next inspection.
11. **Paddock 9C "WL to be confirmed"** — the same 17.00 mRL value across six consecutive readings (15–20 Apr); "WL to be confirmed" caveat appears on every edition. Almost certainly a stale reading.
12. **20 Apr geotech WL changes show 0.00 across most facilities** (PDP-1, PDP-2, P72, P73, P9C, P16C, ISOA, ExtP7, Float-off, Finishing, Exit, WCPB Pond, WCPB Corner, WCPC Dredge Pond, SMO) where "Previous Day" refers to 18 Apr — plausible for stable ponds but suspicious for active ones. Trend charts, however, show 7 data points through 20 Apr, implying daily readings were taken on 19 Apr even though no 19 Apr geotech PDF was issued.
13. **Paddock 73 trajectory discontinuity.** 18 Apr: 41.85 mRL (Orange). 20 Apr: 40.90 mRL with "Change = 0.00". The ~0.95 m drawdown happened within the reporting gap and isn't captured as a trend metric in the 20 Apr report. Misleading if read without the 18 Apr report at hand.
14. **18 Apr and 20 Apr geotech — PDP-1 and PDP-2 liner-theft paragraphs verbatim identical** on both pages. Either both facilities genuinely had theft events on the same day, or one paragraph was carried over in error. Pattern repeated across both reports.
15. **TSF Non-Compliance row "None" on 18 and 20 Apr geotech** while the narrative calls for liner reinstatement and pipeline repositioning — tick-box contradicts prose.
16. **Tails outflow step-change on 20 Apr.** TSF summary 16, 17, 19 Apr water balance all show Tails = 66,865 m³/d. 20 Apr shows 20,979 m³/d — a 3× drop with no narrative support. Either plant throughput stepped down sharply or one of the editions has an arithmetic/copy error.
17. **WCPA water balance +44,927 m³/d on 20 Apr** with inflows ~69,693 vs outflows ~24,767 — a large positive imbalance suggesting missing outflows or double-counted inflows; should close against the 16 Apr +43,533 benchmark.
18. **WCPC Water Body inflows still list HMC stacker** across 17, 18, 20 Apr despite the remedial recommendation to halt all inflows — the recommendation has not been acted on.
19. **Lift 1 fill-to-date arithmetic.** 19 Apr reports 245,830 m³ (after +600 overnight). 20 Apr still shows 245,830 m³ despite reporting a 1,370 m³ day+night fill. Either fill-to-date was not refreshed or today's fill was not yet rolled in.
20. **Finishing Pond C** mentioned in 16 Apr TSF balance but **absent from 17, 19, 20 Apr balance tables** — unexplained; flow could still be active (WCP-A receiving, geotech shows WL 13.10–13.15 mRL). Inflow may be unaccounted on the WCPA side.
21. **Alert-sequence count discrepancy for WCPC Water Body Red.** The 17 Apr report calls it "day 7". With 18 Apr (continued) and 20 Apr (continued, no 19 Apr report), the running count should be ≥day 10 — the 20 Apr report does not explicitly state a day-count.
22. **SMO narrative for S1 stacker** — 17/18 Apr wording "relocate stacker"; 20 Apr wording "construct retention berm to prevent water flowing toward the wetland". Either a change in approach or a narrative drift worth checking with SMO operations.

No contradictions found between the 18 Apr geotech TSF WL (24.10 mRL) and the 17 Apr TSF summary (pool 24.10 mRL) — the 15 Apr three-way inconsistency has not recurred for this data point.

### Key Findings (operational)

- **WCPC Water Body Red Alert now ≥day 10.** FB improved 1.05 → 1.20 m by 20 Apr but still non-compliant. Pump running; inflows recommended halted.
- **Old DM Pit re-entered Orange on 20 Apr.** +0.15 m to 21.15 mRL. MSP Rejects destination loop remains unresolved.
- **Tails 3 stacker retention berm OVERTOPPED on 20 Apr.** Escalation beyond the 16 Apr fresh washout and 17 Apr narrow/short concern. Plant on shut.
- **Paddock 73 Orange Alert 18 Apr, recovered 20 Apr.** +0.25 m to 41.85 mRL triggered alert; dewatering pulled WL back to 40.90 mRL. Toe seepage continues.
- **SMO front-berm FB dipped to 0.90 m on 18 Apr** (below 1.0 m threshold); recovered to 1.20 m by 20 Apr. Breach risk persists.
- **Lift 1 construction resumed 19 Apr** — 600 m³ overnight after five-day stall, 1,370 m³ on 20 Apr. Completion 29 May 2026 (52-day margin).
- **TSF filled reassessed 59% → 60% → 61%** across 16, 19, 20 Apr reports via production-forecast updates. Capacity 1.2 Mt still unverified.
- **TSF freeboard trajectory volatile**: 5.40 (16) → 5.90 (17, drawdown) → ~5.70 (18) → 5.25 (19) → 5.30 (20). 0.30 m from Orange on 20 Apr.
- **Four return-water pumps commissioned** (17 Apr onward); return ratio varies 31–217% of daily slurry receipt as pool is actively managed.
- **Liner theft and pipeline integrity issues continue unchanged.**
- **Week 16 and Week 17 both zero rainfall**; MTD 243 mm, YTD 801 mm — erosion observations driven by earlier April events.

## [2026-04-18] ingest | Daily Geotechnical Report 17-04-2026

**Source:** `raw/geotech/Daily Geotechnical Report 17_04_2026.pdf` (44 pages)
**Report:** Daily Geotechnical Report, Ref 087/GTC/2026, 17-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-17.md` — NEW: Full report summary with facility-freeboard chart and priority-actions table
- `wiki/tsf/nataka-tsf.md` — UPDATED: status refreshed to 17 Apr (pool 24.60 mRL, FB 5.40 m, completion 25 May); key-concerns list restructured with SMO/Old DMB/BB1 items; 16 Apr water-balance table
- `index.md` — UPDATED: added 17 Apr geotech entry to Geotech section

**Key findings:**
- **WCPC Water Body RED Alert — seventh consecutive day, further slight deterioration.** Freeboard 1.05 m (was 1.10 m on 16 Apr, 1.15 m on 11–15 Apr). WL 9.95 mRL. Non-compliant.
- **BB1 stacker return water migrating to starboard sidewall (WCPA Pond)** — progressive erosion, berm-breach risk. Agreed response: redirect discharge to face the mining pond, reinstate affected section.
- **SMO Pond/Paddock — separation-berm breach risk escalated.** Tailings encroaching with slumps; recurrent stacker washouts eroding the sea wall and spilling water over the operational area. Plan under development. S1 stacker to be relocated; S2 to be lifted.
- **Old DMB Pit / Paddock 11C separation-berm progressive erosion** (new concern). Reinstatement required. Old DMB WL dropped to 21.00 mRL (was 21.10) — Orange Alert easing slightly since 15 Apr.
- **WCPB Starboardside Corner — Red Alert.** WL 14.50 mRL, river-sidewall freeboard 1.50 m, retention berm 2.00 m. Dewatering required; reshape plans under consideration to prevent water entrapment.
- **TSF pool continues rising** — WL 24.60 mRL (+0.10 from 16 Apr). Freeboard 5.40 m (Yellow), down from 5.50 m. Seepage along toe of second lift continues; another starter-wall liner section stolen.
- **PDP-1 WL dropped 0.30 m** (34.30 → 34.00 mRL). **PDP-2 stable** at 31.90. Port-sidewall liners on both PDP-1 and PDP-2 ripped off again (third time this week).
- **Tails 1B safety-flag inconsistency — now second day.** Marked "Safe to Operate = Yes" on 16 and 17 Apr despite unchanged +4 m stack-point variance, +2.5 m base variance, O/F discharge eroding berm, U/F roping. Contradicts the NOT SAFE flag on 13, 14, 15 Apr. Looks like a changed assessment rather than a one-day data error.
- **BB2 stacker berm-height variance +1.60 m** flagged Orange (Safe-to-Operate box shown orange rather than green). New concern at the back of WCPB Pond.
- **Paddock 9C operating at limited storage capacity** — both sections at 1.50 m freeboard (Yellow). Paddock 16C geometry adequate (2.50/2.80 m) but MSP Rejects backflow/erosion now in its third day; reallocation still pending.
- **Paddock 73 seepage at Berm 73 toe continues** (fourth day). WL 41.60 mRL; side-berm seepage flagged.
- **Full-scope inspection restored** (44 pages vs 16 Apr's 20 pages). Priority-actions table for the week 13–19 Apr includes: liner reinstatement at PDP-1/PDP-2, P72 low-section and B72 buttress (MZ, ASAP), RWD level control, WCPC/P10C/river-diversion-channel maintenance. DMC date entries ("23/06/2024", "09/06/2024") appear to be stale or transcription errors.
- **Pilivili Top Embankment gullies from rainfall**, River Diversion Channel sidewall erosion, DMA–SMO mining-face seepage, Habelo Valley rainfall erosion — all flagged for reinstatement/maintenance.

## [2026-04-18] ingest | Nataka TSF Daily Summary Report 16-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 16042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 49/TSF/2026, 16-04-2026 (Week 16 close)

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-daily-2026-04-16.md` — NEW: Daily TSF summary with freeboard trend chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: 59% filled, 491,197 t remaining, water balance refreshed
- `index.md` — UPDATED: added 16 Apr TSF entry

**Key findings:**
- **TSF 59% filled** (708,803 t) — up 1 pp from 58% on 15 Apr. Storage space remaining 491,197 t (95 days to Phase 1 capacity). Phase 1 date unchanged at 20 July 2026.
- **Slurry receipt moderated** — 50,313 m³ on 16 Apr (vs 67,492 on 15 Apr, 13,049 on 14 Apr, zero on 09–13 Apr). Density steady at 1.15 t/m³. Approx 12,039 t solids added. Week-16 7-day average now 46,125 m³/day pumped, 4,355 t/day solids.
- **Freeboard drifting toward Orange** — 5.40 m (Yellow), down from 5.50 m on 15 Apr. Pool 24.60 mRL (Op-Notes), up from 24.50 on 15 Apr. Now 0.40 m from the 5.00 m Orange threshold.
- **Water return slightly softer** — 19,927 m³/d returned TSF → Pond (was 20,219 on 15 Apr) despite all four pumps at 100% availability. Return ratio 40% of inflow (up from 30% on 15 Apr, driven by lower inflow not higher return).
- **Lift 1 still stalled, completion slipped to 25 May** — fourth consecutive zero-fill day. Cumulative slip now 6 days over five days of stall (from 19 May on 12 Apr). Margin to capacity 56 days. ADTs still loading sand for access; runoff siphoning ongoing between Valley 3 and TSF toe berms.
- **Water balance — TSF still net-accumulating** — TSF +26,499 m³/d (moderated from +43,385 on 15 Apr). PDP −49,572. WCPA +43,533 (strengthened from +30,915). The inter-system through-flows collapsed: WCP-A→PDP fell from 90,000 to 10,000 m³/d; PDP→Pond fell from 82,000 to 18,000 m³/d.
- **Zero rain for the week** — weekly rain gauge chart shows zero for all days 10–16 Apr. MTD unchanged at 243 mm, YTD 801 mm.
- **Cross-report agreement restored** — the 17 Apr geotech morning TSF WL (24.60 mRL, previous-day 24.50) matches this TSF summary's pool (24.60 mRL). No recurrence of the three-way 15 Apr inconsistency.
- **Duplicate "Supernatant Pump 1" label in the Return Water table** — same issue as 15 Apr; second row almost certainly Pump 2.

## [2026-04-17] ingest | Daily Geotechnical Report 16-04-2026

**Source:** `raw/geotech/Daily Geotechnical Report 16_04_2026.pdf` (20 pages)
**Report:** Daily Geotechnical Report, Ref 086/GTC/2026, 16-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-16.md` — NEW: Full report summary with freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: pool rising (24.30→24.50 mRL), fresh 3A washout, another starter-wall liner stolen, 6th day WCPC Red
- `wiki/kenmare/kenmare-moma.md` — UPDATED: WCPC deteriorating, MSP Rejects P16C flow reversal, stacker status, Tails 1B data-quality concern

**Key findings:**
- **WCPC RED — sixth consecutive day, deteriorating** — freeboard dropped to 1.10 m (was 1.15 m held for five days). WL 9.90 mRL.
- **Fresh Tails 3A washout** at the relocated stacker position. Retention berm at new position is both narrow and short, with an access road along its base — HME bogging risk. Operations halted.
- **MSP Rejects cascade:** MSP Rejects redirected to Paddock 16C on 15 Apr (after Old DM Pit Orange alert) have now accumulated enough to reverse flow direction, causing backflow and sidewall erosion in P16C within 24 hours. Discharge to be reallocated again.
- **TSF WL rose +0.20 m** (24.30→24.50 mRL) after the 67,492 m³ slurry receipt on 15 Apr. Freeboard 5.50 m (Yellow).
- **Another TSF starter wall liner section stolen** — continues relentless theft pattern. Port-sidewall liners on PDP-1 and PDP-2 also ripped off again (same day).
- **Paddock 73 slight improvement** — 41.55 mRL, −0.05 m after the 15 Apr reversal. Seepage at Berm 73 toe continues.
- **PDP-2 erosion worsening** — starboard near slimes boosters and adjacent to Berm 75 both getting worse. Pipeline leaks from PDP-1/Berm 75 present dual embankment-breach/pipeline-integrity risk.
- **Tails 1B data-quality concern:** Report marks "Safe to Operate = Yes" despite stacking point +4 m above safe, base +2.5 m, roping at U/F, and O/F eroding berm — geometry values unchanged from 13–15 Apr when the stacker was consistently marked NOT SAFE.
- **Scope reduction vs prior reports:** No detailed coverage for WCPB, WCPC, SMO, Paddock 9C, Paddock 16C, Old DM Pit, Exit Pond, Starboard Side Corner, Paddocks 58/68/60/66/69 — all routinely covered in 08–15 Apr reports.

## [2026-04-17] ingest | Nataka TSF Daily Summary Report 15-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 15042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 48/TSF/2026, 15-04-2026 (Week 16)

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-daily-2026-04-15.md` — NEW: Daily TSF summary with freeboard trend chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: 58% filled, slurry surge, water balance, freeboard dropped to 5.50 m

**Key findings:**
- **Slurry surge** — 67,492 m³ received on 15 Apr vs 13,049 m³ on 14 Apr (5× increase). Approx 16,150 t solids added, bringing total-to-date to 696,764 t (58% of revised 1,200,000 t capacity).
- **Water return continues to strengthen** — 20,219 m³/d (up from 15,593 on 14 Apr, 3,638 on 13 Apr). All four pumps at 100%.
- **Freeboard dropped** to 5.50 m (Yellow) from 5.70 m — driven by the slurry receipt outpacing return.
- **Lift 1 stalled** — zero fill placed for third consecutive day; completion slipped one more day to **24 May 2026**. ADTs loading sand for access (not placing fill).
- **Three internal pool-elevation inconsistencies in the same report:** Section 1 summary table implies 24.35 mRL; Operational Notes "Pool level: 24.50 mRL"; Section 4 Freeboard table "Pool elevation 24.70 mRL". The 5.50 m FB is consistent with 24.50 mRL (Op Notes value) — 24.70 is almost certainly a typo.
- **Supernatant Pump 1 listed twice** in the Return Water table (second row should be Pump 2).
- **Cross-report reconciliation:** 15 Apr geotech morning reading TSF WL 24.30 mRL; 15 Apr TSF summary Pool 24.50–24.70 mRL; 16 Apr geotech morning reading 24.50 mRL. The pool rose +0.20 m during 15 Apr (morning-to-late) and held into 16 Apr morning.
- **Water balance — TSF now net-accumulating:** TSF +43,385 m³/d (inflow 67,492 from PDP, outflow 20,219 to Pond + 3,888 seepage). PDP −60,764; WCPA Pond +30,915.
- Phase 1 capacity date unchanged at 20 July 2026. Bathymetric survey remains urgently needed.

## [2026-04-16] ingest | Freeboard Update Report — 14 April 2026

**Source:** `raw/geotech/Freeboard Update Report_WCPA_WCPB_WCPC_SMO_14_04_2026.pdf` (18 pages)
**Report:** Freeboard Update Report, Ref 09/WFR/2026, 14-04-2026. Survey-based section-by-section freeboard data for all facilities.

**Pages created/updated:**
- `wiki/geotech/freeboard-update-2026-04-14.md` — NEW: Comprehensive freeboard assessment with minimum-freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: added freeboard report link, confirmed TSF starter wall as controlling section
- `wiki/kenmare/kenmare-moma.md` — UPDATED: added freeboard report context for WCPC, SMO, Exit Pond concerns

**Key findings:**
- **Seven facilities have sections below 2.0 m freeboard:**
  - WCPC Water Body PT_4: **1.05 m** (6 m crest, 9.95 mRL WL) — lowest on entire site, explains persistent RED ALERT
  - Paddock 10C Sec_6: **1.25 m** (7 m crest) — now receiving redirected MSP Rejects
  - SMO Pond Sec_6: **1.40 m** (16 m crest) — confirms berm breach risk
  - Starboard Side Corner Stb_2: **1.45 m** (3.5 m crest) — pinch point
  - Paddock 73 B73_1 at 30m width: **1.50 m** (crest 3.50 m, drops to 1.50 m at 30m width) — seepage at toe of this section
  - Paddock 9C 9C_3: **1.50 m** (2.4 m crest) — extremely narrow
  - Exit Pond Sec_2: **1.60 m** (2.0 m crest) — knife-edge containment
- **TSF controlled by starter wall (Sec_3)** at 6.65 m freeboard, 15 m crest width, 30 mRL crest elevation. Other three sides are natural hillsides at 42–72 m.
- **WCPA controlled by STB_1** at 2.80 m (at 30m width) — starboard sidewall
- **Survey confirms TSF WL at 23.35 mRL** — matches 13 Apr geotech morning reading, not the 24.35 from TSF daily summary
- **Survey dates range** from Sep 2025 to Apr 2026 — older surveys may not reflect current geometry

## [2026-04-16] ingest | Daily Geotechnical Report 14-04-2026

**Source:** `raw/geotech/Daily Geotechnical Report 14_04_2026.pdf` (20 pages)
**Report:** Daily Geotechnical Report, Ref 084/GTC/2026, 14-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-14.md` — NEW: Full report summary with freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: PDP-1 WL rising sharply, WCPA dropping, liner theft continues
- `wiki/kenmare/kenmare-moma.md` — UPDATED: WCPA recovering, PDP-1 rising, PDP-2 stable

**Key findings:**
- **WCPC RED ALERT unchanged** — 1.15 m freeboard for fourth consecutive day
- **WCPA Pond WL dropping** — 38.10 mRL (-0.40 m from 13 Apr). Red Alert easing.
- **PDP-1 WL rose sharply** — 34.70 mRL (+0.50 m). Port sidewall liner ripped off again.
- **PDP-2 starboard erosion worsening** — pipeline leakage from PDP-1/Berm 75 remains dual risk
- **TSF WL 24.35 mRL (unchanged)** — freeboard 5.65 m. Liner theft, seepage, pipeline hanging continue.
- **Tails 1B and 2A still NOT SAFE** — 1B at +4 m above safe (washing/roping), 2A at +2 m
- **Reporting inconsistency:** WCPA PWL section contains PDP-1 text (copy-paste error); PDP-1 narrative (34.30→34.80) doesn't match table data (34.20→34.70)

## [2026-04-16] ingest | Daily Geotechnical Report 15-04-2026

**Source:** `raw/geotech/Daily Geotechnical Report 15_04_2026.pdf` (20 pages)
**Report:** Daily Geotechnical Report, Ref 085/GTC/2026, 15-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-15.md` — NEW: Full report summary with freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: Old DM Pit Orange Alert, BB1 washout, P73 reversal
- `wiki/kenmare/kenmare-moma.md` — UPDATED: all latest facility statuses, BB1 stacker, Old DM Pit

**Key findings:**
- **WCPC RED ALERT** — 1.15 m freeboard for fifth consecutive day
- **Old DM Pit NEW ORANGE ALERT** — WL rose 500 mm (20.70→21.20 mRL). MSP Rejects redirected to Paddock 16C.
- **BB1 stacker washout (new issue)** — wet tailings flowing toward DMC pit. Retention berm to be built. O/F hose leak at footing base repaired.
- **Paddock 73 REVERSED** — WL jumped to 41.60 mRL (+0.30 m) after sustained improvement (42.00→41.30 over preceding days). Berm 73 freeboard dropped to 2.10 m.
- **TSF WL 24.30 mRL** — slight drop from 24.35. Freeboard 5.70 m (slight recovery).
- **Multiple reporting inconsistencies:** TSF previous day shows 23.35 (should be 24.35); PDP-1 previous day shows 34.30 (14 Apr was 34.70); Float-off Pond data appears copy-paste from 14 Apr.

## [2026-04-16] ingest | Nataka TSF Daily Summary Report 13-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 13042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 46/TSF/2026, 13-04-2026

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-daily-2026-04-13.md` — NEW: Daily TSF summary with freeboard trend chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: freeboard reversal, pool rise, pump return collapse

**Key findings:**
- **Freeboard recovery sharply reversed** — dropped 1.00 m from 6.65 m (12 Apr) to 5.65 m (13 Apr). Pool rose from 23.35 to 24.35 mRL in one day.
- **Cross-report discrepancy:** 13 Apr geotech report (morning inspection) shows TSF WL at 23.35 mRL, but this TSF daily summary shows 24.35 mRL. A 1.0 m discrepancy for the same day.
- **Water return collapsed** to 3,638 m³/d (from 16,249 on 09 Apr) despite 100% pump availability
- TSF 92% filled, 53 days remaining, construction stalled at 0 m³ fill
- Lift 1 completion slipped to 21 May (was 19 May)
- 3A stacker washouts: stacker relocated, retention berms under construction, liquefied tailings eroding Lift 1

## [2026-04-16] ingest | Nataka TSF Daily Summary Report 14-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 14042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 47/TSF/2026, 14-04-2026

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-daily-2026-04-14.md` — NEW: Daily TSF summary with freeboard trend chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: capacity model revised, plant restarted, water return surged, completion slipped further

**Key findings:**
- **TSF capacity model revised** — available storage raised from 741,000 t to 1,200,000 t (based on assumed dry density and calibrated models). Remaining capacity jumped from 53 to 97 days. Phase 1 capacity date moved from 05 Jun to 20 Jul. **Bathymetric survey urgently required to verify.**
- **Plant restarted** — 13,049 m³ slurry received (first deposition after plant shutdown)
- **Water return surged** to 15,593 m³/d (up fourfold from 3,638 on 13 Apr)
- **Freeboard stabilising** — 5.70 m (slight recovery from 5.65 m dip). Pool 24.30 mRL (-0.05 m).
- **WCPA balance flipped massively positive** — +49,856 m³/d (driven by PDP→Pond 114,000 m³/d inflow and new Finishing Pond C pumping 16,800 m³/d). However, WCPA pond WL is actually dropping, suggesting volumes may contain estimation errors.
- Lift 1 completion slipped to 23 May (was 21 May). Still zero fill.

## [2026-04-14] ingest | Daily Geotechnical Report 13-04-2026

**Source:** `raw/geotech/Daily Geotechnical Report 13_04_2026.pdf` (20 pages)
**Report:** Daily Geotechnical Report, Ref 083/GTC/2026, 13-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-13.md` — NEW: Full report summary with freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: TSF WL 23.35 mRL (-0.45 m), freeboard 6.65 m, WCPA Red Alert, liners stolen again
- `wiki/kenmare/kenmare-moma.md` — UPDATED: WCPA RED, WCPC improved, Tails 1B/2A NOT safe, PDP-1/2 liners ripped off, Float-off Pond rising

**Key findings:**
- **WCPA Pond NEW RED ALERT** — WL rose 300 mm in 24 hrs (38.30 → 38.50 mRL, freeboard 2.70 m). TSF pumps off, slimes to PDP-1, MSP Rejects diverted to RWD.
- **WCPC RED improved** — freeboard up to 1.15 m from 0.90 m, still non-compliant
- **TSF WL dropped significantly** — 23.35 mRL (down 0.45 m), freeboard recovered to 6.65 m
- **Tails 1B and 2A both reverted to NOT SAFE** — 1B stacking 4 m above safe level, 2A stacking 2 m above safe level
- **PDP-1 and PDP-2 port sidewall liners ripped off again** — another TSF starter wall section also stolen
- **3A stacker washouts** — wet tailings eroding Lift 1, stacker relocated, retention berms under construction
- **PDP-2 pipeline leaks** — dual risk of embankment breach and pipeline integrity loss

## [2026-04-14] ingest | Nataka TSF Daily Summary Report 12-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 12042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 45/TSF/2026, 12-04-2026

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-daily-2026-04-12.md` — NEW: Daily TSF summary with freeboard trend chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: 92% filled, 54 days remaining, freeboard 6.65 m, Lift 1 76%, completion slipped to 19 May

**Key findings:**
- **Freeboard recovering strongly** — from 5.3 m at start of week to 6.65 m by 13 Apr. Pool dropped to 23.35 mRL.
- **TSF 92% filled, 54 days remaining** (was 57 days on 09 Apr)
- **Lift 1 76% complete**, est. completion slipped to 19 May (17-day margin to Phase 1 capacity)
- **Construction rate near zero** — only 1,260 m³ fill, 7-day average 180 m³
- **Water balance reversed** — TSF in net outflow (-3,888 m³/d), but WCPA pond at +28,494 m³/d from RAW Dam and Finishing Pond C
- **Zero inter-system water transfers** on reporting day
- **Bathymetric survey still urgently needed** for QPO review
- **Plant shut** — zero slimes received on 12 Apr

## [2026-04-14] ingest | PDP/TSF Automation Project

**Source:** `raw/kenmare/PDP_automation_project.pdf` (2 pages)
**Content:** Email chain (Monteiro Junior, 26 Mar and 01 Apr 2026) with action tracker for PDP/TSF Automation Project

**Pages created/updated:**
- `wiki/kenmare/pdp-tsf-automation.md` — NEW: Entity page for the automation project with full action tracker
- `wiki/kenmare/kenmare-moma.md` — UPDATED: added automation project link to active issues

**Key findings:**
- 12-action programme to centralise SCADA monitoring and automate pump/water level control at PDP and TSF
- 5 of 12 actions completed (SCADA operator training, hardware, booster pump auto mode, network setup)
- Critical path driven by procurement lead times: flow meters (08 Jun) and TSF comms interface (20 May)
- Control room container delayed — crane reassigned to WCPB breakdown
- E-stop bypass being considered as countermeasure to cable theft
- Directly addresses the manual monitoring gaps that contributed to the April 2026 water crisis

## [2026-04-09] init | Wiki initialized

Set up LLM Wiki structure with four domains: Journal, TSF, Kenmare, CSSM. Created directory layout, schema (CLAUDE.md), index, and log files.

## [2026-04-09] ingest | Kenmare TSF Summary Report 07-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 07042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 41/TSF/2026, Week 15 (1–7 Apr 2026)

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-weekly-2026-w15.md` — Full weekly report summary with chart data
- `wiki/tsf/nataka-tsf.md` — Entity page for Nataka TSF
- `wiki/kenmare/kenmare-moma.md` — Entity page for Kenmare Moma Mining
- `wiki/concepts/freeboard.md` — Concept page for freeboard (cross-domain: TSF + CSSM)

**Key findings:**
- TSF is 90% filled with only 59 days of remaining Phase 1 capacity (until 05 June 2026)
- Lift 1 construction 75% complete, estimated completion 13 May 2026 — tight 23-day margin
- Freeboard at 5.40m, declining trend, YELLOW TARP level
- Heavy rainfall event (200mm on 02 Apr) caused construction suspension, access road flooding, stacker washout
- Liner removed/stolen on starter wall section — erosion observed, urgent rehab needed
- Bathymetric survey overdue — pool volume monitoring suspended
- GWD and sand drain access blocked by unsafe talweg conditions

## [2026-04-09] domain-add + ingest | Daily Geotechnical Report 08-04-2026

**New domain added:** `geotech` (raw/geotech/, wiki/geotech/) — daily geotechnical inspection reports covering site-wide facilities.

**Source:** `raw/geotech/Daily Geotechnical Report 08_04_2026.pdf` (20 pages)
**Report:** Daily Geotechnical Report, Ref 079/GTC/2026, 08-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-08.md` — NEW: Full report summary with freeboard chart across all facilities
- `wiki/tsf/nataka-tsf.md` — UPDATED: added seepage at Lift 2 toe, pipeline hanging risk, second liner theft
- `wiki/kenmare/kenmare-moma.md` — UPDATED: expanded to full facility inventory (all paddocks, PDPs, stackers, valleys)

**Viewer updated:** Added geotech domain to sidebar, dashboard, domain view, and CSS color variables.

**Key findings:**
- **2x RED ALERTS:** WCPC (freeboard 0.90m — halt inflows), Paddock 73 (freeboard 1.70m)
- **1x ORANGE ALERT:** Old DM Pit (exceeds max allowable WL by 0.10m)
- **Recurring liner theft** — PDP-1 port sidewall, PDP-2 port sidewall, TSF starter wall (multiple sections). Just-reinstated liners being ripped off.
- **Tails 2A on Berm 75 NOT safe to operate** — stacking 4m above safe elevation, O/F eroding berm, washing/roping at U/F
- **TSF seepage at Lift 2 toe** — first observation, requires close monitoring
- **Slimes pipeline hanging** on TSF starter wall — progressive collapse risk into facility
- **Paddock 61 emergency pipes burnt** — overflow risk
- **Valley 3 embankment disturbed** — both from infrastructure removal and rainfall, reinstatement in progress
- **PDP-2 pipeline leaks** from PDP-1/Berm 75 — dual risk of embankment breach and pipeline integrity loss
- **Site-wide WL buildup** in paddocks 69, 58/68, 66, 60, External Paddock 7, ISOA

## [2026-04-09] ingest | Lift 1 Construction WhatsApp Chat

**Source:** `raw/tsf/_chat.txt` (~18,000 lines)
**Chat:** "Lift 1 construction TSF" WhatsApp group (15 Dec 2025 – 09 Apr 2026)

**Pages created/updated:**
- `wiki/tsf/lift1-construction-log.md` — NEW: Full construction timeline, personnel, fleet, production data, recurring issues
- `wiki/tsf/nataka-tsf.md` — UPDATED: current working level (33 RL), construction method, roller bottleneck

**Key findings:**
- Construction progressed from 22 RL (Dec 2025) to 33 RL (Apr 2026) in 750 mm compacted sand layers
- **Roller availability is the critical path** — KME2509 on long-term breakdown, C030 failed (turbo) late Mar
- Fleet: 4–6 ADTs, 1 FEL, 1 excavator, roller(s), dozer; Lalgy subcontractor ADTs added ~Mar
- Typical production 100–200 loads/day; declining in Apr due to space constraints and ADT diversions
- Key personnel: Jannie Bekker (project lead), Monde Lucas / Andrea da Silva / Sílvia Adamo (shift supervisors), Michael Boswell (engineering oversight)
- Non-conformance on south side pending box cut dewatering

## [2026-04-09] ingest | TSF Operations WhatsApp Chat

**Source:** `raw/tsf/_chat 2.txt` (~53,000 lines)
**Chat:** "TSF Operations" WhatsApp group (08 Oct 2025 – 09 Apr 2026)

**Pages created/updated:**
- `wiki/tsf/tsf-operations-log.md` — NEW: Pump systems inventory, water level tracking, operational timeline, crisis documentation
- `wiki/tsf/nataka-tsf.md` — UPDATED: infrastructure detail (all pump IDs, current status), water return crisis

**Key findings:**
- **April 2026 water crisis:** ALL water return pumps down simultaneously — supernatant priming faults, V-belt failures. TSF WL at 24.6 mRL (0.6 m above max 24.0), vertical marker submerged.
- Supernatant 2 was unreliable for most of the observation period
- PDP WL regularly exceeded max allowable (34.2 mRL), reaching 34.8 mRL
- Flocculant plant chronically down (silo level faults, supply issues)
- Winch clamp failures on extraction pumps — no replacement stock
- Water level limits: TSF max 24.0 mRL, PDP max 34.2 mRL, Pond max 36.0 mRL — all breached by Mar/Apr

## [2026-04-09] ingest | Nataka TSF Daily Summary Report 08-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 08042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 42/TSF/2026, 08-04-2026

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-daily-2026-04-08.md` — NEW: Daily TSF summary with chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: current status to 91% filled, freeboard 5.25m, construction suspended, water balance surge, Lift 1 completion slipped to 15 May

**Key findings:**
- TSF 91% filled (up from 90%), 58 days remaining
- **Construction fully suspended** — zero fill in last 7 days, HMEs reestablishing access roads
- Freeboard 5.25 m (down from 5.40), pool at 24.75 mRL (rising)
- **Zero water returned TSF → Pond** — confirms pump crisis
- **TSF daily balance surged to +52,946 m³/d** (was +4,140 — 13x increase)
- Lift 1 completion slipped 13 May → 15 May (21-day margin to capacity)
- 3A stacker washouts encroaching on Lift 1 — field meeting, stacker relocated
- Erosion on exposed starter wall and Lift 1 wall from rainfall

## [2026-04-09] ingest | Daily Geotechnical Report 09-04-2026

**Source:** `raw/geotech/Daily Geotechnical Report 09_04_2026.pdf` (20 pages)
**Report:** Daily Geotechnical Report, Ref 080/GTC/2026, 09-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-09.md` — NEW: Full report summary with freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: SMO concern, 3A stacker damage
- `wiki/kenmare/kenmare-moma.md` — UPDATED: Paddock 73 improved to ORANGE, SMO escalated, Tails 2A now safe, site-wide issues refreshed

**Key findings:**
- **Paddock 73 improved** RED → ORANGE: WL 42.00 → 41.75 mRL, freeboard 1.70 → 1.95 m (Godwin pump at max)
- **WCPC still RED** (0.90 m freeboard, unchanged)
- **SMO berm breach risk escalated** — tailings encroaching with slumps, stacker washouts eroding sea wall
- **C1 tails at WCPC** — new concern: buildup could channel discharge into valley
- **Tails 2A on Berm 75** — changed from NOT safe to safe
- TSF WL 24.75 mRL (+0.15 m), side berm seepage observed
- PDP-1 WL slight improvement: 34.50 → 34.30 mRL
- Liner theft continues at PDP-1 and PDP-2 port sidewalls
- HTC buildup exceeding 1.0 m freeboard — backflow risk to Mualadi Lake

## [2026-04-10] ingest | Kenmare TODO — Week of 13 April 2026

**Source:** `raw/kenmare/TODO.docx`
**Content:** Personal work priorities for 13–14 April 2026.

**Pages created/updated:**
- `wiki/kenmare/todo-2026-04-13.md` — NEW: TODO list with context linking OMS, TMS, and GISTM audit work

**Key items:**
- OMS Manual — 80% complete, to be finished Monday
- Tailings Management System document — 65% complete, continued work Monday
- GISTM internal audit spreadsheet — to be distributed to stakeholders Monday
- External geotechnical auditor site drive-around — Tuesday 14 April

## [2026-04-10] ingest | Nataka TSF Daily Summary Report 09-04-2026

**Source:** `raw/tsf/Kenmare_TSF_Summary_Report 09042026.pdf` (9 pages)
**Report:** Nataka TSF Daily Summary Report, Ref 43/TSF/2026, 09-04-2026

**Pages created/updated:**
- `wiki/tsf/nataka-tsf-daily-2026-04-09.md` — NEW: Daily TSF summary with chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: TSF 92% filled, water return restored, freeboard recovering, completion slipped to 16 May

**Key findings:**
- **Water return restored** — 16,249 m³/d returned TSF → Pond (was 0 m³ on 08 Apr). All four pumps at 100% availability.
- **Pool level dropping** — 24.75 → 24.60 mRL (-0.15 m), first decline in weeks
- **Freeboard recovering** — 5.25 → 5.40 m, first day-on-day gain after weeks of decline
- **TSF balance flipped to net outflow** — -17,986 m³/d (was +52,946)
- TSF 92% filled, 57 days remaining, construction still suspended (zero fill)
- Lift 1 completion slipped to 16 May (20-day margin to Phase 1 capacity)
- 3A stacker washout remediation ongoing — stacker relocated, retention berms under construction
- Starter wall erosion from rainfall on stolen-liner sections — urgent rehab needed

## [2026-04-11] ingest | Daily Geotechnical Report 10-04-2026

**Source:** `raw/geotech/Daily Geotechnical Report 10_04_2026.pdf` (20 pages)
**Report:** Daily Geotechnical Report, Ref 081/GTC/2026, 10-04-2026 (06:00–11:00)

**Pages created/updated:**
- `wiki/geotech/daily-geotech-2026-04-10.md` — NEW: Full report summary with freeboard chart
- `wiki/tsf/nataka-tsf.md` — UPDATED: another liner theft, added 10 Apr geotech reference
- `wiki/kenmare/kenmare-moma.md` — UPDATED: P73 improvement + seepage, Tails 1B erosion, PDP-1 WL, site-wide issues refreshed

**Key findings:**
- **Paddock 73 continuing to improve** — WL 41.75 → 41.50 mRL, freeboard 1.95 → 2.20 m. However, **seepage daylighting at toe of Berm 73** — new and potentially significant for stability.
- **WCPC still RED** (0.90 m freeboard, unchanged for third consecutive day)
- **TSF pool dropping** — 24.75 → 24.60 mRL (-0.15 m), confirming pump restoration working. Report text also references 24.30 mRL.
- **Tails 1B O/F now eroding berm** — changed from not eroding on 09 Apr
- **Another TSF starter wall liner section stolen** — despite repeated reinstatements
- **PDP-2 starboard erosion worsening** — near slimes boosters, reinstatement urgent
- **PDP-1 WL slight increase** — 34.30 → 34.40 mRL (+0.10 m)
- **WCP-A WL rising** — 37.20 → 37.40 mRL (+0.20 m)
- **Paddock 61 improving** — water drying out (was building up previously)
- Valley 3 embankment reinstatement in progress

## [2026-04-12] ingest | CSSM Chapter 4 — Determining State Parameter In-Situ

**Source:** `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, Chapter 4 (pp. 143--201)
**Book:** *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies & Been (2016)

**Pages created/updated:**
- `wiki/cssm/chapter-04-state-parameter-in-situ.md` — NEW: Chapter 4 study notes covering in-situ determination of state parameter from CPT data

**Key takeaways:**
- CPT is strongly preferred over SPT: superior repeatability (adjacent soundings virtually identical vs SPT fluctuations of +/-25%), continuous data, three data channels
- CPT inversion is an inverse problem: $Q_p = f(\psi, G, \sigma'_v, M, \ldots)$. Only one measured quantity ($q_t$) so soil properties must be independently determined from lab testing
- Cavity expansion with NAMC soil model gives the theoretical basis; the $Q_p$--$\psi$ relationship is a simple exponential: $Q_p = k\exp(-m\psi)$
- Original $k$, $m$ from Been et al. (1986, 1987c) using 13 CC sands are functions of $\lambda_{10}$ alone; accuracy $\Delta\psi \pm 0.05$ at 90% confidence
- Stress-level bias (up to $\Delta\psi \approx 0.05$) is caused by the missing dimensionless group: elastic rigidity $I_r = G/p_o$. Shuttle and Jefferies (1998) resolved this via NorSand cavity expansion simulations, giving $k$ and $m$ as functions of $I_r$, $M$, $H$, $N$, $\lambda$
- General inversion (Table 4.3) recovers $\psi$ to $\pm 0.02$ accuracy from randomly generated soil property sets
- For silts and undrained penetration, Shuttle and Cunning (2007) effective stress extension: $Q_p(1-B_q)+1 = \bar{k}\exp(-\bar{m}\psi)$
- Screening-level: Plewes method estimates $\lambda_{10} = F/10$ from friction ratio; combined with $\bar{k}/M$ and $\bar{m}$ trends, gives $\psi$ contours on the $I_c$ classification chart
- Jaky equation underestimates $K_o$ by factor of 2 in hydraulic fills ($K_o \approx 0.7$ measured vs 0.45 predicted); SBP with IFM is the preferred measurement method
- Seismic cone (SCPT) is the preferred method for $G_{\max}$ in-situ; $G$ varies with fabric and cannot be reliably estimated from lab alone
- Directly applicable to Nataka TSF: specifying CPTu with seismic capability, using $K_o = 0.7$ for tailings, screening with Plewes method, and full inversion with lab-derived properties

## [2026-04-12] ingest | CSSM Chapter 9 — Practical Implementation of Critical State Approach

**Source:** `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, Chapter 9 (pp. 401--437)
**Book:** *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies & Been (2016)

**Pages created/updated:**
- `wiki/cssm/chapter-09-practical-implementation.md` — NEW: Chapter 9 study notes covering the complete procedure for implementing the critical state approach in engineering practice

**Key takeaways:**
- Response = Properties x State; in-situ tests measure state ($\psi$), lab tests measure properties ($\Gamma$, $\lambda_{10}$, $M_{tc}$, $N$, $\chi_{tc}$, $H$, $G_{\max}$)
- Minimum three-test suite: Test A (CIU, loose, low stress), Test B (CID, loose, high stress), Test C (CID, dense, low stress); practical programme is ~10 triaxial tests plus 20 PSDs, bender element, and CSS tests
- Five soil properties determined from three trend-line plots: CSL ($\Gamma$, $\lambda_{10}$), stress-dilatancy ($M_{tc}$, $N$), state-dilatancy ($\chi_{tc}$)
- Validation by NorSand IFM: fit drained tests first (plastic properties), then undrained tests (elasticity). $H$ varies linearly with $\psi_o$
- Worked example on Nerlerk 270/1 sand: $\Gamma = 0.855$, $\lambda_{10} = 0.048$, $M_{tc} = 1.27$, $N = 0.40$, $\chi_{tc} = 4.0$ -- provides reference values for Nataka tailings
- Cyclic strength: CSS tests give CRR vs $N_L$ curves at different $\psi$; reduced to CRR = $a - b\psi_o$ for input to CPT processing
- CPT_plot spreadsheet: 4 methods for $\psi$ computation, three report-figure templates, NCEER and state-based CRR profiles
- CPT equipment: specify CPTU with independent friction transducer, 10--20 MPa tip capacity, 1 Hz minimum scan rate, ASCII data output
- Default $K_o = 0.7$ for normally consolidated soils; dissipation tests essential for piezometric profile
- Data archiving: ASCII text with full headers; 4000 scans per triaxial test; engineered to be readable in 50+ years

## [2026-04-12] ingest | CSSM Chapter 3 — Constitutive Modelling for Liquefaction

**Source:** `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, Chapter 3 (pp. 101-139)
**Book:** *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies & Been (2016)

**Pages created/updated:**
- `wiki/cssm/chapter-03-constitutive-modelling.md` — NEW: Chapter 3 study notes covering constitutive modelling from plasticity foundations through NorSand

**Key takeaways:**
- Plasticity theory foundations: strain decomposition, normality (associated flow), yield surfaces. Mohr-Coulomb is not a yield surface — Drucker et al. (1957) resolved this with the cap model
- Cambridge models (Original Cam Clay, Granta Gravel) derive from a single idealisation: constant dimensionless plastic energy dissipation rate equals $M$. This gives stress-dilatancy $D^p = M - \eta$ and the yield surface $\eta/M = 1 - \ln(p/p_c)$
- Cam Clay fails for sands because the single-NCL assumption produces absurd overconsolidation ratios ($R > 10^5$) for moderate dense states ($\psi = -0.2$). The Hvorslev surface "fix" abandons the density insight that motivated Cambridge models
- Real soils have an infinity of NCL — confirmed by Erksak sand isotropic compression tests and Molikpaq berm CPT data. Each NCL is a hardening law for an associated yield surface
- NorSand generalises CSSM using the state parameter as an internal variable, an evolving image stress ratio $M_i$, and shear-strain hardening. Cam Clay is a degenerate special case
- Seven parameters: $\Gamma$, $\lambda$ (CSL); $M_{tc}$, $N$, $H$, $\chi_{tc}$ (plasticity); $I_r$, $\nu$ (elasticity)
- Validated against 11 Erksak 330/0.7 drained triaxial tests spanning $\psi$ from -0.17 to +0.08; $H$ depends linearly on $\psi_o$ ($H = 103 - 980\psi_o$)
- Internal cap (Equation 3.38) controls realistic dilatancy via normality — no need for non-associated flow
- 3D generalisation validated via plane strain prediction from triaxial calibration (Brasted sand)
- Direct relevance to Nataka TSF: tailings are loose saturated soils with positive $\psi$; the infinity of NCL matters for hydraulic fill; NorSand parameters are determinable from standard tests

## [2026-04-12] ingest | CSSM Chapter 1 — Introduction

**Source:** `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, Chapter 1 (pp. 1-34)
**Book:** *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies & Been (2016)

**Pages created/updated:**
- `wiki/cssm/chapter-01-introduction.md` — NEW: Chapter 1 study notes covering the state parameter, critical state approach, and nine liquefaction case histories

**Key takeaways:**
- State parameter $\psi = e - e_c$ is the central framework — density relative to the critical state locus at current stress
- Liquefaction is constitutive behaviour, not a vague concept — "if it does not compute, then you have nothing"
- Ten case histories span static (Fort Peck, Nerlerk, Merriespruit), seismic (Niigata, Lower San Fernando, Wildlife Site), cyclic (Molikpaq), vibration (Ackermann Lake), and mine waste (Aberfan) liquefaction
- The observational method is inapplicable to liquefaction — behaviour is brittle
- Merriespruit directly parallels TSF overtopping risk; density variability connects to Lift 1 compaction QA

## [2026-04-12] ingest | CSSM Chapter 2 — Dilatancy and the State Parameter

**Source:** `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, Chapter 2 (pp. 35--99)
**Book:** *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies & Been (2016)

**Pages created/updated:**
- `wiki/cssm/chapter-02-dilatancy.md` — NEW: Full chapter study notes covering dilatancy, critical state, stress--dilatancy, state parameter, experimental evidence, CSL determination, soil properties, plane strain tests, generalised stress states

**Key takeaways:**
- State parameter $\psi = e - e_c$ validated as universal normalising index across 35 sands to sandy silts (Table 2.1), confining stresses from 19 to 8000 kPa
- State--dilatancy law $D_\text{min} = \chi_{tc}\cdot\psi$ introduces soil property $\chi_{tc}$ (typical range 2.7--5.2) that reduces scatter in dilatancy predictions
- Rowe's stress--dilatancy recast as $\eta = f(M_f, D^p)$; operational friction ratio $M_i$ evolves with strain and requires fabric tensor alongside $\psi$
- CSL uniqueness confirmed: quasi-steady state (phase transformation) is the main source of confusion; drained and undrained tests relate to the same CSL
- Critical state soil properties: $\Gamma$ (0.9--1.4), $\lambda_{10}$ (0.02--0.25), $M_{tc}$ (1.15--1.60), $\chi_{tc}$ (2.7--5.2) — all dimensionless, intrinsic, measured under triaxial compression
- Plane strain data (Cornforth 1961) shows $\phi_c$ increases ~2° over triaxial compression; $M(\theta)$ best fit by average of Mohr--Coulomb and Matsuoka--Nakai criteria
- Tailings sands/silts from Table 2.1 (Hilton Mines, Highland Valley, Faro, Syncrude, Sudbury) provide reference values for Nataka TSF characterisation
- Threshold of $\psi_o < -0.06$ needed before undrained strength reliably exceeds drained — implications for Lift 1 density specifications

## [2026-04-12] ingest | CSSM Chapter 6 — Static Liquefaction and Post-Liquefaction Strength

**Source:** `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, Chapter 6 (pp. 225--313)
**Book:** *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies & Been (2016)

**Pages created/updated:**
- `wiki/cssm/chapter-06-static-liquefaction.md` — NEW: Full chapter study notes covering static liquefaction, undrained NorSand, collapse surface debunking, steady-state approach critique, case histories, post-liquefaction residual strength, and dense-enough criteria

**Key takeaways:**
- Static liquefaction is constitutive behaviour — no metastable collapse, no special mechanism. Pore pressures develop smoothly; the "collapse surface" is fiction
- NorSand, calibrated on dense drained tests alone, replicates the full undrained spectrum from very loose ($\psi = +0.068$) to lightly dilatant ($\psi = -0.08$)
- The instability locus (collapse surface) shifts with $H/I_r$ ratio — it is not a soil property but a consequence of moduli and drainage conditions
- Peak undrained strength ratio $s_u/p'_o$ ranges from 0.15 at $\psi \approx +0.05$ to 0.30 at $\psi = 0$, consistent with Wroth's normally consolidated clay framework
- Brittleness arises only when $\psi_o/\lambda_e > 0.7$ (beyond normal consolidation)
- Steady-state approach has fundamental deficiencies: blended samples, cos($\phi_s$) error, localization not accounted for, lightly dilatant soils not covered
- Post-liquefaction residual strength $s_r/\sigma'_{vo}$ from case histories (Table 6.5) follows state parameter trends separated by compressibility ($\lambda_{10}$ bands)
- The CSD loading path (rising pore pressure at constant shear) gives negligible warning before catastrophic failure — direct parallel to rising TSF water levels at Nataka
- Screening criterion: $\psi < -0.05$ separates "ground improvement needed" from "tolerable movements"
- Silts behave the same as sands in the framework — use the correct CSL, no fines corrections needed

## [2026-04-12] ingest | CSSM Chapter 7 — Cyclic Stress-Induced Liquefaction

**Source:** `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, Chapter 7 (pp. 315--378)
**Book:** *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies & Been (2016)

**Pages created/updated:**
- `wiki/cssm/chapter-07-cyclic-liquefaction.md` — NEW: Full chapter study notes covering cyclic mobility, principal stress rotation, experimental data, Berkeley School approach, state parameter critique and alternative, NorSand Third Axiom, Fraser River sand calibration

**Key takeaways:**
- Cyclic and static liquefaction share the same mechanism (excess pore pressure from plastic volumetric strain) but differ in generation: static requires loose state, cyclic arises from densification affecting any soil
- Principal stress rotation is the dominant driver of cyclic pore pressure generation — more important than cyclic stress magnitude. Kinematic hardening models fail for this mechanism; only kinematic softening captures it
- The Third Axiom: $\dot{\bar{\sigma}}_{mi}/\bar{\sigma}_{mi} = -Z_r\,\dot{\alpha}/\pi$ — yield surface shrinks with principal stress rotation, with $Z_r = 134 + 93\psi + 21\psi^2$
- CRR normalised by $\text{CRR}_{15}$ collapses data from 13 sands onto a single fatigue-like trend. $\text{CRR}_{15}$ correlates with $\psi$ but scatter remains (fabric effects not captured by $\psi$ alone)
- A single exponential $CRR_{7.5} = 0.06\exp(-9\psi_k)$ replaces the entire Berkeley School system of charts, fines corrections, $K_\sigma$, and $K_\alpha$ factors
- Berkeley School deficiencies: characteristic penetration resistance undefined, soil properties neglected, fines correction has wrong mathematical form (additive vs multiplicative), $K_\sigma$ extrapolations lack theoretical basis
- Fraser River sand full NorSand calibration: $M_{tc} = 1.45$, $N = 0.43$, $\chi_{tc} = 3.2$, $\lambda_{10} = 0.138$ — three to four times more compressible than quartz sands
- Soil fabric is the missing variable — seismic shear modulus profiles may be the best in-situ fabric index
- Direct relevance to Nataka TSF: earthquake screening via single $\psi$-based equation, machine-induced vibrations follow same fatigue framework, compaction targets linked to CRR

## [2026-05-01] lint | CSSM book audit and integration fixes

**Scope:** CSSM wiki pages created from `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`, cross-domain concept coverage, index coverage, and viewer wikilink handling.

**Pages created/updated:**
- `wiki/synthesis/cssm-book-audit-2026-05-01.md` — NEW: reusable audit summary answering whether the CSSM book ingest was good, what inconsistencies were found, and what to improve next.
- `wiki/concepts/critical-state-soil-mechanics.md` — NEW: cross-domain CSSM overview concept.
- `wiki/concepts/state-parameter.md` — NEW: $\psi = e - e_c$ concept page and liquefaction thresholds.
- `wiki/concepts/critical-state-line.md` — NEW: CSL definition and measurement cautions.
- `wiki/concepts/effective-stress.md` — NEW: pore-pressure/effective-stress concept linked to TSF water management.
- `wiki/concepts/norsand.md` — NEW: NorSand concept and input-property summary.
- `wiki/concepts/critical-friction-ratio.md` — NEW: $M$ and $M_{tc}$ concept page.
- `wiki/concepts/nerlerk.md` — NEW: hydraulic-fill liquefaction case-history concept page.
- `wiki/concepts/molikpaq.md` — NEW: high-cycle loading case-history concept page.
- `wiki/concepts/oosterschelde.md` — NEW: loose-pocket centrifuge-test context page.
- `wiki/concepts/gistm.md` — NEW: tailings-governance concept linked to CSSM assessment.
- `wiki/cssm/chapter-01-introduction.md` — corrected "ten case histories" to nine case histories.
- `wiki/cssm/chapter-01-introduction.md` — clarified embedded Lower San Fernando image as Figure 1.13(a), not the complete two-panel Figure 1.13.
- `wiki/cssm/chapter-02-dilatancy.md` — corrected Kenmare entity wikilink to the page's actual title.
- `wiki/cssm/chapter-02-dilatancy.md` — corrected embedded figure numbering/caption: asset shown is source Figure 2.2, while source Figure 2.1 is not present in current assets.
- `wiki/cssm/chapter-05-soil-variability.md` — reconciled Nerlerk failure count/wording with Chapter 1 and the source.
- `wiki/cssm/chapter-08-finite-element.md` — corrected deep weak-zone internal reference from Section 8.4.4 to 8.3.2.
- `wiki/cssm/chapter-10-concluding-remarks.md` — corrected critical-friction-ratio link target.
- `viewer/src/components/MarkdownRenderer.jsx` — fixed Obsidian alias links (`[[Page|alias]]`) and resolved wikilinks by actual page slug/frontmatter title instead of forcing all links to `wiki/concepts`.
- `index.md` — added missing CSSM chapters 5, 8, and 10; added new concept pages and the audit synthesis page.

**Findings:**
- Claude's CSSM ingest was strong on coverage and technical detail, especially for Chapters 2, 3, 4, 6, 7, and 9.
- The main weakness was integration: missing index entries, unresolved concept pages, and viewer wikilink routing that made many Obsidian-style links dead-end or misroute.
- Remaining best improvement: build an applied Nataka CSSM workflow page that turns the chapter notes into a practical investigation/testing/analysis sequence.
