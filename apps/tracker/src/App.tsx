import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { IssueList } from "./IssueList";
import { IssueDetail } from "./IssueDetail";
import type { Issue } from "./data";

export default function App() {
  const [selected, setSelected] = useState<Issue | null>(null);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar active="issues" />
      <div className="flex-1">
        <header className="flex items-center gap-3 border-b border-gray-300 bg-white px-4 py-2">
          <span className="font-bold text-gray-800">Acme Tracker</span>
          <nav className="flex gap-3 text-sm text-gray-600">
            <span className="border-b-2 border-blue-600 pb-1 font-medium text-blue-800">Issues</span>
            <span>Activity</span>
            <span>Roadmap</span>
            <span>Repository</span>
          </nav>
          <input
            className="ml-auto border border-gray-300 px-2 py-0.5 text-sm"
            placeholder="Search…"
          />
        </header>
        <main className="p-4">
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
