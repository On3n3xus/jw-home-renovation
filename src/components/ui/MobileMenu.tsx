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
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#101014] transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 text-3xl text-white"
        aria-label="Close menu"
      >
        ×
      </button>
      <nav className="flex flex-col items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-[family-name:var(--font-manrope)] text-2xl font-medium text-white transition-opacity hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
