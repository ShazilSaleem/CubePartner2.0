"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { mainNav, networkLinks } from "@/lib/site";

/** "Our Network" menu: opens on hover or click, closes on outside click or Escape. */
function NetworkMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="network-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 py-3 font-display text-nav uppercase text-ink/70 transition-colors hover:text-ink"
      >
        Our Network
        <Image
          src="/icons/icon-chevron-down.svg"
          alt=""
          width={16}
          height={16}
          className={cn("size-4 transition-transform duration-300 ease-out-expo", open && "rotate-180")}
        />
      </button>
      {open && (
        <ul
          id="network-menu"
          className="animate-menu-in absolute top-full right-0 min-w-48 border border-ink/10 bg-white py-2 shadow-card"
        >
          {networkLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-2.5 font-display text-nav uppercase text-ink/70 transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-header">
      <Container className="flex h-header items-center justify-between">
        <Link href="/" aria-label="Cube Accountants home" className="shrink-0">
          <Image
            src="/images/cube-partner-logo.svg"
            alt="Cube Accountants"
            width={184}
            height={42}
            priority
            className="h-[41.6px] w-[184px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "font-display text-nav uppercase transition-colors hover:text-ink",
                isActive(item.href) ? "text-brand" : "text-ink/70",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <NetworkMenu />
          <Button href="/client-area" variant="small">
            Log In
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex size-11 items-center justify-center text-ink lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={cn("h-0.5 w-full bg-current transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-full bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("h-0.5 w-full bg-current transition-transform", open && "-translate-y-2 -rotate-45")} />
          </span>
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="animate-menu-in border-t border-ink/10 bg-white lg:hidden">
          <Container className="flex flex-col py-4">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 font-display text-nav uppercase",
                  isActive(item.href) ? "text-brand" : "text-ink/70",
                )}
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-4 pb-1 font-display text-nav uppercase text-ink/40">Our Network</p>
            {networkLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-nav uppercase text-ink/70"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/client-area" variant="small" className="mt-3 self-start">
              Log In
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
