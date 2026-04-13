---
title: "Chapter 2 — Dilatancy and the State Parameter"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, dilatancy, state-parameter, critical-state, void-ratio, CSL, stress-dilatancy, triaxial, plane-strain]
---

# Chapter 2 — Dilatancy and the State Parameter

This chapter establishes the experimental evidence and historical foundations for the **state parameter** and **stress--dilatancy** frameworks. It provides the essential background needed for the constitutive modelling (Chapter 3) and the static and cyclic liquefaction treatments (Chapters 6 and 7). The chapter moves from first principles of volume-change behaviour through to generalised (non-triaxial) stress conditions.

---

## 2.1 Framework for Soil Behaviour

### 2.1.1 Dilatancy

Dilatancy -- the tendency of soils to change volume during shearing -- is a defining characteristic of particulate media. Dense soils expand during shear; loose soils contract. Reynolds (1885) was the first to identify this behaviour, and it has remained central to soil mechanics ever since.

Two distinct definitions of dilatancy exist, though they are often conflated:

- **Absolute definition:** the total change in volumetric strain from the initial condition.
- **Rate definition:** the ratio of the rate (or increment) of volumetric strain change to the rate (or increment) of shear strain.

The absolute definition is the integral of the rate definition over the stress path. A soil can be globally contractive in absolute terms while instantaneously dilating by the rate definition. The textbook adopts the **rate definition** because it is directly linked to the work done during deformation and is therefore fundamental to plasticity-based constitutive models (Figure 2.1).

![Figure 2.1 — Dilatancy concept](/assets/cssm/ch02/fig2.1-dilatancy-concept.png)
*Figure 2.1: Classic shear behaviour of soils. (a) Stress-displacement for dense, medium, and loose sands. (b) Volume change response — dense soils dilate, loose soils contract, both converge on the critical void ratio. (c) Critical void ratio as a function of confining stress (after Casagrande, 1936).*

### 2.1.2 Critical State

Casagrande (1936) discovered, using shear box tests, that loose sands contract and dense sands dilate until they converge on approximately the same void ratio at large strains (Figure 2.2). He called this the **critical void ratio**. His motivation was practical -- engineering a dam (Franklin Falls Dam, New Hampshire) that would not liquefy.

The relationship between the critical void ratio and mean effective stress is called the **critical state locus** (CSL). Traditional geotechnical practice handles density by assigning different friction angles to dense and loose states of the same geological material (e.g. $\phi' = 32°$ loose vs $\phi' = 36°$ dense), without offering any relationship between them. This is intellectually unsatisfying because a soil's intrinsic properties are not density-dependent; state merely determines how those intrinsic properties are expressed as engineering behaviour.

The critical state was defined by Roscoe et al. (1958) as the condition at which a soil **continues to deform at constant stress and constant void ratio**. Two conditions must be met: (1) constant void ratio, and (2) no propensity to change from that condition. Confusion about the critical state almost always stems from ignoring condition (2).

Castro (1969) achieved the steady state in load-controlled triaxial tests on loose samples, while Poulos (1981) formalised the steady-state definition: continuous deformation at constant volume, constant effective stress, and constant shear stress. Strain-rate-controlled testing is actually preferable because it avoids inertial corrections and produces better post-peak data. For practical purposes, the critical state and steady state can be treated as equivalent (Been et al., 1991).

The CSL is commonly approximated as a semi-logarithmic straight line:

