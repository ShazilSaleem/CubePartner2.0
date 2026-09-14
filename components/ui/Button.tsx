import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "small";
  arrow?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-brand px-8 py-4 text-button text-brand-foreground hover:bg-ink",
  outline: "border border-ink/30 px-8 py-4 text-button text-ink hover:border-ink",
  small: "bg-brand px-6 py-3 text-nav text-brand-foreground hover:bg-ink",
};

export function Button({ href, children, variant = "primary", arrow = true, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 font-display uppercase transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <span aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
