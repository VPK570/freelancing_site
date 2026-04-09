import Link from "next/link";

const footerLinks = {
  navigation: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-outline/15 bg-surface/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-4">
              VPK
            </h3>
            <p className="text-on-surface/60 text-sm leading-relaxed max-w-xs">
              Freelance web designer & developer from Chennai. I build modern, fast websites that help businesses grow online.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-2 font-medium">Navigation</p>
            {footerLinks.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-on-surface/60 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-surface/40 tracking-wider">
            &copy; {new Date().getFullYear()} VPK. All rights reserved.
          </p>
          <p className="text-xs text-on-surface/40 tracking-wider">
            Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
