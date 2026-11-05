---
title: "Using types to guide agent query planning"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-05"
summary: "A relationship can sound relevant while being wrong for the entity being searched. SAGA uses schema types to narrow the relationships an agent sees as it builds a graph query. For trace search, this suggests showing the agent valid links between services, spans, deployments, and errors."
tags: ["agentic-search", "knowledge-graphs", "query-planning"]
connections: []
featured: false
draft: false
---

Source: [SAGA: Schema-Aware Grounding for Agentic Text-to-SPARQL Generation](https://arxiv.org/abs/2607.14494) — Yiming Zhang and colleagues.

## Brief

Zhang and Tsuda filter incompatible graph properties during query construction and annotate the remaining choices with type information. Unknown schema is handled permissively. They report improved answer F1 across nine Wikidata and Freebase settings. Read Method, Ablation Study, and Robustness to Incomplete Schema.

## Why it matters

My application: give a trace-search agent a compact catalog of supported relationships and their endpoint types. Track valid query construction separately from whether the returned evidence actually answers the incident question.

## A design question

Does typed relationship discovery reduce invalid joins and empty results without hiding valid paths when service metadata is missing?

## Evidence and caveat

A preprint evaluated on public knowledge-base questions, not telemetry. Removing schema constraints has non-monotonic effects across datasets; inaccurate or incomplete typing remains a limitation.

