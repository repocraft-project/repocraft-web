import type { ReactNode } from "react";
import { Badge } from "@/components/common/Badge";
import { cn } from "@/utils/utils";

interface RepositoryHeaderProps {
  owner: string;
  name: string;
  visibility: "public" | "private";
  actions?: ReactNode;
  className?: string;
}

export function RepositoryHeader({ owner, name, visibility, actions, className }: RepositoryHeaderProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-3 pb-2", className)}>
      <div className="flex flex-col">
        <span className="text-xs tracking-wide text-slate-500 dark:text-slate-400">Repository</span>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            {owner}/<span className="text-slate-900 dark:text-slate-50">{name}</span>
          </h1>
          <Badge color={visibility === "public" ? "green" : "orange"} className="capitalize px-2 py-0.5">
            {visibility}
          </Badge>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {actions}
      </div>
    </div>
  );
}
