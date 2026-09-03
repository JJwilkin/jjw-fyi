---
title: Knowledge Graphs vs. Relational Schemas for Agentic Retrieval
number: 5
gallery: research
medium: Technical Study
date: 2026-09-02
summary: A production CRM experiment argues that precomputed semantic relationships can turn difficult agent inference into cheap graph traversal, especially when identity is fragmented across structured and unstructured systems.
tags:
  - knowledge graphs
  - semantic search
  - entity resolution
connections: []
featured: false
draft: false
---

[Read the original study →](https://www.rox.com/articles/knowledge-graphs-vs-relational-schemas)

Santhosh Kumar Manavasi Lakshminarayanan, Damon Lin, and Shriram Sridharan at Rox · August 16, 2026

## Brief

Rox compares agents querying eleven CRM tables with SQL against agents querying a virtual OWL ontology with SPARQL. The graph materializes cross-source relationships such as account identity and customer champions ahead of time. Both approaches handle ordinary keyed questions, but the relational agents struggle when the answer depends on a relationship absent from the source schema.

## Why it matters

Logs, traces, deployments, services, owners, and incidents rarely share one clean identifier. A semantic layer can make those relationships persistent, inspectable data rather than asking the model to rediscover them from raw context during every investigation.

## A design question

Which relationships in an observability system are stable and valuable enough to materialize as edges, and which should remain hypotheses generated at query time?

## Evidence and caveat

The study covers 3,100 runs across model configurations and reports a large advantage for the graph on five unkeyed questions. It is a vendor-authored evaluation over ten questions from its own CRM workflow, with model-based grading, so the magnitude should not be assumed to generalize unchanged.
