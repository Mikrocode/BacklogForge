import { RefinementProvider } from "./provider";
import { Ticket } from "@/lib/types";
import { refinementPackSchema } from "@/lib/refinement";

export class FakeAIProvider implements RefinementProvider {
  async generateRefinementPack(ticket: Ticket) {
    const pack = {
      improvedTitle: `Refined: ${ticket.title}`,
      improvedDescription: `${ticket.description}\n\nThis version includes user impact and success metrics.`,
      userStory: "As a user, I want a clearer experience so that I can accomplish my goal confidently.",
      acceptanceCriteria: [
        "Given the ticket context, When the change is deployed, Then the success metric is captured.",
      ],
      edgeCases: ["Handle unauthenticated users"],
      missingInfo: ["Owner for rollout"],
      nfrChecklist: [
        { item: "Reliability", status: "needs_decision" },
        { item: "Security", status: "not_mentioned" },
      ],
      splitSuggestions: ["Ship a beta flag first"],
      dependencies: ["Analytics events"],
      risks: ["Scope creep"],
    };

    return refinementPackSchema.parse(pack);
  }

  async generateScoreRationale(ticket: Ticket) {
    return `WSJF derived from current fields for ${ticket.title}.`;
  }
}
