---
title: "Track the records before counting them"
number: 28
gallery: research
medium: "Research Note · Preprint"
date: 2026-10-19
summary: "Even when all the records fit in context, a language model can miss or double-count them. This study connects better counting with step-by-step retrieval and progress tracking. The practical question is whether our agent can produce an auditable record list before reporting a total."
tags: [context-engineering, state-tracking, retrieval]
connections: []
featured: false
draft: false
---

Source: [Targeted Retrieval, Compact Representations: How CoT Reasoning Improves Long-Context Counting](https://arxiv.org/abs/2609.38958), Liang Twist Shan, Tianyu Hu, Hao Yan, and Yiqiao Zhong. September 30, 2026. Preprint.

## Brief

The authors compare counting records hidden in long passages. Reasoning improves accuracy, while longer contexts still cause errors. Their internal-model experiments link sequential retrieval with representations of counting progress.

## Why it matters

My inference: sending every span to a larger context window does not establish that the agent accounted for every span. Explicit evidence IDs make omissions and duplication inspectable.

## A design question

Compare direct counting, explicit record enumeration, and extraction followed by deterministic deduplication and counting. Score the entire ID set and final count separately while varying context length and record position.

## Evidence and caveat

Medium-strength controlled evidence, not a production search benchmark. The mechanistic analysis mainly examines two models; interventions move record content together with count information, so they do not isolate a pure counter circuit.

Selected reading: **8 minutes** — sections 2, 4, and 6.
