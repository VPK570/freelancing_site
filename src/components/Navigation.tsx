"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  logo?: string;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation({ logo = "STUDIO" }: NavigationProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-outline/20">
        <nav className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold tracking-tight uppercase">
            {logo}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === pathname || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-primary border-b border-primary"
                      : "text-on-surface hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:bg-transparent hover:text-primary border border-primary"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-on-surface"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-4 sm:px-6 md:px-8 md:hidden animate-in slide-in-from-top">
          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => {
              const isActive = link.href === pathname || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-display uppercase tracking-tight transition-colors duration-300 ${
                    isActive ? "text-primary border-l-2 border-primary pl-4" : "text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-white px-6 py-4 text-sm uppercase tracking-wider font-medium text-center mt-4"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
