---
title: 'When plausible evidence should not be trusted'
number: 27
gallery: research
medium: Research Paper
date: 2026-09-28
summary: 'A controlled study separates missing evidence from misleading evidence. For trace search, test both an absent span and a convincing but incorrect summary, then measure wrong answers alongside how often the agent answers.'
tags: [retrieval evaluation, abstention, evidence quality]
connections: []
featured: false
draft: false
---

[Read the GRAB-RAG paper](https://arxiv.org/abs/2608.22228)

Yohanes Andre Setiawan · August 23, 2026 · Preprint

## Brief

GRAB-RAG holds questions fixed while changing context between supportive, degraded, missing, and misleading evidence. Three small frozen models often stop when evidence is missing but still answer when a fabricated passage looks convincing. Additional verification trades useful answers for fewer unsafe ones.

## Why it matters

My inference for observability: an empty search result and an incorrect generated span summary need different tests. A citation can point to text that supports a claim without proving the underlying event happened.

## A design question

For the same incident question, compare raw evidence, a missing critical span, and a deliberately corrupted summary in an isolated test fixture. How often does the agent give an unsupported diagnosis, and how often does it unnecessarily decline an answerable case?

## Evidence and caveat

Controlled preprint, not a production result. The models are only 3.8B–8B and quantized. A single-author audit found broken substitutions in 13% of 200 examples; the paper promises a code release. Do not transfer its error rates to your agent.

Selected reading: 8 minutes, sections 3, 5, and Limitations.
