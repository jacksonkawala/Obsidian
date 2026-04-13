---
title: "Chapter 4 — Determining State Parameter In-Situ"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, state-parameter, CPT, in-situ-testing, penetration-testing, calibration-chamber, cavity-expansion, NorSand, Ko, elasticity, shear-wave-velocity]
---

# Chapter 4 — Determining State Parameter In-Situ

## 4.1 Introduction

Cohesionless soils resist undisturbed sampling, so the engineering of sands and silts depends almost entirely on penetration tests. These tests are cheap, simple, and repeatable enough to characterise spatial variability across a site. The standard penetration test (SPT) dominated practice for decades, but over the past 35 years it has been progressively replaced by the cone penetration test (CPT), which offers a continuous digital record with far superior repeatability and accuracy.

A penetration test measures soil resistance to an enforced displacement. Recovering the soil properties and state from that resistance is an **inverse problem** -- the measured response is known while the input (properties and state) must be back-calculated. This chapter is devoted to the methods by which that inversion is carried out for the [[state parameter]] $\psi$.

Two alternative stress-normalisation philosophies have evolved:

- **Reference condition approach** -- map measured data to a reference stress level (common in North American SPT practice).
- **Dimensionless approach** -- express resistance as a dimensionless number normalised by effective stress. This is the preferred method for CPT data and is the core of this chapter.

## 4.2 SPT versus CPT

The SPT suffers from two fundamental problems: variable input energy and the dynamic nature of the test. Even with mechanised hammers and energy correction to $N_{60}$, adjacent borings only 2 m apart can show blow-count fluctuations exceeding $\pm$25% about the mean trend. The CPT, by contrast, provides excellent repeatability -- adjacent soundings 1.5 m apart show only occasional slight vertical offsets in layer boundaries.

Key CPT advantages:

- Standardised right-cylindrical geometry with 60-degree conical point
- Three independent data channels ($q_t$, $f_s$, $u_2$) for comprehensive soil characterisation
- Resolution down to 50 mm layer thickness versus the SPT's coarse 300 mm sampling interval
- Combined accuracy, non-linearity, and hysteresis close to transducer limits of 0.5% full scale (0.25 MPa)
- Digital recording with continuous depth profiling

A mapping between the two tests exists through the relationship:

$$
q_c = \alpha N_{60}
$$

where the coefficient $\alpha$ (MPa/blow) depends on soil type (grain size), ranging from roughly 1 at coarse silt to 10 at medium gravel.

## 4.3 The Inverse Problem -- A Simple Framework

The relationship between CPT resistance and the properties of the soil stratum takes the form:

$$
Q_p = f(\psi, G, \overline{\sigma}_v, M, \ldots)
$$

Inversion of this relationship is needed to recover the state:

$$
\psi = f^{-1}(Q_p, G, \overline{\sigma}_v, M, \ldots)
$$

There is always an information loss with inversion. Critically, there is only one measured quantity ($q_t$) and one equation, so it is algebraically impossible to extract all five independent soil properties from CPT penetration resistance alone -- those properties must be independently determined (from laboratory testing).

### Cavity expansion analogy

The simplest acceptable approximation for the forward problem is to combine **spherical cavity expansion theory** with a non-associated Mohr-Coulomb (NAMC) soil model. This combination gives a semi-closed-form solution for drained penetration. The Carter et al. (1986) solution for the limit spherical cavity expansion stress ratio $Q_p$ in a NAMC soil is:

$$
\frac{2G}{p_0} = \frac{n - 1}{n + 2}\left[T\left(\frac{Q_p}{R}\right)^{\!\gamma} - Z\frac{Q_p}{R}\right]
$$

where $n$, $R$, $T$, and $Z$ are functions of the four NAMC properties: shear modulus $G$, Poisson's ratio $\nu$, friction angle $\phi$, and dilation angle $\delta$. The modulus has been normalised to the dimensionless rigidity $I_r = G/p_o$.

