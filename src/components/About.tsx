"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Marquee } from "@/components/ui/Marquee";
import { stats } from "@/data/stats";
import { aboutImages } from "@/data/contact";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge>About us</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">
            home improvement specialists
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body-text">
            With over 15 years of experience, JW Home Renovation has built a reputation for delivering exceptional home improvements across the Austin area. Our team of skilled tradespeople brings passion and precision to every project.
          </p>
        </ScrollReveal>
        <div className="mb-20">
          <Marquee speed="40s">
            {aboutImages.map((src, i) => (
              <div key={i} className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl md:h-64 md:w-96">
                <Image src={src} alt={`Renovation project ${i + 1}`} fill className="object-cover" sizes="384px" />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-primary-dark">{stat.label}</h3>
                <p className="text-sm text-body-text">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
