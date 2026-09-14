import { Benefits } from "@/components/sections/Benefits";
import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/sections/Mission";
import { Sectors } from "@/components/home/Sectors";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Services />
      <Sectors />
      <Stats />
      <Benefits />
    </>
  );
}
