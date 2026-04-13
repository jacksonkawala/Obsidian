---
title: "Chapter 8 — Finite Element Modelling of Soil Liquefaction"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, finite-element, NorSand, NorSandFEM, slope-stability, liquefaction, displacement-control, state-parameter]
---

# Chapter 8 — Finite Element Modelling of Soil Liquefaction

*Contributed by Dr. Dawn Shuttle*

## Overview

The central thesis of this book is that liquefaction is simply another computable aspect of soil behaviour, best understood through constitutive modelling rather than empirical correlations. This chapter puts that thesis into practice by presenting a finite element (FE) implementation of [[NorSand]] — called *NorSandFEM* — built on open-source software. The chapter covers why FE modelling matters, the software platform, verification against analytical solutions, and a series of slope liquefaction simulations that illustrate how soil state ($\psi$) and loading mechanism govern failure mode.

## 8.1 — Why Finite Elements?

The back-analyses of large-scale liquefaction failures (Chapter 6, Appendix F) typically used limit equilibrium methods that cannot capture the brittle, strain-softening stress--strain behaviour intrinsic to liquefaction. The unsurprising consequence is that back-calculated strengths do not match laboratory-measured strengths. Without using computable soil models, the profession cannot properly evaluate the case history record or carry out forward design.

Modern elasto-plastic FE analysis combines realistic stress--strain models with the ability to solve real boundary value problems (not just element tests). Two types of material non-linearity must be captured:

- **Material non-linearity:** soil stiffness evolves with deformation (the constitutive model handles this).
- **Geometric non-linearity:** large-displacement effects where higher-order displacement gradient terms matter. This chapter omits geometric non-linearity to keep things simpler; it becomes important only under substantial confinement (such as the CPT).

## 8.2 — Open-Source Software Platform

### Commercial vs. Open-Source

Commercial platforms (FLAC, PLAXIS, SIGMA/W) offer user-defined model (UDM) capability, but with significant limitations: tied to a particular algorithm (e.g. FLAC requires tangent stiffness), no access to internal code, and stresses returned from individual elements may have imperfect convergence. Open-source FE code gives full access to the numerics — nothing hidden.

### NorSandFEM Implementation

