# JW Home Renovation Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page scrolling website for JW Home Renovation that mirrors the Refit reference site's design, using Next.js 15, Tailwind CSS v4, and Framer Motion.

**Architecture:** Single `page.tsx` composes 9 section components (Navbar through Footer). Shared UI components (`ScrollReveal`, `SectionBadge`, `AnimatedCounter`, `Marquee`, `Accordion`) encapsulate reusable patterns. All content lives in typed data files under `src/data/` for easy future replacement. Images use Unsplash URLs via `next/image` with `remotePatterns`.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion 12, clsx + tailwind-merge

---

## File Map

### Create

```
src/app/layout.tsx               — Root layout, fonts (Manrope + Host Grotesk), metadata
src/app/page.tsx                 — Single page composing all section components
src/app/globals.css              — Tailwind v4 import, marquee keyframes, custom utilities
src/lib/utils.ts                 — cn() helper (clsx + tailwind-merge)
src/data/services.ts             — 6 services: name, description, icon component
src/data/projects.ts             — 3 portfolio projects with testimonials
src/data/testimonials.ts         — 6 client testimonials
src/data/faqs.ts                 — 7 FAQ items
src/data/contact.ts              — Address, email, phone, social links
src/data/stats.ts                — 4 stat items (value, suffix, label, description)
src/components/ui/ScrollReveal.tsx   — Framer Motion scroll-triggered reveal wrapper
src/components/ui/SectionBadge.tsx   — Pill badge component
src/components/ui/AnimatedCounter.tsx — Counter that animates 0→target on scroll
src/components/ui/Marquee.tsx        — CSS-based infinite horizontal scroll
src/components/ui/Accordion.tsx      — Single accordion item with expand/collapse
src/components/ui/MobileMenu.tsx     — Full-screen mobile nav overlay
src/components/Navbar.tsx            — Fixed nav with scroll-aware bg
src/components/Hero.tsx              — Hero section
src/components/About.tsx             — About section with marquee + stats
src/components/Services.tsx          — Services with accordion + image swap
src/components/Portfolio.tsx         — Portfolio project cards
src/components/Testimonials.tsx      — Testimonial marquee section
src/components/FAQs.tsx              — FAQ section with accordion
src/components/Contact.tsx           — Contact info + form
src/components/Footer.tsx            — Footer with links
next.config.ts                       — Next.js config (remotePatterns for Unsplash)
postcss.config.mjs                   — PostCSS with @tailwindcss/postcss
```

---

### Task 1: Project Scaffolding + Foundation

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/lib/utils.ts`, `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd "/Users/nexus/Documents/JW Home Renovation"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Select defaults when prompted. This creates the full Next.js 15 scaffold with Tailwind CSS v4.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install framer-motion clsx tailwind-merge
```

- [ ] **Step 3: Configure next.config.ts for Unsplash images**

Replace `next.config.ts` with:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 4: Create the utility helper**

Write `src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 5: Set up globals.css with Tailwind v4 and custom keyframes**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  --color-primary-dark: #101014;
  --color-dark-secondary: #28282C;
  --color-off-white: #FAFAFA;
  --color-light-gray: #E9ECF2;
  --color-body-text: #3D3D47;
  --color-muted-text: #D0D1DB;

  --font-manrope: "Manrope", sans-serif;
  --font-host: "Host Grotesk", sans-serif;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee-left {
  animation: marquee-left 30s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 30s linear infinite;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-host);
  color: var(--color-body-text);
  background-color: #ffffff;
}
```

- [ ] **Step 6: Set up layout.tsx with fonts**

Replace `src/app/layout.tsx` with:

```typescript
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JW Home Renovation | Quality Home Improvement",
  description:
    "JW Home Renovation delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

Note: Host Grotesk is not available in `next/font/google` — we load it via the `@import` in globals.css or fall back to system sans-serif. The body font-family in globals.css handles this. If Host Grotesk is unavailable, the site still looks clean with the system font stack.

- [ ] **Step 7: Create placeholder page.tsx**

