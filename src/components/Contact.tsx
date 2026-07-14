"use client";

import { useLanguage } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="relative bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-gold uppercase">
            {t.contact.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft/85">
            {t.contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(t.contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-ink px-9 py-4 text-xs tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-gold hover:text-ink sm:w-auto"
            >
              {t.contact.whatsapp}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-ink/20 px-9 py-4 text-xs tracking-[0.2em] text-ink uppercase transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              {t.contact.instagram}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-sm tracking-[0.1em] text-ink-soft/70">
            {SITE.instagramHandle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
