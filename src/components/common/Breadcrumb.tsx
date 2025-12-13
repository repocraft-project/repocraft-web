import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface BreadcrumbProps {
  children: ReactNode;
  className?: string;
}

export function Breadcrumb({ children, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center space-x-1 text-sm text-slate-600", className)}>
      {children}
    </nav>
  );
}

interface BreadcrumbItemProps {
  children: ReactNode;
  isLast?: boolean;
  className?: string;
}

export function BreadcrumbItem({ children, isLast = false, className }: BreadcrumbItemProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {children}
      {!isLast && (
        <span className="mx-1 text-slate-400">
          /
        </span>
      )}
    </div>
  );
}