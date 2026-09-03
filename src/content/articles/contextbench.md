---
title: ContextBench — Evaluating Context Retrieval in Agents
number: 8
gallery: research
medium: Research Paper
date: 2026-09-02
summary: ContextBench evaluates what coding agents retrieve, retain, and actually use, exposing the gap between broad exploration and the small amount of evidence that contributes to a successful result.
tags:
  - context engineering
  - retrieval evaluation
  - agent trajectories
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2602.05892)

Han Li and collaborators · February 2026

## Brief

ContextBench adds human-annotated relevant context to 1,136 software issue-resolution tasks across 66 repositories. Its evaluation follows agent trajectories and measures context recall, precision, and efficiency, rather than judging only the final patch. The reported agents tend to over-retrieve and leave a substantial gap between context explored and context used.

## Why it matters

An observability agent needs process metrics too: what it queried, what it kept, what it cited, and what actually affected the diagnosis. Those measurements make context-window waste and evidence loss visible before they become end-to-end failures.

## A design question

For each investigation, can the system distinguish retrieved evidence, retained evidence, cited evidence, and evidence that causally changed the final diagnosis?

## Evidence and caveat

The benchmark covers multiple languages, repositories, frontier models, and agent implementations. Its gold contexts are derived from completed software fixes, while a live incident often has no known minimal evidence set or single accepted resolution.
