import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  { letter: "C", title: "Communication", text: "Plain English, prompt replies, and no surprises." },
  { letter: "U", title: "Understand", text: "We take time to learn your business and your goals before we advise." },
  { letter: "B", title: "Build", text: "We help you grow on solid foundations, with accurate numbers and sound planning." },
  { letter: "E", title: "Engage", text: "We stay involved all year round, not just at deadline time." },
];

/** "The principles behind C-U-B-E.": four value cards led by their letter. */
export function Values() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Our values" eyebrowStyle="rule" title="The principles behind C-U-B-E." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal
              key={value.letter}
              delay={i * 90}
              className="group flex min-h-[238px] flex-col border border-ink/10 bg-white p-6 transition-colors duration-300 hover:bg-surface"
            >
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-lg bg-brand font-display text-2xl font-bold text-white"
              >
                {value.letter}
              </span>
              <h3 className="pt-5 font-display text-[28px] leading-[35px] font-medium text-ink">
                {value.title}
              </h3>
              <p className="max-w-[223px] pt-3 text-sm leading-[21.5px] text-ink/70">
                {value.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
