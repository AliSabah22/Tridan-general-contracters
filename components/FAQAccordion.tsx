"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-neutral-200 bg-white overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-neutral-900"
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            {item.question}
            <span className="text-neutral-500" aria-hidden>
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={`overflow-hidden transition-all ${openIndex === i ? "max-h-96" : "max-h-0"}`}
          >
            <div className="border-t border-neutral-200 px-6 py-4 text-neutral-600">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
