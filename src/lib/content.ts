export const SITE = {
  brand: "Moises Barranco",
  whatsappNumber: "34631376873",
  instagramHandle: "@moises_barranco",
  instagramUrl: "https://www.instagram.com/moises_barranco",
  address: "Carrer d'En Cortines, 5, 08003 Barcelona",
  addressArea: "Ciutat Vella, Barcelona",
  mapsUrl: "https://maps.app.goo.gl/Cr4L9NtCPohMXFPx9",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Moises+Barranco+estudio+privado,+Carrer+d'En+Cortines,+5,+08003+Barcelona&output=embed",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
