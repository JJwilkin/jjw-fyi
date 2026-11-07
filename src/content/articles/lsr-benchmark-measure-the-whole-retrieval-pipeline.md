---
title: "Benchmark the whole retrieval pipeline"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-07"
summary: "The learned sparse retrieval benchmark measures document encoding, indexing, query encoding, and search separately, alongside relevance. Its results show that choosing an encoder also changes the behavior of the search engine. For an observability agent, compare complete retrieval pipelines and tail latency, not just a model score or one fast search call."
tags: ["retrieval-evaluation", "sparse-retrieval", "latency", "benchmarking"]
connections: []
featured: false
draft: false
---

Source: [Evaluating the Efficiency and Effectiveness of Learned Sparse Retrieval with the lsr_benchmark](https://downloads.webis.de/publications/papers/froebe_2026a.pdf) — Maik Fröbe and colleagues.

## Brief

Fröbe and colleagues benchmark eleven sparse models and eight engines across eleven retrieval tasks. The framework measures encoding, indexing, and retrieval costs alongside relevance; model choice affects engine efficiency.

## Why it matters

My takeaway: benchmark the encoder and engine together. An agent that searches repeatedly can amplify slow query encoding or long-tail retrieval delays.

## A design question

Compare BM25, dense retrieval, and learned sparse retrieval on the same incident queries. Include ingestion cost, query encoding, p95 latency, and graded evidence relevance.

## Evidence and caveat

Strong reproducible evaluation evidence, with subsampled retrieval collections and specified hardware. Results do not establish performance under production ingestion, tenant filters, or telemetry distributions. ECIR 2026; read sections 3 and 4.1–4.2 (8 minutes).

