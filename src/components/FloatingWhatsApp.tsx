"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { whatsappLink } from "@/lib/content";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();

  return (
    <motion.a
      href={whatsappLink(t.contact.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-gold-light"
      aria-label="WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.5 1.34 5.02L2 22l5.12-1.34A9.96 9.96 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.18c-1.6 0-3.16-.43-4.52-1.24l-.32-.19-3.04.8.81-2.96-.21-.31A8.17 8.17 0 013.86 12c0-4.51 3.67-8.18 8.18-8.18S20.22 7.49 20.22 12s-3.67 8.18-8.18 8.18zm4.5-6.13c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42-.14-.01-.31-.01-.47-.01a.9.9 0 00-.65.31c-.22.24-.86.84-.86 2.06 0 1.21.88 2.38 1 2.55.12.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
      </svg>
    </motion.a>
  );
}
