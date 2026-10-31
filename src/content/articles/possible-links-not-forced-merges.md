---
title: "Keep uncertain identity links uncertain"
number: 30
gallery: research
medium: "Foundational Paper Note"
date: 2026-10-31
summary: "A record-linkage paper from 1969 makes room for three decisions: match, non-match, and possible match. That third outcome is useful for agents too. An uncertain service alias should remain a hypothesis until there is enough evidence to rely on it."
tags: [entity-resolution, uncertainty, decision-theory]
connections: []
featured: false
draft: false
---

Source: [A Theory for Record Linkage](https://nhis.ipums.org/nhis/resources/Fellegi69.pdf), Ivan P. Fellegi and Alan B. Sunter, Journal of the American Statistical Association, 1969. Selected reading: 8 minutes, introduction and Sections 2–2.1.

## Brief

The paper formalizes link, non-link, and possible-link decisions. It minimizes unresolved comparisons subject to specified false-link and missed-link error levels.

## Why it matters

My application: retain uncertain aliases as candidates instead of silently joining their telemetry into one incident history.

## A design question

Can the agent request one more identifying fact before relying on an ambiguous identity link?

## Evidence and caveat

This is foundational decision theory. Its optimality result depends on the comparison distributions and error constraints; practical estimates need validation as service names, deployments, and populations change.
