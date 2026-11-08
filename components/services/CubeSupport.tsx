import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The eighth item is cut off in the Figma frame ("… peace of mind"); its wording is drafted.
const standards = [
  "Smooth transition from previous accountant",
  "Unlimited email & call support",
  "WhatsApp support – including weekends",
  "24 hour response",
  "Client portal",
  "Deadline reminders – email and text",
  "Fixed monthly fee – direct debit option (5% discount)",
  "Fee protection – peace of mind",
];

/** "How you'll work with us": checklist of what every client gets as standard. */
export function CubeSupport() {
  return (
    <section id="support" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-start lg:max-w-[509px]">
          <SectionHeading
            eyebrow="Cube Support"
            title={
              <>
                How you&apos;ll work
                <br />
                with us
              </>
            }
            intro="Once you're on board, here's what every Cube client gets as standard."
            introClassName="max-w-[386px]"
          />
          <Reveal delay={150} className="pt-8">
            <Button href="/client-area">Visit the Client Hub</Button>
          </Reveal>
        </div>

        <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:w-[714px]">
          {standards.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={(i % 2) * 80}
              className="group flex min-h-24 items-center gap-4 bg-white px-6 py-5 transition-colors duration-300 hover:bg-brand"
            >
              <span className="flex size-8 shrink-0 items-center justify-center bg-brand text-white transition-colors duration-300 group-hover:bg-white group-hover:text-brand">
                <Check aria-hidden="true" className="size-4" strokeWidth={2} />
              </span>
              <span className="font-display text-sm leading-6 font-bold uppercase text-ink transition-colors duration-300 group-hover:text-white">
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
