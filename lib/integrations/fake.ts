import { mockTickets } from "@/lib/mockData";
import { IntegrationProvider } from "./provider";

export class FakeProvider implements IntegrationProvider {
  name = "fake";

  async connect(): Promise<{ success: boolean; message?: string }> {
    return { success: true, message: "Connected locally (mock)" };
  }

  async importIssues(): Promise<{ tickets: typeof mockTickets; log: string }> {
    return { tickets: mockTickets, log: "Imported from mock provider" };
  }

  async exportRefinement(_ticketId: string): Promise<{ success: boolean; message?: string }> {
    return { success: true, message: "Exported refinement to provider (mock)" };
  }
}
