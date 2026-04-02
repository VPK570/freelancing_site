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
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h2 
          className="font-display uppercase tracking-tighter leading-[0.8] mb-8 text-primary"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          SYSTEM
          <br />
          FAULT
        </h2>
        <p className="text-xl uppercase tracking-widest text-on-surface/50 mb-12 max-w-md mx-auto">
          An unexpected error has occurred. Our structural integrity has been compromised.
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
