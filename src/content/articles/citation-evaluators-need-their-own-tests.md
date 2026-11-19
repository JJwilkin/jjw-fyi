---
title: "Citation evaluators need their own tests"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-19"
summary: "Different citation judges can give very different scores to the same agent output. This paper validates judges against human labels and studies a calibrated review rule. Its practical lesson is to test the evaluator on realistic mistakes before treating its score as ground truth."
tags: ["evaluation", "citation-verification", "calibration"]
connections: []
featured: false
draft: false
---

Source: [Evaluating and Guarding Citation Faithfulness in Agentic Scientific Synthesis](https://arxiv.org/abs/2607.20527) — Taewan Goo and colleagues.

## Brief

Goo and colleagues audit claim-citation pairs and compare verifier disagreement. They calibrate a rule for catching unsupported citations against human labels, then study transfer to harder negatives. Read Sections 4, 5.8, and 7; allow eight minutes.

## Why it matters

My application to trace search: an easy wrong-span example may be unrelated, while a real mistake cites a nearly identical retry or another run. A judge tested only on easy negatives can appear reliable and still miss the errors users actually see.

## A design question

Build a human-reviewed set of diagnosis-and-span pairs with wrong-run, wrong-time-window, and correlation-versus-causation mistakes. Compare complete verdict lists across judges, then report missed unsupported claims and review volume on held-out realistic errors.

## Evidence and caveat

The authors provide confidence intervals and a reproducibility kit, but hold retrieval fixed. Their bound concerns catching unsupported citations, not diagnosis correctness. Calibration on easy distractors transfers poorly to real mis-citations; target-domain negatives and exchangeability assumptions matter.

