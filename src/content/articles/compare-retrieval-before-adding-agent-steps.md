---
title: "Compare retrieval before adding agent steps"
number: 28
gallery: "research"
medium: "Research Paper"
date: "2026-11-03"
summary: "Six retrieval pipelines share the same generator and document corpus in this comparison. Reranking and late interaction perform well, while extra query and tool steps do not automatically improve results. The useful lesson is to measure what each stage contributes."
tags: ["retrieval-evaluation", "reranking", "agentic-search"]
connections: []
featured: false
draft: false
---

Source: [Re-ranking and Late Interaction Drive Retrieval Quality: A Controlled Comparison of RAG Strategies for Scientific Question Answering](https://arxiv.org/abs/2609.38473) — Bhagyesh Rathi and colleagues.

## Brief

Rathi and colleagues compare dense search, rewriting, reranking, fusion, tool calls, and ColBERT over the same scientific-paper corpus. Their fusion and tool-call variants trail the basic dense baseline on answer quality. Read sections 3, 4.5, and 6 in nine minutes.

## Why it matters

My application: compare candidate recall, final evidence quality, and investigation success separately before adding more search steps to an observability agent.

## A design question

Hold the generator, corpus, and evaluation cases fixed. Does reranking or another search call improve successful diagnoses enough to justify its latency and token cost?

## Evidence and caveat

Preprint with released code and synthetic questions. The judge cannot see retrieved evidence, and the generator also created the questions. ColBERT changes both encoder and scoring, so this does not isolate late interaction or disprove agentic search generally.

