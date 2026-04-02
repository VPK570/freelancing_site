# DESIGN.md — "The Monolith"

> This is the design source of truth for the project. All UI must conform to these rules.

## Creative North Star
**Structural Brutalism × High-End Editorial.** Authoritative, architectural, permanent. Rejects the generic SaaS aesthetic in favor of intentional asymmetry, extreme typographic scale, and hairline-precise containment.

---

## Colors & Tonal Architecture

### Palette
| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--color-background` | `#F4F4F5` | `#09090B` | Page base |
| `--color-surface` | `#FFFFFF` | `#18181B` | Card/panel planes |
| `--color-surface-container` | `#FAFAFA` | `#1C1C1F` | Hover states |
| `--color-primary` | `#FF5E00` | `#FF5E00` | Accent/CTA |
| `--color-on-surface` | `#131315` | `#FAFAFA` | Text |
| `--color-outline` | `#ab897d` | `#5b4137` | Hairline strokes |

### The 1px Hairline Rule
- Use `1px` borders ONLY for structural skeleton lines
- Never use 2px or 3px strokes
- Applied via: `border border-outline/20` (light) or `border-outline/30` (dark)

### Texture
- SVG noise grain overlay at 2-3% opacity
- Breaks "digital flatness", makes `#FF5E00` feel like physical ink

---

## Typography

### Display & Headlines — Space Grotesk
- Uppercase, architectural, loud
- Sizes: `text-7xl` to `text-[10rem]` for heroes
- Tracking: `-0.04em` to `-0.05em`
- Line height: `0.85` to `0.9`
- Use `clamp()` for fluid responsive sizing

### Body & Titles — Manrope
- Functional, Swiss-inspired, legible
- 18-20px with 150% line height
- Weights: 300 (light), 400 (regular), 500 (medium)

### The Label Rule
- ALL UPPERCASE
- `+0.1em` letter spacing
- 10-12px size
- Used for: section labels, form labels, metadata

### Icons
- Material Symbols Outlined (Google Fonts)
- Weight: 400, Fill: 0
- Sharp, geometric — no rounded icons

---

## Components

### Buttons — The Geometric Trigger
- **Primary**: Solid `#FF5E00` background, white text. Hover: invert to outline.
- **Secondary**: `1px` hairline border, no fill. Hover: border + text shift to primary.
- **NEVER**: border-radius, shadows, rounded corners

### Input Fields — The Architectural Ledger
- No "box" — only bottom `1px` hairline border
- Focus: bottom border changes to `#FF5E00`
- Label positioned above (not floating)

### Cards — The Portfolio Block
- No internal divider lines
- Use spacing tokens (`8` or `10`) for separation
- Hover: background shifts from `surface` to `surface-container`

### Marquee
- Continuous horizontal scroll for client logos or taglines
- Space Grotesk at display scale, uppercase, ghost text style (`text-on-surface/10`)
- 20s duration, linear easing, infinite loop
- Content duplicated 4x for seamless loop

---

## Animation & Motion

### Easing
```
cubic-bezier(0.16, 1, 0.3, 1)  // ExpoOut — cinematic feel
```

### Duration Guidelines
| Type | Duration |
|------|----------|
| Micro-interactions | 300ms |
| Standard transitions | 500ms |
| Page transitions | 700ms |
| Marquee | 20s linear infinite |

### Rules
- NO bouncy/elastic animations
- GPU-accelerated only (transform, opacity)
- CSS-based (no JS animation libraries)

---

## Do's and Don'ts

### Do
- Use `1px` hairline token for all structural lines
- Embrace massive whitespace — double what feels "enough"
- Treat images as textures with editorial photography
- Use uppercase for display text and labels
- Use `clamp()` for fluid typography

### Don't
- Use border-radius — every corner must be 90 degrees
- Use bouncy/elastic animations
- Use shadows — depth via contrast and tonal shifts
- Use rounded icons — use sharp, geometric icons
- Use generic SaaS patterns (rounded cards, soft shadows, blue accents)

---

## Responsive Breakpoints
| Breakpoint | Width | Hero Size |
|-----------|-------|-----------|
| Mobile | < 768px | 4rem |
| Tablet | 768px - 1024px | 6rem |
| Desktop | 1024px - 1440px | 8rem |
| Wide | > 1440px | 10rem (max-width: 1920px) |

---

## File Organization
```
src/
├── app/                 # Pages (App Router)
├── components/          # Reusable UI components
├── lib/                 # Design tokens, utilities
└── styles/              # Global CSS, Tailwind config
```
