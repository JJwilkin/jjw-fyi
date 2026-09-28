---
title: 'Two scorecards for agentic search'
number: 29
gallery: research
medium: Engineering Article
date: 2026-09-28
summary: 'OpenSearch evaluates ranked relevance separately from structured query results. That is a useful starting point for trace search, but the benchmark contract matters: count failed attempts and check the complete allowed result, not just whether the expected data appears somewhere.'
tags: [structured retrieval, semantic search, evaluation]
connections: []
featured: false
draft: false
---

[Read Evaluating agentic search in OpenSearch](https://opensearch.org/blog/evaluating-agentic-search-in-opensearch/)

Josh Palis and colleagues, OpenSearch · March 18, 2026

## Brief

OpenSearch measures ranked relevance with NDCG@10 and structured-query correctness by executing queries and comparing results. It also shows different query rewrites for lexical and neural retrieval. Rewriting helps some datasets and hurts others.

## Why it matters

My inference: maintain separate scorecards for finding useful traces and correctly filtering or counting them. A relevant-looking result should never excuse a wrong tenant, time range, or aggregation.

## A design question

For structured tests, compare the entire expected result after only contract-approved normalization, including duplicate rows and required ordering. For semantic tests, judge useful evidence near the top and measure coverage of required spans. Report invalid attempts separately and in the overall denominator.

## Evidence and caveat

Vendor evaluation with concrete examples. The reported 82.07% is 604 correct among 736 valid evaluations, from 921 attempts. Its comparator allows extra columns and ignores row order; its Spider adaptation excludes joins and subqueries. Those choices are too permissive for some observability contracts.

Selected reading: 8 minutes, retrieval prompts, result analysis, and Execution accuracy.
