**Objective:** Build the Full-viewport Hero and Global Navigation.

**Context:** This is a high-end portfolio. The user needs an immediate "wow" factor without clutter.

**Tasks:**

1. **Create the Navbar:**
   - Fixed position, glassmorphism effect (blur).
   - Minimal links (Work, About, Contact).
   - Logo on left, Links on right.
   - **Micro-interaction:** Links should have a subtle hover effect (e.g., underline expands or opacity shift).

2. **Create the Hero Component:**
   - Full viewport height (`100vh`).
   - **Background:** Implement a subtle, cinematic video loop or a WebGL mesh (use a placeholder abstract video for now) at low opacity (0.3).
   - **Content:** Center-aligned or bottom-left aligned.
   - **Typography:** Massive heading (H1) stating the Value Proposition (e.g., "Crafting Digital Ecosystems").
   - **Motion:** Text should stagger-fade in using Framer Motion upon load.

3. **Performance Check:** Ensure the video/background loads lazily or is optimized so it doesn't block the Largest Contentful Paint (LCP).
