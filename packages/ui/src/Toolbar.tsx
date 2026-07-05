import type { ReactNode } from "react";

type ToolbarProps = {
  children: ReactNode;
};

// Redmine-like filter/action bar: bordered strip above tables.
export function Toolbar({ children }: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
      {children}
    </div>
  );
}
