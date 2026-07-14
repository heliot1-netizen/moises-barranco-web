"use client";

import { useLanguage } from "@/lib/i18n";
import { SITE } from "@/lib/content";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ivory py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center lg:flex-row lg:justify-between lg:px-12 lg:text-left">
        <div>
          <p className="font-display text-lg tracking-[0.15em] uppercase text-ink">
            Moises Barranco
          </p>
          <p className="mt-1 text-xs tracking-[0.1em] text-ink-soft/60">
            {t.footer.madeWith}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs tracking-[0.1em] uppercase text-ink-soft/70">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <span>
            © {year} Moises Barranco — {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
