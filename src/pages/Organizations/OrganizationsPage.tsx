import { OrganizationCard } from "@/features/organizations/components/OrganizationCard";
import { Card } from "@/components/common/Card";
import { orgs } from "@/data/mock";

export default function OrganizationsPage() {
  return (
    <div className="grid-gap">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Organizations</h1>
        <p className="muted">Teams that manage repositories on Repocraft.</p>
      </div>
      <Card>
        <div className="grid-gap md:grid-cols-2">
          {orgs.map((org) => (
            <OrganizationCard key={org.handle} org={org} />
          ))}
        </div>
      </Card>
    </div>
  );
}
