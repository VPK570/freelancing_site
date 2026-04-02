import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Studio",
  description: "Ready to create something extraordinary? Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6">
                  Contact
                </p>
                <h1
                  className="font-display uppercase tracking-tighter leading-[0.85] mb-8"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 9rem)" }}
                >
                  LET&apos;S
                  <br />
                  <span className="text-primary">BUILD</span>
                </h1>
                <p className="text-lg text-on-surface/70 leading-relaxed max-w-md mb-8">
                  Ready to create something extraordinary? Tell us about your project and we&apos;ll
                  get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-1">
                      Email
                    </p>
                    <p className="text-lg">projects@studio.design</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-1">
                      Location
                    </p>
                    <p className="text-lg">Chennai, India</p>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
