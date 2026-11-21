---
title: "Interleaving — Compare rankers in the same session"
number: 29
gallery: "research"
medium: "Engineering Article"
date: "2026-11-21"
summary: "Netflix blends results from two rankers into one list, then uses interactions to compare them. This screens promising changes before a larger experiment. The idea could help compare evidence rankings, provided that opening a result is not mistaken for proving a diagnosis."
tags: ["ranking", "online-evaluation", "experimentation"]
connections: []
featured: false
draft: false
---

Source: [Innovating Faster on Personalization Algorithms at Netflix Using Interleaving](https://netflixtechblog.com/interleaving-in-online-experiments-at-netflix-a04ee392ec55) — Joshua Parks and colleagues.

## Brief

The team describes a variant of team-draft interleaving: randomly choose which ranker picks first, then alternate unseen results. They attribute viewing behavior to the contributing ranker and follow promising comparisons with conventional A/B tests. Read the implementation and limitations sections.

## Why it matters

My application to telemetry search: a shared result list can compare competing rankings within the same investigation. Preserve result ownership, displayed position, and downstream usefulness so a frequently opened but misleading trace does not become the preferred answer.

## A design question

In a small offline study with engineers, mix two authorized evidence rankings with randomized first choice. Compare the selected supporting evidence, then check whether the preference agrees with diagnosis accuracy in a separate paired evaluation.

## Evidence and caveat

This is a detailed production account, but Netflix reports its own recommendation experiments. Interleaving measures relative preference, not absolute task success. Business rules can disrupt the comparison, and the reported sensitivity gains should not be assumed for observability search.
