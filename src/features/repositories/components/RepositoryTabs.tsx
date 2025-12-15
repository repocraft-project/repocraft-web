import { BookOpen, FileText, GitPullRequest } from "lucide-react";
import { TabNavigation, TabItem } from "@/components/common/TabNavigation";
import type { Repo } from "@/types";

interface RepositoryTabsProps {
  repo: Repo;
  className?: string;
}

export function RepositoryTabs({ repo, className }: RepositoryTabsProps) {
  return (
    <TabNavigation className={className}>
      <TabItem isActive icon={<FileText size={14} />}>
        Code
      </TabItem>
      <TabItem badge={repo.issues} icon={<BookOpen size={14} />}>
        Issues
      </TabItem>
      <TabItem badge={repo.pulls} icon={<GitPullRequest size={14} />}>
        Pull requests
      </TabItem>
      <TabItem isDisabled>Actions</TabItem>
      <TabItem isDisabled>Projects</TabItem>
      <TabItem isDisabled>Wiki</TabItem>
    </TabNavigation>
  );
}
