"use client";

import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full-width wrapper for positioning */}
      <div className="fixed top-0 z-50 w-full">
        <div
          className={cn(
            "mx-auto mt-4 flex max-w-fit items-center gap-1 rounded-full border px-2 py-2 transition-all duration-500 md:gap-2 md:px-3",
            scrolled
              ? "border-white/15 bg-[#101014]/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
              : "border-white/10 bg-white/[0.06] backdrop-blur-md"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="rounded-full px-4 py-2 font-[family-name:var(--font-manrope)] text-sm font-bold text-white transition-colors hover:bg-white/10 md:px-5"
          >
            JW
          </a>

          {/* Centered nav links */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 font-[family-name:var(--font-manrope)] text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[#101014] transition-all duration-200 hover:bg-white/90 md:block"
          >
            Get a Quote
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center rounded-full p-2.5 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
