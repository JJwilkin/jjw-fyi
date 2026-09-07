---
title: 'Contextual Retrieval — Give Each Span Its Missing Context'
number: 25
gallery: research
medium: Engineering Article
date: 2026-09-07
summary: Anthropic adds a short explanation of each passage's surrounding context before indexing its original text. For traces, we could test a similar approach by attaching the user goal, tool, and relevant earlier correction to an otherwise ambiguous span.
tags:
  - contextual retrieval
  - hybrid search
  - span indexing
connections: []
featured: false
draft: false
---

[Read the engineering article](https://www.anthropic.com/engineering/contextual-retrieval)

Daniel Ford, Anthropic · September 19, 2024

## Brief

The method prepends a short, passage-specific explanation to the original text, then builds embedding and keyword indexes. The article includes a prompt and an implementation cookbook.

## Why it matters

A tool response can be hard to interpret without its request or preceding correction. Contextualizing the source text gives us a useful baseline for evaluating generated behavior summaries.

## A design question

Compare raw spans, summaries alone, and spans with short context descriptions. Which finds the most verified matches for questions about ignored corrections?

## Evidence and caveat

Anthropic reports top-20 retrieval failure falling from 5.7 to 1.9 percent with contextual hybrid search and reranking. Its generic-summary experiments performed poorly. These are vendor-reported document results, so neither finding establishes performance on agent traces.

Suggested reading: implementation, methodology, and reranking sections, about seven minutes.
