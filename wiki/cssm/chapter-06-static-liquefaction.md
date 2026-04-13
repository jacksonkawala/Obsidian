---
title: "Chapter 6 — Static Liquefaction and Post-Liquefaction Strength"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, static-liquefaction, post-liquefaction, residual-strength, norsand, state-parameter, collapse-surface, instability-locus, undrained, brittleness, steady-state, strain-localization, case-histories]
---

# Chapter 6 — Static Liquefaction and Post-Liquefaction Strength

Study notes on Chapter 6 of *Soil Liquefaction: A Critical State Approach* (2nd ed.) by Mike Jefferies and Ken Been. This is the pivotal chapter that takes the drained constitutive framework built in [[chapter-03-constitutive-modelling|Chapter 3]] and applies it to undrained failure -- the phenomenon that has killed hundreds of people and caused billions of dollars in damage. It also addresses the single most important question facing engineers after a liquefaction assessment: what residual strength can be relied upon?

---

## 6.1 Introduction

### Why Start with Static Liquefaction?

Static liquefaction controls stability even when the loading is cyclic. If the residual strength after cyclic pore pressure generation is adequate, then the cyclic loading is merely a fatigue-like nuisance, not a catastrophe. Furthermore, static liquefaction is conceptually straightforward -- it requires no new models or soil properties beyond those established under drained conditions. It sits entirely within the [[chapter-02-dilatancy|state parameter]] framework.

### Two Practical Situations

Two situations of practical interest arise with static liquefaction:

1. **Monotonic shear failure.** The stress ratio $\eta$ increases -- either through rising deviator stress (e.g. slope steepening, erosion at the toe) or through decreasing mean effective stress (e.g. seepage pressures, as at [[chapter-01-introduction|Aberfan]]). If the soil is sufficiently loose, brittle undrained failure ensues.
2. **Post-earthquake liquefaction.** Cyclically generated excess pore pressures reduce the effective stress below the level at which the soil can support the applied shear stress. Even if the cyclic pressures do not cause outright failure, dissipation and redistribution during shaking can trigger delayed movement (as at [[chapter-01-introduction|Lower San Fernando Dam]], which did not start slipping until about 30 s after shaking ceased).

### Undrained Strength Versus Residual Strength

The peak undrained strength is denoted $s_u$ and the fully softened (large-displacement) strength is $s_r$. The peak strength at the onset of liquefaction is denoted $s_{u,p}$. The difference between $s_u$ and $s_r$ is the soil's brittleness. If $s_r$ is less than the drained strength, a flowslide is possible, and determining $s_r$ becomes of critical practical interest.

Undrained conditions are an imposed boundary effect in the laboratory (closing a valve) and a consequence of drainage time in the field. The underlying soil behaviour remains governed by effective stresses and drained properties.

---

## 6.2 Data from Laboratory Experiments

### 6.2.1 Triaxial Compression

Undrained triaxial compression tests on reconstituted Erksak sand (Figure 6.1) demonstrate the essential phenomena. For samples looser than the CSL ($\psi_o > 0$), the stress paths are similar: brittle post-peak behaviour, with strength falling rapidly to a small fraction of the peak. The strength falls rapidly with strain and can reach the critical state in as little as 5% axial strain for very loose soils.

For samples initially denser than critical ($\psi_o < 0$), dilation dominates at large strains. The undrained strength measured in the test then depends on the strain to which the soil is loaded, the back pressure in the test cell, and whether sufficient back pressure exists to prevent cavitation of the pore fluid.

The same brittle, contractive-then-dilative patterns appear in Ticino sand, Bennett Dam silty sand (31% fines), and Guindon Tailings (65% fines). Liquefaction is not restricted to clean sands -- any soil that can be prepared loose enough to have a substantially positive state parameter will liquefy. What matters is the soil's state ($\psi$), not its fines fraction.

### 6.2.2 Triaxial Extension

Extension tests on Erksak sand exhibit the same fundamental behaviour: samples with $\psi_o > 0$ show brittle post-peak strength reductions, with brittleness increasing at more positive states. The peak strength in extension is markedly less than in compression, which is not surprising because $M$ is lower in extension. After normalizing by initial confining stress, the effective stress paths in compression and extension have similar shapes but different peak strengths.

