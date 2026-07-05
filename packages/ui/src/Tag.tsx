import type { ReactNode } from "react";

type TagColor = "red" | "green" | "blue" | "gray";

type TagProps = {
  color?: TagColor;
  children: ReactNode;
};

// Tracker tag: small dot + label. Softened, muted dot colors (Notion palette).
const dot: Record<TagColor, string> = {
  red: "bg-[#e07b6a]",
  green: "bg-[#6aad7a]",
  blue: "bg-[#6a9bd0]",
  gray: "bg-[#9b9a97]",
};

export function Tag({ color = "gray", children }: TagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[#37352f]">
      <span className={`h-2 w-2 rounded-full ${dot[color]}`} />
      {children}
    </span>
  );
}
