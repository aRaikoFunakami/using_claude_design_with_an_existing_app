import type { ReactNode } from "react";

// Notion-like data table primitives: borderless, subtle row separators, airy padding.
// (Synced from Claude Design: was a fully-bordered dense Redmine table.)
// Styling lives here so a redesign propagates to every table.

export function Table({ children }: { children: ReactNode }) {
  return <table className="w-full border-collapse text-sm">{children}</table>;
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="text-[#9b9a97]">{children}</thead>;
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TR({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <tr onClick={onClick} className={onClick ? "cursor-pointer hover:bg-[#f7f7f5]" : ""}>
      {children}
    </tr>
  );
}

export function TH({ children }: { children: ReactNode }) {
  return (
    <th className="border-b border-[#ebebea] px-3 py-2 text-left text-xs font-medium whitespace-nowrap">
      {children}
    </th>
  );
}

export function TD({ children }: { children: ReactNode }) {
  return <td className="border-b border-[#ebebea] px-3 py-3.5 align-middle">{children}</td>;
}
