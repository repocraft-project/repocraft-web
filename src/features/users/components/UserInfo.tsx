import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { cn } from "@/utils/utils";

interface UserInfoProps {
  name: string;
  username: string;
  title?: string;
  bio?: string;
  avatar?: ReactNode;
  stats?: Array<{ label: string; value: string | number }>;
  organizations?: Array<{ name: string; handle: string }>;
  className?: string;
}

export function UserInfo({ 
  name, 
  username, 
  title, 
  bio, 
  avatar, 
  stats, 
  organizations,
  className 
}: UserInfoProps) {
  return (
    <div className={cn("card p-5", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {avatar}
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">User</p>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{name}</h1>
            <p className="text-sky-600">@{username}</p>
            {title && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{title}</p>}
            {bio && <p className="muted mt-1 text-sm">{bio}</p>}
          </div>
        </div>
        {stats && stats.length > 0 && (
          <div className="text-right text-sm text-slate-500 dark:text-slate-400">
            {stats.map((stat, index) => (
              <div key={index}>{stat.value} {stat.label}</div>
            ))}
          </div>
        )}
      </div>
      {organizations && organizations.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Users size={12} />
          Member of
          {organizations.map((org) => (
            <Link key={org.handle} to={`/orgs/${org.handle}`} className="text-sky-600 dark:text-sky-400">
              {org.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}