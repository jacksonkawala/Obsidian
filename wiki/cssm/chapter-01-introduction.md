---
title: "Chapter 1 — Introduction"
domain: cssm
type: chapter
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf]
created: 2026-04-12
updated: 2026-04-12
tags: [cssm, liquefaction, critical-state, state-parameter, norsand, case-history]
---

# Chapter 1 — Introduction

Study notes on Chapter 1 of *Soil Liquefaction: A Critical State Approach* (2nd ed.) by Mike Jefferies and Ken Been.

## 1.1 What Is This Book About?

Soil liquefaction is a phenomenon in which soil loses much of its strength or stiffness for a generally short time, but long enough to cause many failures — deaths, and major financial losses. The 1964 Niigata earthquake caused over \$1 billion in liquefaction-related damage. The Aberfan colliery slide killed 144 people. The Nerlerk artificial island was abandoned after \$100 million of construction. Lower San Fernando Dam required the immediate evacuation of 80,000 people.

Liquefaction is an intrinsically brittle process — it cannot be managed by the observational method. If liquefaction is a potential problem, it must be engineered away. Construction costs to avoid it may show considerable independence from the potential degree of liquefaction, making many problems simple go/no-go decisions.

The book's central thesis: **liquefaction is not a vague "concept" but a constitutive behaviour** subject to the laws of physics. A full constitutive model is used to predict not just when liquefaction occurs but the evolution of pore pressures and strains. Liquefaction is simply another facet of the constitutive behaviour of soil, properly understood only within a background of constitutive theory.

The authors adopt what they call a **Turing test for liquefaction**: *"if it does not compute, then you have nothing."* There should be no interest in non-computable concepts. The approach in this book meets the criterion of computability.

## 1.2 A Critical State Approach

The book is subtitled *A Critical State Approach* because **density affects the behaviour of all soils** — dense soils are strong and dilatant, loose soils are weak and compressible. The aim is to separate soil description into:

1. **True properties** that are invariant with density (e.g. critical friction angle)
2. **Measures of state** (e.g. current void ratio or density)

Soil behaviour then follows as a function of these properties and state.

### The State Parameter $\psi$

The basic approach anchors everything to the **state parameter** $\psi$, defined in Figure 1.1:

$$
\psi = e - e_c
$$

where $e$ is the current void ratio and $e_c$ is the critical state void ratio at the same mean [[Effective Stress]] $p'$. The critical state void ratio varies with mean effective stress along the **Critical State Locus (CSL)**.

- **Dense soils**: $\psi < 0$ (negative — below the CSL, dilatant)
- **Loose contractive soils**: $\psi > 0$ (positive — above the CSL)

Soil constitutive behaviour is related to $\psi$, and liquefaction behaviour is no different from other aspects of stress-strain response.

The critical state approach and the associated generalised constitutive model (*NorSand*) provide a simple computable model that captures the salient aspects of liquefaction in all its forms. It is characterised by $\psi$ with a few material properties determinable from reconstituted samples, and applies to all soils.

### Critical State vs Steady State

The **Steady State School** (Castro, Harvard) termed the critical state after rapid shearing the *steady state* and used post-liquefaction strength for straightforward undrained stability analysis. However, the Steady State School does not provide a computable model or theory. This book insists on consistent physics and mathematics within established plasticity theory.

## 1.3 Experience of Liquefaction

The chapter presents ten case histories to provide context before introducing theory.

### 1.3.1 Fort Peck Dam (1938) — Static Liquefaction of Sands

A classic static liquefaction failure. The dam was constructed by hydraulic fill on the Missouri River in Montana. In 1938, the upstream shell failed — a 500 m wide section with an average slope of 4H:1V. A flowslide developed with very large displacements (up to 450 m) and very flat final slopes (20H:1V). About 7.5 million m³ of material was involved, and eight men died. The sand had a relative density of only 45-50%.

![Figure 1.2 — Aerial view of Fort Peck failure](/assets/cssm/ch01/fig1.2-fort-peck-aerial.png)
*Figure 1.2: Aerial view of Fort Peck failure (U.S. Army Corps of Engineers, 1939).*

Fort Peck effectively ended the practice of hydraulic fill construction for water retention dams in the United States. After Fort Peck, it became normal practice to compact sand fills in dams.

### 1.3.2 Nerlerk Berm (1982/83) — Static Liquefaction of Sands

