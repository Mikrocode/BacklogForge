import { notFound } from "next/navigation";
import { mockTickets } from "@/lib/mockData";
import { RefinementPanel } from "@/components/RefinementPanel";
import { ScoreBreakdown } from "@/components/ScoreBreakdown";
import Link from "next/link";

export default function TicketDetail({ params }: { params: { id: string } }) {
  const ticket = mockTickets.find((item) => item.id === params.id);
  if (!ticket) return notFound();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-slate-500">{ticket.provider.toUpperCase()}</p>
              <h1 className="text-2xl font-semibold text-slate-900">{ticket.title}</h1>
            </div>
            <span className="rounded bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{ticket.status}</span>
          </div>
          <p className="mt-3 whitespace-pre-line text-sm text-slate-700">{ticket.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
            {ticket.labels.map((label) => (
              <span key={label} className="rounded-full bg-slate-100 px-3 py-1">{label}</span>
            ))}
          </div>
        </div>
        <div className="card space-y-3">
          <div className="flex gap-2">
            <button className="button-primary">Generate Refinement Pack</button>
            <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Export to {ticket.provider === "jira" ? "Jira" : "GitLab"}
            </button>
          </div>
          <p className="text-xs text-slate-500">Exports are manual and show a confirmation modal before pushing changes.</p>
        </div>
      </div>
      <div className="space-y-4">
        <ScoreBreakdown score={ticket.wsjf} />
        <div className="card">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-700">Refinement Pack</h3>
            <Link href="#" className="text-xs text-brand-700">View history</Link>
          </div>
          <div className="mt-4">
            <RefinementPanel pack={ticket.refinementPack} />
          </div>
        </div>
      </div>
    </div>
  );
}
