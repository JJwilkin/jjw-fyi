---
title: "RDF: identity and graph boundaries"
number: 30
gallery: "research"
medium: "Technical standard"
date: "2026-11-22"
summary: "RDF defines triples and datasets containing multiple graphs. Its identity rules are still useful when combining telemetry sources: local blank-node labels are not portable identifiers, and a named graph does not automatically define provenance or access policy."
tags: ["rdf", "knowledge-graphs", "metadata"]
connections: []
featured: false
draft: false
---

Source: [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/) — W3C RDF Working Group.

## Brief

The W3C specification defines graphs of subject-predicate-object triples and datasets containing default and named graphs. It distinguishes IRIs, literals, and blank nodes; blank-node labels have local scope.

## Why it matters

My inference: source, tenant, and time boundaries must be modeled explicitly when an agent combines evidence from different telemetry stores.

## A design question

Import two datasets that reuse the same local node label. Verify they remain distinct, and make the intended source and tenant boundaries explicit.

## Evidence and caveat

Authoritative foundational specification, not an agent-performance study. A graph name is syntactically paired with a graph; provenance and authorization semantics require additional design.
