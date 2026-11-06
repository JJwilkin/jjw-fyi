---
title: "Find the right log schema, then execute the question"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-06"
summary: "Log N L Q uses semantic search to find relevant log schemas, then SQL to retrieve records or calculate results. The useful distinction is between choosing where to look and checking the complete answer. Its benchmark sometimes accepts incomplete grouped results, so we should use stricter comparisons."
tags: ["semantic-search", "text-to-sql", "log-analysis", "retrieval-evaluation"]
connections: []
featured: false
draft: false
---

Source: [LogNLQ: Natural-Language Log Querying with Parser-Induced and Semantically Grounded Schemas](https://arxiv.org/abs/2607.03884) — Juepeng Wang and colleagues.

## Brief

The authors turn log templates into tables, describe their parameter columns, and retrieve those descriptions before generating SQL. Their benchmark contains 8,895 queries across four log datasets.

## Why it matters

My takeaway: semantic retrieval can select the relevant event types while structured execution handles identifiers, filters, and counts. Evaluate these stages separately to locate failures.

## A design question

For the same questions, compare schema recall, complete returned record sets, and exact aggregate results. Does better schema retrieval actually improve the final answer?

## Evidence and caveat

Moderate evidence from an author-built benchmark. Questions and reference programs are generated; complex joins remain a limitation. Result-Oriented Match accepts strict subsets for some grouped outputs. That score does not establish complete-answer correctness. Read sections 3, 4.3, and 5.4 (8 minutes).

