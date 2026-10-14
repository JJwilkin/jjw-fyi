---
title: 'Perplexity Late Interaction — A Small Query Model for a Rich Index'
number: 30
gallery: research
medium: Model Card
date: 2026-10-14
summary: Perplexity's new late-interaction models search text and visual documents with token-level vectors. A smaller query model can search an index built by the larger model because they share an embedding space. That suggests a way to spend more compute during ingestion while keeping investigation-time queries lighter.
tags:
  - multimodal retrieval
  - late interaction
  - embedding models
connections: []
featured: false
draft: false
---

[Read the official model card →](https://huggingface.co/perplexity-ai/pplx-embed-v2-late-0.6b)

Perplexity · Release dated October 7, 2026 in the model card citation

## Brief

The model family produces 128-dimensional token vectors for text and visual documents. Its smaller and larger encoders share an embedding space, allowing the smaller model to query the larger model's document index.

## Why it matters

My inference: an investigation agent could search runbook pages or screenshots alongside text evidence, while spending more compute on offline encoding than on each query. Keep those artifacts tied to their source and capture time.

## A design question

Compare text-only extraction with visual-page retrieval on runbooks containing tables and diagrams. Test small-query/large-document encoding against matched encoders, including latency and relevance.

## Evidence and caveat

The official card provides weights, usage code, and vendor-reported ViDoRe results—not trace-search validation. The documented export requires separate text and image batches and does not support mixed text-plus-image inputs. Read Models, Training, and Usage: 7 minutes. The linked launch blog was unavailable during this review.
