---
title: "CIPHER: can an agent reason over sanitized records?"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-18"
summary: "CIPHER combines structured fields and narrative text in questions that need several records. Even when all supporting records are available, models can choose the wrong records or misunderstand a condition. This suggests testing interpretation separately from retrieval and privacy filtering."
tags: ["structured-retrieval", "semantic-search", "privacy", "evaluation"]
connections: []
featured: false
draft: false
---

Source: [CIPHER: Benchmarking Cross-record Inference over Privacy-Hardened Evidence Records](https://arxiv.org/abs/2609.07022) — Suparno Roy Chowdhury and colleagues.

## Brief

The authors provide 3,427 questions with executable references and supporting-record identifiers. Their main setting includes all supporting records plus distractors, helping isolate interpretation failures from missing evidence. Read Sections 3, 5.3, 6.3, and 8; allow nine minutes.

## Why it matters

My application to observability: a request such as 'count failed runs where a retry recovered the dependency' mixes exact fields with a meaning-based condition. Search recall alone cannot show whether an agent understood that condition or counted the correct runs.

## A design question

Build synthetic traces with known supporting span IDs. Compare raw, consistently pseudonymized, and redacted versions. First give the agent all supporting spans, then require retrieval. Score the complete selected span set and the final aggregate separately.

## Evidence and caveat

This preprint offers executable supervision, but reported answer metrics also use overlap and model judging. Restored values are plausible surrogates, not recovered secrets. The redaction comparison uses one backbone, and the benchmark does not cover open-ended explanations or prove privacy.

