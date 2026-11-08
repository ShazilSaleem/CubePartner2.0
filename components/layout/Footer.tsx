import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { mainNav, networkLinks, site } from "@/lib/site";

const heading = "font-display text-[13px] font-semibold uppercase text-footer-ink";
const link = "text-xs leading-[29.4px] uppercase text-footer-text transition-colors hover:text-brand";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-footer">
      <Container>
        <div className="grid gap-10 pt-[76px] pb-[85px] sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div className="flex flex-col gap-[23px]">
            <Link href="/" aria-label="Cube Accountants home" className="self-start">
              <Image
                src="/images/cube-partner-logo.svg"
                alt="Cube Accountants"
                width={142}
                height={32}
                className="h-[32.08px] w-[142px]"
              />
            </Link>
            <p className="max-w-60 text-[13px] leading-[22.1px] text-footer-text">
              Expert accounting support for businesses and individuals in Manchester.
            </p>
          </div>

          <nav aria-label="Explore" className="flex flex-col pt-1">
            <h2 className={heading}>Explore</h2>
            <ul className="pt-[22px]">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our network" className="flex flex-col pt-1">
            <h2 className={heading}>Our Network</h2>
            <ul className="pt-[22px]">
              {networkLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col pt-1">
            <h2 className={heading}>Get in touch</h2>
            <ul className="pt-[22px]">
              <li>
                <a href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className={link}>
                  {site.phoneIntl}
                </a>
              </li>
              <li className="text-xs leading-[29.4px] uppercase text-footer-text">{site.footerAddress}</li>
            </ul>
          </div>
        </div>

        <div className="flex min-h-[68px] flex-col gap-3 border-t border-footer-border py-6 lg:flex-row lg:items-center lg:justify-between lg:pr-5">
          <p className="text-[11px] leading-[16.5px] text-footer-text">
            © {new Date().getFullYear()} Cube Accountants. All rights reserved.
          </p>
          <p className="max-w-[642px] text-xs leading-5 text-footer-muted">
            Cube Accountants Limited takes no responsibility for information taken from our website
            without prior professional consultation. Registered in England and Wales.
          </p>
        </div>
      </Container>
    </footer>
  );
}
