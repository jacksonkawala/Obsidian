---
title: "Chapter 10 — Concluding Remarks"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, concluding, state-parameter, CPT, soil-variability, sampling, fabric, design-practice, tailings]
---

# Chapter 10 — Concluding Remarks

## Overview

This chapter synthesises the major themes of the book and identifies areas where further research and practical development are needed. It addresses model uncertainty, the role of geological environment in controlling state, in-situ testing with the CPT, the challenge of undisturbed sampling in sands and silts, the influence of soil fabric on plastic hardening, and the relationship between the state parameter approach and current North American practice. The chapter closes with practical criteria for characteristic $\psi_k$ values and a call for the profession to adopt mechanics-based methods.

## 10.1 — Model Uncertainty and Soil Variability

Two factors contribute to the mismatch between theoretical predictions and full-scale experience:

1. **Soil variability** — the real distribution of state in the ground (Chapter 5 explored this in depth).
2. **Calculation method limitations** — the analytical tools themselves introduce error.

### Quantifying Soil Variability

Geotechnical engineering has been slow to handle real material variability. Weak layers can trigger liquefaction in a deposit that otherwise appears adequate. A decade ago, stochastic simulation of soil properties was a niche academic topic (Manzari and Dafalias, Griffiths and Fenton, Hicks and Onisiphorou). Now there has been modest industry uptake, but the limitation from a consulting perspective has been the lack of tools to both simulate the geology as a stochastic domain and compute the response of that stochastic domain. State-parameter-based models (including NorSand) offer a path forward because the state parameter can be varied stochastically while the model computes the implied distribution of soil behaviour from that single input.

### Analytical Methods

Limit equilibrium methods, the standard approach for estimating post-liquefaction strengths, can seriously mislead when brittle failure mechanisms are involved. The wide range of failure modes observed in the Chapter 8 FE simulations — from crest loading to basal creep — illustrates behaviour that limit equilibrium simply cannot capture. As a profession, we can now do far more sophisticated back-analyses than have been done so far.

## 10.2 — State as a Geological Principle

An important insight from tailings impoundments: the geological environment controls the state parameter in a predictable way. Tailings are the product of grinding rock to recover minerals, producing sandy silts that are discharged as slurry into impoundments. The tailings segregate with distance from the spigot — coarser sand settling out closer, finer material travelling further — creating a controlled deltaic depositional environment.

CPT data from many tailings impoundments consistently show:

- The natural depositional state of tailings (sands and silts) is $\psi \sim 0$, regardless of grain size.
- Hydraulic fill construction using bottom discharge consistently produces $\psi \sim -0.1$.
- Beach sands exposed to wave action tend to have $\psi$ denser than $-0.2$.

This geological-environment-to-state mapping is new for sands and silts (though well established for clays via overconsolidation ratio). It has practical value: within a defined geological unit, thin layers can be expected to share a similar characteristic state as the remainder of the stratum, allowing simplification of site characterisation and potential reduction in investigation effort.

## 10.3 — In-Situ State Determination

The CPT is the essential tool for site characterisation for liquefaction. No other test provides as much data, with such precision, at a reasonable cost.

### How Many Soundings?

For a 100 m x 100 m site, two or three CPTs are not nearly enough. The order of 10--15 soundings are required to appreciate the true characteristic values, especially given the statistical structure described in Chapter 5. Geological complexity can significantly increase this requirement. The CPT is inexpensive enough that this is feasible.

### Effect of Soil Properties on CPT Interpretation

The CPT is a continuous bearing capacity test, not a continuous friction angle test. The relationship between measured $q_c$ and soil state depends on compressibility (more accurately, $\lambda$), plastic hardening ($H$), and [[Critical State Line|critical friction ratio]] ($M_{tc}$). Chapter 4 presented the methodology for handling these effects through soil-specific calibration. The downloadable software *CPT_plot.xls* allows users to apply different methods (Plewes screening level, soil-specific calibration) and to blend approaches where appropriate.

