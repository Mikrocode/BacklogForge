import { Score } from "@/lib/types";

export function ScoreBadge({ score }: { score?: Score }) {
  if (!score) return <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-500">Unscored</span>;

  const confidenceLabel = score.confidence >= 80 ? "High" : score.confidence >= 60 ? "Medium" : "Low";
  return (
    <div className="flex items-center gap-2">
      <span className="rounded bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">WSJF {score.scoreValue.toFixed(2)}</span>
      <span className="text-xs text-slate-500">Confidence: {confidenceLabel}</span>
    </div>
  );
}
