import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const deadlines = [
  { when: "31 Jan", category: "Personal tax", text: "Self Assessment online return & balancing payment" },
  { when: "5 Apr", category: "Tax year", text: "End of the UK tax year" },
  { when: "31 May", category: "Payroll", text: "Give employees their P60s" },
  { when: "6 Jul", category: "Payroll", text: "P11D & P11D(b) submissions due" },
  { when: "31 Jul", category: "Personal tax", text: "Second payment on account" },
  { when: "5 Oct", category: "Personal tax", text: "Register for Self Assessment (new)" },
  { when: "31 Oct", category: "Personal tax", text: "Paper Self Assessment returns" },
  { when: "Monthly 22nd", category: "Payroll", text: "PAYE & NIC payment (electronic)" },
  { when: "1 month + 7 days", category: "VAT", text: "VAT return & payment after quarter end" },
  { when: "9 months + 1 day", category: "Company", text: "Corporation Tax payment after year end" },
  { when: "9 months", category: "Company", text: "Private company accounts to Companies House" },
  { when: "12 months", category: "Company", text: "Corporation Tax return (CT600)" },
  { when: "Annually", category: "Company", text: "Confirmation statement within 14 days of review date" },
];

/** "04 / Calendar": the UK tax year at a glance, three deadlines per row. */
export function Deadlines() {
  return (
    <section id="calendar" className="scroll-mt-24 pb-20 lg:pb-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="04 / Calendar"
          title="Key UK deadlines"
          intro="We'll remind you by email and text — but here's the year at a glance."
          introClassName="text-sm leading-6"
        />
        <Reveal>
          <ul className="grid overflow-hidden border border-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {deadlines.map((deadline) => (
              <li
                key={deadline.when + deadline.text}
                className="group -mb-px flex min-h-[105px] items-stretch gap-5 border-b border-ink/10 px-6 py-6 md:max-lg:odd:border-r lg:[&:not(:nth-child(3n))]:border-r transition-colors duration-300 hover:bg-accent-orange-light"
              >
                <p className="flex w-[90px] shrink-0 items-center font-display text-lg leading-[22px] font-bold uppercase text-brand">
                  {deadline.when}
                </p>
                <div className="flex flex-col justify-center gap-2 border-l-2 border-brand pl-5">
                  <p className="font-display text-eyebrow uppercase text-ink/50">{deadline.category}</p>
                  <p className="text-sm leading-6 text-ink">{deadline.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