Plotting both compression and extension test data in $e$--$\log p'$ space (Figure 6.7) confirms that there is no effect of stress path on the critical state locus within an experimental precision of about $\Delta e = \pm 0.005$.

### 6.2.3 Simple Shear

Simple shear tests on Bonnie silt (from the VELACS project) at 80 kPa initial stress show behaviour very similar to triaxial results: initial contraction, followed by dilation, with the end stresses lying on a critical friction ratio of $M_{ps} \approx 1.16$ (smaller than $M_{tc}$ due to the intermediate principal stress effect, see [[chapter-03-constitutive-modelling|Chapter 3]]).

### 6.2.4 Plane Strain Compression

Plane strain tests on Changi sand (a marine-dredged silica sand containing about 12% shells) show liquefaction behaviour similar to triaxial compression. The loading path is different (drained to a $K_o$ condition, then sheared undrained), but the essential pattern of instability near the critical stress ratio is the same.

---

## 6.3 Trends in Laboratory Data for $s_u$ and $s_r$

### Normalized Undrained Strength Ratio

Because the undrained response of loose soils is uniformly similar, stress paths can be characterized by their peak undrained strength and the pore pressure at which peak strength is reached. The critical state provides a convenient normalizing stress. The undrained strength is normalized as:

$$
\frac{s_u}{p'_o} = \frac{(q_{\max}/2)}{\sigma'_{3c}} = \frac{(\sigma_1 - \sigma_3)_{\max}}{2\sigma'_{3c}} \tag{6.1}
$$

The pore pressure parameter $A_f$ at failure is defined as:

$$
A_f = \frac{\Delta u}{\Delta \sigma'_1} \tag{6.2}
$$

Figure 6.10 shows $s_u/p'_o$ for about 25 different sands as a function of $\psi$. A broad trend is evident: $s_u/p'_o > 0.15$ even when the sample is rather loose ($\psi = +0.05$), rising to $s_u/p'_o \approx 0.30$ at the critical state ($\psi = 0$). These values align closely with Wroth's (1984) analysis of normally consolidated clays, reinforcing a fundamental similarity between undrained strength ratios in sands and clays.

### Wroth's Framework

Wroth developed a relationship for undrained strength of normally consolidated clay:

$$
\frac{s_u}{p'_o} = \frac{M}{2}\left(\frac{R}{r}\right)^{\lambda} \approx \frac{M}{2}\left(\frac{1}{2}\right)^{0.8} \tag{6.3}
$$

where $R$ is the over-consolidation ratio (set to 1 for normal consolidation), $r$ is the spacing ratio, and $\lambda = (1 - \kappa/\lambda)$. For $M = 1.25$, this gives a normally consolidated strength ratio of about 0.35.

### Residual Strength and Brittleness

Extending Wroth's framework using $\psi_o/\lambda$ as a normalizing group yields the residual strength at the critical state:

$$
\frac{s_r}{p'_o} = \frac{M}{2}\exp\!\left(\frac{\psi_o}{\lambda}\right) \tag{6.4}
$$

The brittleness index, defined by Bishop as:

$$
I_B = \frac{s_u - s_r}{s_u} \tag{6.5}
$$

demonstrates that brittleness arises only when $\psi_o/\lambda_e > 0.7$, which is a restatement of the limit of normally consolidated behaviour. As $\psi_o/\lambda$ increases beyond 0.7, brittleness develops rapidly (Figure 6.14).

---

## 6.4 Nature of Static Liquefaction

### The Collapse Surface Myth

The observation that static liquefaction involves a substantial brittle strength drop led many workers to attribute it to the "collapse" of a metastable particle arrangement. The locus of peak strengths from tests at different confining stresses was termed the "collapse surface" (Sladen et al., 1985b) or "instability line" (Alarcon et al., 1988; Ishihara, 1993).

Both frameworks invoke a sudden structural breakdown at the peak, but detailed examination of test G609 (Erksak sand, $\psi_o = +0.068$) reveals the opposite:

- Excess pore pressure is generated smoothly throughout the loading; there is no inflection point at peak strength
- The stress ratio (mobilized $\eta$) increases smoothly with strain; the soil is indifferent to crossing the supposed "collapse surface"
- In drained tests on even looser Erksak sand (D684, $e = 0.82$, $\psi_o = 0.075$), the sand passes through the collapse surface friction ratio without any change in behaviour

**Soil liquefaction is not the result of metastable particle arrangements collapsing.** It is constitutive behaviour that follows naturally from the mechanics of shear-induced pore pressure generation in loose soils.

---

## 6.5 Undrained *NorSand*

### 6.5.1 Representing the Undrained Condition

The basic condition for undrained loading, neglecting elastic compressibility of soil particles and pore water, is:

$$
\dot{\varepsilon}_v = 0 \Leftrightarrow \dot{\varepsilon}^p_v = -\dot{\varepsilon}^e_v \tag{6.6}
$$

Zero overall volumetric strain does not mean zero plastic strain -- plastic and elastic volumetric strains must simply balance. Undrained loading is a boundary condition effect, not a fundamental aspect of constitutive behaviour. *NorSand* models it by computing plastic strains exactly as in the drained case, then invoking (6.6) to determine the resulting pore pressure. The change in mean effective stress follows from the elastic bulk modulus:

$$
\dot{p} = -\dot{\varepsilon}^p_v K \tag{6.7}
$$

The elastic bulk modulus $K$ is related to the shear modulus $G$ through:

$$
K = \frac{2(1+\nu)}{3(1-2\nu)}G \tag{6.8}
$$

### 6.5.2 Simulation of Undrained Behaviour

*NorSand* replicates the full spectrum of undrained behaviour using drained calibrations alone. Figure 6.19 compares *NorSand* against three undrained tests spanning highly contractive ($\psi_o = +0.068$, test C609) to lightly dilatant ($\psi_o = -0.08$, test C634) behaviour. Good fits are achieved in every case, including the characteristic extreme post-peak strength drop of very loose samples. The fit parameters ($H$ and $I_r$) vary around the drained calibration values, with all other properties unchanged.

### 6.5.3 How *NorSand* Models Liquefaction

*NorSand* characterizes yield surface size through two parameters: $M_i$ sets the deviatoric extent, and $p_i$ determines the absolute size (image mean stress). The hardening limit on $p_i$ is given by:

$$
\left(\frac{p_i}{p}\right)_{\max} = \exp\!\left(\frac{-\chi_{tc}\psi_i}{M_{tc}}\right) \tag{3.35\,bis}
$$

For loose soils ($\psi > 0$), this term is less than unity, which limits the rate at which the yield surface can harden. Although the stress ratio $\eta$ continues to increase, the rate of hardening slows and eventually the rate of excess pore pressure generation exceeds the rate of shear strength gain. The deviator stress begins to drop. The yield surface must soften (contract) to the critical state.

This is not remotely like a collapse surface. It is a hardening limit that also controls dilatant behaviour in dense soil. There is no special mechanism introduced for liquefaction.

### 6.5.4 Effect of Soil Properties and State on Liquefaction

Systematic parameter studies using *NorSand* reveal:

- **Elastic rigidity ($I_r$):** Increasing $I_r$ significantly *decreases* peak undrained strength in loose soils (about 30% reduction for a doubling of stiffness) because a stiffer elastic skeleton requires larger elastic volumetric strains to balance the same plastic contraction, which drives pore pressures higher. In denser soils the effect is more subtle -- stiffer soil gains dilatant strength more quickly after the phase change.
- **Plastic hardening modulus ($H$):** Larger $H$ produces *greater* peak undrained strength in loose soils and more markedly brittle post-peak behaviour. In denser soils, increased $H$ accelerates the transition from contraction to dilation.
- **$H/I_r$ ratio:** Peak undrained strength (i.e. the onset of liquefaction) is primarily controlled by the ratio of plastic hardening to elastic rigidity (Figure 6.22). The instability stress ratio varies from $\eta_L = 0.75$ to $\eta_L = 1.0$ depending on this ratio.

The practical consequence: peak undrained shear strength is not simply a frictional property. It depends strongly on the elastic stiffness and plastic hardening of the sand during shear. The instability line and collapse surface are not soil properties -- they shift with changes in moduli.

---

## 6.6 Understanding from *NorSand*

### 6.6.1 Uniqueness of Critical State

*NorSand* simulations of triaxial compression confirm that although drained and undrained tests suggest apparently different critical state lines ("S" and "F" lines in the literature), these differences arise from incomplete approach to the critical state within the strain limits of the triaxial apparatus. Both test types use the same unique CSL within the model (Figure 6.23).

### 6.6.2 Instability Locus

The instability locus (IL) emerges naturally from *NorSand* without any explicit concept of collapse. When simulating different $K_o$ loading paths that transition to undrained shearing, the IL appears as a straight line through the peak strengths (Figure 6.25). However, this line shifts with changes in soil moduli ($H$ and $I_r$), demonstrating that the IL is not a soil property. Instability is caused by drainage conditions, not by metastable soil fabric.

### 6.6.3 Effect of Fines Content

Fines content affects liquefaction primarily through compressibility, not through the state parameter framework itself. The critical state line slope $\lambda$ may increase with fines content, but the relationship between $\psi$ and behaviour remains the same. *NorSand* fits test data on Rose Creek impoundment soils (30% and 67% fines) without any fines-specific correction -- just the correct CSL for each gradation (Figure 6.28).

### 6.6.4 Liquefaction in Triaxial Extension

*NorSand* replicates extension behaviour (test CIUE-G642 on Erksak sand) using the same calibration developed in compression, with no parameter changes (Figure 6.29). Two effects explain the good prediction: the critical friction ratio $M$ varies with the Lode angle (Chapter 2 and Appendix C), and dilatancy differs between compression and extension because of the change in symmetry of the strain invariants ($\varepsilon_2 = \varepsilon_3$ in compression versus $\varepsilon_2 = \varepsilon_1$ in extension).

### 6.6.5 Liquefaction with Constant Deviator and Reducing Mean Stress

The CSD (constant shear drained) loading path is the mechanism behind slope failures triggered by rising pore pressures -- exactly what happened at Aberfan. In this path, $\eta$ increases because $p'$ decreases rather than because $q$ increases. Test data on dense Fraser River sand (Figure 6.31) show three key points:

- **Point A:** Initial loading to $\eta = 0.5$ under constant mean stress
- **Point B:** The elastic limit -- identified by a change in the volumetric strain pattern. Mobilized $\eta = 1.08$, well below $M$
- **Point C:** The limiting stress ratio is reached ($\eta_{\max} \approx M_{tc}$), followed by runaway failure

*NorSand* yield surfaces superimposed on the measured CSD path (Figure 6.32) show the softened yield surface from cap yielding coinciding exactly with the onset of failure. The practical implication: be very cautious with the observational method when the stress path is near a CSD path. There will be very little observable warning before catastrophic failure -- exactly what happened at Aberfan.

### 6.6.6 Pseudo-Steady State

The pseudo-steady state (phase change condition) is the temporary state when the rate of excess pore pressure change becomes zero. *NorSand* simulations (Figure 6.34) show that the pseudo-steady state is simply a transient artifact of the elastic rigidity $I_r$ -- both simulations have the same unique critical state at $p'_c = 502$ kPa, but pseudo-steady states occur at $p' = 60$ kPa and $p' = 85$ kPa depending on $I_r$. Confusing the pseudo-steady state with the critical state introduces errors of a factor of 6--8 in estimating $p'_c$. It is a conceptual error to use the pseudo-steady state as a reference state.

---

## 6.7 Plane Strain Versus Triaxial Conditions

Simple shear is a better laboratory analogue for field conditions than triaxial tests. *NorSand* simulations of undrained simple shear (Figure 6.35) fit measured "undisturbed" silt behaviour from Coquitlam Dam well. The effect of initial geostatic stress ratio $K_o$ on undrained strength in simple shear is significant (Figure 6.36).

Computed undrained strength ratios ($s_u/p'_o$) from *NorSand* simulations show that:

- Simple shear strengths are about 5% less than triaxial compression strengths when normalized by mean effective stress
- The difference is much larger when normalized by vertical effective stress (the common field convention)
- The ranking is: triaxial compression > simple shear > triaxial extension

---

## 6.8 Steady-State Approach to Liquefaction

### 6.8.1 Basic Premise

The steady-state school (Poulos, 1981; Poulos et al., 1985) asserts that the undrained steady-state strength is an assured minimum. If a structure is stable under this minimum strength, then liquefaction is not a concern. The approach uses a five-step procedure:

1. Determine the in-situ void ratio
2. Determine the CSL using reconstituted specimens
3. Determine the steady state for undisturbed specimens
4. Correct the measured strengths to the in-situ void ratio
5. Calculate the factor of safety

The key strength equation is:

$$
s_r = p'_c \cdot \frac{M}{2} \tag{6.9}
$$

### 6.8.2 Validation at Lower San Fernando Dam

The steady-state procedures were evaluated through the 1985 comparative back-analysis of the Lower San Fernando Dam failure. Three independent groups (GEI, Seed group, Dobry group) estimated residual strengths ranging from 150 to 2000 psf, with averages of 630--800 psf. The back-analysis of the failure gave an average operating shear stress in the liquefied zone of about 850 psf. After multiple corrections, the steady-state approach achieved only apparent agreement.

### 6.8.3 Deficiencies of the Steady-State Approach

The steady-state method has several shortcomings:

- **Blending samples** for reconstituted testing averages out gradation variability that strongly affects the CSL
- **The cos($\phi_s$) correction** to reduce triaxial strength to the failure plane is misguided -- the undrained limit equilibrium analysis uses $(\sigma_1 - \sigma_3)/2$, not the shear stress on a particular plane
- **The critical friction ratio $M$** depends on the intermediate principal stress (plane strain versus triaxial), which is not accounted for
- **Sampling difficulties** in sands and silty sands are severe -- piston samples fall apart when extruded
- **Most fundamentally,** the "minimum assured strength" is a theoretical error unless the soil is totally contractive. For lightly dilatant soils ($-0.1 < \psi < 0$), the soil will initially contract before dilating, and strain localization means the minimum laboratory-measured strength may not be realized at field scale

---

## 6.9 Trends from Full-Scale Experience

### 6.9.1 Background

Casagrande (1950) recognised that laboratory tests were unreliable for positively identifying liquefaction susceptibility, and advocated empirical criteria from field case histories. Seed (1987) later looked at seven liquefaction-related failures, estimated a residual strength for each, and combined them with SPT resistances. Many workers have since added to the database, which now contains approximately 30 documented cases.

### 6.9.2 Strength (Stability) Assessments

Back-analysis strength estimation from case histories uses four methods:

- Infinite slope analogy
- Wedge analysis
- Stability charts (simplified total stress)
- Method of slices (especially with non-circular slip)

There is typically an uncertainty of $\pm 30$% in the calculated mobilized strength $s_r$ and an even larger uncertainty in the characteristic penetration resistance.

### 6.9.3 Summary of Full-Scale Experience

Table 6.3 catalogues case histories from coastal flowslides (Zeeland coast, 1881) through modern tailings dam failures (Merriespruit, 1994). The cases are classified into:

- Post-earthquake slides versus static failures
- Tailings, natural soils, or fills
- Mass movement versus basal failure

Basal failure is especially dangerous because it induces decreasing mean effective stress higher in the soil column (a CSD-like path), which is a particularly easy way to cause catastrophic liquefaction.

### 6.9.4 Residual (Post-Liquefaction) Strength

| Symbol | Name | Definition |
|--------|------|------------|
| $s_r$ | Residual strength | Post-liquefaction undrained shear strength |
| $s_u$ | Peak undrained strength | Maximum shear stress before softening |
| $\sigma'_{vo}$ | Initial vertical effective stress | Pre-failure vertical effective stress |
| $Q_{tn,cs}$ | Clean-sand-equivalent CPT resistance | CPT tip resistance corrected for soil type |
| $(N_1)_{60}$ | Corrected SPT blow count | Energy- and stress-corrected blow count |
| $K_c$ | Soil-type correction factor | Transforms $Q_{tn}$ to "clean sand equivalent" |

#### Current U.S. Best Practice

The current best practice (Robertson, 2010; evolving from Olson and Stark, 2002) uses stress-level-normalized CPT resistance $Q_{tn}$:

$$
Q_{tn} = \left[\frac{(q_t - \sigma_{vo})}{p_a}\right]\!\left(\frac{p_a}{\sigma'_{vo}}\right)^n \tag{6.11}
$$

where $p_a$ is atmospheric pressure and $n$ is an exponent depending on soil type (from about 0.5 in clean sands to about 1.0 in clays).

The fines correction transforms to "equivalent clean sand":

$$
Q_{tn,cs} = K_c \cdot Q_{tn} \tag{6.13}
$$

A lower-bound fit to the case history data is:

$$
\frac{s_r}{\sigma'_{vo}} = 0.0055\exp(0.05\,Q_{tn,cs}) \tag{6.15}
$$

### 6.9.5 State Parameter Approach

For conditions without strain localization, combining the CSL definition with the state parameter yields:

$$
p'_c = p'_o \exp\!\left(\frac{-\psi_o}{\lambda_e}\right) \tag{6.16}
$$

The post-liquefaction strength follows by combining (6.9) and (6.16):

$$
\frac{s_r}{p'_o} = \frac{M}{2}\exp\!\left(\frac{-\psi_o}{\lambda_e}\right) \tag{6.4\,bis}
$$

Expressed in terms of vertical effective stress:

$$
\frac{s_r}{\sigma'_{vo}} = \frac{1+2K_o}{3}\cdot\frac{M}{2}\exp\!\left(\frac{-\psi_o}{\lambda_e}\right) \tag{6.17}
$$

Substituting the CPT inversion for $\psi$ gives:

$$
\frac{s_r}{\sigma'_{vo}} = \frac{M}{2}\!\left(\frac{Q}{k}\right)^{1/m\lambda} \tag{6.19}
$$

This is dimensionally consistent and follows directly from critical state theory. There never will be a single trend line relating penetration resistance to strength ratio, because the trend depends on soil properties (compressibility $\lambda$, plasticity $H/I_r$).

---

## 6.10 Lower San Fernando Dam Revisited

The 1985 investigation of Lower San Fernando Dam included 12 piezocone CPTs. Processing the CPT data using the state parameter approach (Section 4.7) yields state parameter profiles through the hydraulic fill (Figure 6.57). The fill shows systematic layering: denser sandy layers ($\psi \approx -0.10$ to $-0.20$) alternate with looser silty layers ($\psi \approx +0.05$ to $+0.10$).

Using the best-practice trend lines from Figure 6.47 and the VBA function in Figure 6.48, the characteristic state parameter values and corresponding residual strength ratios for each CPT are:

| CPT | Sandy $\psi_k$ | Sandy $s_r/\sigma'_{vo}$ | Silty $\psi_k$ | Silty $s_r/\sigma'_{vo}$ |
|-----|----------------|--------------------------|----------------|--------------------------|
| C108, crest | -0.11 | 0.22 | -0.005 | 0.13 |
| C103, crest | -0.12 | 0.23 | -0.03 | 0.15 |
| C104, berm road | -0.03 | 0.15 | +0.09 | 0.06 |
| C106, berm road | -0.04 | 0.16 | +0.09 | 0.06 |

The estimated residual strength ratio from the state parameter approach ($s_r/\sigma'_{vo} \approx 0.06$--$0.15$ for the loose silty layers) aligns remarkably well with the back-analyzed operating strength range ($0.06 < s_r/\sigma'_{vo} < 0.12$).

---

## 6.11 How Dense Is Dense Enough?

This is the central engineering question. The answer depends on three levels of assessment:

1. **Laboratory data trends:** Strength drop is caused by pore pressures generated during volumetric compression. If the sand is dense enough that dilation dominates, it will not lose strength. The threshold is approximately $\psi < -0.08$ in isotropic triaxial compression and $\psi < -0.05$ in simple shear.
2. **Normalized CPT charts:** The contractive/dilatant boundary can be expressed using CPT data. Shuttle and Cunning (2008) placed this boundary at $\psi = -0.05$ (Figure 6.58), which coincides well with Robertson's (2010) criterion expressed as $Q_{tn,cs} = 70$.
3. **Project-specific studies:** For high-value projects, *NorSand* in finite element analyses can refine the boundary by incorporating actual soil properties, geometry, and loading paths. This has been done for at least three large dams.

A practical engineering judgment: if $\psi > -0.05$, the discussion should be about ground improvement. If $\psi < -0.05$, the discussion shifts to tolerable movements.

---

## 6.12 Post-Liquefaction Residual Strength

### 6.12.1 Residual Strengths Guided by Case Histories

Two approaches exist: (1) penetration resistance adjusted using "equivalent clean sand" fines corrections, and (2) state parameter-based assessment. The state parameter approach is preferred because it uses soil mechanics properties rather than geological descriptions, and it captures the effect of compressibility directly through $\lambda$.

Figure 6.47 shows residual strength ratio versus characteristic state parameter, separated into three compressibility bands:

- Low $\lambda$ (clean sands, $\lambda_{10} \approx 0.05$)
- Intermediate $\lambda$ (silty sands, $0.08 < \lambda_{10} < 0.15$)
- High $\lambda$ (sandy silts to silts, $\lambda_{10} > 0.15$)

The best-practice trend lines follow the *NorSand* localization strength predictions and provide conservative fits to the case history data.

### 6.12.2 Residual Strengths by Numerics

*NorSand* can predict the minimum post-peak strength by computing when Drucker's stability postulate is violated:

$$
\dot{\sigma}_q \dot{\varepsilon}_q + \dot{\sigma}_m \dot{\varepsilon}_m < 0 \tag{6.20}
$$

At this point, strain localization occurs and the soil within the shear band dilates to the critical state at a lower mean effective stress (and hence lower void ratio) than if undrained conditions had been maintained. This mechanism explains why lightly dilatant soils may not have the same "minimum assured strength" that the steady-state school assumes. Figure 6.62 plots computed minimum strengths for clean sand and sandy silt tailings, showing the critical role of compressibility in controlling residual strength.

---

## 6.13 Liquefaction Assessment for Silts

Silts are increasingly important in mining practice because tailings are essentially ground-up rock. They behave like sands in the critical state framework -- the numerical values of properties change ($\lambda$ increases, $M$ may vary), but the framework is the same. For relatively incompressible silts (drained CPT penetration, $B_q \approx 0$), the CPT--$\psi$ relationship is well constrained. For more compressible silts ($B_q > 0.1$), the approach reverts to the Figure 6.47 best-practice trends.

---

## 6.14 Summary

The chapter established that:

- Static liquefaction is constitutive behaviour that follows naturally from the mechanics of loose soils under undrained boundary conditions -- no collapse surface, no metastable arrangement
- *NorSand*, calibrated only on dense drained tests, replicates the full spectrum of undrained behaviour from highly contractive to lightly dilatant, in compression, extension, and simple shear
- The collapse surface / instability line is not a soil property -- it shifts with changes in elastic and plastic moduli
- The pseudo-steady state is an artifact of elastic stiffness, not a fundamental state
- The steady-state approach has theoretical and practical deficiencies, particularly for lightly dilatant soils and when strain localization occurs
- Post-liquefaction residual strength depends on state parameter, compressibility ($\lambda$), soil moduli ($H/I_r$), and loading path
- The state parameter approach to residual strength estimation is dimensionally consistent and matches case history experience across a range of compressibilities
- For engineering purposes, $\psi < -0.05$ separates the regime where ground improvement is needed from the regime of tolerable movements

---

## Key Equations

| Eq. | Expression | Purpose |
|-----|-----------|---------|
| 6.1 | $s_u/p'_o = (q_{\max}/2)/\sigma'_{3c}$ | Normalized peak undrained strength |
| 6.2 | $A_f = \Delta u / \Delta \sigma'_1$ | Pore pressure parameter at failure |
| 6.3 | $s_u/p'_o = (M/2)(1/2)^{0.8}$ | Wroth's NC clay undrained strength |
| 6.4 | $s_r/p'_o = (M/2)\exp(\psi_o/\lambda)$ | Residual strength from CSL |
| 6.5 | $I_B = (s_u - s_r)/s_u$ | Brittleness index |
| 6.6 | $\dot{\varepsilon}_v = 0 \Leftrightarrow \dot{\varepsilon}^p_v = -\dot{\varepsilon}^e_v$ | Undrained constraint |
| 6.7 | $\dot{p} = -\dot{\varepsilon}^p_v K$ | Pore pressure from elastic balance |
| 6.9 | $s_r = p'_c \cdot M/2$ | Steady-state (critical state) strength |
| 6.19 | $s_r/\sigma'_{vo} = (M/2)(Q/k)^{1/m\lambda}$ | CPT-based residual strength |
| 6.20 | $\dot{\sigma}_q\dot{\varepsilon}_q + \dot{\sigma}_m\dot{\varepsilon}_m < 0$ | Drucker's instability criterion |

---

## Symbol Table

| Symbol | Name | Definition |
|--------|------|------------|
| $s_u$ | Peak undrained shear strength | Maximum shear stress in undrained loading |
| $s_r$ | Residual shear strength | Post-liquefaction large-displacement strength |
| $s_{u,p}$ | Peak strength at onset of liquefaction | Deviatoric strength at the instability point |
| $\psi_o$ | Initial state parameter | $e - e_c$ at the start of loading |
| $\psi_k$ | Characteristic state parameter | 80--90th percentile of $\psi$ distribution |
| $p'_o$ | Initial mean effective stress | $({\sigma'_1 + 2\sigma'_3})/3$ before loading |
| $p'_c$ | Critical state mean effective stress | Mean effective stress at the CSL for current $e$ |
| $I_B$ | Brittleness index | Dimensionless strength drop: $(s_u - s_r)/s_u$ |
| $A_f$ | Pore pressure parameter at failure | $\Delta u / \Delta \sigma'_1$ (Skempton, 1954) |
| $\eta_L$ | Instability stress ratio | $q/p'$ at the onset of liquefaction |
| $H$ | Plastic hardening modulus | Dimensionless *NorSand* hardening parameter |
| $I_r$ | Elastic rigidity | $G/p'_o$, elastic shear rigidity index |
| $K_o$ | Geostatic stress ratio | $\sigma'_h / \sigma'_v$ in the ground |
| $Q_{tn}$ | Stress-normalized CPT resistance | Dimensionless CPT tip resistance |
| $Q_{tn,cs}$ | Clean-sand-equivalent CPT resistance | $K_c \cdot Q_{tn}$, fines-corrected |
| $K_c$ | Soil-type correction factor | Transforms CPT resistance to "equivalent clean sand" |
| $\lambda_e$ | CSL slope (natural log base) | $\lambda_{10}/\ln(10)$ |

---

## Connections to Practice

### Relevance to [[Nataka TSF]]

1. **Tailings are loose, saturated, and contractively inclined.** Hydraulically deposited tailings at Nataka will have positive state parameters in many zones. The framework presented here applies directly: these tailings are candidates for static liquefaction if $\psi > -0.05$.
2. **Fines content is not the issue -- state is.** The Nataka tailings contain variable fines (sands through sandy silts). The chapter demonstrates that fines content affects behaviour only through compressibility ($\lambda$) and the CSL, not through some separate mechanism. Using the correct CSL for each gradation is sufficient.
3. **Lift 1 compaction targets.** Compacted sand fill in Lift 1 should target a state parameter denser than $-0.05$ (the screening-level contractive/dilatant boundary) and ideally denser than $-0.08$ (the threshold below which no phase transformation or pseudo-steady state is observed in triaxial compression).
4. **CSD loading path warning.** Rising water levels in the TSF (currently above maximum at 24.6 mRL) increase pore pressures while the shear stress from the embankment remains approximately constant -- this is a CSD-like loading path. The Aberfan parallel and *NorSand* analysis warn that there may be negligible precursor deformation before catastrophic failure on such a path.
5. **Post-liquefaction residual strength.** If the in-situ state parameter and compressibility of the deposited tailings can be estimated (from CPT data using Chapter 4 methods), Figure 6.47 provides the best-practice engineering estimate of residual strength for stability assessment. The VBA function in Figure 6.48 implements this as a computable algorithm.
6. **Strain localization matters at field scale.** The laboratory-measured minimum strength may not apply at field scale because localized shear bands can draw water from the surrounding soil mass, reducing the effective undrained strength. This effect is more significant in sands than in silts (where the consolidation coefficient is lower).

---

## Sources
- Chapter 6 (pp. 225--313) of *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies, M.G. and Been, K., CRC Press, 2016.
