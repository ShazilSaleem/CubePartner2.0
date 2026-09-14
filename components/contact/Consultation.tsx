import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Consultation() {
  return (
    <section id="consultation" className="bg-surface py-20 lg:py-section">
      <Container className="flex flex-col gap-14 lg:flex-row lg:items-center">
        <Reveal className="flex flex-1 flex-col gap-6 pt-1">
          <Eyebrow>Free Consultancy</Eyebrow>
          <h2 className="font-display text-h2-md leading-[0.9] uppercase text-ink max-lg:text-[clamp(2.25rem,6vw,3.75rem)]">
            Get a free consultancy from our expert right now
          </h2>
          <p className="max-w-[448px] text-body text-ink/60">
            Tell us a little about your business and the support you need. One of our chartered
            accountants will come back to you with clear next steps.
          </p>
        </Reveal>
        <Reveal delay={150} className="flex-1">
          <ConsultationForm />
        </Reveal>
      </Container>
    </section>
  );
}
