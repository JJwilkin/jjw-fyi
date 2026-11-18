---
title: "k-anonymity: when ordinary fields identify someone"
number: 30
gallery: "research"
medium: "Foundational paper"
date: "2026-11-18"
summary: "Sweeney shows why removing direct identifiers can leave people identifiable through combinations of ordinary fields. The paper also examines how separate releases can combine to weaken protection. For telemetry, evaluate the information exposed across records and over time, not just each field alone."
tags: ["privacy", "entity-resolution", "foundations"]
connections: []
featured: false
draft: false
---

Source: [k-anonymity: a model for protecting privacy](https://epic.org/privacy/reidentification/Sweeney_Article.pdf) — Latanya Sweeney.

## Brief

The paper formalizes indistinguishability among at least k records on selected quasi-identifiers. Its attack examples show risks from row order, complementary releases, and changing datasets. Read the introduction, the k-anonymity definition, and Section 4; allow seven minutes.

## Why it matters

My application to semantic trace search: an agent can connect rare endpoints, timestamps, and repeated activity across many results. That ability is useful for debugging, but it also means that fields assessed individually may reveal more when combined.

## A design question

Using synthetic identities only, measure whether combinations of exported endpoint, time bucket, and activity fields uniquely link records. Repeat after combining two releases. Compare coarser fields against both linkage success and incident-retrieval usefulness.

## Evidence and caveat

This is foundational formal work with explicit attack examples, not evidence that k-anonymity secures modern free-text traces. Its protection depends on the defined quasi-identifiers and release assumptions; other inference attacks and access-control requirements remain outside that guarantee.

