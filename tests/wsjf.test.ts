import { calculateWSJF } from "@/lib/wsjf";

describe("calculateWSJF", () => {
  it("computes the weighted score", () => {
    const result = calculateWSJF({ businessValue: 13, timeCriticality: 8, riskReduction: 5, jobSize: 3 });
    expect(result.score).toBeCloseTo(8.67, 2);
  });

  it("throws when job size is zero", () => {
    expect(() => calculateWSJF({ businessValue: 5, timeCriticality: 5, riskReduction: 5, jobSize: 0 })).toThrow();
  });
});
