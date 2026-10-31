---
title: "Matching records is only one part of finding an entity"
number: 27
gallery: research
medium: "Paper Note"
date: 2026-10-31
summary: "Recognizing two records as the same entity matters only if both records reach the matcher. A real-world matching benchmark shows why candidate discovery and final identity decisions need separate evaluation. This distinction also matters when connecting services, deployments, and incidents."
tags: [entity-resolution, evaluation, candidate-generation]
connections: []
featured: false
draft: false
---

Source: [OpenSanctions Pairs: Large-Scale Entity Matching with LLMs](https://arxiv.org/abs/2603.11051), Chandler Smith and colleagues, February 24, 2026. Preprint. Selected reading: 8 minutes, Sections 3, 5.6, and 6.

## Brief

The benchmark contains analyst-labeled entity pairs drawn from a real deduplication workflow. It compares matching methods on pairs already selected as candidates.

## Why it matters

My application: measure service-alias discovery separately from deciding whether two discovered records share an identity.

## A design question

How many true aliases never reach the matcher, and how many unrelated deployments get merged after reaching it?

## Evidence and caveat

Real operational data strengthens the study, but labels reflect incomplete evidence. Model evaluation sample sizes vary, and strong pairwise results do not establish end-to-end recall or transfer to telemetry.
