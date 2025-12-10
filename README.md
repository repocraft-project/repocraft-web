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

All data is currently in `src/data/mock.ts`. Replace with real API calls when backend is ready.

## Path aliases
- `@/*` -> `src/*` (see `tsconfig.app.json`, `vite.config.ts`).

## Theming
Simple light/dark toggle stored in `localStorage` (`repocraft-theme`).
