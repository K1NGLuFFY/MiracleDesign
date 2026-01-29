"use client";

import { useEffect } from "react";
import { useScroll } from "framer-motion";

export default function ThemeShifter() {
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // When user scrolls past 50% of the page height, add the theme-shifted class
            if (latest > 0.5) {
                document.body.classList.add("theme-shifted");
            } else {
                document.body.classList.remove("theme-shifted");
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return null; // This component doesn't render anything visible
}
