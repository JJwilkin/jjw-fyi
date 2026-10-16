---
title: "MCP Input Requests — Resume Safely After Clarification"
number: 29
gallery: research
medium: Implementation Guide
date: 2026-10-16
summary: "The current MCP TypeScript guide shows a handler returning an input request and running again after the client replies. That makes clarification part of tool execution. Responses and carried state still cross a trust boundary, so validate them and handle refusal without repeatedly asking the same question."
tags:
  - tool use
  - human interaction
  - state management
connections: []
featured: false
draft: false
---

[Read the source →](https://ts.sdk.modelcontextprotocol.io/v2/servers/input-required.html)

Model Context Protocol maintainers · Undated official TypeScript SDK v2 guide, checked October 16, 2026

## Brief

The guide explains input_required responses, handler re-entry, and state carried across rounds. It distinguishes missing input from declined or cancelled input and demonstrates schema validation and signed state.

## Why it matters

My inference: an observability tool can ask for a missing time window without losing its investigation context. The retry must not duplicate expensive queries or external actions.

## A design question

Test a clarification flow with accepted, declined, cancelled, malformed, and tampered-state responses. Verify the complete outcome and ensure retries cannot widen tenant access.

## Evidence and caveat

Official implementation examples, not an effectiveness benchmark. Check the negotiated protocol: the guide distinguishes the July 2026 return-and-retry flow from older push requests. Signed state is not encrypted. Read response handling and the requestState sections: 6 minutes.

