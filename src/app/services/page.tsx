import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Web Design, Development, Branding",
  description: "Explore our editorial-grade design, performance-first development, and strategic branding services.",
};

const services = [
  {
    number: "01",
    title: "Web Design",
    description: "Custom, editorial-grade design that breaks the mold. No templates. No shortcuts.",
    features: ["UI/UX Design", "Design Systems", "Responsive Design", "Prototyping"],
  },
  {
    number: "02",
    title: "Development",
    description: "Pixel-perfect implementation with modern frameworks. Performance-first architecture.",
    features: ["Next.js", "React", "Headless CMS", "E-Commerce"],
  },
  {
    number: "03",
    title: "Branding",
    description: "Visual identity systems that communicate authority and permanence.",
    features: ["Logo Design", "Brand Guidelines", "Typography Systems", "Color Strategy"],
  },
  {
    number: "04",
    title: "Strategy",
    description: "Data-informed decisions that align your digital presence with business goals.",
    features: ["Content Strategy", "SEO", "Analytics", "Conversion Optimization"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-[1920px] mx-auto">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6">
              What We Do
            </p>
            <h1
              className="font-display uppercase tracking-tighter leading-[0.85] mb-16 md:mb-24"
              style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)" }}
            >
              SERVICES
              <br />
              THAT <span className="text-primary">DELIVER</span>
            </h1>

            <div>
              {services.map((service) => (
                <div
                  key={service.number}
                  className="border-t border-outline/20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
                >
                  <div className="md:col-span-1">
                    <p className="text-xs uppercase tracking-widest text-primary">
                      {service.number}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-lg text-on-surface/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-on-surface/50 uppercase tracking-wider"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="border-t border-outline/20" />
            </div>

            <div className="mt-16 md:mt-24 text-center">
              <Button href="/contact">Start a Project</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
