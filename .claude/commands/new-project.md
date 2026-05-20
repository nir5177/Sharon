# New Project Setup

When the user wants to start a new project, follow these steps exactly.

## Step 1 — Gather requirements
Ask the user:
1. Project name and purpose (one sentence)
2. Stack: website / mobile app / API / other
3. GitHub repo name (e.g. nir5177/project-name)
4. Audience: personal / community / public
5. Any known constraints (Hebrew? RTL? No external deps?)

## Step 2 — Add to PROJECT_REGISTRY.md
Open `.claude/architect/PROJECT_REGISTRY.md` and add a new entry
using the template at the bottom of that file.

## Step 3 — Write the repo's CLAUDE.md
Draft a CLAUDE.md for the new repo based on:
- Master guidelines from MASTER_GUIDELINES.md
- Stack defaults from the "Stack Defaults" section
- User's specific constraints from Step 1

Include at the top:
"Master guidelines: nir5177/Sharon/.claude/architect/MASTER_GUIDELINES.md"

## Step 4 — Set up GitHub Actions
Based on the stack, write a build workflow:
- Website → GitHub Pages deploy workflow
- Mobile app → EAS Build or local Gradle workflow
- API → test + deploy workflow

## Step 5 — Instruct the user
Tell the user:
1. Create the GitHub repo at github.com/new
2. Open a new Claude Code session scoped to that repo
3. Paste the generated CLAUDE.md as the first commit message context
4. The new session is the Code Agent — architect (this session) coordinates

## Step 6 — Report back
Update PROJECT_REGISTRY.md with "Last architect action: Initial setup"
