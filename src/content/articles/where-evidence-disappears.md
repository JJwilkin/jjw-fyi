---
title: 'Find Where the Evidence Disappeared'
number: 28
gallery: research
medium: Research Paper
date: 2026-09-27
summary: A pipeline study separates facts lost during ingestion or transport from facts that reach the model but never appear in its answer. For an observability agent, checking each boundary can distinguish a pagination bug from a retrieval or reasoning failure.
tags:
  - evidence omission
  - pipeline evaluation
  - failure attribution
connections: []
featured: false
draft: false
---

[Read the paper](https://arxiv.org/abs/2607.22448)

Santhiya Rajan, Samuel Mugel, and Román Orús · July 2026; reviewed August revision

## Brief

The authors propose checkpoints across ingestion, tool transport, prompt construction, inference, and output. Their stress tests distinguish missing input from evidence that is available but not used.

## Why it matters

Our application: a missing trace is not automatically an embedding failure. The relevant record might have been on an unfetched page or removed while formatting tool output.

## A design question

Place a known record beyond the first results page. Compare complete expected records at each transport boundary, then separately assess whether the final answer uses the evidence correctly.

## Evidence and caveat

Use this preprint as a diagnostic framework, not a production failure-rate estimate. It deliberately injects and weights faults, uses substring-based outcome scoring and heuristic behavioral attribution, and notes that complete raw sweep artifacts still need archiving. Our proposed whole-record transport checks are stricter than its presence checks.

Suggested reading: the layer taxonomy, attribution methodology, and limitations, about eight minutes.
