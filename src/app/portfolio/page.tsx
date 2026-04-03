import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Selected Works",
  description: "A collection of digital monuments, e-commerce platforms, and corporate identities crafted with intentionality.",
};

const projects = [
  { slug: "aura-interiors", title: "Aura Interiors", category: "Interior Design", year: "2024" },
  { slug: "coolfix-web", title: "CoolFix Web", category: "Technology", year: "2024" },
  { slug: "ironpeak", title: "Iron Peak", category: "Fitness", year: "2024" },
  { slug: "kallakuri-kitchen", title: "Kallakuri Kitchen", category: "Food & Beverage", year: "2024" },
  { slug: "smilecare", title: "SmileCare", category: "Healthcare", year: "2024" },
];

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-[1920px] mx-auto">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6">
              Portfolio
            </p>
            <h1
              className="font-display uppercase tracking-tighter leading-[0.85] mb-16 md:mb-24"
              style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)" }}
            >
              SELECTED
              <br />
              <span className="text-primary">WORK</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="bg-surface border border-outline/20 aspect-[4/3] flex items-center justify-center group hover:bg-surface-container hover:border-primary/40 transition-all duration-500"
                >
                  <div className="text-center px-8">
                    <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-2">
                      {project.category} — {project.year}
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
