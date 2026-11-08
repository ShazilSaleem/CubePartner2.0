"use client";

import { site } from "@/lib/site";

const interests = [
  "Accounts",
  "Audit",
  "Business Advisory",
  "Payroll",
  "Tax Planning",
  "Bookkeeping & VAT",
  "Company Secretarial",
  "Switching accountant",
  "Something else",
];

const labelClass = "text-sm leading-5 font-medium text-ink";
const fieldClass =
  "w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-brand focus:outline-none";

/**
 * As in the design ("This opens your email app to send your message"), submitting
 * composes an email to the firm in the visitor's mail app instead of posting to a server.
 */
export function ContactForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Website enquiry${interest ? `: ${interest}` : ""}`;
    const body = `${message}\n\nName: ${name}\nEmail: ${email}${interest ? `\nInterested in: ${interest}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 border border-accent-orange/20 bg-accent-orange-light p-8 sm:p-[46px]">
      <div className="flex flex-col gap-2 pb-2">
        <p className="font-display text-eyebrow uppercase text-brand">Your next step starts here</p>
        <h3 className="font-display text-[28px] leading-9 font-medium text-ink">Tell us what&apos;s on your mind.</h3>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>Your name</span>
        <input name="name" type="text" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
      </label>
      <label className="flex flex-col gap-2">
        <span className={labelClass}>Email address</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
      </label>
      <label className="flex flex-col gap-2">
        <span className={labelClass}>I&apos;m interested in</span>
        <select name="interest" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select an option
          </option>
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className={labelClass}>Your message</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us a little about yourself..."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="group mt-2 flex items-center justify-center gap-3 bg-brand px-8 py-4 font-display text-button uppercase text-brand-foreground transition-colors duration-300 hover:bg-brand-dark"
      >
        Let&apos;s talk
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
      <p className="text-center text-xs leading-4 text-ink/50">This opens your email app to send your message.</p>
    </form>
  );
}
