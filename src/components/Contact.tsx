"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { contactInfo } from "@/data/contact";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon />,
  Facebook: <FacebookIcon />,
  X: <XIcon />,
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="rounded-t-3xl bg-primary-dark px-4 py-16 sm:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <SectionBadge variant="dark">Contact</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[50px]">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-text md:text-lg">Ready to start your project? Get in touch with us today for a free, no-obligation quote</p>
        </ScrollReveal>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <div className="divide-y divide-white/10">
              <div className="pb-6">
                <p className="mb-1 text-sm text-muted-text">Office</p>
                <p className="text-white">{contactInfo.address.line1}</p>
                {contactInfo.address.line2 && <p className="text-white">{contactInfo.address.line2}</p>}
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
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
                      aria-label={social.name}
                    >
                      {socialIcons[social.name]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} interactive>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] text-xl font-semibold text-white">Message received!</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-text">
                  Thank you for reaching out. JW Home Renovation has received your inquiry and will get back to you as soon as possible. A confirmation has been sent to your email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 rounded-full border border-white/10 px-6 py-2.5 font-[family-name:var(--font-manrope)] text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
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
                <input type="tel" id="phone" name="phone" placeholder="(612) 555-0000" className="w-full rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-muted-text">Message *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Hello, I'd like to enquire about..." className="w-full resize-none rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              {error && (
                <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
              <button type="submit" disabled={sending} className="mt-2 w-full rounded-md bg-white py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[#101014] transition-colors hover:bg-white/90 disabled:opacity-60">
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
