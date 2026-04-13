---
title: "Chapter 3 — Constitutive Modelling for Liquefaction"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, norsand, cam-clay, constitutive-model, yield-surface, plasticity, critical-state, dilatancy, state-parameter]
---

# Chapter 3 — Constitutive Modelling for Liquefaction

Study notes on Chapter 3 of *Soil Liquefaction: A Critical State Approach* (2nd ed.) by Mike Jefferies and Ken Been. This chapter develops the constitutive models that underpin the entire book, from Original Cam Clay through to *NorSand*.

---

## 3.1 Introduction

### 3.1.1 Why Model?

Constitutive modelling matters for three reasons beyond finite element analysis:

1. **Demystifying liquefaction.** The field has been plagued by dubious "concepts" (e.g. metastable particle arrangement) that substitute hand-waving for physics. A proper model shows that liquefaction is simply another constitutive behaviour, accessible to anyone who learns the soil properties.
2. **Interpreting in-situ tests.** In-situ tests do not measure soil properties directly — they measure a response to a loading process. Extracting properties from that response is an inverse boundary-value problem that requires a constitutive model.
3. **Capturing full-scale experience.** Civil engineering relies heavily on case-history evidence rather than prototype testing. Understanding case histories properly demands a mechanics framework, and mechanics rests on constitutive behaviour.

### 3.1.2 Why Critical State Theory?

A constitutive model for soil must explain changes in behaviour caused by changes in density. Despite this being obvious, void ratio (or relative density) is rarely included as a variable in constitutive models. The exceptions are models based on critical state theory, which naturally sets up critical state as the preferred starting point.

Critical state theory is more than just density dependence. It is an idealised framework that traces to the second law of thermodynamics, giving it a fundamental physical basis. Descriptive models fit test data but sacrifice insight into underlying mechanisms. Idealized models start from postulated mechanisms and derive behaviour — trading some curve-fitting accuracy for physical consistency.

### 3.1.3 Key Simplifications and Idealisation

Two simplifications are adopted throughout:

- **Isotropy.** Soils are intrinsically anisotropic, but isotropy is assumed because it is the functional core of the model — anisotropy is detail, not a make-or-break premise. Moreover, anisotropy can be approximated within an isotropic framework when evidence warrants it.
- **Small strain theory.** Standard small-strain theory is used, even though soil strains at failure can reach 50%. Incremental volumetric strains are integrated to track void ratio changes (a large-strain bookkeeping device), and large-strain analysis is invoked formally for in-situ test interpretation. Properties calibrated under small-strain definitions are assumed adequate for large-strain use.

### 3.1.4 Overview of This Chapter

The chapter develops the drained framework deliberately. Undrained behaviour arises from boundary conditions, not from intrinsic soil behaviour — so the drained response must be correctly captured first. There is no closed-form solution; all stress-strain curves are computed incrementally and can be integrated easily in a spreadsheet. The chapter introduces:

- The critical state representation (Sections 3.3)
- The Cambridge models: Original Cam Clay and Granta Gravel (Section 3.4)
- The state parameter view and why Cam Clay fails for sands (Section 3.5)
- *NorSand*: the generalised critical state model (Section 3.6)
- Validation against laboratory data (Section 3.7)
- Commentary on model features and extensions (Section 3.8)

---

## 3.2 Historical Background

The history of critical state soil mechanics centres on Cambridge, Massachusetts (Harvard and MIT) and Cambridge, England, with important contributions from Manchester (Victoria University), London (Imperial College), and Providence (Brown University). Even the U.S. Army Corps of Engineers played a guiding role in the early years.

### Key Concepts from Plasticity Theory

Soil exhibits two behaviours: **plasticity** (largely irrecoverable deformations) and **density dependence** (different behaviour at different void ratios, including dilatancy). Most soil models are built on plasticity theory, which provides a macro-scale abstraction of grain-scale mechanics. The essential ideas:

- **Strain decomposition** — total strain is split into elastic and plastic parts.

$$
\varepsilon = \varepsilon^e + \varepsilon^p \tag{3.1}
$$

- **Yield surface** — the locus in stress space that separates elastic from yielding states. Tresca (1864) first proposed such a condition.
- **Normality (associated flow)** — plastic strain increments are directed normal to the yield surface, not in the direction of the stress increment that triggered yielding (Figure 3.1: the hockey puck analogy — when two forces act on a puck via strings, the puck slides in the direction of the resultant force, not of the incremental force). Normality maximises the energy absorbed during yielding.

### The Mohr-Coulomb Problem

When plasticity was first applied to soils, the Mohr-Coulomb criterion was treated as a yield surface. Applying normality to this surface implies a dilation angle equal to the friction angle — far larger than anything measured in real soils (Figure 3.3). This is grossly unrealistic.

**Drucker et al. (1957)** resolved this by recognising that Mohr-Coulomb is not a yield surface at all. Rather, the yield surface must intersect the normal compression locus (NCL), coupling density states to all aspects of constitutive behaviour. The yield surface is bounded by an isotropic cap, and the Mohr-Coulomb line becomes a zero-dilation-rate condition — the critical state (Figure 3.4).

### Stress-Dilatancy and Energy Correction

Dilatancy was recognised as a work-transfer mechanism rather than an intrinsic strength contribution. Taylor (1948) first proposed the idea, Bishop (1950) first formalised it as an equation, and Rowe (1962) generalised it into a complete stress-dilatancy theory. The idea: soil strength reflects the critical friction ratio *M* that dissipates plastic work, with dilatancy acting as a correction transferring energy between principal stresses.

