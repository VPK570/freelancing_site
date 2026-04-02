import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Selected Works",
  description: "A collection of digital monuments, e-commerce platforms, and corporate identities crafted with intentionality.",
};

const projects = [
  { title: "Aurora Finance", category: "E-Commerce", year: "2024" },
  { title: "Monolith Studios", category: "Corporate", year: "2024" },
  { title: "Chennai Gallery", category: "Cultural", year: "2024" },
  { title: "Vertex Labs", category: "SaaS", year: "2023" },
  { title: "Terraform Co", category: "E-Commerce", year: "2023" },
  { title: "Pulse Health", category: "Healthcare", year: "2023" },
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
                <div
                  key={project.title}
                  className="bg-surface border border-outline/20 aspect-[4/3] flex items-center justify-center group hover:bg-surface-container transition-colors duration-500"
                >
                  <div className="text-center px-8">
                    <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-2">
                      {project.category} — {project.year}
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter">
                      {project.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
