import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const variants = {
    // Brand color synced from Claude Design: terracotta #D97757 (was blue-600)
    primary: "bg-[#D97757] text-white hover:bg-[#C15F3D] focus:ring-[#D97757]",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
