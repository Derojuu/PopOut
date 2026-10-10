import localFont from "next/font/local";

/**
 * Poppins is self-hosted so the typography matches the original site exactly.
 * Each weight ships a latin and a latin-ext subset, mirroring the two
 * @font-face declarations per weight in the source stylesheet.
 */
export const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins-400-latin-ext.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins-500-latin-ext.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins-600-latin.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins-600-latin-ext.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins-700-latin.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/poppins-700-latin-ext.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});
