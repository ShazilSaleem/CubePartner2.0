import Image from "next/image";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  index: string;
  title: string;
  icon: string;
  text: string;
  as?: "h2" | "h3";
  className?: string;
};

/** Grid card from the design: icon + faint index on top, uppercase title and copy below. */
export function ServiceCard({ index, title, icon, text, as: Heading = "h3", className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex min-h-[296px] w-full flex-col justify-between gap-8 border-r border-b border-surface/14 p-10 transition-colors duration-300 hover:bg-surface/60",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className="size-7 transition-transform duration-300 ease-out-expo group-hover:-translate-y-1"
        />
        <span className="font-display text-numeral text-ink/15 transition-colors duration-300 group-hover:text-brand/40">
          {index}
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <Heading className="font-display text-h3 uppercase text-ink">{title}</Heading>
        <p className="text-body-tight text-ink opacity-70">{text}</p>
      </div>
    </article>
  );
}
