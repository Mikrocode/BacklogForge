import { NextResponse } from "next/server";
import { FakeAIProvider } from "@/lib/ai/fakeProvider";
import { mockTickets } from "@/lib/mockData";

export async function POST(req: Request) {
  const body = await req.json();
  const ticket = mockTickets.find((t) => t.id === body.ticketId);
  if (!ticket) return NextResponse.json({ error: "Ticket not found" }, { status: 404 });

  const provider = new FakeAIProvider();
  const pack = await provider.generateRefinementPack(ticket);

  return NextResponse.json({ pack, generatedAt: new Date().toISOString(), generatedBy: "system" });
}
