"use client";

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
  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#101014] transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
        aria-label="Close menu"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M4 4l10 10M14 4L4 14" />
        </svg>
      </button>
      <nav className="flex flex-col items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-[family-name:var(--font-manrope)] text-3xl font-medium text-white transition-opacity hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={onClose}
          className="mt-4 rounded-full bg-white px-8 py-3 font-[family-name:var(--font-manrope)] text-sm font-semibold text-[#101014]"
        >
          Get a Quote
        </a>
      </nav>
    </div>
  );
}
