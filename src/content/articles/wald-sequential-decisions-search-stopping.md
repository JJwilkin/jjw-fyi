---
title: "Wald: let observations determine when to decide"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-17"
summary: "Wald's 1947 paper studies decisions where the number of observations depends on what those observations reveal. The connection to agent search is direct: choosing when to stop is part of the decision process, rather than just a fixed number of tool calls."
tags: ["sequential-decisions", "stopping-policies", "foundations"]
connections: []
featured: false
draft: false
---

Source: [Foundations of a General Theory of Sequential Decision Functions](https://www.jstor.org/stable/1905331) — Abraham Wald.

## Brief

Wald extends statistical decision functions to settings where observations determine how many samples are needed before deciding. This note draws on the opening definitions, not the later proofs. Read Introduction and Basic Notions, beginning on page 279; allow seven minutes. An [academic PDF mirror](https://www.phys.ens.psl.eu/~nadal/Cours/MVA/Doc/Papers/Decision/StatTests/Wald_SequentialDecision_1947.pdf) provides the original text when available.

## Why it matters

My inference: evaluate the entire search-and-stop policy. Two agents that eventually give the same answer may differ substantially in premature conclusions, useful follow-up evidence, and wasted retrieval.

## A design question

Replay matched investigations with evidence arriving in different orders. Compare a fixed search count with an adaptive stopping rule, and report wrong decisions alongside total investigation cost rather than collapsing them into answer accuracy alone.

## Evidence and caveat

This is a formal statistical foundation, not an LLM evaluation. A modern agent's search results are selected adaptively and may be correlated or unreliable; statistical guarantees require a justified model. The inspected opening is available in an academic PDF mirror, but later access to that mirror timed out.

