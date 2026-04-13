---
title: Wiki Log
updated: 2026-04-12

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
- `wiki/cssm/chapter-01-introduction.md` — NEW: Chapter 1 study notes covering the state parameter, critical state approach, and ten liquefaction case histories

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
