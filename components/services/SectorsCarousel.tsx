"use client";

import {
  ChevronLeft,
  ChevronRight,
  HardHat,
  HeartPulse,
  Building2,
  Plane,
  Scale,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

// The first three sectors are visible in the Figma frame. The other three sit
// inside the carousel component's hidden slides and are drafted copy to confirm.
const sectors: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Care and Supported Living", text: "Children's homes, adult residential care and supported living providers.", icon: HeartPulse },
  { title: "Property and Construction", text: "Landlords, developers and CIS contractors.", icon: Building2 },
  { title: "Travel and Tourism", text: "Tour operators and travel agents, including ATOL reporting.", icon: Plane },
  { title: "Legal and Professional", text: "Solicitors, consultants and professional practices.", icon: Scale },
  { title: "Contractors and Freelancers", text: "Limited company contractors, IR35 and sole traders.", icon: HardHat },
  { title: "Retail and E-commerce", text: "Shops, online sellers and wholesalers.", icon: ShoppingBag },
];

/**
 * Figma "Sectors Carousal Component": the active sector sits in a raised centre
 * card with its neighbours faded either side; the arrows move one step with a
 * 300ms ease-out (smart animate in the prototype).
 */
export function SectorsCarousel() {
  const [active, setActive] = useState(0);
  const count = sectors.length;
  const at = (offset: number) => sectors[(active + offset + count) % count];
  const go = (step: number) => setActive((a) => (a + step + count) % count);

  return (
    <section id="sectors" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Sectors"
          title="Specialist in your sector"
          intro="Deep sector knowledge, applied to the numbers that move your business."
          introClassName="max-w-[413px]"
        />

        <Reveal className="flex flex-col items-center gap-16">
          <div
            className="grid w-full items-stretch gap-5 lg:grid-cols-[322px_1fr_322px] lg:px-[18px]"
            aria-live="polite"
          >
            {[-1, 0, 1].map((offset) => {
              const sector = at(offset);
              const Icon = sector.icon;
              const isActive = offset === 0;
              return (
                <article
                  key={`${sector.title}-${offset}`}
                  aria-hidden={!isActive}
                  onClick={() => !isActive && go(offset)}
                  className={cn(
                    "flex animate-fade-in flex-col border border-ink/5 bg-white transition-all duration-300 ease-out",
                    isActive
                      ? "order-first px-12 py-14 shadow-[0_24px_40px_-24px_rgb(20_17_16/0.25)] lg:order-none"
                      : "cursor-pointer px-10 py-14 opacity-55 hover:opacity-80 max-lg:hidden",
                  )}
                >
                  <Icon aria-hidden="true" className={cn("text-brand", isActive ? "size-8" : "size-7")} strokeWidth={1.5} />
                  <h3
                    className={cn(
                      "pt-10 font-display uppercase text-ink",
                      isActive ? "text-xl leading-7 font-bold tracking-[-0.035em]" : "text-sm leading-6 font-bold tracking-[-0.03em]",
                    )}
                  >
                    {sector.title}
                  </h3>
                  <p className={cn("pt-3 text-ink/70", isActive ? "text-sm leading-6" : "text-xs leading-5")}>
                    {sector.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous sector"
              className="flex size-12 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="size-4" />
            </button>
            <p className="w-[91px] text-center font-display text-sm font-semibold text-ink">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next sector"
              className="flex size-12 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
