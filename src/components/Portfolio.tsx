"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

type PortfolioItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  span?: string;
  objectPosition?: string;
};

const items: PortfolioItem[] = [
  {
    type: "image",
    src: "/images/portfolio/trabajo-01.jpg",
    alt: "Detalle de balayage castaño con reflejos caramelo",
    span: "md:col-span-2 md:row-span-2",
    objectPosition: "object-[35%_30%]",
  },
  {
    type: "image",
    src: "/images/portfolio/trabajo-02.jpg",
    alt: "Balayage rubio ceniza, vista trasera",
    objectPosition: "object-[50%_10%]",
  },
  {
    type: "image",
    src: "/images/portfolio/trabajo-03.jpg",
    alt: "Mechas money-piece con acabado editorial",
    objectPosition: "object-[50%_15%]",
  },
  {
    type: "image",
    src: "/images/portfolio/trabajo-04.jpg",
    alt: "Balayage rubio cálido, acabado natural",
    objectPosition: "object-[50%_10%]",
  },
  {
    type: "image",
    src: "/images/portfolio/trabajo-05.jpg",
    alt: "Transformación de color en el estudio",
    objectPosition: "object-[50%_18%]",
  },
  // Para añadir un vídeo en el futuro, agrega un objeto así:
  // {
  //   type: "video",
  //   src: "/videos/portfolio/proceso-01.mp4",
  //   poster: "/images/portfolio/proceso-01-poster.jpg",
  //   alt: "Proceso de coloración en estudio",
  // },
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

        <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.06} className={item.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-sm">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    aria-label={item.alt}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.objectPosition ?? ""}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.objectPosition ?? ""}`}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/30" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