### Stress-dilatancy and state parameter

Bolton's approximation for stress-dilatancy links friction and dilation:

$$
\phi = \phi_c + 0.8\delta
$$

The peak friction angle relates to the state parameter through:

$$
\phi = \phi_c\!\left(1 - \frac{5}{3}\,\psi\right) \quad \text{with } \phi_c = 32°
$$

Substituting into the cavity expansion solution gives a closed-form relationship between $Q_p$ and $\psi$ for given rigidity. This relationship is well approximated by the very simple exponential:

$$
Q_p = k\exp(-m\psi)
$$

Inverted to yield the state parameter:

$$
\psi = \frac{-\ln(Q_p / k)}{m}
$$

The interpretation parameters $k$ and $m$ depend on soil rigidity and intrinsic properties.

## 4.4 Calibration Chambers

### 4.4.1 Description

Calibration chambers (CCs) are large triaxial cells, typically about 1 m in diameter, in which sand is placed at a known density, consolidated under controlled stresses, and then penetrated by a standard CPT. They represent full-scale direct calibration of the CPT in sands and serve as the gold standard for developing the $Q_p$--$\psi$ inversion methodology.

### 4.4.2 Test programs and available data

CC studies have been conducted on at least 13 sands for which critical state lines are also known. Key sands include Monterey, Ticino (sands 1, 2, 4), Hokksund, Ottawa, Reid Bedford, Hilton Mines, Erksak, Syncrude Tailings, Yatesville silty sand, Chek Lap Kok, West Kowloon, Toyoura, and Sydney sand. Sands have been tested in both normally consolidated (NC) and over-consolidated (OC) states.

### 4.4.3 Chamber size effects

Chamber boundaries influence the CPT, especially in dense, dilatant sands. Corrections depend on the diameter ratio (CC diameter / cone diameter), sample density, boundary conditions, and intrinsic sand properties. State parameter-based correction factors (included in Appendix E of the textbook) are used in preference to purely empirical corrections.

## 4.5 Stress Normalisation

### 4.5.1 Vertical and horizontal stresses

CPT resistance is a strong function of stress level. At constant $\psi$, tip resistance is broadly proportional to mean effective stress. Experimental work by Clayton et al. (1985) showed that horizontal stress has twice the influence of vertical stress on penetration resistance, which means the correct normalising stress is the **mean effective stress**:

$$
p' = \frac{\sigma'_v(1 + 2K_o)}{3}
$$

### 4.5.2 Reference condition approach

The reference condition approach maps penetration data to an equivalent resistance at a reference stress (typically $\sigma_{ref} = 100$ kPa). For the SPT:

$$
N_1 = C_N N
$$

where:

