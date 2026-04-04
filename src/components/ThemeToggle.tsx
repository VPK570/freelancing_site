"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-8 h-8 
                  text-on-surface/50 hover:text-on-surface
                  focus:outline-none transition-colors group overflow-hidden"
      aria-label="Toggle Theme"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/5 blur-md transition-opacity duration-500" />

      {mounted && (
        <>
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
        </>
      )}
    </button>
  );
}
