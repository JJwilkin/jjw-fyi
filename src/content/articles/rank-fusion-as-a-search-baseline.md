---
title: "Rank fusion as a search baseline"
number: 30
gallery: "research"
medium: "Foundational Paper"
date: "2026-11-03"
summary: "Reciprocal rank fusion combines search results using their positions instead of requiring comparable score scales. It is a simple baseline for combining keyword and semantic search, but agreement between rankings still needs to be tested against useful evidence."
tags: ["rank-fusion", "hybrid-search", "information-retrieval"]
connections: []
featured: false
draft: false
---

Source: [Reciprocal Rank Fusion outperforms Condorcet and individual Rank Learning Methods](https://cormack.uwaterloo.ca/cormacksigir09-rrf.pdf) — Gordon V. Cormack and colleagues.

## Brief

Cormack, Clarke, and Büttcher sum reciprocal ranks with an offset to combine retrieval systems without training. Their SIGIR 2009 experiments test this on TREC and LETOR collections. Read the complete two-page paper in five minutes.

## Why it matters

My application: use rank fusion as an initial baseline when keyword scores and embedding scores have incompatible scales. Preserve the source ranking for each span so changes remain inspectable.

## A design question

Compare keyword search, semantic search, and their fusion on exact error-code queries and conceptual failure descriptions. Do correlated query rewrites amplify the same distracting spans?

## Evidence and caveat

Foundational empirical evidence on older retrieval collections. Fusion is not a confidence probability, and those results do not guarantee improvement for correlated agent queries or telemetry.

