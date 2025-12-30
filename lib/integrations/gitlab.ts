import { IntegrationProvider } from "./provider";

export class GitLabProvider implements IntegrationProvider {
  name = "gitlab";

  async connect(_oauthCode: string) {
    return { success: true, message: "GitLab OAuth placeholder" };
  }

  async importIssues(projectKeyOrPath: string) {
    return { tickets: [], log: `Would import issues for ${projectKeyOrPath}` };
  }

  async exportRefinement(_ticketId: string) {
    return { success: true, message: "Would export refinement back to GitLab" };
  }
}
