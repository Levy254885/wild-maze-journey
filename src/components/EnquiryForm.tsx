import { useState } from "react";
import { z } from "zod";
import { site } from "@/lib/site";
import { destinations, safaris } from "@/data/safaris";

const schema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name").max(60),
  lastName: z.string().trim().min(1, "Please enter your last name").max(60),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(24)
    .regex(/^[0-9+()\-\s]+$/, "Please enter a valid phone number"),
  travellers: z.string().trim().max(10).optional().or(z.literal("")),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  destination: z.string().trim().max(80).optional().or(z.literal("")),
  safariType: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  travellers: "",
  date: "",
  destination: "",
  safariType: "",
  budget: "",
  message: "",
};

const fieldBase =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus:ring-0";

function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string | undefined;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow text-muted-foreground">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error ? (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Enquiry form.
 *
 * NOTE: no backend is connected yet. Rather than pretending a message was sent,
 * submission composes the enquiry into the visitor's email client addressed to
 * info@wildmazesafaris.com. To connect a real backend later, replace the body of
 * `deliver()` with a server function / email service call.
 */
export function EnquiryForm({ compact = false, subject }: { compact?: boolean; subject?: string | undefined }) {
  const [values, setValues] = useState<Values>({
    ...empty,
    safariType: subject ?? "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  function deliver(v: Values) {
    const body = [
      `Name: ${v.firstName} ${v.lastName}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      `Travellers: ${v.travellers || "—"}`,
      `Preferred travel date: ${v.date || "—"}`,
      `Destination: ${v.destination || "—"}`,
      `Safari type: ${v.safariType || "—"}`,
      `Budget / travel preference: ${v.budget || "—"}`,
      "",
      v.message || "",
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Safari enquiry — ${v.firstName} ${v.lastName}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as keyof Values;
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      deliver(parsed.data);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-xl">
        <p className="eyebrow text-muted-foreground">Enquiry prepared</p>
        <p className="lede mt-4">
          Thank you. Your safari enquiry has been received. Our team will be in touch shortly.
        </p>
        <p className="mt-6 max-w-md text-sm text-muted-foreground">
          Your email application should now be open with the enquiry ready to send to{" "}
          {site.email}. If nothing opened, please write to us directly or message us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setStatus("idle");
          }}
          className="eyebrow mt-8 border-b border-foreground pb-1 transition-opacity hover:opacity-70"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-2xl">
      <div className={`grid gap-x-10 gap-y-7 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <Field label="First name *" htmlFor="firstName" error={errors.firstName}>
          <input id="firstName" name="firstName" className={fieldBase} value={values.firstName} onChange={set("firstName")} autoComplete="given-name" required />
        </Field>
        <Field label="Last name *" htmlFor="lastName" error={errors.lastName}>
          <input id="lastName" name="lastName" className={fieldBase} value={values.lastName} onChange={set("lastName")} autoComplete="family-name" required />
        </Field>
        <Field label="Email *" htmlFor="email" error={errors.email}>
          <input id="email" name="email" type="email" className={fieldBase} value={values.email} onChange={set("email")} autoComplete="email" required />
        </Field>
        <Field label="Phone *" htmlFor="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" className={fieldBase} value={values.phone} onChange={set("phone")} autoComplete="tel" required />
        </Field>
        <Field label="Number of travellers" htmlFor="travellers" error={errors.travellers}>
          <input id="travellers" name="travellers" inputMode="numeric" className={fieldBase} value={values.travellers} onChange={set("travellers")} />
        </Field>
        <Field label="Preferred travel date" htmlFor="date" error={errors.date}>
          <input id="date" name="date" type="date" className={fieldBase} value={values.date} onChange={set("date")} />
        </Field>
        <Field label="Destination" htmlFor="destination" error={errors.destination}>
          <select id="destination" name="destination" className={fieldBase} value={values.destination} onChange={set("destination")}>
            <option value="">Not sure yet</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Safari type" htmlFor="safariType" error={errors.safariType}>
          <select id="safariType" name="safariType" className={fieldBase} value={values.safariType} onChange={set("safariType")}>
            <option value="">Not sure yet</option>
            {safaris.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2 md:col-span-2">
          <Field label="Budget / travel preference" htmlFor="budget" error={errors.budget}>
            <input id="budget" name="budget" className={fieldBase} value={values.budget} onChange={set("budget")} />
          </Field>
        </div>
        <div className="sm:col-span-2 md:col-span-2">
          <Field label="Message" htmlFor="message" error={errors.message}>
            <textarea id="message" name="message" rows={4} className={`${fieldBase} resize-none`} value={values.message} onChange={set("message")} />
          </Field>
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-8 text-xs text-destructive">
          Please correct the highlighted fields and try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="eyebrow mt-12 inline-flex items-center gap-4 border-b border-foreground pb-2 transition-opacity hover:opacity-70 disabled:opacity-40"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
          <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
    </form>
  );
}
