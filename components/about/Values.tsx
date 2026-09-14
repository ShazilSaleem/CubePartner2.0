import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    title: "C - Communication",
    icon: "/icons/icon-value-communication.svg",
    text: "Effectively liaise your needs to match your unique vision.",
  },
  {
    title: "U - Understand",
    icon: "/icons/icon-value-understand.svg",
    text: "Empower your project with our extensive and customisable collection.",
  },
  {
    title: "B - Build",
    icon: "/icons/icon-value-build.svg",
    text: "Effortlessly incorporate and integrate essential features seamlessly.",
  },
  {
    title: "E - Engage",
    icon: "/icons/icon-value-engage.svg",
    text: "Delight and captivate your customers with seamless and intuitive interfaces.",
  },
];

export function Values() {
  return (
    <section className="py-20 lg:py-section">
      <Container className="flex flex-col gap-16">
        <Reveal className="flex flex-col gap-6 pt-1">
          <Eyebrow>Our Values</Eyebrow>
          <h2 className="max-w-[576px] font-display text-h2 uppercase text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
            Built on <span className="text-brand">C.U.B.E</span>
          </h2>
          <p className="max-w-[448px] text-body text-ink/60">
            Designed to impeccably fulfil all your unique needs and requirements.
          </p>
        </Reveal>

        <div className="grid border-t border-l border-surface/14 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              as="article"
              delay={i * 90}
              className="group flex min-h-[275px] flex-col justify-between gap-8 border-r border-b border-surface/14 p-10 transition-colors duration-300 hover:bg-surface/60"
            >
              <Image
                src={value.icon}
                alt=""
                width={28}
                height={28}
                className="size-7 transition-transform duration-300 ease-out-expo group-hover:-translate-y-1"
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-h4 uppercase text-ink">{value.title}</h3>
                <p className="text-body-tight text-ink opacity-70">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
