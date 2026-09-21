---
title: "Provenance: Which evidence supports a result?"
number: 30
gallery: research
medium: Foundational Paper
date: 2026-09-21
summary: "A citation list does not say whether two records are both required or offer separate support. Provenance semirings formalize that distinction for database queries, offering a useful model for tracking the evidence behind agent findings."
tags: [data-provenance, evidence-composition, query-semantics]
connections: []
featured: false
draft: false
---

[Source: Provenance Semirings](https://doi.org/10.1145/1265530.1265535) — Todd J. Green, Grigoris Karvounarakis, and Val Tannen. PODS, June 2007. [Author-hosted paper](https://www.cs.ucdavis.edu/~green/papers/pods07.pdf).

## Brief

The paper propagates source annotations through queries. Products represent combined contributions; sums preserve alternative derivations.

## Why it matters

For agent findings, this suggests recording evidence dependencies instead of only a flat list of span IDs. That application goes beyond the paper's database setting.

## A design question

If one supporting span is removed or corrected, can we identify which findings lose support and which retain an alternative?

## Evidence and caveat

High-foundational: formal results for positive relational algebra and Datalog. Provenance does not itself prove an LLM interpretation or a causal explanation.

Selected reading: 7 minutes, sections 2–4; skip proofs initially.
