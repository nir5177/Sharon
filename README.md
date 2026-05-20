# Architect — nir5177 engineering hub

Single source of truth for engineering practices, project registry, and
agent coordination across all nir5177 repos.

## What lives here

| File | Purpose |
|---|---|
| `MASTER_GUIDELINES.md` | Universal rules — apply to every repo |
| `PROJECT_REGISTRY.md` | List of all active projects, status, stack |
| `AGENT_PROTOCOL.md` | How Claude sub-agents coordinate work |
| `CLAUDE.md` | Loaded automatically when a Claude Code session opens this repo |
| `templates/` | Starter `CLAUDE.md` files for new project stacks |
| `.claude/commands/` | Slash commands: `/new-project`, `/audit-all`, etc. |

## How to use this

**To do architect work (planning, coordination, decisions):**
Open Claude Code on this repo (`nir5177/architect`).

**To do implementation work on a project:**
Open Claude Code on the project repo (e.g. `nir5177/chabad-pushcoins`).
That session is a *code agent* — it follows orders from the architect.

The architect session does not write production code directly.
It defines tasks and reviews results.

## Adding a new project

In an architect session, type `/new-project` and answer the questions.
The architect will scaffold the new repo's `CLAUDE.md` from `templates/`,
add it to `PROJECT_REGISTRY.md`, and instruct you on the next steps.
