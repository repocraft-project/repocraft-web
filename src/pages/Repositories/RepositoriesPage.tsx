import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { RepositoryCard } from "@/features/repositories/components/RepositoryCard";
import { Card } from "@/components/common/Card";
import { repos } from "@/data/mock";
import { cn } from "@/utils/utils";

export default function RepositoriesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return repos.filter((repo) => {
      const haystack = `${repo.owner}/${repo.name} ${repo.description}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <div className="grid-gap">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Repositories</h1>
          <p className="muted">Explore all repositories in this workspace.</p>
        </div>
      </div>

      <Card>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search repositories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={cn(
              "w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-900 shadow-sm",
              "focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100",
              "dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-sky-900/50",
            )}
          />
        </div>
      </Card>

      <div className="grid-gap md:grid-cols-2">
        {filtered.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
