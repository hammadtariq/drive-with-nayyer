"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { AnimateIn } from "./AnimateIn";

const faqs = [
  {
    id: "g2-vs-g",
    question: "Which package should I choose — G2 or G?",
    answer:
      "If you hold a G1 licence and have not yet taken your G2 road test, start with Package 01 or 02. If you already have your G2 and are preparing for the full G road test, Package 03 is designed for you. Not sure? Message Nayyer on WhatsApp before booking and she will point you in the right direction.",
  },
  {
    id: "after-first-lesson",
    question: "What happens after I book and pay for my first lesson?",
    answer:
      "Once payment is confirmed through Stripe, your first lesson slot is locked in. After that lesson, Nayyer will coordinate the remaining lessons in your package directly with you — usually through WhatsApp — based on your availability and progress.",
  },
  {
    id: "pickup-area",
    question: "Which areas do you cover for pickup and drop-off?",
    answer:
      "Nayyer offers pickup and drop-off in selected areas of Mississauga. If you are unsure whether your area is covered, message her on WhatsApp with your address before booking. She will confirm availability.",
  },
  {
    id: "own-car",
    question: "Do I need my own car?",
    answer:
      "No. All in-car lessons are conducted in Nayyer's training vehicle, which is properly equipped and insured for driver training. Packages 02 and 03 also include use of the training car on your road test day.",
  },
  {
    id: "policy",
    question: "What is the cancellation and refund policy?",
    answer:
      "Cancellation and refund terms are confirmed at the time of booking. Please contact Nayyer directly before purchasing if you have specific questions about rescheduling or cancellations. [Full policy — confirm with Nayyer before launch]",
  },
  {
    id: "contact",
    question: "How do I contact Nayyer directly?",
    answer:
      "The fastest way to reach Nayyer is WhatsApp at 647-716-2153. You can also call or email kooolnayyer12@gmail.com. Nayyer responds to WhatsApp messages most quickly.",
  },
];

function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0"
    >
      <path
        d="M4.5 7l4.5 4.5L13.5 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-bg">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <AnimateIn>
          <h2
            className="font-display font-bold text-ink tracking-[-0.015em] text-wrap-balance text-center mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Frequently asked questions
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <Accordion.Root type="single" collapsible className="flex flex-col gap-2">
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="group border border-primary/12 rounded-xl overflow-hidden bg-bg hover:border-primary/25 transition-colors duration-200"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-ink text-[0.9375rem] hover:text-primary transition-colors duration-150">
                  {faq.question}
                  <ChevronIcon />
                </Accordion.Trigger>

                <Accordion.Content
                  data-radix-accordion-content
                  className="px-5 pb-5 font-body text-ink/75 text-sm leading-relaxed"
                >
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </AnimateIn>

        <AnimateIn delay={0.18}>
          <p className="mt-8 text-center font-body text-muted text-sm">
            Still have a question?{" "}
            <a
              href="https://wa.me/16477162153"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Message Nayyer on WhatsApp
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
