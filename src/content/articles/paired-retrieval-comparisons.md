---
title: "Is a retrieval improvement real?"
number: 30
gallery: research
medium: "Foundational Paper Note"
date: 2026-10-30
summary: "A higher retrieval score can depend on which questions you tested. This foundational paper compares statistical tests using paired results for the same queries. The useful habit is to measure each query's change before declaring a new retriever better."
tags: [retrieval-evaluation, statistics, paired-comparisons]
connections: []
featured: false
draft: false
---

Source: [A Comparison of Statistical Significance Tests for Information Retrieval Evaluation](https://ciir-publications.cs.umass.edu/getpdf.php?id=744), Mark D. Smucker, James Allan, and Ben Carterette, CIKM 2007. Selected reading: 8 minutes, Sections 1, 2.1, and 5.

## Brief

The authors compare significance tests on paired retrieval results and favor randomization testing where applicable. The test should match the reported statistic.

## Why it matters

My application: compare keyword, semantic, and hybrid retrieval on the same incident questions, while keeping exact tenant and time-filter checks separate.

## A design question

Does a reranker's gain persist in a paired comparison, and is its magnitude worth the latency?

## Evidence and caveat

The experiments use historical TREC collections with fifty topics each. Statistical significance cannot repair biased relevance labels or establish operational value.
