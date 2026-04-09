import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ShowcasePageProps {
  params: Promise<{ slug: string }>;
}

const VALID_SHOWCASES = [
  "aura-interiors",
  "coolfix-web",
  "ironpeak",
  "kallakuri-kitchen",
  "smilecare",
] as const;

export async function generateStaticParams() {
  return VALID_SHOWCASES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ShowcasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const showcaseName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title: `${showcaseName} | Portfolio Showcase`,
    description: `Live preview of the ${showcaseName} website project`,
  };
}

export default async function ShowcasePage({ params }: ShowcasePageProps) {
  const { slug } = await params;

  if (!VALID_SHOWCASES.includes(slug as (typeof VALID_SHOWCASES)[number])) {
    notFound();
  }

  const showcaseName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-outline/15 bg-background/90 backdrop-blur-sm shrink-0">
        <Link
          href="/portfolio"
          className="flex items-center gap-2 text-sm text-on-surface/60 hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Portfolio</span>
          <span className="sm:hidden">Back</span>
        </Link>
        <span className="text-xs uppercase tracking-widest text-on-surface/40 font-medium">
          {showcaseName}
        </span>
      </div>
      <div className="flex-1 overflow-hidden">
        <iframe
          src={`/showcases/${slug}/index.html`}
          className="w-full h-full border-0"
          title={`${showcaseName} - Showcase Preview`}
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      </div>
    </div>
  );
}