Replace `src/app/page.tsx` with:

```typescript
export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen items-center justify-center bg-primary-dark">
        <h1 className="font-[family-name:var(--font-manrope)] text-4xl font-bold text-white">
          JW Home Renovation
        </h1>
      </div>
    </main>
  );
}
```

- [ ] **Step 8: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts on `localhost:3000`. Page shows "JW Home Renovation" centered on dark background in Manrope font.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 project with Tailwind v4 and Framer Motion"
```

---

### Task 2: Data Files

**Files:**
- Create: `src/data/services.ts`, `src/data/projects.ts`, `src/data/testimonials.ts`, `src/data/faqs.ts`, `src/data/contact.ts`, `src/data/stats.ts`

- [ ] **Step 1: Create services data**

Write `src/data/services.ts`:

```typescript
export type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "kitchens",
    name: "Kitchens",
    description:
      "Transform your kitchen into a stunning and functional space. From custom cabinetry to modern countertops, we handle every detail to create the heart of your home.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop",
  },
  {
    id: "loft-conversions",
    name: "Loft Conversions",
    description:
      "Maximize your living space with a beautifully designed loft conversion. We create bright, airy rooms that add real value to your property.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1000&fit=crop",
  },
  {
    id: "bathrooms",
    name: "Bathrooms",
    description:
      "Create your dream bathroom with our expert renovation services. From luxurious walk-in showers to elegant vanities, we bring your vision to life.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop",
  },
  {
    id: "extensions",
    name: "Extensions",
    description:
      "Expand your home with a seamless extension that blends perfectly with your existing architecture. More space for living, working, and entertaining.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
  },
  {
    id: "restorations",
    name: "Restorations",
    description:
      "Breathe new life into your property with our expert restoration services. We preserve character while updating functionality for modern living.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop",
  },
  {
    id: "external-works",
    name: "External Works",
    description:
      "Enhance your property's curb appeal with professional external works. From driveways and patios to landscaping and fencing, we do it all.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop",
  },
];
```

- [ ] **Step 2: Create stats data**

Write `src/data/stats.ts`:

```typescript
export type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export const stats: Stat[] = [
  {
    value: 15,
    suffix: "+",
    label: "Years experience",
    description: "Over a decade of trusted home improvement expertise",
  },
  {
    value: 250,
    suffix: "+",
    label: "Projects completed",
    description: "Over 250 successful projects delivered with quality and care",
  },
  {
    value: 30,
    suffix: "+",
    label: "Skilled Tradespeople",
    description: "Our team of 30 experts ensures top-quality results",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client satisfaction",
    description: "All of our clients are satisfied with our work",
  },
];
```

- [ ] **Step 3: Create projects data**

Write `src/data/projects.ts`:

```typescript
export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
  testimonial: {
    quote: string;
    author: string;
    avatar: string;
  };
  variant: "light" | "dark" | "gray";
};

