import { Link } from "react-router-dom";
import type { Repo } from "@/types";
import { cn } from "@/utils/utils";

interface RepositoryCardCompactProps {
  repo: Repo;
  className?: string;
}

export function RepositoryCardCompact({ repo, className }: RepositoryCardCompactProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between text-sm">
        <Link to={`/repos/${repo.owner}/${repo.name}`} className="font-semibold text-slate-900 no-underline hover:no-underline">
          {repo.owner}/{repo.name}
        </Link>
        <span className="text-xs text-slate-500">{repo.stars} ★</span>
      </div>
      <p className="mt-1 text-sm text-slate-600">{repo.description}</p>
      <div className="mt-2 text-xs text-slate-500">Updated {new Date(repo.updatedAt).toLocaleDateString()}</div>
    </div>
  );
}