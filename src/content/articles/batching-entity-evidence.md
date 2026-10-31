---
title: "Share retrieval work without losing identity evidence"
number: 28
gallery: research
medium: "Paper Note"
date: 2026-10-31
summary: "Related identity checks can share retrieved context to reduce repeated work. But larger batches can dilute the facts needed for an individual decision. This paper explores that trade-off and shows how merely related evidence can encourage incorrect matches."
tags: [entity-resolution, retrieval, batching, knowledge-graphs]
connections: []
featured: false
draft: false
---

Source: [Cost-Efficient RAG for Entity Matching with LLMs](https://arxiv.org/abs/2602.05708), Chuangtao Ma and colleagues, February 5, 2026; revised October 15. Preprint. Selected reading: 8 minutes, Sections 4, 5.5, and Appendix I.3.

## Brief

The authors group related candidate pairs and reuse retrieved knowledge. They explore batching and graph context to reduce matching overhead.

## Why it matters

My application: reuse service-catalog lookups across related checks while retaining the evidence needed for each identity decision.

## A design question

At what batch size do saved lookups start increasing missed aliases or incorrect merges?

## Evidence and caveat

Experiments cover nine entity-matching benchmarks, mainly using Wikidata. Larger batches can weaken pair-specific evidence. Retrieved entities that are related but distinct can increase false positives; telemetry-specific benefits remain untested.
