---
title: "TRACE: Finding connected evidence"
number: 27
gallery: research
medium: Research Paper
date: 2026-09-21
summary: "Useful evidence may be spread across several steps. TRACE combines nearby pages with semantic links to build an evidence chain, suggesting a way to search connected spans instead of ranking each span independently."
tags: [agentic-search, evidence-retrieval, graph-traversal]
connections: []
featured: false
draft: false
---

[Source: TRACE: Traversal Retrieval-Augmented Chain of Evidence for Document Understanding](https://aclanthology.org/2026.acl-long.445/) — Liqi He, Zuchao Li, Hao Huang, and Ping Wang. ACL, July 2026.

## Brief

The authors combine page adjacency and semantic links with query decomposition to construct connected evidence. Retrieval becomes navigation rather than a single similarity ranking.

## Why it matters

For telemetry, the analogous experiment is to follow a promising span to its preceding request and subsequent result. This is a proposed transfer, not a result demonstrated in the paper.

## A design question

At the same token budget, does bounded neighbor expansion recover more complete evidence than independent span ranking?

## Evidence and caveat

Medium-high: conference experiments and ablations, but on static visual documents. Streaming updates and misleading evidence remain limitations.

Selected reading: 8 minutes, sections 4 and 5.3, plus Limitations.