A 36 m high sand berm for oil exploration in the Canadian Beaufort Sea, founded on the seabed. Six large mass failures occurred during construction in 1983. The failures were caused by liquefaction of hydraulically placed sand fill in a very loose state, triggered by essentially static loading.

Key lessons from Nerlerk:
- CPT interpretation in 1983/84 was missing the key ingredient of elastic shear modulus, causing stress level bias
- The dangerous nature of declining mean-stress paths (basal extrusion) was not understood
- Variability of density and fines content had unrecognised impact on behaviour

### 1.3.3 Niigata Earthquake (1964) — Seismic Liquefaction

The M7.3 earthquake inflicted major damage on Niigata, Japan. The city is underlain by about 30 m of fine alluvial sand. An apartment building tilted about 80° due to bearing capacity failure in liquefied ground — the iconic image of liquefaction. Sand deposits 20-30 cm thick covered much of the city. The Showa Bridge collapsed when pier foundations lost lateral support.

![Figure 1.8 — Niigata apartment building](/assets/cssm/ch01/fig1.8-niigata-apartment.png)
*Figure 1.8: Apartment building at Kawagishi-cho that rotated and settled due to foundation liquefaction in the 1964 Niigata earthquake.*

Two contrasting sites (Kawagishi-cho vs South Bank, only 2 km apart) demonstrated why density matters: Kawagishi-cho liquefied ($q_c \approx 5$ MPa), South Bank did not ($q_c \approx 15$-20 MPa).

### 1.3.4 Lower San Fernando Dam (1971) — Post-Earthquake Static Failure

The 43 m high dam's upstream slope failed about a minute after the earthquake ended. The failure was static — caused by pore pressures generated during the earthquake, not by inertial forces during shaking. About 80,000 people lived downstream. It was only in 2003 that pore pressure migration was properly included in analysis of this failure (discussed in Chapter 6).

![Figure 1.13 — Lower San Fernando Dam failure](/assets/cssm/ch01/fig1.13a-lower-san-fernando.png)
*Figure 1.13: Liquefaction failure of Lower San Fernando Dam after the 1971 earthquake — situation at end of slide before reservoir drawdown (Karl V. Steinbrugge Collection, UC Berkeley).*

### 1.3.5 Aberfan (1966) — Mine Waste Liquefaction

A liquefaction-induced flowslide of coal waste in South Wales killed 144 people (116 children) when it destroyed a school. Tip 7 was about 67 m high on a hillside with artesian pore pressure in sandstone beneath glacial deposits at the toe. The slide travelled about 600 m. The material had a peak friction angle $\phi' = 39.5°$ and a residual value $\phi' \approx 18°$.

![Figure 1.15 — Aberfan flowslide](/assets/cssm/ch01/fig1.15-aberfan.png)
*Figure 1.15: Aberfan flowslide shortly after the failure (Welsh Office, Aberfan Tribunal).*

### 1.3.6 Merriespruit Tailings Dam (1994) — Mine Waste Liquefaction

A gold tailings dam failure in South Africa. About 600,000 m³ of tailings flowed 3 km downstream through a village after a thunderstorm. The primary cause was overtopping, which eroded the slope face, exposing very loose tailings that then liquefied statically. The tailings had fines content from 40% to 100% and were well above the critical state line — conducive to brittle behaviour and liquefaction.

![Figure 1.16 — Merriespruit tailings dam failure](/assets/cssm/ch01/fig1.16-merriespruit.png)
*Figure 1.16: Aerial view of the Merriespruit tailings dam failure showing the path of the mudflow (Fourie et al., Can. Geotech. J., 2001).*

Key lesson: **if there is available water, once a liquefaction flowslide occurs it can pick up the water and the resulting slurry can travel for miles.** Had the impoundment been properly managed, the failure would not have occurred.

### 1.3.7 Molikpaq (1986) — High Cycle Loading

Gulf Canada's caisson-type offshore drilling platform in the Beaufort Sea. The sand core (Erksak sand, $\psi < -0.05$) experienced about 900 cycles of ice loading at 0.5-2 Hz over fourteen minutes on 12 April 1986. Part of the core liquefied, with the sand surface settling 1.5 m.

Key observations:
- Lightly dilatant sands ($\psi \approx -0.05$) have substantial reserves of cyclic strength in compression
- Excess pore pressures continue to be generated as long as cyclic loading occurs
- Pore pressure redistribution can occur on a similar timescale to cyclic loading

