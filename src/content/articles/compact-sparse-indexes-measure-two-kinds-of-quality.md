---
title: "A smaller search index still needs two quality checks"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-07"
summary: "This paper reduces the memory used by learned sparse search indexes through compact block representatives and compressed scoring data. Its accuracy measure asks whether approximate search recovers the exact vector ranking. For observability, we also need a second test: whether that ranking finds the evidence an investigator actually needs."
tags: ["sparse-retrieval", "index-design", "quantization", "retrieval-evaluation"]
connections: []
featured: false
draft: false
---

Source: [Compact and Efficient Indexes for Learned Sparse Retrieval](https://arxiv.org/abs/2610.12300) — Franco Maria Nardini and colleagues.

## Brief

The authors replace large block summaries with representative document IDs and compress the vectors used for scoring. Experiments use three sparse encoders on MS MARCO.

## Why it matters

My application: measure both index approximation and usefulness to an investigator. Recovering the model's exact ranking does not prove that the ranking contains the right incident evidence.

## A design question

At a fixed memory budget, report exact-neighbor recovery, human-labeled evidence recall, and full query latency. Does compression preserve all three on your traces?

## Evidence and caveat

Substantial implementation and benchmark evidence, but not a telemetry evaluation. Reported retrieval latency excludes query encoding, and Accuracy@k measures agreement with exhaustive vector search. Read III-B, III-E, and IV's evaluation metrics (8 minutes).

