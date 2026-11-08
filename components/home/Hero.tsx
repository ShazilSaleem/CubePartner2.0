import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  { value: "ICAEW", label: ["Chartered", "Accountants"] },
  { value: "Personal", label: ["Partner-led", "Service"] },
  { value: "Established", label: ["Since", "2015"] },
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

      <Container className="relative flex min-h-[771px] flex-col justify-end py-24">
        <div className="flex w-full max-w-[768px] flex-col gap-[30px]">
          <Reveal>
            <Eyebrow className="pt-1">Chartered Accountants · Manchester</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display lg:w-[828px] text-hero text-ink max-lg:text-[clamp(2.5rem,8vw,4.5rem)]">
              A trusted partner
              <br />
              in your growing <span className="text-brand">business</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="max-w-[448px] text-intro text-slate">
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

          <Reveal
            delay={440}
            className="grid border border-ink/15 px-4 sm:grid-cols-[1fr_auto]"
          >
            <div className="flex flex-col gap-[7px] py-5 sm:pr-6">
              <Eyebrow>Location</Eyebrow>
              <p className="font-display text-label-lg uppercase text-ink">Manchester · United Kingdom</p>
            </div>
            <div className="flex max-sm:-mx-4 max-sm:border-t max-sm:border-ink/15 sm:pl-2">
              {facts.map((fact, i) => (
                <div
                  key={fact.value}
                  className={
                    "flex flex-1 flex-col items-center gap-1 border-ink/15 px-2 pt-5 pb-6 text-center sm:flex-none sm:border-l " +
                    (i === 0 ? "sm:w-[162px]" : "border-l sm:w-[148px]")
                  }
                >
                  <p className="font-display text-base leading-6 font-black uppercase text-ink">{fact.value}</p>
                  <p className="font-display text-eyebrow uppercase text-ink/45">
                    {fact.label[0]}
                    <br />
                    {fact.label[1]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
