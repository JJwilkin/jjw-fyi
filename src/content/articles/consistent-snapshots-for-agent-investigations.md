---
title: "Consistent snapshots for agent investigations"
number: 30
gallery: "research"
medium: "Foundational paper"
date: "2026-11-04"
summary: "An investigation can assemble individually correct observations into an impossible story if they describe incompatible moments. Chandy and Lamport show how to record a consistent distributed snapshot, including messages still in flight. The modern lesson is to preserve the relationship between observations, not just their text."
tags: ["distributed-systems", "causality", "observability"]
connections: []
featured: false
draft: false
---

Source: [Distributed Snapshots: Determining Global States of Distributed Systems](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/12/Determining-Global-States-of-a-Distributed-System.pdf) — K. Mani Chandy and colleagues.

## Brief

The February 1985 paper records process state and messages in transit using markers. It explains why independently captured local states can lose or duplicate a token in the combined picture. Read the introduction, system assumptions, and section 3's marker rules.

## Why it matters

My application: semantic trace search should return time, version, and causal links alongside matching text. A plausible explanation assembled from unrelated deployments can still describe a state that never existed.

## A design question

Can an investigation detect that a retrieved deployment event and its alleged downstream error belong to incompatible versions or causal histories?

## Evidence and caveat

A foundational algorithm with a formal model: channels are error-free and deliver messages in order. Ordinary sampled telemetry does not automatically satisfy those assumptions; applying the idea to search is a design inference, not a direct recipe.

