export interface Project {
    id: string;
    title: string;
    category: string;
    subtitle: string;
    year: string;
    description: string;
    oneLiner: string;
    color: string;
    image: string;
    link: string;
    // Detail page fields
    label: string;
    why: string;
    role: string;
    stack: string[];
    designTool: string;
    liveUrl?: string;
    githubUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "enugu-reserve",
        title: "ENUGU RESERVE",
        category: "Personal concept project",
        subtitle: "Personal concept project · 2026",
        year: "2026",
        description: "A booking platform concept to promote local eco-tourism in Enugu.",
        oneLiner: "A booking platform concept to promote local eco‑tourism in Enugu.",
        color: "#0B3D20",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2071&q=80",
        link: "/work/enugu-reserve",
        label: "Personal Concept Project",
        why: "Enugu Reserve explores how a clean, image-driven interface can make local nature trips easier to discover and book.",
        role: "UX/UI design, frontend implementation",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        designTool: "Figma",
        liveUrl: "https://miracle-design-chi.vercel.app/work/enugu-reserve/live",
        githubUrl: "https://github.com/K1NGLuFFY/MiracleDesign",
    },
    {
        id: "noire-models",
        title: "NOIRÉ MODELS",
        category: "UI/UX exploration",
        subtitle: "UI/UX exploration · 2025",
        year: "2025",
        description: "A brutalist, editorial portfolio concept for high-fashion model agencies.",
        oneLiner: "A brutalist, editorial portfolio concept for high‑fashion model agencies.",
        color: "#9A9A9A",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
        link: "/work/noire-models",
        label: "UI/UX Exploration",
        why: "Noiré Models is a concept study in brutalist, editorial web design for fashion portfolios, focusing on bold typography and large imagery.",
        role: "Visual design, layout system, interactions",
        stack: ["HTML", "CSS", "Framer Motion"],
        designTool: "Figma",
        liveUrl: undefined, // Coming Soon
        githubUrl: undefined, // Coming Soon
    },
    {
        id: "pulse-fitness",
        title: "PULSE FITNESS",
        category: "Case study",
        subtitle: "Case study · 2024",
        year: "2024",
        description: "A fitness brand concept focusing on a smoother membership and class booking flow.",
        oneLiner: "A fitness brand concept focusing on a smoother membership and class booking flow.",
        color: "#526b55",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        link: "/work/pulse-fitness",
        label: "Case Study",
        why: "Pulse Fitness reimagines how gym members discover classes and sign up, reducing friction in the membership and booking flow.",
        role: "User flow design, UI design, prototype",
        stack: ["Figma", "Prototype"],
        designTool: "Figma",
        liveUrl: undefined, // Coming Soon
        githubUrl: undefined, // Coming Soon
    },
];

export function getProjectById(id: string): Project | undefined {
    return PROJECTS.find((project) => project.id === id);
}
