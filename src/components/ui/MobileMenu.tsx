"use client";

import { useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#101014] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4"
      }`}
    >
      <nav className="flex flex-col items-center gap-6">
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-[family-name:var(--font-manrope)] text-3xl font-medium text-white transition-all duration-500 hover:opacity-70"
            style={{
              transitionDelay: isOpen ? `${100 + i * 60}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(12px)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={onClose}
          className="mt-4 rounded-full bg-white px-8 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[#101014] transition-all duration-500"
          style={{
            transitionDelay: isOpen ? `${100 + navLinks.length * 60}ms` : "0ms",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Get a Quote
        </a>
      </nav>
    </div>
  );
}
