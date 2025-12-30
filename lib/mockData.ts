import { formatISO, subDays } from "date-fns";
import { IntegrationConnection, Project, RefinementPack, Score, Ticket, Workspace } from "./types";

const now = new Date();

export const mockWorkspace: Workspace = {
  id: "ws_1",
  name: "BacklogForge Labs",
  createdAt: formatISO(now),
};

export const mockProjects: Project[] = [
  {
    id: "proj_1",
    workspaceId: mockWorkspace.id,
    provider: "jira",
    externalId: "JIRA-SPACE",
    name: "Customer Portal",
    keyOrPath: "CP",
    lastSync: formatISO(subDays(now, 1)),
  },
  {
    id: "proj_2",
    workspaceId: mockWorkspace.id,
    provider: "gitlab",
    externalId: "234",
    name: "Mobile App",
    keyOrPath: "mobile/app",
    lastSync: formatISO(subDays(now, 2)),
  },
];

export const mockConnections: IntegrationConnection[] = [
  {
    id: "conn_1",
    workspaceId: mockWorkspace.id,
    provider: "jira",
    baseUrl: "https://acme.atlassian.net",
    projectCount: 3,
    lastSyncedAt: formatISO(subDays(now, 1)),
  },
  {
    id: "conn_2",
    workspaceId: mockWorkspace.id,
    provider: "gitlab",
    baseUrl: "https://gitlab.com",
    projectCount: 2,
    lastSyncedAt: formatISO(subDays(now, 2)),
  },
];

export const mockScores: Score[] = [
  {
    id: "score_1",
    ticketId: "tic_1",
    model: "wsjf",
    businessValue: 13,
    timeCriticality: 8,
    riskReduction: 5,
    jobSize: 3,
    confidence: 80,
    scoreValue: (13 + 8 + 5) / 3,
    rationaleText: "High user impact with moderate effort.",
    createdAt: formatISO(subDays(now, 1)),
  },
  {
    id: "score_2",
    ticketId: "tic_2",
    model: "wsjf",
    businessValue: 8,
    timeCriticality: 5,
    riskReduction: 4,
    jobSize: 8,
    confidence: 70,
    scoreValue: (8 + 5 + 4) / 8,
    rationaleText: "Lower urgency and higher effort; schedule after quick wins.",
    createdAt: formatISO(subDays(now, 2)),
  },
];

export const mockRefinements: RefinementPack[] = [
  {
    id: "rp_1",
    ticketId: "tic_1",
    version: 2,
    improvedTitle: "Add customer-facing status page",
    improvedDescription:
      "Provide a public status page showing uptime, planned maintenance, and incident history.",
    userStory: "As a customer, I want to see service status so that I can trust reliability.",
    acceptanceCriteria: [
      "Given an unauthenticated visitor, when they open the status page, then uptime for the last 90 days is displayed.",
      "Given scheduled maintenance exists, when the start time is in the future, then the event appears in a planned maintenance section.",
    ],
    edgeCases: ["Handle partial outages across multiple regions.", "Support custom domain for the page."],
    missingInfo: ["Who owns incident communication?", "Should we support RSS/email alerts?"],
    nfrChecklist: [
      { item: "Availability SLO", status: "needs_decision" },
      { item: "Caching strategy", status: "not_mentioned" },
      { item: "Accessibility", status: "covered" },
    ],
    splitSuggestions: ["Launch with uptime only", "Add incident history in follow-up"],
    dependencies: ["CDN configuration", "Incident management runbook"],
    risks: ["Publicly exposing outage frequency"],
    createdAt: formatISO(subDays(now, 1)),
  },
];

export const mockTickets: Ticket[] = [
  {
    id: "tic_1",
    workspaceId: mockWorkspace.id,
    provider: "jira",
    externalId: "CP-1042",
    projectId: "proj_1",
    title: "Status page for customers",
    description: "Customers need visibility into uptime and maintenance.",
    status: "In Progress",
    labels: ["observability", "customer"],
    assignee: "alex.johnson",
    createdAtExternal: formatISO(subDays(now, 6)),
    updatedAtExternal: formatISO(subDays(now, 1)),
    lastSyncedAt: formatISO(subDays(now, 1)),
    wsjf: mockScores[0],
    refinementPack: mockRefinements[0],
  },
  {
    id: "tic_2",
    workspaceId: mockWorkspace.id,
    provider: "gitlab",
    externalId: "#223",
    projectId: "proj_2",
    title: "Implement offline cache",
    description: "Mobile app should cache key flows for offline use.",
    status: "Ready for Dev",
    labels: ["mobile", "offline"],
    assignee: "riya.lee",
    createdAtExternal: formatISO(subDays(now, 10)),
    updatedAtExternal: formatISO(subDays(now, 3)),
    lastSyncedAt: formatISO(subDays(now, 2)),
    wsjf: mockScores[1],
  },
];
