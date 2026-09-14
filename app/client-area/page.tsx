import type { Metadata } from "next";
import { ClientAreaHero } from "@/components/client-area/ClientAreaHero";
import { ClientStats } from "@/components/client-area/ClientStats";
import { DigitalPromotion } from "@/components/client-area/DigitalPromotion";
import { Benefits } from "@/components/sections/Benefits";

export const metadata: Metadata = {
  title: "Client Area",
  description:
    "Access the Cube Accountants client portal, app and video resources, and see the benefits our clients enjoy.",
};

export default function ClientAreaPage() {
  return (
    <>
      <ClientAreaHero image="/images/client-area-hero.jpg" />
      <Benefits />
      <DigitalPromotion />
      <ClientStats />
    </>
  );
}
