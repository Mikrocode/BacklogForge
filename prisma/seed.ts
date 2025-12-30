import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);

  const workspace = await prisma.workspace.upsert({
    where: { id: "seed-workspace" },
    update: {},
    create: {
      id: "seed-workspace",
      name: "BacklogForge Studio",
    },
  });

  const user = await prisma.user.upsert({
    where: { email: "founder@example.com" },
    update: {},
    create: {
      email: "founder@example.com",
      name: "Founding PO",
      passwordHash,
      workspaceId: workspace.id,
      role: "owner",
    },
  });

  const jiraConnection = await prisma.integrationConnection.create({
    data: {
      workspaceId: workspace.id,
      provider: "jira",
      baseUrl: "https://acme.atlassian.net",
    },
  });

  const project = await prisma.project.create({
    data: {
      workspaceId: workspace.id,
      provider: "jira",
      externalId: "JIRA-SPACE",
      name: "Customer Portal",
      keyOrPath: "CP",
      connectionId: jiraConnection.id,
    },
  });

  const ticket = await prisma.ticket.create({
    data: {
      workspaceId: workspace.id,
      provider: "jira",
      externalId: "CP-101",
      projectId: project.id,
      title: "Add status page",
      description: "Customers need visibility into uptime and maintenance events.",
      status: "To Do",
      labelsJson: ["platform", "observability"],
      assignee: "alex.johnson",
      createdAtExternal: new Date(),
      updatedAtExternal: new Date(),
    },
  });

  await prisma.score.create({
    data: {
      ticketId: ticket.id,
      model: "wsjf",
      businessValue: 10,
      timeCriticality: 8,
      riskReduction: 6,
      jobSize: 3,
      confidence: 80,
      scoreValue: (10 + 8 + 6) / 3,
      rationaleText: "High customer impact with moderate effort.",
    },
  });

  console.log("Seed data created for", user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
