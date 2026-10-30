---
title: "Choose what repeated trials mean"
number: 29
gallery: research
medium: "Documentation Note"
date: 2026-10-30
summary: "Passing once after several tries and succeeding every time are different goals. Inspect provides explicit ways to combine repeated trial scores. Choosing that rule up front helps prevent an evaluation from quietly rewarding a lucky run."
tags: [agent-evaluation, metrics, repeated-trials]
connections: []
featured: false
draft: false
---

Source: [Scoring Metrics](https://inspect.aisi.org.uk/metrics.html), Inspect, UK AI Security Institute. Living documentation, checked October 30, 2026; publication date unstated. Selected reading: 6 minutes, Reducing Epochs and Clustered Stderr.

## Brief

Inspect supports multiple reductions over repeated trials, including at-least-one success and all-attempt success. It also supports grouped metrics and clustered standard errors.

## Why it matters

My application: choose the metric based on whether an investigation gets retries or must work unattended on its first attempt.

## A design question

Run each incident five times and report both mean success and whether all five attempts pass.

## Evidence and caveat

This is official implementation documentation, not an effectiveness study. Reducers cannot fix incorrect grading, and repeated attempts must not be mistaken for independent incidents.
