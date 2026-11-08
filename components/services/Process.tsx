import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Chartered & qualified",
    text: "ICAEW regulated accountants, led personally by a partner.",
    link: { label: "Meet the team", href: "#team" },
  },
  {
    title: "Sector knowledge",
    text: "We know the numbers that matter in your industry.",
    link: { label: "Our sectors", href: "#sectors" },
  },
  {
    title: "Fixed monthly fees",
    text: "One agreed price. No hourly billing, no surprise invoices.",
    link: { label: "Get a quote", href: "#quote" },
  },
  {
    title: "Always reachable",
    text: "Email, phone and WhatsApp support — with a 24 hour response.",
    link: { label: "Cube support", href: "#support" },
  },
];

/** "How we work with you": four brand-ruled points, each scrolling to its section below. */
export function Process() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="Process" title="How we work with you" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="flex flex-col border-t-2 border-brand pt-7">
              <p aria-hidden="true" className="font-display text-numeral-lg text-brand">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="pt-5 font-display text-card-title uppercase text-ink">{step.title}</h3>
              <p className="max-w-[290px] pt-3 text-body-tight text-ink/70">{step.text}</p>
              <a
                href={step.link.href}
                className="group mt-5 inline-flex items-center gap-1.5 self-start font-display text-eyebrow uppercase text-brand"
              >
                {step.link.label}
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
