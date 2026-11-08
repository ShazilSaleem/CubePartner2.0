import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Static map image from the original design, linking out to OpenStreetMap.
// The zoom buttons mirror the Figma frame and open the live map.
const mapLink = "https://www.openstreetmap.org/?mlat=53.4385&mlon=-2.2560#map=15/53.4385/-2.2560";

export function OfficeMap() {
  return (
    <section id="map" className="scroll-mt-24 pb-20 lg:pb-28">
      <Container>
        <Reveal className="relative h-[420px] overflow-hidden border border-ink/10">
          <a href={mapLink} target="_blank" rel="noopener noreferrer" aria-label="Open the office location in OpenStreetMap">
            <Image
              src="/images/map-manchester.png"
              alt="Map of Manchester showing the Cube Accountants office at Parkway Two"
              fill
              sizes="(min-width: 1440px) 1280px, 100vw"
              className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
            />
          </a>
          <div className="absolute top-2.5 right-2.5 flex flex-col border border-ink/15 bg-white">
            {[Plus, Minus].map((Icon, i) => (
              <a
                key={i}
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={i === 0 ? "Zoom in on the live map" : "Zoom out on the live map"}
                className="flex size-[30px] items-center justify-center text-ink transition-colors not-first:border-t not-first:border-ink/15 hover:bg-surface"
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
