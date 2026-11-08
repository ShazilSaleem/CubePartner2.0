import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const network = [
  {
    name: "Cube Partners",
    text: "Cube Partners connects businesses to achieve extraordinary results.",
    logo: "/images/cube-partner-purple.svg",
    href: "#",
  },
  {
    name: "Cube Academy",
    text: "Learning and development for the next generation of professionals.",
    logo: "/images/cube-academy-blue.svg",
    href: "#",
  },
];

/** "Beyond Partnership" band shown above the footer on Home and About. */
export function Network() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[90px]">
        <Reveal className="flex flex-1 flex-col gap-5">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-[27px] bg-ink" />
            <p className="text-[10px] leading-[13px] font-bold tracking-[0.12em] uppercase text-ink">
              Beyond Partnership
            </p>
          </div>
          <h2 className="pt-[3px] font-display text-title-lg text-ink max-lg:text-[clamp(2.25rem,6.5vw,3.875rem)]">
            One network.
            <br />
            <span className="text-brand">Learn. Grow. Launch.</span>
          </h2>
          <p className="max-w-[430px] text-sm leading-[24.5px] text-ink/62">
            Learn with Cube Academy, grow with Cube Accountants, launch with Cube Partners.
          </p>
        </Reveal>

        <ul className="flex flex-1 flex-col border-t border-white/24">
          {network.map((item, i) => (
            <Reveal as="li" key={item.name} delay={120 + i * 100}>
              <Link
                href={item.href}
                className="group flex items-center gap-[25px] border-b border-white/24 py-[27px]"
              >
                <span className="flex min-h-[52px] w-[130px] shrink-0 items-center justify-center bg-footer px-[13px] py-[14px] transition-shadow duration-300 group-hover:shadow-card">
                  <Image src={item.logo} alt="" width={104} height={24} className="h-[23.5px] w-[104px]" />
                </span>
                <span className="flex flex-1 flex-col gap-1">
                  <span className="font-display text-lg leading-[27px] font-medium text-ink">{item.name}</span>
                  <span className="text-xs leading-[21px] text-ink/62">{item.text}</span>
                </span>
                <Image
                  src="/icons/icon-arrow-brand.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="size-[22px] shrink-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
