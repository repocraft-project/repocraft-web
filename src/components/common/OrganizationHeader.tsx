import { Users } from "lucide-react";
import { cn } from "@/utils/utils";

interface OrganizationHeaderProps {
  name: string;
  description: string;
  className?: string;
}

export function OrganizationHeader({ name, description, className }: OrganizationHeaderProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700 dark:bg-sky-500/10 dark:text-sky-100">
        <Users size={20} />
      </div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Organization</p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{name}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
}