import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NoiseOverlay from "@/components/NoiseOverlay";
import InteractiveBackground from "@/components/InteractiveBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VPK — Freelance Web Designer & Developer",
  description: "I build modern, fast websites that help businesses grow online. Based in Chennai, working globally.",
  openGraph: {
    title: "VPK — Freelance Web Designer & Developer",
    description: "I build modern, fast websites that help businesses grow online. Based in Chennai, working globally.",
    type: "website",
    locale: "en_US",
    siteName: "VPK",
  },
  twitter: {
    card: "summary_large_image",
    title: "VPK — Freelance Web Designer & Developer",
    description: "I build modern, fast websites that help businesses grow online. Based in Chennai, working globally.",
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
      className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
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
          <InteractiveBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
