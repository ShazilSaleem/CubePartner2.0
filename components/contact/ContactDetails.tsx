import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type DetailLine = { text: string; href?: string };

const details: { index: string; icon: string; title: string; lines: DetailLine[] }[] = [
  {
    index: "01",
    icon: "/icons/icon-contact-location.svg",
    title: "Office Location",
    lines: [{ text: site.officeAddress }],
  },
  {
    index: "02",
    icon: "/icons/icon-contact-phone.svg",
    title: "Phone Number",
    lines: [
      { text: `Call ${site.phoneIntl}`, href: `tel:${site.phoneHref}` },
      { text: `Whatsapp ${site.whatsappDisplay}`, href: site.whatsapp },
    ],
  },
  {
    index: "03",
    icon: "/icons/icon-contact-email.svg",
    title: "Email",
    lines: [{ text: site.email, href: `mailto:${site.email}` }],
  },
];

// The design shows a static, desaturated map of Manchester. The exported image links out to
// OpenStreetMap centred near Parkway Two (M14 7HR).
const mapLink = "https://www.openstreetmap.org/?mlat=53.4385&mlon=-2.2560#map=13/53.4385/-2.2560";

export function ContactDetails() {
  return (
    <section className="border-y border-ink/10 bg-white py-16 lg:py-24">
      <Container className="flex flex-col gap-14">
        <Reveal className="flex flex-col gap-6 pt-1">
          <Eyebrow>Contact Info</Eyebrow>
          <h2 className="font-display text-h2-md leading-[0.9] uppercase text-ink max-lg:text-[clamp(2.25rem,6vw,3.75rem)]">
            Our contact details
          </h2>
        </Reveal>

        <div className="grid gap-px lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the office location in OpenStreetMap"
            className="relative block h-[420px] overflow-hidden border border-ink/10"
          >
            <Image
              src="/images/map-manchester.png"
              alt="Map of Manchester showing the Cube Accountants office"
              fill
              sizes="(min-width: 1024px) 690px, 100vw"
              className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
            />
          </a>
          </Reveal>

          <div className="self-start border-t border-l border-surface/14">
            {details.map((detail, i) => (
              <Reveal
                key={detail.index}
                delay={120 + i * 100}
                className="flex items-start justify-between gap-6 border-r border-b border-surface/14 p-8 transition-colors duration-300 hover:bg-surface/60"
              >
                <div className="flex flex-col gap-2">
                  <Image src={detail.icon} alt="" width={24} height={24} className="size-6" />
                  <h3 className="pt-3 font-display text-h5 uppercase text-ink">{detail.title}</h3>
                  {detail.lines.map((line) => (
                    <p key={line.text} className="text-body text-ink opacity-70">
                      {line.href ? (
                        <a href={line.href} className="transition-colors hover:text-brand">
                          {line.text}
                        </a>
                      ) : (
                        line.text
                      )}
                    </p>
                  ))}
                </div>
                <span className="font-display text-2xl leading-8 font-black text-ink opacity-15">{detail.index}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
