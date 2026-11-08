import type { Metadata } from "next";
import { OfficeMap } from "@/components/contact/OfficeMap";
import { SayHello } from "@/components/contact/SayHello";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cube Accountants in Manchester by email, phone or WhatsApp, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s connect &amp; <span className="text-brand">collaborate</span>
          </>
        }
        lead="Have questions or need expert advice? Our team is here to guide you through every financial challenge. Reach out today, and let's build a successful future together."
        actions={<Button href="#say-hello">Contact us now</Button>}
      />
      <div id="say-hello" className="scroll-mt-20">
        <SayHello />
      </div>
      <OfficeMap />
    </>
  );
}
