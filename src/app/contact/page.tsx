import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — VPK",
  description:
    "Ready to start your project? Get in touch via email or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-6 font-medium">
                  Contact
                </p>
                <h1
                  className="font-display leading-[0.9] tracking-tight mb-6"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                >
                  Let&apos;s build
                  <br />
                  <span className="text-primary">together</span>
                </h1>
                <p className="text-lg text-on-surface/60 leading-relaxed max-w-md mb-10">
                  Have a project in mind? Tell me about it and I&apos;ll get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-1 font-medium">
                        Email
                      </p>
                      <a href="mailto:krishnavp230907@gmail.com" className="text-base text-on-surface/80 hover:text-primary transition-colors">
                        krishnavp230907@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-1 font-medium">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/91YOURNUMBER"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-on-surface/80 hover:text-primary transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-on-surface/50 mb-1 font-medium">
                        Location
                      </p>
                      <p className="text-base text-on-surface/80">Chennai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-outline/15 p-6 md:p-8">
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
