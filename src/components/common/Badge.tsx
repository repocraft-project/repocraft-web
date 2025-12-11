import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

type BadgeProps = {
  children: ReactNode;
  color?: "gray" | "blue" | "green" | "orange";
  className?: string;
};

const colorMap = {
  gray: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  blue: "bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-100",
  green: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100",
  orange: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-100",
};

export function Badge({ children, color = "gray", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        colorMap[color],
        className,
      )}
    >
      {children}
    </span>
  );
}
