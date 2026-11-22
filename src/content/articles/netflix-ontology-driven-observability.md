---
title: "Netflix: identity before incident reasoning"
number: 29
gallery: "research"
medium: "Engineering article"
date: "2026-11-22"
summary: "Netflix describes a shared ontology connecting telemetry, deployments, and incident discussions. Catalog-validated application identities let specialist agents exchange findings. For our design, a typed, queryable claim should still retain its evidence and uncertainty."
tags: ["observability", "entity-resolution", "knowledge-graphs"]
connections: []
featured: false
draft: false
---

Source: [Ontology-Driven Observability: Building an End-to-End Knowledge Graph at Netflix Scale](https://netflixtechblog.com/ontology-driven-observability-building-an-end-to-end-knowledge-graph-at-netflix-scale-421392cf5adf) — Prasanna Vijayanathan and colleagues.

## Brief

Vijayanathan and Sanchez-Silva describe RDF, OWL, SHACL, and SPARQL behind an operational graph. Ordered enrichers add typed facts; application entities must match the catalog. Correlation chains retain supporting records and confidence.

## Why it matters

My inference: joining a span to the right deployment and service may matter more than another improvement in embedding similarity.

## A design question

Give two services similar names and conflicting incident comments. Does indexing preserve their separate identities and distinguish observations from proposed causes?

## Evidence and caveat

A detailed first-party implementation account, not a controlled benchmark. Typed output does not guarantee factual accuracy or repeatable extraction. The authors acknowledge that ranked hypotheses can be wrong.
