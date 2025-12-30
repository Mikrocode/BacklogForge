import Link from "next/link";
import { Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          <Rocket className="h-4 w-4" /> Product Owner Copilot
        </p>
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">BacklogForge</h1>
        <p className="text-lg text-slate-600">
          Connect Jira and GitLab, uplift ticket quality with AI, and prioritize work with an explainable WSJF model.
        </p>
        <div className="flex gap-3">
          <Link className="button-primary" href="/dashboard">
            Go to app
          </Link>
          <Link
            className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            href="/api/auth/signin"
          >
            Sign in
          </Link>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Import and export Jira + GitLab tickets on-demand.</li>
          <li>Generate Refinement Packs with editable AI output.</li>
          <li>Transparent WSJF scoring with confidence and rationale.</li>
        </ul>
      </div>
      <div className="card space-y-4 bg-white">
        <h2 className="text-lg font-semibold">How BacklogForge works</h2>
        <ol className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-700">1</span>
            Connect Jira or GitLab projects.
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-700">2</span>
            Import issues and refine them with AI packs.
          </li>
          <li className="flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-700">3</span>
            Prioritize with WSJF and export improvements when ready.
          </li>
        </ol>
      </div>
    </div>
  );
}
