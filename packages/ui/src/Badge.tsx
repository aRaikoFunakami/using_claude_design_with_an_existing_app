import type { ReactNode } from "react";

type BadgeColor = "blue" | "green" | "orange" | "gray" | "purple" | "red";

type BadgeProps = {
  color?: BadgeColor;
  children: ReactNode;
};

// Notion-like status chip: borderless, soft tinted background, rounded.
// (Synced from Claude Design: was a bordered dense Redmine badge.)
const colors: Record<BadgeColor, string> = {
  blue: "bg-[#e7f0f8] text-[#37669e]",
  green: "bg-[#e4f0e6] text-[#3c7d47]",
  orange: "bg-[#faebdd] text-[#b0632b]",
  gray: "bg-[#ecebe9] text-[#6b6a67]",
  purple: "bg-[#f0e7f7] text-[#7c5aa0]",
  red: "bg-[#fae3df] text-[#b0503c]",
};

export function Badge({ color = "gray", children }: BadgeProps) {
  return (
    <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  );
}
