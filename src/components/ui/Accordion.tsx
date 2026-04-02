"use client";

import { motion, AnimatePresence } from "framer-motion";

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
          {icon && <span className="text-primary-dark/60">{icon}</span>}
          <span className="font-[family-name:var(--font-manrope)] text-lg font-medium">
            {title}
          </span>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-xl">
          {isOpen ? "×" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-body-text">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
