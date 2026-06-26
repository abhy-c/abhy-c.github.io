# Design System — Reusable Handoff

> **Purpose**: This document serves as the single source of truth for the design system. Use it to onboard new team members, reference during implementation, or hand off to external developers.

---

## 1. Brand & Intent

### Core Positioning

- **Persona**: Product manager, NYU MBA (STEM), ex-attorney
- **Tone**: Calm, assured, intelligent, deliberate — not trendy or startup-generic
- **Audience**: Hiring managers, founders evaluating consulting fit, peers reading long-form writing

### Design Principles

| Principle | Application |
|---|---|
| **Content-forward** | Prioritize clarity and information hierarchy over decorative elements |
| **Trust-forward** | Use editorial polish; avoid playful or overly minimal aesthetics |
| **Measured whitespace** | Generous padding, rounded cards, clear rhythm between sections |
| **Bespoke feel** | Warm paper tones, strategic accent use, no generic templates |

---

## 2. Color System

### Palette

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#f6f3ee` | Page canvas, warm paper tone |
| `--foreground` | `#000000` | Headings, primary text |
| `--surface` | `#ffffff` | Card backgrounds |
| `--surface-strong` | `#f8fbfb` | Secondary layered panels |
| `--muted` | `#1f2937` | Long-form and supporting copy |
| `--border` | `#c7d4d8` | Structural borders |
| `--accent` | `#0f8b8d` | Primary accent — teal for interactive emphasis |
| `--accent-soft` | `#d6efef` | Background tint for teal accents |
| `--accent-secondary` | `#b08a3e` | Warm bronze for secondary emphasis |
| `--accent-secondary-soft` | `#efe5cf` | Pale bronze background tint |
| `--success` | `#42785f` | Positive system signals |

### Implementation

```css
/* In app/globals.css */
:root {
  --background: #f6f3ee;
  --foreground: #000000;
  --surface: #ffffff;
  --surface-strong: #f8fbfb;
  --muted: #1f2937;
  --border: #c7d4d8;
  --accent: #0f8b8d;
  --accent-soft: #d6efef;
  --accent-secondary: #b08a3e;
  --accent-secondary-soft: #efe5cf;
  --success: #42785f;
}
```

```typescript
// In lib/site-config.ts (for programmatic access)
export const siteConfig = {
  colors: {
    background: '#f6f3ee',
    foreground: '#000000',
    accent: '#0f8b8d',
    // ...
  }
}
```

---

## 3. Typography

### Font Stack

| Role | Font | Fallback |
|---|---|---|
| **Primary sans** | `"Avenir Next", "Avenir", "Helvetica Neue"` | `sans-serif` |
| **Secondary serif** | `"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia` | `serif` |

### Type Scale

| Element | Style |
|---|---|
| **Hero headline** | `clamp(2.5rem, 1.5rem + 3vw, 4.5rem)`, tight leading, `-0.04em` tracking |
| **Section title** | `clamp(1.8rem, 1.1rem + 2vw, 3rem)`, `1.05` line-height, `-0.04em` tracking |
| **Eyebrow** | `0.74rem`, uppercase, `0.16em` tracking, `700` weight |
| **Body** | `1.05rem`, `1.85` line-height |
| **Caption** | `0.875rem`, muted color |

### Usage Notes

- **Serif**: Use sparingly for kicker text, quotes, or emphasis lines
- **Headings**: Should feel decisive, tight, and modern
- **Body**: Comfortable line length (~65ch), enough vertical rhythm for long-form reading

---

## 4. Layout & Spacing

### Container

- **Max width**: `72rem` (1152px) for main content
- **Horizontal padding**: `1rem` mobile, `1.5rem` tablet, `2rem` desktop

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `0.25rem` | Tight inline spacing |
| `--space-sm` | `0.5rem` | Icon gaps, tight component spacing |
| `--space-md` | `1rem` | Default component padding |
| `--space-lg` | `2rem` | Section internal padding |
| `--space-xl` | `4rem` | Section vertical spacing |
| `--space-2xl` | `6rem` | Page-level section gaps |

