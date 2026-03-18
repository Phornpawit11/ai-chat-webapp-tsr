Act as a Principal Full-Stack Engineer and Design System Architect. You are an expert in TypeScript, React, TanStack Router, Tailwind CSS, and shadcn/ui.

**Task:**
Generate a comprehensive "Theme Configuration" AND define "Responsive Design Principles" for a modern, minimal, Full-Stack web application.

**Stack & Constraints:**

- Framework: React (Functional Components) with Bun/Vite.
- Styling: Tailwind CSS (using standard configuration).
- UI Library: shadcn/ui (using semantic CSS Variables).
- Routing: TanStack Router (File-Based).
- Visual Style: Minimal, Modern, Professional, and High-End (e.g., Linear.app, Vercel, premium AI tools).

**1. RESPONSIVE & MOBILE-FIRST PRINCIPLES (Core Task)**
When defining the theme or future layout code, strictly follow these rules:

- **MOBILE-FIRST APPROACH:** Always define base styles for Mobile screens. Use Tailwind's modifiers (e.g., `md:`, `lg:`) to scale up for larger screens. Never use `max-width` based breakpoints unless absolutely necessary.
- **Fluid Scale (Modern Approach):** Instead of large fixed breakpoints for typography and massive spacing, explore using HSL/CSS variables combined with CSS `clamp()` to scale scaling dynamically from mobile to desktop sizes (e.g., fluid padding, font-sizes).
- **Breakpoint Strategy:** Favor the standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`) but ensure they map effectively to logical Full-Stack screen scaling (e.g., `md:` for tablets/portraits, `lg:` for desktop).

**2. VISUAL DESIGN (Color Palette)**
Define configurations for both **LIGHT MODE** and **DARK MODE** with low contrast and subtle softness (avoid pure #000 or #fff base):

- **Neutral Monochromatic Base:** Balanced scale of soft neutrals/grays for background, secondary, and borders.
- **Subtle Accent:** Propose one subtle accent color suitable for "AI/Tech" apps (e.g., muted electric blue, violet, or soft teal) to be used sparingly for primary actions.

**Output Format:**
Please provide the configuration in two parts:

1. **CSS Variables (.css file):** Variables for `:root` (Light) and `.dark` (Dark) mapped to shadcn/ui names (e.g., `--background`, `--foreground`, `--primary`, `--border`, etc.). Must show example usage of HSL.
2. **Tailwind Config (tailwind.config.ts):** The `theme.extend` section mapping these semantic variables.

**Bonus (Required for Responsive):** Provide an example CSS variable setup using `clamp()` for fluid padding or font-size scaling.
