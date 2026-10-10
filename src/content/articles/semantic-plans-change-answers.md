---
title: When cheaper query plans change the answer
number: 27
gallery: research
medium: Research Paper
date: 2026-10-10
summary: A new paper explains how rearranging semantic filters can change results when their decisions depend on the incoming data. For trace search, my takeaway is to measure the final evidence lost, not just the accuracy of each filter.
tags:
  - semantic search
  - query planning
  - retrieval evaluation
connections: []
featured: false
draft: false
---

[Read When Plans Change Answers →](https://arxiv.org/abs/2610.08089)

Kyoungmin Kim · October 6, 2026 · Preprint

## Brief

Kim separates query logic from decision policy. Reordering fixed, deterministic filters preserves answers; recalibrating a model cascade on a changed input population need not. Joins can also multiply the effect of one wrong decision.

## Why it matters

My inference: losing one parent trace can hide many useful spans, so average filter accuracy is not enough.

## A design question

Run the same labeled investigations through different plans. Compare complete final evidence sets, missed root causes, latency and cost.

## Evidence and caveat

Formal analysis and synthetic simulations, not a deployed engine. Main experiments assume calibrated probabilities, independent decisions and a perfect judge.

Selected reading: 8 minutes — introduction, equivalence discussion and limitations.
