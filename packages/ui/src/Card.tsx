import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {title && <h2 className="mb-2 text-lg font-semibold text-gray-900">{title}</h2>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
