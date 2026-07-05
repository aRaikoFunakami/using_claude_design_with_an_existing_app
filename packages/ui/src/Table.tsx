import type { ReactNode } from "react";

// Redmine-like dense, fully-bordered data table primitives.
// Styling lives here so a redesign (borders, density, radius) propagates to every table.

export function Table({ children }: { children: ReactNode }) {
  return (
    <table className="w-full border-collapse border border-gray-300 text-sm">{children}</table>
  );
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-gray-100 text-gray-600">{children}</thead>;
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TR({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <tr
      onClick={onClick}
      className={`border-b border-gray-200 ${onClick ? "cursor-pointer hover:bg-blue-50" : ""}`}
    >
      {children}
    </tr>
  );
}

export function TH({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 px-2 py-1.5 text-left font-semibold whitespace-nowrap">
      {children}
    </th>
  );
}

export function TD({ children }: { children: ReactNode }) {
  return <td className="border border-gray-200 px-2 py-1.5 align-middle">{children}</td>;
}
