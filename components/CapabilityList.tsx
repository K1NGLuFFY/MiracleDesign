"use client";

import { motion } from "framer-motion";

const capabilities = [
    { title: "STRATEGY", description: "Research, positioning, and brand architecture." },
    { title: "IDENTITY", description: "Visual systems, logos, and brand guidelines." },
    { title: "DIGITAL", description: "Websites, apps, and interactive experiences." },
];

export default function CapabilityList() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="py-24 md:py-32 px-6 md:px-12">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 gap-0"
                >
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group border-t border-bone-white/20 py-12 md:py-16 cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                {/* Title with stroke effect on hover */}
                                <h2 className="font-anton text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter-custom transition-all duration-500 group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_var(--accent-color)]">
                                    {capability.title}
                                </h2>

                                {/* Description */}
                                <p className="text-bone-white/60 text-lg md:text-xl max-w-md font-inter group-hover:text-bone-white transition-colors duration-500">
                                    {capability.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Bottom border */}
                    <div className="border-t border-bone-white/20"></div>
                </motion.div>
            </div>
        </section>
    );
}
