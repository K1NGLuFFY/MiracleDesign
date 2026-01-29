import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Global/Portfolio colors
                'off-black': '#0a0a0a',
                'bone-white': '#f4f4f0',
                'accent': 'var(--accent-color)',
                // Keep existing colors for backwards compatibility
                'bg-primary': '#0B0D10',
                'text-primary': '#EDEDED',
                'text-secondary': '#9AA0A6',
                // Enugu Reserve Project Colors
                'enugu-forest': '#0B3D20',
                'enugu-earth': '#7C5E45',
                'enugu-sky': '#4AA0D5',
                'enugu-bone': '#F4F4F0',
                'enugu-accent': '#FF5C2D',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                anton: ['var(--font-anton)', 'system-ui', 'sans-serif'],
                display: ['var(--font-anton)', 'system-ui', 'sans-serif'],
                inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                playfair: ['Times New Roman', 'serif'],
            },
            fontSize: {
                'giant': '18vw',
                'huge': '12vw',
                'massive': '8vw',
            },
            letterSpacing: {
                'display': '-0.02em',
                'tighter-custom': '-0.04em',
            },
            backdropBlur: {
                'glass': '12px',
            },
        },
    },
    plugins: [],
} satisfies Config;
