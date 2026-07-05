import type { ReactNode } from "react";

type ToolbarProps = {
  children: ReactNode;
};

// Notion-like filter bar: borderless, airy. (Synced from Claude Design.)
export function Toolbar({ children }: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-1 text-sm text-[#9b9a97]">{children}</div>
  );
}
