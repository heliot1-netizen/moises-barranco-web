"use client";

import { useLanguage } from "@/lib/i18n";
import { SITE } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Studio() {
  const { t } = useLanguage();

  return (
    <section id="estudio" className="relative bg-black py-28 md:py-36">
      <div className="grain" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-xs tracking-[0.35em] text-gold-light uppercase">
              {t.studio.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-4 text-4xl text-ivory md:text-5xl">
              {t.studio.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[15px] leading-relaxed text-ivory/65">
              {t.studio.body}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-light">
                  {t.studio.addressLabel}
                </p>
                <p className="font-display mt-2 text-lg text-ivory">
                  {SITE.address}
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold-light">
                  {t.studio.appointmentLabel}
                </p>
                <p className="font-display mt-2 text-lg text-ivory">
                  {t.studio.appointmentValue}
                </p>
              </div>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs tracking-[0.2em] uppercase text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
              >
                {t.studio.mapCta} →
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="h-full min-h-[360px] w-full overflow-hidden border border-white/10 grayscale invert-[0.92] contrast-[1.05] transition-all duration-500 hover:grayscale-0 hover:invert-0">
            <iframe
              title="Ubicación del estudio"
              src={SITE.mapEmbedSrc}
              className="h-full w-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
