import { Variants } from "framer-motion";
import { easings } from "./design-system";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easings.cinematic } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easings.cinematic } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
};

export const cinematicReveal: Variants = {
  initial: { opacity: 0, filter: "blur(10px)", scale: 1.05 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: easings.cinematic }
  },
};
