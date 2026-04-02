# JW Home Renovation — Website Design Spec

## Overview

Single-page scrolling website for JW Home Renovation, a US-based general contractor. Mirrors the design and structure of the Refit reference site (https://easy-opportunity-484632.framer.app/) with adapted branding, placeholder content, and US-specific details.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Manrope (headings/nav/buttons), Host Grotesk (body text) — via Google Fonts / `next/font`
- **Images**: Unsplash stock photos for renovation interiors/exteriors
- **Deployment**: Vercel-ready (static export compatible)

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary-dark` | `#101014` | Dark backgrounds (hero, contact, footer) |
| `white` | `#FFFFFF` | Light backgrounds, text on dark |
| `off-white` | `#FAFAFA` | Services section bg, form inputs |
| `light-gray` | `#E9ECF2` | Portfolio section bg |
| `body-text` | `#3D3D47` | Body text on light backgrounds |
| `muted-text` | `#D0D1DB` | Secondary text on dark backgrounds |
| `dark-secondary` | `#28282C` | Card backgrounds, subtle dark variants |

Semi-transparent overlays: `rgba(255,255,255,0.1)` for buttons on dark, `rgba(16,16,20,0.1)` for buttons on light, `rgba(16,16,20,0.75)` for overlays.

## Typography

| Element | Font | Size | Weight |
|---|---|---|---|
| H1 (Hero) | Manrope | 58px (desktop) | 500 |
| H2 (Section headings) | Manrope | 50px (desktop) | 500 |
| H3 (Card titles) | Manrope | 20-36px | 500 |
| Section pills | Manrope | 16px | 500 |
| Body text | Host Grotesk | 16-18px | 400 |
| Nav links | Manrope | 18px | 500 |
| Stat numbers | Manrope | 80-100px | 400 |

Sizes scale down proportionally on tablet/mobile.

## Project Structure

```
src/
  app/
    layout.tsx          — Root layout, fonts, metadata
    page.tsx            — Single page composing all sections
    globals.css         — Tailwind directives, custom CSS (marquee keyframes)
  components/
    Navbar.tsx          — Fixed navigation bar
    Hero.tsx            — Hero section
    About.tsx           — About section with marquee + stats
    Services.tsx        — Services accordion with image swap
    Portfolio.tsx       — Portfolio project cards
    Testimonials.tsx    — Testimonial marquee
    FAQs.tsx            — FAQ accordion
    Contact.tsx         — Contact info + form
    Footer.tsx          — Footer with links
    ui/
      SectionBadge.tsx  — Reusable pill badge ("About us", "Services", etc.)
      AnimatedCounter.tsx — Number counter animation on scroll
      Marquee.tsx       — Infinite horizontal scroll wrapper
      Accordion.tsx     — Expand/collapse item
      ScrollReveal.tsx  — Framer Motion scroll-triggered reveal wrapper
      MobileMenu.tsx    — Hamburger menu overlay for mobile
  data/
    services.ts         — Service names, descriptions, icons
    projects.ts         — Portfolio project details
    testimonials.ts     — Client testimonials
    faqs.ts             — FAQ questions and answers
    contact.ts          — Contact details (address, email, phone)
    stats.ts            — Stat counter data
  lib/
    utils.ts            — cn() helper, any shared utilities
public/
  images/               — Stock photos (downloaded from Unsplash)
```

## Sections (Top to Bottom)

### 1. Navigation Bar

- **Position**: Fixed at top, `z-50`
- **Background**: Transparent over hero; transitions to solid `#101014` with backdrop blur on scroll (detected via scroll position > 50px)
- **Left**: "JW Home Renovation" text logo in white, Manrope font, bold
- **Right**: Nav links — About, Services, Our Work, FAQs, Contact
- **Links**: Smooth-scroll anchors (`#about`, `#services`, `#portfolio`, `#faqs`, `#contact`)
- **Mobile**: Hamburger icon replaces links; opens full-screen overlay menu with same links
- **Transition**: Background opacity animates on scroll

### 2. Hero Section

- **Background**: `#101014` with rounded bottom corners (~24px)
- **Layout**: Two-column, 50/50 split on desktop. Stacks on mobile (text above image).
- **Left column**:
  - Green dot + "Available for work" pill badge (small, semi-transparent bg)
  - H1: "Your trusted partner for quality home improvement"
  - Subtitle: "JW Home Renovation delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship."
  - CTA button: "Work with us" — pill shape (border-radius 50px), semi-transparent white bg, arrow icon in dark circle on right. Scrolls to `#contact`.
- **Right column**:
  - Large photo of modern kitchen interior (Unsplash), rounded corners
  - Floating testimonial card overlapping bottom-right: semi-transparent dark bg, 5 stars, short quote, rounded corners
- **Animation**: Text elements fade in + slide up staggered on page load (Framer Motion)

### 3. About Us Section

- **Background**: White
- **Anchor**: `#about`
- **Header**: `SectionBadge` "About us" + H2 "home improvement specialists" (lowercase) + description paragraph
- **Image marquee**: Horizontally auto-scrolling strip of 6 renovation photos. CSS `@keyframes` infinite loop. Duplicated images for seamless wrap. Slight rounded corners on each image. Pause on hover.
- **Stats row**: 4 cards in horizontal row (2x2 grid on mobile):
  1. **15+** Years experience
  2. **250+** Projects completed — "Over 250 successful projects delivered with quality and care"
  3. **30+** Skilled Tradespeople — "Our team of 30 experts ensures top-quality results"
  4. **100%** Client satisfaction — "All of our clients are satisfied with our work"
- **Counter animation**: Numbers count from 0 to target when scrolled into view (Framer Motion `useInView` + `useMotionValue` + `useTransform`)
- **Scroll reveal**: Section header and stats animate in on scroll

### 4. Services Section

- **Background**: `#FAFAFA`
- **Anchor**: `#services`
- **Header**: `SectionBadge` "Services" + H2 "What we do" + subtitle, centered
- **Layout**: Two-column. Left: large image (changes per active service). Right: accordion list.
- **Accordion items** (6 total):
  1. **Kitchens** — icon + name + expand/collapse toggle (+/×)
  2. **Loft Conversions**
  3. **Bathrooms**
  4. **Extensions**
  5. **Restorations**
  6. **External Works**
- **Behavior**: First item open by default. Clicking another closes the current and opens the new one. Left image cross-fades to match the active service (Framer Motion `AnimatePresence`).
- **Each expanded item**: Description paragraph about the service.
- **Icons**: Simple SVG line-art icons for each service (kitchen sink, roof/loft, bathtub, building extension, tools/restoration, garden/exterior).
- **Mobile**: Stacks vertically — image above accordion.

### 5. Portfolio (Our Work) Section

- **Background**: `#E9ECF2`
- **Anchor**: `#portfolio`
- **Header**: `SectionBadge` "Our work" + H2 "Get inspired by our work" + subtitle, centered
- **Layout**: 3 vertically stacked project cards
- **Each card**: Rounded rectangle (16-20px radius), two-column (photo left, details right)
  - Photo: Tall portrait orientation (~4:5 ratio), Unsplash stock
  - Title: H3 (e.g., "Modern kitchen refit")
  - Description: paragraph
  - Tags: 2 small pills — category (e.g., "Kitchen") + duration (e.g., "4 weeks")
  - Testimonial: Large quotation marks + client quote + circular avatar + client name
- **Card backgrounds alternate**: Card 1 white, Card 2 dark (`#101014` with white text), Card 3 light gray
- **Projects** (placeholder):
  1. Modern kitchen refit — Kitchen — 4 weeks — Rachel Morgan
  2. External garden path build — External Works — 1 month — Michael Turner
  3. Bathroom renovation — Bathroom — 6 weeks — Laura Davies
- **Mobile**: Cards stack, photo above details within each card
- **Scroll reveal**: Each card animates in on scroll

### 6. Testimonials Section

- **Background**: White
- **Header**: `SectionBadge` "Testimonials" + H2 "Hear from our clients" + subtitle, centered
- **Layout**: Two rows of testimonial cards in auto-scrolling marquees
  - Top row: scrolls left-to-right
  - Bottom row: scrolls right-to-left
- **Each card**: Light gray bg (`#FAFAFA`), rounded corners, padding. Contains: 5 gold/amber stars, quote text, circular avatar + client name.
- **6 testimonials** (placeholder): Emily Carter, James Richardson, Sophie Williams, Daniel Foster, Charlotte Harris, Oliver Bennett
- **Marquee**: CSS `@keyframes` infinite scroll. Cards duplicated for seamless loop. Pause on hover.

### 7. FAQs Section

- **Background**: White
- **Anchor**: `#faqs`
- **Layout**: Two-column
- **Left column**: H2 "Answering your questions" + subtitle "Got more questions? Send us your enquiry below" + "Get in touch" CTA button (same pill style, scrolls to `#contact`)
- **Right column**: Accordion with 7 FAQ items
  - Each: question text + "+" icon, expands to show answer
  - Separator lines between items
- **FAQ items** (placeholder):
  1. What areas do you serve?
  2. How long does a typical project take?
  3. Do you offer free quotes?
  4. Do I need building permits for my project?
  5. What guarantees do you offer on your work?
  6. Can I stay at home during the renovation?
  7. How do I get started?
- **Mobile**: Stacks vertically — left column above accordion

### 8. Contact Section

- **Background**: `#101014` with rounded top corners (~24px)
- **Anchor**: `#contact`
- **Header**: `SectionBadge` "Contact" (light text) + H2 "Get in touch" (white) + subtitle
- **Layout**: Two-column
- **Left column** (contact details, white text):
  - **Office**: 742 Evergreen Terrace, Suite 100, Austin, TX 78701 (placeholder)
  - **Email**: hello@jwhomerenovation.com (placeholder, `mailto:` link)
  - **Phone**: (512) 555-0147 (placeholder, `tel:` link)
  - **Follow us**: Instagram, Facebook, X icons (placeholder links)
  - Label-value pairs separated by horizontal divider lines
- **Right column** (contact form):
  - Fields: Name* (required), Email* (required), Phone Number (optional), Message* (required, textarea)
  - Input style: `#FAFAFA` bg, subtle border, rounded corners 6px
  - Submit button: "Send message" — full-width, dark semi-transparent bg, white text, rounded 6px
  - **Static only** — no backend wiring. `onSubmit` shows a toast/alert placeholder.
- **Mobile**: Stacks vertically — contact info above form

### 9. Footer

- **Background**: `#101014` (continuous from contact, own container with rounded corners)
- **Layout**: Two sections
  - Left: "JW Home Renovation" logo/wordmark (large, white, bold)
  - Right: "Quick links" heading + two columns of links (About us, Our work, Services | Testimonials, FAQs, Contact)
- **Bottom bar** (separated by thin line):
  - Left: "© 2026 JW Home Renovation. All rights reserved."
  - Right: (empty or "Website by [your name]" placeholder)

## Animations Summary

| Animation | Technology | Trigger |
|---|---|---|
| Text/section fade-in + slide-up | Framer Motion `motion.div` + `useInView` | Scroll into viewport |
| Stat counter (0 → target) | Framer Motion `useMotionValue` + `animate` | Scroll into viewport |
| Image marquee (About) | CSS `@keyframes translateX` | Continuous, pause on hover |
| Testimonial marquee | CSS `@keyframes translateX` | Continuous, pause on hover |
| Services image crossfade | Framer Motion `AnimatePresence` + `motion.img` | Accordion item change |
| Accordion expand/collapse | Framer Motion `AnimatePresence` + `motion.div` | Click |
| Navbar bg transition | CSS transition on `background-color` | Scroll position > 50px |
| Hero staggered entrance | Framer Motion `staggerChildren` | Page load |

## Responsive Breakpoints

| Breakpoint | Width | Key changes |
|---|---|---|
| Desktop | ≥1280px | Full two-column layouts, all animations |
| Tablet | 768-1279px | Two-column layouts preserved, reduced font sizes |
| Mobile | <768px | Single column, hamburger nav, 2x2 stat grid, stacked cards |

## Images Required

All sourced from Unsplash (free, no attribution required for web use):

1. **Hero**: Modern kitchen interior (dark tones, warm wood, pendant lights)
2. **About marquee** (6 images): Bathroom, hallway, modern house exterior, living room, kitchen detail, bedroom
3. **Services** (6 images): One per service — kitchen, loft/attic, bathroom, house extension, restoration, garden/exterior
4. **Portfolio** (3 images): Kitchen project, garden path, bathroom renovation
5. **Testimonial avatars** (6): Professional headshots (placeholder faces)

## Dependencies

```json
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19",
    "framer-motion": "^12",
    "clsx": "^2",
    "tailwind-merge": "^3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/react": "^19",
    "@types/node": "^22",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4"
  }
}
```

## Out of Scope

- Backend / API routes (form is static only)
- CMS integration
- Authentication
- Blog / dynamic pages
- SEO beyond basic meta tags
- Analytics integration
- Email delivery for contact form
