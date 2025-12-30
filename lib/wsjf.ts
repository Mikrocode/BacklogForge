export interface WSJFInput {
  businessValue: number;
  timeCriticality: number;
  riskReduction: number;
  jobSize: number;
}

export interface WSJFResult extends WSJFInput {
  score: number;
}

export function calculateWSJF(input: WSJFInput): WSJFResult {
  const { businessValue, timeCriticality, riskReduction, jobSize } = input;
  if (jobSize <= 0) {
    throw new Error("jobSize must be greater than zero");
  }
  const sum = businessValue + timeCriticality + riskReduction;
  const score = Number((sum / jobSize).toFixed(2));
  return { ...input, score };
}
