import Image from "next/image";
import { site } from "@/lib/site";

/** Floating "Chat on WhatsApp" action from the design: 56px brand square, bottom right. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex size-14 items-center justify-center bg-brand shadow-brand transition-colors hover:bg-brand-dark"
    >
      <Image src="/icons/icon-whatsapp.svg" alt="" width={24} height={24} className="size-6" />
    </a>
  );
}