### Casagrande and the Critical Void Ratio

Casagrande's (1936) critical void ratio, developed at Harvard for the Corps of Engineers (to engineer a liquefaction-resistant dam at Franklin Falls, NH), provided an alternative to the NCL as the hardening basis. The critical state locus (CSL) relates void ratio and stress at a zero dilation rate — it is the Taylor/Bishop energy-corrected friction-angle concept expressed as a locus.

### The Cambridge Models

Roscoe et al. (1963), Roscoe and Burland (1968), and Schofield and Wroth (1968) pulled these ideas together into critical state soil mechanics (CSSM). Key features:

- Stress invariants express behaviour as the ratio of distortional to mean stress
- Yield surfaces are derived from idealised mechanisms for dissipating plastic work
- Normality is applied in $q$-$p'$ space
- The CSL links yield surface size to void ratio

Two models were produced: **Granta Gravel** (rigid plastic) and **Cam Clay** (elastic plastic). Both are self-contained, thermodynamically consistent, and complete constitutive models derived from just a few axioms.

### The Problem with Cam Clay for Sands

Despite its elegance, Cam Clay and its variants (including Modified Cam Clay) are avoided for modelling sands and silts because they cannot properly represent dilation in dense soils. Soils denser than the CSL are treated as overconsolidated, producing unrealistic stiffness and absurd strengths. The core issue: the assumption that all yield surfaces must intersect the CSL is unnecessary. The deficiencies are removed by returning to the original Drucker et al. (1957) premise and recognising that soils exist across a spectrum of states with an infinity of NCL — not a single NCL offset from the CSL by a fixed spacing ratio.

### State Parameter and NorSand

