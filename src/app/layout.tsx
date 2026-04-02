import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NoiseOverlay from "@/components/NoiseOverlay";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio — Web Design & Development",
  description: "Websites that command attention. Structural Brutalism meets high-end editorial design.",
  openGraph: {
    title: "Studio — Web Design & Development",
    description: "Websites that command attention. Structural Brutalism meets high-end editorial design.",
    type: "website",
    locale: "en_US",
    siteName: "Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio — Web Design & Development",
    description: "Websites that command attention. Structural Brutalism meets high-end editorial design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoiseOverlay />
          {/* Ambient Background Blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div 
              className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] 
                         bg-primary/10 rounded-full blur-[120px] animate-pulse"
              style={{ animationDuration: '8s' }}
            />
            <div 
              className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] 
                         bg-primary/5 rounded-full blur-[120px] animate-pulse"
              style={{ animationDuration: '12s', animationDelay: '2s' }}
            />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
