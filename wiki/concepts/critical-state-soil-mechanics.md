---
title: Critical State Soil Mechanics
domain: cross-domain
type: concept
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-05-01
updated: 2026-05-01
tags: [cssm, critical-state, liquefaction, constitutive-modelling]
---

# Critical State Soil Mechanics

Critical State Soil Mechanics (CSSM) is the framework used by Jefferies and Been to make liquefaction a computable soil behaviour rather than an empirical classification. The central split is between intrinsic soil properties and current state:

- **Properties:** the [[Critical State Line]], $M_{tc}$, $\lambda$, $\Gamma$, $N$, $\chi_{tc}$, elastic stiffness, and hardening parameters.
- **State:** the current void ratio, effective stress, fabric, stress history, and especially the [[State Parameter]] $\psi$.
- **Behaviour:** drained strength, undrained strength loss, cyclic resistance, and CPT resistance emerge from properties plus state.

The CSSM view is valuable for tailings because hydraulic fills and tailings beaches are variable, saturated, and often loose enough for undrained strength loss. It also gives a direct engineering workflow: determine soil properties in the laboratory, determine in-situ state from CPTu/SCPT, then analyse stability using state-parameter-based methods such as [[NorSand]].

## Key Ideas

| Idea | CSSM meaning |
|---|---|
| [[Critical State Line]] | Reference line giving the void ratio at which soil shears at constant stress and volume |
| [[State Parameter]] | Distance from the current void ratio to the CSL at the same mean effective stress |
| [[Effective Stress]] | Stress carried by the soil skeleton; controls shear strength and dilatancy |
| [[NorSand]] | State-parameter-based constitutive model used throughout the book |
| Characteristic state $\psi_k$ | Design percentile of the state distribution, typically 80th to 90th percentile for liquefaction |

## Sources

- Jefferies, M.G. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed.
