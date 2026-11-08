import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function MissionStatement() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="pt-1 lg:col-span-2">
            <Eyebrow>Mission</Eyebrow>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-10">
            <h2 className="max-w-[1061px] font-display text-mission text-ink max-lg:text-[clamp(1.75rem,4.5vw,3rem)]">
              Our mission is simple: to be the accountant small businesses can rely on. We{" "}
              <span className="text-brand">communicate</span> clearly, take time to{" "}
              <span className="text-brand">understand</span> each client, help them{" "}
              <span className="text-brand">build</span> with tailored advice, and stay{" "}
              <span className="text-brand">engaged</span> as their business grows. We bring Chartered
              standards with a personal touch.
            </h2>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
