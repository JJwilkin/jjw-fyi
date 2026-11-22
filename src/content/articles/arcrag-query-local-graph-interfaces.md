---
title: "ArcRAG: discovering the graph before querying it"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-22"
summary: "ArcRAG explores the graph around a question before planning and executing a query. Its portability experiments suggest a useful test for observability agents: change how the same evidence is modeled, then measure whether the agent can still find it."
tags: ["agentic-search", "knowledge-graphs", "retrieval-evaluation"]
connections: []
featured: false
draft: false
---

Source: [ArcRAG: Agentic Compositional Retrieval over Knowledge Graphs](https://arxiv.org/abs/2611.06481) — Jyotin Goel and colleagues.

## Brief

Goel and colleagues derive a local description of graph labels, relations, and properties, then plan, execute, and repair Cypher queries. They test one retrieval procedure across two graph constructions of three question-answering corpora.

## Why it matters

My inference: a telemetry agent should discover available relationships instead of assuming every project uses the same naming conventions.

## A design question

Rebuild the same incident evidence with two schemas. At a fixed total token budget, compare direct query generation with exploration followed by planning.

## Evidence and caveat

An early preprint with useful ablations. Configurations run once; graph structure and provenance change together. Its comparisons to published systems do not control their models or protocols.
