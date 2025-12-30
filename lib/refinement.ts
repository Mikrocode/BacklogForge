import { z } from "zod";

export const refinementPackSchema = z.object({
  improvedTitle: z.string().min(3),
  improvedDescription: z.string().min(10),
  userStory: z.string().min(10),
  acceptanceCriteria: z
    .array(z.string().min(5))
    .nonempty()
    .refine((items) => items.every((item) => /Given.*When.*Then/i.test(item)), {
      message: "Acceptance criteria must follow Given When Then format",
    }),
  edgeCases: z.array(z.string()).default([]),
  missingInfo: z.array(z.string()).default([]),
  nfrChecklist: z
    .array(
      z.object({
        item: z.string(),
        status: z.enum(["not_mentioned", "needs_decision", "covered"]),
      })
    )
    .default([]),
  splitSuggestions: z.array(z.string()).default([]),
  dependencies: z.array(z.string()).default([]),
  risks: z.array(z.string()).default([]),
});

export type RefinementPackInput = z.infer<typeof refinementPackSchema>;
