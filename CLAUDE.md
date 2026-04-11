# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

This is an LLM-maintained wiki — a persistent, compounding knowledge base. The LLM (Claude) reads raw sources, extracts key information, and integrates it into structured, interlinked markdown pages. Knowledge is compiled once and kept current, not re-derived on every query.

## Domains

The wiki covers five domains:

| Domain | Raw sources | Wiki pages | Description |
|--------|------------|------------|-------------|
| **Journal** | `raw/journal/` | `wiki/journal/` | Personal journal entries, reflections, goals |
| **TSF** | `raw/tsf/` | `wiki/tsf/` | Tailings Storage Facility weekly summaries — capacity, freeboard, water balance |
| **Geotech** | `raw/geotech/` | `wiki/geotech/` | Daily geotechnical reports — site-wide facility inspections, berm/paddock status, erosion, liner integrity |
| **Kenmare** | `raw/kenmare/` | `wiki/kenmare/` | Kenmare work-related issues, projects, decisions |
| **CSSM** | `raw/cssm/` | `wiki/cssm/` | Critical State Soil Mechanics — textbook study notes, concepts, derivations |

Cross-cutting concepts and synthesis pages live in `wiki/concepts/` and `wiki/synthesis/`.

## Development Commands

```bash
# Viewer (React + Express)
cd viewer
npm install             # Install dependencies (first time only)
npm run dev             # Vite dev server on http://localhost:5173
npm run server          # Express API on http://localhost:3001
npm start               # Both servers (API backgrounded, Vite in foreground)
npm run build           # Production build to viewer/dist/
npm run lint            # ESLint
```

The viewer requires both servers running. The API server reads directly from `wiki/` and `raw/` on disk — no build step needed for content changes.

## Directory Structure

```
raw/                    # Immutable source documents — never modified by the LLM
  journal/
  tsf/
  geotech/
  kenmare/
  cssm/
  assets/               # Downloaded images and attachments
wiki/                   # LLM-maintained markdown pages — the knowledge base
  journal/
  tsf/
  geotech/
  kenmare/
  cssm/
  concepts/             # Cross-domain concept pages (e.g., effective stress, consolidation)
  synthesis/            # Cross-domain analysis, comparisons, evolving theses
  data/                 # JSON data files for charts (referenced in page frontmatter)
index.md                # Content catalog — all wiki pages with summaries
log.md                  # Chronological record of ingests, queries, lint passes
viewer/                 # React + Express viewer app
```

## Three Laws

1. **`raw/` is immutable.** The LLM reads from raw sources but never modifies or deletes them. The user decides when to remove raw files.
2. **`wiki/` is LLM-owned.** The LLM creates, updates, and maintains all wiki pages. The user reads them.
3. **`index.md` and `log.md` are always updated.** Every operation that changes the wiki must update both files.

## Page Format

All wiki pages use this structure:

```markdown
---
title: Page Title
domain: journal | tsf | kenmare | cssm | cross-domain
type: summary | entity | concept | chapter | comparison | analysis | log-entry
sources: [list of source filenames]
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [relevant tags]
---

# Page Title

Content here. Use [[wiki-links]] for cross-references between pages.

## Sources
- List of raw sources that informed this page
```

## Operations

### Ingest

When the user adds a new source to `raw/` and asks to process it:

1. Read the source document fully.
2. Discuss key takeaways with the user if the content is ambiguous or rich.
3. Create or update wiki pages:
   - A **summary page** for the source itself (in the appropriate domain folder).
   - Update relevant **entity/concept pages** across the wiki.
   - Create new concept pages if the source introduces important new ideas.
   - Add [[wiki-links]] to connect new content to existing pages.
   - For CSSM: create per-chapter pages with key equations, derivations, and worked examples.
   - For Journal: extract themes, goals, recurring patterns; link to prior entries.
   - For TSF/Kenmare: update entity pages for sites, projects, people, decisions.
4. Update `index.md` with new/modified pages.
5. Append to `log.md`.

### Query

When the user asks a question:

1. Read `index.md` to find relevant pages.
2. Read relevant wiki pages.
3. Synthesize an answer with references to wiki pages.
4. If the answer is substantial or reusable, offer to file it as a new wiki page in `wiki/synthesis/`.

### Lint

When asked to health-check the wiki:

- Find contradictions between pages.
- Identify stale claims superseded by newer sources.
- Find orphan pages (no inbound links).
- Spot important concepts mentioned but lacking their own page.
- Suggest missing cross-references.
- Suggest new questions to investigate or sources to seek.

## Obsidian Compatibility

All wiki pages are valid Obsidian markdown:
- Use `[[Page Name]]` for internal links (Obsidian wikilinks).
- Use YAML frontmatter for metadata (compatible with Dataview plugin).
- Store images in `raw/assets/` and reference them with relative paths.
- Tags in frontmatter use `tags: [tag1, tag2]` format.

## CSSM-Specific Conventions

- Use LaTeX math notation: `$inline$` and `$$display$$` (Obsidian renders these natively).
- Each chapter gets its own page: `wiki/cssm/chapter-NN-title.md`.
- Key equations get their own entries with derivation context.
- Create concept pages in `wiki/concepts/` for foundational ideas (effective stress, yield surface, critical state line, etc.) that bridge CSSM theory with TSF/Kenmare practice.

## Viewer (Custom Interface)

The wiki has a custom React viewer at `viewer/`.

```bash
cd viewer
node server.js          # API server on http://localhost:3001
npm run dev             # Vite dev server on http://localhost:5173
```

Run both in separate terminals (or use `npm start` to run both).

### Architecture

- **Backend** (`viewer/server.js`): Express API that reads from `wiki/` and `raw/` directories. Endpoints: `/api/pages`, `/api/pages/:domain/:slug`, `/api/index`, `/api/log`, `/api/sources/:domain`, `/api/data/:filename`.
- **Frontend** (`viewer/src/`): React + Vite. Components:
  - `MarkdownRenderer` — renders wiki markdown with GFM, LaTeX (KaTeX), and [[wikilink]] support
  - `ChartPanel` — Recharts-based visualization (line/bar charts). Configured via `chart` key in page frontmatter
  - `Frontmatter` — displays page metadata badges (domain, type, tags, date)
  - Pages: Dashboard, DomainView (list pages), PageView (single page + charts), LogView

### Adding Visualizations

When ingesting TSF reports or other data that needs graphs (freeboard trends, piezometer readings, etc.), the LLM should:

1. Store the data as JSON in `wiki/data/` (e.g., `wiki/data/freeboard-trends.json`)
2. Add a `chart` key to the wiki page's YAML frontmatter with the chart config:
   ```yaml
   chart:
     type: line
     title: "Freeboard Trends — Dam A"
     xKey: date
     yKeys:
       - { key: freeboard_m, color: "#ef4444", label: "Freeboard (m)" }
       - { key: min_required_m, color: "#f59e0b", label: "Minimum Required (m)" }
     xLabel: Date
     yLabel: Elevation (m)
     data:
       - { date: "2026-01", freeboard_m: 2.3, min_required_m: 1.5 }
       - { date: "2026-02", freeboard_m: 2.1, min_required_m: 1.5 }
   ```
3. For complex datasets, import data from `wiki/data/` via the API and create a custom page component if needed.

The LLM may also create new React components in `viewer/src/components/` for specialized visualizations as new data types are encountered.

## Cross-Domain Linking

The real value is in connections across domains:
- CSSM theory ↔ TSF engineering practice
- TSF issues ↔ Kenmare operational decisions
- Journal reflections ↔ work patterns and goals
- When a concept appears in multiple domains, give it a page in `wiki/concepts/`.
