export interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    color: string;
    image: string;
    link: string;
}

export const PROJECTS: Project[] = [
    {
        id: "enugu-reserve",
        title: "ENUGU RESERVE",
        category: "ECOLOGY / WEB",
        year: "2026",
        description: "Preserving nature's heart. A digital sanctuary for the Coal City's ecological heritage.",
        color: "#0B3D20",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2071&q=80",
        link: "/work/enugu-reserve",
    },
    {
        id: "noire-models",
        title: "NOIRÉ MODELS",
        category: "FASHION / EDITORIAL",
        year: "2025",
        description: "International talent representation. A monochromatic, high-fashion casting interface.",
        color: "#9A9A9A",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
        link: "/work/noire-models",
    },
    {
        id: "pulse-fitness",
        title: "PULSE FITNESS",
        category: "STRENGTH / BRANDING",
        year: "2024",
        description: "Strength without noise. A brutalist fitness platform built for consistency, not trends.",
        color: "#526b55",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        link: "/work/pulse-fitness",
    },
];

export function getProjectById(id: string): Project | undefined {
    return PROJECTS.find((project) => project.id === id);
}
