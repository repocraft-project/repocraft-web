import { useParams } from "react-router-dom";
import { Card, CardHeader } from "@/components/common/Card";
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

      <Card>
        <CardHeader
          title="Repositories"
          subtitle={`${orgRepos.length} repos`}
          action={
            <NavLink to="/repos" variant="primary">
              View all
            </NavLink>
          }
        />
        <Grid mdCols={2}>
          {orgRepos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </Grid>
      </Card>

      <Card>
        <CardHeader title="Members" subtitle={`${orgMembers.length} people`} />
        <Grid mdCols={2}>
          {orgMembers.map((member) => (
            <UserCard key={member.username} user={member} />
          ))}
        </Grid>
      </Card>
    </PageLayout>
  );
}
