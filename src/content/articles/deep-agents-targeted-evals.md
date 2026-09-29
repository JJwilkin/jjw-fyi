---
title: 'Turn trace failures into focused agent evaluations'
number: 29
gallery: research
medium: Engineering Article
date: 2026-09-29
summary: 'LangChain describes building focused evaluations from real agent failures and comparing efficiency only after correctness. For trace search, keep separate tests for query execution, evidence retrieval, and investigation behavior so one aggregate score cannot hide a broken capability.'
tags: [agent evaluation, tracing, retrieval evaluation]
connections: []
featured: false
draft: false
---

[Read How we build evals for Deep Agents](https://www.langchain.com/blog/how-we-build-evals-for-deep-agents)

Vivek Trivedy, Mason Daugherty, Eugene Yurtsev, and Harrison Chase · March 26, 2026 · LangChain

## Brief

The team turns observed failures into targeted capability evaluations, groups them by behavior, and separates SDK plumbing tests from model scores. It compares correctness first, then steps, tool calls, and latency, using traces to explain regressions.

## Why it matters

My inference: a successful database call does not establish useful retrieval, and useful retrieval does not establish a supported diagnosis. These deserve separate checks even when tested through the same end-to-end run.

## A design question

Take three real failures: a wrong time filter, a missed causal span, and unnecessary repeated searches. Give each a complete expected outcome and its own metric. Compare cost only among runs that satisfy the relevant correctness checks.

## Evidence and caveat

Concrete vendor implementation guidance with an open-source evaluation setup, not an independent benchmark study. Its ideal trajectories are estimates for open-ended work. Permit different valid investigation paths rather than demanding one exact sequence of tools.

Selected reading: 7 minutes, data curation, metrics, and running evaluations.
