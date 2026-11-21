---
title: "Search-by-answer bias — Finding what the model expects"
number: 27
gallery: "research"
medium: "Research Preprint"
date: "2026-11-21"
summary: "A dense retriever can favor a familiar answer even when the passage describes the wrong relationship. This paper tests that behavior with controlled passage pairs. For trace search, it suggests checking whether familiar service names outrank less familiar names that actually satisfy the query."
tags: ["semantic-search", "retrieval-bias", "evaluation"]
connections: []
featured: false
draft: false
---

Source: [Search-by-Answer Bias in Retrieval Models](https://arxiv.org/abs/2611.11396) — Adiel Avigad and colleagues.

## Brief

Avigad and colleagues compare passages that differ in the answer entity or its relationship to the subject. Across eight retrievers, their knowledge diagnostic correlates with preference for the expected answer. Read the method, results, and limitations for the contrast design and its scope.

## Why it matters

My application to observability: searching for a dependency that failed should retrieve evidence of failure, not merely a well-known dependency. Build evaluation cases where entity familiarity and the requested relationship point toward different results.

## A design question

Create paired traces with the same structure: a familiar service succeeds while a novel service fails. Swap the service names while preserving outcomes. Does the retrieved set still satisfy the failure condition, and does exact filtering plus reranking improve it?

## Evidence and caveat

This preprint mainly uses templated sentences and single-token entities selected by a model-specific diagnostic. Alternative objects are not necessarily true facts. It is a controlled bias test, not a measured failure rate for production telemetry.
