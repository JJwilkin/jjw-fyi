---
title: "Control candidate volume before semantic matching"
number: 29
gallery: research
medium: "Documentation Note"
date: 2026-10-31
summary: "Comparing every record with every other record quickly becomes expensive. Splink demonstrates how several candidate rules can reduce that work while covering different kinds of missing or misspelled data. The key is to measure what each rule adds and misses."
tags: [entity-resolution, candidate-generation, query-planning]
connections: []
featured: false
draft: false
---

Source: [Choosing blocking rules to optimise runtime](https://moj-analytical-services.github.io/splink/demos/tutorials/03_Blocking.html), Splink, Ministry of Justice Analytical Services. Living documentation, checked October 31, 2026; publication date unstated. Selected reading: 6 minutes, rule selection and comparison-count tools.

## Brief

Splink generates candidate pairs satisfying any configured blocking rule, then scores those pairs. Its tools expose comparison counts and expensive groups.

## Why it matters

My application: combine service-name and deployment-ID candidate paths before semantic matching. Keep tenant authorization mandatory in every path.

## A design question

How many additional known aliases does each rule recover per thousand extra comparisons?

## Evidence and caveat

Official documentation provides executable examples. Lower comparison counts alone do not establish recall, and a later matcher cannot recover a pair excluded by every candidate rule.
