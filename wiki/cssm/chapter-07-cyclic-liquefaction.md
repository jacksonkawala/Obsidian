---
title: "Chapter 7 — Cyclic Stress-Induced Liquefaction (Cyclic Mobility and Softening)"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, cyclic-liquefaction, cyclic-mobility, principal-stress-rotation, CRR, CSR, berkeley-school, norsand, state-parameter, fraser-river-sand, simple-shear, earthquake, case-histories]
---

# Chapter 7 — Cyclic Stress-Induced Liquefaction (Cyclic Mobility and Softening)

Study notes on Chapter 7 of *Soil Liquefaction: A Critical State Approach* (2nd ed.) by Mike Jefferies and Ken Been. This chapter extends the framework from [[chapter-06-static-liquefaction|Chapter 6]] to cyclic loading -- the class of loading that brought liquefaction to the forefront of geotechnical engineering after the 1964 earthquakes in Alaska and Niigata.

---

## 7.1 Introduction

### 7.1.1 Cyclic Mobility

Static and cyclic liquefaction share the same fundamental mechanism: plastic volumetric strain develops faster than the pore fluid can escape, generating excess pore pressure and reducing mean effective stress and strength. The difference lies in how the plastic volumetric strains are generated:

- **Static liquefaction:** The soil must be loose ($\psi > 0$) so that plastic volumetric compression from normal stress--dilatancy exceeds the skeleton's hardening capacity
- **Cyclic liquefaction:** Plastic volumetric strains arise through densification caused by cyclic stress changes, which tend to pack particles closer together. This affects *any* soil -- loose or dense, sand or overconsolidated clay

The jargon that developed historically distinguished brittle collapse failures ("liquefaction") from softening without runaway strains ("cyclic mobility"). Despite the apparently limited strains, cyclic mobility is not benign -- it has caused billions of dollars of damage.

In cyclic mobility, the zone of maximum excess pore pressure generation may not be the loosest soil but rather the most highly stressed location. As excess pore water migrates during dissipation, it may cause strength or stiffness reductions elsewhere, leading to delayed failure. Lower San Fernando Dam exemplifies this: movement began about 30 s after shaking ceased.

### 7.1.2 Alternative Forms of Cyclic Loading

Three fundamentally different cyclic loadings must be distinguished:

1. **Repeated loading (one-way):** Stresses fluctuate and the stress path oscillates in $q$--$p$ space without crossing the $q = 0$ axis. The principal stress direction ($\sigma_1$) remains fixed (vertical throughout). Conceptually, this is a triaxial compression test with variable deviator stress.
2. **Two-way (cyclic) loading:** The magnitude of stress varies so that at part of the cycle the vertical stress is the major principal stress and at another part the horizontal stress is major. The principal stress direction jumps 90 degrees each half-cycle. This is a cyclic triaxial test with excursions between compression and extension.
3. **Cyclic principal stress rotation:** Both vertical and horizontal stresses vary, plus a shear stress causes the direction of $\sigma_1$ to rotate continuously. This is the cyclic simple shear test and the most realistic analogue for earthquake loading.

The distinction matters enormously. Current terminology characterizes the loading by the **static bias ratio** (SBR = $\tau_{st}/\sigma'_{vo}$) and the **cyclic stress ratio** (CSR = $\tau_{cyc}/\sigma'_{vo}$). If $\text{SBR} > \text{CSR}$, the loading is repeated (case a). If $\text{SBR} < \text{CSR}$, it is cyclic (case b). Most of the literature has focused on case (b), despite case (c) -- principal stress rotation -- being the dominant driver of cyclic mobility in earthquakes.

---

## 7.2 Experimental Data

### 7.2.1 Laboratory Cyclic Test Methods

Three laboratory tests are commonly used:

| Test | Stresses measured | PSR capability | Practical availability |
|------|------------------|----------------|----------------------|
| Triaxial | All three principal stresses | 90 degree jumps only | Standard commercial |
| Simple shear | $\tau_{vh}$ and $\sigma'_v$ only (horizontal stress unknown) | Smooth, small rotation | Standard commercial |
| Hollow cylinder | All stresses including $\tau_{z\theta}$ | Full continuous rotation | Research only |

The simple shear test is the most practical analogue for earthquake loading because it naturally incorporates principal stress rotation. Its deficiency is that the horizontal stress is not measured, making it impossible to determine the complete stress tensor. The hollow cylinder test measures all stresses but is a research-grade apparatus.