Two persistent difficulties stand out:

- **Horizontal geostatic stress ($K_o$).** Soil behaviour is controlled by mean effective stress, not just the vertical component. The self-bored pressuremeter can measure $K_o$ in sands, but data are limited. For normally consolidated deposits, $K_o \approx 0.7$ is a reasonable starting point (Chapter 4 data), but this needs expansion to deltaic sands, silty sands, and compacted fills.
- **Plastic hardening ($H$).** The dimensionless plastic modulus $H$ strongly affects both undrained strength and CPT resistance. Its value depends on soil fabric (particle contact pattern), which in turn depends on the depositional or preparation method. Determining $H$ in-situ remains an open challenge.

### Elastic Shear Modulus

A relatively recent development is the use of anisotropic shear wave velocity measurements (vertical, both horizontal, and diagonal) from a seismic CPT in a large calibration chamber to generate a calibration between wave velocities, in-situ stresses, and void ratio. This seismic CPT approach then yields both the state parameter (from tip resistance) and the in-situ stresses (from wave velocities). It is expensive, but large and critical projects may well justify it.

## 10.4 — Laboratory Strength Tests on Undisturbed Samples

A core premise of the critical state approach is that undisturbed sampling of sands is very difficult but not impossible.

### Undisturbed Sampling of Sands (Duncan Dam)

Duncan Dam is a 39 m zoned earth fill embankment in southeastern British Columbia, completed in 1967, with loose sands and compressible silts extending to 100 m depth. A comprehensive investigation (1988--1992) included:

- Standard penetration tests (SPTs) using the reference stress approach.
- Ground freezing to obtain truly undisturbed samples, tested in monotonic and cyclic simple shear.
- Direct measurement of in-situ void ratio by geophysical techniques.

Ground freezing is an interesting technique: the frozen sand can be machined on a lathe to the required specimen dimensions, then set up in the testing device and thawed. However, a densification of approximately $\Delta e = 0.05$ occurs during thawing and consolidation, even with the best procedures. For the Duncan Dam foundation sand ($\lambda_{10} \sim 0.15$), this densification would overestimate available strength by more than a factor of two. Olson (2006) confirmed this by comparing the residual strength profile from SPT data with the laboratory results from thawed samples — the laboratory strengths were about 60% of the field-inferred values, entirely explained by sample densification.

### Undisturbed Sampling of Clay-Like Soils

For a large hydropower project in a high-seismicity area of British Columbia, an intensive investigation of postglacial clay-like deposits (10 < PI < 20, about 50% silt sized) used:

- CPT-guided sampling intervals.
- Careful cased drilling with tricone and drilling mud, casing closely following the hole advance.
- 76 mm fixed piston sampler, stored in temperature- and moisture-controlled conditions.
- Gamma ray imaging to identify defects before selecting test locations.
- Hydraulic piston extrusion and wire-cutter trimming.

Despite this exemplary protocol, substantial densification of $\Delta e \approx -0.1$ was measured between field sampling and laboratory testing.

### Correcting for Sample Disturbance

The dominant SHANSEP approach (Ladd and Foott, 1974) normalises everything by overconsolidation ratio and has no concept of state other than OCR. This is adequate for high-plasticity clays with large $\lambda$ values, but it does not work for sands (as discussed in Chapter 3). A three-step correction procedure is recommended:

1. **Measure the in-situ void ratio** by recording water content from the piston or Shelby sample trimmings (assuming saturation below the water table). Routine water content logging during fieldwork should be standard practice.
2. **Measure the as-tested void ratio.** Test at slightly greater effective confining stress than in-situ to remove some disturbance effects. Ideally freeze the sample after testing for greatest accuracy in void ratio measurement.
3. **Correct for the disturbance** using the change in state parameter $\Delta\psi$. This can be done empirically (laboratory testing at a range of $\psi$ values gives strength as a function of $\psi$) or computationally (use the NorSand model calibrated to the laboratory test, then re-run with the in-situ void ratio rather than the as-tested value). The in-situ strength will be markedly less than the laboratory-measured strength.

