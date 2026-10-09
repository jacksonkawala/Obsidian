---
title: CSSM Book Audit - 2026-05-01
domain: cross-domain
type: analysis
sources: [Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf, chapter-01-introduction.md, chapter-02-dilatancy.md, chapter-03-constitutive-modelling.md, chapter-04-state-parameter-in-situ.md, chapter-05-soil-variability.md, chapter-06-static-liquefaction.md, chapter-07-cyclic-liquefaction.md, chapter-08-finite-element.md, chapter-09-practical-implementation.md, chapter-10-concluding-remarks.md]
created: 2026-05-01
updated: 2026-05-01
tags: [cssm, audit, wiki-health, synthesis]
---

# CSSM Book Audit - 2026-05-01

## Verdict

The CSSM book ingest is strong overall. The chapter notes capture the book's core argument: liquefaction is computable soil behaviour governed by [[Critical State Soil Mechanics]], with [[State Parameter]] $\psi$, the [[Critical State Line]], CPT interpretation, soil variability, and [[NorSand]] forming one connected workflow.

The main weakness was not raw coverage. It was integration quality: missing index entries, unresolved concept links, and a few local consistency errors.

## What Was Good

- All ten book chapters have dedicated pages in `wiki/cssm/`.
- Chapters 2, 3, 4, 6, 7, and 9 are especially detailed and preserve equations, parameters, and workflow logic.
- The notes consistently connect theory to [[Nataka TSF]], [[Freeboard]], CPTu/SCPT investigation, Lift 1 compaction QA, and tailings liquefaction risk.
- The chapter sequence preserves the book's structure: framework, model, field state determination, variability, static liquefaction, cyclic liquefaction, FE modelling, implementation, and conclusions.

## Inconsistencies Found

| Issue | Impact | Fix |
|---|---|---|
| CSSM chapters 5, 8, and 10 existed but were missing from `index.md` | Catalog understated the ingest and made the book look incomplete | Added index entries |
| `[[state parameter]]`, `[[NorSand]]`, `[[Critical State Line]]`, `[[Effective Stress]]`, and `[[Critical State Soil Mechanics]]` pointed to missing concept pages | Cross-domain reuse was weak; viewer links could dead-end | Added concept pages |
| Obsidian alias links were rendered as combined target/alias slugs by the viewer | Aliased CSSM links routed incorrectly | Patched `MarkdownRenderer` alias handling and page-title resolution |
| Chapter 1 said the chapter presents ten case histories, but the source chapter has nine case-history subsections plus a summary | Local factual inconsistency | Changed to nine case histories |
| Chapter 5 described Nerlerk as five failures while Chapter 1/source describe six large mass failures | Cross-chapter inconsistency | Updated Chapter 5 wording |
| Chapter 8 referenced the deep weak zone scenario as Section 8.4.4, but the page's section is 8.3.2 | Bad internal reference | Corrected to Section 8.3.2 |
| Chapter 10 linked "critical friction ratio" to `Critical State Line` | Conceptual link error | Added [[Critical Friction Ratio]] and updated the link |
| Embedded Chapter 2 image was labelled Figure 2.1 but matched source Figure 2.2 | Figure numbering/caption mismatch | Relabelled the embedded image as Figure 2.2 and noted that Figure 2.1 is absent from current assets |

## Can We Do Better?

Yes. The next useful improvement would be a higher-level CSSM roadmap page that turns the chapter notes into an applied Nataka workflow:

1. Define target questions for Nataka tailings and Lift 1.
2. Specify CPTu/SCPT and sampling requirements.
3. Define laboratory testing to measure CSL, $M_{tc}$, $N$, $\chi_{tc}$, $H$, and $G_{\max}$.
4. Convert CPT results to $\psi$ profiles.
5. Choose $\psi_k$ percentiles for static and cyclic assessment.
6. Decide when limit equilibrium is adequate and when NorSand FE is required.

That would move the CSSM material from chapter-by-chapter notes into an operational decision framework.

## Sources

- `raw/cssm/Soil_Liquefaction_ A_Critical_State_Approach_Second_Edition.pdf`
- `wiki/cssm/chapter-01-introduction.md`
- `wiki/cssm/chapter-02-dilatancy.md`
- `wiki/cssm/chapter-03-constitutive-modelling.md`
- `wiki/cssm/chapter-04-state-parameter-in-situ.md`
- `wiki/cssm/chapter-05-soil-variability.md`
- `wiki/cssm/chapter-06-static-liquefaction.md`
- `wiki/cssm/chapter-07-cyclic-liquefaction.md`
- `wiki/cssm/chapter-08-finite-element.md`
- `wiki/cssm/chapter-09-practical-implementation.md`
- `wiki/cssm/chapter-10-concluding-remarks.md`
