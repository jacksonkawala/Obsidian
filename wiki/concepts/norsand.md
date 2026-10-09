---
title: NorSand
domain: cross-domain
type: concept
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-05-01
updated: 2026-05-01
tags: [cssm, norsand, constitutive-model, liquefaction, finite-element]
---

# NorSand

NorSand is the state-parameter-based constitutive model used throughout Jefferies and Been's liquefaction framework. It generalises critical state soil mechanics for sands and silts by using the [[State Parameter]] as an internal state variable and by allowing yield surface size and hardening to evolve with density, stress level, and loading path.

## Why It Matters

NorSand is important because it makes liquefaction computable:

- Drained triaxial tests calibrate the plastic properties.
- Undrained response follows from the same properties plus the undrained boundary condition.
- CPT inversion can be interpreted as an inverse boundary-value problem.
- Finite element models can represent brittle strain softening rather than substituting a single residual strength.

## Core Inputs

| Property | Role |
|---|---|
| $\Gamma$, $\lambda$ or $\lambda_{10}$ | Define the [[Critical State Line]] |
| $M_{tc}$ | Critical friction ratio in triaxial compression |
| $N$ | Stress-dilatancy coupling |
| $\chi_{tc}$ | State-dilatancy coefficient |
| $H$ | Plastic hardening modulus |
| $G$, $\nu$ | Elastic stiffness and Poisson's ratio |

## Sources

- Jefferies, M.G. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapters 3, 4, 6, 8, and 9.
