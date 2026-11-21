---
title: "Search paths — Inspect more or start another query"
number: 28
gallery: "research"
medium: "Research Preprint"
date: "2026-11-21"
summary: "This framework separates inspecting another result from starting a new query. It evaluates the evidence discovered along the resulting search path. For an observability agent, that gives us a way to compare exploration strategies while keeping the retriever and available effort fixed."
tags: ["agentic-search", "evaluation", "query-planning"]
connections: []
featured: false
draft: false
---

Source: [A Sequential Decision Framework for Evaluating LLM-Guided Search](https://arxiv.org/abs/2610.39231) — Siqing Huo and colleagues.

## Brief

Huo and colleagues describe search using two actions: select advances through an existing ranking; spawn creates another ranking. Experiments compare retrieval methods and exploration policies under judging budgets. Read sections 3, 4, and 6 for the framework and evaluation.

## Why it matters

My application to incident investigation: retrieving a good first page and choosing a useful next search are different abilities. Record which result list each inspected span came from, what new evidence it added, and the cost of opening another branch.

## A design question

Keep the retriever and incident set fixed. Compare one-query search, an upfront set of query variations, and adaptive reformulation using equal token and time budgets. Plot unique supporting evidence found over time alongside final diagnosis correctness.

## Evidence and caveat

This preprint demonstrates a framework, not a new learned policy. One analysis uses human judgments; another measures recall against pooled LLM judgments. Its stopping rule can consume different total effort across policies, so equal stopping parameters do not imply equal cost.
