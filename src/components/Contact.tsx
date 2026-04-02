"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { contactInfo } from "@/data/contact";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="rounded-t-3xl bg-primary-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge variant="dark">Contact</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[50px]">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-text">Ready to start your project? Get in touch with us today for a free, no-obligation quote</p>
        </ScrollReveal>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <div className="divide-y divide-white/10">
              <div className="pb-6">
                <p className="mb-1 text-sm text-muted-text">Office</p>
                <p className="text-white">{contactInfo.address.line1}</p>
                <p className="text-white">{contactInfo.address.line2}</p>
              </div>
              <div className="py-6">
                <p className="mb-1 text-sm text-muted-text">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-white transition-opacity hover:opacity-70">{contactInfo.email}</a>
              </div>
              <div className="py-6">
                <p className="mb-1 text-sm text-muted-text">Telephone</p>
                <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`} className="text-white transition-opacity hover:opacity-70">{contactInfo.phone}</a>
              </div>
              <div className="pt-6">
                <p className="mb-3 text-sm text-muted-text">Follow us</p>
                <div className="flex gap-4">
                  {contactInfo.socials.map((social) => (
                    <a key={social.name} href={social.href} className="text-white transition-opacity hover:opacity-70" aria-label={social.name}>{social.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-muted-text">Name *</label>
                <input type="text" id="name" name="name" required placeholder="John Smith" className="w-full rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-muted-text">Email *</label>
                <input type="email" id="email" name="email" required placeholder="johnsmith@gmail.com" className="w-full rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm text-muted-text">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="(512) 555-0000" className="w-full rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-muted-text">Message *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Hello, I'd like to enquire about..." className="w-full resize-none rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <button type="submit" className="mt-2 w-full rounded-md bg-primary-dark/75 py-3 font-[family-name:var(--font-manrope)] text-sm font-medium text-white transition-colors hover:bg-primary-dark/90">
                {submitted ? "Message sent!" : "Send message"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
