"use client";

import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import ArtPanel from "@/components/ArtPanel";

const tiles: {
  variant: "ink" | "gold" | "ivory";
  span?: string;
}[] = [
  { variant: "gold", span: "md:col-span-2 md:row-span-2" },
  { variant: "ink" },
  { variant: "ivory" },
  { variant: "ink" },
  { variant: "gold" },
  { variant: "ivory", span: "md:col-span-2" },
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portafolio" className="relative bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.35em] text-gold uppercase">
            {t.portfolio.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-5xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft/80">
            {t.portfolio.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal key={i} delay={i * 0.06} className={tile.span}>
              <div className="group relative h-full w-full overflow-hidden">
                <ArtPanel
                  variant={tile.variant}
                  label={t.portfolio.comingSoon}
                  className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
