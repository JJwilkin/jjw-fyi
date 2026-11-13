---
title: "Choose a search portfolio from runtime behavior"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-13"
summary: "A search method that is unreliable on its own can be useful in a group if it sometimes succeeds very quickly. Gomes and Selman show how parallel runs, interleaving, and restarts change the tradeoff between search time and risk."
tags: ["algorithm-portfolios", "search-budgets", "foundations"]
connections: []
featured: false
draft: false
---

Source: [Algorithm portfolios](https://www.cs.cornell.edu/gomes/pdf/2001_gomes_ai_portfolios.pdf) — Carla P. Gomes and colleagues.

## Brief

This 2001 study evaluates portfolios on hard combinatorial problems. It shows why the best standalone strategy need not make the best portfolio and why runtime distributions matter. Spend seven minutes on the introduction and the portfolio analysis in sections 4–5.

## Why it matters

My inference: evaluate a mix of exact-ID lookup, semantic search, and dependency traversal by the incidents each resolves and the resources it consumes. The fastest average standalone retriever may still leave a useful role for a less consistent alternative.

## A design question

Compare one long investigation, several short restarts, and a small mix of retrieval strategies at equal total compute. Plot time to a verified diagnosis and unresolved cases at the deadline. Count the work of every parallel branch, including cancelled branches.

## Evidence and caveat

The evidence concerns constraint and mixed-integer search, not language-model retrieval. The authors warn that portfolio gains depend on runtime distributions. An agent additionally needs a reliable verifier; a fast plausible answer is not necessarily a solved incident.

