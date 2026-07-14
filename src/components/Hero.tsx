"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { whatsappLink } from "@/lib/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2a271f,#0b0a08_65%)]" />
      <div className="grain" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display select-none text-[38vw] leading-none text-white/[0.035]">
          MB
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-xs tracking-[0.35em] text-gold-light uppercase"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient-gold">{t.hero.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-ivory/70 md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink(t.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-gold px-8 py-3.5 text-xs tracking-[0.2em] text-ink uppercase transition-colors hover:bg-gold-light sm:w-auto"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#portafolio"
            className="w-full rounded-full border border-ivory/25 px-8 py-3.5 text-xs tracking-[0.2em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-ivory/60"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">
          {t.hero.scroll}
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.a>
    </section>
  );
}
