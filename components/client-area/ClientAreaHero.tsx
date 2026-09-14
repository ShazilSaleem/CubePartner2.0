import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type ClientAreaHeroProps = {
  image: string;
};

/** Full-bleed desaturated photo under an 80% white wash, content anchored to the bottom. */
export function ClientAreaHero({ image }: ClientAreaHeroProps) {
  return (
    <section className="relative flex min-h-[630px] items-end overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="animate-hero-zoom object-cover grayscale" />
      <div aria-hidden="true" className="absolute inset-0 bg-white/80" />
      <Container className="relative py-20 lg:py-24">
        <div className="flex max-w-[768px] flex-col items-start gap-8 pt-1">
          <Reveal>
            <Eyebrow>Client Area</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
          <h1 className="font-display text-display-sm leading-[0.85] uppercase text-ink max-lg:text-[clamp(2.5rem,9vw,6rem)]">
            Let&apos;s connect
            <br />
            <span className="text-brand">&amp; collaborate</span>
          </h1>
          </Reveal>
          <Reveal delay={220}>
          <p className="max-w-[448px] text-body text-ink/70">
            Have questions or need expert advice? Our team is here to guide you through every
            financial challenge. Reach out today, and let&apos;s build a successful future together.
          </p>
          </Reveal>
          <Reveal delay={320}>
            <Button href="/contact" variant="outline">
              Contact Us now
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
