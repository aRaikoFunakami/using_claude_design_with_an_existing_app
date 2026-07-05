type SidebarItemProps = {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
};

// Notion-like sidebar nav item: no accent bar, rounded, soft gray hover/active.
// (Synced from Claude Design: was a left-accent-bar Redmine item.)
export function SidebarItem({ label, icon, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm ${
        active
          ? "bg-[#efefee] font-medium text-[#37352f]"
          : "text-[#5f5e5b] hover:bg-[#efefee]"
      }`}
    >
      {icon && <span className="w-4 text-center text-[#9b9a97]">{icon}</span>}
      {label}
    </button>
  );
}
