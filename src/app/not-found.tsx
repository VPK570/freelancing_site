import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1
          className="font-display tracking-tight leading-[0.8] mb-6"
          style={{ fontSize: "clamp(5rem, 20vw, 15rem)" }}
        >
          404
        </h1>
        <p className="text-lg md:text-xl text-on-surface/50 mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/">Return Home</Button>
      </main>
      <Footer />
    </>
  );
}
