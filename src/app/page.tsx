import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { slideUp, cinematicReveal, fadeIn } from "@/lib/motion";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16"
        >
          <div className="max-w-[1920px] mx-auto w-full">
            <motion.p 
              variants={fadeIn}
              className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 md:mb-8"
            >
              Web Design & Development Studio
            </motion.p>
            <motion.h1
              variants={slideUp}
              className="font-display uppercase tracking-tighter leading-[0.85]"
              style={{ fontSize: "clamp(2.5rem, 10vw, 10rem)" }}
            >
              WE BUILD
              <br />
              <span className="text-primary">DIGITAL</span>
              <br />
              MONUMENTS
            </motion.h1>
            <motion.div 
              variants={slideUp}
              className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/portfolio">View Our Work</Button>
              <Button variant="secondary" href="/contact">Start a Project</Button>
            </motion.div>
          </div>
        </motion.section>

        <Marquee text="Web Design — Development — Branding — Strategy — " speed={25} />

        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32"
        >
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <motion.div variants={slideUp}>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-4">
                  About Us
                </p>
                <h2
                  className="font-display uppercase tracking-tighter leading-[0.9]"
                  style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
                >
                  NOT YOUR
                  <br />
                  AVERAGE
                  <br />
                  <span className="text-primary">AGENCY</span>
                </h2>
              </motion.div>
              <motion.div 
                variants={slideUp}
                className="flex flex-col justify-end"
              >
                <p className="text-lg md:text-xl text-on-surface/70 leading-relaxed max-w-lg">
                  We reject the generic. Every pixel is intentional. Every interaction is deliberate.
                  We craft websites that feel like architectural statements — bold, permanent, and
                  impossible to ignore.
                </p>
                <div className="mt-8">
                  <Button variant="secondary" href="/about">Learn More</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-outline/20 px-4 sm:px-6 md:px-8 py-16 md:py-24"
        >
          <div className="max-w-[1920px] mx-auto">
            <motion.p 
              variants={fadeIn}
              className="text-xs uppercase tracking-widest text-on-surface/50 mb-8 md:mb-12"
            >
              Selected Work
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Link
                  key={i}
                  href="/portfolio"
                  className="block"
                >
                  <motion.div
                    variants={cinematicReveal}
                    className="bg-surface border border-outline/20 aspect-[4/3] flex items-center justify-center group hover:bg-surface-container transition-colors duration-500 overflow-hidden"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="text-center"
                    >
                      <p className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
                        Project {i}
                      </p>
                      <p className="text-sm text-on-surface/50 mt-2 uppercase tracking-wider">
                        {i % 2 === 0 ? "E-Commerce" : "Corporate"}
                      </p>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button href="/portfolio">View All Projects</Button>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
