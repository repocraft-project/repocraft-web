import { Link } from "react-router-dom";
import { GitCommit, GitFork, Globe, Lock, Star } from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { formatRelativeTime } from "@/utils/time";
import type { Repo } from "@/types";

export function RepositoryCard({ repo }: { repo: Repo }) {
  return (
    <Link to={`/repos/${repo.owner}/${repo.name}`} className="card block p-4 sm:p-5 hover:underline">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            {repo.owner}/<span className="text-sky-600">{repo.name}</span>
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{repo.description}</p>
        </div>
        <Badge color={repo.visibility === "public" ? "green" : "orange"}>
          {repo.visibility === "public" ? (
            <span className="inline-flex items-center gap-1"><Globe size={12} /> Public</span>
          ) : (
            <span className="inline-flex items-center gap-1"><Lock size={12} /> Private</span>
          )}
        </Badge>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
        <span className="inline-flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
          {repo.language}
        </span>
        <span className="inline-flex items-center gap-1"><Star size={14} /> {repo.stars}</span>
        <span className="inline-flex items-center gap-1"><GitFork size={14} /> {repo.forks}</span>
        <span className="inline-flex items-center gap-1"><GitCommit size={14} /> {repo.defaultBranch}</span>
        <span className="muted">Updated {formatRelativeTime(repo.updatedAt)}</span>
      </div>
      {repo.topics.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {repo.topics.map((topic) => (
            <Badge key={topic} color="gray" className="capitalize">
              {topic}
            </Badge>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
