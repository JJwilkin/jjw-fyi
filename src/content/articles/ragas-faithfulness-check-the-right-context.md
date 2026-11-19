---
title: "Ragas faithfulness: check the right context"
number: 29
gallery: "research"
medium: "Technical documentation"
date: "2026-11-19"
summary: "Ragas breaks an answer into claims and measures how many are supported by retrieved context. This provides a practical starting point for checking incident summaries. To check a particular citation, evaluate its claim against the cited evidence rather than assuming the whole context proves the link."
tags: ["evaluation", "rag", "implementation"]
connections: []
featured: false
draft: false
---

Source: [Faithfulness — Ragas](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/) — Ragas contributors.

## Brief

The documentation gives a claim-support formula, a runnable scoring example, and a worked calculation. Inputs include the question, response, and retrieved contexts. Read the main Faithfulness example and How It's Calculated; allow five minutes. Documentation checked November 19, 2026.

## Why it matters

My application to observability: distinguish support somewhere in the agent's context from support in the exact span linked beside a claim. A summary can pass the first check while pointing the engineer to the wrong run or event.

## A design question

Create one diagnosis with a correct claim but a deliberately incorrect span citation. Compare whole-context scoring with a separate claim-and-cited-span evaluation, retaining complete per-claim verdicts and human labels instead of only an average score.

## Evidence and caveat

This is primary implementation guidance, not independent evidence that a chosen judge is accurate on telemetry. Claim extraction and support judgments can fail. The metric does not measure retrieval completeness, the causal influence of context, or whether the source itself is correct.

