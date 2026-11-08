import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /**
   * primary: brand fill, darkens on hover.
   * outline: ink outline, fills with ink on hover (hero "Services").
   * ghost: ink outline, fills with white on hover (used on the warm grey surface).
   * small: header "Log In".
   */
  variant?: "primary" | "outline" | "ghost" | "small";
  arrow?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-brand px-8 py-4 text-button text-brand-foreground hover:bg-brand-dark",
  outline: "border border-ink/30 px-8 py-4 text-button text-ink hover:bg-ink hover:text-white",
  ghost: "border border-ink/30 px-8 py-4 text-button text-ink hover:bg-white",
  small: "gap-2 bg-brand px-6 py-3 text-nav text-brand-foreground hover:bg-brand-dark",
};

// Figma hover variants widen the label-to-arrow gap from 12px to 16px, nudging the arrow right.
export function Button({ href, children, variant = "primary", arrow = true, className }: ButtonProps) {
  const lightArrow = variant === "primary" || variant === "small";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 font-display uppercase transition-colors duration-300 ease-out-expo",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className={cn(
            "relative size-4 shrink-0 transition-transform duration-300 ease-out-expo",
            variant !== "small" && "group-hover:translate-x-1",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightArrow ? "/icons/icon-arrow-light.svg" : "/icons/icon-arrow-dark.svg"}
            alt=""
            width={16}
            height={16}
            className={cn("absolute inset-0", variant === "outline" && "transition-opacity group-hover:opacity-0")}
          />
          {variant === "outline" && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/icons/icon-arrow-light.svg"
              alt=""
              width={16}
              height={16}
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          )}
        </span>
      )}
    </Link>
  );
}
