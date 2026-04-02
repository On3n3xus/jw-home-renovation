const quickLinks = [
  [
    { label: "About us", href: "#about" },
    { label: "Our work", href: "#portfolio" },
    { label: "Services", href: "#services" },
  ],
  [
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
];

export function Footer() {
  return (
    <footer className="bg-primary-dark px-6 pb-8 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <a href="#" className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-white">JW Home Renovation</a>
          <div>
            <h4 className="mb-4 font-[family-name:var(--font-manrope)] text-sm font-semibold text-white">Quick links</h4>
            <div className="flex gap-16">
              {quickLinks.map((column, i) => (
                <ul key={i} className="flex flex-col gap-3">
                  {column.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-muted-text transition-opacity hover:opacity-70">{link.label}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-muted-text">&copy; 2026 JW Home Renovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
