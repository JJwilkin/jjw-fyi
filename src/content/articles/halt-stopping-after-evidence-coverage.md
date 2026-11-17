---
title: "HALT: stop when the required evidence is covered"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-17"
summary: "HALT checks whether retrieved evidence supports every required reasoning step before stopping a search agent. It suggests a useful observability pattern: keep an explicit list of missing evidence. Its efficiency gains depend on the verifier and the search environment."
tags: ["agentic-search", "evidence-coverage", "stopping-policies"]
connections: []
featured: false
draft: false
---

Source: [HALT: Verification-Aware Stopping for Retrieval-Augmented Search Agents](https://arxiv.org/abs/2608.02009) — Daeyoung Roh and colleagues.

## Brief

Roh and Han add a per-claim verifier to an unchanged search agent. Its default rule stops after every expected claim is supported. Generated claims model deployment; gold claims provide a diagnostic upper bound. Read sections 3, 5.7, and Limitations; allow nine minutes.

## Why it matters

My inference: an incident agent could track which facts support each part of its diagnosis and search specifically for missing links. This makes stopping reviewable instead of relying only on an answer that sounds confident.

## A design question

Compare fixed-budget search with a claim-coverage gate on incident questions. Include misleading near-matches and a missing causal link. Measure premature stops, answer quality, latency, and all verifier costs under the same total budget.

## Evidence and caveat

Results mainly use controlled multi-hop question answering. Generated claims are less effective than gold ones, and open-corpus generated-claim evaluation remains future work. Fewer loops do not mean fewer raw tokens: verification increases token processing. The fixed claim list may miss newly discovered requirements.

