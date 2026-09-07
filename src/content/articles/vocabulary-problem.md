---
title: 'The Vocabulary Problem — Why One Behavior Tag Is Not Enough'
number: 26
gallery: research
medium: Foundational Paper
date: 2026-09-07
summary: A 1987 study found that people often choose different words for the same object or action. It gives us a reason to test real user wording alongside standard behavior tags, so searches like ignored correction and used an outdated argument can find the same evidence.
tags:
  - vocabulary mismatch
  - semantic keys
  - information retrieval
connections: []
featured: false
draft: false
---

[Find the original publication](https://doi.org/10.1145/32206.32212) · [Read the paper](https://zhang.ist.psu.edu/teaching/504/readings/Furnas.pdf)

G. W. Furnas, T. K. Landauer, L. M. Gomez, and S. T. Dumais · November 1987

## Brief

Across several naming tasks, people rarely agreed on one preferred term. The authors studied multiple access terms and frequency-weighted aliases as ways to improve retrieval.

## Why it matters

Our interpretation: a behavior taxonomy should not require customers to guess our labels. Preserve specific descriptions and collect the language people use when searching for those behaviors.

## A design question

Ask several engineers to describe the same trace independently. Can each description retrieve that trace without using our chosen tag?

## Evidence and caveat

This is an empirical study of human naming and lexical access. It predates modern embeddings and does not determine how many generated search phrases to store. Its useful contribution is the vocabulary-coverage problem and a way to test it.

Suggested reading: sections 2–4, about seven minutes.
