export const colors = {
  light: {
    background: "#F4F4F5",
    surface: "#FFFFFF",
    surfaceContainer: "#FAFAFA",
    primary: "#FF5E00",
    onSurface: "#131315",
    outline: "#ab897d",
  },
  dark: {
    background: "#09090B",
    surface: "#18181B",
    surfaceContainer: "#1C1C1F",
    primary: "#FF5E00",
    onSurface: "#FAFAFA",
    outline: "#5b4137",
  },
};

export const typography = {
  display: {
    fontFamily: "var(--font-space-grotesk)",
    letterSpacing: "-0.04em",
    lineHeight: "0.85",
  },
  body: {
    fontFamily: "var(--font-manrope)",
    lineHeight: "1.5",
    weights: { light: 300, regular: 400, medium: 500 },
  },
  label: {
    fontFamily: "var(--font-manrope)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontSize: "0.625rem",
  },
};

export const easings = {
  cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
  bounce: [0.175, 0.885, 0.32, 1.275] as const, // High-end springy feel
  smooth: [0.4, 0, 0.2, 1] as const, // Standard crisp motion
  expert: [0.16, 1, 0.3, 1] as const, // Apple-like refined ease out
};
export const durations = {
  micro: "300ms",
  standard: "500ms",
  page: "700ms",
  marquee: "20s",
};

export const breakpoints = {
  mobile: "< 768px",
  tablet: "768px - 1024px",
  desktop: "1024px - 1440px",
  wide: "> 1440px",
};
