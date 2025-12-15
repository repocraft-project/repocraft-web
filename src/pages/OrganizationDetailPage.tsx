import { useParams } from "react-router-dom";
import { NavLink } from "@/components/common/NavLink";
import { Grid } from "@/components/common/Grid";
import { Text } from "@/components/common/Text";
import { PageLayout } from "@/components/layout/PageLayout";
import { OrganizationHeader } from "@/features/organizations";
import { RepositoryCard } from "@/features/repositories";
import { UserCard } from "@/features/users";
import { orgs, repos, users } from "@/data/mock";

export default function OrganizationDetailPage() {
  const { handle } = useParams();
  const org = orgs.find((o) => o.handle === handle);

  if (!org) {
    return <Text>Organization not found.</Text>;
  }

  const orgRepos = repos.filter((r) => org.repos.includes(r.id));
  const orgMembers = users.filter((u) => org.members.includes(u.username));

  return (
    <PageLayout>
      <OrganizationHeader 
        name={org.name}
        description={org.description}
      />

      <section className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Repositories</h2>
            <p className="muted text-sm">{orgRepos.length} repos</p>
          </div>
          <NavLink to="/repos" variant="primary">
            View all
          </NavLink>
        </div>
        <Grid mdCols={2}>
          {orgRepos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </Grid>
      </section>

      <section className="space-y-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Members</h2>
          <p className="muted text-sm">{orgMembers.length} people</p>
        </div>
        <Grid mdCols={2}>
          {orgMembers.map((member) => (
            <UserCard key={member.username} user={member} />
          ))}
        </Grid>
      </section>
    </PageLayout>
  );
}