export const projects: Project[] = [
  {
    id: "modern-kitchen",
    title: "Modern kitchen refit",
    description:
      "A complete transformation of a dated kitchen into a sleek, modern cooking space with custom cabinetry, quartz countertops, and integrated appliances.",
    category: "Kitchen",
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=750&fit=crop",
    testimonial: {
      quote:
        "JW Home Renovation transformed our kitchen beyond our expectations. The attention to detail was incredible and the team was professional throughout.",
      author: "Rachel Morgan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    },
    variant: "light",
  },
  {
    id: "garden-path",
    title: "External garden path build",
    description:
      "A beautiful natural stone pathway winding through a redesigned garden, complete with integrated lighting and drainage solutions.",
    category: "External Works",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=750&fit=crop",
    testimonial: {
      quote:
        "The garden path has completely transformed our outdoor space. It's both beautiful and practical — exactly what we wanted.",
      author: "Michael Turner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    variant: "dark",
  },
  {
    id: "bathroom-renovation",
    title: "Bathroom renovation",
    description:
      "A luxury bathroom renovation featuring a walk-in rainfall shower, freestanding tub, and heated floors with premium tile work throughout.",
    category: "Bathroom",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=750&fit=crop",
    testimonial: {
      quote:
        "Our new bathroom feels like a five-star spa. The craftsmanship is outstanding and the project was delivered on time and on budget.",
      author: "Laura Davies",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    variant: "gray",
  },
];
```

- [ ] **Step 4: Create testimonials data**

Write `src/data/testimonials.ts`:

```typescript
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "emily",
    quote:
      "Absolutely thrilled with our kitchen renovation. The team was professional, tidy, and delivered on time. Could not recommend them highly enough!",
    author: "Emily Carter",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "james",
    quote:
      "From start to finish, the experience was seamless. They kept us informed every step of the way and the quality of work is outstanding.",
    author: "James Richardson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "sophie",
    quote:
      "Our loft conversion has given us so much extra space. The design was thoughtful and the build quality is exceptional.",
    author: "Sophie Williams",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "daniel",
    quote:
      "We had our entire ground floor remodeled and it looks incredible. They managed the project perfectly and stayed within budget.",
    author: "Daniel Foster",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "charlotte",
    quote:
      "The bathroom renovation exceeded all our expectations. Beautiful tile work and attention to detail throughout. Highly recommend!",
    author: "Charlotte Harris",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "oliver",
    quote:
      "Fantastic work on our home extension. The team was respectful of our space and the finished result is absolutely stunning.",
    author: "Oliver Bennett",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
];
```

- [ ] **Step 5: Create FAQs data**

Write `src/data/faqs.ts`:

```typescript
export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "areas",
    question: "What areas do you serve?",
    answer:
      "We serve the greater Austin metropolitan area, including Round Rock, Cedar Park, Georgetown, San Marcos, and surrounding communities within a 50-mile radius of downtown Austin.",
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope. A bathroom renovation typically takes 4-6 weeks, a kitchen remodel 6-8 weeks, and larger projects like extensions 3-6 months. We provide a detailed timeline during the planning phase.",
  },
  {
    id: "quotes",
    question: "Do you offer free quotes?",
    answer:
      "Yes! We offer free, no-obligation quotes for all projects. Simply get in touch via our contact form or give us a call, and we will schedule a convenient time to visit your property and discuss your project.",
  },
  {
    id: "permits",
    question: "Do I need building permits for my project?",
    answer:
      "Many renovation projects require permits, especially structural changes, electrical work, and plumbing modifications. We handle all permit applications and inspections as part of our service, ensuring everything is fully compliant with local building codes.",
  },
  {
    id: "guarantees",
    question: "What guarantees do you offer on your work?",
    answer:
      "All our work comes with a comprehensive 5-year workmanship guarantee. We also ensure that all materials and products used carry their own manufacturer warranties. Your satisfaction and peace of mind are our top priorities.",
  },
  {
    id: "stay-home",
    question: "Can I stay at home during the renovation?",
    answer:
      "In most cases, yes. We take great care to minimize disruption to your daily life, using dust sheets, maintaining clean work areas, and scheduling noisy work during reasonable hours. For major structural work, we will advise if temporary relocation is recommended.",
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply fill out our contact form below or give us a call. We will arrange a free consultation to discuss your project, understand your vision, and provide a detailed quote. From there, we will guide you through every step of the process.",
  },
];
```

- [ ] **Step 6: Create contact data**

Write `src/data/contact.ts`:

```typescript
export const contactInfo = {
  address: {
    line1: "742 Evergreen Terrace, Suite 100",
    line2: "Austin, TX 78701",
  },
  email: "hello@jwhomerenovation.com",
  phone: "(512) 555-0147",
  socials: [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "X", href: "#" },
  ],
};

