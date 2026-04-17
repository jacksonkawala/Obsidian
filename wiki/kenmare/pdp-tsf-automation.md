---
title: PDP/TSF Automation Project
domain: kenmare
type: entity
sources: [PDP_automation_project.pdf]
created: 2026-04-14
updated: 2026-04-14
tags: [kenmare, automation, scada, pdp, tsf, instrumentation]
---

# PDP/TSF Automation Project

A project to centralise monitoring and control of the PDP and TSF water management infrastructure through SCADA, automated pump control, and water level sensors. Led by Monteiro Junior with Jackson Kawala and engineering team on CC.

## Project Status (as of 01 April 2026)

The project has 12 action items. Five are complete, three are in progress, and four have not yet started. The **critical path** is driven by procurement lead times on two items:
- **Flow meters** (Action 4) — 6x magnetic flow meters plus 2 additional slimes meters, expected delivery by 08 June 2026
- **TSF comms interface** (Action 6) — Stellenbosch-configured interface for TSF comms (PS-1561 RS), expected by 20 May 2026

The control room container relocation to PDP was delayed because the crane was reassigned to attend a breakdown at WCPB. The container was expected on site by 03 April 2026 at the latest.

## Action Tracker

### Completed

| # | Task | Assigned To | Dates |
|---|------|-------------|-------|
| 1 | Instruct WCPA control operators to use existing SCADA pages for PDPs, Densification, Paddock Extraction Pumps, and Slimes Transfer Booster | Ruben / Fortes | 13/03 – 20/03 |
| 3 | Procure required hardware (PC, mouse) | Monteiro / Lucas | 14/03 – 21/03 |
| 5 | Optimise PS-0537 booster pump to auto mode with pressure setpoint control | Boque / Premny | 13/03 – 21/03 |
| 7 | Evaluate the network setup for the new control room | Boque / Premny | 13/03 – 27/03 |

### In Progress

| # | Task | Assigned To | Start | End | Notes |
|---|------|-------------|-------|-----|-------|
| 2 | Identify container for control room, confirm location with instrumentation (line-of-sight assessment for base stations) | Monteiro / Lucas | 14/03 | — | Crane availability; container expected by 03 Apr |
| 4 | Order 6 magnetic flow meters, update BOM accordingly (including 2 additional slimes) | Boque / Premny | 26/03 | 08/06 | Long lead time — procurement |
| 8 | Develop simplified SCADA pages for the new control room | Boque / Premny | 14/03 | 08/04 | — |

### Not Started

| # | Task | Assigned To | Start | End | Notes |
|---|------|-------------|-------|-----|-------|
| 6 | Order and install Stellenbosch-configured secure interface for TSF comms (PS-1561 RS) | Premny / Dalton | 20/03 | 20/05 | Long lead time — procurement |
| 9 | Implement bypass of E-stop on MCC pumps across TSF circuit (subject to change management and approval, as part of security measures against cable theft) | Sidonio, Augusto, Monteiro | 20/03 | 25/04 | Requires COM shared approval |
| 10 | Share and evaluate existing water level sensor design; implement Change of Management; install approved design | Boque / Premny | 27/03 | — | — |
| 11 | Fabricate approved water level sensor design | Boque / Premny | — | — | Depends on Action 10 |
| 12 | Install water level sensors in PDP and TSF ponds and integrate into SCADA | — | — | — | Depends on Actions 10 and 11 |

## Key Personnel

- **Monteiro Junior** (MJ) — Project lead / coordinator
- **Boque / Premny** — SCADA development, instrumentation, pump optimisation
- **Monteiro / Lucas** — Container logistics, hardware procurement
- **Ruben / Fortes** — WCPA operator training
- **Sidonio / Augusto** — E-stop bypass implementation
- **Premny / Dalton** — TSF comms interface
- **Kattlego Makine** — IT procurement support (requested by MJ to identify options to reduce lead time)

CC'd stakeholders: Jackson Kawala, Andries Oberholzer, Priscilla Nel

## Context

This project is directly relevant to the ongoing TSF and PDP water management challenges documented in [[Nataka TSF]] and [[TSF Operations Log]]. Automated water level sensing (Actions 10–12) and centralised SCADA monitoring would address the current reliance on manual pump attendance and physical water level observations that have contributed to delayed responses during the April 2026 water crisis.

The E-stop bypass (Action 9) relates to the cable theft problem documented across site — the emergency stops are being exploited as access points for cable theft, so a controlled bypass with proper change management is being considered.

## Sources

- [PDP_automation_project.pdf](../../raw/kenmare/PDP_automation_project.pdf)
