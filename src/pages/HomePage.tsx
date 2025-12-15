import { Plus } from "lucide-react";
import { ActivityItem } from "@/features/activities";
import { OrganizationCard } from "@/features/organizations";
import { RepositoryCardCompact, RepositoryList } from "@/features/repositories";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { NavLink } from "@/components/common/NavLink";
import { Grid } from "@/components/common/Grid";
import { Section } from "@/components/layout/Section";
import { Sidebar } from "@/components/layout/Sidebar";
import { MainContent } from "@/components/layout/MainContent";
import { ThreeColumnLayout } from "@/components/layout/ThreeColumnLayout";
import { activities, orgs, repos, users } from "@/data/mock";

export default function HomePage() {
  const currentUser = users.find((u) => u.username === "alice");
  const myRepos = repos.filter((r) => currentUser?.repos.includes(r.id)).slice(0, 5);
  const trending = repos.slice(0, 3);
  const featuredOrg = orgs[0];

  return (
    <ThreeColumnLayout
      left={
        <Sidebar height="calc(100vh - 64px)">
          <Section
            title="Top repositories"
            actions={
              <Button size="sm" className="px-2 py-1 text-xs">
                <Plus size={14} />
                New
              </Button>
            }
          >
            <RepositoryList repositories={myRepos} />
          </Section>
        </Sidebar>
      }
      center={
        <MainContent className="max-w-4xl w-full mx-auto mt-4">
          <Section
            title="Trending repositories"
            actions={<NavLink to="/repos">View all</NavLink>}
          >
            {trending.map((repo) => (
              <Card key={repo.id}>
                <RepositoryCardCompact repo={repo} />
              </Card>
            ))}
          </Section>

          {featuredOrg ? (
            <Section
              title="Featured organization"
              actions={<NavLink to="/orgs">View all</NavLink>}
            >
              <Grid className="mt-1">
                <OrganizationCard org={featuredOrg} />
              </Grid>
            </Section>
          ) : null}
        </MainContent>
      }
      right={
        <Sidebar height="calc(100vh - 64px)">
          <Section>
            <Section title="Recent activities">
              {activities.slice(0, 6).map((item) => (
                <ActivityItem key={item.id} activity={item} />
              ))}
            </Section>
          </Section>
        </Sidebar>
      }
    />
  );
}
