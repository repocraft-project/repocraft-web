import type { Repo } from "@/types";
import { RepositoryLink } from "./RepositoryLink";
import { cn } from "@/utils/utils";

interface RepositoryListProps {
  repositories: Repo[];
  className?: string;
  showStars?: boolean;
}

export function RepositoryList({ repositories, className, showStars = true }: RepositoryListProps) {
  return (
    <div className={cn("space-y-2 text-sm", className)}>
      {repositories.map((repo) => (
        <div
          key={repo.id}
          className="flex items-center justify-between border-b border-slate-200 pb-2 last:border-b-0 last:pb-0"
        >
          <RepositoryLink repo={repo} />
          {showStars && (
            <span className="text-xs text-slate-500">{repo.stars} ★</span>
          )}
        </div>
      ))}
    </div>
  );
}