The Molikpaq case also revealed that centrifuge tests can mislead about liquefaction potential, and that **the observational method is inapplicable to liquefaction** because the behaviour is brittle — it can snap through to an undrained liquefaction without warning.

### 1.3.8 Ackermann Lake (1987) — Vibration-Induced Liquefaction

A road embankment of clean medium to fine sand crossing Ackermann Lake in Michigan liquefied when six vibroseis trucks activated their vibrators. Two trucks sank into the lake as the embankment disintegrated, producing a 4.5 m wave. The failure was sufficiently rapid to cause free-falling rather than sliding.

### 1.3.9 Wildlife Site (1987) — Instrumented Liquefaction

The USGS deliberately instrumented a site in Imperial Valley, California, that was susceptible to liquefaction. After a 5-year wait, the M6.6 Superstition Hills earthquake triggered the instruments. The records show the progressive softening of the ground as $r_u$ increased from 0.07 to 0.97 — initially steep stress-strain curves degrading to near-zero stiffness. Pore pressures continued to rise even after strong shaking ceased, explained by ongoing strains.

### 1.3.10 Summary of Lessons

- Liquefaction is a soil behaviour associated with excess pore water pressure, but not necessarily undrained — pore pressure migration may be crucial (Lower San Fernando)
- Excess pore pressures arise from cyclic loading (earthquakes, external forces) or static loading if soils are loose enough
- In static cases, the transition to high excess pore pressure is normally very rapid — the observational approach is futile and dangerous
- Reducing mean [[Effective Stress]] by water seepage can trigger liquefaction (Aberfan)
- Liquefaction involves increasing strains that may become a flowslide if the soil is loose enough
- **Soil strata have naturally variable density**, and the distribution and structure of these variations play a crucial role

## 1.4 Outline of the Development of Ideas

A roadmap of the book:

| Chapter | Topic |
|---------|-------|
| 2 | Introduces the critical state, defines $\psi$, shows how soil behaviours unify regardless of soil type |
| 3 | Introduces *NorSand*, the generalised critical state constitutive model |
| 4 | Measuring $\psi$ in-situ, primarily from the CPT |
| 5 | Soil variability and selecting characteristic state for design |
| 6 | Static liquefaction and post-liquefaction strength |
| 7 | Cyclic stress-induced liquefaction (cyclic mobility) |
| 8 | Finite element modelling of slope liquefaction |
| 9 | Practical implementation — from lab data and CPT to engineering parameters |
| 10 | Concluding remarks and future directions |
| App A | Stress and strain measures |
| App B | Laboratory testing for critical state of sands |
| App C-D | NorSand derivations and numerical implementation |
| App E | CPT calibration chamber database |
| App F-G | Case histories (static and seismic) |
| App H | Cam Clay as a special case of NorSand |

## Key Symbols

| Symbol | Name | Definition |
|--------|------|-----------|
| $\psi$ | psi | State parameter: $\psi = e - e_c$ |
| $e$ | e | Current void ratio |
| $e_c$ | e-critical | Critical state void ratio at current $p'$ |
| $p'$ | p-prime | Mean effective stress |
| CSL | — | Critical State Locus — the $e$ vs $p'$ curve at critical state |
| $r_u$ | r-u | Pore pressure ratio |
| $q_c$ | q-c | CPT tip resistance |
| $\phi'$ | phi-prime | Effective friction angle |

## Connections to Practice

The case histories in this chapter have direct relevance to [[Nataka TSF]] operations:

- **Merriespruit** parallels the overtopping risk at any TSF with inadequate [[Freeboard]] — the same failure mechanism (overtopping then erosion then exposure of loose tailings then static liquefaction then flowslide) applies
- **Fort Peck and Nerlerk** demonstrate that hydraulically placed fills can liquefy under static loading — relevant to understanding tailings beach behaviour
- The emphasis on **density variability** (Chapter 5) connects to the challenge of ensuring adequate compaction in [[Lift 1 Construction Log|Lift 1]] sand layers
- The state parameter $\psi$ provides the theoretical framework linking CPT data to liquefaction susceptibility — directly applicable to field QA on Nataka's fill materials

## Sources
- Jefferies, M. and Been, K. (2016). *Soil Liquefaction: A Critical State Approach*, 2nd ed., CRC Press, Chapter 1, pp. 1-34.
