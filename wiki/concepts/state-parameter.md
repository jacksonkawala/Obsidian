---
title: State Parameter
domain: cross-domain
type: concept
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-05-01
updated: 2026-05-01
tags: [cssm, state-parameter, liquefaction, cpt, tailings]
---

# State Parameter

The state parameter $\psi$ is the current void ratio relative to the [[Critical State Line]] at the same mean [[Effective Stress]]:

$$
\psi = e - e_c
$$

where $e$ is the current void ratio and $e_c$ is the critical-state void ratio at the current $p'$.

- $\psi > 0$: looser than critical; contractive and potentially liquefiable.
- $\psi = 0$: at the critical state.
- $\psi < 0$: denser than critical; generally dilative, but not automatically safe against all liquefaction mechanisms.

Jefferies and Been use $\psi$ as the organising variable for static liquefaction, cyclic resistance, CPT interpretation, and finite element modelling. It is more useful than relative density because it includes stress level as well as density.

## Design Use

For liquefaction assessment, the book usually works with a characteristic value $\psi_k$, commonly the 80th to 90th percentile of the in-situ $\psi$ distribution rather than the mean. The recurrent screening thresholds are:

| Characteristic state | Practical meaning |
|---|---|
| $\psi_k < -0.1$ | Generally satisfactory behaviour in the book's framework |
| $-0.1 < \psi_k < -0.05$ | Transitional range; limited liquefaction or phase transformation may govern |
| $\psi_k > -0.05$ | Potential for strain softening and flowslide behaviour |

## Links to Practice

For [[Nataka TSF]], CPTu/SCPT data plus lab-derived CSL properties would allow continuous $\psi$ profiles through tailings and compacted lift materials. That is a stronger QA and liquefaction-screening metric than relative density alone.

## Sources

- Jefferies, M.G. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapters 2, 4, 5, 6, 7, and 10.
