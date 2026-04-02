"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Accordion } from "@/components/ui/Accordion";
import { services } from "@/data/services";

const serviceIcons: Record<string, React.ReactNode> = {
  kitchens: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="12" /><circle cx="7" cy="17" r="1" /><circle cx="17" cy="17" r="1" />
    </svg>
  ),
  "loft-conversions": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V10l9-7 9 7v11" /><path d="M9 21v-6h6v6" />
    </svg>
  ),
  bathrooms: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" /><path d="M6 12V5a2 2 0 012-2h1" /><line x1="7" y1="20" x2="7" y2="22" /><line x1="17" y1="20" x2="17" y2="22" />
    </svg>
  ),
  extensions: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="10" height="14" rx="1" /><path d="M12 12h8a2 2 0 012 2v6H12" /><path d="M2 6l5-3 5 3" />
    </svg>
  ),
  restorations: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "external-works": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /><rect x="9" y="9" width="2" height="2" /><rect x="13" y="9" width="2" height="2" />
    </svg>
  ),
};

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-[#FAFAFA] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge>Services</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-[#101014] md:text-4xl lg:text-[50px]">What we do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#3D3D47]">Find out which one of our services fit the needs of your project</p>
        </ScrollReveal>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: activeIndex === i ? 1 : 0 }}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="divide-y divide-[#101014]/10">
              {services.map((service, i) => (
                <Accordion key={service.id} title={service.name} isOpen={activeIndex === i} onToggle={() => setActiveIndex(i)} icon={serviceIcons[service.id]}>
                  <p className="text-[#3D3D47]">{service.description}</p>
                </Accordion>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
