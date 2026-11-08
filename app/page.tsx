import { ClientTypes } from "@/components/home/ClientTypes";
import { Hero } from "@/components/home/Hero";
import { MissionStatement } from "@/components/home/MissionStatement";
import { Stats } from "@/components/home/Stats";
import { WhyCube } from "@/components/home/WhyCube";
import { Network } from "@/components/sections/Network";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <ClientTypes />
      <WhyCube />
      <Stats />
      <Network />
    </>
  );
}
