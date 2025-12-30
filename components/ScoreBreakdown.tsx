import { Score } from "@/lib/types";

export function ScoreBreakdown({ score }: { score?: Score }) {
  if (!score) return <p className="text-sm text-slate-500">No WSJF score yet.</p>;

  const rows = [
    { label: "Business value", value: score.businessValue },
    { label: "Time criticality", value: score.timeCriticality },
    { label: "Risk reduction", value: score.riskReduction },
    { label: "Job size", value: score.jobSize },
  ];

  return (
    <div className="card space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">WSJF breakdown</h3>
        <span className="rounded bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">{score.scoreValue.toFixed(2)}</span>
      </div>
      <table className="w-full text-sm">
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="py-2 text-slate-600">{row.label}</td>
              <td className="py-2 text-right font-semibold text-slate-800">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate-500">Confidence {score.confidence}% • {score.rationaleText}</p>
    </div>
  );
}
