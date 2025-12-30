# BacklogForge

BacklogForge is a Product Owner copilot that connects to Jira and GitLab, imports issues, improves ticket quality, and prioritizes work with an explainable WSJF scoring model. The project uses Next.js 14 with the App Router, Prisma, PostgreSQL, and NextAuth.

## Tech stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS for styling
- Prisma ORM with PostgreSQL
- NextAuth with Google OAuth and email/password (Credentials) support
- Simple DB-backed job queue for sync tasks
- Vitest for unit tests

## Getting started
1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create a `.env` file**

   Copy `.env.example` and fill in values for your local environment:

   ```bash
   cp .env.example .env
   ```

3. **Set up the database**

   Ensure PostgreSQL is running and the `DATABASE_URL` is configured. Run migrations and seed data:

   ```bash
   npx prisma migrate dev --name init
   npm run prisma:seed
   ```

4. **Run the dev server**

   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:3000.

## Project structure
- `app/` – App Router routes for marketing and app surfaces (dashboard, backlog, ticket detail, prioritization, comparison) plus API routes.
- `components/` – Reusable UI pieces such as tables and score panels.
- `lib/` – Utilities, mock data, integration and AI provider stubs, Prisma client, WSJF helpers, and refinement schema.
- `prisma/` – Prisma schema and seed script.

## Tests
Run the lightweight unit tests for WSJF scoring and refinement pack validation:

```bash
npm test
```

## Integrations and AI
- Jira and GitLab integrations include stubbed OAuth connect routes and provider classes ready for API wiring.
- AI generation uses a fake provider that respects the refinement pack schema, with placeholders for OpenAI integration.

## Authentication
- Google OAuth via NextAuth.
- Credentials provider for email/password (passwords stored as bcrypt hashes). Database sessions are enabled for simplicity.

## Background jobs
A simple queue based on the `SyncJob` table supports enqueueing and processing sync work without external services.