export const aboutImages = [
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
];
```

- [ ] **Step 7: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 8: Commit**

```bash
git add src/data/
git commit -m "feat: add all content data files (services, projects, testimonials, faqs, contact, stats)"
```

---

### Task 3: Shared UI Components

**Files:**
- Create: `src/components/ui/ScrollReveal.tsx`, `src/components/ui/SectionBadge.tsx`, `src/components/ui/AnimatedCounter.tsx`, `src/components/ui/Marquee.tsx`, `src/components/ui/Accordion.tsx`

- [ ] **Step 1: Create ScrollReveal component**

Write `src/components/ui/ScrollReveal.tsx`:

```typescript
"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create SectionBadge component**

Write `src/components/ui/SectionBadge.tsx`:

```typescript
import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

export function SectionBadge({ children, variant = "light" }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-4 py-1.5 font-[family-name:var(--font-manrope)] text-sm font-medium tracking-wide",
        variant === "light"
          ? "bg-primary-dark/5 text-primary-dark"
          : "bg-white/10 text-white"
      )}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Create AnimatedCounter component**

Write `src/components/ui/AnimatedCounter.tsx`:

```typescript
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
```

- [ ] **Step 4: Create Marquee component**

Write `src/components/ui/Marquee.tsx`:

```typescript
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
```

- [ ] **Step 5: Create Accordion component**

Write `src/components/ui/Accordion.tsx`:

```typescript
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
```

- [ ] **Step 6: Verify build compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add shared UI components (ScrollReveal, SectionBadge, AnimatedCounter, Marquee, Accordion)"
```

---

### Task 4: Navbar + MobileMenu

**Files:**
- Create: `src/components/Navbar.tsx`, `src/components/ui/MobileMenu.tsx`

- [ ] **Step 1: Create MobileMenu component**

Write `src/components/ui/MobileMenu.tsx`:

```typescript
"use client";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-primary-dark"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-3xl text-white"
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-[family-name:var(--font-manrope)] text-2xl font-medium text-white transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Create Navbar component**

Write `src/components/Navbar.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-primary-dark/95 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="font-[family-name:var(--font-manrope)] text-xl font-bold text-white"
          >
            JW Home Renovation
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-manrope)] text-[18px] font-medium text-white transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
```

- [ ] **Step 3: Add Navbar to page.tsx**

Replace `src/app/page.tsx` with:

```typescript
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-primary-dark">
        <h1 className="font-[family-name:var(--font-manrope)] text-4xl font-bold text-white">
          JW Home Renovation
        </h1>
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```

Expected: Fixed navbar visible at top, transparent. Scrolling shows bg transition. Hamburger visible on narrow viewport. Mobile menu opens/closes.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.tsx src/components/ui/MobileMenu.tsx src/app/page.tsx
git commit -m "feat: add Navbar with scroll-aware background and mobile menu"
```

---

### Task 5: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero component**

Write `src/components/Hero.tsx`:

```typescript
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-3xl bg-primary-dark px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-manrope)] text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-[58px] lg:leading-[1.2]"
          >
            Your trusted partner for quality home improvement
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-lg text-muted-text"
          >
            JW Home Renovation delivers expert home improvements, creating
            beautiful and functional spaces with quality craftsmanship.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-8 rounded-full bg-white/10 py-2.5 pl-7 pr-3 font-[family-name:var(--font-manrope)] text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Work with us
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop"
              alt="Modern kitchen interior"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Floating testimonial card */}
          <div className="absolute -bottom-4 -left-4 max-w-xs rounded-xl bg-primary-dark/80 p-5 backdrop-blur-sm md:-left-8 md:bottom-8">
            <div className="mb-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-text">
              &ldquo;Exceptional quality and professionalism from start to finish. Highly recommended!&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to page.tsx**

Replace `src/app/page.tsx` with:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Dark hero section with staggered text animation, "Available for work" badge, CTA button, kitchen image with floating testimonial card. Responsive on mobile.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add Hero section with staggered entrance animation"
```

---

### Task 6: About Section (Marquee + Stats)

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create About component**

Write `src/components/About.tsx`:

