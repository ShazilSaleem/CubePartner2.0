import type { Metadata } from "next";
import { Benefits } from "@/components/sections/Benefits";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/services/Process";
import { ServicesGrid } from "@/components/services/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Accounts, audit, business advisory, payroll, tax planning, bookkeeping and VAT, company secretarial and sector specialist services from Cube Accountants in Manchester.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Tailor made
            <br />
            <span className="text-brand">services</span>
          </>
        }
        lead="At Cube Accountants we offer a range of services to suit our clients' needs. What makes our services unique is the ability to communicate effectively with our clients to understand their needs and build a solid relationship."
        cta={{ label: "Contact Us now", href: "/contact" }}
      />
      <ServicesGrid />
      <Process />
      <Benefits />
    </>
  );
}
