---
title: "Returning evidence from graph validation"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-05"
summary: "A pass or fail result often leaves an agent guessing what to do next. This paper returns supporting graph facts for successful checks and specific missing requirements for failures. An observability agent could use the same pattern to explain which evidence it has and what it still needs."
tags: ["verification", "knowledge-graphs", "evidence"]
connections: []
featured: false
draft: false
---

Source: [Evidence-Carrying Validation for Knowledge Graphs](https://arxiv.org/abs/2608.15948) — Gabe Fierro.

## Brief

Fierro's experimental Shifty validator returns satisfaction traces and failure witnesses, including graph paths and supporting triples. Its building-model case study distinguishes a missing sensor unit from a missing sensor connection. Read sections 3.5, 4.2, and 5.

## Why it matters

My application: have retrieval tools return typed evidence obligations alongside result IDs. An investigation could distinguish a missing deployment link from a trace that exists but lacks the required attribute, then choose a specific follow-up query.

## A design question

Can a failed evidence check name the missing field, the affected span, and the supporting path so the agent requests only the missing context?

## Evidence and caveat

A preprint measured on two building-model corpora. All-pair evidence cost a median 1.54 to 2.07 times conformance-only validation, excluding preparation costs. The paper does not measure LLM-agent diagnosis accuracy, and a proposed repair still requires external justification.

