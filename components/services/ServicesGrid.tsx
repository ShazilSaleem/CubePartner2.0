import {
  BriefcaseBusiness,
  Building2,
  Calculator,
  ChartColumn,
  ClipboardCheck,
  FileText,
  Landmark,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Account",
    text: "Year end accounts prepared accurately and on time, with clarity on what the numbers mean.",
    icon: ChartColumn,
  },
  {
    title: "Audit",
    text: "Statutory and voluntary audits with transparent progress tracking and minimal disruption.",
    icon: ClipboardCheck,
  },
  {
    title: "Business Advisory",
    text: "Forecasting, scenario planning and goal tracking to help your business grow with confidence.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Payroll",
    text: "Fully managed payroll, RTI submissions, pensions auto-enrolment and payslips.",
    icon: Wallet,
  },
  {
    title: "Tax Planning",
    text: "Personal and corporate tax planning that keeps you compliant and uses every relief.",
    icon: Calculator,
  },
  {
    title: "Bookkeeping & VAT",
    text: "Cloud bookkeeping and Making Tax Digital VAT returns with real-time visibility.",
    icon: FileText,
  },
  {
    title: "Company Secretarial",
    text: "Company formations, confirmation statements and Companies House filings.",
    icon: Landmark,
  },
  {
    title: "Sector Specialists",
    text: "Care, property, healthcare, travel, retail and many more professional services.",
    icon: Building2,
  },
];

/** "What we do": eight service cards, 4 × 2, on hairline borders. */
export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow="Our services" title="What we do" />
        <div className="grid border-t border-l border-grid sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={(i % 4) * 90}
                className="group flex min-h-[288px] flex-col border-r border-b border-grid p-10 transition-colors duration-300 hover:bg-brand"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    aria-hidden="true"
                    className="size-7 text-brand transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                  <p
                    aria-hidden="true"
                    className="font-display text-numeral text-ink/15 transition-colors duration-300 group-hover:text-white"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="pt-14 font-display text-card-title uppercase text-ink transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="pt-4 text-body-tight text-ink/70 transition-colors duration-300 group-hover:text-white">
                  {service.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
