# [PROJECT NAME] — API / Backend

Master guidelines: https://github.com/nir5177/architect

## Stack
- Node.js + TypeScript
- Serverless platform: [Vercel / Firebase / Supabase / other]
- Database: [Firestore / Supabase Postgres / other]

## What this API does
[One paragraph — purpose, consumers, key endpoints]

## Hard rules (additions to master)
- All endpoints authenticated unless explicitly marked `/public/`
- No raw SQL — use the ORM with migrations
- All env secrets in platform secrets manager, never in repo
- Rate limiting on every public endpoint
- Structured logging with request IDs

## Endpoint conventions
- REST: `/api/v1/resource`
- Errors: `{ "error": { "code": "STRING", "message": "human" } }`
- Success: `{ "data": ... }`
- HTTP status codes used correctly (no 200 with error inside)

## Testing
- Unit tests for all business logic
- Integration tests for every endpoint
- CI runs both on every PR
