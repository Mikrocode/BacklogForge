import { RefinementPanel } from "./RefinementPanel";
import { ScoreBreakdown } from "./ScoreBreakdown";
import { Ticket } from "@/lib/types";

export function TicketComparison({ left, right }: { left: Ticket; right: Ticket }) {
  const winner = (left.wsjf?.scoreValue ?? 0) >= (right.wsjf?.scoreValue ?? 0) ? left : right;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[left, right].map((ticket) => (
        <div key={ticket.id} className="space-y-4">
          <div className="card">
            <p className="text-xs uppercase text-slate-500">{ticket.provider.toUpperCase()}</p>
            <h3 className="text-xl font-semibold text-slate-900">{ticket.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{ticket.description}</p>
          </div>
          <ScoreBreakdown score={ticket.wsjf} />
          <div className="card">
            <h4 className="text-sm font-semibold text-slate-700">Refinement pack</h4>
            <RefinementPanel pack={ticket.refinementPack} />
          </div>
        </div>
      ))}
      <div className="md:col-span-2 card">
        <h4 className="text-lg font-semibold text-slate-900">Recommended</h4>
        <p className="mt-2 text-slate-700">
          {winner.title} is recommended based on higher WSJF score and recent updates. Always confirm with stakeholders before scheduling.
        </p>
      </div>
    </div>
  );
}
