import { GitFork, Star } from "lucide-react";
import { Button } from "@/components/common/Button";
import type { Repo } from "@/types";

interface RepositoryActionsProps {
  repo: Repo;
  className?: string;
}

export function RepositoryActions({ repo, className }: RepositoryActionsProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Button size="sm" variant="secondary">
        <Star size={14} />
        Star
        <span className="rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {repo.stars}
        </span>
      </Button>
      <Button size="sm" variant="secondary">
        <GitFork size={14} />
        Fork
        <span className="rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {repo.forks}
        </span>
      </Button>
    </div>
  );
}
