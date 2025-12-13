import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface MetaInfoProps {
  children: ReactNode;
  className?: string;
}

export function MetaInfo({ children, className }: MetaInfoProps) {
  return (
    <div className={cn("text-xs text-slate-500 dark:text-slate-400", className)}>
      {children}
    </div>
  );
}

interface MetaItemProps {
  children: ReactNode;
  className?: string;
}

export function MetaItem({ children, className }: MetaItemProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}