"use client";

import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="especialidades" className="relative bg-black py-28 md:py-36">
      <div className="grain" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.35em] text-gold-light uppercase">
            {t.expertise.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl text-ivory md:text-5xl">
            {t.expertise.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2">
          {t.expertise.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group relative h-full bg-black p-10 transition-colors duration-500 hover:bg-ink-soft/40">
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-5 text-2xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                  {item.description}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
