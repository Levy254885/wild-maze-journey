/**
 * Central brand + contact configuration for WildMaze Safaris.
 * Update contact details here and they change site-wide.
 */

export const site = {
  name: "WildMaze Safaris",
  tagline: "Breaking Normalcy",
  logo: "/images/wildmaze-logo.png",
  email: "info@wildmazesafaris.com",
  phones: ["0724433483", "0719222750"],
  // Kenyan numbers in international format for tel:/WhatsApp
  phoneLinks: ["+254724433483", "+254719222750"],
  whatsapp: {
    display: "0719222750",
    number: "254719222750",
    message: "Hello WildMaze Safaris, I would like to enquire about planning a safari.",
  },
  base: "https://wildmazesafaris.com",
  /**
   * Google Maps for the business itself (keyless embed — works on any host,
   * including Vercel). Update the query below if the client supplies an
   * exact street address or a Google Business Profile place ID.
   */
  mapQuery: "WildMaze Safaris, Nairobi, Kenya",
  mapEmbed: "https://www.google.com/maps?q=WildMaze+Safaris%2C+Nairobi%2C+Kenya&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=WildMaze+Safaris%2C+Nairobi%2C+Kenya",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  site.whatsapp.message,
)}`;

export const navigation = [
  { label: "Our Story", to: "/our-story" },
  { label: "Our Safaris", to: "/safaris" },
  { label: "Experiences", to: "/experiences" },
  { label: "Destinations", to: "/destinations" },
  { label: "Celebrations", to: "/celebrations" },
  { label: "Inspiration", to: "/inspiration" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;
