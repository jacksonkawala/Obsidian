---
title: "Chapter 5 — Soil Variability and Characteristic States"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, soil-variability, characteristic-state, stochastic, nerlerk, CPT, loose-pockets, design-codes]
---

# Chapter 5 — Soil Variability and Characteristic States

## Overview

Previous chapters treated soil as uniform and homogeneous. Real soils are anything but. Even a "uniform" hydraulic sand fill exhibits significant variability in state parameter when examined through CPT soundings. This chapter asks the crucial engineering question: given that the in-situ state varies from point to point, what single characteristic value of $\psi$ should be used in design? The answer draws on centrifuge experiments, real case histories (Nerlerk, Tarsiut P-45), stochastic finite element simulations, and the emerging framework of limit state design codes.

## 5.1 — Loose Pockets and Disproportionate Effects

### Rowe and Craig Centrifuge Tests (1976)

A landmark centrifuge study at the University of Manchester examined storm surge caissons founded on sandy seabeds in the Dutch [[Oosterschelde]] delta works. The one-third-scale model caisson (0.84 m long, 0.455 m wide) was placed on a sand bed prepared to a target relative density, then subjected to cyclic horizontal loading that simulated wave storm build-up.

Key findings from the uniform-density tests:

- Both 50% and 70% relative density beds carried the full loading programme.
- Pore pressures generated during cycling dissipated about as fast as they were produced.
- Displacements grew incrementally with each loading stage, reaching roughly 0.2% of caisson width before failure, which always occurred by sliding.

When non-uniform foundations were introduced by embedding discrete loose pockets (one-third of the caisson width, in the upper zone of the bed), the results changed dramatically:

- **4% by volume loose pockets** in an otherwise 50% $D_r$ bed: pore pressures developed in the loose pockets and spread into the surrounding denser sand, producing significantly greater displacements after the third loading packet. But the model survived.
- **10% by volume loose pockets** in the same bed: liquefaction failure occurred during the second loading stage. Pore pressures reached values equivalent to the full weight of the caisson.

The lesson is stark: loose zones exert a disproportionate influence on overall performance. Even a small volume of loose material can generate high excess pore pressures that propagate into the surrounding denser matrix, degrading its strength and stiffness. The loosest soil controls behaviour, not the average.

## 5.2 — In-Situ Variability at Tarsiut P-45

### CPT Distribution in a "Uniform" Hydraulic Fill

The Tarsiut P-45 fill was dredged Erksak sand, hydraulically placed inside the [[Molikpaq]] caisson structure (0 to 21 m depth) and used to build a sand berm (21 to 30 m depth). This dataset offers an excellent statistical portrait of a geologically uniform material because:

- The plan area was only 72 m x 72 m, with CPT spacing of about 9 m.
- 32 CPTs were put down in October 1984, and five more (MacRes01--05) in April 1985 to check for ageing effects.
- Several CPTs were conducted just 1 m apart, confirming excellent repeatability.

The CPT data showed a steady increase in tip resistance $q_c$ with depth. Average trend lines fit the data as:

$$
q_c = 2.35 + 0.37z \quad \text{(caisson core)}
$$

$$
q_c = 6.16 + 0.44z \quad \text{(sand berm)}
$$

where $z$ is depth below the respective surface in metres and $q_c$ is in MPa.

### Statistical Structure

Dividing the CPT data into 1 m horizontal layers revealed:

- The distribution of $q_c$ at any given depth is approximately **log-normal**, a reasonable expectation since both stiffness and strength in soils are proportional to [[Effective Stress|effective stress]].
- There is a noticeable spread between the 50th and 80th percentile values; the 20th and 80th percentiles bracket a substantial range.
- The corresponding distribution of $\psi$ shows similar statistical spread.

Popescu (1995) fitted the probability distributions without assuming normality and found a **skewed beta distribution** best represented the depth-normalised tip resistance. His correlation analysis yielded the following spatial correlation distances:

- Core fill: 0.95 m vertical, 12.1 m horizontal
- Sand berm: 0.5 m vertical, 5.4 m horizontal

The horizontal correlation distance is roughly the same order as the CPT spacing (9 m), introducing some uncertainty. Nevertheless, the data clearly show that even a "uniform" hydraulic fill has a strongly layered internal structure with an order-of-magnitude difference between vertical and horizontal scales of variation.

