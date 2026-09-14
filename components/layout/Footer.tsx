import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { footerLinks, site, socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface">
      <Container className="flex flex-col gap-12 pt-24">
        <Link href="/" aria-label="Cube Accountants home" className="self-start">
          <Image
            src="/images/cube-partner-logo.svg"
            alt="Cube Accountants"
            width={184}
            height={42}
            className="h-[41.6px] w-[184px]"
          />
        </Link>
        <p aria-hidden="true" className="font-display text-wordmark uppercase text-ink/5 max-lg:text-[22vw]">
          Cube
        </p>
      </Container>

      <Container className="grid gap-12 pt-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Eyebrow as="h3">Contact Us</Eyebrow>
          <address className="pt-3 text-body text-ink/70 not-italic">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="pt-1 text-small text-ink/70">
            Telephone:{" "}
            <a href={`tel:${site.phoneHref}`} className="hover:text-ink">
              {site.phone}
            </a>
          </p>
          <p className="text-small text-ink/70">
            Email:
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Eyebrow as="h3">Disclaimer</Eyebrow>
          <p className="pt-2 text-body text-ink/60">
            Cube Accountants takes no responsibility for information taken from our website without
            prior professional consultation with us.
          </p>
          <p className="text-body text-ink/60">
            Cube Accountants Limited is a company registered in England and Wales, Company No:{" "}
            {site.companyNumber}.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Eyebrow as="h3">Useful Links</Eyebrow>
          <ul className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-small text-ink/75 transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <Eyebrow as="h3">Follow Us</Eyebrow>
          <div className="flex gap-px">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-11 items-center justify-center bg-ink/10 transition-colors hover:bg-ink/20"
              >
                <Image src={social.icon} alt="" width={16} height={16} className="size-4" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-start gap-3 pt-4">
            <div className="w-full border border-ink/15 px-5 py-3">
              <p className="font-display text-sm leading-5 font-bold tracking-[0.025em] text-ink">ICAEW</p>
              <p className="font-display text-eyebrow uppercase text-ink/60">Chartered Accountants</p>
            </div>
            <div className="bg-white px-6 py-3">
              <p className="font-display text-lg leading-7 font-black tracking-badge text-ink">BAS</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-ink/10">
        <Container className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-legal uppercase text-ink/45">
            © {new Date().getFullYear()} Cube Accountants Limited
          </p>
          <p className="font-display text-legal uppercase text-ink/45">Chartered Accountants · Manchester, UK</p>
        </Container>
      </div>
    </footer>
  );
}
