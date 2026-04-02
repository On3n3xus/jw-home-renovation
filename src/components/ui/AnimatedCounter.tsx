"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  duration?: number;
};

export function AnimatedCounter({ target, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return controls.stop;
  }, [isInView, target, duration, motionValue]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-manrope)] text-6xl font-normal text-primary-dark md:text-7xl lg:text-[80px]">
      {display}
      {suffix}
    </span>
  );
}
