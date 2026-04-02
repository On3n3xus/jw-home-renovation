"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const variantStyles = {
  light: { bg: "bg-white", text: "text-primary-dark", quote: "text-body-text", tag: "bg-light-gray text-body-text" },
  dark: { bg: "bg-primary-dark", text: "text-white", quote: "text-muted-text", tag: "bg-white/10 text-muted-text" },
  gray: { bg: "bg-light-gray", text: "text-primary-dark", quote: "text-body-text", tag: "bg-white text-body-text" },
};

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-light-gray py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge>Our work</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">Get inspired by our work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body-text">Take a look at some of our recent projects and see how we transform homes across Austin</p>
        </ScrollReveal>
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => {
            const styles = variantStyles[project.variant];
            return (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <div className={cn("group grid overflow-hidden rounded-2xl md:grid-cols-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1", styles.bg)}>
                  <div className="relative aspect-[16/10] md:aspect-auto md:min-h-full">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                    <h3 className={cn("font-[family-name:var(--font-manrope)] text-2xl font-medium md:text-3xl", styles.text)}>{project.title}</h3>
                    <p className={cn("text-base", styles.quote)}>{project.description}</p>
                    <div className="flex gap-3">
                      <span className={cn("rounded-full px-4 py-1.5 text-sm", styles.tag)}>{project.category}</span>
                      <span className={cn("rounded-full px-4 py-1.5 text-sm", styles.tag)}>{project.duration}</span>
                    </div>
                    <div className="mt-4 border-t border-current/10 pt-6">
                      <p className={cn("text-4xl leading-none opacity-20", styles.text)}>&ldquo;</p>
                      <p className={cn("mt-2 text-sm italic", styles.quote)}>{project.testimonial.quote}</p>
                      <div className="mt-4 flex items-center gap-3">
                        <Image src={project.testimonial.avatar} alt={project.testimonial.author} width={40} height={40} className="rounded-full object-cover" />
                        <span className={cn("font-[family-name:var(--font-manrope)] text-sm font-medium", styles.text)}>{project.testimonial.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
