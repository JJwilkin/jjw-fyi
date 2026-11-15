---
title: "Reiter's diagnosis theory: choose evidence that separates causes"
number: 30
gallery: "research"
medium: "Foundational Note"
date: "2026-11-15"
summary: "Reiter's 1987 diagnosis theory starts with a model of how a system should behave and observations that contradict it. Several fault explanations may fit. Its enduring lesson is to seek another measurement that distinguishes those explanations before choosing a cause."
tags: ["model-based-diagnosis", "causal-debugging", "foundations"]
connections: []
featured: false
draft: false
---

Source: [A Theory of Diagnosis from First Principles](https://www.cs.ru.nl/~peterl/teaching/KeR/reiter.pdf) — Raymond Reiter.

## Brief

Reiter formalizes diagnosis as identifying components whose assumed abnormality makes a system description consistent with observations. Multiple diagnoses can survive the same evidence. Section 5 explains how additional measurements can eliminate candidates. Read the introduction, section 2, and the start of section 5; allow seven minutes.

## Why it matters

My inference: an agent searching traces should retain competing explanations and retrieve evidence on which their predictions differ. Repeatedly finding similar error messages may add volume without narrowing the diagnosis.

## A design question

Build an incident with two plausible causes that fit the initial traces. Require the agent to name one additional span or metric measurement that would separate them, then check whether the observed result changes its candidate set.

## Evidence and caveat

This is foundational formal work, not a modern LLM benchmark or a probabilistic ranking method. Its conclusions depend on the system model and observations. Read it for the diagnosis and measurement concepts, not as a ready-made production tracing implementation.

