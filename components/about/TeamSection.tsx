"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { team } from "@/lib/team";

export function TeamSection() {
  const [activeId, setActiveId] = useState(team[0].id);
  const active = team.find((member) => member.id === activeId) ?? team[0];

  return (
    <section id="team" className="border-y border-ink/10 bg-white py-20 lg:py-section">
      <Container className="flex flex-col gap-16">
        <Reveal className="flex flex-col gap-6 pt-1">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="font-display text-h2 uppercase text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
            Our fantastic
            <br />
            architecture
          </h2>
          <p className="max-w-[384px] text-body text-ink/60">
            A new dimension for the gold standard in architecture.
          </p>
        </Reveal>

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
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-surface/85 p-6">
                <p className="font-display text-xl leading-7 font-black uppercase text-ink">{active.name}</p>
                <Eyebrow>{active.role}</Eyebrow>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-1 flex-col gap-12">
            <Reveal delay={120}>
              <div key={active.id} className="flex animate-fade-in flex-col gap-3">
                <h3 className="font-display text-h3-lg uppercase text-ink">{active.name}</h3>
                <Eyebrow>{active.role}</Eyebrow>
                <p className="max-w-[576px] pt-3 text-body text-ink/65">{active.bio}</p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div role="tablist" aria-label="Team members" className="grid grid-cols-2 gap-px sm:grid-cols-4">
                {team.map((member) => {
                  const selected = member.id === activeId;
                  return (
                    <button
                      key={member.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(member.id)}
                      className={cn(
                        "group relative h-[176px] overflow-hidden text-left transition-[border-color] duration-300",
                        selected ? "border-4 border-brand" : "border-4 border-transparent",
                      )}
                    >
                      <Image
                        src={member.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 200px, 50vw"
                        className={cn(
                          "object-cover object-[50%_30%] transition-[filter,transform] duration-500 ease-out-expo group-hover:scale-[1.05] group-hover:grayscale-0",
                          selected ? "grayscale-0" : "grayscale",
                        )}
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-surface/80 p-3 font-display text-nav tracking-[0.025em] uppercase text-ink">
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
