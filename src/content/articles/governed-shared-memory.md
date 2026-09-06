---
title: 'Governed Shared Memory for Agent Fleets'
number: 20
gallery: research
medium: Research Paper
date: 2026-09-06
summary: Shared agent memory needs explicit scope, provenance, supersession, and propagation rules, because embedding search and direct lookup paths can otherwise enforce different security boundaries.
tags:
  - shared memory
  - access control
  - provenance
connections: []
featured: false
draft: false
---

[Read the paper on arXiv →](https://arxiv.org/abs/2606.24535)

Yanki Margalit, Nurit Cohen-Inger, Erni Avram, Ran Taig, and Oded Margalit · 2026

## Brief

The paper defines four fleet-memory failures: unauthorized leakage, stale propagation, persistent contradictions, and lost provenance. It evaluates scoped retrieval, temporal supersession, derivation tracking, and policy-controlled propagation against a live multi-tenant memory service.

## Why it matters

One measured defect came from a direct get-by-ID handler enforcing only the tenant boundary while semantic search applied narrower fleet and agent rules. This is a sharp reminder that every retrieval path, cache, trace permalink, and agent tool must enforce the same complete authorization predicate.

## A design question

Can the observability system express one executable scope policy and test it across vector search, text search, direct span lookup, parent-trace expansion, export, and cached results?

## Evidence and caveat

The evaluation reconstructed all 50 tested depth-four provenance chains and exposed a real cross-fleet access gap that was later remediated. It studies the authors' own service without alternative-system baselines, cross-tenant probes remain future work, and several workloads are small and controlled.
