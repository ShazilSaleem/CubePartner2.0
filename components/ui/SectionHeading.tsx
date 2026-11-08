import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** "rule" prefixes the eyebrow with a short brand line (About values, Contact). */
  eyebrowStyle?: "plain" | "rule";
  className?: string;
  introClassName?: string;
};

/** Eyebrow, 58px Outfit Medium title and slate intro, as used across the redesign. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  eyebrowStyle = "plain",
  className,
  introClassName,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-col items-start", className)}>
      {eyebrowStyle === "rule" ? (
        <div className="flex items-center gap-3 pt-1">
          <span aria-hidden="true" className="h-px w-8 bg-brand" />
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : (
        <Eyebrow className="pt-1">{eyebrow}</Eyebrow>
      )}
      <h2 className="pt-6 font-display text-title text-ink max-lg:text-[clamp(2.25rem,6vw,3.625rem)]">{title}</h2>
      {intro && <p className={cn("max-w-[515px] pt-6 text-copy text-slate", introClassName)}>{intro}</p>}
    </Reveal>
  );
}
