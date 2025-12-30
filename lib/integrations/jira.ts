import { IntegrationProvider } from "./provider";

export class JiraProvider implements IntegrationProvider {
  name = "jira";

  async connect(_oauthCode: string) {
    return { success: true, message: "Jira OAuth placeholder" };
  }

  async importIssues(projectKeyOrPath: string) {
    return { tickets: [], log: `Would import issues for ${projectKeyOrPath}` };
  }

  async exportRefinement(_ticketId: string) {
    return { success: true, message: "Would export refinement back to Jira" };
  }
}
