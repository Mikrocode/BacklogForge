import { NextResponse } from "next/server";
import { enqueueSyncJob, processPendingJobs } from "@/lib/jobs/queue";

export async function POST(request: Request) {
  const body = await request.json();
  const job = await enqueueSyncJob({
    workspaceId: body.workspaceId,
    provider: body.provider,
    projectId: body.projectId,
    connectionId: body.connectionId,
  });
  await processPendingJobs();
  return NextResponse.json({ job });
}
