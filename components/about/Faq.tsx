"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { faqs } from "@/lib/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <Reveal className="flex flex-col gap-6 pt-1 lg:w-[420px] lg:shrink-0">
          <Eyebrow className="pt-1">FAQ</Eyebrow>
          <h2 className="font-display text-title text-ink max-lg:text-[clamp(2.25rem,6vw,3.625rem)]">
            Your questions
            <br />
            <span className="text-brand">answered.</span>
          </h2>
          <p className="max-w-[357px] text-copy text-slate">
            Let&apos;s do our best to answer your most frequently asked questions.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex-1 border-t border-ink/15">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={item.question} className="border-b border-ink/15 px-1">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg leading-[23px] font-medium text-ink transition-colors duration-300 group-hover:text-brand">
                      {item.question}
                    </span>
                    <Image
                      src="/icons/icon-chevron.svg"
                      alt=""
                      width={16}
                      height={16}
                      className={cn("size-4 shrink-0 transition-transform duration-300 ease-out-expo", open && "rotate-180")}
                    />
                  </button>
                </h3>
                {/* 0fr -> 1fr grid rows animate the panel height without measuring it */}
                <div
                  id={panelId}
                  aria-hidden={!open}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pb-6 text-copy text-slate">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
