---
title: "Semantic search can use weighted terms"
number: 30
gallery: "research"
medium: "Research paper"
date: "2026-11-07"
summary: "SPLADE learns sparse term weights and adds related vocabulary, allowing semantic matching through an inverted index. Sparsity controls the balance between retrieval quality and computation. For traces and spans, it offers another candidate retrieval method, but exact request identifiers still deserve explicit fields and direct lookup tests."
tags: ["sparse-retrieval", "semantic-search", "foundations", "query-expansion"]
connections: []
featured: false
draft: false
---

Source: [SPLADE: Sparse Lexical and Expansion Model for First Stage Ranking](https://arxiv.org/abs/2107.05720) — Thibault Formal and colleagues.

## Brief

SPLADE learns weighted vocabulary terms for queries and documents, including expansion terms absent from the original text. Sparsity regularization controls how many terms participate in retrieval.

## Why it matters

My inference: this gives trace search an alternative to dense embeddings when user descriptions and telemetry wording differ. Keep identifiers in exact-match fields; learned vocabulary weights are not an identity guarantee.

## A design question

Separate evaluation queries into exact identifiers, literal error messages, and paraphrased symptoms. Where does sparse expansion improve evidence retrieval, and where does it introduce distractors?

## Evidence and caveat

Foundational SIGIR 2021 research with retrieval experiments. Its benchmark results do not prove performance on unusual service names, IDs, or agent traces. Read sections 3 and 4 (7 minutes).

