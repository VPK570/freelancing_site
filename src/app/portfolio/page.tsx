import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio — Selected Works",
  description: "A collection of digital monuments, e-commerce platforms, and corporate identities crafted with intentionality.",
};

const projects = [
  { title: "Aurora Finance", category: "E-Commerce", year: "2024", image: "/images/projects/aurora_finance.png" },
  { title: "Monolith Studios", category: "Corporate", year: "2024", image: "/images/projects/monolith_studios.png" },
  { title: "Chennai Gallery", category: "Cultural", year: "2025", image: "/images/projects/chennai_gallery.png" },
  { title: "Vertex Labs", category: "SaaS", year: "2023", image: "/images/projects/vertex_labs.png" },
  { title: "Terraform Co", category: "E-Commerce", year: "2024", image: "/images/projects/terraform_co.png" },
  { title: "Pulse Health", category: "Healthcare", year: "2023", image: "/images/projects/pulse_health.png" },
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href={`/portfolio#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group block"
                >
                  <div className="bg-surface border border-outline/20 aspect-[4/3] flex flex-col relative overflow-hidden group-hover:bg-surface-container transition-colors duration-500">
                    <div className="relative w-full flex-1 border-b border-outline/20 overflow-hidden bg-background">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} project showcase`}
                          fill
                          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-background/50 text-on-surface/30 uppercase text-sm tracking-widest">
                          Image Pending
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 md:p-8 flex justify-between items-end relative z-10 bg-surface">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-2">
                          {project.category} — {project.year}
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
                          {project.title}
                        </h2>
                      </div>
                      <div className="text-xs uppercase tracking-widest text-primary border border-primary/20 px-3 py-1 rounded-none bg-primary/5">
                        Coming Soon
                      </div>
                    </div>
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
