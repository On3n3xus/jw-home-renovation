import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  return (
    <div className={cn("reveal", className)}>
      {children}
    </div>
  );
}
