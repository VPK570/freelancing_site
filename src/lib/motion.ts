import { Variants } from "framer-motion";
import { easings } from "./design-system";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: easings.expert } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easings.expert } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
};

export const slideUpStagger: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.expert,
      delay: custom * 0.1, // custom works as an index
    },
  }),
};

export const scaleReveal: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easings.expert } },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easings.expert } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4, ease: "easeIn" } },
};

// Advanced reveal used for large images or significant sections
export const cinematicReveal: Variants = {
  initial: { opacity: 0, filter: "blur(10px)", scale: 1.05 },
  animate: { 
    opacity: 1, 
    filter: "blur(0px)", 
    scale: 1,
    transition: { duration: 1.2, ease: easings.expert } 
  },
};
