import { Link } from "react-router-dom";
import { Plus, GitBranch, GitPullRequest, MessageCircle, Rocket } from "lucide-react";
import { OrganizationCard } from "@/features/organizations/components/OrganizationCard";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { activities, orgs, repos, users } from "@/data/mock";

export default function HomePage() {
  const currentUser = users.find((u) => u.username === "alice");
  const myRepos = repos.filter((r) => currentUser?.repos.includes(r.id)).slice(0, 5);
  const trending = repos.slice(0, 3);
  const featuredOrg = orgs[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)_280px] items-stretch">
      <section
        className="space-y-3 bg-white p-4"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">Top repositories</div>
          <Button size="sm" className="px-2 py-1 text-xs">
            <Plus size={14} />
            New
          </Button>
        </div>
        <div className="space-y-2 text-sm">
          {myRepos.map((repo) => (
            <div
              key={repo.id}
              className="flex items-center justify-between border-b border-slate-200 pb-2 last:border-b-0 last:pb-0"
            >
              <Link
                to={`/repos/${repo.owner}/${repo.name}`}
                className="font-medium text-slate-900 hover:underline"
              >
                {repo.owner}/{repo.name}
              </Link>
              <span className="text-xs text-slate-500">{repo.stars} ★</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 max-w-4xl w-full mx-auto mt-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Trending repositories</span>
          <Link to="/repos" className="text-slate-600 no-underline hover:no-underline">
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {trending.map((repo) => (
            <Card key={repo.id}>
              <div className="flex items-center justify-between text-sm">
                <Link to={`/repos/${repo.owner}/${repo.name}`} className="font-semibold text-slate-900 no-underline hover:no-underline">
                  {repo.owner}/{repo.name}
                </Link>
                <span className="text-xs text-slate-500">{repo.stars} ★</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{repo.description}</p>
              <div className="mt-2 text-xs text-slate-500">Updated {new Date(repo.updatedAt).toLocaleDateString()}</div>
            </Card>
          ))}
        </div>

        {featuredOrg ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Featured organization</span>
              <Link to="/orgs" className="text-slate-600 no-underline hover:no-underline">
                View all
              </Link>
            </div>
            <div className="mt-1 grid-gap">
              <OrganizationCard org={featuredOrg} />
            </div>
          </div>
        ) : null}
      </section>

      <section
        className="space-y-3 bg-white p-4"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="text-sm font-semibold text-slate-900">Recent activities</div>
        <div className="space-y-3 text-sm">
          {activities.slice(0, 6).map((item) => {
            const iconMap = {
              push: <GitBranch size={14} className="text-emerald-500" />,
              pr: <GitPullRequest size={14} className="text-sky-500" />,
              issue: <MessageCircle size={14} className="text-amber-500" />,
              release: <Rocket size={14} className="text-purple-500" />,
            } as const;
            return (
              <div
                key={item.id}
                className="flex items-start gap-2 border-b border-slate-200 pb-2 last:border-b-0 last:pb-0"
              >
                <div className="mt-0.5">{iconMap[item.type]}</div>
                <div>
                  <div className="font-medium text-slate-900">{item.title}</div>
                  <div className="text-xs text-slate-500">
                    {item.actor} on {item.repoId} · {new Date(item.time).toLocaleDateString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
