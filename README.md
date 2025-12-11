# Repocraft Web

React + TypeScript + Vite frontend for the Repocraft SSH-first Git hosting platform. This scaffold includes a GitHub-inspired UI shell, mock data for repos/orgs/users, and basic pages to demo navigation.

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS 3, Lucide icons
- React Router 7
- TanStack Query (ready for API wiring)
- Zustand for local UI state (not yet used)
- React Hook Form + Zod (ready for forms)
- ESLint + Prettier, Vitest + Testing Library

## Project structure
- `src/main.tsx` → mounts `src/app/App.tsx` (ecosystem/providers + shell)
- `src/app/providers/` → provider composition (`EcosystemProvider` wraps query/theme/etc.)
- `src/routes/` → route definitions importing from `src/pages`
- `src/pages/` → route-level containers (UI only) with optional page-specific components/styles/tests
- `src/features/<domain>/` → domain modules (e.g., repositories, organizations) with `components/` (and optional hooks/services/types)
- `src/components/` → shared UI (`components/common`) and layout chrome (`components/layout`)
- `src/atoms/`, `src/ecosystem/` → centralized state and ecosystem plumbing
- `src/services/`, `src/schemas/`, `src/types/` → centralized API services, validation schemas, and TypeScript contracts
- `src/utils/` → shared utilities; `src/hooks/` → shared hooks; `src/data/` → mock data; `src/assets/` → static assets
- `src/styles/` → global/tailwind styles

## Commands
```bash
npm install         # install deps
npm run dev         # start dev server
npm run build       # type-check + production build
npm run lint        # lint with eslint
npm test            # run vitest
```

## Mock data / pages
- Home: intro + highlights
- Dashboard: your repos + recent activity
- Repositories: searchable list
- Repository detail: meta, topics, clone URLs, activity
- Organizations + detail: org info, members, repos
- User profile: bio + repos

All data is currently in `src/data/mock.ts`; route pages live under `src/pages/*`. Replace with real API calls when backend is ready.

## Path aliases
- `@/*` -> `src/*` (see `tsconfig.app.json`, `vite.config.ts`).

## Theming
Simple light/dark toggle stored in `localStorage` (`repocraft-theme`).
