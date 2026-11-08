import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { title: "Tell us about you", text: "Share a few details about your business and the services you need." },
  {
    title: "We contact your previous accountant",
    text: "We request professional clearance and collect your records — no awkward conversations.",
  },
  { title: "Sign your engagement letter", text: "A clear, fixed-fee scope of work signed digitally in minutes." },
  { title: "Ready to go", text: "Your portal is set up and your dedicated team takes it from here." },
];

/** "Switching in 4 simple steps": numbered columns split by hairlines. */
export function Onboarding() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Onboarding"
          title={
            <>
              Switching in
              <br />4 simple steps
            </>
          }
        />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 90}
              className="group flex min-h-[269px] flex-col border-ink/10 px-8 py-8 transition-colors duration-300 not-first:border-l hover:bg-brand max-lg:border-t"
            >
              <p aria-hidden="true" className="font-display text-numeral-lg text-brand transition-colors duration-300 group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="max-w-[256px] pt-7 font-display text-card-title uppercase text-ink transition-colors duration-300 group-hover:text-white">{step.title}</h3>
              <p className="max-w-[256px] pt-5 text-body-tight text-ink/70 transition-colors duration-300 group-hover:text-white">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
