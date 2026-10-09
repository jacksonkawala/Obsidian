---
title: Critical Friction Ratio
domain: cross-domain
type: concept
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-05-01
updated: 2026-05-01
tags: [cssm, critical-state, friction-ratio, stress-ratio]
---

# Critical Friction Ratio

The critical friction ratio $M$ is the stress ratio at the critical state:

$$
q = M p'
$$

The triaxial compression value $M_{tc}$ is usually treated as the reference soil property. Other stress states require $M(\theta)$, where the Lode angle $\theta$ captures the role of the intermediate principal stress.

For triaxial compression:

$$
M_{tc} = \frac{6\sin\phi_c}{3 - \sin\phi_c}
$$

where $\phi_c$ is the critical-state friction angle.

## Why It Matters

$M$ is not a peak friction angle. It is the zero-dilatancy stress ratio at the critical state and is one of the core inputs to [[NorSand]], CPT inversion, and undrained strength calculations. Confusing $M$ with density-dependent peak strength obscures the key CSSM split between intrinsic soil properties and current state.

## Sources

- Jefferies, M.G. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapters 2 and 3.
