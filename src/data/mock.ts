import type { Activity, Organization, Repo, User } from "@/types";

export const repos: Repo[] = [
  {
    id: "repocraft/repocraft",
    owner: "repocraft",
    name: "repocraft",
    description: "SSH-first Git hosting platform with Go backend and React web UI.",
    language: "Go",
    stars: 128,
    forks: 19,
    issues: 4,
    pulls: 2,
    updatedAt: "2025-02-01T10:00:00Z",
    defaultBranch: "main",
    visibility: "public",
    license: "Apache-2.0",
    topics: ["git", "ssh", "self-hosted", "devops"],
    lastCommitMessage: "feat: add repository provisioning service",
    files: [
      {
        name: "cmd",
        path: "cmd",
        type: "dir",
        message: "chore: split ssh/http demos",
        author: "bob",
        commits: 42,
        updatedAt: "2025-01-30T09:00:00Z",
      },
      {
        name: "internal",
        path: "internal",
        type: "dir",
        message: "feat: add git service executor",
        author: "alice",
        commits: 37,
        updatedAt: "2025-01-28T09:00:00Z",
      },
      {
        name: "go.mod",
        path: "go.mod",
        type: "file",
        message: "build: bump gliderlabs/ssh",
        author: "alice",
        commits: 12,
        updatedAt: "2025-01-25T09:00:00Z",
      },
      {
        name: "README.md",
        path: "README.md",
        type: "file",
        message: "docs: update demo instructions",
        author: "bob",
        commits: 8,
        updatedAt: "2025-01-24T09:00:00Z",
      },
    ],
    readme: `# Repocraft Server Go

SSH-first Git hosting server demo built with Go, gliderlabs/ssh, and git-upload/receive-pack. See \`cmd/gitsshd\` and \`cmd/githttpd\` for demos.

## Quick start
- \`go run ./cmd/gitsshd\` to serve SSH on :2222
- \`go run ./cmd/githttpd\` to serve Smart HTTP on :8080
- place bare repositories under \`./.repositories\`
`,
  },
  {
    id: "repocraft/web",
    owner: "repocraft",
    name: "web",
    description: "Repocraft React frontend, GitHub-inspired UI.",
    language: "TypeScript",
    stars: 42,
    forks: 6,
    issues: 1,
    pulls: 1,
    updatedAt: "2025-02-03T08:30:00Z",
    defaultBranch: "main",
    visibility: "public",
    license: "Apache-2.0",
    topics: ["react", "vite", "frontend"],
    lastCommitMessage: "chore: add mock data and routing",
    files: [
      {
        name: "src",
        path: "src",
        type: "dir",
        message: "feat: add dashboard pages",
        author: "alice",
        commits: 24,
        updatedAt: "2025-02-03T08:30:00Z",
      },
      {
        name: "package.json",
        path: "package.json",
        type: "file",
        message: "chore: add query/zustand deps",
        author: "alice",
        commits: 10,
        updatedAt: "2025-02-03T08:00:00Z",
      },
      {
        name: "README.md",
        path: "README.md",
        type: "file",
        message: "docs: scaffold description",
        author: "bob",
        commits: 5,
        updatedAt: "2025-02-02T09:00:00Z",
      },
    ],
    readme: `# Repocraft Web

React + TypeScript + Vite frontend for Repocraft with GitHub-inspired UI and SSH-first messaging.

## Features
- Dashboard, repo list/detail, orgs, user profile
- Mock data ready to replace with API calls
- Tailwind styling with light/dark modes
`,
  },
  {
    id: "alice/infra-scripts",
    owner: "alice",
    name: "infra-scripts",
    description: "Helper scripts for Repocraft demo environment.",
    language: "Shell",
    stars: 8,
    forks: 2,
    issues: 0,
    pulls: 0,
    updatedAt: "2025-01-28T15:45:00Z",
    defaultBranch: "main",
    visibility: "private",
    topics: ["infra", "ops"],
    lastCommitMessage: "fix: tweak docker-compose volume mounts",
    files: [
      {
        name: "docker-compose.yaml",
        path: "docker-compose.yaml",
        type: "file",
        message: "fix: adjust volumes",
        author: "alice",
        commits: 6,
        updatedAt: "2025-01-28T15:45:00Z",
      },
      {
        name: "README.md",
        path: "README.md",
        type: "file",
        message: "docs: add usage",
        author: "alice",
        commits: 4,
        updatedAt: "2025-01-27T15:45:00Z",
      },
    ],
    readme:
      "# Infra scripts\\n\\nHelper scripts to bootstrap Repocraft demo env (Postgres, Redis, SSH keys, repo volumes).",
  },
];

export const orgs: Organization[] = [
  {
    handle: "repocraft",
    name: "Repocraft",
    description: "Lightweight Git hosting focused on SSH-first experience.",
    repos: ["repocraft/repocraft", "repocraft/web"],
    members: ["alice", "bob"],
    createdAt: "2024-12-01T00:00:00Z",
  },
];

export const users: User[] = [
  {
    username: "alice",
    name: "Alice Chen",
    title: "Founding Engineer",
    bio: "Building Repocraft. Loves distributed systems and DX.",
    location: "Shanghai, CN",
    email: "alice@example.com",
    orgs: ["repocraft"],
    repos: ["repocraft/repocraft", "repocraft/web", "alice/infra-scripts"],
  },
  {
    username: "bob",
    name: "Bob Li",
    title: "Backend Engineer",
    bio: "Go + Postgres + Redis. Git protocol nerd.",
    location: "Beijing, CN",
    email: "bob@example.com",
    orgs: ["repocraft"],
    repos: ["repocraft/repocraft"],
  },
];

export const activities: Activity[] = [
  {
    id: "act-1",
    type: "push",
    actor: "alice",
    repoId: "repocraft/web",
    title: "alice pushed 3 commits to repocraft/web",
    time: "2025-02-03T08:30:00Z",
  },
  {
    id: "act-2",
    type: "pr",
    actor: "bob",
    repoId: "repocraft/repocraft",
    title: "bob opened PR #12: add repository provisioning service",
    time: "2025-02-01T10:00:00Z",
  },
  {
    id: "act-3",
    type: "issue",
    actor: "alice",
    repoId: "repocraft/repocraft",
    title: "alice filed issue #34: SSH key rotation policy",
    time: "2025-01-30T12:15:00Z",
  },
  {
    id: "act-4",
    type: "release",
    actor: "alice",
    repoId: "repocraft/repocraft",
    title: "alice drafted release v0.1.0",
    time: "2025-01-25T09:00:00Z",
  },
];
