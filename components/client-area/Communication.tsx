import { Mail, MessageCircle, Phone, Video, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const channels: { title: string; text: string; href: string; icon: LucideIcon; external?: boolean }[] = [
  { title: "Email the team", text: site.clientEmail, href: `mailto:${site.clientEmail}`, icon: Mail },
  { title: "Call us", text: site.phoneIntl, href: `tel:${site.phoneHref}`, icon: Phone },
  { title: "WhatsApp", text: "Including weekends", href: site.whatsapp, icon: MessageCircle, external: true },
  // No booking link exists yet; point this at the firm's scheduling page.
  { title: "Book a virtual meeting", text: "Pick a time that suits you", href: "/contact", icon: Video },
];

/** "02 / Communication": four ways to reach the team. */
export function Communication() {
  return (
    <section id="communication" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="02 / Communication" title="Talk to your team" />
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.title} delay={i * 90}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full min-h-[172px] flex-col bg-white p-8 transition-colors duration-300 hover:bg-brand"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-brand transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                  <h3 className="pt-8 font-display text-card-title uppercase text-ink transition-colors duration-300 group-hover:text-white">
                    {channel.title}
                  </h3>
                  <p className="pt-2 text-sm leading-5 text-ink/70 transition-colors duration-300 group-hover:text-white/85">
                    {channel.text}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
