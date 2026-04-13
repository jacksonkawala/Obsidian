---
title: Dashboard
---

# Dashboard

## Quick Access

| | |
|:--|:--|
| [[index\|Wiki Index]] | [[log\|Activity Log]] |
| [[Nataka TSF]] | [[Kenmare Moma Mining]] |
| [[TODO — Week of 13 April 2026\|Current TODO]] | [[Freeboard]] |

---

## Recent Updates

```dataview
TABLE updated AS "Updated", domain AS "Domain", type AS "Type"
FROM "wiki"
SORT updated DESC
LIMIT 10
```

## TSF Status

```dataview
TABLE WITHOUT ID
  file.link AS "Report",
  updated AS "Date",
  tags AS "Tags"
FROM "wiki/tsf"
WHERE type = "summary"
SORT updated DESC
LIMIT 5
```

## Geotech Reports

```dataview
TABLE WITHOUT ID
  file.link AS "Report",
  updated AS "Date"
FROM "wiki/geotech"
SORT updated DESC
LIMIT 5
```

## Open Tasks

```dataview
TASK
FROM "wiki"
WHERE !completed
LIMIT 20
```

## All Pages by Domain

```dataview
TABLE WITHOUT ID
  domain AS "Domain",
  length(rows) AS "Pages"
FROM "wiki"
GROUP BY domain
SORT domain ASC
```
