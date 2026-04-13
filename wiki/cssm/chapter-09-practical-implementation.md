---
title: "Chapter 9 — Practical Implementation of Critical State Approach"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, practical, laboratory-testing, triaxial, CPT-interpretation, NorSand, soil-properties, cyclic-strength, state-parameter, liquefaction-assessment]
---

# Chapter 9 — Practical Implementation of Critical State Approach

## 9.1 Overview

This chapter collects the various pieces of critical state soil mechanics into a working **procedure** for engineering of liquefaction problems in sands and silts. The procedure is not a choice between laboratory and in-situ testing -- both are essential. The soil response to loading is broadly:

$$
\text{Response} = \text{Properties} \times \text{State}
$$

Because undisturbed sampling of sands is effectively impossible, the division of labour is:

- **In-situ tests** (primarily CPT) measure the **state** ($\psi$, $K_o$).
- **Laboratory tests** on reconstituted samples measure the **properties** ($\Gamma$, $\lambda_{10}$, $M_{tc}$, $N$, $\chi_{tc}$, $H$, $G_{\max}$).

The critical state approach to liquefaction, and indeed to any aspect of sand behaviour, follows a three-step logic:

1. Determine the in-situ state from penetration testing, supplemented by other testing and modelling. The CPT responds to $\psi$, which helps deal with variability in particle size distribution.
2. Determine the soil properties in the laboratory on reconstituted material over a range of densities and stress levels. Validate using a constitutive model such as [[NorSand]].
3. Base engineering analyses on the combination of in-situ state and measured soil properties.

## 9.2 Scope of Field Investigations and Laboratory Testing

### Field investigation requirements

A comprehensive liquefaction field investigation includes:

- **CPTu soundings** through the material of interest, with pore pressure measurement at the u2 location. The CPTU variety with piezometric capability is essential.
- **Sampling** to gather material for laboratory testing. Any method that retrieves adequate material is acceptable: Mostap (convenient with CPT equipment), driven samplers with core catchers, Shelby tubes, California samplers.
- **Shear wave velocity measurements** in-situ, unless only a screening-level assessment is needed. A seismic CPT is the ideal way to collect these data.
- **Carefully planned laboratory testing** including triaxial compression, bender element tests, and (for seismic liquefaction) cyclic simple shear tests.

### The role of laboratory testing

The laboratory testing programme is frequently neglected in liquefaction studies, often dismissed as "too expensive." In reality, it is a small cost relative to the fieldwork and provides the means to remove most of the guesswork and empiricism from a liquefaction assessment. For a preliminary screening, index testing and screening-level CPT interpretation may suffice. But as soon as you progress beyond screening, or encounter unusual soils (silts, carbonate sands, tailings), triaxial compression testing is essential. Triaxial testing is the current reference strength test for geotechnical engineering and is within the reach of most projects.

## 9.3 Deriving Soil Properties from Laboratory Tests

### 9.3.1 Selecting a representative sample

Soil is naturally variable. Even within a single geological unit, 10 gradation curves will produce a band rather than a single line. The procedure is:

1. **Examine the gradation envelope** and pick one (or more) representative gradations.
2. **Obtain about 10 kg** of the selected gradation by combining, sieving, re-blending, and mixing samples. Document the produced gradation with a PSD test. Take a micro-photograph for grain shape and angularity.
3. **Decide whether to test step-out gradations** (coarser and finer sides of the envelope). If budget allows, do a full suite of tests on each. If constrained, use fewer step-out tests and model the effect of gradation on soil properties.

### 9.3.2 Minimum test program

The triaxial test programme measures five groups of properties:

- CSL properties ($\Gamma$, $\lambda_{10}$)
- Stress-dilatancy properties ($M_{tc}$, $N$)
- State-dilatancy property ($\chi_{tc}$)
- Plastic stiffness / compressibility ($H$, $C_c$)
- Elastic properties ($G_{\max}$, $\nu$)

In principle, three triaxial tests suffice; in practice, at least 10 are needed for reliable determination. A conceptual **minimum three-test suite** illustrates the logic:

**Test A (CIU):** Loose, undrained, low confining stress (~100--200 kPa). Defines the CSL at low stress where transducer resolution is adequate. Must be loose enough for a brittle (liquefaction) response with no hint of quasi-steady state.

