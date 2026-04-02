import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Architects of the Web",
  description: "Learn about our philosophy, our process, and why we build digital monuments, not just websites.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="min-h-screen px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-[1920px] mx-auto">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6">
              About
            </p>
            <h1
              className="font-display uppercase tracking-tighter leading-[0.85] mb-12 md:mb-16"
              style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)" }}
            >
              WE ARE
              <br />
              <span className="text-primary">ARCHITECTS</span>
              <br />
              OF THE WEB
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-6">
                  Our Philosophy
                </h2>
                <p className="text-lg text-on-surface/70 leading-relaxed mb-6">
                  We believe websites should be architectural statements. Not templates. Not trends.
                  Permanent, purposeful digital spaces that command attention and earn trust.
                </p>
                <p className="text-lg text-on-surface/70 leading-relaxed">
                  Based in Chennai, we work with clients globally who are ready to break free from
                  the generic and build something that lasts.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-6">
                  The Process
                </h2>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Discovery", desc: "We listen. We understand your vision, audience, and objectives." },
                    { step: "02", title: "Architecture", desc: "Information architecture, wireframes, and structural planning." },
                    { step: "03", title: "Design", desc: "Visual design that pushes boundaries while serving function." },
                    { step: "04", title: "Build", desc: "Pixel-perfect development with performance at the core." },
                  ].map((item) => (
                    <div key={item.step} className="border-b border-outline/20 pb-6">
                      <p className="text-xs uppercase tracking-widest text-primary mb-2">
                        {item.step}
                      </p>
                      <h3 className="text-lg font-display uppercase tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-on-surface/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