```typescript
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
            With over 15 years of experience, JW Home Renovation has built a
            reputation for delivering exceptional home improvements across the
            Austin area. Our team of skilled tradespeople brings passion and
            precision to every project.
          </p>
        </ScrollReveal>

        {/* Image marquee */}
        <div className="mb-20">
          <Marquee speed="40s">
            {aboutImages.map((src, i) => (
              <div
                key={i}
                className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl md:h-64 md:w-96"
              >
                <Image
                  src={src}
                  alt={`Renovation project ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="384px"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-primary-dark">
                  {stat.label}
                </h3>
                <p className="text-sm text-body-text">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page.tsx**

Update `src/app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Section badge, heading, description. Scrolling image marquee (pauses on hover). 4 stat counters that animate from 0 when scrolled into view.

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/app/page.tsx
git commit -m "feat: add About section with image marquee and animated stat counters"
```

---

### Task 7: Services Section

**Files:**
- Create: `src/components/Services.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Services component**

Write `src/components/Services.tsx`:

```typescript
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Accordion } from "@/components/ui/Accordion";
import { services } from "@/data/services";

const serviceIcons: Record<string, React.ReactNode> = {
  kitchens: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="12" /><circle cx="7" cy="17" r="1" /><circle cx="17" cy="17" r="1" />
    </svg>
  ),
  "loft-conversions": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V10l9-7 9 7v11" /><path d="M9 21v-6h6v6" />
    </svg>
  ),
  bathrooms: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" /><path d="M6 12V5a2 2 0 012-2h1" /><line x1="7" y1="20" x2="7" y2="22" /><line x1="17" y1="20" x2="17" y2="22" />
    </svg>
  ),
  extensions: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="10" height="14" rx="1" /><path d="M12 12h8a2 2 0 012 2v6H12" /><path d="M2 6l5-3 5 3" />
    </svg>
  ),
  restorations: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "external-works": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /><rect x="9" y="9" width="2" height="2" /><rect x="13" y="9" width="2" height="2" />
    </svg>
  ),
};

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge>Services</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">
            What we do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body-text">
            Find out which one of our services fit the needs of your project
          </p>
        </ScrollReveal>

        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Image */}
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[activeIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>

          {/* Right: Accordion */}
          <ScrollReveal delay={0.2}>
            <div className="divide-y divide-primary-dark/10">
              {services.map((service, i) => (
                <Accordion
                  key={service.id}
                  title={service.name}
                  isOpen={activeIndex === i}
                  onToggle={() => setActiveIndex(i)}
                  icon={serviceIcons[service.id]}
                >
                  <p className="text-body-text">{service.description}</p>
                </Accordion>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Services to page.tsx**

Update `src/app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Off-white bg section. Service accordion on right, clicking different services swaps left image with crossfade. First service expanded by default.

- [ ] **Step 4: Commit**

```bash
git add src/components/Services.tsx src/app/page.tsx
git commit -m "feat: add Services section with accordion and image crossfade"
```

---

### Task 8: Portfolio Section

**Files:**
- Create: `src/components/Portfolio.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Portfolio component**

Write `src/components/Portfolio.tsx`:

```typescript
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
    <section id="portfolio" className="bg-light-gray py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge>Our work</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">
            Get inspired by our work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body-text">
            Take a look at some of our recent projects and see how we transform
            homes across Austin
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => {
            const styles = variantStyles[project.variant];
            return (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <div
                  className={cn(
                    "grid overflow-hidden rounded-2xl md:grid-cols-2",
                    styles.bg
                  )}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] md:aspect-auto">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                    <h3
                      className={cn(
                        "font-[family-name:var(--font-manrope)] text-2xl font-medium md:text-3xl",
                        styles.text
                      )}
                    >
                      {project.title}
                    </h3>
                    <p className={cn("text-base", styles.quote)}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-3">
                      <span
                        className={cn(
                          "rounded-full px-4 py-1.5 text-sm",
                          styles.tag
                        )}
                      >
                        {project.category}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-4 py-1.5 text-sm",
                          styles.tag
                        )}
                      >
                        {project.duration}
                      </span>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-4 border-t border-current/10 pt-6">
                      <p
                        className={cn(
                          "text-4xl leading-none opacity-20",
                          styles.text
                        )}
                      >
                        &ldquo;
                      </p>
                      <p className={cn("mt-2 text-sm italic", styles.quote)}>
                        {project.testimonial.quote}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <Image
                          src={project.testimonial.avatar}
                          alt={project.testimonial.author}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <span
                          className={cn(
                            "font-[family-name:var(--font-manrope)] text-sm font-medium",
                            styles.text
                          )}
                        >
                          {project.testimonial.author}
                        </span>
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
```

- [ ] **Step 2: Add Portfolio to page.tsx**

Update `src/app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: 3 project cards with alternating backgrounds (white, dark, gray). Each has photo, details, tags, and testimonial with avatar. Cards animate in on scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/Portfolio.tsx src/app/page.tsx
git commit -m "feat: add Portfolio section with alternating project cards"
```

---

### Task 9: Testimonials Section

**Files:**
- Create: `src/components/Testimonials.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Testimonials component**

Write `src/components/Testimonials.tsx`:

```typescript
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Marquee } from "@/components/ui/Marquee";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ quote, author, avatar }: { quote: string; author: string; avatar: string }) {
  return (
    <div className="w-80 shrink-0 rounded-2xl bg-off-white p-6">
      <div className="mb-3 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-body-text">{quote}</p>
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={author}
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
        <span className="font-[family-name:var(--font-manrope)] text-sm font-medium text-primary-dark">
          {author}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const firstHalf = testimonials.slice(0, 3);
  const secondHalf = testimonials.slice(3);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge>Testimonials</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">
            Hear from our clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body-text">
            Do not just take our word for it — see what our clients have to say
            about working with JW Home Renovation
          </p>
        </ScrollReveal>
      </div>

      <div className="flex flex-col gap-6">
        <Marquee direction="left" speed="35s">
          {[...firstHalf, ...secondHalf].map((t) => (
            <TestimonialCard key={t.id} quote={t.quote} author={t.author} avatar={t.avatar} />
          ))}
        </Marquee>
        <Marquee direction="right" speed="35s">
          {[...secondHalf, ...firstHalf].map((t) => (
            <TestimonialCard key={t.id + "-row2"} quote={t.quote} author={t.author} avatar={t.avatar} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Testimonials to page.tsx**

Update `src/app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Two rows of testimonial cards scrolling in opposite directions. Cards show stars, quote, avatar, and name. Marquee pauses on hover.

- [ ] **Step 4: Commit**

```bash
git add src/components/Testimonials.tsx src/app/page.tsx
git commit -m "feat: add Testimonials section with dual-row marquee"
```

---

### Task 10: FAQs Section

**Files:**
- Create: `src/components/FAQs.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create FAQs component**

Write `src/components/FAQs.tsx`:

```typescript
"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

export function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faqs" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <ScrollReveal>
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">
              Answering your questions
            </h2>
            <p className="mt-4 text-lg text-body-text">
              Got more questions? Send us your enquiry below
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-8 rounded-full bg-primary-dark/5 py-2.5 pl-7 pr-3 font-[family-name:var(--font-manrope)] text-sm font-medium text-primary-dark transition-colors hover:bg-primary-dark/10"
            >
              Get in touch
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </ScrollReveal>

          {/* Right column */}
          <ScrollReveal delay={0.2}>
            <div className="divide-y divide-primary-dark/10">
              {faqs.map((faq) => (
                <Accordion
                  key={faq.id}
                  title={faq.question}
                  isOpen={openId === faq.id}
                  onToggle={() =>
                    setOpenId(openId === faq.id ? null : faq.id)
                  }
                >
                  <p className="text-body-text">{faq.answer}</p>
                </Accordion>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add FAQs to page.tsx**

Update `src/app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { FAQs } from "@/components/FAQs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Two-column layout. Left: heading + CTA. Right: 7 FAQ accordion items. Clicking expands/collapses with animation.

- [ ] **Step 4: Commit**

```bash
git add src/components/FAQs.tsx src/app/page.tsx
git commit -m "feat: add FAQs section with accordion"
```

---

### Task 11: Contact Section

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Contact component**

Write `src/components/Contact.tsx`:

```typescript
"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { contactInfo } from "@/data/contact";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="rounded-t-3xl bg-primary-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge variant="dark">Contact</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[50px]">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-text">
            Ready to start your project? Get in touch with us today for a free,
            no-obligation quote
          </p>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Contact details */}
          <ScrollReveal>
            <div className="divide-y divide-white/10">
              <div className="pb-6">
                <p className="mb-1 text-sm text-muted-text">Office</p>
                <p className="text-white">{contactInfo.address.line1}</p>
                <p className="text-white">{contactInfo.address.line2}</p>
              </div>
              <div className="py-6">
                <p className="mb-1 text-sm text-muted-text">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white transition-opacity hover:opacity-70"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="py-6">
                <p className="mb-1 text-sm text-muted-text">Telephone</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                  className="text-white transition-opacity hover:opacity-70"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="pt-6">
                <p className="mb-3 text-sm text-muted-text">Follow us</p>
                <div className="flex gap-4">
                  {contactInfo.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-white transition-opacity hover:opacity-70"
                      aria-label={social.name}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-muted-text">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="w-full rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-muted-text">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="johnsmith@gmail.com"
                  className="w-full rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm text-muted-text">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(512) 555-0000"
                  className="w-full rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-muted-text">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to enquire about..."
                  className="w-full resize-none rounded-md border border-white/10 bg-off-white px-4 py-3 text-primary-dark placeholder:text-body-text/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-primary-dark/75 py-3 font-[family-name:var(--font-manrope)] text-sm font-medium text-white transition-colors hover:bg-primary-dark/90"
              >
                {submitted ? "Message sent!" : "Send message"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Contact to page.tsx**

Update `src/app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { FAQs } from "@/components/FAQs";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Expected: Dark section with rounded top corners. Contact details on left (address, email, phone, socials with dividers). Form on right (4 fields + submit button). Submit shows "Message sent!" for 3 seconds.

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.tsx src/app/page.tsx
git commit -m "feat: add Contact section with form and contact details"
```

---

### Task 12: Footer

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Footer component**

Write `src/components/Footer.tsx`:

```typescript
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
          <a
            href="#"
            className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-white"
          >
            JW Home Renovation
          </a>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-manrope)] text-sm font-semibold text-white">
              Quick links
            </h4>
            <div className="flex gap-16">
              {quickLinks.map((column, i) => (
                <ul key={i} className="flex flex-col gap-3">
                  {column.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-text transition-opacity hover:opacity-70"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-muted-text">
            &copy; 2026 JW Home Renovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to page.tsx — final assembly**

Write the final `src/app/page.tsx`:

```typescript
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { FAQs } from "@/components/FAQs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 3: Verify full site in browser**

```bash
npm run dev
```

Expected: Complete single-page site with all 9 sections. Nav links smooth-scroll to anchors. All animations trigger on scroll. Responsive at all breakpoints.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/page.tsx
git commit -m "feat: add Footer and complete page assembly"
```

---

### Task 13: Build Verification + Polish

**Files:**
- Potentially modify any component for build/lint fixes

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors. Note any warnings.

- [ ] **Step 2: Fix any build errors or warnings**

Address TypeScript errors, unused imports, or missing dependencies. Common issues:
- Unused variables → remove them
- Missing `"use client"` directives → add to components using hooks or Framer Motion
- Image sizing warnings → add `sizes` prop to `next/image`

- [ ] **Step 3: Run linter**

```bash
npm run lint
```

Expected: No errors. Fix any warnings.

- [ ] **Step 4: Test production preview**

```bash
npm run start
```

Visit `localhost:3000`. Verify all sections render, animations play, nav works, form submits, mobile menu opens/closes.

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build warnings and polish for production"
```
