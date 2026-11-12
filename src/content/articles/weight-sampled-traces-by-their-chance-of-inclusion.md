---
title: "Weight sampled traces by their chance of inclusion"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-12"
summary: "A sample that favors unusual traces cannot be counted as though every request had the same chance of appearing. Horvitz and Thompson explain how known inclusion probabilities support unbiased total estimates, giving modern observability systems a useful statistical foundation."
tags: ["sampling", "statistical-evaluation", "foundations"]
connections: []
featured: false
draft: false
---

Source: [A Generalization of Sampling Without Replacement From a Finite Universe](https://www.stat.cmu.edu/~brian/905-2008/papers/Horvitz-Thompson-1952-jasa.pdf) — D. G. Horvitz and colleagues.

## Brief

The 1952 paper derives an estimator that weights each sampled value by the inverse of its inclusion probability, with variance formulas and explicit conditions. Read the introduction and pages 665 through 670, focusing on equation 6; allow seven minutes.

## Why it matters

For an observability agent, I would separate evidence chosen to explain a failure from data used to estimate how often it happens. The latter needs a defined population and sampling design, not just highly relevant search results.

## A design question

Use a fully retained test window as ground truth. Preferentially sample errors with known probabilities, then compare repeated weighted total estimates with the true totals and with naive counts. Report uncertainty as well as average error.

## Evidence and caveat

Mathematical guarantees depend on known positive inclusion probabilities; the general unbiased variance estimate also requires positive pairwise probabilities. Deterministic top-k search gives some records no chance of selection, so inverse weighting cannot repair it.