## 10.5 — Soil Plasticity and Fabric

Plastic strains are controlled by work hardening, which in NorSand is captured by the dimensionless plastic modulus $H$. This parameter strongly affects undrained strength and CPT resistance, and it is very much influenced by soil fabric — the particular pattern of particle contacts.

Key points:

- $H$ can be fitted easily from laboratory tests, but the fitted value depends on sample preparation method (i.e. fabric).
- Water-pluviated laboratory samples are becoming a conventional proxy for deltaic deposits, which seems sensible but is not firmly established. Scale effects may exist between laboratory pluviation and field hydraulic filling/dredging.
- An alternative is to use in-situ tests (downhole plate bearing, self-bored pressuremeter) to determine $H$, but separating the effects of $\psi$ and $H$ is difficult because both influence the computed response similarly.
- One promising approach: if the ratio of elastic to plastic moduli ($H/I_r$) is sensibly constant for a given soil, then in-situ shear wave velocity measurements could constrain $H$.

## 10.6 — Relationship to Current Practice

The state parameter approach differs from current North American practice (the "Berkeley School") in almost every respect. The Berkeley School emerged from the post-1964 earthquake research programme, which focused on cataloguing field performance and developing empirical corrections rather than on mechanics-based constitutive modelling.

### Two Schools Compared

**Berkeley School:**

- Founded on a geological classification approach — cataloguing what happened under what circumstances.
- Design expressed as cyclic strength in terms of stress-normalised penetration resistance.
- Empirical "corrections" added over time for soil type, depth, fines content, etc., with no underlying mechanical framework.
- Based on a limited range of soil types and depths from the original database; extrapolation to large dams and silty tailings is questionable.

**Critical State (CSSM) School:**

- Anchored in plasticity theory with over 125 years of development across Harvard, MIT, Brown (US), Manchester, Imperial, Cambridge (UK).
- The state parameter $\psi$ is the central organising variable, derived from the critical state locus.
- Not a fringe idea from one university — it is the only complete constitutive framework for representing soil behaviour.
- Validated against both laboratory element tests and field case histories.

Moss (2014) provided a notable bridge between the two schools by identifying three sites in the Berkeley liquefaction database where the natural sand was essentially Monterey research sand (for which the CSL is well established). Plotting these case histories in state parameter format connects field performance directly to laboratory testing and constitutive mechanics.

### Practical Criteria for Design

The characteristic state parameter $\psi_k$ (subscript $k$ denotes characteristic, about the 80th--90th percentile) provides a practical decision framework:

- **$\psi_k < -0.1$:** satisfactory behaviour. Independent of soil gradation, fabric, stress path, or compressibility. This is the easy-to-remember criterion that has dominated Chapters 4 through 6.
- **$-0.05 < \psi_k < -0.1$:** undrained phase transition deviator stress approximately equals the drained strength. This is the same idea that others have called quasi-steady-state strength or strength for limited liquefaction.
- **$\psi_k > -0.05$:** potential flowslides. Anything looser than $\psi_k = -0.05$ implies potential for catastrophic flow failure (unless the material is somehow contained within an impoundment).

Under circumstances of no untoward layering, reasonable evaluation of soil properties, and careful CPT data interpretation considering $K_o$ and $H$ effects, the criterion may be relaxed to $\psi_k < -0.05$.

### When to Use FE Modelling

Current practice relies on empirical methods and limit equilibrium calculations. This is satisfactory when liquefaction is demonstrably not a concern. But as soon as there are:

- Softer zones in the ground,
- Possibility of spreading pore pressures from loose zones,
- Concerns about displacements,

then a numerical model with a proper constitutive law (such as NorSand) is needed. The Chapter 8 FE analyses showed this is not an impossible leap — it is a quantum jump in understanding compared to limit equilibrium back-analysis.

## 10.7 — What Next?

