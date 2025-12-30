export interface WSJFInput {
  businessValue: number;
  timeCriticality: number;
  riskReduction: number;
  jobSize: number;
}

export function calculateWSJF(input: WSJFInput) {
  const { businessValue, timeCriticality, riskReduction, jobSize } = input;
  if (jobSize <= 0) {
    throw new Error("jobSize must be greater than zero");
  }
  const sum = businessValue + timeCriticality + riskReduction;
  const scoreValue = Number((sum / jobSize).toFixed(2));
  return { ...input, scoreValue };
}
