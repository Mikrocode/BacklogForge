import { TicketComparison } from "@/components/TicketComparison";
import { mockTickets } from "@/lib/mockData";

export default function ComparisonPage() {
  const [left, right] = mockTickets;

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase text-slate-500">Comparison</p>
        <h1 className="text-2xl font-semibold text-slate-900">Side-by-side view</h1>
      </header>
      {left && right ? <TicketComparison left={left} right={right} /> : <p className="text-sm text-slate-500">Add two tickets to compare.</p>}
    </div>
  );
}
