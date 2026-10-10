---
title: Cheap filtering without losing known matches
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-10
summary: Bloom's classic membership filter saves space by allowing extra candidates through for a later check. Unlike a learned semantic filter, a correctly maintained Bloom filter does not reject inserted keys; that distinction matters when missing evidence is costly.
tags:
  - Bloom filters
  - retrieval correctness
  - foundations
connections: []
featured: false
draft: false
---

[Read Space/time trade-offs in hash coding with allowable errors →](https://doi.org/10.1145/362686.362692) · [Accessible paper PDF](https://courses.cs.washington.edu/courses/csep521/21wi/readings/bloom_cacm.pdf)

Burton H. Bloom · July 1970 · Communications of the ACM

## Brief

Bloom trades a small chance of accepting nonmembers for a compact membership structure. A follow-up check can reject these extra candidates.

## Why it matters

My inference: distinguish pruning that adds work from pruning that loses evidence. A semantic classifier can make the second kind of mistake.

## A design question

For each search stage, document which errors it permits. Verify complete inserted-key recovery for membership pruning and measure missed relevant evidence for learned pruning.

## Evidence and caveat

Foundational mathematical analysis. Membership is not meaning. The no-missed-insertions property assumes correct insertion and consistent keys and hashes; historical timing assumptions are not modern benchmarks.

Selected reading: 7 minutes — pages 422–424, especially the sample application and method two.
