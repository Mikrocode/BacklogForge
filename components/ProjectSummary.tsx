import { IntegrationConnection, Project } from "@/lib/types";

export function ProjectSummary({ projects, connections }: { projects: Project[]; connections: IntegrationConnection[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {connections.map((connection) => (
        <div key={connection.id} className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-slate-500">{connection.provider.toUpperCase()}</p>
              <p className="text-lg font-semibold text-slate-900">{connection.baseUrl}</p>
            </div>
            <span className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {connection.projectCount} projects
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Last synced: {connection.lastSyncedAt ?? "never"}</p>
        </div>
      ))}
      <div className="card">
        <h3 className="text-sm font-semibold text-slate-700">Projects</h3>
        <ul className="mt-2 space-y-2 text-sm text-slate-700">
          {projects.map((project) => (
            <li key={project.id} className="flex items-center justify-between">
              <span>
                {project.name} <span className="text-xs text-slate-500">({project.provider})</span>
              </span>
              <span className="text-xs text-slate-500">Last sync {project.lastSync ?? "—"}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
