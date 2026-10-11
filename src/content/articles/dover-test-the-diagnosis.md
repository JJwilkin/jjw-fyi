---
title: "DoVer: test the diagnosis by changing the run"
number: 28
gallery: research
medium: Research Paper
date: 2026-10-11
summary: "A convincing explanation is not the same as a tested fix. DoVer changes a message or plan and replays from a checkpoint to see whether an agent actually makes progress."
tags: [agent-debugging, interventions, replay, evaluation]
connections: []
featured: false
draft: false
---

Source: [DoVer: Intervention-Driven Auto Debugging for LLM Multi-Agent Systems](https://arxiv.org/abs/2512.06749) — Ming Ma and colleagues, December 7, 2025; reviewed revision January 31, 2026.

## Brief

DoVer proposes a diagnosis, edits a message or plan, restores a checkpoint, and executes the changed trajectory. Three repeats per intervention support assessment of task success, progress, and whether the intervention was followed.

Read **8 minutes**: sections 4.1–4.2, 5.2, and 7.

## Why it matters

My takeaway: a debugging benchmark should distinguish finding a plausible failure step from finding a repair that works. A semantic-search index can help retrieve evidence, but replay needs preserved inputs, configuration, tool results, and checkpoint references too.

## A design question

For a safely replayable task, compare repeated edited runs against repeated unchanged controls in an isolated sandbox. Measure success improvement and cost, not just explanation quality.

## Evidence and caveat

The paper evaluates web-task and math agents across two frameworks. Progress and faithfulness involve model judges. Replay requires state that ordinary logs may not preserve. Multiple different interventions can repair one failure, so a successful repair need not identify a unique root cause.
