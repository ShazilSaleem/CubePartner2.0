import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Mission() {
  return (
    <section className="bg-surface py-20 lg:py-section-lg">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="pt-1 lg:col-span-2">
            <Eyebrow>Mission</Eyebrow>
          </Reveal>
          <Reveal delay={120} className="flex flex-col items-start lg:col-span-10">
            <h2 className="max-w-[1061px] font-display text-statement text-ink max-lg:text-[clamp(1.75rem,4.5vw,3rem)]">
              At Cube Accountants, we aim to simplify accounting for businesses and individuals by
              providing expert solutions tailored to your needs.{" "}
              <span className="text-brand">
                Our mission is to help you navigate complex financial challenges with confidence and
                ease.
              </span>
            </h2>
            <div className="pt-12">
              <Button href="/about" variant="outline">
                Learn more
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
