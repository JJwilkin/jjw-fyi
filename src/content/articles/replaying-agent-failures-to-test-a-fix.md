---
title: "Replaying agent failures to test a fix"
number: 27
gallery: "research"
medium: "Research paper"
date: "2026-11-04"
summary: "A recorded failure can become a repeatable test. Chronicle reuses recorded model responses while running changed tool code live. For an observability agent, this suggests saving enough detail to test a fix against the exact incident that exposed the bug."
tags: ["agent-evaluation", "replay", "observability"]
connections: []
featured: false
draft: false
---

Source: [Chronicle: Cut-Point Replay for Regression Testing of LLM Agents](https://arxiv.org/abs/2609.20625) — Tisha Chawla and colleagues.

## Brief

Chawla and Koul describe selective replay: reuse recorded outputs at some boundaries and execute changed code at others. Their six simulated incidents distinguish faulty tools from guarded fixes. Read sections 3 through 5 for the mechanism and evaluation.

## Why it matters

My application: a failed trace search could become a regression fixture containing the original query, tool inputs, result IDs, and scope. That would let us test a new tenant filter or query planner against the same incident.

## A design question

Can one recorded cross-tenant search failure reject the old implementation and accept a corrected tool while the model response stays fixed?

## Evidence and caveat

A small preprint study with simulated model calls. Unrecorded state escapes replay, and the evaluated implementation can miss reordered crossings when per-boundary counts stay unchanged. These tests do not establish semantic answer quality.

