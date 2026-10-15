---
title: 'Counterfactual Learning — Know What Your Logs Cannot Tell You'
number: 30
gallery: research
medium: Research Paper
date: 2026-10-15
summary: "This older paper explains when logged data can tell us how a different decision would have performed. Replaying known computations is different from estimating outcomes for actions never taken. For an observability agent, that means recording how evidence was selected and being explicit about which alternatives the logs cannot evaluate."
tags:
  - counterfactual evaluation
  - experiment design
  - agent observability
connections: []
featured: false
draft: false
---

[Read the paper at JMLR →](https://www.jmlr.org/papers/v14/bottou13a.html)

Léon Bottou and colleagues · Journal of Machine Learning Research · November 2013

## Brief

The paper distinguishes replaying known downstream computations from estimating alternative outcomes using randomized logged decisions. Reweighting can support some comparisons, but depends on the data covering the alternatives and on defensible causal assumptions.

## Why it matters

My inference: a successful agent trace does not show what would have happened with a different search policy. Missing candidate sets or selection probabilities can prevent useful offline comparisons.

## A design question

For a retrieval-policy experiment, record the candidate set, selected evidence, policy version, and actual selection probabilities when randomized. Which proposed comparisons remain unsupported by those logs?

## Evidence and caveat

This is a peer-reviewed foundation illustrated with Bing advertising experiments, not an LLM benchmark. It does not make arbitrary observational traces causal; limited coverage and unstable weights constrain conclusions. Read sections 3.2 and 4.1–4.3: 8 minutes.
