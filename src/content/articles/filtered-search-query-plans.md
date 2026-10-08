---
title: 'Filtered Search Needs the Right Query Plan'
number: 27
gallery: research
medium: Research Paper
date: 2026-10-08
summary: A vector search can return only valid matches and still miss the best ones. This study shows why exact search over a small filtered set can compete with approximate search, and why the database planner needs testing too.
tags:
  - filtered search
  - query planning
  - evaluation
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2602.11443)

Abylay Amanbayev, Brian Tsan, Tri Dang, and Florin Rusu · February 11, 2026 · Preprint

## Brief

The authors compare filtered search in FAISS, Milvus, and pgvector. They find cases where filtering first and computing exact distances matches approximate-search latency while recovering all exact nearest neighbors.

## Why it matters

My inference: evaluate three things separately for trace search. Did every result obey the tenant and time constraints? Did approximate search recover the exact filtered neighbors? Were those neighbors actually useful evidence?

## A design question

For restrictive trace filters, compare the chosen plan with an exact filtered baseline. Record the plan, eligible-row count, neighbor recall, and latency.

## Evidence and caveat

The study uses fixed software versions, in-memory single-threaded execution, and scalar inequalities. It excludes joins and compound filters; each measured query runs once. These results are not a production ranking of databases.

Selected reading: 9 minutes; sections 6.4, 7.2.8, and limitations.