Two parameters are needed to characterise state: the [[state parameter]] $\psi$ (a measure of where the soil sits in $e$-$p'$ space relative to the CSL) and the overconsolidation ratio $R$ (a measure of proximity to the yield surface along the mean stress axis). Their definitions:

$$
\psi = e - e_c \tag{3.2}
$$

$$
R = \frac{p'_{\max}}{p'} \tag{3.3}
$$

*NorSand* (Jefferies, 1993) was the first state-parameter-based model and generalised critical state theory. Original Cam Clay turns out to be a special (degenerate) case of *NorSand* (Appendix H). The state parameter concept was subsequently incorporated into bounding-surface models, hyperbolic-plastic stiffness models, and stress-dilatancy models by other researchers.

---

## 3.3 Representing the Critical State

### 3.3.1 Existence and Definition of the CSL

Critical state models rest on an axiom (the **First Axiom of CSSM**):

$$
\exists\, C(e, q, p')\big|_{p' > 0}\;\ni\;\dot{\varepsilon}_v \equiv 0 \;\wedge\; \ddot{\varepsilon}_v = 0 \quad \forall \varepsilon_q \tag{3.4}
$$

This states that a unique function $C$ exists in $(e, q, p')$ space at which:

1. The volumetric strain rate is zero ($D = 0$)
2. The rate of change of dilatancy is also zero ($\dot{D} = 0$)

Equivalently:

$$
\exists\, C(e, q, p')\big|_{p' > 0}\;\ni\; D \equiv 0 \;\wedge\; \dot{D} = 0 \quad \forall \varepsilon_q \tag{3.5}
$$

Both dilatancy and its rate of change must vanish — this is the best way to think about the critical state because stress-dilatancy governs soil behaviour. This definition makes the CSL identical to the steady state of Poulos (1981), except that the flow structure at the steady state is undefined and unmeasurable.

Starting from an axiom avoids bogging down in arguments about experimental interpretation. The axiom is justified when the resulting theory matches stress-strain data for soils. The CSL is unique: for any given set of effective stresses, there is only one critical void ratio $e_c$, independent of strain conditions and direction from which the critical state is approached.

### 3.3.2 Critical State in Void Ratio Space

The CSL in $e$-$p'$ space is conventionally represented in semi-log form:

$$
e_c = \Gamma - \lambda \ln(p'_c) \tag{3.6}
$$

where $\Gamma$ is the altitude of the CSL (at $p' = 1$ kPa) and $\lambda$ is its slope on a natural-log scale.

Experimental evidence shows the CSL can be more complex over wide stress ranges — Erksak sand, for instance, has a distinct "knee" at about 1000 kPa where the stiffness transitions. Li and Wang (1998) proposed plotting $e$ against $(p')^\alpha$ with $\alpha = 0.7$. However, for most practical engineering in the 10-500 kPa stress range, the semi-log linearisation of Equation 3.6 is perfectly adequate.

### 3.3.3 Critical Stress Ratio $M(\theta)$

At the critical state, the stress relationship is:

$$
q = M p' \tag{3.7}
$$

The parameter $M$ was initially treated as a constant, but a constant $M$ implies tensile strength in extension — unrealistic. $M$ must vary with the Lode angle $\theta$, capturing the dependence on the intermediate principal stress. Triaxial compression is the reference condition, giving the soil property $M_{tc}$, while $M(\theta)$ is developed from it.

Chapter 2 concluded that an average of Mohr-Coulomb and Matsuoka-Nakai criteria best fits experimental data. Jefferies and Shuttle (2011) suggested a computationally efficient alternative (for $\theta$ in radians):

$$
M(\theta) = M_{tc} - \frac{M_{tc}^2}{3 + M_{tc}} \cos\!\left(\frac{3\theta}{2} + \frac{\pi}{4}\right) \tag{3.8}
$$

---

## 3.4 Cambridge View

### 3.4.1 Idealised Dissipation of Plastic Work

The starting point is the work done on a soil element per unit volume:

$$
\dot{W} = q\dot{\varepsilon}_q + p\dot{\varepsilon}_v \tag{3.9}
$$

where $q$, $p$ are the standard triaxial stress invariants and $\dot{\varepsilon}_q$, $\dot{\varepsilon}_v$ are work-conjugate strain increments. Breaking the work into plastic components using strain decomposition (3.1):

$$
\dot{W}^p = \dot{W} - \dot{W}^e = q\dot{\varepsilon}_q^p + p\dot{\varepsilon}_v^p \tag{3.10}
$$

Dividing by $p \dot{\varepsilon}_q^p$ gives a normalised rate of plastic working per unit distortion:

$$
\frac{\dot{W}^p}{p \dot{\varepsilon}_q^p} = \frac{\dot{\varepsilon}_v^p}{\dot{\varepsilon}_q^p} + \frac{q}{p} = D^p + \eta \tag{3.11}
$$

This identity holds regardless of the soil's dissipation mechanism — the plastic work done on the soil skeleton, in dimensionless terms, is simply the sum of the stress ratio $\eta$ and the plastic dilation rate $D^p$.

The **Cambridge idealisation** assumed that the dimensionless plastic energy dissipation rate is constant throughout plastic shearing:

$$
\frac{\dot{W}^p}{p \dot{\varepsilon}_q^p} = M \tag{3.12}
$$

Equating (3.11) and (3.12) produces the **stress-dilatancy relationship** (also called a flow rule):

$$
D^p = M - \eta \tag{3.13}
$$

At the critical state, $D^p = 0$ and $\eta = M$ — dilatancy acts as a work-transfer mechanism between principal stresses, with the critical friction ratio $M$ dissipating the plastic work.

### 3.4.2 Original Cam Clay and Granta Gravel

The stress-dilatancy relationship (3.13) describes the coupling between volumetric and shear plastic strains but does not specify when plastic yielding occurs. A yield surface is needed.

Using the definition $q = \eta p$, the stress change in shear becomes:

$$
\dot{q} = p\dot{\eta} + \eta\dot{p} \tag{3.14}
$$

Assuming work-hardening plasticity and applying normality from Drucker (1951):

$$
\frac{\dot{q}}{\dot{p}} = \frac{-1}{(\dot{\varepsilon}_q^p / \dot{\varepsilon}_v^p)} = -D^p \quad \Rightarrow \quad \dot{q} = -D^p \dot{p} \tag{3.15}
$$

Substituting (3.14) into (3.15) and rearranging:

$$
\frac{\dot{p}}{p} + \frac{\dot{\eta}}{D^p + \eta} = 0 \tag{3.16}
$$

This is a separated equation, true regardless of dissipation mechanism (as long as work-hardening or perfectly-plastic conditions prevail). Substituting the stress-dilatancy (3.13) and integrating with the boundary condition $\eta = M$ when $p = p_c$:

$$
\frac{\eta}{M} = 1 - \ln\!\left(\frac{p}{p_c}\right) \tag{3.17}
$$

This is the equation of the **Granta Gravel and Original Cam Clay yield surface**. Its linkage to void ratio emerges through the CSL.

**Granta Gravel** (rigid plastic): no elastic strains, so $e_c = e$ and the yield surface is:

$$
\text{Granta Gravel:}\quad \frac{\eta}{M} = 1 - \ln(p) + \frac{\Gamma - e}{\lambda} \tag{3.19}
$$

**Cam Clay** adds volumetric elasticity to avoid locking up under undrained conditions. Elastic volumetric strains follow a semi-log relationship with a new soil property $\kappa$:

$$
e = A - \kappa \ln(p) \quad \text{(during unloading or reloading)} \tag{3.20}
$$

This gives an elastic bulk modulus:

$$
\frac{K}{p} = \frac{1+e}{\kappa} \tag{3.21}
$$

The elastic void ratio change from current to critical state is:

$$
\Delta e^e = -\kappa \ln\!\left(\frac{p}{p_c}\right) \tag{3.22}
$$

and the relevant critical void ratio for Cam Clay is:

$$
e_c = e + \Delta e^e \tag{3.23}
$$

Combining (3.22), (3.23), and (3.17):

$$
\text{Original Cam Clay:}\quad \frac{\eta}{M} = 1 - \ln(p) + \frac{\Gamma - e - \kappa\ln(p)}{\lambda - \kappa} \tag{3.24}
$$

Notice that (3.24) avoids the undrained lock-up problem of Granta Gravel, because even at constant $e$ the mean stress term in the hardening parameter allows continued plastic evolution.

### 3.4.3 Numerical Integration and the Consistency Condition

Work hardening (and softening) models change yield surface size with plastic strain. The **consistency condition** requires the stress state to remain on the yield surface as it evolves. Differentiating the yield surface equation (3.17):

$$
\dot{\eta} = M\!\left(\frac{\dot{p}_c}{p_c} - \frac{\dot{p}}{p}\right) \tag{3.25}
$$

The first term is the change in the yield surface hardening parameter (the critical state mean stress $p_c$ for Cambridge models); the second is the change in current stress.

In Cambridge models, only volumetric plastic strain controls the yield surface, expressed through the hardening law:

$$
\frac{\dot{p}_c}{p_c} = \frac{(1+e)}{\lambda - \kappa}\,\dot{\varepsilon}_v^p \tag{3.26}
$$

Key insights from (3.26): (1) the yield surface evolves with plastic volumetric strain, not void ratio per se; (2) no plastic volumetric strain means no yield surface change; (3) the group $(1+e)/(\lambda - \kappa)$ is a conventional, dimensionless plastic hardening modulus.

For **undrained loading**, the constant-volume condition constrains the relationship between elastic and plastic volumetric strains:

$$
\dot{\varepsilon}_v = 0 \;\Rightarrow\; \dot{\varepsilon}_v^p + \dot{\varepsilon}_v^e = 0 \;\Rightarrow\; \dot{p} = -\dot{\varepsilon}_v^p K \tag{3.27}
$$

The stress-strain curve is developed incrementally by a four-step Euler integration loop:

1. Impose a plastic strain increment
2. Calculate plastic yield surface hardening
3. Derive the new stress state from the consistency condition
4. Add the elastic strain increments

---

## 3.5 State Parameter View

### 3.5.1 Trouble with Cam Clay

Despite its elegance, Cam Clay fails for dense soils. The problem is not the early objection that $M$ is constant (easily fixable via $M(\theta)$). The real problem is far more fundamental.

Consider a void ratio denser than the CSL, lying on its $\kappa$-line (Figure 3.8). Rewriting the elastic void ratio change (3.22) in terms of the state parameter:

$$
\frac{p_c}{p} = \exp\!\left(\frac{-\psi}{\lambda - \kappa}\right) \tag{3.28}
$$

The ratio of NCL stress to critical state stress follows from setting $\eta = 0$ in (3.17):

$$
\frac{p_{nc}}{p_c} = 2.718 \tag{3.29}
$$

Combining these gives the overconsolidation ratio implied by Cam Clay for a given state parameter:

$$
R = 2.718\exp\!\left(\frac{-\psi}{\lambda - \kappa}\right) \tag{3.30}
$$

For sands, typical values of $\lambda$ are as small as 0.02 (recall $\lambda \approx \lambda_{10}/2.3$, Table 2.1). Using $\kappa$ in the range $0.1\lambda < \kappa < 0.4\lambda$ and a very reasonable $\psi = -0.2$, Equation 3.30 gives $R > 10^5$. This implies enormous strengths and essentially elastic behaviour for all stress ratios achievable in triaxial compression — but the reality is that such samples yield and dilate from the start of loading. Cam Clay's prediction is nonsensical for any sand denser than the CSL.

This problem was "solved" historically by introducing the **Hvorslev surface** — a second yield surface that abandons normality and has no connection to void ratio through simple postulates (Figure 3.9). In doing so, the fundamental insight on the effect of density — the entire motivation for developing Cambridge models — is lost.

### 3.5.2 Infinity of NCL

The root cause of Cam Clay's failure for sands is the assumption that yield surfaces intersect the CSL. There is actually an **infinite number** of normal compression loci (NCL) in $e$-$p'$ space, each associated with a different formation void ratio and strain history (Figure 3.5b). The standard Cam Clay idealisation (Figure 3.5a) assumes a single NCL offset from the CSL by a fixed spacing ratio — this is an artefact, not a physical reality.

**Experimental evidence** from three independent sources:

1. **Triaxial programme on dense sand** — Poorooshasb et al. (1966, 1967) and Tatsuoka and Ishihara (1974) showed that yield loci change with sample density.
2. **CPT data from large-scale hydraulic fills** — Stewart et al. (1983) found a smooth continuous spectrum of void ratios at every stress level during construction of the Molikpaq underwater berm in the Beaufort Sea, with no convergence toward a single NCL.
3. **Direct isotropic compression of Erksak sand** — Jefferies and Been (2000) tested four samples spanning void ratios from 0.60 to 0.84 and found that each traced a distinct NCL with classic elastic-plastic unload-reload loops, even for samples denser than the CSL (Figure 3.12).

The infinity of NCL is not an artefact of the laboratory. It reflects the geological reality that depositional void ratio is arbitrary — any soil can exist in a whole spectrum of normally consolidated states. This is analogous to temperature as a state variable for gases ($pV = nRT$): the critical state defines a reference, and the distance from it (the state parameter $\psi$) characterises the soil's current condition.

### 3.5.3 State as an Internal Variable vs Initial Index

When used to correlate soil behaviours (e.g. peak friction angle), $\psi$ functions as an initial index of soil behaviour. This is useful for engineering correlations but insufficient for a complete constitutive model. In a proper model, $\psi$ is best treated as an **internal state variable**: $\psi = e - e_c$ retains the same definition, but the initial conditions are explicitly denoted with subscript "o" (as in $\psi_o$), and $\psi$ evolves as the soil deforms. This allows realistic models to be constructed within the Drucker et al. (1957) conceptual framework using the infinity of NCL.

---

## 3.6 NorSand

### 3.6.1 Triaxial Compression Version

The presentation of *NorSand* follows the triaxial compression case under drained loading, compared step by step with Cam Clay.

#### Stress-Dilatancy

*NorSand* originally used Nova's rule:

$$
D^p = \frac{M_{tc} - \eta}{1 - N} \tag{3.31}
$$

The model was later updated to a Cam Clay-like form using an evolving image stress ratio $M_i$ instead of the fixed critical stress ratio $M$:

$$
D^p = M_i - \eta \tag{3.32}
$$

The difference from Cam Clay (Equation 3.13) is that $M_i$ is not a constant — it evolves with shear strain, controlled by the state parameter. The evolution follows:

$$
M_i = M\!\left(1 - \frac{\chi_i N |\psi_i|}{M_{itc}}\right) \tag{3.33}
$$

where $N$ is the volumetric coupling coefficient from Nova's flow rule at peak strength and $\psi_i$ is the state parameter evaluated at the image condition.

#### Yield Surface

The yield surface derives from normality exactly as in Cam Clay. Substituting the updated stress-dilatancy into the normality condition (3.16) and integrating:

$$
\eta = M_i\!\left[1 - \ln\!\left(\frac{p}{p_i}\right)\right] \tag{3.34}
$$

where $p_i$ is the mean stress at the **image state** — the condition where $D = 0$ alone (only the first of the two critical state conditions is met; $\dot{D} = 0$ is not yet satisfied). Figure 3.13 illustrates the *NorSand* yield surface for very loose and very dense sands, showing how the image condition differs from the critical state.

For loose sand, the image condition lies at a higher effective stress than the current state, so the yield surface contracts toward the critical state. For dense sand, the image condition lies on the opposite side, and the yield surface must expand (harden) to reach the critical state.

The **Second Axiom of critical state theory** — that the soil state moves toward the critical state with increasing shear strain — is stated as:

$$
\psi \to 0 \quad \text{as} \quad \varepsilon_q \to \infty \tag{3.35}
$$

This axiom never arose explicitly in Cam Clay because it was tacitly enforced by assuming yield surfaces intersect the CSL. With an infinity of NCL, the Second Axiom becomes the fundamental hardening law.

#### Maximum Dilatancy and the Internal Cap

Dilatancy is limited to a maximum value for any particular state, with a well-documented experimental relationship between $D_{\min}^p$ and $\psi$:

$$
D_{\min}^p = \chi_i \psi_i \tag{3.36}
$$

where $\chi_i$ is unique for any yield surface since $\psi_i$ is unique. The soil property $\chi_{tc}$ (measured in triaxial compression) relates to $\chi_i$ through:

$$
\chi_i = \frac{\chi_{tc}}{(1 - \chi_{tc}\lambda / M_{itc})} \tag{3.37}
$$

For typical soil properties, the shift is small: $1.05\chi_{tc} < \chi_i < 1.10\chi_{tc}$.

The limit on $p_i$ that enforces maximum dilatancy is:

$$
\left(\frac{p_i}{p}\right)_{\max} = \exp\!\left(\frac{-\chi_i\psi_i}{M_{itc}}\right) \tag{3.38}
$$

This provides an **internal cap** (or planar limit) in the yield surface (Figure 3.13), controlling realistic dilatancy through normality alone. Non-associated flow rules become unnecessary.

#### Hardening Law

The hardening law complies with the Second Axiom and respects the dilatancy constraint:

$$
\dot{p}_i = H(p_{i,\max} - p_i)\dot{\varepsilon}_q \tag{3.39}
$$

In dimensionless form, incorporating the stress-level dependence that improves the fit to experimental data:

$$
\frac{\dot{p}_i}{p_i} = H\!\left(\frac{p}{p_i}\right)^{\!2}\!\left[\exp\!\left(\frac{-\chi_i\psi_i}{M_{itc}}\right) - \frac{p_i}{p}\right]\dot{\varepsilon}_q \tag{3.40}
$$

The hardening modulus $H$ is a model soil property, ideally a constant but in practice often a function of $\psi$. It decouples the yield surface from the CSL — this decoupling is what gives *NorSand* its versatility and relevance to real soil behaviour, and is the key difference from Cam Clay.

### 3.6.2 Elasticity in NorSand

Isotropic elasticity is adopted. The Cam Clay $\kappa$-model (which neglects elastic shear strains entirely, making the model rigid in shear) is replaced with a dimensionless shear rigidity:

$$
I_r = \frac{G}{p} \tag{3.41}
$$

The bulk modulus follows from elasticity:

$$
\frac{K}{p} = \frac{1+e}{\kappa} = I_r \frac{2(1+\nu)}{3(1-2\nu)} \tag{3.42}
$$

In engineering practice, $I_r$ is commonly referred to as $G_{\max}/p'$ and is often measured during site investigations. Poisson's ratio $\nu$ is rarely measured but typically falls in the range 0.15-0.25.

### 3.6.3 NorSand Summary and Parameters

**Table 3.1** summarises the *NorSand* equations:

| Aspect | Equations |
|--------|-----------|
| Internal model parameters | $\psi_i = \psi - \lambda\ln(p/p_i)$; $\;\chi_i = \chi_{tc}/(1 - \chi_{tc}\lambda/M_{itc})$; $\;M_i = M(1 - \chi_i N |\psi_i|/M_{itc})$ |
| Critical state | $e_c = \Gamma - \lambda\ln(p')$; $\;\eta_c = M$ |
| Yield surface and internal cap | $\eta/M_i = 1 - \ln(p/p_i)$; $\;(p_i/p)_{\max} = \exp(-\chi_i\psi_i/M_{itc})$ |
| Hardening rule | $\dot{p}_i/p_i = H(p/p_i)^2[\exp(-\chi_i\psi_i/M_{itc}) - p_i/p]\,\dot{\varepsilon}_q$ |
| Stress-dilatancy | $D^p = M_i - \eta$ |
| Elasticity | $I_r = G/p$; $\;\nu = \text{constant}$ |

**Table 3.2** — *NorSand* parameters and typical ranges for sands:

| Parameter | Name | Typical Range | Meaning |
|-----------|------|--------------|---------|
| $\Gamma$ | Gamma | 0.9 – 1.4 | CSL altitude (at $p' = 1$ kPa) |
| $\lambda$ | lambda | 0.01 – 0.07 | CSL slope (natural log) |
| $M_{tc}$ | M-tc | 1.2 – 1.5 | Critical friction ratio in triaxial compression |
| $N$ | N | 0.2 – 0.5 | Volumetric coupling coefficient for inelastic stored energy |
| $H$ | H | 25 – 500 | Plastic hardening modulus; often $f(\psi)$; first estimate $H \approx 4/\lambda$ |
| $\chi_{tc}$ | chi-tc | 2 – 5 | Relates maximum dilatancy to $\psi$ (triaxial compression reference) |
| $I_r$ | I-r | 100 – 600 | Dimensionless shear rigidity ($G_{\max}/p'$) |
| $\nu$ | nu | 0.1 – 0.3 | Poisson's ratio |

*NorSand* is a sparse model: seven parameters span the entire range of accessible void ratios. Two define the CSL, three define plasticity, and two define elasticity. Triaxial compression is the reference condition, but all parameters carry over to the general 3D formulation.

### 3.6.4 Numerical Integration of NorSand

*NorSand* is a differential model — there are no analytical solutions. Stress-strain behaviour is obtained by numerical integration, readily implemented in a spreadsheet. For known stress paths (as in laboratory tests), the equations are integrated directly using the consistency condition:

1. Impose a plastic strain increment
2. Calculate yield surface hardening via Equation 3.40
3. Determine the new stress state from the consistency condition
4. Add the elastic strain increments

The spreadsheets (*NorSandM.xls* for triaxial compression, *NorSandPS.xls* for plane strain) are provided on the book's website. The VBA code is open-source and fully commented. *NorSand* is also implemented in finite element programs (Chapter 8).

---

## 3.7 Comparison of NorSand to Experimental Data

### 3.7.1 Parameter Determination from Drained Triaxial Tests

The validation uses Erksak 330/0.7 sand — a well-characterised dataset with a thoroughly defined CSL, covering a wide spectrum of densities and confining stresses from 60 to 1000 kPa.

**Step-by-step calibration procedure:**

1. **CSL properties** — Best-fit to $e$-$p'$ data from multiple tests gives $\Gamma = 0.816$ and $\lambda_{10} = 0.031$, fixing two of the seven parameters.
2. **Critical friction ratio** — From a stress-dilatancy plot of all tests (Figure 2.30): $M_{tc} = 1.26$ (the zero-dilation intercept).
3. **State-dilatancy parameter** — Plotting maximum dilation versus $\psi_o$ gives $\chi_{tc} = 3.5$.
4. **Elastic shear rigidity** — From bulk modulus measurements in isotropic unload-reload tests (Figure 3.14): $K^e/\sigma_{ref} = C/(e - e_{\min}) \cdot (p'/\sigma_{ref})^b$ with $C = 260$, $b = 0.5$, $e_{\min} = 0.355$ at $\sigma_{ref} = 100$ kPa. Adopting $\nu = 0.2$: $I_r = (3/4)(C/(e - e_{\min}))(p'/\sigma_{ref})^{b-1}$.
5. **Plastic hardening modulus** — Determined by iterative forward modelling (IFM): estimate parameters, compute behaviour, compare to measurements, and refine.

**Table 3.3** presents the best-fit calibration for eleven Erksak drained triaxial tests. Key observations:

- $M_{tc}$ does not vary from its trend value (1.26) for dense tests, but the best fit for loose sand is systematically lower ($M_{tc} = 1.18$)
- $N$ was held constant at 0.35 across all tests
- $\chi_{tc}$ varied from test to test (average 4.0, within 10% of the trend value of 3.5) — attributed to fabric effects
- $H$ shows a strong first-order dependence on $\psi$ (Figure 3.17), well-described by the following expression.

$$
H = a + b\psi_o \tag{3.45}
$$

Here $a = 103$ and $b = -980$ for Erksak sand. The functional dependence of $H$ on $\psi_o$ is admissible from a theoretical standpoint.

Figure 3.16 shows four calibrated fits (tests D662, D682, D667, D685) spanning dense to very loose, low to high confining stress — demonstrating excellent agreement across the full spectrum.

### 3.7.2 Influence of NorSand Properties on Modelled Behaviour

Figure 3.18 presents a systematic parameter study using a representative base case ($\Gamma = 0.8$, $\lambda_{10} = 0.05$, $M_{tc} = 1.25$, $N = 0.3$, $\chi_{tc} = 3.5$, $H = 250$, $I_r = 600$, $\nu = 0.25$). Each parameter is varied independently:

| Parameter | Effect |
|-----------|--------|
| $\psi_o$ | Largest effect — controls peak stress ratio and dilatancy; changing from +0.04 to -0.2 approximately triples peak stiffness |
| $M_{tc}$ | Peak shear stress ratio directly proportional to $M$ |
| $H$ | Controls how fast peak is reached; affects volumetric strain at peak |
| $\lambda$ | Changes dilatancy via the image state definition; large $\lambda$ (compressible soils) shows least dilatancy |
| $\chi_{tc}$ | Limits maximum dilatancy; larger $\chi$ yields more dilation |
| $I_r$ | Affects initial stiffness only; minor effect once plastic strains dominate |
| $\nu$ | Minor effect (not shown separately) |

The hierarchy is clear: state ($\psi_o$) dominates behaviour, followed by $M$ and $H$, with elasticity parameters having comparatively modest influence.

---

## 3.8 Commentary on NorSand

### 3.8.1 Yield Surface Shape

Some practitioners question whether the *NorSand* yield surface shape (which yields predominantly in isotropic compression) is realistic for sand. The concern is misplaced — the evidence from isotropic compression tests (Figure 3.12) confirms that sands do yield in isotropic compression, exactly as postulated by Drucker et al. (1957). A closed (capped) yield surface is required.

Experimental yield surfaces determined for Fuji River sand by Tatsuoka and Ishihara (1974, 1975) using stress probing show families of yield loci that depend on density and mean pressure (Figure 3.19). *NorSand* yield surfaces computed with matching parameters reproduce these experimental shapes remarkably well (Figure 3.20), including three distinguishing features:

1. The surfaces can harden far beyond what Cam Clay or Granta Gravel would predict, because $M_i$ decouples from the critical state
2. Limited hardening is enforced via the internal cap (Equation 3.38), with yield surfaces terminating on the limiting stress ratio locus
3. $M_i$ varies as a function of $\psi$, introducing the influence of state into the flow rule

### 3.8.2 Effect of Elastic Volumetric Strain on $\psi$

A criticism of *NorSand* is that volumetric elasticity changes void ratio (and therefore $\psi$) but is not accounted for in the definition of the image state parameter. A corrected definition would be:

$$
\psi_i = e - e_{c,i} - \kappa\ln\!\left(\frac{p}{p_i}\right) \tag{3.46}
$$

However, this correction has not been adopted in practice because:

- The elastic void ratio change is second-order compared to the state parameter itself
- It is not essential for the definition of state under undrained loading (where *NorSand* computes it naturally — see Chapter 6)
- $\kappa$ is not a particularly good representation of elasticity for particulate materials

The simplest definition ($\psi = e - e_c$) is preferred.

### 3.8.3 Volumetric vs Shear Hardening and Isotropic Compression

Modified Cam Clay has not been used in *NorSand* despite its popularity in finite element codes. The problem: Modified Cam Clay uses volumetric hardening, and if $D^p = 0$ (as at the image condition) then no hardening takes place. This is exactly the image condition, so the Second Axiom hardening cannot be enforced through volumetric plastic strain alone for isotropic compression.

*NorSand* uses **shear strain hardening** instead, which naturally handles the image condition. In the case of a Modified Cam Clay yield surface, there is no plastic shear strain at the isotropic axis, so shear hardening loses control of the NCL. Using Modified Cam Clay within a state-parameter framework would require at least two plastic moduli and double yield surface models — unnecessary complexity.

*NorSand* with its Original Cam Clay-type yield surface and shear-strain hardening correctly produces an infinity of NCL in isotropic compression (Figure 3.21). For constant $H = 200$ and various initial $\psi_o$ values (-0.3 to +0.1), the computed NCL paths fan out naturally from the CSL, reproducing the experimental observations of Figure 3.12. Decreasing $H$ models more compressible sand.

### 3.8.4 Limit on Hardening Modulus

Self-consistency requires that isotropic compression paths should lie on the loose side of the CSL. This imposes a lower bound on $H$:

$$
H > \frac{1}{\lambda - \kappa} \quad \forall\; \psi_i < 0 \tag{3.47}
$$

As a practical rule of thumb: $H \approx 4/\lambda_{10}$.

### 3.8.5 Plane Strain and Other Non-Triaxial Loadings

The generalisation of *NorSand* from triaxial compression to arbitrary stress states (including rotating principal stresses) is given in Appendix C. The generalisations involve notation changes and a few additional features, but the core framework is unchanged. This is the form used in finite element calculations.

The chapter validates the 3D version by predicting plane strain behaviour from triaxial calibration. Using Brasted sand (Cornforth, 1961, 1964), which has paired triaxial compression and plane strain tests at similar void ratios and stresses (Table 3.4), the model is calibrated to triaxial compression data only. Plane strain behaviour is then predicted — verifying both that the 3D model computes as advertised and that computed behaviour matches reality within reasonable accuracy.

Plane strain is a particularly demanding validation because it is both practically important (most real engineering problems approximate plane strain) and very different from triaxial conditions (the intermediate principal stress is no longer equal to the minor principal stress).

---

## Key Figures

| Figure | Description |
|--------|-------------|
| 3.1 | Hockey puck analogy for normality — plastic strain direction follows force resultant, not the increment |
| 3.2 | Normality (associated flow): strain increment vector is normal to the yield surface |
| 3.3 | Mohr-Coulomb surface implies unrealistic dilation equal to friction angle |
| 3.4 | Drucker et al. (1957) cap model — yield surface bounded by the NCL, Mohr-Coulomb as zero-dilation locus |
| 3.5 | (a) Standard Cam Clay: single NCL offset from CSL; (b) Real soil: infinite number of NCL |
| 3.6 | Separation of state parameter $\psi$ from overconsolidation ratio $R$ |
| 3.7 | Consistency condition — stress state tracks the evolving yield surface |
| 3.8 | Implied overconsolidation for a given $\psi$ in Cam Clay — absurd $R$ values for dense sands |
| 3.9 | Hvorslev surface idealization — abandons normality and density dependence |
| 3.12 | Experimental evidence for infinity of NCL: Erksak 330/0.7 sand isotropic compression |
| 3.13 | *NorSand* yield surface for (a) very loose and (b) very dense soil — showing image condition, internal cap, $M_i$, and limiting stress ratio |
| 3.14 | Elastic bulk modulus of Erksak sand from isotropic unload-reload tests |
| 3.15 | State diagram for Erksak drained tests — CSL with scattered test conditions |
| 3.16 | Calibrated *NorSand* fits to four Erksak tests (D662, D682, D667, D685) |
| 3.17 | $H$ vs $\psi_o$ for Erksak sand: $H = 103 - 980\psi_o$ |
| 3.18 | Sensitivity of model behaviour to each *NorSand* parameter |
| 3.19 | Experimental yield surfaces for Fuji River sand (Tatsuoka and Ishihara, 1974) |
| 3.20 | *NorSand* yield surfaces reproducing Fuji River experimental shapes |
| 3.21 | Computed isotropic NCL from *NorSand* showing infinity of NCL behaviour |

---

## Key Equations Summary

| Eq. | Name | Expression |
|-----|------|------------|
| 3.1 | Strain decomposition | $\varepsilon = \varepsilon^e + \varepsilon^p$ |
| 3.2 | State parameter | $\psi = e - e_c$ |
| 3.6 | CSL in $e$-$p'$ space | $e_c = \Gamma - \lambda\ln(p')$ |
| 3.7 | Critical state stress ratio | $q = Mp'$ |
| 3.8 | $M(\theta)$ variation with Lode angle | $M(\theta) = M_{tc} - \frac{M_{tc}^2}{3+M_{tc}}\cos\!\left(\frac{3\theta}{2}+\frac{\pi}{4}\right)$ |
| 3.13 | Cam Clay stress-dilatancy | $D^p = M - \eta$ |
| 3.17 | Cam Clay / Granta Gravel yield surface | $\eta/M = 1 - \ln(p/p_c)$ |
| 3.24 | Original Cam Clay yield surface (with elasticity) | $\eta/M = 1 - \ln(p) + (\Gamma - e - \kappa\ln p)/(\lambda-\kappa)$ |
| 3.32 | *NorSand* stress-dilatancy | $D^p = M_i - \eta$ |
| 3.33 | Image stress ratio evolution | $M_i = M(1 - \chi_i N|\psi_i|/M_{itc})$ |
| 3.34 | *NorSand* yield surface | $\eta = M_i[1 - \ln(p/p_i)]$ |
| 3.38 | Internal cap (max dilatancy limit) | $(p_i/p)_{\max} = \exp(-\chi_i\psi_i/M_{itc})$ |
| 3.40 | *NorSand* hardening rule | $\dot{p}_i/p_i = H(p/p_i)^2[\exp(-\chi_i\psi_i/M_{itc}) - p_i/p]\,\dot{\varepsilon}_q$ |
| 3.47 | Lower bound on $H$ | $H > 1/(\lambda - \kappa)$ |

---

## Connections to Practice

This chapter has direct relevance to [[Nataka TSF]] engineering and broader tailings management:

- **Tailings are loose, saturated soils.** The entire premise of *NorSand* — that density (via $\psi$) controls constitutive behaviour including liquefaction — is the theoretical foundation for assessing whether Nataka's tailings beaches and in-situ deposits are susceptible to static liquefaction. Positive $\psi$ means contractive behaviour and potential for undrained strength loss.
- **The seven NorSand parameters are determinable from standard tests.** Two come from the CSL (triaxial compression tests to large strains), one from stress-dilatancy plots, one from maximum dilatancy vs $\psi$ correlations, two from elastic modulus measurements (bender elements or isotropic unload-reload), and one from iterative forward modelling. This calibration procedure could be applied to characterise Nataka's tailings materials.
- **Infinity of NCL matters for hydraulic fill.** Tailings deposited hydraulically (analogous to the Molikpaq sand berm, Figure 3.10) form across a spectrum of depositional void ratios with no convergence to a single NCL. The standard Cam Clay single-NCL assumption would miss this variability entirely. *NorSand* handles it through the state parameter.
- **H depends on $\psi$.** The observation that the hardening modulus varies linearly with state parameter ($H = a + b\psi_o$, Equation 3.45) means that loose tailings ($\psi > 0$) have lower $H$ values — less stiffness, more compliant response, faster approach to critical state and potential liquefaction.
- **The internal cap controls realistic dilatancy** without resorting to non-associated flow. For tailings dam stability analysis using finite elements (Chapter 8), this means *NorSand* produces physically correct dilation behaviour without the numerical difficulties of non-associated models.
- **[[Freeboard]] management and pore pressure** connect to the undrained loading framework: if tailings are loaded fast enough that drainage cannot occur, the constant-volume constraint (Equation 3.27) forces mean effective stress changes that can drive a loose material toward liquefaction. Understanding this mechanism requires the drained constitutive framework developed here.

---

## Sources
- Jefferies, M. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., CRC Press, Chapter 3, pp. 101–139.
