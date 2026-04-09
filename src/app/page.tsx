import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { slideUp, cinematicReveal, fadeIn } from "@/lib/motion";
import { ArrowRight, Globe, Layout, Palette, RefreshCw, Wrench } from "lucide-react";
import {
  AuraInteriorsThumbnail,
  CoolFixWebThumbnail,
  IronPeakThumbnail,
  KallakuriKitchenThumbnail,
} from "@/components/ShowcaseThumbnails";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites built with modern tech — fast, responsive, and optimized for performance.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High-converting pages designed for campaigns, product launches, and lead generation.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, user-centered design that looks great and feels intuitive to use.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform outdated sites into modern, professional experiences that reflect your brand.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and performance optimization to keep your site running smoothly.",
  },
];

const showcases = [
  {
    slug: "aura-interiors",
    title: "Aura Interiors",
    category: "Interior Design",
    year: "2024",
    description: "Luxury interior design studio with an immersive portfolio experience.",
    Thumbnail: AuraInteriorsThumbnail,
    span: "wide",
  },
  {
    slug: "coolfix-web",
    title: "CoolFix Web",
    category: "Technology",
    year: "2024",
    description: "SaaS landing page with clean product messaging and conversion-focused layout.",
    Thumbnail: CoolFixWebThumbnail,
    span: "standard",
  },
  {
    slug: "ironpeak",
    title: "Iron Peak",
    category: "Fitness",
    year: "2024",
    description: "High-energy fitness brand with bold typography and dynamic interactions.",
    Thumbnail: IronPeakThumbnail,
    span: "standard",
  },
  {
    slug: "kallakuri-kitchen",
    title: "Kallakuri Kitchen",
    category: "Food & Beverage",
    year: "2024",
    description: "Restaurant website with warm visuals and seamless online ordering integration.",
    Thumbnail: KallakuriKitchenThumbnail,
    span: "wide",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16 border-b border-outline/20"
        >
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.p
              variants={fadeIn}
              className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 md:mb-8 font-medium"
            >
              Freelance Web Designer & Developer — Chennai, India
            </motion.p>
            <motion.h1
              variants={slideUp}
              className="font-display leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              I design and build
              <br />
              websites that{" "}
              <span className="text-primary">work</span>
            </motion.h1>
            <motion.p
              variants={slideUp}
              className="text-lg md:text-xl text-on-surface/60 leading-relaxed max-w-2xl mt-6 md:mt-8"
            >
              I&apos;m Krishna — a freelance web designer & developer based in Chennai. I build
              modern, fast websites that help businesses grow online. From concept to launch, I
              handle everything.
            </motion.p>
            <motion.div
              variants={slideUp}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/portfolio">View My Work</Button>
              <Button variant="secondary" href="/contact">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Marquee */}
        <Marquee text="Web Development — Landing Pages — UI/UX Design — Redesign — Maintenance — " speed={25} />

        {/* Services Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 border-b border-outline/20 bg-surface/30 backdrop-blur-md"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div variants={slideUp} className="mb-12 md:mb-16">
              <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-4 font-medium">
                What I Do
              </p>
              <h2
                className="font-display leading-[0.9] tracking-tight max-w-3xl"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
              >
                Services tailored to{" "}
                <span className="text-primary">your needs</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={slideUp}
                  className="bg-surface border border-outline/15 p-6 md:p-8 group hover:border-primary/40 transition-colors duration-500"
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-on-surface/60 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeIn} className="mt-10">
              <Button variant="secondary" href="/services">
                All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Teaser */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="border-y border-outline/15 bg-surface/50 px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <motion.div variants={slideUp}>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-4 font-medium">
                  About Me
                </p>
                <h2
                  className="font-display leading-[0.9] tracking-tight"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
                >
                  Freelance designer
                  <br />
                  <span className="text-primary">& developer</span>
                </h2>
              </motion.div>
              <motion.div variants={slideUp} className="flex flex-col justify-end">
                <p className="text-lg md:text-xl text-on-surface/60 leading-relaxed max-w-lg">
                  I&apos;m Krishna — a freelance web designer and developer from Chennai. I work
                  with businesses and individuals who want a modern, professional website without
                  the agency overhead. Every project gets my full attention.
                </p>
                <div className="mt-8">
                  <Button variant="secondary" href="/about">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Selected Work */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32"
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div variants={fadeIn} className="mb-12 md:mb-16">
              <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-4 font-medium">
                Selected Work
              </p>
              <h2
                className="font-display leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
              >
                Projects I&apos;ve <span className="text-primary">built</span>
              </h2>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {showcases.map((showcase) => {
                const Thumbnail = showcase.Thumbnail;
                const isWide = showcase.span === "wide";

                return (
                  <Link
                    key={showcase.slug}
                    href={`/portfolio/${showcase.slug}`}
                    className={isWide ? "md:col-span-2" : ""}
                  >
                    <motion.div
                      variants={cinematicReveal}
                      className="group bg-surface border border-outline/15 overflow-hidden hover:border-primary/40 transition-colors duration-500"
                    >
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
                            {showcase.category}
                          </span>
                          <span className="text-xs text-on-surface/20">—</span>
                          <span className="text-xs text-on-surface/40">{showcase.year}</span>
                        </div>
                        <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                          {showcase.title}
                        </h3>
                        <p className="text-sm text-on-surface/50 mt-1 leading-relaxed">
                          {showcase.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <motion.div variants={fadeIn} className="mt-12 text-center">
              <Button href="/portfolio">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="border-t border-outline/15 bg-surface/50 px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32"
        >
          <div className="max-w-[1400px] mx-auto text-center">
            <motion.div variants={slideUp}>
              <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 font-medium">
                Ready to Start?
              </p>
              <h2
                className="font-display leading-[0.9] tracking-tight mb-6"
                style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}
              >
                Let&apos;s build something{" "}
                <span className="text-primary">great together</span>
              </h2>
              <p className="text-lg text-on-surface/60 max-w-xl mx-auto mb-10 leading-relaxed">
                Whether you need a complete redesign or a fresh build from scratch, I&apos;m here
                to make it happen.
              </p>
              <Button href="/contact" className="mx-auto">
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
