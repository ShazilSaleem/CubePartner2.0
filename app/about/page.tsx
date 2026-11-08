import type { Metadata } from "next";
import { Faq } from "@/components/about/Faq";
import { TeamSection } from "@/components/about/TeamSection";
import { Testimonials } from "@/components/about/Testimonials";
import { Values } from "@/components/about/Values";
import { MissionStatement } from "@/components/home/MissionStatement";
import { Stats } from "@/components/home/Stats";
import { Network } from "@/components/sections/Network";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the people, values and vision behind Cube Accountants, chartered accountants in Manchester.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Cube"
        title={
          <>
            Our story, <span className="text-brand">your success</span>
          </>
        }
        lead="Discover the people, values and vision behind our firm."
        actions={<Button href="/contact">Contact us now</Button>}
      />
      <TeamSection />
      <MissionStatement />
      <Values />
      <Testimonials />
      <Stats />
      <Faq />
      <Network />
    </>
  );
}
