import { Ticket } from "@/lib/types";

type ImportResult = {
  tickets: Ticket[];
  log: string;
};

export interface IntegrationProvider {
  name: string;
  connect(oauthCode: string): Promise<{ success: boolean; message?: string }>;
  importIssues(projectKeyOrPath: string): Promise<ImportResult>;
  exportRefinement(ticketId: string, payload: { descriptionDiff: string; acceptanceCriteria: string[] }): Promise<{ success: boolean; message?: string }>;
}
