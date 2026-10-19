---
title: "Show an estimate without pretending it is complete"
number: 30
gallery: research
medium: "Reading Note · Foundational Paper"
date: 2026-10-19
summary: "Online aggregation lets a query report improving estimates while it runs. This classic paper makes uncertainty and progress part of the interface. For an observability agent, that is a useful alternative to presenting a few retrieved examples as if they describe the entire population."
tags: [query-engines, uncertainty, aggregation]
connections: []
featured: false
draft: false
---

Source: [Online Aggregation](https://control.cs.berkeley.edu/online/online.pdf), Joseph M. Hellerstein, Peter J. Haas, and Helen J. Wang. SIGMOD, 1997.

## Brief

The paper describes running aggregates with progress, uncertainty intervals, and interactive controls. It also explains execution changes needed to support useful partial results, including access order and non-blocking grouping.

## Why it matters

My inference: tools should distinguish an exact result, a statistical estimate, and an incomplete set of examples. A semantic ranking is not a random sample, so its top results cannot inherit ordinary sampling guarantees.

## A design question

On a fixed trace dataset, compare uniform sampling with relevance-ranked retrieval when estimating an error rate. Measure estimation error and interval coverage against the complete population. Keep semantic classification errors separate from sampling errors.

## Evidence and caveat

Strong foundational systems work with a prototype. Its interval calculations depend on sampling and estimator assumptions. Applying them to an agent also requires checking whether its stopping rule preserves the intended coverage.

Selected reading: **7 minutes** — sections 1.1–1.2, 3.2.1, and 4.
