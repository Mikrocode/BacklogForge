import { TicketTable } from "@/components/TicketTable";
import { mockTickets } from "@/lib/mockData";

export default function BacklogPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-slate-500">Backlog</p>
          <h1 className="text-2xl font-semibold text-slate-900">Tickets</h1>
        </div>
        <div className="flex gap-2 text-sm text-slate-600">
          <button className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-100">Status</button>
          <button className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-100">Labels</button>
          <button className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-100">Assignee</button>
        </div>
      </header>
      <TicketTable tickets={mockTickets} />
    </div>
  );
}
