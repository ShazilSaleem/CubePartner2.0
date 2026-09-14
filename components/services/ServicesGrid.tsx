import { ServiceCard } from "@/components/sections/ServiceCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    index: "01",
    title: "Accounts",
    icon: "/icons/icon-service-accounts.svg",
    text: "Year end accounts prepared accurately and on time, with clear commentary on what the numbers mean for your business.",
  },
  {
    index: "02",
    title: "Audit",
    icon: "/icons/icon-service-audit.svg",
    text: "Streamlined statutory and voluntary audits with transparent progress tracking and minimal disruption.",
  },
  {
    index: "03",
    title: "Business Advisory",
    icon: "/icons/icon-service-business-advisory.svg",
    text: "Data driven decision making, scenario analysis and goal tracking to help your business grow with confidence.",
  },
  {
    index: "04",
    title: "Payroll",
    icon: "/icons/icon-service-payroll.svg",
    text: "Fully managed payroll, RTI submissions, pensions auto-enrolment and payslip distribution.",
  },
  {
    index: "05",
    title: "Tax Planning",
    icon: "/icons/icon-service-tax-planning.svg",
    text: "Personal and corporate tax planning that keeps you compliant while making the most of available reliefs.",
  },
  {
    index: "06",
    title: "Bookkeeping & VAT",
    icon: "/icons/icon-service-bookkeeping-vat.svg",
    text: "Cloud bookkeeping, Making Tax Digital VAT returns and real time visibility of your position.",
  },
  {
    index: "07",
    title: "Company Secretarial",
    icon: "/icons/icon-service-company-secretarial.svg",
    text: "Company formations, confirmation statements and Companies House filings handled for you.",
  },
  {
    index: "08",
    title: "Sector Specialists",
    icon: "/icons/icon-service-sector-specialists.svg",
    text: "Healthcare, legal, property, transport, catering, contractors and freelancers — we know your sector.",
  },
];

export function ServicesGrid() {
  return (
    <section className="pb-20 lg:pb-section">
      <Container>
        <div className="grid border-t border-l border-surface/14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={(i % 4) * 90} className="flex">
              <ServiceCard as="h2" className="min-h-[320px]" {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
