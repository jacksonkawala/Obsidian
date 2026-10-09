---
title: Critical State Line
domain: cross-domain
type: concept
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-05-01
updated: 2026-05-01
tags: [cssm, critical-state-line, csl, void-ratio, effective-stress]
---

# Critical State Line

The Critical State Line (CSL) gives the void ratio at which a soil continues to shear at constant stress and constant void ratio. In the Jefferies and Been liquefaction framework, the CSL is the reference line used to calculate the [[State Parameter]].

A common semi-log form is:

$$
e_c = \Gamma - \lambda \ln(p')
$$

or, using base-10 logarithms:

$$
e_c = \Gamma - \lambda_{10}\log_{10}(p')
$$

The CSL must be measured for the soil or gradation being assessed. Fines content, particle shape, mineralogy, and crushing susceptibility can shift both $\Gamma$ and $\lambda$, so a borrowed CSL can produce misleading $\psi$ estimates.

## Practical Implications

- CPT-based state interpretation requires the CSL.
- Tailings with variable gradation may need more than one CSL or a bracketed CSL envelope.
- Quasi-steady state or phase transformation points should not be mistaken for the true CSL.
- The CSL anchors both laboratory interpretation and [[NorSand]] calibration.

## Sources

- Jefferies, M.G. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapters 2, 3, and 9.
