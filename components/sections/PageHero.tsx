import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Buttons row under the lead. */
  actions?: React.ReactNode;
  /** Background photo, shown faded and desaturated on the right 60% of the hero. */
  image?: string;
  imagePosition?: string;
  /** Extra content under the actions (Client Hub section tabs). */
  children?: React.ReactNode;
  className?: string;
};

/**
 * Inner-page hero from the 06 Nov 2026 redesign (Services, About, Contact, Client Hub):
 * 602px tall, faded photo from x=572 to the right edge, white gradient over its left side.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  image = "/images/hero-meeting.jpg",
  imagePosition = "center",
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-white", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 left-[39.7%] opacity-[0.14]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="60vw"
          style={{ objectPosition: imagePosition }}
          className="animate-hero-zoom object-cover grayscale"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white via-48% to-white/0"
      />

      <Container className="relative flex min-h-[602px] flex-col justify-center py-24">
        <div className="flex max-w-[768px] flex-col items-start">
          <Reveal>
            <Eyebrow className="pt-1">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="pt-8 font-display text-hero text-ink max-lg:text-[clamp(2.5rem,8vw,4.5rem)]">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={200}>
              <div className="max-w-[653px] pt-8 text-intro text-slate">{lead}</div>
            </Reveal>
          )}
          {actions && (
            <Reveal delay={300} className="flex flex-wrap gap-px pt-8">
              {actions}
            </Reveal>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