$$
e_c = \Gamma - \lambda \ln(p')  \tag{2.1}
$$

where $\Gamma$ and $\lambda$ are intrinsic soil properties (independent of fabric, stress history, etc.). The parameter $\Gamma$ is the intercept at $p' = 1$ kPa by convention. When base-10 logarithms are used, the notation $\lambda_{10}$ applies, with $\lambda_{10} = 2.303\,\lambda$.

The critical state also has a stress-ratio aspect: the shear stress at the critical state is expressed through the critical friction angle $\phi_c$ (or $\phi_{cv}$), or equivalently the critical stress ratio $M$.

### 2.1.3 Stress--Dilatancy

The observed correlation between density and strength led Taylor (1948) and Bishop (1950) to decompose the friction angle into a dilational component and a frictional component (Figure 2.3). Rowe (1962) placed this on a rigorous footing in his seminal paper on **stress--dilatancy theory**, demonstrating that an intimate relationship between the mobilised stress ratio and the plastic strain rates exists throughout the entire stress--strain path -- not only at peak strength. Rowe's original proposition (compression positive convention):

$$
\frac{\sigma'_1}{\sigma'_3} = K\left(1 - \frac{\dot{\varepsilon}_v}{\dot{\varepsilon}_1}\right)  \tag{2.2}
$$

where $K$ is related to the interparticle friction. Early data showed $K$ evolving with strain, so it is not strictly constant. Nevertheless, Equation 2.2 establishes dilation as a work-transfer mechanism between principal stress directions.

Using stress invariants, the stress ratio and dilatancy are defined as:

$$
\eta = \frac{q}{p'} \tag{2.3}
$$

$$
D = \frac{\dot{\varepsilon}_v}{\dot{\varepsilon}_q} \tag{2.4}
$$

The anticipated stress--dilatancy relationship takes the general form:

$$
\eta = f(M_f, D^p)  \tag{2.5}
$$

where $D^p$ uses only the plastic component of the strain rates and $M_f$ is the operational friction ratio. Reducing test data to $\eta$ and $D$ produces a dimensionless, stress-level-independent framework -- one of the hallmarks of a proper constitutive model.

---

## 2.2 State Parameter Approach

### 2.2.1 Definition

The **state parameter** $\psi$ is defined as the difference between the current void ratio and the critical-state void ratio at the current mean effective stress (Figure 1.1 in [[chapter-01-introduction]]):

$$
\psi = e - e_c  \tag{2.6}
$$

- $\psi > 0$: soil is looser than critical -- contractive tendency, potential for liquefaction.
- $\psi < 0$: soil is denser than critical -- dilative tendency, higher peak strength.
- $\psi = 0$: soil is at the critical state.

Using $e_c$ captures the reference soil structure; using $e$ captures the current density. The state parameter is preferred over void ratio or relative density alone because high confining stress suppresses dilatancy -- hence state must account for stress level as well as density. Figure 2.4 demonstrates this with Kogyuk sand: samples at the same relative density but different stress levels (e.g. tests 37 and 103, or 112 and 113) show wildly different stress paths, whereas samples at the same $\psi$ but different densities and stress levels (e.g. tests 108 and 103, or 45 and 112) show similar normalised behaviour.

The practical value of $\psi$ is that many soil properties and behaviours are simple functions of the state parameter. Beyond this, $\psi$ is fundamental to constitutive models whose properties are invariant with soil density and stress level.

### 2.2.2 Theoretical Basis

A thought experiment provides the theoretical justification for $\psi$. Consider a soil element at void ratio $e$ not on the CSL, sheared under constant mean stress. The state path is approximately a straight line in $e$--$\log p'$ space toward the CSL (Figure 2.5). The total volumetric strain from initial to critical state is:

$$
\varepsilon_v = -\frac{\Delta e}{1 + e_i} = -\frac{e_f - e_i}{1 + e_i}  \tag{2.7}
$$

Since $e_f = e_c$ at the critical state, substituting $\psi = e_i - e_c$ gives:

$$
\varepsilon_v = \frac{\psi}{1 + e_i}  \tag{2.8}
$$

If shear zones are roughly 10 particles thick and formal shear strains are $\varepsilon_q \approx 0.2$--$0.3$, then the average dilatancy over the state path is:

$$
D_{ave} = \frac{\varepsilon_v}{\varepsilon_q} \approx 4\,\frac{\psi}{1 + e}  \tag{2.9}
$$

The key insight is that average dilatancy is approximately **linearly related** to $\psi$ and essentially **independent of stress level**. This was the basis for Been and Jefferies (1985) proposing $\psi$ as a universal normalising index for soil behaviour.

### 2.2.3 Using Initial Versus Current Void Ratio

Two conventions exist:

- $\psi_o = e_o - e_c$ at $p'_o$: the state parameter measured at the start of the loading path, using initial void ratio and the corresponding point on the CSL.
- $\psi = e - e_c$ at current $p'$: the state parameter at the current point in the loading path.

The $\psi_o$ approach is more convenient when reducing laboratory test data, because initial conditions are readily available from test reports. However, for constitutive modelling the current-value definition $\psi$ is more natural and mathematically simpler.

### 2.2.4 Experimental Evidence for the Approach

A substantial database of drained triaxial compression tests exists for roughly 35 sands to sandy silts, compiled by Golder Associates since the 1980s and supplemented with data from the literature (Table 2.1). The database includes laboratory standard sands (Monterey, Ottawa, Toyoura, Ticino, etc.), natural sands (Erksak, Kogyuk, Nerlerk, Alaskan Beaufort, etc.), and tailings sands and silts (Hilton Mines, Highland Valley copper, Faro lead-zinc, Syncrude oil sand tailings, etc.).

Figure 2.6 shows $D_\text{min}$ versus $\psi_o$ for 20 soils: the data cluster within $D_\text{min} \approx \pm 0.2$ of the line $D_\text{min} = 3\psi_o$. This holds across clean quartz sands through to silty sands and from 19 to 1200 kPa effective confining stress. Similarly, the peak friction angle (Figure 2.7) and the stress--dilatancy component $\phi_{tc} - \phi_c$ (Figure 2.8) correlate well with $\psi_o$, with $\phi_c \approx 31°$ for sub-rounded hard quartz sands. Volumetric strain at peak strength (Figure 2.9) shows that a state of about $\psi_o \approx -0.06$ is needed for net dilation to occur and for reasonable confidence that undrained strength exceeds drained strength.

### 2.2.5 Normalised and Other Variants of the State Parameter

Several normalisations of $\psi$ have been proposed:

- **$\psi/(e_\text{max} - e_\text{min})$** (Hird and Hassona, 1986): does not improve the $\phi$--$\psi$ correlation (Figure 2.10), and $e_\text{max}$ is a dubious and poorly repeatable parameter.
- **$\psi_o/\lambda_{10}$**: does not improve predictions (Figure 2.11); scatter increases at denser states.
- **$\psi_o/(1+e_o)$**: gives a small improvement (Figure 2.12), consistent with the theoretical Equation 2.9, but the practical benefit is marginal.
- **Equivalent granular void ratio $e^*$** (Thevanayagam et al., 2002): adjusts void ratio for the fraction of fines not transferring forces.

$$
e^* = \frac{e + (1-b)f_c}{1 - (1-b)f_c}  \tag{2.10}
$$

This aims to coalesce a family of CSLs for different fines contents into a single equivalent granular steady-state line (EG-SSL). While elegant, fines affect both $\Gamma$ and $\lambda$, making the underlying simplification incorrect in general.

- **Relative state parameter index $\xi_R$** (Boulanger, 2003): uses relative density instead of void ratio and an assumed universal CSL -- an unnecessary backward step that does not fit the data except for a narrow range of single-sized quartz sands.

The simple, original definition of $\psi$ remains the most effective and fundamental.

### 2.2.6 State--Dilatancy (Soil Property $\chi$)

A **state--dilatancy law** is defined analogously to stress--dilatancy:

$$
D_\text{min} = \chi_{tc} \cdot \psi  \tag{2.11}
$$

where $\chi_{tc}$ is a soil property measured under drained triaxial compression. The condition $\psi = 0$ naturally gives $D_\text{min} = 0$, which is the critical state. There is no offset (constant) term -- stress change is a kinematic consequence of strains, not the input.

Figure 2.13 shows $\chi_{tc}$ determined for several sands (Erksak: 3.5; Ottawa: 4.8; Hilton Mines: 2.7; Brasted: 2.8; Alaska Beaufort: 3.6; Nerlerk: 5.2). Normalising $D_\text{min}$ by $\chi_{tc}$ collapses the data from Figure 2.6 onto a much tighter trend (Figure 2.14), confirming that $\chi$ is a genuine soil property. In practice, $D_\text{min} = D^p_\text{min}$ at peak strength (no elastic strain rates at a limiting condition), so the only data processing needed is the change in void ratio from the start of the test to peak strength and the mean stress at peak.

### 2.2.7 Influence of Fabric

Although $\psi$ is the major controlling variable, it does not fully describe sand behaviour. Figure 2.15 shows two Kogyuk sand samples prepared by moist tamping and wet pluviation to the same density and confining stress (same $\psi$). The deviator stress curves and ultimate strengths are similar, but the volumetric strain histories and maximum dilation rates differ markedly. The only difference is the fabric induced by the preparation method.

Reported effects of fabric on the friction angle amount to about $\pm 2°$ (Arthur and Menzies, 1972; Oda, 1972; Tatsuoka, 1987), which is comparable to the overall scatter in the $\phi$--$\psi_o$ relationship (Figure 2.17). Fabric also matters for cyclic behaviour: Nemat-Nasser and Tobita (1982) showed that for a state parameter change of 0.07, the cyclic stress to trigger liquefaction in 10 cycles drops by 32% (Figure 2.18).

Particle mechanics approaches (Rothenburg and Bathurst, 1989, 1992) offer a path forward, where the coordination number serves as a scalar analogue of $\psi$ for packing density and fabric is captured through contact orientation and force distribution tensors.

### 2.2.8 Influence of OCR

Tests on Erksak sand (Figure 2.19) show that when $\text{OCR} = 4$ and the state parameter is calculated at the yield point (the maximum past mean stress), the influence of OCR on friction angle is negligible. This confirms that $\psi$ is associated with the current yield surface: overconsolidation is an unloading from a plastic state into an elastic domain, and the yield surface remains essentially unchanged. At the start of shearing, the void ratio calculation for OCR = 4 gives an apparent 1° drop in $\phi$ -- but this is an artefact of the void ratio measurement, not a real weakening.

### 2.2.9 Effect of Sample Size

Jefferies et al. (1990) tested Ticino sand samples from 36 to 289 mm diameter at the same void ratio and confining stress. Peak dilatancy was the same for all sizes, but three scale effects appeared (Figure 2.20):

1. **Initial modulus** varies with sample size.
2. **Volumetric strain** at a given axial strain changes progressively -- total volumetric contraction at 6% axial strain ranged from +4.5% (small) to only 3% (large).
3. **Post-peak brittleness** increases with sample size because larger samples develop multiple shear bands (Figure 2.21) rather than the single band typical of standard-sized specimens.

These scale effects are important when transferring laboratory-derived parameters to field-scale problems (footings, [[Nataka TSF|tailings dams]], land reclamation).

---

## 2.3 Evaluating Soil Behaviour with the State Parameter

A crucial distinction must be drawn between (Table 2.2):

| Term | Meaning | Examples |
|------|---------|----------|
| **Intrinsic properties** | Independent of state or boundary conditions; unambiguously measurable | Grain size, shape, mineralogy, interparticle friction, CSL |
| **State** | The conditions under which the soil exists: void ratio, stresses, fabric | $\psi$, OCR, $K_o$, relative density |
| **Boundary conditions** | Imposed from outside; do not change the soil but affect its behaviour | Drained/undrained, distance to drainage, free surface |
| **Behaviour** | Response to applied boundary conditions; depends on properties and state | $\phi'$, undrained strength, dilation rate, CPT resistance |
| **Parameters** | Quantified properties for engineering models | $\Gamma$, $\lambda$, $M_{tc}$, $\chi_{tc}$, $G$, Poisson's ratio |

Because undisturbed sampling of sand is essentially impossible (fabric is destroyed and density is altered), characterising sand behaviour requires:

1. **Laboratory tests** on reconstituted samples to determine intrinsic properties ($\Gamma$, $\lambda$, $M_{tc}$, $\chi_{tc}$) as functions of $\psi$.
2. **In-situ tests** (CPT, SBPM, shear wave velocity) to determine the in-situ state.
3. **In-situ tests** to determine properties not measurable in the laboratory (e.g. $G_\text{max}$).

The relationship between parameters and testing is illustrated in Figure 2.22 and the key laboratory tests are summarised in Table 2.3. Interpretation of in-situ tests is an inverse boundary-value problem requiring a constitutive model, so laboratory testing is always needed to anchor the interpretation (Chapter 4).

---

## 2.4 Determining the Critical State

### 2.4.1 Triaxial Testing Procedure

The preferred method for determining the CSL is a series of triaxial tests on **loose samples**, which contract monotonically to the critical state without strain localisation. Both drained and undrained tests are used:

- **Undrained tests** reach the critical state at smaller strains because pore-pressure changes drive large state changes rapidly. However, achieving data on the lower-pressure part of the CSL ($p' < 200$ kPa) requires initial consolidation to $p' > 2$ MPa, which is inconvenient and may involve grain crushing.
- **Drained tests** on loose samples reach the critical state more slowly (often $> 20\%$ axial strain) but can extend the CSL to high stresses using routine equipment.

Testing requirements (Appendix B):

- Uniform samples prepared to a loose, predetermined void ratio.
- Full saturation.
- Void ratio accuracy within $\pm 0.003$.
- Measurement system capable of handling low stresses and high pore-pressure rates.

Testing should follow a two-phase protocol:

- **Phase 1** (5 tests): three undrained at $D_r \approx 10\%$, 20%, 30% at about 350 kPa; two drained at $D_r \approx 20\%$ at 200 and 800 kPa.
- **Phase 2** (3+ tests): fill gaps in the CSL distribution based on Phase 1 results.

About 1 in 10 samples is typically lost to membrane leaks, saturation issues, or void ratio inconsistencies.

### 2.4.2 Determining the CSL from Test Results (Soil Properties $\Gamma$, $\lambda$)

Identifying the critical state from test data requires judgement. The critical state is defined as $D = 0$ **and** $\dot{D} = 0$ -- both the dilatancy and its rate of change must be zero to ensure a genuine steady condition rather than a transient. Key cautions:

- **Steady state in undrained tests** (Figure 2.23): a clearly defined steady state with constant $q$ and $p'$ after about 8% strain makes determination straightforward.
- **Quasi-steady state** (Figure 2.24): some tests appear to reach steady state at about 8% strain but then resume dilating. This temporary condition (also called the "phase transformation" by Ishihara) must not be confused with the true critical state. Treating the quasi-steady state as the critical state is the principal reason researchers have reported non-unique CSLs.
- **Drained tests on loose samples** (Figure 2.27): take $> 20\%$ strain but clearly reach critical state; the end-point data nicely complement undrained test data and extend the CSL to higher stresses.

Figure 2.26 shows the CSL for Erksak 330/0.7 sand determined from undrained tests. Load-controlled and strain-controlled tests, compression and extension, all plot on the same locus. With care, the CSL can be defined to within $\pm 0.01$ in void ratio.

A semi-log trend is acceptable in most cases, but curvature becomes visible at high stresses (Figure 2.28, Guindon Tailings B; Figure 2.29, Toyoura sand). A power-law alternative:

$$
e = 0.9325 - 0.19\left(\frac{p'}{p'_\text{ref}}\right)^{0.7}  \tag{2.12}
$$

Both idealisations are acceptable; the definition of $\psi$ does not depend on which equation is used for the CSL.

### 2.4.3 Critical Friction Ratio (Soil Property $M_{tc}$)

The stresses at the critical state define $q_c / p'_c = M$. With quartz sands, $M$ is essentially pressure-independent up to at least 2.5 MPa. The subscript $tc$ denotes the triaxial compression reference condition. The relationship to friction angle is:

$$
M_{tc} = \frac{6\sin\phi_c}{3 - \sin\phi_c} \quad \text{(triaxial compression)}  \tag{2.13}
$$

Three methods for determining $M_{tc}$:

**(a) Bishop's method** (recommended): a series of drained triaxial compression tests on samples spanning a range of densities. Each test yields peak $\eta_\text{max}$ and peak $D_\text{min}$. Plotting $\eta_\text{max}$ versus $D_\text{min}$ and projecting to $D_\text{min} = 0$ gives $M_{tc}$ (Figure 2.30). For Erksak sand, $M_{tc} = 1.26$. At least five tests distributed across a range of initial states (relative density 40--100%) are needed.

**(b) Direct measurement from CSL tests**: the terminal value of $\eta$ in tests carried to the critical state gives $M_{tc}$ directly, but requires strain-controlled equipment and care with area corrections. This data is generated as a byproduct of CSL determination.

**(c) Ring shear**: large-displacement tests measure limiting $\phi_c$, but the full stress state is not known ($p'$ is unknown in ring shear), and the assumption that $\phi_c$ is invariant with intermediate principal stress is incorrect. Use methods (a) and (b) together.

---

## 2.5 Uniqueness of the CSL

Uniqueness means that there is only one critical void ratio for each mean effective stress -- a single-valued function. Published studies challenging uniqueness can be summarised as follows:

- Konrad (1993) obtained a band of steady states for Hostun RF sand, but closer examination reveals he was measuring the quasi-steady state (phase transformation), not the true critical state. His UF line is in fact identical to the accepted CSL.
- Kuerbis and Vaid (1988) and Vaid et al. (1990a) found different CSLs for different sample preparation methods. However, Figure 2.32 shows that within experimental precision, the CSL for Erksak 330/0.7 is the same for moist-tamped and pluviated samples.
- The apparent S line (drained) versus F line (undrained) distinction (Casagrande, 1975; Alarcon-Guzman et al., 1988) arises because drained tests on dense sands rarely reach the true critical state due to strain localisation. This is a testing artefact, not a fundamental non-uniqueness.

The strongest evidence for uniqueness comes from plotting the peak dilation rate in drained tests against $\psi$ at peak conditions, where $\psi$ is measured relative to the CSL determined from undrained tests (Figure 2.33). The trend passes through the origin, confirming that drained and undrained tests relate to the same CSL.

The remainder of the uniqueness discussion is deferred to Chapter 6, where the constitutive model (Chapter 3) provides additional insight. Different behaviours under extension, compression, and different drainage conditions are predicted perfectly well by a model that assumes a unique CSL.

---

## 2.6 Soil Properties

### 2.6.1 Summary of Properties for a Mechanics-Based Framework

Table 2.5 summarises the four critical state properties:

| Property | Name | Typical range | Role |
|----------|------|--------------|------|
| $\Gamma$ | Gamma | 0.9--1.4 | Altitude of CSL at $p' = 1$ kPa |
| $\lambda_{10}$ | lambda-10 | 0.02--0.07 (clean quartz sands); 0.10--0.25 (sandy silts to silts); 0.04--0.07 (well-graded) | Slope of CSL in $e$--$\log_{10}(p')$ space |
| $M_{tc}$ | M-tc | 1.20--1.35 (quartz sands); 1.15--1.25 (soft sands); 1.30--1.60 (tailings/silts) | Critical friction ratio in triaxial compression |
| $\chi_{tc}$ | chi-tc | $> 4$ (well-graded); $\sim 4$ (uniform quartz); $\sim 3$ (uniform soft sands) | State--dilatancy coefficient |

All properties are dimensionless, intrinsic, and measured under triaxial compression. Elasticity (Poisson's ratio, $G$) must be determined in-situ (Chapter 4).

### 2.6.2 Example Properties of Several Sands and Silts

Table 2.1 provides the full database. Figure 2.34 displays the CSLs for natural sands, laboratory sands, and tailings. The CSL is not always linear on a semi-log plot -- curvature increases at high stresses and for well-graded soils.

Broad correlations exist between CSL parameters and index properties, but they are loose:

- $\lambda_{10}$ increases with fines content (Figure 2.36), but there is substantial scatter.
- $\Gamma$ (specifically $\Gamma_1$, the CSL intercept at $p' = 1$ kPa) is approximately related to $e_\text{max}$ (Figure 2.37).
- Well-graded soils behave differently from uniformly graded soils with similar fines content (Figure 2.38).
- No reliable relationship exists between $\chi_{tc}$ and $D_{50}$ or $\lambda_{10}$ (Figure 2.39).

These correlations provide rough preliminary estimates only. For actual engineering projects -- particularly mine tailings or carbonate sands, which are invariably atypical -- dedicated triaxial testing is required. The cost of a comprehensive suite of CSL tests is on the order of \$15,000, which is modest relative to the importance of the results.

### 2.6.3 Soil Property Measurement

Judgement-based estimation of critical state properties from index tests is never acceptable for mine tailings or carbonate sands. These materials will be atypical and must be tested. Table 2.5 serves as a guide for developing engineering judgement, not as a substitute for proper testing.

---

## 2.7 Plane Strain Tests for Soil Behaviour

### 2.7.1 Simple Shear

The simple shear test imposes a shear stress horizontally while permitting vertical strain but no horizontal extension (Figure 2.40). Its attraction is that it approximates plane-strain field loading conditions (e.g. beneath embankments, behind retaining walls) better than the triaxial test. Its fundamental limitation is that the principal stresses are not measured -- only the vertical effective stress, the horizontal shear stress, vertical strain, and shear strain are known. The Mohr circle of stress is therefore not uniquely defined.

Vaid and Sivathayalan (1996a) carried out undrained simple shear tests on Fraser River sand ($D_{50} = 300$ $\mu$m, fines $\approx 1\%$) prepared by water pluviation (Figure 2.41). Triaxial compression and extension tests on the same sand by Vaid and Thomas (1995) allow a direct comparison (Figure 2.42): for samples at the same initial state ($e_c = 0.880$, $\sigma'_{vc} = 100$ kPa), simple shear behaviour falls between triaxial compression and triaxial extension in terms of both peak shear stress and large-strain response. The compression sample (loaded in the pluviation direction) is stiffest and most dilatant; the extension sample is softest. The challenge is to explain this with a single constitutive model assuming a unique CSL.

### 2.7.2 Imperial College and NTU Plane Strain Tests

Cornforth (1961, 1964) used the newly developed Imperial College plane strain apparatus to test Brasted sand under triaxial compression, triaxial extension, and plane strain at three densities and two stress levels. This dataset remains one of the most important in soil mechanics because it directly evaluates the effect of intermediate principal stress on critical-state properties.

Figure 2.45 shows Cornforth's data plotted as $\eta_\text{max}$ versus $D_\text{min}$:

- Triaxial compression: $M_{tc} = 1.27$ ($\phi_c \approx 31.6°$).
- Triaxial extension: $M_{te} = 0.81$ ($\phi_c \approx 27.9°$).
- Plane strain: $M_{ps} = 1.08$, giving $\phi_c \approx 33.4°$ for the average Lode angle of about $\theta = 15°$.

This represents a roughly 2° increase in frictional strength in plane strain over triaxial compression -- a finding confirmed by Green (1971) on Ham River sand and Schanz and Vermeer (1996) on Hostun sand. However, the data also show that $\phi_c$ drops by about 4° from triaxial compression to triaxial extension, contradicting the prevailing assumption that $\phi_c$ is invariant with the Lode angle.

The Lode angle in plane strain is not fixed -- it varies with peak dilatancy (Figure 2.46). This means $M$ cannot be read directly from Figure 2.45 for plane strain without the further processing described in Appendix C.

A modern variation on the Imperial College apparatus was developed at Nanyang Technological University by Wanatowski and Chu (2006), with automated measurement of the intermediate principal stress (Figure 2.44).

---

## 2.8 General Soil Behaviour from Triaxial Properties

### 2.8.1 Critical Friction Ratio in 3D Stress States: $M(\theta)$

The Lode angle $\theta$ captures the proportion of intermediate principal stress, ranging from $\theta = +30°$ (triaxial compression, $\sigma_2 = \sigma_3$) to $\theta = -30°$ (triaxial extension, $\sigma_2 = \sigma_1$). All other stress states lie between these limits. $M_{tc}$ is used as the soil property, and $M(\theta)$ describes how the critical friction ratio scales with Lode angle.

Figure 2.47 shows Cornforth's plane strain data plotted as critical friction ratio $M$ versus Lode angle after transformation to operating conditions. The data are bracketed by the Mohr--Coulomb and Matsuoka--Nakai failure criteria. The best fit to Brasted sand data is an average of the two criteria (Jefferies and Shuttle, 2002), with supporting evidence from Changi sand (Wanatowski and Chu, 2007).

A common error is to treat plane strain as equivalent to triaxial compression. In plane strain, the stress state develops to accommodate the imposed zero-strain condition, so the Lode angle varies from test to test. Triaxial compression and plane strain are fundamentally different stress states.

### 2.8.2 Operational Friction Ratio in Stress--Dilatancy: $M_i$

The operational friction ratio $M_i$ (sometimes called $M_f$ by Rowe) is the parameter $K$ in Rowe's Equation 2.2, recast into stress-invariant form. From Rowe's perspective, $K$ relates to mineral friction $\phi_\mu$, and the operating sliding contact friction $\phi_f$ satisfies $\phi_\mu \leq \phi_f \leq \phi_c$.

Rather than treating $K$ as constant, $M_i$ evolves with strain. The general requirement is $M_i \Rightarrow M$ as $\varepsilon_q \Rightarrow \infty$. Figure 2.48 shows drained triaxial data for Erksak sand reduced to $\eta$ versus $D^p$ space:

- **Dense samples** (Figure 2.48a): linear stress--dilatancy with $D^p = M - \eta$ and $M_i \approx 1.05$ pre-peak. The line crosses $D^p = 0$ at $M_i \approx 1.05$, not at $M_{tc} = 1.26$. Post-peak, $\eta$ declines back to $M_{tc}$ as $D^p \to 0$.
- **Loose samples** (Figure 2.48b): linear with $M_i \approx 1.22$, projecting to $M \approx 1.22$ at $D^p = 0$ -- close to but not quite $M_{tc}$.
- **Combined** (Figure 2.48c): the best fit through all data gives $M_{tc} = 1.26$, consistent with Bishop's method.

The transient condition where $D^p = 0$ in dense samples (the point where contraction reverses to dilation) is the **image condition** (Ishihara et al., 1975), also called the phase transformation. This is a projection of the state onto the $q$--$p'$ plane, not a phase change or pseudo-steady state.

Table 2.6 summarises proposed relationships for $M_i$:

| Author | Relationship | Notes |
|--------|-------------|-------|
| Manzari and Dafalias (1997) | $M_i = M + m\psi$ | $m = 4$ for Toyoura sand |
| Li and Dafalias (2000) | $M_i = M\exp(m\psi)$ | $m = 4$ for Toyoura sand |
| Jefferies and Shuttle (2002) | $M_i = M(1 - \lvert\psi\rvert / M_{tc})$ | Matches Nova's rule on average at $D_\text{min}$ |

From Figure 2.49, $\psi$ alone may not be a sufficient state variable for controlling $M_i$. The Erksak data suggest that fabric also plays a role. A product of two state measures ($\psi$ and a fabric tensor) can ensure $M_i \Rightarrow M$ as $\psi \Rightarrow 0$ while accounting for fabric detail.

### 2.8.3 General State--Dilatancy

The state--dilatancy law $D_\text{min} = \chi_{tc} \cdot \psi$ was defined under triaxial compression. Cornforth's data (Figure 2.50) allow testing this under other loading conditions. The slope of $D_\text{min}$ versus $\psi$ (i.e. $\chi$) appears to differ between triaxial compression, triaxial extension, and plane strain.

However, when $D_\text{min}$ is scaled by the ratio $M_{tc}/M$ -- where $M$ is the appropriate value for the loading condition (compression, extension, or plane strain) -- the data from all three loading conditions collapse onto a single trend (Figure 2.51). This confirms that:

- $\chi$ is properly defined under triaxial compression.
- It scales naturally to other loading conditions through $M_{tc}/M$, exactly as $M_{tc}$ itself scales.
- The theoretical reason for this scaling comes from constitutive modelling (Chapter 3).

---

## Connections to TSF Practice at Nataka

The concepts in this chapter are directly relevant to the [[Nataka TSF]] and geotechnical operations at [[Kenmare Moma Mining|Kenmare Moma]]:

- **State parameter for tailings characterisation**: the sands and silts deposited in the Nataka TSF exist across a wide range of void ratios and stress levels. Assigning a single friction angle (e.g. $\phi' = 30°$ for loose tailings) ignores the controlling role of $\psi$. The state parameter framework provides a rational basis for evaluating whether a given zone within the TSF is contractive ($\psi > 0$, liquefaction susceptible) or dilative ($\psi < 0$, stable under shear).

- **CSL for tailings**: Table 2.1 includes critical state properties for several tailings materials (Hilton Mines, Highland Valley copper, Faro lead-zinc, Syncrude oil sand tailings, Sudbury nickel tailings, etc.). These provide reference values for comparison with Nataka tailings, which should have their own CSL determined through dedicated testing. Tailings typically have higher $M_{tc}$ (1.30--1.60) and higher $\lambda$ than clean sands.

- **[[Freeboard]] and liquefaction risk**: the chapter confirms that simply being denser than the CSL ($\psi < 0$) does not guarantee adequate post-liquefaction stability. About $\psi_o < -0.06$ is needed before there is reasonable confidence that undrained strength exceeds drained strength. This has implications for the minimum density specifications during Lift 1 construction.

- **In-situ state from CPT**: the state parameter framework requires in-situ measurement of $\psi$ (Chapter 4, using CPT). The laboratory testing programme determines $\Gamma$, $\lambda$, $M_{tc}$, and $\chi_{tc}$; the CPT then provides the field state. This two-pronged approach should be the basis for any liquefaction assessment at Nataka.

- **Scale effects**: the sample-size findings (Section 2.2.9) are a reminder that laboratory-derived volumetric strains and post-peak brittleness may not directly transfer to field scale. [[Nataka TSF|Tailings dams]] involve shear over zones hundreds of metres long -- the scale effects on brittleness and drainage are significant.

---

## Key Equations Summary

| Eq. | Name | Expression | Meaning |
|-----|------|-----------|---------|
| 2.1 | CSL (semi-log) | $e_c = \Gamma - \lambda\ln(p')$ | Semi-log CSL approximation |
| 2.2 | Rowe's stress--dilatancy | $\sigma'_1/\sigma'_3 = K(1 - \dot{\varepsilon}_v/\dot{\varepsilon}_1)$ | Principal stress ratio linked to dilation rate |
| 2.3 | Stress ratio | $\eta = q/p'$ | Deviatoric-to-mean stress ratio |
| 2.4 | Dilatancy | $D = \dot{\varepsilon}_v / \dot{\varepsilon}_q$ | Rate definition of dilatancy |
| 2.6 | State parameter | $\psi = e - e_c$ | Distance from CSL in void-ratio space |
| 2.9 | Average dilatancy | $D_{ave} \approx 4\,\psi/(1+e)$ | Theoretical average dilatancy over the state path |
| 2.11 | State--dilatancy law | $D_\text{min} = \chi_{tc}\cdot\psi$ | Maximum dilation rate as a function of state |
| 2.13 | Critical friction ratio | $M_{tc} = 6\sin\phi_c/(3-\sin\phi_c)$ | Stress ratio at critical state (triaxial compression) |

---

## Key Figures (Described)

- **Figure 2.1** -- Rate versus absolute definitions of dilatancy illustrated on a deviator stress / volumetric strain plot.
- **Figure 2.2** -- Casagrande's 1936 shear box results: loose and dense sands converge on the critical void ratio.
- **Figure 2.3** -- Bishop (1950) decomposition of friction into dilational and frictional components.
- **Figure 2.4** -- Kogyuk sand: same $\psi$ yields similar normalised behaviour regardless of density and stress level.
- **Figure 2.5** -- Idealised constant-$p'$ state path from initial state to CSL.
- **Figure 2.6** -- $D_\text{min}$ versus $\psi_o$ for 20 soils: the central validation plot for the state parameter approach.
- **Figure 2.15** -- Fabric effect: moist-tamped vs pluviated Kogyuk sand at same $\psi$ show different volumetric response.
- **Figure 2.20** -- Sample size effect on Ticino sand (36--289 mm diameter): peak dilatancy constant, volumetric strain and brittleness change.
- **Figure 2.26** -- CSL for Erksak 330/0.7 from undrained tests (load and strain controlled, compression and extension).
- **Figure 2.30** -- Bishop's method for determining $M_{tc}$: $\eta_\text{max}$ vs $D_\text{min}$ extrapolated to zero dilation.
- **Figure 2.34** -- CSLs for natural sands, lab sands, and tailings sands/silts.
- **Figure 2.45** -- Cornforth's data: stress--dilatancy in triaxial compression, extension, and plane strain.
- **Figure 2.47** -- $M(\theta)$ versus Lode angle: Brasted sand data bracketed by Mohr--Coulomb and Matsuoka--Nakai criteria.
- **Figure 2.48** -- Erksak sand stress--dilatancy in $\eta$--$D^p$ space: dense, loose, and combined.
- **Figure 2.51** -- Generalised state--dilatancy: $D_\text{min}$ scaled by $M_{tc}/M$ collapses triaxial compression, extension, and plane strain onto one trend.

---

## Sources
- Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf (Chapter 2, pp. 35--99)
