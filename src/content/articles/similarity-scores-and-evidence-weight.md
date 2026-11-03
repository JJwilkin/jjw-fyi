---
title: "Similarity scores and evidence weight"
number: 27
gallery: "research"
medium: "Research Paper"
date: "2026-11-03"
summary: "A search score estimates relevance, but it may be a poor guide to how much an answer should trust a document. This study separates retrieval similarity from evidence scoring and tests their effects on answer voting."
tags: ["retrieval-evaluation", "evidence-weighting", "reranking"]
connections: []
featured: false
draft: false
---

Source: [When Retrieval Similarity Hurts: A Diagnostic Framework for Document Weighting in Black-Box RAG](https://aclanthology.org/2026.findings-emnlp.594/) — Dongju Seo and colleagues.

## Brief

Seo and Jang compare document-weighting signals across three models and three question-answering datasets. Cross-encoder evidence improves their voting baseline, while the value of retrieval similarity varies by dataset. Published in Findings of EMNLP, October 2026. Spend nine minutes on the framework, section 6.6, and limitations.

## Why it matters

My application: keep candidate retrieval scores separate from the evidence used to support an incident explanation. Test whether highly similar spans actually answer the investigation question.

## A design question

With candidate spans fixed, compare equal weighting, similarity weighting, and evidence weighting. Measure answer correctness and error rates when the agent abstains at different confidence thresholds.

## Evidence and caveat

Peer-reviewed factoid-QA study. It evaluates per-document answer voting; concatenating documents wins exact match in six of nine comparisons. The result does not establish a general advantage for voting or multi-hop debugging.

