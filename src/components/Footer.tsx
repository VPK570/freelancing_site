import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  contact: [
    { href: "mailto:projects@studio.design", label: "Email" },
    { href: "/contact", label: "Start a Project" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-outline/20 bg-surface">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <h3 className="font-display text-lg font-bold uppercase tracking-tight">STUDIO</h3>
            <span className="hidden md:block w-px h-4 bg-outline/20"></span>
            <p className="text-on-surface/70 text-xs tracking-wider uppercase hidden lg:block">
              Websites that command attention.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.navigation.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs uppercase tracking-widest text-on-surface/70 hover:text-primary transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.contact.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs uppercase tracking-widest text-on-surface/70 hover:text-primary transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-outline/20 flex flex-col sm:flex-row justify-between items-center gap-4">
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
