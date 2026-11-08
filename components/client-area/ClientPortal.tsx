import {
  Bot,
  CalendarClock,
  CreditCard,
  Library,
  MessageCircle,
  Upload,
  Video,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portalUrl } from "@/lib/site";

const actions: { label: string; icon: LucideIcon }[] = [
  { label: "Make a payment", icon: CreditCard },
  { label: "Contact the team", icon: MessageCircle },
  { label: "Book a virtual meeting", icon: Video },
  { label: "Upload documents", icon: Upload },
  { label: "Key deadlines", icon: CalendarClock },
  { label: "Library resources", icon: Library },
  { label: "Ask a question – AI", icon: Bot },
];

/** "01 / Client Portal": portal actions and login on the left, overview video on the right. */
export function ClientPortal() {
  return (
    <section id="portal" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-start lg:w-[612px]">
          <SectionHeading
            eyebrow="01 / Client Portal"
            title={
              <>
                Everything in
                <br />
                one place
              </>
            }
            intro="The Cube portal is your secure, 24/7 window into your accounts. Watch the short overview, then log in."
            introClassName="max-w-[430px] text-sm leading-7"
          />
          <ul className="mt-6 grid w-full grid-cols-2 sm:grid-cols-3">
            {actions.map((action, i) => {
              const Icon = action.icon;
              return (
                <Reveal
                  as="li"
                  key={action.label}
                  delay={(i % 3) * 70}
                  className="border-b border-ink/10 [&:not(:nth-child(3n+1))]:sm:border-l"
                >
                  <a
                    href={portalUrl}
                    className="group flex h-24 flex-col justify-center gap-4 px-5 transition-colors duration-300 hover:bg-brand"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-[18px] text-brand transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.75}
                    />
                    <span className="font-display text-xs leading-4 font-semibold uppercase text-ink transition-colors duration-300 group-hover:text-white">
                      {action.label}
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </ul>
          <Reveal delay={150} className="pt-12">
            <Button href={portalUrl}>Login now</Button>
          </Reveal>
        </div>

        <Reveal delay={120} className="w-full lg:mt-[166px] lg:w-[612px]">
          {/* Overview video placeholder: no video file exists in the design yet. */}
          <button
            type="button"
            aria-label="Play the client portal overview video"
            className="group relative block aspect-[612/342] w-full overflow-hidden shadow-[0_24px_40px_-20px_rgb(20_17_16/0.3)]"
          >
            <Image
              src="/images/office-parkway.jpg"
              alt="Parkway Two, home of the Cube Accountants Manchester office"
              fill
              sizes="(min-width: 1024px) 612px, 100vw"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
            />
            <span className="absolute top-1/2 left-1/2 flex size-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
              <span className="ml-1 size-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-ink/80" />
            </span>
          </button>
        </Reveal>
      </Container>
    </section>
  );
}