### 7.2.2 Trends in Cyclic Triaxial Data

Cyclic triaxial tests on Nevada sand (VELACS project, Figure 7.5) show the characteristic pattern:

- Pore pressure builds up gradually during each cycle, approaching the confining stress
- The stress path becomes "hooked" as $p'$ decreases, tracking up and down the failure line
- There is no sustained zero effective stress -- transient $p' = 0$ may occur briefly, but dilation immediately acts to restore effective stress
- A cohesion-like component appears in extension (likely a membrane effect, not a real soil property)

Cyclic resistance is reported as a **cyclic stress ratio** (CSR = $q / 2\sigma'_{3c}$) causing failure in $N$ cycles. Figure 7.6 shows data from five laboratories testing Toyoura sand: loose samples ($D_r \approx 50$%, $\psi \approx -0.08$) sustain a maximum CSR of about 0.2 for one cycle, while dense samples ($D_r \approx 80$%, $\psi \approx -0.19$) can sustain CSR greater than 0.3 for hundreds of cycles.

Factors affecting cyclic triaxial test results (Townsend, 1978):

- Specimen preparation (initial fabric)
- Confining stress
- Loading wave form
- Density
- Prestraining
- Consolidation ratio ($\sigma'_{vo}/\sigma'_{ho}$)

### Cyclic Resistance Ratio (CRR)

When the CSR is normalised by the CSR causing failure at 15 cycles ($\text{CRR}_{15}$), data from 13 sands collapse onto a single relatively narrow band (Figure 7.8). The trend extends smoothly from a few cycles to nearly a thousand, with no difference in the pattern between low and high cycle loading. This is consistent with a fatigue framework.

The relationship between $\text{CRR}_{15}$ and state parameter $\psi$ (Figure 7.11) shows a reasonable trend, but scatter exists because fabric and initial fabric effects are not captured by $\psi$ alone. Principal stress direction and fabric are the key drivers of cyclic mobility.

### 7.2.3 Cyclic Behaviour of Silts

Cohesionless silts show very similar behaviour to sands in cyclic tests. Bonnie silt (85% silt, 8% sand, 7% clay, $LL = 29$, $PI = 15$) tested in the VELACS project produces similar ramping pore pressures and stiffness loss to Nevada sand. The similarity arises because silts are particulate, without bonds, and exist over a range of densities characterized by $\psi$ just as sands do.

Compressibility matters more for silts than for sands. The critical state model for cyclic loading (Sangrey et al., 1978; Egan and Sangrey, 1978) shows that the **critical level of repeated loading** (CLRL) -- the stress ratio below which cyclic loading will never cause liquefaction regardless of the number of cycles -- varies systematically with $\kappa/(1+e)$ (Figure 7.15). More compressible soils (clays and silts) are more resistant to liquefaction because larger pore pressures are required for the same amount of dilatancy.

### 7.2.4 Cyclic Rotation of Principal Stress

Arthur and co-workers (Arthur et al., 1979, 1980) demonstrated experimentally that changing the direction of loading radically alters sand behaviour, even when stress invariants are held constant. Using a directional shear cell (DSC), they showed that:

- At near-constant mobilized shear stress, strains accumulated readily with each loading cycle when the principal stress was rotated
- The greater the range of principal stress rotation, the greater the plastic straining induced
- A constitutive model based solely on stress invariants predicts essentially zero strains in such tests -- contrary to observation

This led to the adoption of the **Third Axiom** in *NorSand*:

> **Third Axiom:** Principal stress rotation softens (shrinks) the yield surface.

The hollow cylinder test at UBC (Vaid et al., 1990b, with inner diameter 250 mm, outer 300 mm) is the modern standard for investigating principal stress rotation effects. Tests on Erksak sand simulating the Molikpaq ice-loading event (Figure 7.19) showed remarkable correspondence between laboratory pore pressure generation rates (~1.5 kPa/cycle) and the field measurements (~0.8--1.8 kPa/cycle).

---

## 7.3 Trends in Cyclic Simple Shear Behaviour

### 7.3.1 Fraser River Sand

Fraser River sand (FRS) is the primary reference material for cyclic simple shear in this chapter. FRS is an alluvial deposit from the Fraser River Delta near Vancouver, British Columbia -- a seismically active area with documented paleo-liquefaction. Key properties:

| Property | Value |
|----------|-------|
| $D_{50}$ | 0.271 mm |
| $D_{10}$ | 0.161 mm |
| Fines content | ~0.8% |
| Grain shape | Uniform, angular to sub-angular |
| Sphericity | Low to medium |
| $G_s$ | 2.72 |
| $e_{\min}$ | 0.627 |
| $e_{\max}$ | 0.989 |
| Mineralogy | 25% quartz, 19% feldspar, 35% metamorphic, 16% granite, 5% detritus |

### 7.3.2 Triaxial Testing Programme

Nine drained and seven undrained triaxial compression tests establish the soil properties. The CSL for FRS over the stress range 40--200 kPa is described by:

$$
e_c = 1.09 - 0.05(p')^{0.25} \tag{7.1}
$$

with semi-log fit properties $\Gamma = 1.22$ and $\lambda_{10} = 0.138$ -- three to four times larger than standard laboratory quartz sands, reflecting FRS's high compressibility (only 25% quartz).

The stress-dilatancy plot gives $M_{tc} = 1.45$ and $N = 0.43$ (both noticeably greater than for quartz sands). The state-dilatancy parameter is $\chi_{tc} = 3.2$.

Elasticity is modelled as:

$$
\frac{G}{p_{ref}} = \frac{A}{(e - e_{\min})}\!\left(\frac{p}{p_{ref}}\right)^b \tag{7.2}
$$

with $A = 375$, $e_{\min} = 0.344$, and $b = 0.466$. Validation against bender element measurements shows the model is unbiased and within $\pm 5$% of the data.

The full *NorSand* calibration for FRS is summarized in Table 7.1:

| Property | Value | Remark |
|----------|-------|--------|
| $a$ (CSL) | 0.947 | Power-law CSL: $e_c = a - b(p')^c$ |
| $b$ (CSL) | 0.0006 | |
| $c$ (CSL) | 0.813 | |
| $M_{tc}$ | 1.45 | Critical friction ratio |
| $N$ | 0.43 | Volumetric coupling coefficient |
| $H$ | 60--280$\psi$, min 40 | Plastic hardening modulus |
| $\chi_{tc}$ | 3.2 | State-dilatancy property |
| $Z_r$ | Equation 7.7 | Principal stress rotation softening |
| $\nu$ | 0.1 | Poisson's ratio |

### 7.3.3 Cyclic Simple Shear Tests on FRS

#### Testing Programme

The UBC simple shear apparatus (NGI type, Bjerrum and Landva, 1966) tests cylindrical samples 70 mm in diameter and about 20 mm high. Two relative densities were tested: about 40% (air pluviated, "loose") and about 80% (manually tamped prior to confinement, "dense"). All tests used stress-controlled cyclic loading with constant volume boundary conditions. Table 7.2 summarizes 27 tests including static bias ratios and CSR values.

#### Loading Conditions (Static Bias)

The horizontal shear stress at any time in a cyclic simple shear test is:

$$
\tau = \tau_{st} + \tau_{cyc}\sin(\omega t) \tag{7.3}
$$

Both stresses are normalised by the vertical effective stress before undrained cycling, giving the SBR ($\tau_{st}/\sigma'_{vo}$) and CSR ($\tau_{cyc}/\sigma'_{vo}$). The behaviour depends on the proximity of the peak shear stress to the image stress ratio (ISR $\approx M_i/2$), which controls the soil stiffness.

#### Sand Response for $\text{LSR}_o < \text{ISR}/2$

When the loading stress ratio is well below the ISR (Figure 7.28), the behaviour is **fatigue-like**: slow, near-linear pore pressure accumulation with each cycle, little stiffness loss, and very little effect of static bias. Once the excess pore pressure approaches the vertical effective stress, strains increase dramatically and the stress paths develop the characteristic "butterfly" shape. What is described as "initial liquefaction" (first occurrence of transient zero effective stress) is not a traumatic event -- there is only a gradual loss of stiffness, not loss of strength.

#### Sand Response for $\text{LSR}_o \approx \text{ISR}$

When the loading stress ratio approaches the ISR (Figure 7.29), denser samples liquefy transiently with states of near-zero effective confining stress and characteristic butterfly stress paths. The evolution of shear strain with loading cycles (Figure 7.30) shows a near-linear accumulation -- **fatigue softening** -- with no event that could reasonably be called "failure." The standard criteria for initial liquefaction (3.75% shear strain, or first transient zero effective stress) are arbitrary and capture nothing insightful about the soil behaviour.

### 7.3.4 Nature of Liquefaction in Simple Shear

The literature's emphasis on static bias as a separate "effect" is fundamentally incorrect. All sand behaviour under all loading paths is controlled by the ratio $\eta/M$. When $\eta/M < 1$, contractive strains dominate regardless of density; when $\eta/M > 1$, dilative strains dominate. In cyclic loading, the interplay between dilation (plastic shear strain) and contraction (principal stress rotation-induced densification) controls the overall response.

For soils with $\psi < 0$ (denser than critical), the concept of "initial liquefaction" is unhelpful. The initial response is monotonic loading followed by fatigue-like accumulation of strain. There is loss of stiffness, not loss of strength. For soils with $\psi > 0$, the response transitions more directly to static liquefaction.

---

## 7.4 Berkeley School Approach

### 7.4.1 Background

The 1964 earthquakes in Alaska and Niigata demonstrated that pseudo-static methods were unreliable for predicting earthquake-induced liquefaction. Professor H.B. Seed at Berkeley pioneered a case-history-based approach that has become the dominant methodology for assessing cyclic liquefaction resistance. The key developments occurred through workshops in 1985 (Dedham), 1996 (Salt Lake City), and subsequent refinements.

### 7.4.2 Liquefaction Assessment Chart

The Berkeley approach classifies sites into "liquefied" and "not liquefied" based on the estimated cyclic shear stress versus a normalised measure of soil state (penetration resistance). The boundary between these two zones is the CRR curve.

The adopted CSR is the dimensionless ratio $\tau_{cyc}/\sigma'_{vo}$. The adopted in-situ state measures are:

- **SPT:** Energy-corrected blow count $(N_1)_{60}$, with adjustments to an "equivalent clean sand" value $(N_1)_{60,ecs}$ based on fines content
- **CPT:** Stress-level corrected tip resistance $q_{c1N}$ (Figure 7.34), using Robertson and Wride (1998) as the definitive CPT chart

The number of significant equivalent cycles is related to earthquake magnitude through the **magnitude scaling factor** ($K_M$), with $M = 7.5$ as the reference condition (approximately 15 equivalent cycles).

### 7.4.3 CRR Adjustment Factors

The available CRR for actual site conditions is obtained from:

$$
CRR = CRR_{7.5} \cdot K_M \cdot K_\sigma \cdot K_\alpha \tag{7.4}
$$

| Factor | Name | Purpose |
|--------|------|---------|
| $K_M$ | Magnitude scaling factor | Adjusts for earthquake duration (number of significant cycles) |
| $K_\sigma$ | Stress-level correction | Adjusts for overburden pressures different from the reference ~100 kPa |
| $K_\alpha$ | Static shear correction | Adjusts for sloping ground (static bias) |

**$K_M$** has been developed by several researchers (Figure 7.35). The Seed and Idriss (1982) relationship remains the most widely used, although Youd et al. (2001) recommend a slightly more conservative version.

**$K_\sigma$** (Figure 7.36--7.37) decreases CRR with increasing confining stress, reflecting the observation that denser soils show proportionately greater reduction in CRR at higher stresses. Hynes and Olsen (1999) recommend $K_\sigma = (\sigma'_v)^{f-1}$ with $f = 0.8$ for $D_r = 40$%, $f = 0.7$ for $D_r = 60$%, and $f = 0.6$ for $D_r = 80$%.

**$K_\alpha$** (Figure 7.39) is the most contentious factor. Conflicting trends exist in the literature, and the NCEER workshop recommended that it should not be used by "non-specialists."

### 7.4.4 Deficiencies with the Berkeley School Method

Three basic deficiencies exist:

1. **Characteristic penetration resistance is undefined.** Many case histories are based on a single boring or even a single blow count. The loosest 5--15% of the deposit controls liquefaction, but this characteristic value is unknown for most case histories.
2. **Soil properties are neglected.** The charts are anchored to clean sands in laboratory experiments, and the "corrections" for fines content are geologically based (silt content passing the #200 sieve) rather than mechanically based (compressibility, friction angle). The fines content correction has the wrong mathematical form -- it should be a multiplier, not an additive term.
3. **No mechanistic basis exists for the extrapolations.** The $K_\sigma$ extrapolation curves have no theoretical justification. The variable-exponent CPT normalisation is purely speculative.

---

## 7.5 State Parameter View of the Berkeley Approach

### 7.5.1 State Parameter Version of the CPT Charts

Processing the Moss (2003) Class A liquefaction case histories using the state parameter approach yields a simple exponential boundary between liquefied and non-liquefied sites (Figure 7.42):

$$
CRR_{7.5} = 0.06\exp(-9\psi_k) \tag{7.5}
$$

This single equation replaces the separate CRR curves for different fines contents, the $K_\sigma$ correction, and the fines content corrections. Combining the laboratory backbone curve (Figure 7.11) with the field boundary (Figure 7.42) shows remarkable correspondence (Figure 7.43) -- the mechanics-based approach works across independent sets of laboratory and field data.

### 7.5.2 Nature of $K_\sigma$

The $K_\sigma$ factor arose because the Berkeley approach uses a fixed reference stress. Critical state theory provides a natural explanation: at constant void ratio, $\psi$ changes with stress level because the CSL has a non-zero slope. As stress increases, $\psi$ becomes more positive (looser relative to critical), reducing the CRR. The computed $K_\sigma$ values from *NorSand* (Figure 7.44) match the empirical $K_\sigma$ recommendations remarkably well, with the slope of the CSL ($\lambda_{10}$) being the controlling soil property.

### 7.5.3 Nature of $K_\alpha$

The $K_\alpha$ factor purports to capture the effect of static shear stress on cyclic strength. In reality, principal stress rotation is the dominant effect in producing cyclic mobility. For plane strain slopes, one principal stress ($\sigma_1$, generally perpendicular to depth away from the slope surface) is set by the boundary conditions, while the other two depend on both $K_o$ and the soil response. Simple bias does affect the proximity of the stress path to the ISR, and it does influence the principal stress rotation experienced, but the relationship is not the simple one-to-one mapping implied by $K_\alpha$. Formal modelling with *NorSand* in simple shear is needed rather than empirical correction factors.

### 7.5.4 Influence of Silt Content

The silt content "correction" in the Berkeley School is geometrically wrong (additive rather than multiplicative). The state parameter approach handles silt content implicitly: silt content affects the CSL and compressibility, which in turn affect $\psi$ and penetration resistance. By taking a state parameter view, the effect of soil type on both cyclic strength and penetration resistance is captured mechanistically through the correct CSL, the compressibility parameters ($\lambda$, $\kappa$), and the CPT inversion coefficients ($k$, $m$).

---

## 7.6 Theoretical Framework for Cyclic Loading

### 7.6.1 Alternative Modelling Approaches

Three broad classes of hardening law address cyclic loading (Figure 7.45):

1. **Isotropic hardening** (Cam Clay) -- yield surface grows uniformly; cannot simulate stress reversals or pore pressure generation during unloading. Inadequate for cyclic loading.
2. **Kinematic hardening** -- yield surface translates in stress space. Can simulate stress reversals in standard laboratory tests. Many VELACS models used this approach. Fails for principal stress rotation.
3. **Kinematic softening by principal stress rotation** -- yield surface shrinks when principal stress directions change. *NorSand* implements this as the Third Axiom.

### 7.6.2 *NorSand* with Cyclic Loading and Principal Stress Rotation

At a micromechanical level, a yield surface reflects the current mobilisation of particle contacts, which has direction in stress space. When the principal stress direction changes, the previously optimal contact arrangement becomes sub-optimal. The yield surface, fixed in a coordinate system aligned with the previous principal stresses, is now too large in the rotated frame. *NorSand* implements this through the Third Axiom:

$$
\frac{\dot{\bar{\sigma}}_{mi}}{\bar{\sigma}_{mi}} = -Z_r\,\frac{\dot{\alpha}}{\pi} \tag{7.6}
$$

where $\bar{\sigma}_{mi}$ is the image mean stress (yield surface size), $\dot{\alpha}$ is the rate of principal stress rotation, $Z_r$ is the softening parameter, and the $\pi$ term provides dimensionless scaling. A 90-degree principal stress flip should completely soften the yield surface -- wiping out all accumulated hardening.

The softening parameter $Z_r$ appears to vary with state parameter (Figure 7.49):

$$
Z_r = 134 + 93\psi + 21\psi^2 \tag{7.7}
$$

This trend is common to both Nevada sand and Fraser River sand despite their rather different properties. It may reflect something fundamental related to grain contacts, possibly scaling with the group $e - e_{\min}$ (Ishihara's "densification potential").

### 7.6.3 Modelling Simple Shear with *NorSand*

The downloadable spreadsheet *NorSandPSR_FRS.xls* is set up for modelling cyclic simple shear. The principal stress rotation version of *NorSand* is implemented as the VBA subroutine *NorCSSu*. Two parameters are optimised to fit cyclic test data: the initial geostatic stress ratio $K_o$ and the softening parameter $Z_r$.

Figure 7.48 shows fits to both a loose ($e_o = 0.812$) and a dense ($e_o = 0.684$) FRS sample. The model captures:

- The cycle-by-cycle pore pressure build-up
- The butterfly stress paths that develop as effective stress approaches zero
- The strain accumulation pattern
- The difference between loose and dense behaviour

---

## 7.7 Dealing with Soil Fabric In-Situ

Principal stress rotation being the dominant driver of cyclic mobility means that grain particle arrangement (soil fabric) matters -- it is not just a question of void ratio. The CPT measures the state parameter but not soil fabric. Three methods for assessing fabric in-situ are potentially useful:

1. **Frozen samples** -- retrieving a frozen sample and examining thin sections under a microscope. Provides direct observation of contact orientations.
2. **Seismic methods** -- shear and compression wave velocities. Shear modulus $G_{\max}$ is sensitive to both state parameter and fabric, making it a potentially excellent index.
3. **Pressuremeter testing** -- plastic modulus can be retrieved from pressuremeter data, and this modulus reflects fabric. The pressuremeter expansion curve is curved in the early stages, capturing stress-strain behaviour (friction angle and dilation rate) that depends on fabric.

The evidence suggests that elastic shear modulus profiles from seismic testing might provide the best practical index of soil fabric for comparing case histories.

---

## 7.8 Summary

The chapter established that:

- Cyclic and static liquefaction share the same fundamental mechanism (plastic volumetric strain generation) but differ in how the plastic strains arise (contractiveness in static; densification from stress reversals and principal stress rotation in cyclic)
- Principal stress rotation is the dominant factor in cyclic degradation of soil strength -- more important than cyclic variation in stress magnitude
- Cyclic resistance curves can be normalised to $\text{CRR}_{15}$ and related to the state parameter, collapsing data from many sands onto a single trend
- The Berkeley School approach (Seed charts) is validated by the state parameter framework, which simultaneously identifies deficiencies: the $K_\sigma$ correction is explained by the changing $\psi$ with stress, the $K_\alpha$ correction conflates static bias with principal stress rotation, and the fines content correction has the wrong mathematical form
- A single exponential fit $CRR_{7.5} = 0.06\exp(-9\psi_k)$ replaces the entire system of charts and corrections
- *NorSand* with kinematic softening (Third Axiom) captures the key features of cyclic simple shear, including cycle-by-cycle pore pressure generation, butterfly stress paths, and the fatigue-like strain accumulation
- Soil fabric is a critical factor that is not captured by $\psi$ alone; seismic shear modulus profiles may provide the best in-situ fabric index

---

## Key Equations

| Eq. | Expression | Purpose |
|-----|-----------|---------|
| 7.1 | $e_c = 1.09 - 0.05(p')^{0.25}$ | Power-law CSL for Fraser River sand |
| 7.2 | $G/p_{ref} = A/(e - e_{\min}) \cdot (p/p_{ref})^b$ | Elasticity model for FRS |
| 7.3 | $\tau = \tau_{st} + \tau_{cyc}\sin(\omega t)$ | Cyclic shear stress decomposition |
| 7.4 | $CRR = CRR_{7.5} \cdot K_M K_\sigma K_\alpha$ | Berkeley School CRR adjustment |
| 7.5 | $CRR_{7.5} = 0.06\exp(-9\psi_k)$ | State parameter liquefaction boundary |
| 7.6 | $\dot{\bar{\sigma}}_{mi}/\bar{\sigma}_{mi} = -Z_r\,\dot{\alpha}/\pi$ | Third Axiom: PSR softening |
| 7.7 | $Z_r = 134 + 93\psi + 21\psi^2$ | PSR softening parameter trend |

---

## Symbol Table

| Symbol | Name | Definition |
|--------|------|------------|
| $CSR$ | Cyclic stress ratio | $\tau_{cyc}/\sigma'_{vo}$ (or $q/2\sigma'_{3c}$ in triaxial) |
| $CRR$ | Cyclic resistance ratio | CSR causing failure in a given number of cycles |
| $CRR_{15}$ | Reference CRR | CRR for failure at 15 cycles |
| $CRR_{7.5}$ | Magnitude-7.5 CRR | CRR from case histories at $M = 7.5$ earthquake |
| $\tau_{st}$ | Static shear stress | Drained bias shear stress before cyclic loading |
| $\tau_{cyc}$ | Cyclic shear stress | Amplitude of applied cyclic shear |
| $\text{SBR}$ | Static bias ratio | $\tau_{st}/\sigma'_{vo}$, dimensionless static component |
| $\text{ISR}$ | Image stress ratio | $\approx M_i/2$, controls stiffness in simple shear |
| $\text{LSR}_o$ | Initial loading stress ratio | $(\tau_{st} + \tau_{cyc})/\sigma'_{vo}$, total loading at start |
| $K_M$ | Magnitude scaling factor | Adjusts CRR for earthquake duration |
| $K_\sigma$ | Stress-level correction | Adjusts CRR for overburden stress |
| $K_\alpha$ | Static shear correction | Adjusts CRR for sloping ground |
| $Z_r$ | PSR softening parameter | Rate of yield surface shrinkage per unit rotation |
| $\alpha$ | Principal stress direction | Angle of $\sigma_1$ from vertical |
| $\bar{\sigma}_{mi}$ | Image mean stress | Yield surface size parameter in *NorSand* |
| $N$ | Number of cycles | Cycles to a failure criterion |
| $\psi_k$ | Characteristic state parameter | 80--90th percentile $\psi$ for a stratum |
| $q_{c1N}$ | Normalised CPT resistance | Stress-level corrected CPT tip resistance |
| $(N_1)_{60}$ | Corrected SPT blow count | Energy- and stress-corrected SPT |
| $CLRL$ | Critical level of repeated loading | CSR below which liquefaction never occurs |
| $\lambda_{10}$ | CSL slope (log base 10) | Slope of critical state line |
| $D_r$ | Relative density | $(e_{\max} - e)/(e_{\max} - e_{\min})$ |

---

## Connections to Practice

### Relevance to [[Nataka TSF]]

1. **Seismic context.** Mozambique is not a high-seismicity area, but seismic risk is not zero. The state parameter approach (Equation 7.5) provides a straightforward screening criterion: if the in-situ $\psi_k$ can be estimated from CPT data (Chapter 4), the cyclic liquefaction resistance follows directly from a single equation without needing fines corrections, $K_\sigma$, or $K_\alpha$ adjustments.

2. **Tailings are silts, not clean sands.** The Berkeley School charts were developed for clean sands with less than 5% fines. Applying them to tailings (which typically have 20--70% fines) requires massive and speculative fines corrections. The state parameter approach avoids this entirely -- the correct CSL for the actual tailings gradation is all that is needed.

3. **Machine-induced vibrations.** Cyclic loading at Nataka is not limited to earthquakes. Vibroseis trucks (for geophysical surveys), heavy equipment traffic on partially saturated fill, and wave loading from the nearby Indian Ocean can all induce cyclic pore pressures. The fatigue framework (log-linear pore pressure accumulation with $N$) applies to all such loadings, not just seismic events.

4. **Compaction verification.** The relationship between $CRR_{15}$ and $\psi$ (Figure 7.11) provides a direct link between compaction density targets and cyclic liquefaction resistance. For Lift 1 sand fill, achieving $\psi < -0.10$ gives $CRR_{15} > 0.25$, which represents substantial cyclic resistance.

5. **Principal stress rotation in dam slopes.** Under seismic loading, soil elements in the Nataka TSF embankment will experience principal stress rotation, not just cyclic stress magnitude changes. The Third Axiom framework shows that this rotation effect dominates the pore pressure response. Standard cyclic triaxial tests underestimate the pore pressure generation that would occur under realistic earthquake loading involving principal stress rotation.

6. **The CSD path warning from Chapter 6 extends to cyclic conditions.** If pore pressures from cyclic loading migrate upward and reduce effective stress in the dam shell while gravity shear stresses remain constant, the soil follows a CSD-like path toward failure. This mechanism contributed to the delayed failure at [[chapter-01-introduction|Lower San Fernando Dam]].

---

## Sources
- Chapter 7 (pp. 315--378) of *Soil Liquefaction: A Critical State Approach*, 2nd ed., Jefferies, M.G. and Been, K., CRC Press, 2016.
