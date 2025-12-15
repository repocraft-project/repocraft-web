import { BookOpen, GitFork, GitPullRequest, Shield, Star } from "lucide-react";
import { Card, CardHeader } from "@/components/common/Card";
import { TagList } from "@/components/common/TagList";
import { StatsGrid } from "@/components/common/StatsGrid";
import { MetaInfo } from "@/components/common/MetaInfo";
import { formatRelativeTime } from "@/utils/time";
import type { Repo } from "@/types";

interface RepositoryAboutProps {
  repo: Repo;
  className?: string;
}

export function RepositoryAbout({ repo, className }: RepositoryAboutProps) {
  const stats = [
    { label: "License", value: repo.license ?? "TBD", icon: <Shield size={16} /> },
    { label: "Default branch", value: repo.defaultBranch, icon: <BookOpen size={16} /> },
    { label: "Stars", value: repo.stars, icon: <Star size={16} /> },
    { label: "Forks", value: repo.forks, icon: <GitFork size={16} /> },
    { label: "Open PRs", value: repo.pulls, icon: <GitPullRequest size={16} /> },
  ];

  return (
    <Card className={className}>
      <CardHeader title="About" />
      <p className="text-sm text-slate-700 dark:text-slate-200">{repo.description}</p>
      {repo.topics.length ? (
        <div className="mt-3">
          <TagList tags={repo.topics} />
        </div>
      ) : null}
      <div className="mt-3">
        <StatsGrid stats={stats} />
      </div>
      <MetaInfo className="mt-3">
        Last updated {formatRelativeTime(repo.updatedAt)}
      </MetaInfo>
    </Card>
  );
}
