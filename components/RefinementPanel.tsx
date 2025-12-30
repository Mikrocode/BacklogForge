import { RefinementPack } from "@/lib/types";

export function RefinementPanel({ pack }: { pack?: RefinementPack }) {
  if (!pack) return <p className="text-sm text-slate-500">No refinement pack yet.</p>;

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs uppercase text-slate-500">Improved title</p>
        <p className="text-lg font-semibold">{pack.improvedTitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard title="User story" items={[pack.userStory]} />
        <InfoCard title="Missing info" items={pack.missingInfo} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard title="Acceptance criteria" items={pack.acceptanceCriteria} ordered />
        <InfoCard title="Edge cases" items={pack.edgeCases} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard
          title="NFR checklist"
          items={pack.nfrChecklist.map((item) => `${item.item} • ${item.status.replace("_", " ")}`)}
        />
        <InfoCard title="Split suggestions" items={pack.splitSuggestions} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard title="Dependencies" items={pack.dependencies} />
        <InfoCard title="Risks" items={pack.risks} />
      </div>
    </div>
  );
}

function InfoCard({
  title,
  items,
  ordered,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  if (!items.length) {
    return (
      <div className="card">
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        <p className="text-sm text-slate-500">No entries yet.</p>
      </div>
    );
  }

  const ListTag = ordered ? "ol" : "ul";

  return (
    <div className="card">
      <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
      <ListTag className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    </div>
  );
}
