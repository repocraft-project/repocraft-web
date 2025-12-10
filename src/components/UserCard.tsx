import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import type { User } from "../types";
import { Card } from "./ui/Card";

export function UserCard({ user }: { user: User }) {
  return (
    <Link to={`/users/${user.username}`} className="hover:underline">
      <Card>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{user.name}</h3>
            <p className="text-sm text-sky-600">@{user.username}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{user.title}</p>
            {user.bio ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{user.bio}</p> : null}
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              {user.location ? (
                <span className="inline-flex items-center gap-1"><MapPin size={12} /> {user.location}</span>
              ) : null}
              {user.email ? (
                <span className="inline-flex items-center gap-1"><Mail size={12} /> {user.email}</span>
              ) : null}
            </div>
          </div>
          <div className="text-right text-xs text-slate-500 dark:text-slate-400">
            {user.repos.length} repos
          </div>
        </div>
      </Card>
    </Link>
  );
}
