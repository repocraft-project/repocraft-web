import { Link, useParams } from "react-router-dom";
import { Users } from "lucide-react";
import { Card, CardHeader } from "@/components/common/Card";
import { orgs, repos, users } from "@/data/mock";
import { RepoCard } from "@/features/repositories/components/RepoCard";
import { UserCard } from "@/features/users/components/UserCard";

export default function OrganizationDetailPage() {
  const { handle } = useParams();
  const org = orgs.find((o) => o.handle === handle);

  if (!org) {
    return <p>Organization not found.</p>;
  }

  const orgRepos = repos.filter((r) => org.repos.includes(r.id));
  const orgMembers = users.filter((u) => org.members.includes(u.username));

  return (
    <div className="grid-gap">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700 dark:bg-sky-500/10 dark:text-sky-100">
          <Users size={20} />
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Organization</p>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{org.name}</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">{org.description}</p>
        </div>
      </div>

      <Card>
        <CardHeader
          title="Repositories"
          subtitle={`${orgRepos.length} repos`}
          action={
            <Link to="/repos" className="text-sm text-sky-600 dark:text-sky-400">
              View all
            </Link>
          }
        />
        <div className="grid-gap md:grid-cols-2">
          {orgRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </Card>

      <Card>
        <CardHeader title="Members" subtitle={`${orgMembers.length} people`} />
        <div className="grid-gap md:grid-cols-2">
          {orgMembers.map((member) => (
            <UserCard key={member.username} user={member} />
          ))}
        </div>
      </Card>
    </div>
  );
}
