/**
 * Central brand + contact configuration for Wild Maze Safaris.
 * Update contact details here and they change site-wide.
 */

import logoAsset from "@/assets/wildmaze-logo.png.asset.json";

export const site = {
  name: "Wild Maze Safaris",
  tagline: "Beyond the ordinary",
  logo: logoAsset.url,
  email: "info@wildmazesafaris.com",
  phones: ["0724433483", "0719222750"],
  // Kenyan numbers in international format for tel:/WhatsApp
  phoneLinks: ["+254724433483", "+254719222750"],
  whatsapp: {
    display: "0719222750",
    number: "254719222750",
    message: "Hello Wild Maze Safaris, I would like to enquire about planning a safari.",
  },
  base: "https://wildmazesafaris.com",
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
