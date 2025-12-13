import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface SectionProps {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
  className?: string;
}

export function Section({ children, title, actions, className }: SectionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {title || actions ? (
        <div className="flex items-center justify-between text-sm text-slate-600">
          {title && <span className="font-semibold text-slate-900">{title}</span>}
          {actions && <div>{actions}</div>}
        </div>
      ) : null}
      {children}
    </div>
  );
}