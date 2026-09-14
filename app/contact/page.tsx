import type { Metadata } from "next";
import { Consultation } from "@/components/contact/Consultation";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { OfficePhotos } from "@/components/sections/OfficePhotos";
import { PageHero } from "@/components/sections/PageHero";
import { officePhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cube Accountants in Manchester for expert accounting advice and a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s connect
            <br />
            <span className="text-brand">&amp;</span>
            <br />
            <span className="text-brand">collaborate</span>
          </>
        }
        lead="Have questions or need expert advice? Our team is here to guide you through every financial challenge. Reach out today, and let's build a successful future together."
        cta={{ label: "Contact Us now", href: "#consultation" }}
        aside={<OfficePhotos images={officePhotos} />}
      />
      <ContactDetails />
      <Consultation />
    </>
  );
}
