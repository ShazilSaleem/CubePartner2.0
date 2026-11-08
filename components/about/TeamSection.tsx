"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { team } from "@/lib/team";

/** Team selector: large portrait on the left, bio and four thumbnails on the right. */
export function TeamSection() {
  const [activeId, setActiveId] = useState(team[0].id);
  const active = team.find((member) => member.id === activeId) ?? team[0];

  return (
    <section id="team" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        {/* Heading copy is as it appears in the Figma frame. */}
        <SectionHeading
          eyebrow="Our Team"
          title="Our fantastic architecture"
          intro="A new dimension for the gold standard in architecture."
          introClassName="max-w-[402px] text-intro"
        />

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <Reveal className="relative h-[480px] w-full shrink-0 overflow-hidden sm:max-w-[420px]">
            {/* key forces a fresh element so the portrait crossfades when the member changes */}
            <div key={active.id} className="absolute inset-0 animate-fade-in">
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="(min-width: 640px) 420px, 100vw"
                className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-white/90 px-6 py-6 backdrop-blur-sm">
                <p className="font-display text-[22px] leading-7 font-medium text-ink">{active.name}</p>
                <Eyebrow>{active.role}</Eyebrow>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-1 flex-col gap-10">
            <Reveal delay={120}>
              <div key={active.id} className="flex animate-fade-in flex-col gap-3">
                <h3 className="font-display text-[32px] leading-9 font-medium tracking-[-0.02em] text-ink">
                  {active.name}
                </h3>
                <Eyebrow>{active.role}</Eyebrow>
                <p className="max-w-[561px] pt-3 text-copy text-slate">{active.bio}</p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div role="tablist" aria-label="Team members" className="grid grid-cols-2 sm:grid-cols-4">
                {team.map((member) => {
                  const selected = member.id === activeId;
                  return (
                    <button
                      key={member.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(member.id)}
                      className="group flex flex-col border border-ink/10 text-left"
                    >
                      <span className="relative block h-[136px] overflow-hidden">
                        <Image
                          src={member.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 203px, 50vw"
                          className={cn(
                            "object-cover object-[50%_25%] transition-[filter,transform] duration-500 ease-out-expo group-hover:scale-[1.05] group-hover:grayscale-0",
                            selected ? "grayscale-0" : "grayscale",
                          )}
                        />
                      </span>
                      <span
                        className={cn(
                          "border-t-2 px-3 py-3 text-[13px] leading-[17px] font-medium transition-colors duration-300",
                          selected ? "border-brand text-brand" : "border-transparent text-ink",
                        )}
                      >
                        {member.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
