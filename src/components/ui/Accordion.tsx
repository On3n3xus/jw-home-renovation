"use client";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
  className?: string;
};

export function Accordion({
  title,
  children,
  isOpen,
  onToggle,
  icon,
  className,
}: AccordionProps) {
  return (
    <div className={className}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <div className="flex items-center gap-4">
          {icon && <span className="text-[#101014]/60">{icon}</span>}
          <span className="font-[family-name:var(--font-manrope)] text-lg font-medium">
            {title}
          </span>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-xl transition-transform duration-300">
          {isOpen ? "×" : "+"}
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          <div className="pb-5 text-[#3D3D47]">{children}</div>
        </div>
      </div>
    </div>
  );
}
