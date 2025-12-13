import { Plus, Settings } from "lucide-react";
import { RepositoryCard } from "@/features/repositories/components/RepositoryCard";
import { ActivityList } from "@/features/activities/components/ActivityList";
import { Card, CardGrid, CardHeader } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { NavLink } from "@/components/common/NavLink";
import { Grid } from "@/components/common/Grid";
import { Flex } from "@/components/common/Flex";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageLayout } from "@/components/layout/PageLayout";
import { activities, repos, users } from "@/data/mock";

export default function DashboardPage() {
  const currentUser = users.find((u) => u.username === "alice");
  const myRepos = repos.filter((r) => currentUser?.repos.includes(r.id));

  return (
    <PageLayout>
      <PageHeader 
        title="Dashboard" 
        subtitle="Overview of your repositories and activity."
        actions={
          <>
            <Button variant="secondary" size="sm">
              <Settings size={16} />
              Settings
            </Button>
            <Button size="sm">
              <Plus size={16} />
              New repository
            </Button>
          </>
        }
      />

      <CardGrid>
        <Card>
          <CardHeader title="Your repositories" subtitle="Quick access to projects" />
          <Grid>
            {myRepos.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </Grid>
          <Flex className="mt-4 text-right text-sm" justify="end">
            <NavLink to="/repos" variant="primary">
              View all repositories
            </NavLink>
          </Flex>
        </Card>
        <ActivityList title="Recent activity" activities={activities.slice(0, 4)} />
      </CardGrid>
    </PageLayout>
  );
}
