"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useLanguage } from "@/lib/i18n";
import { whatsappLink } from "@/lib/content";

const sections = [
  { id: "sobre-mi", labelKey: "about" as const },
  { id: "especialidades", labelKey: "expertise" as const },
  { id: "portafolio", labelKey: "portfolio" as const },
  { id: "estudio", labelKey: "studio" as const },
  { id: "contacto", labelKey: "contact" as const },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-line py-3"
          : "bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="#inicio"
          className={clsx(
            "font-display text-lg tracking-[0.2em] uppercase transition-colors",
            scrolled ? "text-ink" : "text-ivory",
          )}
        >
          Moises Barranco
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={clsx(
                "text-xs tracking-[0.15em] uppercase transition-colors hover:text-gold",
                scrolled ? "text-ink-soft" : "text-ivory/90",
              )}
            >
              {t.nav[s.labelKey]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className={clsx(
              "text-xs tracking-[0.2em] uppercase border rounded-full px-3 py-1 transition-colors",
              scrolled
                ? "border-ink/20 text-ink hover:border-gold hover:text-gold"
                : "border-ivory/40 text-ivory hover:border-gold hover:text-gold",
            )}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href={whatsappLink(t.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-xs tracking-[0.15em] uppercase text-ink transition-colors hover:bg-gold-light"
          >
            {t.nav.book}
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            "flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden",
          )}
        >
          <span
            className={clsx(
              "h-px w-6 transition-all",
              scrolled ? "bg-ink" : "bg-ivory",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={clsx(
              "h-px w-6 transition-all",
              scrolled ? "bg-ink" : "bg-ivory",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-line/60 bg-ivory px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-ink-soft hover:text-gold"
              >
                {t.nav[s.labelKey]}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-4">
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="rounded-full border border-ink/20 px-3 py-1 text-xs tracking-[0.2em] uppercase text-ink"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <a
                href={whatsappLink(t.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-5 py-2 text-xs tracking-[0.15em] uppercase text-ink"
              >
                {t.nav.book}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
