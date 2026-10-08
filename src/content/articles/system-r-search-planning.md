---
title: 'Separate the Search Request from the Execution Plan'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-08
summary: The System R optimizer chose how to execute a query using statistics and estimated costs. The same separation is useful for observability search, but approximate retrieval adds a quality constraint that ordinary exact query planning did not need.
tags:
  - query optimization
  - cost models
  - retrieval architecture
connections: []
featured: false
draft: false
---

[Read the paper →](https://doi.org/10.1145/582095.582099) · [Accessible paper copy](https://courses.cs.duke.edu/compsci516/cps216/spring03/papers/selinger-etal-1979.pdf)

P. Griffiths Selinger, M. M. Astrahan, D. D. Chamberlin, R. A. Lorie, and T. G. Price · May 30, 1979 · SIGMOD

## Brief

System R separates a declarative SQL request from access-path selection. The optimizer uses catalog statistics, predicate selectivity, and estimated processing costs to choose among scans and indexes.

## Why it matters

My inference: keep a trace query's meaning stable while choosing its execution strategy. Permissions remain mandatory, and approximate plans need an explicit recall target rather than a cost target alone.

## A design question

For a small query set, compare estimated candidate counts with actual counts and compare the selected plan with viable alternatives. Include correlated service and environment filters.

## Evidence and caveat

This is foundational exact-query optimization, not vector-search research. Some estimates assume independent predicates; the original hardware cost formulas are historical, not modern tuning defaults.

Selected reading: 7 minutes; sections 2 and 4, especially selectivity estimates and access-path choice.
