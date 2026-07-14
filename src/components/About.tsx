"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="relative bg-ivory py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm grayscale">
            <Image
              src="/images/moises-barranco.jpg"
              alt="Moises Barranco, colorista"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-xs tracking-[0.35em] text-gold uppercase">
              {t.about.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-display mt-6 text-xl leading-snug text-ink-soft md:text-2xl">
              {t.about.lead}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft/90">
              {t.about.body}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <blockquote className="font-display mt-8 border-l-2 border-gold pl-6 text-lg italic leading-relaxed text-ink">
              &ldquo;{t.about.quote}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {t.about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-gold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.1em] uppercase text-ink-soft/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
