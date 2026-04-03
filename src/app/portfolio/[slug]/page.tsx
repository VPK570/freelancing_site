import { notFound } from "next/navigation";
import { Metadata } from "next";

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
    <div className="fixed inset-0 z-50 bg-background">
      <iframe
        src={`/showcases/${slug}/index.html`}
        className="w-full h-full border-0"
        title={`${showcaseName} - Showcase Preview`}
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}
