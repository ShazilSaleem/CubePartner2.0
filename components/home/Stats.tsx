import Image from "next/image";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="pb-20 lg:pt-5 lg:pb-28">
      <Container className="flex flex-col gap-14 lg:flex-row lg:items-end">
        <StatsGrid className="flex-1 lg:pb-6" />
        <Reveal delay={200} className="relative h-[380px] w-full shrink-0 overflow-hidden lg:w-[520px]">
          <Image
            src="/images/hero-meeting.jpg"
            alt="Cube Accountants advisers meeting a client in the Manchester office"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover grayscale transition-[filter,transform] duration-700 ease-out-expo hover:scale-[1.03] hover:grayscale-0"
          />
        </Reveal>
      </Container>
    </section>
  );
}
