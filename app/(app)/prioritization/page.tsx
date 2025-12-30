import { mockTickets } from "@/lib/mockData";
import { ScoreBadge } from "@/components/ScoreBadge";

export default function PrioritizationPage() {
  const sorted = [...mockTickets].sort((a, b) => (b.wsjf?.scoreValue ?? 0) - (a.wsjf?.scoreValue ?? 0));

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase text-slate-500">Prioritization</p>
        <h1 className="text-2xl font-semibold text-slate-900">WSJF ranked list</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          {sorted.map((ticket) => (
            <div key={ticket.id} className="card flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">{ticket.title}</p>
                <p className="text-xs text-slate-500">{ticket.provider.toUpperCase()} • {ticket.status}</p>
              </div>
              <ScoreBadge score={ticket.wsjf} />
            </div>
          ))}
        </div>
        <div className="card">
          <h3 className="text-sm font-semibold text-slate-700">Impact vs effort</h3>
          <p className="mt-2 text-sm text-slate-600">
            Business value and risk reduction are charted against job size to make tradeoffs visible. Add a charting library later to visualize this matrix.
          </p>
        </div>
      </div>
    </div>
  );
}
