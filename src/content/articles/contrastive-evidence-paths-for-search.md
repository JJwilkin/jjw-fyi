---
title: "Follow evidence paths without favoring hubs"
number: 28
gallery: "research"
medium: "Research paper"
date: "2026-11-23"
summary: "A document can rank highly because many graph paths reach it, even when it adds little evidence. Contrastive Evidence Paths adjusts for background connectivity and retains the paths behind results, giving an agent a map for further investigation."
tags: ["agentic-search", "knowledge-graphs", "ranking"]
connections: []
featured: false
draft: false
---

Source: [When Connectivity Misleads: Guiding Agentic Search with Contrastive Evidence Paths](https://arxiv.org/abs/2610.36134) — Junchen Li and colleagues.

## Brief

Li and colleagues calibrate strongest-path scores against background graph visitation. Their system exposes candidate documents and connecting paths, then lets agents read sources or expand from an anchor.

## Why it matters

My inference: common infrastructure services could otherwise dominate an incident graph and distract an agent from a less-connected failing component.

## A design question

Keep evidence and queries fixed, but add irrelevant links to a distractor. Compare rank changes, evidence recall, and diagnosis quality before and after calibration.

## Evidence and caveat

Preprint with benchmark comparisons, ablations, and connectivity perturbations on BrowseComp-Plus and TREC-COVID. Graph maintenance for changing sources is outside scope; transfer to streaming telemetry remains untested.
