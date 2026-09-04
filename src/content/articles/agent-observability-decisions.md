---
title: 'Agent Observability — Monitoring Decisions, Not Requests'
number: 13
gallery: research
medium: Engineering Note
date: 2026-09-04
summary: MongoDB's guide separates monitoring, observability, and evaluation, arguing that useful agent traces must capture the decision path across context, tools, memory, outcomes, and cost.
tags:
  - agent observability
  - OpenTelemetry
  - evaluation
connections: []
featured: false
draft: false
---

[Read the article at MongoDB →](https://www.mongodb.com/company/blog/technical/agent-observability-monitoring-decisions-not-requests)

Mikiko Bazeley, Ashish Kumar, Massimiliano Marcon, Charlie Xu, Ahmed Sulaiman, and Nandini Kapa · MongoDB · 2026

## Brief

The article separates three jobs: monitoring asks whether the system is healthy, observability reconstructs what the agent did and why, and evaluation decides whether that behavior was good. It recommends connected spans for model calls, tools, memory, and workflows, plus metrics for task completion, retrieval relevance, and fully loaded cost per task.

## Why it matters

A run can return successful status codes at every step and still fail the user. An observability agent therefore needs outcome definitions and retrieval-quality signals alongside ordinary latency, error, and token data.

## A design question

Can one production run be reconstructed from the trace alone, including what context was retrieved, why each action was permitted, and which step first stopped advancing the task?

## Evidence and caveat

The article offers concrete instrumentation, tail-sampling, alerting, and audit-trail guidance grounded in the authors' agent-platform work. It is vendor-authored design guidance rather than a controlled production study, and the OpenTelemetry GenAI conventions it references are still evolving.
