import { NextResponse } from "next/server";
import { FakeAIProvider } from "@/lib/ai/fakeProvider";
import { mockTickets } from "@/lib/mockData";
import { calculateWSJF } from "@/lib/wsjf";

export async function POST(req: Request) {
  const body = await req.json();
  const ticket = mockTickets.find((t) => t.id === body.ticketId);
  if (!ticket) return NextResponse.json({ error: "Ticket not found" }, { status: 404 });

  const wsjf = calculateWSJF({
    businessValue: body.businessValue,
    timeCriticality: body.timeCriticality,
    riskReduction: body.riskReduction,
    jobSize: body.jobSize,
  });

  const provider = new FakeAIProvider();
  const rationale = await provider.generateScoreRationale(ticket, body);

  return NextResponse.json({ score: wsjf, rationale });
}
