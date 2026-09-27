---
title: 'Preserve the Conflict Before Trying to Resolve It'
number: 27
gallery: research
medium: Research Paper
date: 2026-09-27
summary: A memory benchmark compares curated evidence with memories extracted from conversations. For observability, the useful test is whether summaries preserve conflicting reports and their sources, so an agent can recognize when the records do not support one confident answer.
tags:
  - memory evaluation
  - conflicting evidence
  - summary fidelity
connections: []
featured: false
draft: false
---

[Read the paper](https://arxiv.org/abs/2608.13921)

Lu Yang, Shusheng Xu, Zhuoran Li, Tongkai Yang, and Longbo Huang · August 2026

## Brief

TANGLE evaluates unresolved personal-memory conflicts using two tracks: curated evidence and memories extracted from dialogue. Its authors report that extraction can discard the relationships needed to interpret conflicts.

## Why it matters

Our application: a trace summary should preserve both a tool failure and an agent's success claim, with attribution. Compressing them into one outcome can hide exactly the behavior an investigator wants to find.

## A design question

Give the same investigator raw evidence and then only its generated summary. Does it notice the disagreement, cite both records, and identify what would resolve it?

## Evidence and caveat

This preprint uses synthetic personal-memory cases and rubric-based model judges, with a human reference sample. It does not validate production trace search. Some conflicts are resolvable from authoritative evidence; the test must not reward uncertainty when an answer is known.

Suggested reading: sections 3.4 and 4.1–4.4, about eight minutes.
