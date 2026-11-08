"use client";

import { RotateCcw, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { feeItems, formatGBP } from "@/lib/fees";

const initialQuantities = () => Object.fromEntries(feeItems.map((item) => [item.id, item.initial]));

export function FeeEstimator() {
  const [quantities, setQuantities] = useState<Record<string, number>>(initialQuantities);
  const [confirmed, setConfirmed] = useState(false);

  const lines = feeItems
    .map((item) => ({ ...item, total: (quantities[item.id] || 0) * item.rate }))
    .filter((line) => line.total > 0);
  const total = lines.reduce((sum, line) => sum + line.total, 0);
  const hasHourly = lines.some((line) => line.hourly);
  const canRequest = total > 0 && (!hasHourly || confirmed);

  return (
    <section id="quote" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Get a quote"
          title="Fee estimator"
          intro="Enter your monthly volume. Year-end fees are per completed assignment, not a recurring monthly charge."
        />

        <Reveal className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex flex-1 flex-col">
            <div className="grid gap-x-6 gap-y-[22px] sm:grid-cols-2">
              {feeItems.map((item) => (
                <label key={item.id} className="flex flex-col gap-2.5">
                  <span className="text-sm leading-5 font-medium text-ink">{item.label}</span>
                  <input
                    type="number"
                    min={0}
                    inputMode="numeric"
                    value={quantities[item.id]}
                    onChange={(e) =>
                      setQuantities((q) => ({ ...q, [item.id]: Math.max(0, Number(e.target.value) || 0) }))
                    }
                    className="h-[46px] w-full border border-ink/15 bg-white px-4 text-sm text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <span className="text-xs leading-4 text-ink/50">{item.unit}</span>
                </label>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setQuantities(initialQuantities());
                setConfirmed(false);
              }}
              className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              Reset quantities
            </button>
          </div>

          <aside
            aria-live="polite"
            className="flex flex-col border border-ink/15 p-8 lg:sticky lg:top-28 lg:w-[496px]"
          >
            <h3 className="font-display text-xl leading-7 font-bold tracking-[-0.035em] text-ink">
              Your monthly estimate
            </h3>
            <p className="pt-4 font-display text-[48px] leading-[48px] font-black tracking-[-0.05em] text-brand">
              {formatGBP(total)}
            </p>
            <p className="pt-1 text-xs leading-4 text-ink/55">GBP · estimated fees for the volume entered</p>

            <dl className="mt-8 border-t border-ink/10">
              {lines.map((line) => (
                <div key={line.id} className="flex justify-between gap-4 border-b border-ink/10 py-3 text-sm leading-5">
                  <dt className="text-ink/70">{line.label}</dt>
                  <dd className="font-semibold text-ink">{formatGBP(line.total)}</dd>
                </div>
              ))}
            </dl>

            <p className="flex items-start gap-2 pt-6 text-xs leading-5 text-ink/75">
              <TriangleAlert aria-hidden="true" className="size-4 shrink-0 text-brand" />
              The same work is never billed both hourly and at a fixed fee.
            </p>
            <label className="flex items-start gap-2.5 pt-4 text-xs leading-5 text-ink">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 size-3.5 shrink-0 accent-brand"
              />
              I confirm hourly support is for separate work, not included in fixed fees.
            </label>
            <p className="pt-4 text-[11px] leading-[17px] text-ink/50">
              Subject to record review and written scope. This estimate is not a quote or contract.
            </p>

            <Link
              href={canRequest ? "/contact" : "#quote"}
              aria-disabled={!canRequest}
              onClick={(e) => !canRequest && e.preventDefault()}
              className={cn(
                "mt-6 flex h-12 items-center justify-center font-display text-button uppercase transition-colors duration-300",
                canRequest
                  ? "bg-brand text-brand-foreground hover:bg-brand-dark"
                  : "cursor-not-allowed bg-ink/20 text-ink/55",
              )}
            >
              Request a scoped quote →
            </Link>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
