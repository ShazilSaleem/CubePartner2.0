import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CubeSupport } from "@/components/services/CubeSupport";
import { FeeEstimator } from "@/components/services/FeeEstimator";
import { Onboarding } from "@/components/services/Onboarding";
import { Process } from "@/components/services/Process";
import { SectorsCarousel } from "@/components/services/SectorsCarousel";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { TeamTeaser } from "@/components/services/TeamTeaser";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Accounts, audit, business advisory, payroll, tax planning, bookkeeping and VAT, company secretarial and sector specialist services from Cube Accountants.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Tailor made
            <br />
            <span className="text-brand">services</span>
          </>
        }
        lead="At Cube Accountants we offer a range of services to suit our clients' needs. What makes our services unique is the ability to communicate effectively with our clients to understand their needs and build a solid relationship."
        actions={<Button href="/contact">Contact us now</Button>}
      />
      <Process />
      <TeamTeaser />
      <ServicesGrid />
      <SectorsCarousel />
      <FeeEstimator />
      <Onboarding />
      <CubeSupport />
    </>
  );
}
