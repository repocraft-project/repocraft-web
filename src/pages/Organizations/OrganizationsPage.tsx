import { OrganizationCard } from "@/features/organizations/components/OrganizationCard";
import { Card } from "@/components/common/Card";
import { Grid } from "@/components/common/Grid";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageLayout } from "@/components/layout/PageLayout";
import { orgs } from "@/data/mock";

export default function OrganizationsPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Organizations" 
        subtitle="Teams that manage repositories on Repocraft."
      />
      <Card>
        <Grid mdCols={2}>
          {orgs.map((org) => (
            <OrganizationCard key={org.handle} org={org} />
          ))}
        </Grid>
      </Card>
    </PageLayout>
  );
}
