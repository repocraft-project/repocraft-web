export type Repo = {
  id: string; // owner/name
  owner: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  issues: number;
  pulls: number;
  updatedAt: string;
  defaultBranch: string;
  visibility: "public" | "private";
  license?: string;
  topics: string[];
  lastCommitMessage: string;
  files: RepoFile[];
  readme: string;
};

export type RepoFile = {
  name: string;
  path: string;
  type: "file" | "dir";
  message: string;
  author: string;
  commits: number;
  updatedAt: string;
};

export type Organization = {
  handle: string;
  name: string;
  description: string;
  repos: string[]; // repo ids
  members: string[]; // usernames
  createdAt: string;
};

export type User = {
  username: string;
  name: string;
  title: string;
  bio?: string;
  location?: string;
  email?: string;
  orgs: string[];
  repos: string[];
};

export type ActivityType = "push" | "pr" | "issue" | "release";

export type Activity = {
  id: string;
  type: ActivityType;
  actor: string;
  repoId: string;
  title: string;
  time: string;
};
