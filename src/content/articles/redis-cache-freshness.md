---
title: "Redis semantic caching: expiration is not freshness"
number: 29
gallery: research
medium: Implementation Guide
date: 2026-10-17
summary: "Redis's guide shows semantic cache lookups with metadata filters and expiration. A subtle detail matters: successful lookups refresh the expiry timer. For telemetry answers, frequent use should not make old evidence look fresh. Keep evidence age and trusted tenant scope separate from similarity matching."
tags:
  - semantic caching
  - access control
  - freshness
connections: []
featured: false
draft: false
---

[Read the guide →](https://redis.io/docs/latest/develop/ai/redisvl/user_guide/how_to_guides/llmcache/)

Redis. Undated documentation, checked October 17, 2026.

## Brief

The guide demonstrates storing responses, tuning a distance threshold, applying metadata filters, and configuring expiry. Its TTL section states that matching lookups refresh the expiry timer for every matched entry. Read “TTL Behavior Details” and “Cache Access Controls, Tags & Filters” in about six minutes.

## Why it matters

My observability inference: an often-requested answer can stay resident while its evidence becomes obsolete. Track an absolute evidence timestamp or snapshot separately. Derive tenant and permission scope from trusted application context, not model-generated text.

## A design question

Repeatedly request a cached incident answer while changing its underlying spans. Does the application reject it after the allowed evidence age despite continued hits? Also verify that the same prompt in another tenant cannot retrieve it.

## Evidence and caveat

This is concrete vendor documentation, not a correctness benchmark. Filters require application enforcement, and an expiry policy does not prove semantic equivalence. Check the behavior of the version actually deployed before adopting its defaults.
