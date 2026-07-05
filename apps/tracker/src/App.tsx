import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { IssueList } from "./IssueList";
import { IssueDetail } from "./IssueDetail";
import type { Issue } from "./data";

export default function App() {
  const [selected, setSelected] = useState<Issue | null>(null);

  return (
    <div className="flex min-h-screen bg-white text-[#37352f]">
      <Sidebar active="issues" />
      <div className="flex-1">
        <header className="flex items-center gap-4 bg-white px-7 py-3">
          <span className="font-semibold text-[#37352f]">Acme Tracker</span>
          <nav className="flex gap-4 text-sm text-[#787774]">
            <span className="pb-1 font-medium text-[#37352f] shadow-[inset_0_-2px_0_#37352f]">Issues</span>
            <span>Activity</span>
            <span>Roadmap</span>
            <span>Repository</span>
          </nav>
          <input
            className="ml-auto rounded-md bg-[#f1f1ef] px-3 py-1.5 text-sm text-[#37352f] placeholder:text-[#9b9a97]"
            placeholder="Search…"
          />
        </header>
        <main className="px-12 py-6">
          {selected ? (
            <IssueDetail issue={selected} onBack={() => setSelected(null)} />
          ) : (
            <IssueList onOpen={setSelected} />
          )}
        </main>
      </div>
    </div>
  );
}
