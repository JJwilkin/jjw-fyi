---
title: 'Make Metadata Filters Part of Candidate Discovery'
number: 29
gallery: research
medium: Engineering Article
date: 2026-10-08
summary: Turbopuffer describes an attribute index that knows which vector clusters contain matching documents. Search can skip irrelevant clusters before fetching detailed matches, instead of discarding most results after a global search.
tags:
  - native filtering
  - bitmap indexes
  - storage
connections: []
featured: false
draft: false
---

[Read the engineering article →](https://turbopuffer.com/blog/native-filtering)

Bojan Serafimov, turbopuffer · January 21, 2025

## Brief

The post describes cluster-aware attribute indexes. Coarse bitmaps identify matching clusters; finer bitmaps identify matching documents. Cluster moves require corresponding attribute-index updates.

## Why it matters

My inference: trace metadata can help search discover eligible evidence, rather than merely reject irrelevant candidates afterward. That creates an important consistency obligation when indexed attributes change.

## A design question

After a metadata update or cluster move, does retrieval still match the complete expected eligible set on a small exact fixture? Test permission revocation separately at every externally visible retrieval path.

## Evidence and caveat

This is a concrete vendor architecture account, not an independent benchmark or authorization proof. Its example latency figures are illustrative, and the article describes the January 2025 design.

Selected reading: 6 minutes; native filtering and implementation sections.
