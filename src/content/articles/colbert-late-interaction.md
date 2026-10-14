---
title: 'ColBERT — Keep the Details Until Scoring'
number: 27
gallery: research
medium: Research Paper
date: 2026-10-14
summary: ColBERT keeps a vector for each contextualized token, then scores how well the document matches each part of a query. This offers a useful middle ground between one-vector search and expensive joint scoring, but a strong match still does not prove a causal relationship between spans.
tags:
  - semantic search
  - late interaction
  - retrieval evaluation
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2004.12832)

Omar Khattab and Matei Zaharia · SIGIR 2020 · April 27, 2020

## Brief

ColBERT encodes query and document tokens separately, preserving contextualized token vectors. Its MaxSim score adds each query vector's best document match. Document encoding happens ahead of time, making richer matching possible without jointly encoding every query-document pair.

## Why it matters

My inference for trace search: this is worth testing when one summary vector loses a small but important failure detail. Token matching is a ranking signal, not a replacement for explicit span relationships.

## A design question

Compare one-vector retrieval and late interaction on incidents where the same terms appear in both relevant and irrelevant traces. Include wrong-parent and wrong-time examples; keep tenant and time restrictions fixed.

## Evidence and caveat

The paper evaluates passage retrieval, not incident diagnosis. Keeping token vectors increases storage, and strong semantic matches do not establish causality. Selected reading: sections 3.1–3.5 and 4.5, about 8 minutes.
