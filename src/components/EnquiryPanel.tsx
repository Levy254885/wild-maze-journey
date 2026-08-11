import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { EnquiryForm } from "./EnquiryForm";
import { site } from "@/lib/site";

interface EnquiryContextValue {
  open: boolean;
  openEnquiry: (subject?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}

/** Slide-in "Plan your safari" panel, available from anywhere in the site. */
export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);

  const openEnquiry = useCallback((s?: string) => {
    setSubject(s);
    setOpen(true);
  }, []);
  const closeEnquiry = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const value = useMemo(() => ({ open, openEnquiry, closeEnquiry }), [open, openEnquiry, closeEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[90] transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close enquiry panel"
          onClick={closeEnquiry}
          className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]"
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Plan your safari"
          className={`absolute right-0 top-0 flex h-full w-full max-w-[560px] flex-col bg-background transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between gap-6 border-b border-border px-6 py-6 sm:px-10">
            <div>
              <p className="eyebrow text-muted-foreground">{site.name}</p>
              <h2 className="display-md mt-2">Plan your safari</h2>
            </div>
            <button
              type="button"
              onClick={closeEnquiry}
              className="eyebrow mt-2 shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
          <div className="no-scrollbar flex-1 overflow-y-auto px-6 py-8 sm:px-10">
            {open ? <EnquiryForm compact subject={subject} /> : null}
          </div>
        </aside>
      </div>
    </EnquiryContext.Provider>
  );
}
