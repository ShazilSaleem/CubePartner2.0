import { ServiceCard } from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    index: "01",
    title: "Accounts",
    icon: "/icons/icon-service-accounts.svg",
    text: "Enhance campaign planning, collaboration and performance tracking.",
  },
  {
    index: "02",
    title: "Audit",
    icon: "/icons/icon-service-audit.svg",
    text: "Streamline task assignment, progress tracking and resource allocation.",
  },
  {
    index: "03",
    title: "Business Advisory",
    icon: "/icons/icon-service-business-advisory.svg",
    text: "Facilitate data-driven decision making, scenario analysis and goal tracking.",
  },
  {
    index: "04",
    title: "Payroll",
    icon: "/icons/icon-service-payroll.svg",
    text: "Optimise process automation, documentation and communication.",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-section">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="flex flex-col gap-6 pt-1">
            <Eyebrow>Transforming Teamwork</Eyebrow>
            <h2 className="font-display text-h2 uppercase text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
              Tailor made
              <br />
              services
            </h2>
          </Reveal>
          <Reveal delay={150} className="flex max-w-[460px] flex-col items-start gap-8 lg:pr-3.5">
            <p className="text-body text-ink/60">
              At Cube Accountants we offer a range of services to suit our clients&apos; needs. What
              makes our services unique is the ability to communicate effectively with our clients
              to understand their needs and build a solid relationship. We provide a service which
              is tailored to you.
            </p>
            <Button href="/services">Discover more</Button>
          </Reveal>
        </div>

        <div className="grid border-t border-l border-surface/14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 90} className="flex">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
