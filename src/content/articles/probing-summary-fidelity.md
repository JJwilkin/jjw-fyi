---
title: "Ask what a summary can still answer"
number: 29
gallery: research
medium: "Engineering Notes"
date: 2026-09-25
summary: "Factory tests compressed context with questions about facts, artifacts, decisions, and next steps. For observability, use questions about exact spans, user corrections, failed attempts, and unresolved uncertainty, with answers checked against the original trace."
tags: [summaries, evaluation, observability]
connections: []
featured: false
draft: false
---

Source: [Evaluating Context Compression for AI Agents](https://factory.com/news/evaluating-compression), Factory Research, December 16, 2025. Engineering article.

## Brief

Factory evaluates compressed sessions by asking what details the agent can still recover. Its probes cover facts, artifacts, decisions, and continuation. Artifact tracking remained weak across the tested approaches.

## Why it matters

My inference: evaluate trace summaries using questions they must support, not similarity to a preferred paragraph. A fluent summary can omit the one correction that changes an investigation's answer.

## A design question

After repeated compaction, ask: which span records the failure, what did the user correct, which attempt was rejected, and what remains unknown? Build reference answers from raw events and include questions absent from the summarizer's prompt.

## Evidence and caveat

This is a vendor comparison with production sessions and published judge rubrics, not independent validation. An LLM judge and incomplete ground truth can miss errors. Use raw evidence and expert-reviewed cases when adapting it; a required summary section does not guarantee its contents are true.

Selected reading: **7 minutes**. Read the probe table, methodology details, and judge rubrics.
