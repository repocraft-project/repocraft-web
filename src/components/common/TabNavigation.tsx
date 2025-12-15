import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface TabNavigationProps {
  children: ReactNode;
  className?: string;
}

export function TabNavigation({ children, className }: TabNavigationProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 border-b border-slate-200 pb-2 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-200", className)}>
      {children}
    </div>
  );
}

interface TabItemProps {
  children: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
  badge?: string | number;
  icon?: ReactNode;
  className?: string;
}

export function TabItem({ children, isActive = false, isDisabled = false, badge, icon, className }: TabItemProps) {
  return (
    <span 
      className={cn(
        "flex items-center gap-2 border-b-2 pb-2",
        isActive 
          ? "border-sky-500 font-semibold text-slate-900 dark:text-slate-50" 
          : "border-transparent text-slate-500 dark:text-slate-400",
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {icon}
      <span>{children}</span>
      {badge && (
        <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {badge}
        </span>
      )}
    </span>
  );
}
