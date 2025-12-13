import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, icon, actions, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 text-center", className)}>
      {icon && <div className="mb-4 text-slate-400">{icon}</div>}
      <h3 className="text-lg font-medium text-slate-900 dark:text-slate-50">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      )}
      {actions && <div className="mt-4">{actions}</div>}
    </div>
  );
}