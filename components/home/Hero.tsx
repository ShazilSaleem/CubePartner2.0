import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  { value: "ICAEW", label: "Chartered" },
  { value: "500+", label: "Clients" },
  { value: "2015", label: "Established" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Desaturated photo over the right 62% of the section, easing in from a slight zoom */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 left-[38%] opacity-[0.14]">
        <Image
          src="/images/hero-meeting.jpg"
          alt=""
          fill
          priority
          sizes="62vw"
          className="animate-hero-zoom object-cover grayscale"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white via-48% to-white/0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[151px] -left-[135px] flex size-[498px] items-center justify-center"
      >
        <div className="size-[420px] rotate-12 border-[40px] border-surface opacity-5" />
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-1/3 bg-brand" />

      <Container className="relative flex min-h-[738px] flex-col justify-end pt-28 pb-20">
        <div className="flex w-full max-w-[768px] flex-col gap-[30px]">
          <Reveal>
            <Eyebrow className="pt-1">Chartered Accountants · Manchester</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-[827px] font-display text-display uppercase text-ink max-lg:text-[clamp(2.75rem,10vw,7rem)]">
              Your trusted partner in <span className="text-brand">accounting</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="max-w-[448px] text-lead text-ink/75">
              Cube Accountants offers a personal and professional service, advising clients on a range
              of financial solutions.
            </p>
          </Reveal>
          <Reveal delay={320} className="flex flex-wrap gap-px pt-1 pb-4">
            <Button href="/contact">Get Started</Button>
            <Button href="/services" variant="outline">
              Services
            </Button>
          </Reveal>

          <Reveal delay={440} className="grid border-y border-ink/15 sm:grid-cols-[1.4fr_2fr]">
            <div className="flex flex-col gap-[7px] py-5 sm:border-r sm:border-ink/15 sm:pr-6">
              <Eyebrow>Location</Eyebrow>
              <p className="font-display text-label-lg uppercase text-ink">
                Central Manchester · United Kingdom
              </p>
            </div>
            <div className="flex overflow-x-auto max-sm:border-t max-sm:border-ink/15 sm:pl-2">
              {facts.map((fact) => (
                <div
                  key={fact.value}
                  className="flex flex-1 flex-col items-center gap-1 border-l border-ink/15 px-2 pt-5 pb-12 text-center sm:w-[148px] sm:flex-none"
                >
                  <p className="font-display text-base leading-6 font-black uppercase text-ink">{fact.value}</p>
                  <p className="font-display text-eyebrow uppercase text-ink/45">{fact.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
