---
title: "Can the trace identify where the failure started?"
number: 28
gallery: "research"
medium: "Research Note"
date: "2026-11-09"
summary: "A trace can show that something failed while hiding where the mistake began. TelemetrySuffBench removes different kinds of evidence from the same executions. It suggests testing whether our summaries preserve decisions and source links, and whether the agent admits when several causes remain possible."
tags: ["telemetry", "failure-attribution", "agent-evaluation", "provenance"]
connections: []
featured: false
draft: false
---

Source: [TelemetrySuffBench: Is Agent Telemetry Sufficient for Failure-Origin Diagnosis?](https://arxiv.org/abs/2608.07899) — Yuxuan Zhu and colleagues.

## Brief

Zhu and Pu vary the visible evidence while keeping the underlying execution fixed. Their controlled experiments separate failure detection, origin localization, and abstention. They also construct identical visible traces with different hidden origins. Read sections III and V in about eight minutes.

## Why it matters

My inference: compare full spans, summaries, and retrieved evidence on the same diagnosis tasks before choosing what to index.

## A design question

Remove decision details and provenance separately. Measure origin accuracy, unsupported single-cause answers, and unnecessary abstention on cases that remain answerable.

## Evidence and caveat

Controlled preprint evidence, mostly from generated faults. Its restricted OpenTelemetry-compatible projections are specific experimental views, not a limit of OpenTelemetry itself. Results were not independently reproduced.

