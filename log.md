---
title: Wiki Log
updated: 2026-04-10

---

# Wiki Log

Chronological record of wiki operations.

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