**Test B (CID):** Loose, drained, high confining stress (~400 kPa), sheared to about 20% axial strain. Defines the CSL at the dense end or allows the CSL to be estimated by projecting volumetric strain trends.

**Test C (CID):** Dense, drained, low confining stress (~80 kPa). Targeted at the stress-dilatancy properties $N$ and $\chi_{tc}$. Also provides data on the plastic hardening parameter $H$.

### 9.3.3 Practical test program

A realistic programme for a single representative gradation is shown in Table 9.1:

| Test type | Typical count | Purpose |
|-----------|--------------|---------|
| Particle size distribution | 20 | Define in-situ heterogeneity and select representative gradation |
| Specific gravity | 2 | Void ratio calculation |
| Maximum and minimum index density | 2 | Reference densities for lab technicians and comparison with other materials |
| CIU triaxial tests | 5 | CSL definition and peak undrained shear strength / brittleness |
| CID triaxial tests | 5 | CSL definition, stress-dilatancy parameters, plastic hardening for NorSand calibration |
| Bender element tests (with isotropic consolidation) | 2 sets of ~8 | Shear wave velocity at different densities and stress levels for $G_{\max}$ relationship |
| Cyclic simple shear tests | 8 | Cyclic resistance curve (CRR vs $\psi$) for seismic liquefaction studies |
| Resonant column testing | 2 | Modulus degradation and damping ratio vs shear strain |

Elasticity is normally measured using the bender element method. Poisson's ratio generally falls in the range $0.15 < \nu < 0.25$ and is not measured; this is sufficient initial precision for modelling.

### 9.3.4 Data handling

#### Data file structure

Triaxial test data should be logged digitally using computer-controlled data acquisition. About 4000 scans have been found both convenient and sufficient for tests going to 20% nominal axial strain. For archival purposes, save data as ASCII text or CSV files -- these remain readable indefinitely, unlike proprietary spreadsheet formats. The recommended data format (Figure 9.3) includes header information about the test and material, followed by columns of axial strain, volumetric strain, axial effective stress, and radial effective stress.

#### Data processing

Soil behaviour is controlled by stress and strain invariants. The measured data must be transformed:

The shear strain invariant paired with the volumetric strain is:

$$
\varepsilon_q = \varepsilon_1 - \frac{\varepsilon_v}{3}
$$

Dilation is the ratio of strain increments, computed using a five-interval central difference method:

$$
D(\text{in row } n) = \frac{\varepsilon_{vn+2} - \varepsilon_{vn-2}}{\varepsilon_{qn+2} - \varepsilon_{qn-2}}
$$

The key values extracted from each drained test are $D_{\min}$ (minimum dilation rate) and the corresponding $\eta_{\max}$ (maximum stress ratio), plus the stress invariants $p = (\sigma_a + 2\sigma_r)/3$ and $q = \sigma_a - \sigma_r$.

The void ratio throughout the test (for drained tests) is computed as:

$$
e = e_o - (1 + e_o) \times \varepsilon_v
$$

The state parameter at $D_{\min}$ is:

