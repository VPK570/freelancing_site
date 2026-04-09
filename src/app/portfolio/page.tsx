import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import {
  AuraInteriorsThumbnail,
  CoolFixWebThumbnail,
  IronPeakThumbnail,
  KallakuriKitchenThumbnail,
  SmileCareThumbnail,
} from "@/components/ShowcaseThumbnails";

export const metadata: Metadata = {
  title: "Portfolio — VPK",
  description:
    "A collection of web projects showcasing design and development work.",
};

const projects = [
  {
    slug: "aura-interiors",
    title: "Aura Interiors",
    category: "Interior Design",
    year: "2024",
    Thumbnail: AuraInteriorsThumbnail,
    span: "wide",
  },
  {
    slug: "coolfix-web",
    title: "CoolFix Web",
    category: "Technology",
    year: "2024",
    Thumbnail: CoolFixWebThumbnail,
    span: "standard",
  },
  {
    slug: "ironpeak",
    title: "Iron Peak",
    category: "Fitness",
    year: "2024",
    Thumbnail: IronPeakThumbnail,
    span: "standard",
  },
  {
    slug: "kallakuri-kitchen",
    title: "Kallakuri Kitchen",
    category: "Food & Beverage",
    year: "2024",
    Thumbnail: KallakuriKitchenThumbnail,
    span: "wide",
  },
  {
    slug: "smilecare",
    title: "SmileCare",
    category: "Healthcare",
    year: "2024",
    Thumbnail: SmileCareThumbnail,
    span: "standard",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 font-medium">
              Portfolio
            </p>
            <h1
              className="font-display leading-[0.9] tracking-tight max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Selected <span className="text-primary">work</span>
            </h1>
            <p className="text-lg text-on-surface/60 leading-relaxed max-w-xl mt-4">
              A collection of websites I&apos;ve designed and built.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 md:px-8 pb-16 md:pb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => {
                const Thumbnail = project.Thumbnail;
                const isWide = project.span === "wide";

                return (
                  <Link
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    className={isWide ? "md:col-span-2" : ""}
                  >
                    <article className="group bg-surface border border-outline/15 overflow-hidden hover:border-primary/40 transition-colors duration-500">
                      <div
                        className={`relative overflow-hidden ${isWide ? "aspect-[21/9] md:aspect-[2.5/1]" : "aspect-[4/3]"}`}
                      >
                        <div className="absolute inset-0 bg-surface">
                          <Thumbnail />
                        </div>
                        <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/5 transition-colors duration-500" />
                      </div>
                      <div className="p-5 md:p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs uppercase tracking-widest text-on-surface/40 font-medium">
                            {project.category}
                          </span>
                          <span className="text-xs text-on-surface/20">—</span>
                          <span className="text-xs text-on-surface/40">{project.year}</span>
                        </div>
                        <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h2>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
