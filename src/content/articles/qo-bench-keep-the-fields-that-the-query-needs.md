---
title: "QO-Bench: keep the fields that the query needs"
number: 27
gallery: "research"
medium: "Research Note"
date: "2026-11-10"
summary: "Relevant passages may still leave a count or join impossible to compute. QO-Bench separates information lost during indexing from mistakes made when executing a query, suggesting that observability summaries should preserve the exact fields needed to answer the question."
tags: ["retrieval-evaluation", "structured-retrieval", "semantic-search", "query-planning"]
connections: []
featured: false
draft: false
---

Source: [QO-Bench: Diagnosing Query-Operator-Preserving Retrieval over Typed Event Tuples](https://aclanthology.org/2026.findings-emnlp.1653/) — Mengao Zhang and colleagues.

## Brief

Zhang and colleagues evaluate database-style questions over events reported in news. Their matched comparison finds different retrieval approaches succeed on different operators, with no universal winner. Read sections 2, 4, and 5 in about nine minutes. Published in Findings of EMNLP, October 2026.

## Why it matters

My inference: retain service IDs, event roles, timestamps, and source span IDs alongside semantic summaries. Those fields let an agent compute answers after finding candidate evidence.

## A design question

Build gold trace questions for filtering, intersection, joins, and counting. Compare full result sets with expected answers, then repeat with gold evidence to separate retrieval loss from execution mistakes.

## Evidence and caveat

Peer-reviewed benchmark with deterministic tuple matching and recall scoring. Corporate-event data and templated questions limit transfer to telemetry. Recall alone does not fully penalize extra results; add precision or complete-answer equality in your own evaluation.

