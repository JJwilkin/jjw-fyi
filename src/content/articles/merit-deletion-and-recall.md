---
title: "MERIT: keep vector search useful after deletions"
number: 28
gallery: research
medium: Research Paper
date: 2026-10-12
summary: "Deleting a vector can also break paths used to find other vectors. MERIT separates immediate exclusion from local graph repair, showing why a search benchmark should include repeated deletions and replacements."
tags: [vector-indexing, deletion, versioning, retrieval-evaluation]
connections: []
featured: false
draft: false
---

Source: [MERIT: Efficient In-Place Deletion for Dynamic Graph-Based Approximate Nearest Neighbor Indexes](https://arxiv.org/abs/2607.29173) — Zekai Wu and colleagues. July 31, 2026; reviewed August 19 revision. Preprint.

## Brief

MERIT invalidates a deleted vertex, repairs a bounded neighborhood, and uses target-version checks to reject stale incoming edges. That separates whether a record can participate in search from whether every old edge has been physically cleaned up.

Read **8 minutes**: sections 4.1–4.4, 5.2, and 6.1–6.4.

## Why it matters

My takeaway: expired or regenerated trace summaries create an update workload, not a static index. Measure retrieval quality after churn, not only immediately after a clean build.

## A design question

Delete and replace summaries repeatedly. Compare the complete returned IDs against the current eligible corpus, then measure nearest-neighbor recall and latency separately. Include concentrated reuse of the same record slots.

## Evidence and caveat

Experiments cover HNSW and Vamana; reported update costs are batch-amortized rather than online tail latency. Finite version counters can wrap. Logical exclusion inside one index does not establish physical erasure or invalidation of downstream answer caches.
