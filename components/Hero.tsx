"use client";

import { motion } from "framer-motion";

export default function Hero() {
    // Stagger animation variants for text reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 py-24">
            {/* Content Layer */}
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="overflow-hidden"
                >
                    {/* Split-line hero text: "DESIGN IS" / "DECISION" */}
                    <div className="flex flex-col">
                        <motion.h1
                            variants={lineVariants}
                            className="font-anton text-giant md:text-giant lg:text-giant leading-[0.85] text-bone-white tracking-tighter-custom mb-4"
                        >
                            DESIGN IS
                        </motion.h1>
                        <motion.h1
                            variants={lineVariants}
                            className="font-anton text-giant md:text-giant lg:text-giant leading-[0.85] text-bone-white tracking-tighter-custom"
                        >
                            DECISION
                        </motion.h1>
                    </div>

                    {/* Subtext */}
                    <motion.p
                        variants={lineVariants}
                        className="text-bone-white/60 text-lg md:text-xl max-w-2xl mt-12 font-inter"
                    >
                        Every choice, every pixel, every moment—designed with intention.
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-bone-white/40 rounded-full flex items-start justify-center p-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <motion.div className="w-1 h-2 bg-bone-white/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