The variability in fines content was also measured: a log-normal distribution with a mean of about 1.5% silt and a 90th percentile of 2.5--3.0%. Since the fines content influences the CSL (and hence the inversion from $q_c$ to $\psi$), this variability compounds the uncertainty in state estimation.

### Stochastic Earthquake Simulation

Popescu used the finite element program Dynaflow to simulate a structure founded on sand with the same statistical characteristics as the Tarsiut fill, subjected to the 1964 Niigata earthquake loading. The key comparison:

- **Deterministic (uniform) fill:** maximum excess pore pressure ratio $\Delta u / \sigma'_{vo} = 0.6$ — no liquefaction.
- **Stochastic (variable) fill:** maximum pore pressure ratios reached $\Delta u / \sigma'_{vo} = 0.8$ to $1.0$ — liquefaction occurred in some realisations even though the mean state was the same.

Higher pore pressures developed in the looser zones and then propagated into the surrounding denser material, consistent with the Rowe and Craig centrifuge observations. Popescu emphasised that the tails of the probability distribution (the loose end) are especially important and will be under-predicted if normal distributions are assumed.

Popescu et al. (1997) extended this work by comparing six stochastic realisations against six deterministic (uniform) simulations with properties made progressively looser. Their conclusion: the **80th percentile** uniform material approximately matches the extent of liquefaction in the stochastic simulations, while 70th and 90th percentile properties under- and overestimate it, respectively.

## 5.3 — Nerlerk Berm Case History

The [[Nerlerk]] berm failures (Chapter 1) are a vivid illustration of how variability governs real performance. The berm was an underwater hydraulic fill that suffered five massive slope failures at only 27 m height, still 9 m short of its design crest.

### The Controversy

Sladen et al. (1985) concluded that the slides were caused by static liquefaction and that the fill had to be extremely loose ($\psi \sim +0.1$). But the CPTs did not indicate such looseness. This sparked a long debate about whether the CPT--state parameter methodology overpredicts density at low stress levels. The resolution (Chapter 4) showed that a stress-level effect in the shear modulus, which affects the CPT inversion, was the missing factor.

### Re-Interpretation Using Variable Shear Modulus

Using the updated methodology of Chapter 4 to process the Nerlerk CPT data near Slide 3:

- Median $\psi \approx -0.08$ between 3.5 and 10 m depth — apparently stable, non-liquefiable.
- 80th percentile $\psi \approx -0.03$, approaching the boundary of liquefiable behaviour.
- There is an interval of about 1 m where $\psi > -0.02$, which Onisiphorou identifies as clearly liquefiable.

### Stochastic Analysis by Onisiphorou (2000)

Onisiphorou mapped $\psi$ directly as a random field onto the Nerlerk berm geometry, assuming a normal distribution with spatial correlation scales of about 1 m vertically and 8 m horizontally. Deterministic analyses with uniform $\psi$ showed:

- $\psi > -0.02$: failure mechanism develops.
- $\psi < -0.08$: berm is stable.
- Intermediate states: significant strains but the slope can continue to be loaded.

For the variable-field analysis (mean $\psi_\mu = -0.08$, standard deviation $\sigma_\psi = 0.05$), the berm showed a range of responses. The strongest stochastic realisation matched the deterministic result for $\psi = -0.08$, and the weakest matched the deterministic result for $\psi \approx -0.02$. Onisiphorou concluded that Nerlerk-type densities could liquefy as a result of variability alone — the missing parameter was not the CPT evaluation but the layering and how state is distributed within the berm.

## 5.4 — Assessing the Characteristic State of Sands

### Requirements for a Characteristic Value

A usable characteristic state parameter $\psi_k$ must satisfy three requirements:

1. **Well-defined and measurable.** The state parameter $\psi$ meets this criterion because there is a direct mapping from $\phi$ or $q_c$ to $\psi$ via the CPT methodology of Chapter 4. Relative density does not work nearly as well, especially for silts.
2. **Recognises the statistical distribution shape.** Sand strengths are approximately log-normal, so the arithmetic mean and standard deviation have limited utility. A percentile value is more appropriate.
3. **Statistically reasonable given testing precision.** The CPT has a repeatability of about $\pm 2\%$ in $q_c$, translating to $\Delta\psi \approx \pm 0.04$. Defining a 95th percentile exceedance from CPT data is therefore not meaningful; the 80th to 90th percentile range is practical.

