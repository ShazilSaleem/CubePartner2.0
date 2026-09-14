"use client";

import { useActionState } from "react";
import { submitConsultation, type ConsultationState } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

const services = [
  "Accounts",
  "Audit",
  "Business Advisory",
  "Payroll",
  "Tax Planning",
  "Bookkeeping & VAT",
  "Company Secretarial",
  "Sector Specialists",
];

const initialState: ConsultationState = { status: "idle" };

const labelClass = "font-display text-eyebrow uppercase text-ink/50";
const fieldClass =
  "w-full border-b-2 border-ink/20 bg-transparent py-[13px] text-sm text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none";

export function ConsultationForm() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-9 border border-surface-border bg-white p-6 sm:p-10"
      aria-describedby="consultation-status"
    >
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-3.5 pt-1">
          <span className={labelClass}>Name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="i.e. John Doe" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-3.5 pt-1">
          <span className={labelClass}>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="i.e. john@mail.com" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-3.5 pt-1">
          <span className={labelClass}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="i.e. 123-456-7890" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-3.5 pt-1">
          <span className={labelClass}>Which service do you need?</span>
          <select
            name="service"
            required
            defaultValue=""
            className="w-full border-b-2 border-ink/20 bg-transparent py-3 pr-4 pl-1 text-sm text-ink focus:border-brand focus:outline-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-brand px-8 py-4 text-center font-display text-button uppercase text-brand-foreground transition-colors hover:bg-ink disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get Free Consultancy"}
      </button>

      <p
        id="consultation-status"
        role="status"
        className={cn(
          "text-body-tight",
          state.status === "error" ? "text-brand" : "text-ink/70",
          state.status === "idle" && "hidden",
        )}
      >
        {state.message}
      </p>
    </form>
  );
}
