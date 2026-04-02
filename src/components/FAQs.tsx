"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

export function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faqs" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">Answering your questions</h2>
            <p className="mt-4 text-lg text-body-text">Got more questions? Send us your enquiry below</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-8 rounded-full bg-primary-dark/5 py-2.5 pl-7 pr-3 font-[family-name:var(--font-manrope)] text-sm font-medium text-primary-dark transition-colors hover:bg-primary-dark/10">
              Get in touch
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="divide-y divide-primary-dark/10">
              {faqs.map((faq) => (
                <Accordion key={faq.id} title={faq.question} isOpen={openId === faq.id} onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}>
                  <p className="text-body-text">{faq.answer}</p>
                </Accordion>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
