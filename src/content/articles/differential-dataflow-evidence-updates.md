---
title: "Differential Dataflow: update the derived evidence too"
number: 30
gallery: research
medium: Foundational Paper
date: 2026-10-12
summary: "When a source record changes, its derived results need to change too. Differential Dataflow shows how additions and removals can flow through joins and iterative computations while reusing earlier work."
tags: [incremental-computation, dataflow, retractions, derived-evidence]
connections: []
featured: false
draft: false
---

Source: [Differential dataflow](https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf) — Frank McSherry, Derek G. Murray, Rebecca Isaacs, and Michael Isard. CIDR, January 2013.

## Brief

The model represents changes with positive and negative weights, tracking both new input versions and iteration steps. Its Naiad prototype reuses prior work for changing graph computations rather than rebuilding every result.

Read **7 minutes**: sections 2, 3.1–3.3, and 5.1. Skim the equations on a first pass.

## Why it matters

My inference: evidence joins, incident groupings, and cached aggregates should have explicit update dependencies. Deleting a span from raw storage is not enough if derived search material still repeats its contents.

## A design question

For a small deterministic span pipeline, compare incrementally maintained outputs with a full recomputation after every insert, correction, and deletion. Require complete equality before comparing performance.

## Evidence and caveat

The paper includes prototype measurements on graph workloads, with retained in-memory state and scheduling overhead. It is not an automatic incremental algorithm for an arbitrary LLM summary. Regeneration and version tracking for nondeterministic model output need their own contract.
