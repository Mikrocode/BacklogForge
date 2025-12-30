import { getPrismaClient } from "@/lib/prisma";

export type JobStatus = "pending" | "running" | "completed" | "failed";

export async function enqueueSyncJob(params: { workspaceId: string; provider: string; projectId?: string; connectionId?: string }) {
  const prisma = getPrismaClient();
  return prisma.syncJob.create({
    data: {
      workspaceId: params.workspaceId,
      provider: params.provider,
      projectId: params.projectId,
      status: "pending",
      connectionId: params.connectionId,
    },
  });
}

export async function processPendingJobs() {
  const prisma = getPrismaClient();
  const job = await prisma.syncJob.findFirst({ where: { status: "pending" }, orderBy: { startedAt: "asc" } });
  if (!job) return null;

  await prisma.syncJob.update({ where: { id: job.id }, data: { status: "running", startedAt: new Date(), logText: "Processing" } });

  // Placeholder work: a real implementation would call Jira/GitLab APIs
  await prisma.syncJob.update({
    where: { id: job.id },
    data: { status: "completed", finishedAt: new Date(), logText: "Sync completed (mock)" },
  });

  return job;
}
