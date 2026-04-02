export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  { id: "areas", question: "What areas do you serve?", answer: "We serve the greater Austin metropolitan area, including Round Rock, Cedar Park, Georgetown, San Marcos, and surrounding communities within a 50-mile radius of downtown Austin." },
  { id: "timeline", question: "How long does a typical project take?", answer: "Project timelines vary depending on scope. A bathroom renovation typically takes 4-6 weeks, a kitchen remodel 6-8 weeks, and larger projects like extensions 3-6 months. We provide a detailed timeline during the planning phase." },
  { id: "quotes", question: "Do you offer free quotes?", answer: "Yes! We offer free, no-obligation quotes for all projects. Simply get in touch via our contact form or give us a call, and we will schedule a convenient time to visit your property and discuss your project." },
  { id: "permits", question: "Do I need building permits for my project?", answer: "Many renovation projects require permits, especially structural changes, electrical work, and plumbing modifications. We handle all permit applications and inspections as part of our service, ensuring everything is fully compliant with local building codes." },
  { id: "guarantees", question: "What guarantees do you offer on your work?", answer: "All our work comes with a comprehensive 5-year workmanship guarantee. We also ensure that all materials and products used carry their own manufacturer warranties. Your satisfaction and peace of mind are our top priorities." },
  { id: "stay-home", question: "Can I stay at home during the renovation?", answer: "In most cases, yes. We take great care to minimize disruption to your daily life, using dust sheets, maintaining clean work areas, and scheduling noisy work during reasonable hours. For major structural work, we will advise if temporary relocation is recommended." },
  { id: "get-started", question: "How do I get started?", answer: "Getting started is easy! Simply fill out our contact form below or give us a call. We will arrange a free consultation to discuss your project, understand your vision, and provide a detailed quote. From there, we will guide you through every step of the process." },
];
