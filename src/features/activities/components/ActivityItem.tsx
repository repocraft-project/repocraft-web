import type { Activity } from "@/types";
import { GitBranch, GitPullRequest, MessageCircle, Rocket } from "lucide-react";

interface ActivityItemProps {
  activity: Activity;
  className?: string;
}

export function ActivityItem({ activity, className }: ActivityItemProps) {
  const iconMap = {
    push: <GitBranch size={14} className="text-emerald-500" />,
    pr: <GitPullRequest size={14} className="text-sky-500" />,
    issue: <MessageCircle size={14} className="text-amber-500" />,
    release: <Rocket size={14} className="text-purple-500" />,
  } as const;

  return (
    <div
      className={`flex items-start gap-2 border-b border-slate-200 pb-2 last:border-b-0 last:pb-0 ${className || ""}`}
    >
      <div className="mt-0.5">{iconMap[activity.type]}</div>
      <div>
        <div className="font-medium text-slate-900">{activity.title}</div>
        <div className="text-xs text-slate-500">
          {activity.actor} on {activity.repoId} · {new Date(activity.time).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}