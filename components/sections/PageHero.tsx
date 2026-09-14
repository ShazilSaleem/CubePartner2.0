import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  cta?: { label: string; href: string };
  /** Which corner the faint rotated square sits in. */
  decor?: "left" | "right";
  /** Optional right-hand column (5 of 12 grid columns on desktop). */
  aside?: React.ReactNode;
  children?: React.ReactNode;
};

/** Inner-page hero: eyebrow, 96px uppercase H1, lead paragraph, primary CTA, decorative square. */
export function PageHero({ eyebrow, title, lead, cta, decor = "right", aside, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-section">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute flex items-center justify-center",
          decor === "right" ? "-top-[139px] -right-[171px] size-[546px]" : "-top-[151px] -left-[151px] size-[498px]",
        )}
      >
        <div
          className={cn(
            "rotate-12 border-[40px] border-surface opacity-5",
            decor === "right" ? "size-[460px]" : "size-[420px]",
          )}
        />
      </div>
      <Container className={cn("relative", aside ? "grid gap-8 lg:grid-cols-12" : undefined)}>
        <div className={cn("flex flex-col items-start", aside ? "lg:col-span-7" : "max-w-[768px]")}>
          <Reveal>
            <Eyebrow className="pt-1">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="pt-8 font-display text-display-sm uppercase text-ink max-lg:text-[clamp(2.5rem,9vw,6rem)]">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={200}>
              <p className="max-w-[448px] pt-8 text-lead leading-tight text-ink/70">{lead}</p>
            </Reveal>
          )}
          {cta && (
            <Reveal delay={300} className="pt-8">
              <Button href={cta.href}>{cta.label}</Button>
            </Reveal>
          )}
          {children}
        </div>
        {aside && (
          <Reveal delay={200} className="lg:col-span-5">
            {aside}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
