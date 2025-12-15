import { Link } from "react-router-dom";
import type { Repo } from "@/types";

interface RepositoryLinkProps {
  repo: Repo;
  className?: string;
}

export function RepositoryLink({ repo, className }: RepositoryLinkProps) {
  return (
    <Link
      to={`/repos/${repo.owner}/${repo.name}`}
      className={`font-medium text-slate-900 hover:underline ${className || ""}`}
    >
      {repo.owner}/{repo.name}
    </Link>
  );
}