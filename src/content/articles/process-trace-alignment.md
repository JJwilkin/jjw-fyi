---
title: 'Process Diagnostics Through Trace Alignment'
number: 18
gallery: research
medium: Foundational Paper
date: 2026-09-05
summary: Borrowing from biological sequence alignment, this work compares executions of different lengths so common paths, missing steps, insertions, loops, and exceptional behavior become visible.
tags:
  - trace alignment
  - process mining
  - diagnostics
connections: []
featured: false
draft: false
---

[Read the paper →](https://doi.org/10.1016/j.is.2011.08.003)

R. P. Jagadeesh Chandra Bose and Wil M. P. van der Aalst · Information Systems · 2012

## Brief

The authors treat each process execution as a sequence of events and adapt multiple-sequence alignment from bioinformatics. By inserting gaps and aligning corresponding activities, the method makes recurring structure and exceptional paths comparable even when traces have different lengths.

## Why it matters

An embedding can say that two agent runs discuss similar things while missing the decisive structural difference: one retried a tool, skipped verification, or changed plans earlier. Trace alignment offers a complementary representation for comparing the order and presence of actions rather than only their language.

## A design question

Could semantic span similarity provide the substitution score for an alignment algorithm, while explicit penalties represent skipped tools, repeated calls, and reordered verification steps?

## Evidence and caveat

The paper implements its method in the ProM framework and evaluates it on synthetic and real event logs, drawing on process-mining experience across more than 100 organizations. It predates LLM agents and models discrete process activities, so modern use would need semantic span representations, timing, arguments, outcomes, and privacy controls.
