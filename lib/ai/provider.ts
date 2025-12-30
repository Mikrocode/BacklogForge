import { refinementPackSchema, RefinementPackInput } from "@/lib/refinement";
import { Ticket } from "@/lib/types";

export interface RefinementProvider {
  generateRefinementPack(ticket: Ticket): Promise<RefinementPackInput>;
  generateScoreRationale(ticket: Ticket, scoreInputs: { businessValue: number; timeCriticality: number; riskReduction: number; jobSize: number }): Promise<string>;
}

export function validateRefinement(input: RefinementPackInput) {
  return refinementPackSchema.parse(input);
}
