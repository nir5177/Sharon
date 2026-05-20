# Agent Protocol
# How the Architect spawns and coordinates sub-agents

---

## Spawning a Code Agent

When you need implementation work on a repo:

1. Open new Claude Code session → select target repo
2. First message must include:
   - Reference to this architect system:
     "You are a code agent. Read CLAUDE.md. The architect system is at
      nir5177/Sharon/.claude/architect/"
   - The specific task (from architect's task definition)
   - Input/output specification
   - Constraints from CLAUDE.md
   - "Do not make architectural decisions — report blockers to architect"

## Spawning an Explore Agent

For read-only audits before implementation:
- Use the /architect-review slash command in the target repo session
- Or ask: "Audit the current state of X and report gaps vs this spec: [spec]"
- The explore agent only reads and reports — never commits

## Spawning a Build Agent

For CI monitoring and APK delivery:
- Open session on the repo with the GitHub Actions workflow
- Task: "Monitor the current build. If it fails, diagnose and fix.
  Report the APK download URL when the build succeeds."

---

## Task Definition Template

When handing a task to a code agent, always specify:

```
TASK: [one-sentence description]
REPO: nir5177/[repo-name]
BRANCH: [branch name or "main"]

INPUT STATE:
- [what currently exists]
- [what's broken or missing]

OUTPUT REQUIRED:
- [exact deliverable — file, APK URL, commit hash, etc.]

CONSTRAINTS (from CLAUDE.md):
- [list the relevant rules]

DO NOT:
- [explicit prohibitions for this task]

REPORT BACK:
- When done: [what to tell the architect]
- If blocked: [what information the architect needs]
```

---

## Communication Rules

- Architect → Agent: structured task definition (above template)
- Agent → Architect: status + output or blocker description
- Agents never talk to each other directly — all coordination through architect
- If an agent is uncertain about scope: stop and ask architect, don't guess
