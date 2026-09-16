---
title: 'RECON — Remembering What a Conclusion Depends On'
number: 27
gallery: research
medium: Research Paper
date: 2026-09-16
summary: 'A useful memory must retain more than isolated facts. RECON tests whether agents can follow evidence chains and update conclusions when earlier information changes. For observability, it suggests testing whether trace summaries preserve corrections and dependencies, while measuring evidence retrieval separately from answer correctness.'
tags:
  - agent memory
  - retrieval evaluation
  - provenance
connections: []
featured: false
draft: false
---

[Read the paper on arXiv](https://arxiv.org/abs/2607.16716)

Mihir Shriniwas Arya · July 18, 2026 · Preprint

## Brief

RECON builds synthetic case files from explicit evidence graphs. Its tasks include reconstructing chains, resolving conflicts, and determining which conclusions survive a correction.

## Why it matters

My takeaway for telemetry search: a summary can preserve each event while losing the relationships that make those events useful evidence. Finding a correction is different from knowing which later claims it invalidates.

## A design question

Create a trace with an early tool result that is later corrected. Compare raw spans with summaries that retain source IDs and dependencies. Under the same context budget, can the agent identify both invalidated conclusions and conclusions with independent support?

## Evidence and caveat

Medium evidence: 24 synthetic cases, not production telemetry. The oracle receives a structured ground-truth graph rather than the same prose with better retrieval. Its advantage therefore mixes representation and retrieval effects. Header-based evidence coverage is also only a proxy for content preservation.

Suggested reading: sections 3.2–3.3, 4.3, and 6; about eight minutes.
