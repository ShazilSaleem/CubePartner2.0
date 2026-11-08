import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Benefit = { title: string; text: string; icon: string };

const groups: {
  eyebrow: string;
  index: string;
  title: string;
  cta: { label: string; href: string };
  benefits: Benefit[];
}[] = [
  {
    eyebrow: "Thinking of joining Cube?",
    index: "01",
    title: "New Clients",
    cta: { label: "Explore our services", href: "/services" },
    benefits: [
      {
        title: "Qualified Team",
        text: "ICAEW chartered accountants who get the numbers right first time.",
        icon: "/icons/icon-why-qualified-team.svg",
      },
      {
        title: "Fixed Prices – No surprises",
        text: "Agreed monthly fees up front. No hourly billing shocks.",
        icon: "/icons/icon-why-fixed-prices.svg",
      },
      {
        title: "Easy to Switch",
        text: "We contact your previous accountant and handle the handover.",
        icon: "/icons/icon-why-easy-switch.svg",
      },
      {
        title: "Client Benefits",
        text: "Portal, WhatsApp support, deadline reminders and more.",
        icon: "/icons/icon-why-client-benefits.svg",
      },
    ],
  },
  {
    eyebrow: "Already with Cube?",
    index: "02",
    title: "Existing Clients",
    cta: { label: "Go to Client Hub", href: "/client-area" },
    benefits: [
      {
        title: "Client Portal",
        text: "Upload documents, pay and track your work 24/7.",
        icon: "/icons/icon-why-client-portal.svg",
      },
      {
        title: "Communication",
        text: "Email, call, WhatsApp or book a virtual meeting.",
        icon: "/icons/icon-why-communication.svg",
      },
      {
        title: "Cube Resources",
        text: "Video guides on HMRC, Companies House and more.",
        icon: "/icons/icon-why-resources.svg",
      },
      {
        title: "Calendar",
        text: "Every key UK tax and filing deadline in one place.",
        icon: "/icons/icon-why-calendar.svg",
      },
    ],
  },
];

/** Figma hover variant: the tile fills brand red and its icon and text turn white. */
function BenefitTile({ benefit }: { benefit: Benefit }) {
  return (
    <div className="group flex min-h-[200px] flex-col gap-2 bg-white p-6 transition-colors duration-300 hover:bg-brand">
      <Image
        src={benefit.icon}
        alt=""
        width={24}
        height={24}
        className="size-6 transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert"
      />
      <h4 className="pt-4 font-display text-card-title tracking-[-0.035em] uppercase text-ink transition-colors duration-300 group-hover:text-brand-foreground">
        {benefit.title}
      </h4>
      <p className="max-w-[230px] text-body-tight text-ink/70 transition-colors duration-300 group-hover:text-brand-foreground/70">
        {benefit.text}
      </p>
    </div>
  );
}

export function WhyCube() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-6 pb-6 lg:flex-row lg:items-start lg:justify-between">
          <Reveal className="flex flex-col gap-[23px]">
            <Eyebrow className="pt-1">Client Benefits</Eyebrow>
            <h2 className="font-display text-title text-ink max-lg:text-[clamp(2.25rem,6vw,3.625rem)]">
              Why partner
              <br />
              with Cube?
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:w-[380px] lg:pt-6">
            <p className="max-w-96 text-copy text-slate">
              Read some of the benefits that our clients enjoy by joining our network.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px bg-ink/10 lg:grid-cols-2">
          {groups.map((group, g) => (
            <Reveal key={group.index} delay={g * 120} className="flex flex-col bg-white py-12 lg:p-12">
              <Eyebrow className="text-ink/50">{group.eyebrow}</Eyebrow>
              <h3 className="pt-4 font-display text-subtitle text-brand">
                {group.index} /<span className="text-ink"> {group.title}</span>
              </h3>
              <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2">
                {group.benefits.map((benefit) => (
                  <BenefitTile key={benefit.title} benefit={benefit} />
                ))}
              </div>
              <div className="pt-10">
                <Button href={group.cta.href}>{group.cta.label}</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
