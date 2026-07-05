import type { ReactNode } from "react";

type TagColor = "red" | "green" | "blue" | "gray";

type TagProps = {
  color?: TagColor;
  children: ReactNode;
};

// Redmine-like tracker tag: small dot + label.
const dot: Record<TagColor, string> = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  gray: "bg-gray-400",
};

export function Tag({ color = "gray", children }: TagProps) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-700">
      <span className={`h-2 w-2 rounded-full ${dot[color]}`} />
      {children}
    </span>
  );
}
