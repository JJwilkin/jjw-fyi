---
title: "Group repeated log patterns without losing their details"
number: 30
gallery: "research"
medium: "Research paper"
date: "2026-11-06"
summary: "Drain is a foundational streaming log parser. A shallow tree routes each message to a small group of possible templates, and varying tokens become wildcards. For an observability index, the lesson is to group repeated patterns while retaining original identifiers and values for exact searches."
tags: ["log-parsing", "streaming", "index-design", "foundations"]
connections: []
featured: false
draft: false
---

Source: [Drain: An Online Log Parsing Approach with Fixed Depth Tree](https://jiemingzhu.github.io/pub/pjhe_icws2017.pdf) — Pinjia He and colleagues.

## Brief

Drain routes incoming logs through a fixed-depth tree using message length and leading tokens, then matches candidate templates. Its 2017 evaluation covers five datasets with more than ten million messages.

## Why it matters

My inference: template grouping can reduce repeated text in an agent's context. Keep original records and variable values available so similar-looking events remain distinguishable.

## A design question

Can a template-based index still return the complete correct set for queries about one request ID, status code, or unusual parameter value? Compare it with raw-log retrieval.

## Evidence and caveat

Strong historical experimental evidence for parsing, not semantic search or agent reliability. Token heuristics and preprocessing can erase distinctions needed downstream. Read section III and the evaluation setup in IV-A (6 minutes).

