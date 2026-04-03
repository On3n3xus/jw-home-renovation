import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
};

export function ScrollReveal({ children, className, interactive }: ScrollRevealProps) {
  return (
    <div className={cn("reveal", interactive && "reveal-interactive", className)}>
      {children}
    </div>
  );
}
