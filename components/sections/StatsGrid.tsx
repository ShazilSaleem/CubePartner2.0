import { CountUp } from "@/components/ui/CountUp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const stats = [
  { value: "30+", label: "Years of Professional Experience" },
  { value: "2", label: "Authorised as Training firm by ICAEW & ACCA" },
  { value: "91%", label: "Employee Satisfaction Score" },
];

type StatsGridProps = {
  className?: string;
  /** Gap between the eyebrow and the stat row: 40px on Home, 48px on Client Area. */
  gapClass?: "gap-10" | "gap-12";
};

/** "Client Satisfaction Score" eyebrow with three brand-ruled statistics that count up on scroll. */
export function StatsGrid({ className, gapClass = "gap-10" }: StatsGridProps) {
  return (
    <div className={cn("flex flex-col", gapClass, className)}>
      <Reveal>
        <Eyebrow className="pt-1">Client Satisfaction Score</Eyebrow>
      </Reveal>
      <div className="grid gap-10 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal key={stat.value} delay={i * 120} className="flex flex-col gap-3 border-t-2 border-brand pt-5">
            <p className="font-display text-figure text-ink max-lg:text-[clamp(2.5rem,7vw,4.5rem)]">
              <CountUp value={stat.value} />
            </p>
            <p className="max-w-[208px] text-body-tight text-ink/60">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
