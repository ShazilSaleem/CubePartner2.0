import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h2" | "h3" | "span";
};

/** 11.2px Outfit Bold, 0.28em tracking, uppercase, brand red. */
export function Eyebrow({ children, className, as: Tag = "p" }: EyebrowProps) {
  return (
    <Tag className={cn("font-display text-eyebrow uppercase text-brand", className)}>
      {children}
    </Tag>
  );
}
