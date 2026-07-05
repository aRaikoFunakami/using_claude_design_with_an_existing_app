import { SidebarItem } from "@ds/ui";

const menu = [
  { key: "overview", label: "Overview", icon: "▤" },
  { key: "issues", label: "Issues", icon: "✦" },
  { key: "gantt", label: "Gantt", icon: "▦" },
  { key: "wiki", label: "Wiki", icon: "≡" },
  { key: "settings", label: "Settings", icon: "⚙" },
];

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="w-56 shrink-0 border-r border-gray-300 bg-white">
      <div className="border-b border-gray-300 px-3 py-3">
        <div className="text-xs text-gray-500">Project</div>
        <div className="font-semibold text-gray-800">Acme Platform</div>
      </div>
      <nav className="py-2">
        {menu.map((m) => (
          <SidebarItem key={m.key} label={m.label} icon={m.icon} active={m.key === active} />
        ))}
      </nav>
    </aside>
  );
}
