import { useMemo, useState } from "react";
import { RepositoryCard } from "@/features/repositories/components/RepositoryCard";
import { Card } from "@/components/common/Card";
import { SearchBox } from "@/components/common/SearchBox";
import { Grid } from "@/components/common/Grid";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageLayout } from "@/components/layout/PageLayout";
import { repos } from "@/data/mock";

export default function RepositoriesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return repos.filter((repo) => {
      const haystack = `${repo.owner}/${repo.name} ${repo.description}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <PageLayout>
      <PageHeader 
        title="Repositories" 
        subtitle="Explore all repositories in this workspace."
      />

      <Card>
        <SearchBox
          value={query}
          onChange={setQuery}
          placeholder="Search repositories..."
        />
      </Card>

      <Grid mdCols={2}>
        {filtered.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </Grid>
    </PageLayout>
  );
}
