---
title: PROBE — What Does a Good Retrieval Score Reward?
number: 28
gallery: research
medium: Research Preprint
date: 2026-10-03
summary: A single average can hide weak performance on rare entities. PROBE makes ranking strictness and popularity weighting explicit, and examines how incomplete facts can change which model appears best.
tags: [retrieval evaluation, knowledge graphs, popularity bias]
connections: []
featured: false
draft: false
---

[Read the preprint →](https://arxiv.org/abs/2606.08921)

Sooho Moon, Jian Kang, and Yunyong Ko · June 8, 2026

## Brief

PROBE separates how a rank becomes a score from how scores are weighted across entities and relations. Its experiments show that changing those choices can change model rankings. The paper also examines evaluation when some true facts are missing from the known answers.

## Why it matters

My takeaway for observability: high-volume services should not automatically dominate the score for an incident-search system. First decide whether the product needs one precise answer, several useful leads, or reliable coverage of rare failures.

## A design question

Compare candidate retrievers on the same reviewed incident set. Report both query-weighted and service-balanced results, then hide some relevance labels and measure ranking changes. Keep authorization violations as hard failures, outside the relevance average.

## Evidence and caveat

Preprint with six graph-completion models and six datasets. The missing-label experiment uses a synthetic family graph with 75 percent of test facts retained. That is not proof of robustness to biased telemetry loss, and PROBE is not a drop-in measure of answer correctness.

Selected reading: **8 minutes**, sections 1.1, 3, 5.3, and 5.5.
