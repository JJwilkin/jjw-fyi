---
title: "Explicit data requirements with SHACL"
number: 30
gallery: "research"
medium: "Foundational specification"
date: "2026-11-05"
summary: "SHACL describes the conditions an RDF graph must satisfy and gives structured reports when those conditions fail. It can express required values, types, and allowed relationships. For an observability agent, this offers a concrete way to describe the evidence an investigation needs before drawing a conclusion."
tags: ["rdf", "data-validation", "schemas"]
connections: []
featured: false
draft: false
---

Source: [Shapes Constraint Language (SHACL)](https://www.w3.org/TR/2017/REC-shacl-20170720/) — W3C RDF Data Shapes Working Group.

## Brief

The 2017 W3C Recommendation separates a data graph from a shapes graph containing validation conditions. Its examples cover value types, counts, allowed properties, and reports identifying the affected node and constraint. Read the introductory example and Validation Report section.

## Why it matters

My application: define a small evidence contract for a suspected deployment regression: a service identity, deployment identifier, time window, and linked failure evidence. Evaluate this contract separately from semantic relevance and causal correctness.

## A design question

Can the same incident fixture pass the structural contract while still failing a human relevance judgment, and does the evaluation report those as separate outcomes?

## Evidence and caveat

A stable specification establishes validation behavior, not the truth or completeness of the underlying facts. Shapes must express the intended requirements; a conforming graph does not by itself prove an incident's cause.

