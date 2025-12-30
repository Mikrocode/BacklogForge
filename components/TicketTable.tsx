import Link from "next/link";
import { format } from "date-fns";
import { ScoreBadge } from "./ScoreBadge";
import { Ticket } from "@/lib/types";

export function TicketTable({ tickets }: { tickets: Ticket[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Assignee</th>
            <th className="px-4 py-3">Updated</th>
            <th className="px-4 py-3">WSJF</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-t border-slate-100 hover:bg-slate-50">
              <td className="px-4 py-3 font-medium text-slate-900">
                <Link href={`/tickets/${ticket.id}`} className="hover:underline">
                  {ticket.title}
                </Link>
                <div className="mt-1 text-xs text-slate-500">{ticket.provider.toUpperCase()} • {ticket.externalId}</div>
              </td>
              <td className="px-4 py-3 text-slate-700">{ticket.status}</td>
              <td className="px-4 py-3 text-slate-700">{ticket.assignee ?? "Unassigned"}</td>
              <td className="px-4 py-3 text-slate-700">{format(new Date(ticket.updatedAtExternal), "PP")}</td>
              <td className="px-4 py-3"><ScoreBadge score={ticket.wsjf} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
