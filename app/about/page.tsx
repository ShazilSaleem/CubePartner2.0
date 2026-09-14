import type { Metadata } from "next";
import { Faq } from "@/components/about/Faq";
import { Platforms } from "@/components/about/Platforms";
import { TeamSection } from "@/components/about/TeamSection";
import { Testimonials } from "@/components/about/Testimonials";
import { Values } from "@/components/about/Values";
import { Mission } from "@/components/sections/Mission";
import { OfficePhotos } from "@/components/sections/OfficePhotos";
import { PageHero } from "@/components/sections/PageHero";
import { officePhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the people, values and vision behind Cube Accountants, chartered accountants in Manchester.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Cube"
        decor="left"
        title={
          <>
            Our story,
            <br />
            <span className="text-brand">your success</span>
          </>
        }
        lead="Discover the people, values and vision behind our firm."
        cta={{ label: "Explore more", href: "#team" }}
        aside={<OfficePhotos images={officePhotos} />}
      />
      <TeamSection />
      <Mission />
      <Values />
      <Platforms />
      <Testimonials />
      <Faq />
    </>
  );
}
