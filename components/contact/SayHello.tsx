import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const channels: { label: string; value: string; href: string; icon: LucideIcon; external?: boolean }[] = [
  { label: "Email us", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Call us", value: site.phoneIntl, href: `tel:${site.phoneHref}`, icon: Phone },
  { label: "WhatsApp", value: site.whatsappDisplay, href: site.whatsapp, icon: MessageCircle, external: true },
  { label: "Find us", value: site.officeAddressShort, href: "#map", icon: MapPin },
];

/** "A conversation is a great place to start.": contact channels on the left, enquiry form on the right. */
export function SayHello() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[100px]">
        <div className="flex flex-1 flex-col">
          <SectionHeading
            eyebrow="Say hello"
            eyebrowStyle="rule"
            title={
              <>
                A conversation is a<br />
                great place to start.
              </>
            }
            intro="Reach out in whatever way works for you. Our team is here to help."
            introClassName="max-w-[490px] text-intro"
          />
          <ul className="mt-8 border-t border-ink/10">
            {channels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <Reveal as="li" key={channel.label} delay={i * 80}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 border-b border-ink/10 py-5"
                  >
                    <Icon aria-hidden="true" className="size-[22px] shrink-0 text-brand" strokeWidth={1.75} />
                    <span className="flex flex-1 flex-col gap-1">
                      <span className="font-display text-eyebrow uppercase text-ink/50">→ {channel.label}</span>
                      <span className="font-display text-xl leading-7 font-medium text-ink transition-colors duration-300 group-hover:text-brand">
                        {channel.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-[18px] shrink-0 text-ink/30 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                    />
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal delay={150} className="lg:w-[543px]">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
