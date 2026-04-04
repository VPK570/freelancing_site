import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — VPK",
  description:
    "Learn about my approach, my process, and how I build websites that work.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="min-h-[70vh] flex items-center px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-[1400px] mx-auto w-full">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 font-medium">
              About Me
            </p>
            <h1
              className="font-display leading-[0.9] tracking-tight max-w-4xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              I&apos;m Krishna — a freelance{" "}
              <span className="text-primary">web designer & developer</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface/60 leading-relaxed max-w-2xl mt-6">
              Based in Chennai, I work with businesses and individuals who want a modern, professional website. I handle everything from design to launch.
            </p>
          </div>
        </section>

        {/* Philosophy + Process */}
        <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 border-t border-outline/15">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
              <div>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 font-medium">
                  My Approach
                </p>
                <h2
                  className="font-display leading-[0.9] tracking-tight mb-6"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  Built with{" "}
                  <span className="text-primary">purpose</span>
                </h2>
                <p className="text-base text-on-surface/60 leading-relaxed mb-6">
                  I believe every website should have a clear purpose. Not just look good — but actually work for your business. I focus on clean design, fast performance, and building things that are easy to maintain.
                </p>
                <p className="text-base text-on-surface/60 leading-relaxed">
                  As a freelancer, you get my full attention on every project. No handoffs, no junior designers — just direct communication and quality work from start to finish.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-8 font-medium">
                  My Process
                </p>
                <div className="space-y-0">
                  {[
                    {
                      step: "01",
                      title: "Understanding",
                      desc: "I learn about your goals, your audience, and what success looks like for you.",
                    },
                    {
                      step: "02",
                      title: "Design",
                      desc: "I create modern, clean designs that reflect your brand and engage your visitors.",
                    },
                    {
                      step: "03",
                      title: "Development",
                      desc: "I build responsive, functional websites using the latest web technologies.",
                    },
                    {
                      step: "04",
                      title: "Delivery",
                      desc: "I launch your website with full support and make sure everything runs smoothly.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="border-b border-outline/15 py-6 first:pt-0 last:border-0"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-xs font-mono text-primary/60 mt-0.5 tabular-nums">
                          {item.step}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold tracking-tight mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-on-surface/50 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-outline/15 bg-surface/50 px-4 sm:px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 font-medium">
              Work With Me
            </p>
            <h2
              className="font-display leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              Ready to build something{" "}
              <span className="text-primary">great</span>?
            </h2>
            <Button href="/contact" className="mx-auto">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
