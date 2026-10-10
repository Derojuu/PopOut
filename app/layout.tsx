import type { Metadata, Viewport } from "next";

import { poppins } from "@/lib/fonts";
import { SITE } from "@/constants/site";

import "./globals.css";

export const metadata: Metadata = {
  title: `${SITE.name} — Your front row seat to life's best moments`,
  description: SITE.description,
  icons: { icon: "/favicon.png" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121217" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} dark`} style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <script
          // Applies the stored theme before paint so the first frame matches the capture.
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('popout-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light'}}catch(e){}`,
          }}
        />
      </head>
      <body className="font-poppins antialiased">
        <div style={{ display: "contents" }}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
