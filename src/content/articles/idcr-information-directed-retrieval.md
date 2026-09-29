---
title: 'Retrieve evidence that narrows the possible answers'
number: 28
gallery: research
medium: Research Paper
date: 2026-09-29
summary: 'Information-directed retrieval asks what another document adds to the answer, rather than only how similar it looks to the question. For an observability agent, try retrieving spans that distinguish competing causes instead of collecting more examples of the same symptom.'
tags: [agentic search, evidence selection, uncertainty]
connections: []
featured: false
draft: false
---

[Read IDCR: Information-Directed Conformal Retrieval](https://proceedings.mlr.press/v337/nanivadekar26a.html)

Manas Nanivadekar, Jatin Khanijoan, Swayam Kothekar, and Mohd Amaan Khan · August 2026 · UAI

## Brief

IDCR chooses documents to shrink a calibrated prediction set. Its additive precision model supports greedy selection; a gate can invoke two-step lookahead. The paper distinguishes tighter uncertainty sets from better point predictions.

## Why it matters

My inference: five similar timeout spans may add less diagnostic value than one queue-depth or downstream-service observation that separates two plausible causes. Test evidence complementarity, not just topical relevance.

## A design question

With equal tool-call and token budgets, compare similarity ranking with an evidence selector aimed at distinguishing candidate causes. Score actual diagnosis accuracy, evidence support, and remaining uncertainty separately. A model sounding more certain is not success.

## Evidence and caveat

Peer-reviewed theory and experiments, including a small clinical cohort and other prediction datasets. The downstream target is a vector, not free-form LLM text. The optimization relies on a particular precision model; coverage requires exchangeability and isolation of calibration labels. Do not present it as a ready-made trace-search guarantee.

Selected reading: 8 minutes, sections 2–5, 7.5, and 8.
