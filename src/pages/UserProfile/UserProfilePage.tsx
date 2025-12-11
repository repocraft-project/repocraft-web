import { Link, useParams } from "react-router-dom";
import { Users } from "lucide-react";
import { Card, CardHeader } from "@/components/common/Card";
import { orgs, repos, users } from "@/data/mock";
import { RepoCard } from "@/features/repositories/components/RepoCard";

export default function UserProfilePage() {
  const { username } = useParams();
  const user = users.find((u) => u.username === username);

  if (!user) {
    return <p>User not found.</p>;
  }

  const userRepos = repos.filter((r) => user.repos.includes(r.id));
  const userOrgs = orgs.filter((o) => user.orgs.includes(o.handle));

  return (
    <div className="grid-gap">
      <div className="card p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">User</p>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{user.name}</h1>
            <p className="text-sky-600">@{user.username}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{user.title}</p>
            {user.bio ? <p className="muted mt-1 text-sm">{user.bio}</p> : null}
          </div>
          <div className="text-right text-sm text-slate-500 dark:text-slate-400">
            {user.repos.length} repos
          </div>
        </div>
        {userOrgs.length ? (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Users size={12} />
            Member of
            {userOrgs.map((org) => (
              <Link key={org.handle} to={`/orgs/${org.handle}`} className="text-sky-600 dark:text-sky-400">
                {org.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <Card>
        <CardHeader title="Repositories" subtitle={`${userRepos.length} projects`} />
        <div className="grid-gap md:grid-cols-2">
          {userRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </Card>
    </div>
  );
}
