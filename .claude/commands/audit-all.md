# Audit All Projects

Run a status audit across every project in `PROJECT_REGISTRY.md`.

For each entry:
1. Check if the repo's GitHub Actions are passing (via web search or GitHub MCP)
2. Check the latest commit date
3. Verify the project's `CLAUDE.md` exists and references this architect repo
4. Note any stale or abandoned projects

Output format:
```
Project          Status      Last Activity    Issues
─────────────────────────────────────────────────────
Sharon           ✅ Active   2 days ago       None
chabad-pushcoins 🔨 Building 1 hour ago       Awaiting assets
```

Update `PROJECT_REGISTRY.md` with anything that changed.
