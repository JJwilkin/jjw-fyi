---
title: "Biased feedback — Unopened does not mean irrelevant"
number: 30
gallery: "research"
medium: "Foundational Paper"
date: "2026-11-21"
summary: "A result near the top gets more chances to be noticed. This paper adjusts learning from clicks using estimates of that exposure. For observability agents, the lesson is to record what evidence was available and shown before using interaction history as relevance labels."
tags: ["foundations", "learning-to-rank", "feedback-bias"]
connections: []
featured: false
draft: false
---

Source: [Unbiased Learning-to-Rank with Biased Feedback](https://www.cs.cornell.edu/~schnabts/downloads/joachims2017ltr.pdf) — Thorsten Joachims and colleagues.

## Brief

Joachims and colleagues use inverse propensity weighting to learn from biased feedback. Their experiments include an operational search engine and randomized position swaps to estimate examination probabilities. Read sections 4, 5, and 7.6 for the assumptions and deployment experiment.

## Why it matters

My application to agent evaluation: a trace that was never retrieved or was cut from context had no opportunity to influence the answer. Logging only opened or cited spans cannot distinguish lack of usefulness from lack of exposure.

## A design question

Record candidate, returned, shown, opened, and cited states separately. In a controlled replay, randomize the order of equally eligible spans and compare observed usefulness before and after accounting for exposure. Keep human judgments and final correctness as independent checks.

## Evidence and caveat

This peer-reviewed paper provides theory and experiments under explicit feedback assumptions. Corrections require nonzero exposure and credible probability estimates. Human click models do not automatically describe agent behavior; weighting cannot recover evidence that had no chance to appear.
