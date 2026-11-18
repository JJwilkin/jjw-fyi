---
title: "RedacBench: measure what redaction removes and keeps"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-18"
summary: "RedacBench evaluates whether redacted text still reveals forbidden facts and whether useful facts survive. Its lesson for an observability agent is to measure privacy and diagnostic usefulness separately. Removing names alone does not establish either result."
tags: ["privacy", "evaluation", "semantic-search"]
connections: []
featured: false
draft: false
---

Source: [RedacBench: Can AI Erase Your Secrets?](https://arxiv.org/abs/2603.20208) — Hyunjun Jeon and colleagues.

## Brief

Jeon and colleagues evaluate policy-conditioned redaction using 514 texts and 8,053 annotated propositions. Their security score measures sensitive facts removed; their utility score measures permitted facts preserved. Read Sections 2.2, 3.2, and the limitations in Section 5; allow eight minutes.

## Why it matters

My application to trace search: a summary should retain operational facts such as retries and failing dependencies while obeying the project's data policy. A useful retrieval result can still leak information, and a thoroughly sanitized result can lose the cause of a failure.

## A design question

For synthetic spans, label the complete sets of permitted diagnostic facts and forbidden facts. Compare the facts recoverable from each sanitized summary, then separately test whether the agent retrieves the right incident and explains its cause.

## Evidence and caveat

The released benchmark offers explicit annotations and evaluator checks, but remains empirical evidence. The authors warn that evaluator hallucination or prior exposure to source documents can distort scores. It provides no formal privacy guarantee; telemetry-specific usefulness needs its own evaluation.

