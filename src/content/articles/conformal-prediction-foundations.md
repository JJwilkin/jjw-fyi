---
title: 'What a coverage guarantee actually promises'
number: 30
gallery: research
medium: Foundational Paper
date: 2026-09-29
summary: 'Conformal prediction turns past errors into prediction sets with stated coverage under specific assumptions. The important lesson for observability is that reliable performance across many cases is different from certainty about one incident, and a useful evaluation must measure both coverage and how large the returned sets become.'
tags: [conformal prediction, evaluation, calibration]
connections: []
featured: false
draft: false
---

[Read A Tutorial on Conformal Prediction](https://jmlr.org/papers/v9/shafer08a.html)

Glenn Shafer and Vladimir Vovk · 2008 · Journal of Machine Learning Research

## Brief

This tutorial explains prediction sets and their coverage guarantees under exchangeability and related models. It also shows why overall error control can hide worse performance for particular labels, and describes calibration within categories.

## Why it matters

My inference: a global recall target can hide weak evidence retrieval for a rare service or incident type. Returning almost everything may achieve high coverage while making the observability agent slow and unhelpful.

## A design question

Report coverage alongside result-set size and latency, broken down by service and incident class. Separate held-out incidents from calibration cases, and add a later-time stress test to expose drift. Treat that stress test as evidence, not a proof that the assumptions hold.

## Evidence and caveat

Foundational peer-reviewed theory with worked examples. The guarantees depend on stated data assumptions; they are not unconditional probabilities that one diagnosis is right. Rapidly changing telemetry needs separate treatment of distribution shift.

Selected reading: 7 minutes, introduction, section 3.1, and section 5.3.1. Skip the longer derivations on the first pass.
