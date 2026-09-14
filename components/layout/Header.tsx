"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { mainNav, secondaryNav } from "@/lib/site";

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
          {secondaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-display text-nav uppercase text-ink/50 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/client-area" variant="small" arrow={false}>
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
            {[...mainNav, ...secondaryNav].map((item) => (
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
            <Button href="/client-area" variant="small" arrow={false} className="mt-3 self-start">
              Log In
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