NorSandFEM is adapted from the Program 6.2 code of Smith and Griffiths (1998), which has a long, well-cited pedigree in slope stability analysis. The key adaptation was replacing the standard non-associated Mohr--Coulomb (NAMC) failure criterion with the general 3D monotonic version of NorSand (Table 3.1). In addition to changing the failure criterion, NorSand requires updating the internal model state at each Gauss point as the solution evolves (because NorSand's yield surface evolves, whereas NAMC is a fixed yield condition).

The code:

- Is written in Fortran90 (compatible with the third edition library functions).
- Handles both axisymmetric and plane strain geometries.
- Accepts initial stress conditions set as either constant $K_o$ (for element verification) or gravity loading (for field problems).
- Is freely downloadable from the book's companion site.

### Verification

NorSandFEM was extensively verified against "element" tests with uniform stress conditions and known loading paths, allowing direct comparison with the NorSandPS.xls and NorSandTXL.xls spreadsheets that integrate the NorSand equations using the Euler method. Results match to within the expected differences arising from the viscoplastic solution algorithm versus explicit Euler integration.

A particularly important verification case involves a plane strain element test with a rotated mesh (in-plane and 45-degree rotation). Both orientations produce identical results, confirming that the stress invariants, strain invariants, 3D yield surface representation, and other formulations are all properly implemented. This is a critical check for any constitutive model intended to work across general stress states.

Multi-element verification meshes were also tested (not just single elements), since boundary conditions applied to two sides of a single element can artificially enhance stability that would not exist in a larger mesh.

## 8.3 — Slope Liquefaction Simulations

### Problem Setup

All simulations use a single idealized slope geometry:

- 8 m high, 1V:4H outer face.
- Deep foundation (not constrained by a strong base) so that the slope behaviour is not artificially limited.
- Discretised into 480 square elements (2 m side), with fixed boundaries at the base and sides.
- Water table at ground surface (fully saturated, undrained loading).

The NorSand soil properties used throughout are representative of a quartz sand with trace silt, broadly similar to a tailings beach where natural segregation has deposited sand near the spigot:

| Symbol | NorSandFEM name | Value |
|---|---|---|
| $\Gamma$ | Gamma | 0.875 at $p' = 1$ kPa |
| $\lambda$ | Lambda | 0.03 |
| $M_{tc}$ | Mcrit | 1.27 |
| $N$ | Ncrit | 0.35 |
| $H_0$ | H0 | 100 |
| $H_\psi$ | Hy | 0 |
| $\chi_{tc}$ | Chi | 4.0 |
| $G_0$ | G0 | 30 MPa at $p' = 100$ kPa |
| $G_\text{power}$ | Gpower | 1.0 |
| $\nu$ | Poisson | 0.15 |
| $R$ | OCR0 | 1.001 |

Elasticity was held constant through each simulation but varied spatially with initial stress using:

$$
G = G_0 \cdot (p'/p_\text{ref})^{G_\text{power}}
$$

where $p_\text{ref} = 100$ kPa. Plastic hardening was set constant ($H_\psi = 0$) for simplicity.

### 8.3.1 — Surface Loading with Rigid Footing

A rigid, perfectly rough footing was applied 2 m from the crest (simulating additional lifts of fill on top of the slope). Four initial state scenarios were examined: $\psi_0 = 0.0$, $+0.03$, $+0.05$, and $+0.07$.

**Load--displacement response:**

- All four states produce the same initial stiffness (elastic and plastic stiffness are identical for all $\psi$ when $H_\psi = 0$).
- The densest state ($\psi_0 = 0.0$) had not reached maximum bearing capacity within 200 mm of applied displacement.
- All three looser states reached peak bearing capacity within 15 mm, followed by marked post-peak strength loss — classic brittle failure.
- Peak loads ranged from 35.4 kPa ($\psi_0 = 0.07$, equivalent to a 1.61 m height rise) to 42.8 kPa ($\psi_0 = 0.03$, equivalent to a 1.94 m height rise).
- Post-liquefaction, the $\psi_0 = 0.05$ and $\psi_0 = 0.07$ cases continued losing resistance, reaching only 70% and 55% of their peak values at 200 mm displacement (and still falling).

**Failure mechanism depends on state:**

- $\psi_0 = 0.07$ (most contractive): a very shallow bearing capacity failure directly beneath the footing. In a real situation this would provide little warning before catastrophic movement.
- $\psi_0 = 0.03$ ("normally consolidated"): failure is slightly deeper but still a bearing-capacity type.
- $\psi_0 = 0.0$ (no brittle failure): a much deeper, circular failure mode — removing brittleness fundamentally changes the mechanism.

**Stress paths** at monitoring points beneath the footing show:

- $\psi_0 = 0.07$: negligible initial shear increase, then decreasing mean stress with decreasing shear stress towards failure — classic liquefaction path, very similar to the plane strain static liquefaction tests of Wanatowski and Chu (2007).
- $\psi_0 = 0.0$: the classic undrained "S-shaped" stress path with initial contraction, quasi-steady state, and then dilation to reach the critical state.

### 8.3.2 — Crest Loading with Deep Weak Zone

A more realistic scenario: a "normally consolidated" slope ($\psi_0 = 0.03$ overall) with a compacted surface layer ($\psi_0 = 0.0$ for the top row) and a much looser zone ($\psi_0 = 0.07$) running parallel to the slope at depth, simulating a weak layer of the type that develops naturally in hydraulic fills (see Chapter 5).

Key results:

- There is a substantial post-peak load drop, but not as severe as the uniformly loose cases.
- The failure mechanism tends towards a circular slip that does not extend the full length of the weak zone — the surrounding denser soil also influences the failure mode.
- Stress paths at four monitoring points (A through D) show diverse behaviour: location A (normally consolidated, directly below the footing) dilates to quasi-steady state; location B (in the weak zone) follows a classic liquefaction path with large strength loss; locations C and D (away from the loaded area) show elastic unload/reload and incipient liquefaction respectively.

### 8.3.3 — Basal Creep (Movement at Depth)

An entirely different loading mechanism: imposed lateral displacement at the base of the slope, simulating foundation creep, excavation into a weak stratum, or tectonic/geological movement. This corresponds to the triggering mechanism at Nerlerk and Fort Peck.

Two initial states were analysed: $\psi_0 = +0.07$ (very contractive) and $\psi_0 = 0.0$ (no strength loss).

**Very loose slope ($\psi_0 = 0.07$):**

- Failure zones develop quickly, appearing at their final locations with as little as 0.1 m of base movement.
- Shear strains define a classic **two-wedge failure** that extends to full depth, with hints of a secondary back scarp.
- The mobilised stress ratio $\eta/M$ reaches 1.0 throughout the plastic shearing zones.
- Stress paths at all four monitoring points show that this soil is so loose and close to its [[Critical State Line|critical state]] that even a minor perturbation causes large strength loss (about 80% reduction).

**Denser slope ($\psi_0 = 0.0$):**

- No tendency to form localised shear zones. Instead, the pattern of plastic shear strain increments suggests a developing circular failure mode.
- The mobilised shear stresses are nowhere near the available strength (ongoing dilation following initial contraction).
- The classic S-shaped stress paths are consistent with the initial state; the interesting question is what would happen if pore water migration were allowed locally.

## 8.4 — Commentary

The chapter demonstrates that:

1. **Constitutive modelling resolves the back-analysis problem.** The well-known mismatch between limit equilibrium back-calculated strengths and laboratory measurements arises because limit equilibrium cannot represent strain softening. FE with NorSand does not have this limitation.
2. **State parameter governs everything.** The initial $\psi$ controls the failure mode (shallow vs. deep), the brittleness (catastrophic vs. gradual), the amount of warning before failure, and the post-failure residual strength.
3. **Loading mechanism matters.** The same slope with the same soil properties can fail in fundamentally different ways depending on whether the trigger is crest loading or basal creep.
4. **The profession needs state-parameter models in commercial platforms.** Commercial modelling tools (FLAC, PLAXIS) currently offer only Modified Cam Clay as their "good" model, which is far from sufficient for liquefaction. User-defined models are a workaround but not a solution. The NorSand routines are offered under a waived GNU licence for any software house willing to incorporate them.

## Key Symbols

| Symbol | Name | Definition |
|---|---|---|
| $\psi_0$ | Initial state parameter | State parameter at the start of loading |
| $\eta$ | Stress ratio | $q/p'$; deviatoric stress divided by mean effective stress |
| $M$ | Critical stress ratio | Value of $\eta$ at the critical state |
| $\eta/M$ | Mobilised stress ratio | Inverse of local factor of safety; equals 1.0 at failure |
| $H_0$, $H_\psi$ | Hardening modulus parameters | Control the rate of plastic hardening in NorSand |
| $G_0$, $G_\text{power}$ | Elastic shear modulus parameters | $G = G_0 (p'/p_\text{ref})^{G_\text{power}}$ |
| $K_o$ | At-rest earth pressure coefficient | Ratio of horizontal to vertical effective stress |

## Connections to Practice

The implications for [[Nataka TSF]] design and operations are significant:

- **Lift 1 as crest loading on a loose foundation.** The slope simulation with surface loading directly parallels the scenario of raising the TSF embankment by placing compacted fill (Lift 1) on top of existing loose tailings. If the tailings beneath the lift have $\psi > +0.03$, the simulations predict brittle failure with very little warning — shallow bearing-capacity type failure that could progress to a catastrophic flowslide.
- **Weak layers are realistic.** The deep weak zone scenario (Section 8.4.4) mirrors conditions that develop naturally in tailings beaches due to segregation and variable deposition energy. During [[Lift 1 Construction Log|Lift 1 construction]], layers of poorly compacted or hydraulically deposited material could create exactly the type of embedded loose zone that the simulations show attracts failure.
- **Basal creep is relevant to foundation conditions.** If the TSF foundation includes compressible or weak strata, the basal creep loading mechanism could be triggered by ongoing settlement or by construction-induced movements. The simulations show this can cause a two-wedge failure with very little precursor displacement.
- **FE modelling is the right tool for complex scenarios.** Limit equilibrium analyses of the Nataka TSF embankment cannot capture the strain-softening behaviour that is central to liquefaction risk. When liquefaction is a concern (and it should be for any TSF with loose saturated tailings), the analysis should progress to FE modelling with a state-parameter-based constitutive model.
- **NorSandFEM is freely available.** The software and verification suite are downloadable, providing a practical path to implementing these analyses for Nataka and other Kenmare facilities.

## Sources

- *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapter 8 (pp. 381--397), Jefferies & Been (2016)
