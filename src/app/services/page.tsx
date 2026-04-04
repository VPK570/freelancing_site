import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import type { Metadata } from "next";
import { ArrowRight, Globe, Layout, Palette, RefreshCw, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — VPK",
  description:
    "Website development, landing pages, UI/UX design, redesign, and maintenance.",
};

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Website Development",
    description:
      "Custom websites built with modern tech — fast, responsive, and optimized for performance.",
    features: ["Next.js / React", "Responsive Design", "Performance Optimized", "SEO Friendly"],
  },
  {
    icon: Layout,
    number: "02",
    title: "Landing Pages",
    description:
      "High-converting pages designed for campaigns, product launches, and lead generation.",
    features: ["Conversion Focused", "A/B Testing Ready", "Fast Load Times", "Mobile First"],
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    description:
      "Clean, user-centered design that looks great and feels intuitive to use.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "Website Redesign",
    description:
      "Transform outdated sites into modern, professional experiences that reflect your brand.",
    features: ["Visual Refresh", "Content Strategy", "Migration Support", "Improved UX"],
  },
  {
    icon: Wrench,
    number: "05",
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and performance optimization to keep your site running smoothly.",
    features: ["Bug Fixes", "Content Updates", "Performance Monitoring", "Security Updates"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 font-medium">
              What I Do
            </p>
            <h1
              className="font-display leading-[0.9] tracking-tight max-w-4xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Services that{" "}
              <span className="text-primary">deliver results</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface/60 leading-relaxed max-w-2xl mt-6">
              From concept to launch, I provide end-to-end web services designed to help your business grow online.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 border-t border-outline/15">
          <div className="max-w-[1400px] mx-auto">
            <div className="space-y-0">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="border-b border-outline/15 py-12 md:py-16 first:pt-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    <div className="md:col-span-1">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-xs font-mono text-primary/60 mb-2 tabular-nums">
                        {service.number}
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-base text-on-surface/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-on-surface/50"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 md:mt-24 text-center">
              <p className="text-on-surface/60 mb-6 text-lg">
                Have a project in mind? Let&apos;s talk about how I can help.
              </p>
              <Button href="/contact">
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
