import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote: "\"Nowadays, it isn't great uncommon to see lenders rapidly adopting.\"",
    name: "David Gilroy",
  },
  {
    quote: "\"Nowadays, it isn't great uncommon to see lenders rapidly adopting.\"",
    name: "Kyle Silverdale",
  },
  {
    quote: "\"Nowadays, it isn't great uncommon to see lenders rapidly adopting.\"",
    name: "Millie Holland",
  },
];

export function Testimonials() {
  return (
    <section className="pt-20 lg:pt-section">
      <Container className="flex flex-col gap-14">
        <Reveal className="flex flex-col gap-6 pt-1">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="max-w-[672px] font-display text-h2 uppercase text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
            Trusted by our
            <br />
            clients
          </h2>
          <p className="max-w-[576px] text-body text-ink/60">
            Join us to access resources, a supportive community, and growth opportunities with a
            leading accountancy firm.
          </p>
        </Reveal>

        <div className="grid border-t border-l border-surface/14 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              as="figure"
              delay={i * 120}
              className="flex min-h-[224px] flex-col justify-between gap-6 border-r border-b border-surface/14 p-10 transition-colors duration-300 hover:bg-surface/60"
            >
              <blockquote className="text-xl leading-[1.375] font-medium text-ink">{testimonial.quote}</blockquote>
              <figcaption className="flex flex-col gap-4">
                <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Image key={star} src="/icons/icon-star.svg" alt="" width={14} height={14} className="size-3.5" />
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
