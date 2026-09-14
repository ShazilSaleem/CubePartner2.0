import Image from "next/image";
import { PortalPreview } from "@/components/client-area/PortalPreview";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const blurb = "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few reasons.";

const items = [
  { index: "01", title: "Cube Portal", icon: "/icons/icon-portal-cube-portal.svg", text: blurb },
  { index: "02", title: "Cube App", icon: "/icons/icon-portal-cube-app.svg", text: blurb },
  { index: "03", title: "Cube Videos", icon: "/icons/icon-portal-cube-videos.svg", text: blurb },
];

export function DigitalPromotion() {
  return (
    <section className="py-20 lg:py-section">
      <Container className="flex flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col items-start">
          <Reveal className="flex flex-col gap-6 pt-1 pb-12">
            <Eyebrow>Digital Promotion</Eyebrow>
            <h2 className="font-display text-h2 uppercase text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
              Client
              <br />
              benefits
            </h2>
          </Reveal>
          <div className="w-full border-t border-l border-surface/14">
            {items.map((item, i) => (
              <Reveal
                key={item.index}
                delay={100 + i * 100}
                className="group flex items-start justify-between gap-6 border-r border-b border-surface/14 p-8 transition-colors duration-300 hover:bg-surface/60"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="flex items-center gap-3 font-display text-h4 leading-7 uppercase text-ink">
                    <Image src={item.icon} alt="" width={20} height={20} className="size-5" />
                    {item.title}
                  </h3>
                  <p className="max-w-[448px] text-body-tight text-ink opacity-70">{item.text}</p>
                </div>
                <span className="font-display text-2xl leading-8 font-black text-ink opacity-15">{item.index}</span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400} className="pt-10">
            <Button href="#">Login Now</Button>
          </Reveal>
        </div>
        <Reveal delay={200} className="flex-1 pb-8 sm:pl-6 lg:pl-0">
          <PortalPreview />
        </Reveal>
      </Container>
    </section>
  );
}