### Grid Principles

- **Desktop**: Asymmetric editorial grids where helpful, especially in hero sections
- **Mobile**: Preserve hierarchy and card rhythm; avoid bland stacked lists
- **Cards**: Large rounded corners (`2rem`), generous internal padding

---

## 5. Component Patterns

### Navigation (`SiteHeader`)

- Clean, restrained, obvious
- Labels: Home, About, Projects, Writing, Consulting
- Active state: teal background with bronze border
- CTA button: inverted (dark bg, light text)

```tsx
// components/site-header.tsx
<Link
  href="/consulting"
  className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background"
>
  Book a Call
</Link>
```

### Section Wrapper (`Section`)

- Eyebrow + title + optional description + children
- Max-width: `3xl` for text, unbounded for content

```tsx
<Section eyebrow="EYEBROW TEXT" title="Section Title" description="Optional lead-in">
  {/* Content */}
</Section>
```

### Content Card (`shell-card`)

```css
.shell-card {
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(252, 254, 254, 0.98));
  box-shadow: 0 18px 50px -42px rgba(15, 23, 42, 0.35);
  border-radius: 2rem;
}
```

### Article Layout

- Max-width: `65ch` for optimal reading
- `1.85` line-height for body
- Headings: `700` weight, `-0.03em` tracking

---

## 6. Component Library

| Component | Location | Purpose |
|---|---|---|
| `SiteHeader` | `components/site-header.tsx` | Primary navigation |
| `SiteFooter` | `components/site-footer.tsx` | Footer with links and copyright |
| `Section` | `components/section.tsx` | Reusable section wrapper |
| `ArticleCard` | `components/article-card.tsx` | Blog post previews |
| `ProjectCard` | `components/project-card.tsx` | Project case study previews |
| `ReadingProgress` | `components/reading-progress.tsx` | Scroll progress indicator |

---

## 7. Tailwind Configuration

The project uses Tailwind CSS with CSS variable-based theme extension:

```css
/* app/globals.css */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  /* ... */
}
```

### Custom Utilities

| Class | CSS |
|---|---|
| `.shell-card` | Card with border and subtle gradient shadow |
| `.eyebrow` | Uppercase label with accent color and tracking |
| `.eyebrow-secondary` | Same as eyebrow, secondary accent color |
| `.section-title` | Responsive heading with tight tracking |
| `.kicker-serif` | Serif font applied to specific elements |
| `.atmosphere-frame` | Subtle gradient overlay for hero sections |
| `.stat-label` | Border-backed label with backdrop blur |

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|---|---|---|
| **Mobile** | `<640px` | Single column, reduced padding |
| **Tablet** | `640px–1024px` | Adjusted spacing, maintained layout |
| **Desktop** | `>1024px` | Full asymmetric grids, generous whitespace |

---

## 9. Do's and Don'ts

### ✓ Do

- Use warm paper background (`#f6f3ee`) as the canvas
- Apply teal accent (`#0f8b8d`) strategically for interactive elements
- Use bronze (`#b08a3e`) for secondary emphasis only
- Keep navigation simple — no mega menus or utility clutter
- Prioritize readable body copy over decorative elements

### ✗ Don't

- Use glassmorphism overload or flashy gradients
- Apply neon colors or overly saturated accents
- Mix in playful illustration-heavy motifs
- Use monospaced-heavy design systems
- Create dashboard-density layouts

---

## 10. File Reference

| File | Purpose |
|---|---|
| `app/globals.css` | Design tokens and custom utilities |
| `lib/site-config.ts` | Programmatic config (colors, nav, author) |
| `components/site-header.tsx` | Navigation implementation |
| `components/section.tsx` | Section wrapper component |
| `DESIGN.md` | Original design intent document |

---

*Last updated: April 2026*