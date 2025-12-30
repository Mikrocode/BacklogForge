import { mockConnections, mockProjects, mockWorkspace } from "@/lib/mockData";
import { ProjectSummary } from "@/components/ProjectSummary";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-slate-500">Workspace</p>
          <h1 className="text-2xl font-semibold text-slate-900">{mockWorkspace.name}</h1>
        </div>
        <div className="flex gap-3">
          <Link className="button-primary" href="/api/integrations/jira/connect">Connect Jira</Link>
          <Link className="button-primary" href="/api/integrations/gitlab/connect">Connect GitLab</Link>
        </div>
      </div>
      <ProjectSummary projects={mockProjects} connections={mockConnections} />
      <div className="card">
        <h3 className="text-sm font-semibold text-slate-700">Last sync jobs</h3>
        <p className="mt-2 text-sm text-slate-600">Sync pipeline is mocked for the MVP scaffold. Trigger a sync after configuring integrations.</p>
      </div>
    </div>
  );
}
