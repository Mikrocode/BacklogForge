export type Provider = "jira" | "gitlab";

export interface Workspace {
  id: string;
  name: string;
  createdAt: string;
}

export interface Project {
  id: string;
  workspaceId: string;
  provider: Provider;
  externalId: string;
  name: string;
  keyOrPath: string;
  lastSync?: string;
}

export interface Ticket {
  id: string;
  workspaceId: string;
  provider: Provider;
  externalId: string;
  projectId: string;
  title: string;
  description: string;
  status: string;
  labels: string[];
  assignee?: string;
  createdAtExternal: string;
  updatedAtExternal: string;
  lastSyncedAt?: string;
  wsjf?: Score;
  refinementPack?: RefinementPack;
}

export interface RefinementPack {
  id: string;
  ticketId: string;
  version: number;
  improvedTitle: string;
  improvedDescription: string;
  userStory: string;
  acceptanceCriteria: string[];
  edgeCases: string[];
  missingInfo: string[];
  nfrChecklist: { item: string; status: "not_mentioned" | "needs_decision" | "covered" }[];
  splitSuggestions: string[];
  dependencies: string[];
  risks: string[];
  createdAt: string;
}

export interface Score {
  id: string;
  ticketId: string;
  model: "wsjf";
  businessValue: number;
  timeCriticality: number;
  riskReduction: number;
  jobSize: number;
  confidence: number;
  scoreValue: number;
  rationaleText: string;
  createdAt: string;
}

export interface IntegrationConnection {
  id: string;
  workspaceId: string;
  provider: Provider;
  baseUrl: string;
  projectCount: number;
  lastSyncedAt?: string;
}
