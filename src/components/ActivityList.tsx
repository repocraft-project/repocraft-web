import type { JSX } from "react";
import { GitBranch, GitPullRequest, MessageCircle, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import type { Activity } from "../types";
import { formatRelativeTime } from "../lib/time";
import { Card, CardHeader } from "./ui/Card";

const iconMap: Record<Activity["type"], JSX.Element> = {
  push: <GitBranch size={16} className="text-emerald-500" />,
  pr: <GitPullRequest size={16} className="text-sky-500" />,
  issue: <MessageCircle size={16} className="text-amber-500" />,
  release: <Rocket size={16} className="text-purple-500" />,
};

export function ActivityList({ title, activities }: { title: string; activities: Activity[] }) {
  return (
    <Card>
      <CardHeader title={title} subtitle="Recent events" />
      <div className="space-y-3">
        {activities.map((item) => (
          <div key={item.id} className="flex items-start gap-3 text-sm">
            <div className="mt-0.5">{iconMap[item.type]}</div>
            <div>
              <div className="font-medium text-slate-900 dark:text-slate-50">{item.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <Link to={`/users/${item.actor}`} className="text-sky-600 dark:text-sky-400">
                  {item.actor}
                </Link>{" "}
                on{" "}
                <Link to={`/repos/${item.repoId}`} className="text-sky-600 dark:text-sky-400">
                  {item.repoId}
                </Link>
                <span className="ml-2">{formatRelativeTime(item.time)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