$$
\psi = e - (\Gamma - \lambda_{10} \times \log p')
$$

### 9.3.5 Evaluation of soil properties

#### Properties worksheet

Five soil properties are determined directly from the triaxial data and maintained in a named-cell *properties* worksheet. The cells are named descriptively: **gamma** and **lambda10** for the CSL, **Mtc** and **Ntc** for stress-dilatancy, **chi_tc** for state-dilatancy. Use bold blue font for user-input cells.

Three trend-line plots drive the property evaluation:

**Trend line 1 -- Critical state line ($\Gamma$, $\lambda_{10}$):**

Plot void ratio versus $\log_{10}(p')$. Use endpoints at $p' \sim 10$ kPa and $p' = 3000$ kPa. For drained tests, transfer the $e$-$p'$ paths directly. For undrained tests, plot the critical state conditions from the summary table (Figure 9.5) as discrete points.

**Trend line 2 -- Stress-dilatancy ($M_{tc}$, $N$):**

Plot $\eta_{\max}$ versus $D_{\min}$ for the drained tests. The formula for the trend line is:

$$
\eta_{\max} = M_{tc} - (1 - N_{tc}) \times D_{\min}
$$

Use $D_{\min} = 0$ as one endpoint and $D_{\min} = -0.8$ as a convenient other endpoint. The fitted trend line for Nerlerk 270/1 sand establishes $M_{tc} = 1.27 \pm 0.01$ and $N = 0.40 \pm 0.02$.

**Trend line 3 -- State-dilatancy ($\chi_{tc}$):**

Plot $D_{\min}$ versus $\psi$ at $D_{\min}$. The trend line is:

$$
D_{\min} = \chi_{tc} \times \psi
$$

This must pass through $D_{\min} = 0$ at $\psi = 0$ (if it does not, there is an error in the estimated CSL). The fitted relationship for Nerlerk 270/1 gives $\chi_{tc} = 4.00 \pm 0.2$.

#### Summary of Nerlerk 270/1 sand properties

| Symbol | Name | Definition |
|--------|------|------------|
| $\Gamma$ | CSL intercept (at $p' = 1$ kPa) | 0.855 |
| $\lambda_{10}$ | CSL slope in $e$-$\log_{10}(p')$ | 0.048 |
| $M_{tc}$ | Critical friction ratio (triaxial compression) | 1.27 |
| $N$ | Stress-dilatancy volumetric coupling | 0.40 |
| $\chi_{tc}$ | State-dilatancy coefficient | 4.00 |

### 9.3.6 Validation of soil properties

The five soil properties ($\Gamma$, $\lambda_{10}$, $M_{tc}$, $N$, $\chi_{tc}$) have each been determined from different, largely independent aspects of the test data. The next step is to put them into a constitutive model and verify that they replicate the measured stress-strain behaviour -- a process called **validation**.

[[NorSand]] is used here because it is simple, implemented in a freely downloadable spreadsheet (*NorSandTXL*), and uses the familiar standard soil properties. Validation necessarily depends on the reasonableness of the chosen soil model, but all good models use the same CSL and $\psi$, so the properties are model-independent.

#### Check plastic properties by simulation of drained tests

The procedure:

1. Open *NorSandTXL*, navigate to the "Params & Plots" worksheet.
2. Input the five soil properties determined in Section 9.3.5.
3. Determine the plastic hardening modulus $H$ by iterative forward modelling (IFM): guess a value, run the model, adjust $H$ to match the stress-strain curve stiffness. Larger $H$ produces a stiffer response.

$H$ varies with the initial state parameter of the test:

$$
H = H_o + H_\psi \psi
$$

where $H_o$ and $H_\psi$ are constants determined by plotting the best-fit $H_o$ for each test against $\psi_o$. In most cases, a straight line through the data gives adequate values for $H_o$ and $H_\psi$.

**Elasticity:** Input $G_{\max}$ (in MPa) as the initial value. The variation of $G_{\max}$ with stress level follows:

$$
G_{\max} = G_{ref}\!\left(\frac{p}{p_o}\right)^{\!G_{exp}}
$$

where $G_{ref}$ is the reference shear modulus, $G_{exp}$ is the elastic exponent (commonly ~0.5 for sands), and $p_o$ is a reference stress. If bender element data are available, use them to determine $G_{ref}$ and $G_{exp}$. Otherwise, estimate from similar soils and refine using the undrained tests.

**Initial soil state:** Input the state parameter $\psi_o$ (or equivalently the initial void ratio), the initial mean effective stress $p_o$, $K_o$, and the overconsolidation ratio.

Drained tests must be fitted before the undrained tests because elasticity has only minor effects on the drained behaviour. The drained tests validate the plastic properties; the undrained tests are then used to check and refine the elasticity.

#### Confirm elastic properties by simulation of undrained tests

The measured stress path of an undrained test is initially vertical (no shear-induced excess pore pressure), implying elastic soil response. The overconsolidation ratio (OCR) input can be adjusted slightly (e.g. OCR = 1.1) to replicate this elastic zone. The elasticity estimate ($G_{\max}$) is then refined to match the stress path shape up to about $q \sim 50$ kPa. The variation of $G_{\max}$ with confining stress and void ratio across all tests should form a consistent trend.

### 9.3.7 Document simulation input sets

When performing IFM, document every fit: paste the Excel plots into a Word document as enhanced metafile images and paste the input parameters as a table of values. This creates an auditable record that can be reviewed by other engineers.

### 9.3.8 Reading this section is not enough

The section emphasises that hands-on practice with the downloadable NorSand spreadsheet and the calibration data is essential. Working through the calibration yourself produces a genuine understanding of critical state soil mechanics that cannot be gained from reading alone.

### 9.3.9 Reporting soil properties

Three levels of reporting are recommended:

1. **Main text** for project owners and regulators: a figure showing the gradation envelope with the tested gradation(s) highlighted, plus a table of soil property values ($M$, $N$, $\lambda_{10}$, etc.) set against the expected range, with a discussion of whether the project soil is typical or unusual.
2. **Report appendix** for review engineers: the full suite of plots ($e$-$\log(p')$ for the CSL, $\eta_{\max}$ vs $D_{\min}$, $D_{\min}$ vs $\psi$, and NorSand simulations) with a technical narrative of procedures and rationale.
3. **Digital data** for archiving: raw ASCII test data, test summary tables, and digital simulation records. Archive on non-magnetic media bound into the engineering report for long-term accessibility.

## 9.4 Laboratory Measurement of Cyclic Strength

### 9.4.1 Need for cyclic testing

The case-history basis for liquefaction assessment (whether NCEER-based or state parameter approaches) is biased to soils with less than 15% fines and confining stresses below 150 kPa. For high tailings dams or deep dam foundations on liquefiable silts, the general answer is to use the computer-controlled cyclic simple shear (CSS) test at representative stress levels. It has become normal practice to specify extensive CSS testing programmes.

### 9.4.2 Cyclic strength ratio from simple shear tests

The objective is to define at least one well-constrained curve of cyclic resistance ratio (CRR) versus the number of cycles to liquefaction $N_L$, at a specific value of $\psi$, plus one or two additional data points at higher and lower $\psi$ values. Tests should cover the in-situ confining stress range. About four CSS tests define the CRR curve for a single $\psi$ value, so something like six to eight tests total are needed -- four at a target $\psi$ with varying cyclic stress ratio, and two sets of four at different $\psi$ values.

The end result is a graph of CRR as a function of $\psi$, for a chosen number of cycles. The number of cycles corresponds to the earthquake magnitude: $N_L = 15$ for $M = 7.5$, $N_L = 10$ for $M = 7.0$, $N_L = 6$ for $M = 6.0$.

### 9.4.3 Representing trends in CRR

The preferred representation is a linear trend:

$$
\text{CRR} = a - b \times \psi_o
$$

where $a$ and $b$ are coefficients fitted to the test data. These coefficients become inputs to the CPT processing routine.

### 9.4.4 Modelling cyclic simple shear tests

If static bias effects need to be included, calibrate the *NorSandPSR.xls* spreadsheet to the CSS data. Once calibrated, the spreadsheet can vary static bias and state and compute additional design trends for input into CPT data reduction.

## 9.5 Determining Soil State by CPT Soundings

### 9.5.1 CPT equipment and procedures

#### Standards and requirements

Specify a **CPTU** (with piezometric measurement) to a recognised standard (ISO 22476-1, ASTM D5778, or EN 1997-3). Ensure the u2 (shoulder) location is specified for the piezometric element. Key equipment considerations:

- Specify several probes: a robust 50 MPa tip for initial sounding, then 20 MPa or even 10 MPa tips for the soft or loose soils of interest. Transducer accuracy is paramount for loose silts -- a standards-compliant 100 MPa CPT is woefully inadequate for slurried tailings.
- For friction transducers, seek the **independent type** (not subtraction type), as the subtraction configuration produces much larger errors in $f_s$.
- Operate with silicon oil or glycerine for u2 saturation; properly zero before and confirm zero after each sounding.

#### Data recording

Use a scan rate of at least 1 Hz at 20 mm/s pushing velocity, giving data at 20 mm intervals. Finer intervals (15 mm nominal) are preferable, especially in layered deposits where the u2 detail is important for identifying stratigraphy.

#### Data structure

Insist on digital data in ASCII or CSV format, with a full header block documenting date, operator, location, reference elevation, equipment calibration factors, cone ID, and zero offsets. The data block should contain columns for depth, tip resistance $q_t$, pore water pressure $u_2$, and sleeve friction $f_s$ at minimum.

#### Dissipation tests

Piezometric dissipation tests should be planned to document the groundwater conditions at the site, not merely to estimate a consolidation coefficient. If the site is predominantly sandy, the u2 sensor will measure the in-situ piezometric pressure directly during the sounding. If the site is silty or clayey, dissipation tests at several depths will be needed to establish the piezometric profile.

### 9.5.2 Interpretation of CPT data

#### CPT processing software

The downloadable spreadsheet *CPT_plot* implements the full methodology. It provides:

- Three report-figure templates (basic CPT plots, interpreted engineering parameters, soil behaviour-type classification)
- A "Processed Results" worksheet for numerical output
- Four methods for state parameter computation (see Chapter 4, Section 4.7.6)

#### Using CPT_plot

The *CPT Data* worksheet accepts raw CPT data by paste, converts units to the standard metric form, and processes via VBA. The *Soil Properties* worksheet captures:

- Soil unit weight and water table (for computing $\sigma'_v$)
- Geostatic stress ratio $K_o$ (default $K_o = 0.7$ is reasonable for normally consolidated soils)
- Method choice for CRR (NCEER method or state-based approach with the $a$, $b$ coefficients from Section 9.4)
- State parameter computation method (Methods 1--4 from Chapter 4)

| Method | Description |
|--------|-------------|
| 1 | Specify $k$, $m$ directly from CC testing and Equation 4.8 (drained penetration only, filtered by $F < 1.5\%$ and $-0.02 < B_q < 0.02$) |
| 2 | Compute $k$, $m$ from soil properties ($M$, $N$, $H$, $\lambda$, $\nu$, $G_{ref}$, $n$) via Shuttle and Jefferies (1998). Most precise; handles stress-level bias. |
| 3 | Specify $\bar{k}$, $\bar{m}$ for undrained penetration via Shuttle and Cunning (2007). Uses the *CPT_state* widget for coefficient generation. |
| 4 (Plewes) | Screening method: estimate $\lambda_{10}$ from $F$ (Equation 4.16), assume $M_{tc} = 1.25$, use Equations 4.15a/b. Surprisingly accurate; always displayed as background reference. |

#### Viewing CPT results

**Report Fig 1 (Basic plots):** Tip resistance $q_t$, sleeve friction $f_s$, pore pressure $u_2$, normalised parameters $F$, $B_q$, and soil behaviour-type index $I_c$ -- all aligned by depth for stratigraphic scanning.

**Report Fig 3 (Classification):** A soil behaviour-type plot for a selected depth interval, overlaying $I_c$ contours with $\psi$ contours computed from cavity expansion theory. The demarcation between undrained strain softening and strain hardening (Shuttle and Cunning, 2008) is also shown, at approximately $\psi = -0.05$. This is the starting point for a liquefaction assessment.

**Report Fig 2 (Interpreted results):** The engineering output -- continuous profiles of $\psi$, drained friction angle $\phi'$, undrained strength $s_u$, CRR (both NCEER and state-based methods), and post-liquefaction residual strength ratio $s_r/\sigma'_{vo}$.

#### Reporting CPT data

Three tiers of reporting:

1. **Main text** for owners/regulators: $q_t$ vs depth section drawings across the site, classification plots (Report Fig 3) for key strata, high-level conclusions about liquefaction potential.
2. **Appendix** for review engineers: interpreted results (Report Fig 2) for each CPT sounding, discussion of groundwater assumptions, method choices, variability from CPT to CPT.
3. **Data archive:** raw CPT data on bound media, plus basic overview plots (Report Fig 1) for each sounding.

## 9.6 Application to Typical Problems in Sands and Silts

The first decision in any liquefaction assessment is whether the in-situ material is strain softening or strain hardening under undrained conditions. The critical threshold is approximately $\psi = -0.05$: soils denser than this will tend to dilate and harden, while looser soils are susceptible to strength loss. The soil behaviour-type classification plot (Report Fig 3) provides a direct visualisation of where the in-situ state sits relative to this threshold.

## Key Equations Summary

| Symbol | Name | Definition |
|--------|------|------------|
| $\varepsilon_q$ | Shear strain invariant | $\varepsilon_1 - \varepsilon_v/3$ |
| $D$ | Dilation rate | $\Delta\varepsilon_v / \Delta\varepsilon_q$ (five-interval central difference) |
| $D_{\min}$ | Minimum dilation rate | Most negative value of $D$ in a drained test |
| $\eta_{\max}$ | Maximum stress ratio | Peak value of $q/p$ in a drained test |
| $e$ | Void ratio during shearing | $e_o - (1 + e_o) \times \varepsilon_v$ |
| $\psi$ | State parameter | $e - (\Gamma - \lambda_{10} \log p')$ |
| $\eta_{\max}$ trend | Stress-dilatancy trend line | $M_{tc} - (1 - N_{tc}) \times D_{\min}$ |
| $D_{\min}$ trend | State-dilatancy trend line | $\chi_{tc} \times \psi$ |
| $H$ | Plastic hardening modulus | $H_o + H_\psi \psi$; determined by IFM |
| $G_{\max}$ | Small-strain shear modulus | $G_{ref}(p/p_o)^{G_{exp}}$ |
| CRR | Cyclic resistance ratio | $a - b \times \psi_o$ (linear fit to CSS data) |
| $\Gamma$ | CSL void ratio intercept | At $p' = 1$ kPa |
| $\lambda_{10}$ | CSL slope | In $e$-$\log_{10}(p')$ space |
| $M_{tc}$ | Critical friction ratio | Under triaxial compression |
| $N$ | Volumetric coupling parameter | Stress-dilatancy slope modifier |
| $\chi_{tc}$ | State-dilatancy coefficient | $D_{\min} / \psi$ at peak dilatancy |

## Connections to Practice

This chapter provides the procedural roadmap for conducting a critical state liquefaction assessment at [[Nataka TSF]] and related Kenmare facilities:

- **Laboratory programme for Nataka tailings:** A minimum of 20 PSDs should be run to establish the gradation bandwidth of the deposited tailings. From this, one or two representative gradations are selected. About 10 kg of each is blended from field samples, and the test programme in Table 9.1 is executed. The resulting five soil properties ($\Gamma$, $\lambda_{10}$, $M_{tc}$, $N$, $\chi_{tc}$) are then validated by fitting NorSand to the individual tests.
- **Nerlerk 270/1 as a reference sand:** The worked example throughout this chapter uses Nerlerk 270/1, a hydraulically placed submarine sand fill with $D_{50} = 270$ $\mu$m and 1.9% fines. This is a reasonable first analog for the coarser fraction of Nataka's placed tailings. The calibrated properties ($\Gamma = 0.855$, $\lambda_{10} = 0.048$, $M_{tc} = 1.27$, $N = 0.40$, $\chi_{tc} = 4.0$) provide initial bracketing values.
- **CPT specification for Nataka:** Specify CPTu with independent friction transducer, 10--20 MPa tip capacity, u2 piezometric measurement, and seismic capability. Request ASCII data with full header blocks. Use a 1 Hz scan rate minimum. Plan dissipation tests to establish the piezometric profile through the tailings stack.
- **State parameter processing:** Use *CPT_plot* Method 2 (soil properties-based) once laboratory testing is complete, or Method 4 (Plewes screening) for the initial assessment. Set $K_o = 0.7$ as the default for hydraulic fill. The output $\psi$ profiles directly indicate which zones are potentially liquefiable ($\psi > -0.05$) and which are adequately dense.
- **Cyclic strength for seismic assessment:** If seismic liquefaction is a concern at Nataka (which it may be given the site is in Mozambique), CSS testing on reconstituted tailings at representative $\psi$ values will define the CRR-$\psi$ trend. The linear coefficients $a$ and $b$ are then input to *CPT_plot* for continuous CRR profiling with depth.
- **Iterative forward modelling:** The NorSand spreadsheets (*NorSandTXL* for triaxial, *NorSandPSR* for cyclic simple shear) are freely available. Working through the calibration on Nataka's own test data -- fitting each drained test, checking undrained tests, extracting $H$ versus $\psi_o$ trends -- is the single most valuable investment of engineering time in a liquefaction study.
- **Compaction QA for Lift 1:** The [[state parameter]] framework connects directly to the Lift 1 construction. If the target is to achieve $\psi < -0.05$ in the compacted sand fill, then CPT soundings through the completed lift can verify whether this has been achieved. The density and stress conditions at each depth point are converted to $\psi$ using the measured CSL, providing a far more meaningful QA metric than relative density alone.

## Sources

- Jefferies, M.G. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapter 9 (pp. 401--437).
