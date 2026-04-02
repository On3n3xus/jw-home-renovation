import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Marquee } from "@/components/ui/Marquee";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ quote, author, avatar }: { quote: string; author: string; avatar: string }) {
  return (
    <div className="w-72 shrink-0 rounded-2xl bg-off-white p-5 sm:w-80 sm:p-6">
      <div className="mb-3 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-body-text">{quote}</p>
      <div className="flex items-center gap-3">
        <Image src={avatar} alt={author} width={36} height={36} className="rounded-full object-cover" />
        <span className="font-[family-name:var(--font-manrope)] text-sm font-medium text-primary-dark">{author}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const firstHalf = testimonials.slice(0, 3);
  const secondHalf = testimonials.slice(3);

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="mb-16 text-center">
          <SectionBadge>Testimonials</SectionBadge>
          <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-medium tracking-tight text-primary-dark md:text-4xl lg:text-[50px]">Hear from our clients</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-body-text">Do not just take our word for it — see what our clients have to say about working with JW Home Renovation</p>
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
