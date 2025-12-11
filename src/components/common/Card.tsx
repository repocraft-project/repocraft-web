import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("card p-4 sm:p-5", className)}>{children}</div>;
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
        {subtitle ? <p className="muted text-sm">{subtitle}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="grid-gap md:grid-cols-2">{children}</div>;
}
