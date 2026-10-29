---
title: What Survives Before Retrieval
number: 27
gallery: research
medium: Research Paper
date: 2026-10-29
summary: A controlled memory study separates what an agent keeps from what it retrieves. For observability, measure whether the needed span survived sampling or retention before blaming the search ranking.
tags:
  - agent memory
  - retrieval evaluation
  - observability
connections: []
featured: false
draft: false
---

[Read the paper](https://arxiv.org/abs/2610.00366)

Juli Huang · September 30, 2026 · Preprint

## Brief

The study crosses retention rules with retrieval rules while keeping evaluation episodes fixed. Its audit shows how unequal access to history can inflate apparent retrieval gains. Once evidence is discarded, even an oracle selector cannot recover it.

## Why it matters

My application to observability is to distinguish evidence lost during sampling or retention from evidence present but ranked poorly. These failures call for different fixes.

## A design question

Can a replay report three complete sets: required spans, required spans still stored, and required spans returned? Compare retrievers on the same retained corpus before changing retention policy.

## Evidence and caveat

The controlled experiments include synthetic streams and a SQuAD adaptation. They are small recall tasks, not production investigations. Dense retrieval improves selection on natural text; the lesson is to isolate its contribution, not dismiss it.

Selected reading: 8 minutes. Read sections 3, 4.1, 5, and 6.