$$
C_N = \left(\frac{\sigma'_v}{\sigma_{ref}}\right)^{\!-n} \quad \text{with } n = 0.5 \text{ for SPT}
$$

For the CPT, $C_Q = C_N$ with the exponent $n$ ranging from 0.5 (sands) to 1.0 (clays). The reference condition approach is criticised for several reasons:

- It maps to a condition that is not the in-situ condition
- The variable exponent $n$ conflates soil type with the actual controlling factor (elastic shear modulus)
- Horizontal stress effects are ignored
- It does not lend itself to a theoretically grounded framework

### 4.5.3 Linear stress normalisation

The preferred alternative is to express the penetration resistance as a dimensionless number:

$$
Q_p = \frac{q_t - p_o}{p'_o} \approx \frac{q_t}{p'_o}
$$

Radial lines from the origin on a $(q_c - p)$ versus $p'$ plot represent constant $Q_p$, and lines of constant $\psi$ are well captured. This dimensionless normalisation removes the need for stress corrections or exponents.

## 4.6 Determining $\psi$ from CPT

### 4.6.1 Original method

The methodology was established in two papers by Been et al. (1986, 1987c) using the CC database. The key finding is that plotting $Q_p$ against $\psi$ on a semi-log plot gives a simple exponential relationship with remarkably little scatter:

$$
Q_p = k\exp(-m\psi)
$$

This form fits every sand in the CC database. The parameters $k$ and $m$ are sand-specific constants that are simple functions of the slope of the critical state line, $\lambda_{10}$:

$$
k = 8 + \frac{0.55}{\lambda_{10} - 0.01}
$$

$$
m = 8.1 - 2.3\log\lambda_{10}
$$

Combining these with the inversion equation recovers the initial state of any CC test with an error of less than $\Delta\psi \pm 0.05$ at 90% confidence.

### 4.6.2 Stress-level bias

Careful examination of CC data reveals a stress-level bias in the $Q_p$--$\psi$ relationship. For Ticino sand, trend lines drawn through data at six different confining stress intervals differ from the overall trend. At $Q_p = 100$, the inferred state at 400 kPa mean stress would be approximately $\psi = -0.19$, whereas at 40 kPa it would be $\psi = -0.10$ -- an actual error of $\Delta\psi \approx -0.05$. The cause is the missing dimensionless group: elastic soil rigidity $I_r = G/p_o$.

### 4.6.3 Simulations with NorSand

Shuttle and Jefferies (1998) used cavity expansion analysis with the [[NorSand]] model to develop a universal framework that accounts for the stress-level bias. Their numerical simulations showed that:

- $Q_p$ is nearly linear in $\psi$ at constant modulus (confirming the exponential approximation)
- Changing the ratio $G/p_o$ while holding $I_r$ constant places results back on the same trend line
- The stress-level bias is entirely explained by the variation of rigidity $I_r$ with stress level

The variation of $k$ and $m$ with rigidity is:

$$
k = 6.2\ln(I_r) - 8
$$

$$
m = 1.8 + 0.9\ln(I_r)
$$

### 4.6.4 Complete framework -- general inversion

Shuttle and Jefferies extended the simulations to examine the effect of each NorSand parameter ($M$, $H$, $N$, $\lambda$) on the penetration resistance. The key findings:

- Both $k$ and $m$ are strong functions of rigidity and plastic hardening modulus $H$
- $M$ (critical friction ratio) has a moderate effect
- $N$ (stress-dilatancy parameter) and $\lambda$ (CSL slope) have weak influence
- Poisson's ratio has essentially no effect

The approximate general inverse form is:

$$
k = \left(f_1\!\left(\frac{G}{p_o}\right) f_2(M) f_3(N) f_4(H) f_5(\lambda) f_6(\nu)\right)^{\!1.45}
$$

$$
m = 1.45\, f_7\!\left(\frac{G}{p_o}\right) f_8(M) f_9(N) f_{10}(H) f_{11}(\lambda) f_{12}(\nu)
$$

| Symbol | Name | Definition |
|--------|------|------------|
| $f_1(G/p_o)$ | Rigidity function for $k$ | $3.79 + 1.12\ln(G/p')$ |
| $f_2(M)$ | Friction ratio function for $k$ | $1 + 1.06(M - 1.25)$ |
| $f_3(N)$ | Dilatancy parameter function for $k$ | $1 - 0.30(N - 0.2)$ |
| $f_4(H)$ | Hardening modulus function for $k$ | $(H/100)^{0.326}$ |
| $f_5(\lambda)$ | CSL slope function for $k$ | $1 - 1.55(\lambda - 0.01)$ |
| $f_6(\nu)$ | Poisson's ratio function for $k$ | Unity |
| $f_7(G/p_o)$ | Rigidity function for $m$ | $1.04 + 0.46\ln(G/p')$ |
| $f_8(M)$ | Friction ratio function for $m$ | $1 - 0.40(M - 1.25)$ |
| $f_9(N)$ | Dilatancy parameter function for $m$ | $1 - 0.30(N - 0.2)$ |
| $f_{10}(H)$ | Hardening modulus function for $m$ | $(H/100)^{0.15}$ |
| $f_{11}(\lambda)$ | CSL slope function for $m$ | $1 - 2.21(\lambda - 0.01)$ |
| $f_{12}(\nu)$ | Poisson's ratio function for $m$ | Unity |

This general inversion recovers $\psi$ with an accuracy of $\pm 0.02$ when validated against full numerical simulations on 10 randomly generated sand property sets.

## 4.7 Moving from Calibration Chambers to Real Sands

### 4.7.1 Material variability and fines content

Real soils exhibit variability that CC tests on uniform sand do not capture. Even under strict quality assurance, silt content in hydraulic fills fluctuates between 1% and 7%. Small changes in fines content cause substantial shifts in the CSL slope $\lambda$ and in turn change the critical friction ratio $M$, the compressibility, and the plastic hardening $H$, all of which decrease the CPT resistance for finer-grained soils.

Two approaches exist for handling fine-grained cohesionless soils:

1. Measure the soil properties in the laboratory and compute CPT inversion coefficients using cavity expansion theory (the theoretical approach). For undrained penetration, the Shuttle and Cunning (2007) extension of NorSand cavity expansion is required.
2. Rely on the soil behaviour-type index from the CPT friction and pore pressure data to estimate soil type. This is only a screening-level approximation.

### 4.7.2 Soil behaviour-type index

The soil behaviour-type index $I_c$ transforms the CPT classification chart into a single continuous number:

$$
I_c = \sqrt{(3 - \log(Q(1 - B_q) + 1))^2 + (1.5 + 1.3\log(F))^2}
$$

| Symbol | Name | Definition |
|--------|------|------------|
| $I_c$ | Soil behaviour-type index | Radius in the transformed classification chart |
| $Q$ | Normalised tip resistance | $(q_t - \sigma_{vo})/\sigma'_{vo}$ |
| $B_q$ | Normalised excess pore pressure | $(u - u_o)/(q_t - \sigma_{vo})$ |
| $F$ | Normalised friction ratio | $f_s/(q_t - \sigma_{vo}) \times 100\%$ |

| Soil type | Chart zone | $I_c$ range |
|-----------|-----------|-------------|
| Gravelly sands | 7 | $I_c < 1.25$ |
| Sands: clean to silty | 6 | $1.25 < I_c < 1.80$ |
| Silty sand to sandy silt | 5 | $1.80 < I_c < 2.40$ |
| Clayey silt to silty clay | 4 | $2.40 < I_c < 2.76$ |
| Clays | 3 | $2.76 < I_c < 3.22$ |
| Organic soils | 2 | $I_c > 3.22$ |

### 4.7.3 Theoretical approach using cavity expansion

The cavity expansion approach using laboratory-derived soil properties ($H$, $M$, $\lambda$, $G_{\max}$, $K_o$) gives the most precise CPT inversion. For drained penetration, $k$ and $m$ are computed from the general inversion (Equations 4.12a/b and Table 4.3). For undrained penetration ($B_q > 0$), Shuttle and Cunning (2007) extended the framework, yielding an effective stress version:

$$
Q_p(1 - B_q) + 1 = \bar{k}\exp(-\bar{m}\psi)
$$

where $\bar{k}$ and $\bar{m}$ use the bar notation to distinguish them from the drained coefficients.

### 4.7.4 Screening-level assessment

For a rapid first pass using CPT data alone, the friction ratio $F$ provides a surprisingly accurate estimate of $\lambda_{10}$:

$$
\lambda_{10} = \frac{F}{10} \quad \text{(with } F \text{ in \%)}
$$

Combined with the effective inversion equation and the relationships:

$$
\frac{\bar{k}}{M} = 3 + \frac{0.85}{\lambda_{10}}
$$

$$
\bar{m} = 11.9 - 13.3\lambda_{10}
$$

this gives a screening-level liquefaction assessment chart that simultaneously shows $I_c$ contours and approximate $\psi$ contours on the soil behaviour-type classification chart.

### 4.7.5 Interbedded strata

The CPT is affected by soil above and below the penetrometer. The influence zone extends about 150 mm from the boundary between strata. Thin layers (less than 0.5 m) may require correction, but in practice, engineering assessments are generally developed from data obtained away from layer transitions. This gives satisfactory results provided layers are thicker than about 0.6 m and the stiffness ratio between materials is less than five.

### 4.7.6 CPT inversion software

The downloadable spreadsheet *CPT_plot.xls* implements the entire methodology. Chapter 9 provides a detailed walkthrough. Four methods are available for computing $k$, $m$ or $\bar{k}$, $\bar{m}$:

- Method 1: Specify $k$, $m$ directly from CC data
- Method 2: Compute from soil properties via Shuttle and Jefferies (1998)
- Method 3: Specify $\bar{k}$, $\bar{m}$ for silts via Shuttle and Cunning (2007)
- Method 4 (Plewes screening): Estimate $\lambda$ from $F$ and use Equations 4.15a/b

## 4.8 Elasticity In-Situ

The elastic shear modulus $G$ (often called $G_{\max}$) is needed to minimise uncertainty in the CPT inversion. It is fabric-dependent and cannot be reliably estimated from laboratory testing alone -- it must be measured in-situ.

The general model for the variation of $G$ with stress level is:

$$
G = G_{ref}\!\left(\frac{p'}{p_{ref}}\right)^{\!n}
$$

where $G_{ref}$ is the modulus at a reference stress $p_{ref}$ (conventionally 100 kPa) and $n$ ranges from 0 (constant modulus) to 1 (modulus proportional to stress). For sands, $n \approx 0.5$; for clays, $n \approx 1$.

### Measurement methods

Two approaches for measuring $G$ in-situ:

1. **Self-bored pressuremeter (SBP):** The expansion pressure versus hoop strain relationship under elastic conditions gives $2G$ directly. Provides point estimates, with substantial place-to-place variation ($\pm$50% of best-fit trend).

2. **Shear wave velocity ($V_s$):** The standard relationship is:

$$
G = \rho V_s^2
$$

Methods for measuring $V_s$ include cross-hole testing, vertical seismic profiling (VSP), and the seismic cone (SCPT). The seismic cone is the most convenient: a geophone mounted in the penetrometer records shear wave arrivals during standard 1 m rod breaks. Using two geophones 1 m apart within the cone eliminates the need for borehole surveys.

For tailings deposits, seismic CPT data show strong layering effects. Shear wave velocity increases consistently with depth, typically following the power law $G \propto (p'/p_{ref})^n$ with $n$ in the range 0.5--0.8.

## 4.9 Horizontal Geostatic Stress

### 4.9.1 Geostatic stress ratio $K_o$

Penetration tests respond to mean effective stress, which requires knowledge of the horizontal stress through the geostatic stress ratio $K_o = \sigma'_h/\sigma'_v$. The commonly used Jaky equation:

$$
K_o = 1 - \sin(\phi')
$$

is fundamentally unsuited for this purpose. It predicts $K_o \approx 0.45$ for loose, normally consolidated conditions, whereas in-situ measurements in hydraulic fills consistently show $K_o \approx 0.7$, bounded by roughly 0.45 on the low side and 1.3 on the high side.

A mechanically sounder estimate comes from the elastic model for confined (zero lateral displacement) compression:

$$
K' = \frac{\nu}{1 - \nu}
$$

For typical Poisson's ratios ($0.2 < \nu < 0.3$), this gives $0.25 < K' < 0.45$. In practice, $K_o$ differs from $K'$ because geologic processes (cyclic loading, creep, ageing) cause $K_o$ to evolve. Laboratory studies show that even minor cyclic loading can double $K_o$ from its as-placed value.

### 4.9.2 Measurement with SBP

The self-bored pressuremeter provides the most practical means of determining $K_o$ in-situ. Two interpretation methods exist:

- **Lift-off method:** Identify the pressure at which cavity expansion begins (membrane lifts off the borehole wall). Simple but imprecise.
- **Iterative forward modelling (IFM):** Fit the entire SBP curve using NorSand within a finite element model. More precise but computationally expensive. IFM on Molikpaq core tests gave $0.6 < K_o < 1.0$.

### 4.9.3 Horizontal stress CPT

The horizontal stress sensing cone test, with strain gauges on the friction sleeve measuring hoop strain during penetration, provides a continuous $\sigma_h$ profile. The amplification factor $A = \sigma'_{hc}/\sigma'_{ho}$ relates measured and true horizontal stresses:

$$
A = a\exp(-b\psi)
$$

Combined with Equation 4.7, a "linear algorithm" eliminates $\psi$:

$$
K_o = \frac{1}{2 - (3a/k)(q_c/\sigma'_{hc})}
$$

Field data show more stable results than CC data, presumably because the field application uses continuous measurement at 10 mm intervals rather than discrete CC picks.

### 4.9.4 Importance of measuring $K_o$

Uncertainty in horizontal stress propagates into uncertainty in $\psi$. The relationship is nonlinear: up to $\xi \approx 0.2$ (20% error in $\sigma'_h$), the added uncertainty in $\psi$ is negligible. Beyond $\xi = 0.6$, the uncertainty rises to $\pm 0.05$. Since the Jaky equation underestimates $K_o$ by roughly a factor of two (corresponding to $\xi \approx 1$), its use is not conservative for determining $\psi$ from the CPT. Measure $K_o$ with an SBP wherever possible.

## 4.10 Alternative In-Situ Tests

### 4.10.1 Self-bored pressuremeter

The SBP is the only in-situ test for which theory can be applied to the test data directly, with no need for correlations. Dilation can be estimated from the expansion curve using Hughes et al. (1977):

$$
\sin\delta = \frac{1 - R_c(1 - 2S)}{1 + R_c}
$$

where $S$ is the slope of the log(pressure) versus log(cavity strain) curve and $R_c$ is the critical stress ratio. However, there are four significant limitations with this small-strain analysis: the strain offset $c$ is subjective; elastic strains in the plastic zone are neglected; the analysis is small-strain only; and finite pressuremeter length effects are ignored. IFM with NorSand resolves all these issues.

For standard commercial SBP geometry ($L/D \approx 6$), the state parameter can be estimated as a first approximation by:

$$
\psi = 0.59 - 2.2S^6 + 0.107S^6\ln(I_r)
$$

### 4.10.2 Flat plate dilatometer

The flat plate dilatometer (DMT) shows some dependence of the pressure ratio $(P_1 - P_o)/p'$ on state parameter in Ottawa sand. However, much more development is needed before DMT data can be reliably used for liquefaction assessments.

### 4.10.3 Using the SPT database

A mapping from CPT to $N_{60}$ allows use of the extensive historical SPT database. The methodology by Jefferies and Davies (1993) uses soil behaviour-type index $I_c$ to compute the coefficient $\alpha$ as a linear function:

$$
\alpha = 0.85\!\left(1 - \frac{I_c}{4.75}\right) \text{ MPa/blow}
$$

## 4.11 Commentary on State Determination Using the CPT

Three fundamental reasons make determining the in-situ $\psi$ (rather than working directly from penetration resistance) essential:

1. Soil properties affect the CPT differently from how they affect liquefaction resistance, so penetration data will not scale between case histories without computing $\psi$.
2. Working in terms of $\psi$ is the simplest and best method to remove the effects of soil gradation on liquefaction strengths.
3. The state parameter underlies every good model for sand behaviour -- it is needed for any general evaluation of soil-structure interaction, not only liquefaction.

The chapter closes by emphasising that the critical state approach is no longer a matter of academic opinion; it is a proven methodology backed by extensive calibration chamber data, rigorous numerical modelling, and field validation across many soil types.

## Key Equations Summary

| Symbol | Name | Definition |
|--------|------|------------|
| $\psi$ | State parameter | $e - e_c$ at current $p'$ |
| $Q_p$ | Normalised tip resistance (by $p'$) | $(q_t - p_o)/p'_o$ |
| $Q$ | Normalised tip resistance (by $\sigma'_v$) | $(q_t - \sigma_{vo})/\sigma'_{vo}$ |
| $F$ | Normalised friction ratio | $f_s/(q_t - \sigma_{vo}) \times 100\%$ |
| $B_q$ | Normalised excess pore pressure | $(u - u_o)/(q_t - \sigma_{vo})$ |
| $I_c$ | Soil behaviour-type index | Radius on transformed classification chart |
| $I_r$ | Dimensionless rigidity | $G/p'_o$ |
| $k$, $m$ | Drained CPT inversion coefficients | Functions of $I_r$, $M$, $H$, $N$, $\lambda$ |
| $\bar{k}$, $\bar{m}$ | Effective inversion coefficients | Undrained/partially drained extension |
| $K_o$ | Geostatic stress ratio | $\sigma'_h / \sigma'_v$ |
| $G_{\max}$ | Small-strain shear modulus | $\rho V_s^2$ |
| $C_N$ | Stress normalisation factor (SPT) | $(\sigma'_v / \sigma_{ref})^{-n}$ |
| $\alpha$ | CPT-SPT mapping coefficient | $q_c / N_{60}$, depends on soil type |
| $\lambda_{10}$ | Slope of CSL in $e$-$\log_{10}(p')$ space | Intrinsic soil property |

## Connections to Practice

The methods in this chapter apply directly to geotechnical investigations at [[Nataka TSF]] and Kenmare's broader facility network:

- **CPT as primary investigation tool:** The [[Nataka TSF]] foundation and placed tailings should be characterised using CPTu (with piezometric measurement at the u2 location). The framework presented here converts raw CPT data into continuous $\psi$ profiles, which directly inform whether the tailings are in a potentially liquefiable state ($\psi > -0.05$).
- **Seismic cone for $G_{\max}$:** Specifying a seismic cone (SCPT) provides the shear wave velocity data needed to compute $I_r$ and remove stress-level bias from the CPT inversion. This is especially important for the layered sand/silt tailings at Nataka, where $G_{\max}$ varies substantially with depth and soil type.
- **$K_o$ measurement:** The Jaky equation underestimates $K_o$ by roughly a factor of two in hydraulic fills. For Nataka's hydraulically deposited tailings, $K_o \approx 0.7$ is a far more reasonable starting estimate. SBP testing would refine this further if the project progresses to detailed liquefaction assessment.
- **Screening assessment using $I_c$ and $F$:** For a rapid initial assessment, the Plewes screening method (Method 4 in *CPT_plot*) uses the friction ratio to estimate $\lambda_{10}$ and thereby determine $\psi$ from CPT data alone. This is the appropriate first pass before investing in laboratory testing.
- **Fines content variability:** The discussion of how small changes in silt content shift $\lambda$, $M$, and $H$ is directly relevant to Nataka's cycloned versus non-cycloned tailings. When specifying a laboratory testing programme, gradation bandwidth analysis (Section 9.3.1) should guide the selection of representative samples.
- **Lift 1 compaction assessment:** CPT soundings through the completed Lift 1 fill would establish the achieved [[state parameter]] profile and confirm whether the compacted sand layers have $\psi < -0.05$ (the approximate threshold for adequate cyclic resistance).

## Sources

- Jefferies, M.G. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapter 4 (pp. 143--201).
