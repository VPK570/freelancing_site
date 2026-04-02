import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 
          className="font-display uppercase tracking-tighter leading-[0.8] mb-8"
          style={{ fontSize: "clamp(5rem, 20vw, 15rem)" }}
        >
          404
        </h1>
        <p className="text-xl uppercase tracking-widest text-on-surface/50 mb-12 max-w-md mx-auto">
          The monument you are looking for does not exist or has been moved.
        </p>
        <Button href="/">Return to Base</Button>
      </main>
      <Footer />
    </>
  );
}
