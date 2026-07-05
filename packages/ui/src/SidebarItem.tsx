type SidebarItemProps = {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
};

// Redmine-like sidebar nav item: dense, left-aligned, subtle active state.
export function SidebarItem({ label, icon, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2 border-l-2 px-3 py-1.5 text-left text-sm ${
        active
          ? "border-blue-600 bg-blue-50 font-medium text-blue-800"
          : "border-transparent text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon && <span className="w-4 text-gray-400">{icon}</span>}
      {label}
    </button>
  );
}
