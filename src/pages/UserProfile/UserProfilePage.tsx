import { useParams } from "react-router-dom";
import { Card, CardHeader } from "@/components/common/Card";
import { Text } from "@/components/common/Text";
import { PageLayout } from "@/components/layout/PageLayout";
import { RepositoryCard } from "@/features/repositories/components/RepositoryCard";
import { UserInfo } from "@/features/users/components/UserInfo";
import { orgs, repos, users } from "@/data/mock";

export default function UserProfilePage() {
  const { username } = useParams();
  const user = users.find((u) => u.username === username);

  if (!user) {
    return <Text>User not found.</Text>;
  }

  const userRepos = repos.filter((r) => user.repos.includes(r.id));
  const userOrgs = orgs.filter((o) => user.orgs.includes(o.handle));

  return (
    <PageLayout>
      <UserInfo
        name={user.name}
        username={user.username}
        title={user.title}
        bio={user.bio}
        stats={[{ label: "repos", value: user.repos.length }]}
        organizations={userOrgs.map(org => ({ name: org.name, handle: org.handle }))}
      />

      <Card>
        <CardHeader title="Repositories" subtitle={`${userRepos.length} projects`} />
        <div className="grid-gap md:grid-cols-2">
          {userRepos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>
      </Card>
    </PageLayout>
  );
}
