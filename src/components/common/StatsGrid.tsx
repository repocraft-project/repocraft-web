import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface StatItemProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  className?: string;
}

function StatItem({ label, value, icon, className }: StatItemProps) {
  return (
    <div className={cn("flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300", className)}>
      {icon}
      <span>{label}: {value}</span>
    </div>
  );
}

interface StatsGridProps {
  stats: Array<{
    label: string;
    value: string | number;
    icon?: ReactNode;
  }>;
  className?: string;
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={cn("space-y-2 text-sm text-slate-600 dark:text-slate-300", className)}>
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}