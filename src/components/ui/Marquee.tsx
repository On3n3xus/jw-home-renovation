import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
  speed?: string;
};

export function Marquee({
  children,
  direction = "left",
  className,
  speed = "30s",
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-6 hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{ animationDuration: speed }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
