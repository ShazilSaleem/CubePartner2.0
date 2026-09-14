import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const sectors = [
  { title: "Healthcare", icon: "/icons/icon-sector-healthcare.svg" },
  { title: "Legal and Professional", icon: "/icons/icon-sector-legal.svg" },
  { title: "Property and Construction", icon: "/icons/icon-sector-property.svg" },
  { title: "Contractors and Freelancers", icon: "/icons/icon-sector-contractors.svg" },
  { title: "Transport", icon: "/icons/icon-sector-transport.svg" },
  { title: "Catering", icon: "/icons/icon-sector-catering.svg" },
];

const blurb =
  "Specialist accounting, compliance and advisory support built around the way your sector works.";

export function Sectors() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-section">
      <Container className="flex flex-col gap-16">
        <Reveal className="flex flex-col gap-6 pt-1">
          <Eyebrow>Sectors</Eyebrow>
          <h2 className="max-w-[672px] font-display text-h2 uppercase text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
            Specialist in your sector
          </h2>
          <p className="max-w-[448px] text-body text-ink/60">
            Deep sector knowledge, applied to the numbers that move your business.
          </p>
        </Reveal>

        <div className="grid border-t border-l border-surface/14 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal
              key={sector.title}
              as="article"
              delay={(i % 3) * 90 + Math.floor(i / 3) * 60}
              className="group flex min-h-[226px] flex-col gap-8 border-r border-b border-surface/14 p-10 transition-colors duration-300 hover:bg-surface/60"
            >
              <Image
                src={sector.icon}
                alt=""
                width={28}
                height={28}
                className="size-7 transition-transform duration-300 ease-out-expo group-hover:-translate-y-1"
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-h4 uppercase text-ink">{sector.title}</h3>
                <p className="text-body-tight text-ink opacity-65">{blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
