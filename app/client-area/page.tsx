import type { Metadata } from "next";
import { ClientPortal } from "@/components/client-area/ClientPortal";
import { Communication } from "@/components/client-area/Communication";
import { Deadlines } from "@/components/client-area/Deadlines";
import { Resources } from "@/components/client-area/Resources";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Hub",
  description:
    "Log in to the Cube Accountants client portal, talk to your team, watch our tax guides and see every key UK deadline.",
};

const sections = [
  { label: "01 Client Portal", href: "#portal" },
  { label: "02 Communication", href: "#communication" },
  { label: "03 Cube Resources", href: "#resources" },
  { label: "04 Calendar", href: "#calendar" },
];

export default function ClientHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Hub"
        title={
          <>
            Welcome to your
            <br />
            <span className="text-brand">Client Hub</span>
          </>
        }
        lead="Log in to our secure client portal to view your documents, check your deadlines and message our team, whenever it suits you."
        image="/images/client-area-hero.jpg"
        imagePosition="right center"
        actions={
          <>
            <Button href={portalUrl}>Login to portal</Button>
            <Button href="#resources" variant="outline">
              Cube resources
            </Button>
          </>
        }
      >
        <Reveal delay={420} className="mt-14">
          <nav aria-label="Client Hub sections" className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="flex h-[60px] items-center bg-white/70 px-5 font-display text-sm font-bold uppercase tracking-[-0.02em] text-brand backdrop-blur-sm transition-colors duration-300 hover:bg-brand hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </Reveal>
      </PageHero>
      <ClientPortal />
      <Communication />
      <Resources />
      <Deadlines />
    </>
  );
}
