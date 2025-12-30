import { refinementPackSchema } from "@/lib/refinement";

describe("refinementPackSchema", () => {
  const base = {
    improvedTitle: "Improve onboarding flow",
    improvedDescription: "Add progressive disclosure to simplify onboarding.",
    userStory: "As a new user, I want guidance so I can complete onboarding quickly.",
    acceptanceCriteria: [
      "Given a new visitor, When they start onboarding, Then progress is saved between steps.",
    ],
    edgeCases: ["User refreshes mid-step"],
    missingInfo: ["What metrics define success?"],
    nfrChecklist: [{ item: "Performance", status: "covered" }],
    splitSuggestions: ["Ship copy updates first"],
    dependencies: ["Analytics events"],
    risks: ["Scope creep"],
  };

  it("validates valid refinement packs", () => {
    const parsed = refinementPackSchema.parse(base);
    expect(parsed.improvedTitle).toBe(base.improvedTitle);
  });

  it("fails when acceptance criteria are not in Given-When-Then", () => {
    expect(() =>
      refinementPackSchema.parse({
        ...base,
        acceptanceCriteria: ["User sees a tooltip"],
      })
    ).toThrow();
  });
});
