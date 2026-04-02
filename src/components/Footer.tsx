import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { href: "https://twitter.com/studiodesign", label: "Twitter" },
    { href: "https://instagram.com/studio.architechs", label: "Instagram" },
    { href: "https://linkedin.com/company/studio-digital", label: "LinkedIn" },
    { href: "https://dribbble.com/studio_creatives", label: "Dribbble" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-outline/20 bg-surface">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-4">
              STUDIO
            </h3>
            <p className="text-on-surface/70 text-sm leading-relaxed max-w-xs">
              Websites that command attention. Structural Brutalism meets high-end editorial design.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-2">Navigation</p>
            {footerLinks.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-on-surface/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-2">Social</p>
            {footerLinks.social.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-on-surface/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-surface/50 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Studio. All rights reserved.
          </p>
          <p className="text-xs text-on-surface/50 uppercase tracking-wider">
            Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
