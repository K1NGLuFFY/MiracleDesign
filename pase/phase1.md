**Objective:** Initialize the project and set up the Design System variables based on the "Dark Editorial" specification.

**Tech Stack:**
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS
- Animation: Framer Motion (for layout transitions) + Lenis (for smooth scrolling)
- Fonts: Inter (Body) + Oswald or equivalent Google Font (Headings/Display)

**Tasks:**
1. Initialize a new Next.js project with TypeScript and Tailwind.
2. Configure `tailwind.config.ts` to implement the "Option 1: Dark Editorial" color system:
   - `bg-primary`: #0B0D10 (Near-black)
   - `text-primary`: #EDEDED (Soft white)
   - `text-secondary`: #9AA0A6 (Muted gray)
   - `accent`: #3B82F6 (Electric Blue - verify contrast)
3. Set up the typography in `layout.tsx` and Tailwind theme:
   - Headings: Bold, tight tracking (-0.02em), used for "oversized" hierarchy.
   - Body: Neutral sans, readable.
4. Set global styles:
   - Default background color to `bg-primary`.
   - Default text color to `text-primary`.
   - Enable "Dark Mode" by default (CSS variables).
5. Install `lenis` and create a `SmoothScroll` wrapper component that wraps the application in `layout.tsx` to ensure high-end scrolling feel.

**Constraint:** Do not build pages yet. Just set up the skeleton, fonts, global CSS, and configuration.