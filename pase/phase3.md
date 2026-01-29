**Objective:** Implement the "Case-study-first" structure for the homepage and project pages.

**Tasks:**

1. **Data Structure:** Create a `data/projects.ts` file with 3 mock "Flagship" projects. Each object must contain:
   - Title, One-sentence description, Role, Outcome.
   - Images: Thumbnail, Hero Image, 2-3 Process shots.

2. **Homepage Project List:**
   - Do not use a grid. Use a vertical list or large distinct sections for each project.
   - Each project section reveals the title and a large preview image.
   - **Interaction:** Hovering the project title should reveal the thumbnail (or scale it up) using a shared layout ID (Framer Motion) for smoothness.

3. **Project Details Page (`/work/[slug]`):**
   - Create a dynamic route.
   - **Structure:**
     - **Hero:** Large image + Title.
     - **Section 1:** Problem / Context (Two-column layout).
     - **Section 2:** Process (Carousel or masonry of wireframes).
     - **Section 3:** Final Solution (Large full-width visuals).
     - **Section 4:** Measurable Outcome (Big stat numbers).
   - **Transition:** Ensure clicking a project on the home page smoothly transitions to this detail page (use Framer Motion `<AnimatePresence>` mode="wait").
