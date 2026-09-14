import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const platforms = [
  {
    name: "Cube Partners",
    logo: "/images/cube-partner-purple.svg",
    text: "Cube Partners connects businesses to achieve extraordinary results. Let's grow together.",
  },
  {
    name: "Cube Academy",
    logo: "/images/cube-academy-blue.svg",
    text: "Cube Academy is a training provider which offers an opportunity to gain practical experience in finance.",
  },
];

export function Platforms() {
  return (
    <section className="border-y border-ink/10 bg-white py-16 lg:py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <h2 className="max-w-[672px] font-display text-h2-md uppercase text-ink max-lg:text-[clamp(2.25rem,6vw,3.75rem)]">
            Get benefit from our
            <br />
            other platforms
          </h2>
        </Reveal>
        <div className="grid border-t border-l border-surface/14 md:grid-cols-2">
          {platforms.map((platform, i) => (
            <Reveal
              key={platform.name}
              as="article"
              delay={i * 120}
              className="flex flex-col gap-5 border-r border-b border-surface/14 p-10 transition-colors duration-300 hover:bg-surface/60"
            >
              <Image src={platform.logo} alt={platform.name} width={212} height={48} className="h-12 w-[212px]" />
              <p className="max-w-[448px] text-body text-ink opacity-70">{platform.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
