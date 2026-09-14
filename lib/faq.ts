export type FaqItem = { question: string; answer: string };

// Questions come from the Figma design. The design shows no answer copy, so
// the answers below are placeholders until the client supplies them.
export const faqs: FaqItem[] = [
  { question: "What courses do you offer?", answer: "Answer to be supplied." },
  { question: "How can I enroll in a course?", answer: "Answer to be supplied." },
  { question: "Are your courses available online?", answer: "Answer to be supplied." },
  {
    question: "Do you offer career support after course completion?",
    answer: "Answer to be supplied.",
  },
  {
    question: "What are the prerequisites for enrolling in your courses?",
    answer: "Answer to be supplied.",
  },
];
