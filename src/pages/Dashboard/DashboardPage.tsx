import { Link } from "react-router-dom";
import { Plus, Settings } from "lucide-react";
import { RepoCard } from "@/features/repositories/components/RepoCard";
import { ActivityList } from "@/features/activities/components/ActivityList";
import { Card, CardGrid, CardHeader } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { activities, repos, users } from "@/data/mock";

export default function DashboardPage() {
  const currentUser = users.find((u) => u.username === "alice");
  const myRepos = repos.filter((r) => currentUser?.repos.includes(r.id));

  return (
    <div className="grid-gap">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Dashboard</h1>
          <p className="muted">Overview of your repositories and activity.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            <Settings size={16} />
            Settings
          </Button>
          <Button size="sm">
            <Plus size={16} />
            New repository
          </Button>
        </div>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="Your repositories" subtitle="Quick access to projects" />
          <div className="grid-gap">
            {myRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
          <div className="mt-4 text-right text-sm">
            <Link to="/repos" className="text-sky-600 dark:text-sky-400">
              View all repositories
            </Link>
          </div>
        </Card>
        <ActivityList title="Recent activity" activities={activities.slice(0, 4)} />
      </CardGrid>
    </div>
  );
}
