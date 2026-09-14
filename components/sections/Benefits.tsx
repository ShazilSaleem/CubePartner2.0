import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const benefits = [
  {
    index: "01",
    title: "Client Portal",
    icon: "/icons/icon-benefit-client-portal.svg",
    text: "Access top-notch accounting services tailored to your business needs.",
    href: "/client-area",
    featured: false,
  },
  {
    index: "02",
    title: "Time and Cost Efficiency",
    icon: "/icons/icon-benefit-time-cost.svg",
    text: "Save valuable time and reduce costs with our streamlined processes.",
    href: "/services",
    featured: true,
  },
  {
    index: "03",
    title: "Dedicated Support",
    icon: "/icons/icon-benefit-support.svg",
    text: "Receive ongoing support from our experienced professionals.",
    href: "/contact",
    featured: false,
  },
];

export function Benefits() {
  return (
    <section className="border-y border-ink/10 bg-white py-20 lg:py-section">
      <Container className="flex flex-col gap-14 lg:flex-row lg:items-start">
        <Reveal className="flex flex-col items-start lg:w-[380px] lg:shrink-0">
          <Eyebrow className="pt-1">Client Benefits</Eyebrow>
          <h2 className="pt-6 font-display text-h2-sm uppercase text-ink max-lg:text-[clamp(2rem,5vw,3rem)]">
            Why partner
            <br />
            with Cube?
          </h2>
          <p className="max-w-[384px] pt-6 text-body text-ink/60">
            Read some of the benefits that our clients enjoy by joining our network.
          </p>
          <div className="pt-9">
            <Button href="/services">Explore all</Button>
          </div>
        </Reveal>

        <div className="grid flex-1 border-t border-l border-surface/14 sm:grid-cols-3 lg:min-h-[327px]">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.index}
              as="article"
              delay={100 + i * 100}
              className={cn(
                "group flex flex-col justify-between gap-6 border-r border-b border-surface/14 p-9 transition-colors duration-300",
                benefit.featured ? "bg-surface" : "hover:bg-surface/60",
              )}
            >
              <div className="flex items-start justify-between">
                <Image
                  src={benefit.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 transition-transform duration-300 ease-out-expo group-hover:-translate-y-1"
                />
                <span className="font-display text-numeral-sm text-ink opacity-20">{benefit.index}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-h4 uppercase text-ink">{benefit.title}</h3>
                <p className="text-body-tight text-ink opacity-70">{benefit.text}</p>
                <Link
                  href={benefit.href}
                  className="group/link inline-flex items-center gap-1 pt-3 font-display text-nav uppercase text-ink transition-colors hover:text-brand"
                >
                  Check here
                  <Image
                    src="/icons/icon-arrow-check-here.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="size-3.5 transition-transform duration-300 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
