import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden rounded-b-3xl bg-[#101014]">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_interior.png"
          alt="Modern open concept interior"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Cinematic gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101014] via-[#101014]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/30 to-[#101014]/40" />
        {/* Extra mobile overlay for readability */}
        <div className="absolute inset-0 bg-[#101014]/40 md:bg-transparent" />
        {/* Subtle noise texture for film grain feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px 128px' }} />
      </div>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-24 pt-24 sm:px-6 md:items-center md:pb-0 md:pt-32">
        <div className="grid w-full items-center gap-8 md:grid-cols-12 md:gap-8">
          {/* Left: Copy */}
          <div className="flex flex-col gap-5 md:col-span-6 md:gap-7 lg:col-span-5">
            <div className="hero-enter hero-enter-1">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-white/80">Available for work</span>
              </span>
            </div>

            <h1 className="hero-enter hero-enter-2 font-[family-name:var(--font-manrope)] text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
              Your trusted partner for quality home improvement
            </h1>

            <p className="hero-enter hero-enter-3 max-w-md text-[17px] leading-relaxed text-white/55">
              JW Home Renovation delivers expert home improvements, creating
              beautiful and functional spaces with quality craftsmanship.
            </p>

            <div className="hero-enter hero-enter-4 flex items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-6 rounded-full border border-white/[0.08] bg-white/[0.06] py-2 pl-7 pr-2 font-[family-name:var(--font-manrope)] text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12]"
              >
                Work with us
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-110">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10m0 0L9 4m4 4L9 12"
                      stroke="#101014"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right: Floating cards for layered depth */}
          <div className="relative hidden min-h-[600px] md:col-span-6 md:block lg:col-span-7">

            {/* Testimonial 1 — top left */}
            <div className="hero-enter-scale absolute -left-6 top-0 z-30 max-w-[240px] rounded-2xl border border-white/10 bg-[#101014]/70 p-4 shadow-2xl backdrop-blur-xl lg:-left-8 lg:top-4">
              <div className="mb-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={`t1-${i}`} className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] leading-relaxed text-white/70">
                &ldquo;Exceptional quality and professionalism from start to finish. Transformed our home.&rdquo;
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-600" />
                <span className="text-[11px] font-medium text-white/50">Rachel M.</span>
              </div>
            </div>

            {/* Testimonial 2 — mid left */}
            <div className="hero-enter-scale absolute -left-4 top-[170px] z-30 max-w-[220px] rounded-2xl border border-white/10 bg-[#101014]/60 p-4 shadow-2xl backdrop-blur-xl lg:left-0 lg:top-[180px]">
              <div className="mb-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={`t2-${i}`} className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] leading-relaxed text-white/70">
                &ldquo;Our loft conversion added so much space. Thoughtful design and exceptional build quality.&rdquo;
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-200 to-sky-600" />
                <span className="text-[11px] font-medium text-white/50">Sophie W.</span>
              </div>
            </div>

            {/* Testimonial 3 — bottom center-left */}
            <div className="hero-enter-scale absolute bottom-16 left-4 z-30 max-w-[230px] rounded-2xl border border-white/10 bg-[#101014]/70 p-4 shadow-2xl backdrop-blur-xl lg:bottom-20 lg:left-12">
              <div className="mb-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={`t3-${i}`} className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] leading-relaxed text-white/70">
                &ldquo;The patio is stunning. Professional team, on time and on budget. Couldn&apos;t ask for more.&rdquo;
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-600" />
                <span className="text-[11px] font-medium text-white/50">Michael T.</span>
              </div>
            </div>

            {/* Project card 1 — Kitchen (top right) */}
            <div className="hero-enter-scale absolute -right-4 top-0 z-20 w-60 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl backdrop-blur-xl lg:right-0 lg:w-64">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/kitchen_renovation.png"
                  alt="Kitchen renovation"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
              <div className="px-1 pb-1 pt-2.5">
                <p className="font-[family-name:var(--font-manrope)] text-xs font-medium text-white/90">
                  Recent Project
                </p>
                <p className="mt-0.5 text-[11px] text-white/40">
                  Kitchen — 4 weeks
                </p>
              </div>
            </div>

            {/* Project card 2 — Bathroom (bottom right) */}
            <div className="hero-enter-scale absolute -right-2 bottom-4 z-20 w-56 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl backdrop-blur-xl lg:bottom-8 lg:right-2 lg:w-60">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/bathroom_remodel.png"
                  alt="Bathroom renovation"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
              <div className="px-1 pb-1 pt-2.5">
                <p className="font-[family-name:var(--font-manrope)] text-xs font-medium text-white/90">
                  Recent Project
                </p>
                <p className="mt-0.5 text-[11px] text-white/40">
                  Bathroom — 6 weeks
                </p>
              </div>
            </div>

            {/* Stats floating pill — center right */}
            <div className="hero-enter-scale absolute right-8 top-[55%] z-20 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 shadow-lg backdrop-blur-xl lg:right-16">
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-manrope)] text-2xl font-light text-white">250+</span>
                <span className="text-xs text-white/40">Projects<br />completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solid dark bottom edge — no fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-[#101014]" />
    </section>
  );
}
