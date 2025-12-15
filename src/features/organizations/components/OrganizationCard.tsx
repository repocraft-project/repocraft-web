import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { Card } from "@/components/common/Card";
import type { Organization } from "@/types";

export function OrganizationCard({ org }: { org: Organization }) {
  return (
    <Link
      to={`/orgs/${org.handle}`}
      className="group block transition-colors no-underline hover:no-underline hover:bg-slate-50 dark:hover:bg-slate-800/60"
    >
      <Card className="h-full">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600/10 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200">
            <Users size={18} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50 group-hover:underline">
              {org.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{org.description}</p>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {org.repos.length} repos · {org.members.length} members
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
