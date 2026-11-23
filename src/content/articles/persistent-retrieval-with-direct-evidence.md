---
title: "Persistent retrieval without a second summary"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-23"
summary: "ServiceNow studies a retrieval subagent that keeps its search history and returns evidence directly. For an observability agent, this suggests retaining queries and source records across follow-up questions, while measuring the cost of carrying that history."
tags: ["agentic-search", "context-engineering", "evaluation"]
connections: []
featured: false
draft: false
---

Source: [Persistent Retrieval for Conversational Agents: A Study of Retrieval Efficiency](https://arxiv.org/abs/2611.07899) — Karthik Ravula and colleagues.

## Brief

Ravula and colleagues compare retrieval inside the main agent, a fresh retrieval subagent, and a persistent one with direct evidence return. Persistence supports follow-ups and corrections; direct return removes an intermediate findings summary.

## Why it matters

My inference: an incident investigation can reuse span IDs, filters, and earlier results without repeatedly summarizing the same evidence.

## A design question

Compare all three designs on dependent incident questions. Measure answer correctness, repeated queries, full-system cost, and whether the parent notices incomplete tool results.

## Evidence and caveat

Three-run comparisons in a structured enterprise demonstration environment. The persistent design is faster but more expensive on average than the fresh subagent in multi-turn settings. Reported API costs exclude retrieval services and judges.
