import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Client names are "xxxxxx" in the Figma frame; replace with real attributions.
const testimonials = [
  {
    quote:
      "Cube have looked after our accounts for over 8 years. They understand how the sector works & explain everything in plain English.",
    name: "xxxxxx - Director",
  },
  {
    quote:
      "Our ATOL reporting used to be a stressful time of year. Cube made the process clear and kept us on track for the deadline.",
    name: "xxxxxx - Director",
  },
  {
    quote:
      "Quick to respond and always happy to talk things through. It feels like dealing with a person rather than a firm.",
    name: "xxxxxx - Director",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by
              <br />
              our clients
            </>
          }
          intro="Join us to access resources, a supportive community, and growth opportunities with a leading accountancy firm."
          introClassName="max-w-[559px]"
        />

        <div className="grid gap-px border border-grid bg-grid md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.quote}
              as="figure"
              delay={i * 120}
              className="flex min-h-[279px] flex-col justify-between gap-6 bg-white p-10 transition-colors duration-300 hover:bg-surface"
            >
              <blockquote className="text-lg leading-[27.5px] text-ink">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className="flex flex-col gap-3">
                <div className="flex gap-1 text-brand" role="img" aria-label="Rated 5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} aria-hidden="true" className="size-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-display text-eyebrow uppercase text-ink/50">{testimonial.name}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
