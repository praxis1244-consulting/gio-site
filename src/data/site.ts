export const site = {
  brand: {
    name: "Zero2Hero",
    mark: "ZERO2HERO",
    accent: "·GG",
    domain: "zero2hero.gg",
    tagline: "De Zero a Hero.",
  },
  // Etiquetas vía i18n (Nav.<key>); el href se localiza con el Link de @/i18n/navigation.
  nav: [
    { key: "coaches", href: "/#coaches" },
    { key: "offers", href: "/#offers" },
    { key: "community", href: "/#comunidad" },
    { key: "faq", href: "/#faq" },
  ],
  // TODO: pegar invite real de Discord
  discord: { invite: "https://discord.gg/REEMPLAZAR", label: "Discord" },
  // TODO: número real
  whatsapp: "https://wa.me/56000000000",
  socials: { x: "#", twitch: "#", youtube: "#" },
} as const;
