import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/lib/team";

/** "People who know your numbers": copy and button on the left, three staggered portraits on the right. */
export function TeamTeaser() {
  return (
    <section id="team" className="scroll-mt-24 py-20 lg:py-32">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start lg:max-w-[460px]">
          <SectionHeading
            eyebrow="Meet our team"
            title={
              <>
                People who know
                <br />
                your numbers
              </>
            }
            intro="Led by Bilal Ahmed FCA, our Manchester team of chartered accountants and tax specialists works with you directly — the same faces, every year."
          />
          <Reveal delay={150} className="pt-8">
            <Button href="/about#team">Meet our team</Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 gap-3 lg:w-[612px]">
          {team.slice(0, 3).map((member, i) => (
            <Reveal key={member.id} delay={i * 100} className={i === 1 ? "pt-10" : undefined}>
              <div className="relative aspect-[196/288] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 196px, 33vw"
                  className="object-cover grayscale transition-[filter,transform] duration-700 ease-out-expo hover:scale-[1.03] hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
