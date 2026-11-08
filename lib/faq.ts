export type FaqItem = { question: string; answer: string };

// Questions come from the 06 Nov 2026 Figma frame, which carries no answers.
// The answers are drafted from the site's own copy; confirm them with the firm.
export const faqs: FaqItem[] = [
  {
    question: "How much do you charge?",
    answer:
      "We agree a fixed monthly fee up front, based on the work you need. There is no hourly billing and no surprise invoices. Use the fee estimator on our Services page for a guide.",
  },
  {
    question: "How easy is it to switch to Cube?",
    answer:
      "Very easy. Tell us about your business, and we contact your previous accountant for professional clearance and collect your records, so there are no awkward conversations.",
  },
  {
    question: "Who will I be dealing with?",
    answer:
      "A dedicated team of chartered accountants, led personally by a partner. You work with the same faces every year.",
  },
  {
    question: "What do you need from me, and how will I keep track of deadlines?",
    answer:
      "You upload documents through the secure client portal, and we remind you of every key deadline by email and text. The Client Hub calendar shows the full year at a glance.",
  },
  {
    question: "Do you have experience in my sector?",
    answer:
      "Yes. We specialise in care and supported living, property and construction, retail and e-commerce, travel, and many professional services.",
  },
];
