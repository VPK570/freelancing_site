# AGENTS.md

## Project Overview
Freelance portfolio website for a creative web design agency. Built with **Next.js 16 + TypeScript + Tailwind CSS v4**. Design system: **"The Monolith"** — Structural Brutalism meets high-end editorial design with saffron accent (`#FF5E00`).

---

## Build Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000 (Turbopack)
npm run build        # Production build
npm run start        # Start production server

# Linting & Type Checking
npm run lint         # Run ESLint on src/
npm run typecheck    # TypeScript type check (no emit)
```

**No test framework configured yet.** To add Vitest:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + custom styles
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── portfolio/page.tsx  # Portfolio page
│   └── contact/page.tsx    # Contact page
├── components/             # Reusable UI components
│   ├── Navigation.tsx      # Fixed nav + mobile hamburger
│   ├── Footer.tsx          # Three-column responsive footer
│   ├── Marquee.tsx         # Infinite scroll animation
│   ├── NoiseOverlay.tsx    # SVG grain texture overlay
│   └── Button.tsx          # Primary/secondary variants
└── lib/
    └── design-system.ts    # Design tokens and constants
```

---

## Design System: "The Monolith"

### Colors
| Token | Light | Dark |
|-------|-------|------|
| Background | `#F4F4F5` | `#09090B` |
| Surface | `#FFFFFF` | `#18181B` |
| Surface Container | `#FAFAFA` | `#1C1C1F` |
| Primary | `#FF5E00` | `#FF5E00` |
| On Surface | `#131315` | `#FAFAFA` |
| Outline | `#ab897d` | `#5b4137` |

### Typography
- **Display/Headlines**: Space Grotesk — uppercase, tracking `-0.04em`, line-height `0.85`
- **Body**: Manrope — 18px, 150% line-height, weights 300-500
- **Labels**: Manrope uppercase, `+0.1em` letter-spacing, 10-12px
- **Icons**: Material Symbols Outlined, weight 400
- **Responsive sizing**: Use `clamp()` (e.g., `clamp(2.5rem, 10vw, 10rem)`)

### Golden Rules
- **NO border-radius** — all corners are 90 degrees (enforced in globals.css)
- **NO shadows** — depth via tonal surface shifts
- **1px hairlines only** for structural borders (use `border-outline/20`)
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (ExpoOut)
- **Noise overlay**: 2-3% opacity SVG grain texture

---

## Code Style

### TypeScript
- Strict mode enabled (`strict: true`)
- Use explicit types; **never use `any`**
- Prefer `interface` for object shapes, `type` for unions/primitives
- Props interfaces defined above component

### Components
- Server components by default; use `'use client'` only when needed (hooks, state, events)
- PascalCase for component names and files
- Define props interface above component
- Use `@/` path alias for imports (e.g., `@/components/Button`)

### File Naming
- Components: `PascalCase.tsx` (e.g., `Navigation.tsx`)
- Pages: `page.tsx` (App Router convention)
- Utils/lib: `camelCase.ts` (e.g., `design-system.ts`)

### Tailwind CSS v4
- Use CSS theme tokens (`--color-*`, `--font-*`) defined in `globals.css`
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Hairline borders: `border border-outline/20`
- NO arbitrary values unless absolutely necessary
- Custom utilities in `globals.css` (e.g., `.animate-marquee`)

### CSS Classes
- Tailwind: lowercase with hyphens (`text-primary`, `font-display`)
- Custom CSS: kebab-case (`.animate-marquee`)
- Hover states: `hover:` prefix
- Group hovers: `group-hover:` prefix

### Error Handling
- Use Next.js error boundaries (`error.tsx`, `not-found.tsx`) for route-level errors
- Form validation: HTML5 `required` attributes + server-side validation
- No silent failures — log errors and show user-facing messages

---

## Responsive Design

### Breakpoints
- Mobile: < 640px (default)
- SM: 640px+, MD: 768px+, LG: 1024px+, XL: 1280px+, 2XL: 1536px+

### Spacing
- Section padding: `py-12 md:py-24 lg:py-32`
- Container: `max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8`
- Navigation: fixed with `pt-24 md:pt-32` offset

### Touch Targets
- Minimum 44px for interactive elements
- Buttons: `py-3 md:py-4 px-6 md:px-8`

---

## Accessibility
- Semantic HTML elements (`header`, `nav`, `main`, `footer`, `section`)
- Visible focus states (never `outline: none` without replacement)
- WCAG AA color contrast
- Alt text on all images
- ARIA attributes on interactive elements (mobile menu `aria-expanded`, `aria-label`)
- Minimum 44px touch targets

---

## Performance
- Images: `next/image` with proper sizing and `priority` for above-fold
- Fonts: `next/font` with `display: "swap"` (automatic optimization, zero layout shift)
- Animations: CSS-only, GPU-accelerated (`transform`, `opacity`)
- Noise overlay: reduced opacity on mobile (`0.02` vs `0.03`)
- Image formats: AVIF/WebP preferred

---

## Browser Support
Modern browsers: Chrome, Firefox, Safari, Edge (last 2 versions).

---

## Key Patterns

### Adding a New Page
1. Create directory: `src/app/new-page/page.tsx`
2. Import `Navigation` and `Footer`
3. Wrap content in `<main className="flex-1">`
4. Use design system tokens for colors/fonts

### Adding a New Component
1. Create `src/components/ComponentName.tsx`
2. Define props interface above component
3. Use `'use client'` only if using hooks/state/events
4. Follow design system rules (no radius, hairline borders, etc.)