### Characteristic State for Liquefaction

Drawing on the centrifuge, stochastic, and case history evidence:

- The Rowe and Craig tests show that as little as 4% by volume of loose material in the critical zone can affect performance under cyclic loading, pointing towards the 90th--95th percentile range.
- Popescu's stochastic earthquake simulations suggest the 80th percentile as a characteristic value.
- The Nerlerk case history, where depositional processes created connected loose layers that led to slope failure, supports adopting the 80th percentile from the CPT data as $\psi_k$.

**Practical guidance:** A reasonable characteristic state for liquefaction assessment lies between the **80th and 90th percentile** of the $\psi$ distribution. For cyclic loading one should err towards the 90th percentile; for static loading the 80th percentile is adequate. For strongly layered systems (such as Nerlerk), one should anticipate a greater likelihood of loose zones connecting and creating continuous weak paths.

### Characteristic Strengths for Foundation Design

Limit state design codes (Eurocode 7, ISO 19906 for Arctic offshore, Canadian CSA-S471) require a characteristic strength that, combined with partial safety factors, achieves a target reliability. Monte Carlo simulations by Been and Jefferies (1993) for an offshore structure showed:

| Percentile value of strength | Calculated resistance (MN) | Resistance factor (for 99% non-exceedance = 631 MN) |
|---|---|---|
| 95 | 741 | 1.17 |
| 90 | 764 | 1.21 |
| **80** | **793** | **1.26** |
| 70 | 814 | 1.29 |
| 60 | 832 | 1.32 |
| 50 | 849 | 1.34 |

The 80th percentile strength combined with a resistance factor of 1.26 yields the target 99% reliability, which aligns almost exactly with ISO 19906 for Arctic offshore structures (minimum resistance factor of 1.25).

## Key Symbols

| Symbol | Name | Definition |
|---|---|---|
| $\psi$ | State parameter | $\psi = e - e_c$; void ratio relative to CSL at current $p'$ |
| $\psi_k$ | Characteristic state | Percentile-based design value of $\psi$ (typically 80th--90th) |
| $q_c$ | Cone tip resistance | Measured CPT penetration resistance (MPa) |
| $D_r$ | Relative density | $(e_\text{max} - e) / (e_\text{max} - e_\text{min})$ |
| $\Delta u / \sigma'_{vo}$ | Excess pore pressure ratio | Normalised excess pore pressure from cyclic loading |
| $\sigma_\psi$ | Standard deviation of $\psi$ | Spatial variability of state parameter in a deposit |

## Connections to Practice

The implications for [[Nataka TSF]] operations are direct and significant:

- **Hydraulic fill variability is inherent.** The Tarsiut P-45 data show that even a carefully placed hydraulic fill has significant spatial variability. The Nataka TSF tailings beach, deposited by spigotting from a pipeline, will exhibit similar or greater variability because of natural segregation (sand near the spigot, fines further away).
- **Loose layers control stability.** The Rowe and Craig centrifuge tests and the Nerlerk case history demonstrate that connected loose layers or pockets can trigger liquefaction even when the average state appears safe. During [[Lift 1 Construction Log|Lift 1 construction]], compaction QA should focus not just on mean density but on identifying and eliminating loose pockets.
- **The 80th percentile matters.** When interpreting CPT data from the Nataka TSF (if and when CPTs are conducted), the design state parameter should be taken as the 80th to 90th percentile of the $\psi$ distribution, not the mean. This is consistent with both the stochastic modelling evidence and the limit state design philosophy of Eurocode 7 and ISO 19906.
- **Correlation distances matter for investigation planning.** The Tarsiut data suggest vertical correlation distances under 1 m and horizontal distances of 5--12 m. Adequate characterisation of a tailings deposit therefore requires closely spaced CPTs (order of 10--15 soundings per 100 m x 100 m area), not the two boreholes with SPTs that might otherwise be considered sufficient.
- **Fines content variability compounds uncertainty.** Variability in fines content shifts the CSL and hence the inferred $\psi$. At Nataka, where tailings segregation produces a gradation from sand to silt across the beach, this effect will be pronounced and must be accounted for in any CPT-based state assessment.

## Sources

- *Soil Liquefaction: A Critical State Approach*, 2nd ed., Chapter 5 (pp. 203--223), Jefferies & Been (2016)
