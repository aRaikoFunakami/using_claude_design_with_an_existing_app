import { useEffect, useRef, type ReactNode } from "react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

// ponytail: native <dialog> — no focus-trap/portal library needed, the platform does it
export function Dialog({ open, onClose, title, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      className="rounded-2xl border border-gray-200 p-6 shadow-xl backdrop:bg-black/40"
    >
      {title && <h2 className="mb-3 text-lg font-semibold text-gray-900">{title}</h2>}
      <div className="text-gray-600">{children}</div>
    </dialog>
  );
}
