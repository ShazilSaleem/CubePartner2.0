"use client";

import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type Guide = { title: string; text: string };

// Only the HMRC guides are visible in the Figma frame. The other topics' guides
// are drafted copy, and no video files exist yet, so every guide shows the same still.
const topics: { name: string; guides: Guide[] }[] = [
  {
    name: "HMRC",
    guides: [
      { title: "Registering for Self Assessment", text: "How to get your UTR and register with HMRC." },
      { title: "Paying your tax bill", text: "Ways to pay HMRC and payments on account explained." },
      { title: "Your Personal Tax Account", text: "Set up and use your online HMRC account." },
    ],
  },
  {
    name: "Companies House",
    guides: [
      { title: "Filing your confirmation statement", text: "What to check and how to file it each year." },
      { title: "Updating company details", text: "Change officers, addresses and shareholders." },
      { title: "Your company authentication code", text: "What it is and how to request a new one." },
    ],
  },
  {
    name: "VAT & MTD",
    guides: [
      { title: "Registering for VAT", text: "Thresholds, schemes and how to register." },
      { title: "Making Tax Digital for VAT", text: "Keeping digital records and filing returns." },
      { title: "MTD for Income Tax", text: "What changes for sole traders and landlords." },
    ],
  },
  {
    name: "Cube",
    guides: [
      { title: "Getting started with the portal", text: "Log in, find your documents and set up alerts." },
      { title: "Uploading your records", text: "The quickest way to send us what we need." },
      { title: "Paying your Cube invoice", text: "Card, bank transfer and direct debit options." },
    ],
  },
];

/** "03 / Cube Resources": pick a topic tab, then a guide; the selected guide plays on the right. */
export function Resources() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [guideIndex, setGuideIndex] = useState(0);
  const topic = topics[topicIndex];
  const guide = topic.guides[guideIndex];

  return (
    <section id="resources" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="03 / Cube Resources"
          title="Guides that make tax simple"
          intro="Pick a topic, then a guide — the video plays on the right."
          introClassName="text-sm leading-6"
        />

        <Reveal className="flex flex-col">
          <div role="tablist" aria-label="Resource topics" className="grid grid-cols-2 border-ink/10 lg:grid-cols-4 lg:border-r">
            {topics.map((t, i) => {
              const selected = i === topicIndex;
              return (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setTopicIndex(i);
                    setGuideIndex(0);
                  }}
                  className={cn(
                    "group flex h-[88px] items-start justify-between border-t border-l border-ink/10 px-5 pt-5 text-left transition-colors duration-300",
                    selected ? "border-b-2 border-b-brand" : "border-b border-b-ink/10 hover:bg-surface",
                  )}
                >
                  <span className="flex flex-col gap-1">
                    <span className="text-[10px] leading-3 text-ink/70">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={cn(
                        "font-display text-[22px] leading-7 transition-colors",
                        selected ? "text-brand" : "text-ink/60 group-hover:text-ink",
                      )}
                    >
                      {t.name}
                    </span>
                  </span>
                  {selected && <ArrowUpRight aria-hidden="true" className="size-3.5 text-brand" />}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-[533px_1fr]">
            <div className="px-0 py-10 lg:px-12" role="tabpanel">
              <p className="font-display text-eyebrow uppercase text-brand">
                {String(topicIndex + 1).padStart(2, "0")} / {topic.name}
              </p>
              <ul className="mt-10">
                {topic.guides.map((g, i) => {
                  const selected = i === guideIndex;
                  return (
                    <li key={g.title} className="border-b border-ink/10">
                      <button
                        type="button"
                        onClick={() => setGuideIndex(i)}
                        aria-pressed={selected}
                        className="group flex w-full gap-3 py-6 text-left"
                      >
                        <CirclePlay
                          aria-hidden="true"
                          className={cn("mt-0.5 size-5 shrink-0", selected ? "text-brand" : "text-ink")}
                          strokeWidth={1.75}
                        />
                        <span className="flex flex-col gap-1">
                          <span
                            className={cn(
                              "font-display text-lg leading-6 font-semibold tracking-[-0.02em] transition-colors",
                              selected ? "text-brand" : "text-ink group-hover:text-brand",
                            )}
                          >
                            {g.title}
                          </span>
                          <span className="text-sm leading-5 text-ink/70">{g.text}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-surface p-6 lg:p-10">
              <div key={`${topicIndex}-${guideIndex}`} className="animate-fade-in">
                <button
                  type="button"
                  aria-label={`Play: ${guide.title}`}
                  className="group relative block aspect-[667/375] w-full overflow-hidden"
                >
                  <Image
                    src="/images/resources-video.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 667px, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-1/2 left-1/2 flex size-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
                    <span className="ml-1 size-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-ink/70" />
                  </span>
                </button>
                <h3 className="pt-10 font-display text-2xl leading-8 font-semibold tracking-[-0.035em] text-ink">
                  {guide.title}
                </h3>
                <p className="pt-2 text-sm leading-5 text-ink/70">{guide.text}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
