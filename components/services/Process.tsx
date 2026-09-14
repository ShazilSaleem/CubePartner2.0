import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    index: "01",
    title: "Discovery call",
    text: "We listen first — your goals, your pressures, your numbers.",
  },
  {
    index: "02",
    title: "Tailored proposal",
    text: "A fixed scope and fixed fee, with no surprises.",
  },
  {
    index: "03",
    title: "Onboarding",
    text: "We handle the handover from your previous accountant.",
  },
  {
    index: "04",
    title: "Ongoing support",
    text: "Proactive advice all year, not just at year end.",
  },
];

export function Process() {
  return (
    <section className="bg-surface py-20 lg:py-section">
      <Container className="flex flex-col gap-16">
        <Reveal className="flex flex-col gap-6 pt-1">
          <Eyebrow>Process</Eyebrow>
          <h2 className="font-display text-h2 uppercase text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
            How we work
            <br />
            with you
          </h2>
        </Reveal>
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.index} as="li" delay={i * 120} className="flex flex-col gap-3 border-t-2 border-brand pt-6">
              <span className="font-display text-numeral-lg text-brand">{step.index}</span>
              <h3 className="pt-1 font-display text-h4 leading-7 uppercase text-ink">{step.title}</h3>
              <p className="text-body-tight text-ink/60">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
