---
title: "Missing phases and broken joins"
number: 28
gallery: "research"
medium: "Research Paper"
date: "2026-11-02"
summary: "An investigation can fail because a phase was never recorded, because events cannot be joined, or because the evidence is ambiguous. This study uses seven supply chain attack scenarios to show why complementary telemetry sources matter."
tags: ["observability", "causal-debugging", "telemetry-coverage"]
connections: []
featured: false
draft: false
---

Source: [An Empirical Study of Observability Limits in Advanced Software Supply Chain Attacks](https://arxiv.org/abs/2603.16694) — Zhuoran Tan and colleagues.

## Brief

Tan and colleagues study chain reconstruction using SynthChain. Their August 26 revision reports that the best single source recovers fewer than forty percent of expected attack steps. Read sections 6.2, 7.3, and 8 in nine minutes.

## Why it matters

My application: benchmark the evidence available to an observability agent before blaming its reasoning. Track missing phases separately from broken joins and ambiguous matches.

## A design question

Remove one telemetry source at a time. Does the agent identify the missing step and request the source that could reveal it?

## Evidence and caveat

A controlled seven-scenario preprint with released artifacts. Coarse matching rules influence reconstruction scores; these are not general production agent accuracy estimates.

