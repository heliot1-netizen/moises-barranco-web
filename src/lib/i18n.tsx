"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

interface Dictionary {
  nav: {
    about: string;
    expertise: string;
    portfolio: string;
    studio: string;
    contact: string;
    book: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    quote: string;
    stats: { value: string; label: string }[];
  };
  expertise: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    comingSoon: string;
  };
  studio: {
    eyebrow: string;
    title: string;
    body: string;
    addressLabel: string;
    appointmentLabel: string;
    appointmentValue: string;
    mapCta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    whatsapp: string;
    instagram: string;
    whatsappMessage: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

const dictionary: Record<Lang, Dictionary> = {
  es: {
    nav: {
      about: "Sobre mí",
      expertise: "Especialidades",
      portfolio: "Portafolio",
      studio: "Estudio",
      contact: "Contacto",
      book: "Reservar cita",
    },
    hero: {
      eyebrow: "Colorista · Estudio privado · Barcelona",
      title: "El color, elevado a arte",
      subtitle:
        "21 años de oficio dedicados a transformar el cabello en una expresión de identidad. Técnica de precisión, mirada fotográfica y un estudio privado pensado para vivir el color de otra manera.",
      ctaPrimary: "Reservar por WhatsApp",
      ctaSecondary: "Ver portafolio",
      scroll: "Descubre",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Moises Barranco",
      lead: "Colorista con 21 años de trayectoria, formado entre Colombia y Barcelona, con especialización en mechas cursada en Brasil.",
      body: "Mi trabajo nace de entender el color como lenguaje visual completo: estudié fotografía, maquillaje e iluminación para poder pensar cada resultado como una composición, no solo como una técnica de coloración. Esa mirada integral es la que traigo a cada cita en mi estudio privado de Barcelona, donde cada proceso se diseña a medida del cabello, la piel y la personalidad de quien tengo delante.",
      quote:
        "No sigo tendencias por seguirlas: interpreto a cada persona y diseño el color que mejor cuenta su historia.",
      stats: [
        { value: "21+", label: "años de experiencia" },
        { value: "3", label: "países de formación" },
        { value: "100%", label: "citas a medida" },
      ],
    },
    expertise: {
      eyebrow: "Especialidades",
      title: "Un color, muchas técnicas",
      items: [
        {
          title: "Mechas & Balayage",
          description:
            "Especialización cursada en Brasil. Iluminación de precisión, degradados naturales y acabados de salón editorial.",
        },
        {
          title: "Coloración a medida",
          description:
            "Fórmulas personalizadas según tono de piel, textura y estilo de vida, con un diagnóstico previo detallado.",
        },
        {
          title: "Transformaciones editoriales",
          description:
            "Dirección de color para producciones fotográficas, con criterio de iluminación y composición visual.",
        },
        {
          title: "Asesoría de color personalizada",
          description:
            "Sesiones de consultoría para definir la paleta que mejor representa tu identidad a largo plazo.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Portafolio",
      title: "Trabajos recientes",
      subtitle:
        "Una selección de transformaciones de color realizadas en el estudio, cada una diseñada a medida.",
      comingSoon: "Próximamente",
    },
    studio: {
      eyebrow: "El estudio",
      title: "Un espacio privado en Barcelona",
      body: "Situado en pleno Ciutat Vella, el estudio funciona exclusivamente con cita previa: un ambiente íntimo, sin prisas, pensado para que cada proceso de color se viva con calma y atención total.",
      addressLabel: "Dirección",
      appointmentLabel: "Modalidad",
      appointmentValue: "Solo con cita previa",
      mapCta: "Ver en Google Maps",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Reserva tu cita",
      body: "Cuéntame qué tienes en mente y te responderé personalmente para encontrar el mejor momento en el estudio.",
      whatsapp: "Escribir por WhatsApp",
      instagram: "Seguir en Instagram",
      whatsappMessage:
        "Hola Moises, me gustaría reservar una cita en tu estudio.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      madeWith: "Estudio privado de color · Barcelona",
    },
  },
  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      portfolio: "Portfolio",
      studio: "Studio",
      contact: "Contact",
      book: "Book a session",
    },
    hero: {
      eyebrow: "Hair Colorist · Private Studio · Barcelona",
      title: "Color, elevated to art",
      subtitle:
        "21 years of craft dedicated to turning hair into an expression of identity. Precision technique, a photographer's eye, and a private studio built to experience color differently.",
      ctaPrimary: "Book via WhatsApp",
      ctaSecondary: "View portfolio",
      scroll: "Discover",
    },
    about: {
      eyebrow: "About me",
      title: "Moises Barranco",
      lead: "A colorist with 21 years of experience, trained between Colombia and Barcelona, with a highlights specialization completed in Brazil.",
      body: "My work comes from understanding color as a complete visual language: I studied photography, makeup and lighting so I could approach every result as a composition, not just a coloring technique. That holistic perspective is what I bring to every appointment in my private Barcelona studio, where each process is designed around the hair, the skin tone and the personality in front of me.",
      quote:
        "I don't follow trends for the sake of it: I read each person and design the color that best tells their story.",
      stats: [
        { value: "21+", label: "years of experience" },
        { value: "3", label: "countries of training" },
        { value: "100%", label: "bespoke sessions" },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      title: "One color, many techniques",
      items: [
        {
          title: "Highlights & Balayage",
          description:
            "Specialization completed in Brazil. Precision lighting, natural gradients and editorial-salon finishes.",
        },
        {
          title: "Bespoke coloring",
          description:
            "Custom formulas based on skin tone, hair texture and lifestyle, backed by a thorough prior diagnosis.",
        },
        {
          title: "Editorial transformations",
          description:
            "Color direction for photographic productions, with an eye for lighting and visual composition.",
        },
        {
          title: "Personal color consulting",
          description:
            "Consulting sessions to define the palette that best represents your identity in the long run.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Recent work",
      subtitle:
        "A selection of color transformations created in the studio, each one tailored to the individual.",
      comingSoon: "Coming soon",
    },
    studio: {
      eyebrow: "The studio",
      title: "A private space in Barcelona",
      body: "Located in the heart of Ciutat Vella, the studio works exclusively by appointment: an intimate, unhurried setting designed so every color process is experienced with calm and full attention.",
      addressLabel: "Address",
      appointmentLabel: "Booking",
      appointmentValue: "By appointment only",
      mapCta: "View on Google Maps",
    },
    contact: {
      eyebrow: "Contact",
      title: "Book your session",
      body: "Tell me what you have in mind and I'll personally get back to you to find the best time at the studio.",
      whatsapp: "Message on WhatsApp",
      instagram: "Follow on Instagram",
      whatsappMessage: "Hi Moises, I'd like to book a session at your studio.",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Private color studio · Barcelona",
    },
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("mb-lang");
    if (stored === "es" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, needed to avoid SSR/client hydration mismatch
      setLangState(stored);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("mb-lang", next);
  };

  const value = useMemo(
    () => ({ lang, setLang, t: dictionary[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
