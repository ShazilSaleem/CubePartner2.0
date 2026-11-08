"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type ClientType = {
  index: string;
  title: string;
  icon: string;
  text: string;
  services: string[];
};

// Hover lists: only "Limited Companies" was readable from the Figma hover variant
// (node 1348:9012). The other three lists are drafted copy to confirm against
// variants 1348:9133, 1348:9091 and 1348:9175.
const clientTypes: ClientType[] = [
  {
    index: "01",
    title: "Limited Companies",
    icon: "/icons/icon-client-limited-company.svg",
    text: "Complete compliance and advice for UK limited companies.",
    services: [
      "Statutory year-end accounts",
      "Corporation Tax returns",
      "Director payroll & dividend planning",
      "VAT returns under Making Tax Digital",
      "Bookkeeping",
    ],
  },
  {
    index: "02",
    title: "Sole Traders",
    icon: "/icons/icon-client-sole-trader.svg",
    text: "Simple, fixed-fee support so you can focus on the work.",
    services: [
      "Self Assessment tax returns",
      "Bookkeeping & expense tracking",
      "VAT registration & returns",
      "Making Tax Digital for Income Tax",
      "Tax planning",
    ],
  },
  {
    index: "03",
    title: "Partnerships & LLPs",
    icon: "/icons/icon-client-partnership.svg",
    text: "Joined-up accounts and tax for every partner.",
    services: [
      "Partnership & LLP accounts",
      "Partnership tax returns",
      "Partners' Self Assessment",
      "Profit allocation advice",
      "VAT returns",
    ],
  },
  {
    index: "04",
    title: "Individuals",
    icon: "/icons/icon-client-individual.svg",
    text: "Personal tax handled clearly and on time.",
    services: [
      "Self Assessment tax returns",
      "Rental income & landlord tax",
      "Capital Gains Tax",
      "HMRC correspondence",
      "Personal tax planning",
    ],
  },
];

/**
 * Figma: Normal -> Hover, smart animate 300ms ease-out. The card turns brand red,
 * the title block rises from the bottom of the card to sit under the icon row,
 * and the service list fades in below it. Tap toggles the same state on touch.
 */
function ClientTypeCard({ type }: { type: ClientType }) {
  const [active, setActive] = useState(false);

  return (
    <article
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => setActive((a) => !a)}
      role="button"
      tabIndex={0}
      aria-expanded={active}
      className={cn(
        "flex h-[421px] cursor-pointer flex-col overflow-hidden px-[30px] py-10 outline-none transition-colors duration-300 ease-out",
        "focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
        active ? "bg-brand" : "bg-card",
      )}
    >
      <div className="flex items-start justify-between">
        <Image
          src={type.icon}
          alt=""
          width={28}
          height={28}
          className={cn("size-7 transition-[filter] duration-300", active && "brightness-0 invert")}
        />
        <p
          aria-hidden="true"
          className={cn(
            "font-display text-numeral transition-colors duration-300",
            active ? "text-white" : "text-ink/15",
          )}
        >
          {type.index}
        </p>
      </div>

      {/* Spacer collapses from the full free height to the 20px hover gap */}
      <div className={cn("min-h-5 transition-[flex-grow] duration-300 ease-out", active ? "grow-0" : "grow")} />

      <div className="flex flex-col gap-4">
        <h3
          className={cn(
            "font-display text-card-title uppercase transition-colors duration-300",
            active ? "text-white" : "text-ink",
          )}
        >
          {type.title}
        </h3>
        <p
          className={cn(
            "max-w-[260px] text-body-tight transition-colors duration-300",
            active ? "text-white" : "text-ink/70",
          )}
        >
          {type.text}
        </p>
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <ul className="flex flex-col gap-3 overflow-hidden" aria-label={`${type.title} services`}>
          {type.services.map((service, i) => (
            <li key={service} className={cn("text-body-tight text-white", i === 0 && "pt-5")}>
              <span aria-hidden="true">→&nbsp;&nbsp;</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ClientTypes() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="flex flex-col gap-[25px] pt-1">
            <Eyebrow>Transforming Teamwork</Eyebrow>
            <h2 className="font-display text-title text-ink max-lg:text-[clamp(2.25rem,6vw,3.625rem)]">
              Tailor made
              <br />
              services
            </h2>
          </Reveal>
          <Reveal delay={150} className="flex max-w-[447px] flex-col items-start gap-8 lg:pr-3.5">
            <p className="text-copy text-slate">
              At Cube Accountants we offer a range of services to suit our clients&apos; needs. Hover or
              tap a card to see what we do for you.
            </p>
            <Button href="/services">Discover more</Button>
          </Reveal>
        </div>

        <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((type, i) => (
            <Reveal key={type.index} delay={i * 90}>
              <ClientTypeCard type={type} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
