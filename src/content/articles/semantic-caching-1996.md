---
title: "Semantic caching in 1996: fetch only the missing data"
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-17
summary: "This older database paper describes cached data using explicit predicates. It divides a new query into the part already covered and the part still missing. For agent investigations, that suggests tracking exactly which telemetry region has been fetched, rather than assuming a similar previous search is complete."
tags:
  - query planning
  - semantic caching
  - structured retrieval
connections: []
featured: false
draft: false
---

[Read the paper →](https://www.vldb.org/conf/1996/P330.PDF)

Shaul Dar, Michael J. Franklin, Björn T. Jónsson, Divesh Srivastava, and Michael Tan. VLDB, 1996.

## Brief

The cache stores predicate-described regions of data. A probe query reads the covered portion locally, while a remainder query fetches the missing portion from the server. “Semantic” here means explicit query meaning, not embedding similarity. Read sections 1, 2.4, and 3.1 in about seven minutes.

## Why it matters

My observability inference: an agent could retain coverage for a service, time interval, filter, and snapshot. A follow-up question could then request only genuinely missing evidence.

## A design question

After fetching errors from 10:00 to 10:05, expand the investigation to 10:10. Compare the complete combined result with a fresh full-range query. Repeat with a late-arriving span in the original interval to expose unsafe coverage assumptions.

## Evidence and caveat

This peer-reviewed foundation includes a comparative performance study, but focuses on read-only selections over single relations. General joins and changing data are outside that model. Safe reuse for live traces needs snapshot or ingestion-completeness rules in addition to predicate coverage.