Areas where further research could contribute usefully to liquefaction assessment:

- **More examples in geologically understood contexts.** Consulting engineers see many sites; university researchers test few samples in detail. Joint industry--university work is the best path forward.
- **Stochastic simulations using state parameter models.** The tools now exist; all that is needed is to vary $\psi$ stochastically and let the model compute the implied distribution of behaviour.
- **Dissemination of constitutive models.** NorSand and similar models need to be incorporated into commercial platforms. The GNU licence is waived for any software house willing to do so.
- **In-situ determination of fabric and hardening.** Seismic CPT with anisotropic wave velocity measurements is a promising avenue.

## 10.8 — Do Download!

The book provides a large amount of open-source data and software as a downloadable companion:

- NorSandFEM (Fortran90 source and executables)
- NorSandPS.xls and NorSandTXL.xls (element-level spreadsheets)
- CPT_plot.xls (CPT interpretation with multiple methods)
- Verification input files and example boundary value problems
- Dynamic colour plots showing the effects of changing properties

All are free and open. The interactive, colour-coded plots in particular are a powerful learning resource because they show how changing a single parameter affects the full stress--strain response.

## Key Symbols

| Symbol | Name | Definition |
|---|---|---|
| $\psi_k$ | Characteristic state parameter | Design value of $\psi$ at the 80th--90th percentile of the distribution |
| $\psi$ | State parameter | $e - e_c$; void ratio relative to the CSL at current $p'$ |
| $\lambda_{10}$ | CSL slope (base 10) | Slope of the critical state line in $e$--$\log_{10} p'$ space |
| $H$ | Plastic hardening modulus | Dimensionless; controls the magnitude of plastic strains per stress increment |
| $K_o$ | At-rest earth pressure coefficient | $\sigma'_h / \sigma'_v$; typically $\approx 0.7$ for normally consolidated deposits |
| $\Delta e$ | Void ratio change (sampling) | Densification from in-situ to as-tested conditions |
| $Q_k$ | Normalised CPT resistance | $(q_c - \sigma_v) / \sigma'_v$; subscript $k$ indicates characteristic value |

## Connections to Practice

The concluding themes connect directly to [[Nataka TSF]] engineering:

- **State as a geological principle applies to Nataka tailings.** The spigot-deposited tailings beach at Nataka is a controlled deltaic environment. The natural depositional state should be approximately $\psi \sim 0$, with denser states near the spigot (where wave action and construction traffic compact the material) and near-zero or slightly positive states further into the basin. This predictability allows rational planning of CPT investigations and interpretation.
- **The $\psi_k < -0.1$ criterion is the target.** For the [[Lift 1 Construction Log|Lift 1 raise]], achieving a characteristic state parameter denser than $-0.1$ in the compacted fill means the liquefaction question is essentially closed, regardless of the tailings grain size gradation or other details. This is a clear, measurable, and defensible design criterion.
- **CPT-based characterisation is essential.** The chapter makes clear that SPTs are wholly inadequate for liquefaction assessment — the individual measurement error is too large relative to the true variability. A programme of 10--15 CPT soundings across the Nataka TSF footprint (cost approximately \$15,000 per the text) would provide the statistical basis for determining $\psi_k$.
- **Sample densification is a real risk.** If laboratory testing is undertaken on Nataka tailings (whether sands or silts), the void ratio change between sampling and testing must be tracked and corrected. The Duncan Dam and British Columbia examples show that uncorrected lab strengths can overestimate in-situ strength by a factor of two.
- **Commercial software needs better models.** Any stability analysis of the Nataka TSF that relies on Mohr--Coulomb or Modified Cam Clay in FLAC/PLAXIS is not adequately capturing liquefaction mechanics. The NorSandFEM code offers a free alternative, and the push for state-parameter models in commercial platforms aligns with best practice for tailings dam assessment under [[GISTM]].

## Sources

- *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapter 10 (pp. 439--453), Jefferies & Been (2016)
