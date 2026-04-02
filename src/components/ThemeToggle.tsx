"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
      className="relative flex items-center justify-center w-10 h-10 
                  bg-surface-container border border-outline/20
                  text-on-surface hover:bg-outline/20 hover:border-primary/50
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary 
                  focus-visible:ring-offset-2 focus-visible:ring-offset-background 
                  transition-colors group overflow-hidden"
      aria-label="Toggle Theme"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/5 blur-md transition-opacity duration-500" />

      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0.5,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Moon className="w-[1.125rem] h-[1.125rem]" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: !isDark ? 1 : 0.5,
          opacity: !isDark ? 1 : 0,
          rotate: !isDark ? 0 : 90,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Sun className="w-[1.125rem] h-[1.125rem]" strokeWidth={1.5} />
      </motion.div>
    </button>
  );
}
