"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";

export default function ProjectList() {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    return (
        <section className="relative min-h-screen flex items-center bg-off-black">
            {/* Background Image */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    {activeProject !== null && (
                        <motion.div
                            key={activeProject}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={PROJECTS[activeProject].image}
                                alt={PROJECTS[activeProject].title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Project List */}
            <div className="relative z-10 w-full px-6 md:px-12 py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-anton text-4xl md:text-5xl tracking-tight mb-16 text-bone-white">
                        SELECTED WORK
                    </h2>

                    <div className="space-y-0">
                        {PROJECTS.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/work/${project.id}`}
                                className="group block border-t border-bone-white/20 last:border-b py-8 md:py-12"
                                onMouseEnter={() => setActiveProject(index)}
                                onMouseLeave={() => setActiveProject(null)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <motion.h3
                                            className="font-anton text-[8vw] md:text-[6vw] lg:text-[5vw] uppercase leading-none transition-all duration-300"
                                            style={{
                                                color: activeProject === index ? "#f4f4f0" : "transparent",
                                                WebkitTextStroke: activeProject === index ? "0px" : "1px #f4f4f0",
                                            }}
                                            animate={{
                                                x: activeProject === index ? 20 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                    </div>

                                    {/* Metadata */}
                                    <div className="hidden md:flex flex-col items-end gap-2 text-right">
                                        <span className="text-xs font-inter uppercase tracking-widest text-bone-white/70">
                                            {project.category}
                                        </span>
                                        <span className="text-xs font-inter uppercase tracking-widest text-bone-white/50">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Description - shows on hover */}
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: activeProject === index ? 1 : 0,
                                        height: activeProject === index ? "auto" : 0,
                                    }}
                                    className="text-bone-white/80 text-lg font-inter mt-4 max-w-2xl overflow-hidden"
                                >
                                    {project.description}
                                </motion.p>

                                {/* View Case Label */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeProject === index ? 1 : 0,
                                    }}
                                    className="mt-4 text-sm font-inter uppercase tracking-widest text-bone-white"
                                >
                                    View Case →
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
