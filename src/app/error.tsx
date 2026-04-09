"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h2
          className="font-display tracking-tight leading-[0.8] mb-6 text-primary"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          Error
        </h2>
        <p className="text-lg md:text-xl text-on-surface/50 mb-10 max-w-md mx-auto leading-relaxed">
          Something went wrong. Please try again or return to the homepage.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant="secondary" href="/">Go Home</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
