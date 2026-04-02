"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center pointer-events-none">
      <div className="w-1/4 h-[1px] bg-outline/20 relative overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-y-0 left-0 w-1/2 bg-primary"
        />
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-on-surface/50 animate-pulse">
        Initializing...
      </p>
    </div>
  );
}
