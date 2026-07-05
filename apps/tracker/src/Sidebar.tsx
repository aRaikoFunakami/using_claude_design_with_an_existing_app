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
    <aside className="w-60 shrink-0 bg-[#fbfbfa] px-2 py-3">
      <div className="px-2 pb-3.5 pt-1.5">
        <div className="text-[11px] uppercase tracking-wide text-[#9b9a97]">Project</div>
        <div className="mt-0.5 font-semibold text-[#37352f]">Acme Platform</div>
      </div>
      <nav className="flex flex-col gap-px">
        {menu.map((m) => (
          <SidebarItem key={m.key} label={m.label} icon={m.icon} active={m.key === active} />
        ))}
      </nav>
    </aside>
  );
}
