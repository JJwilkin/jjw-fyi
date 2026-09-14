---
title: "The Threshold Algorithm: Knowing When Search Can Stop"
number: 30
gallery: research
medium: Foundational Paper
date: 2026-09-14
summary: "The threshold algorithm combines several ranked lists and stops when unseen candidates cannot beat the current top results. It gives a useful model for search stopping, but its guarantee depends on exact access and does not automatically apply to approximate vector search."
tags: ["retrieval","rank aggregation","early stopping"]
connections: []
featured: false
draft: false
---

[Read the source](https://www.wisdom.weizmann.ac.il/~naor/PAPERS/middle_agg.pdf)

Ronald Fagin, Amnon Lotem, and Moni Naor · Journal of Computer and System Sciences, June 2003

## Brief

The algorithm reads sorted score lists and obtains missing component scores for encountered objects. With a monotone combining rule, the latest scores bound how well an unseen object can rank. Search stops once the current top k meet that bound.

## Why it matters

For an agent combining several retrieval signals, this offers a precise question: what evidence justifies stopping? The connection is a design lens, not a claim that the algorithm directly solves open-ended investigation.

## A design question

On an exhaustively scored fixture, compare an early-stopping result with the complete expected top k. Identify which score-access assumptions are lost when a retriever returns only truncated approximate neighbors.

## Evidence and caveat

High foundational evidence: a formal result under explicit access and scoring assumptions. Exact top-k recovery does not mean finding every relevant record or establishing that the scoring function represents diagnostic usefulness.

Suggested reading: sections 2 and 4, about seven minutes.

