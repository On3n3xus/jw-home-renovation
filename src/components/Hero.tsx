"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-b-3xl bg-primary-dark px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available for work
            </span>
          </motion.div>
          <motion.h1
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="font-[family-name:var(--font-manrope)] text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-[58px] lg:leading-[1.2]"
          >
            Your trusted partner for quality home improvement
          </motion.h1>
          <motion.p
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="max-w-lg text-lg text-muted-text"
          >
            JW Home Renovation delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.
          </motion.p>
          <motion.div
            initial={false}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          >
            <a href="#contact" className="inline-flex items-center gap-8 rounded-full bg-white/10 py-2.5 pl-7 pr-3 font-[family-name:var(--font-manrope)] text-sm font-medium text-white transition-colors hover:bg-white/20">
              Work with us
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[3/4]">
            <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop" alt="Modern kitchen interior" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="absolute -bottom-4 -left-4 max-w-xs rounded-xl bg-primary-dark/60 p-5 backdrop-blur-md shadow-2xl border border-white/10 md:-left-8 md:bottom-8">
            <div className="mb-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-text">&ldquo;Exceptional quality and professionalism from start to finish. Highly recommended!&rdquo;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
