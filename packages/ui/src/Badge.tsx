import type { ReactNode } from "react";

type BadgeColor = "blue" | "green" | "orange" | "gray" | "purple" | "red";

type BadgeProps = {
  color?: BadgeColor;
  children: ReactNode;
};

// Redmine-like status badge: bordered, square-ish, dense.
const colors: Record<BadgeColor, string> = {
  blue: "border-blue-300 bg-blue-50 text-blue-700",
  green: "border-green-300 bg-green-50 text-green-700",
  orange: "border-orange-300 bg-orange-50 text-orange-700",
  gray: "border-gray-300 bg-gray-100 text-gray-600",
  purple: "border-purple-300 bg-purple-50 text-purple-700",
  red: "border-red-300 bg-red-50 text-red-700",
};

export function Badge({ color = "gray", children }: BadgeProps) {
  return (
    <span className={`inline-block rounded-sm border px-1.5 py-0.5 text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  );
}
