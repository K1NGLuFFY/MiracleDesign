'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import ContactForm from '@/components/ContactForm';



export default function Home() {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const activeImage = PROJECTS.find(p => p.id === activeProject)?.image;

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-[#f4f4f0] selection:bg-[#ff3c00] selection:text-black">

            {/* 1. HERO */}
            <section className="h-screen flex flex-col justify-end pb-24 px-6 md:px-12 relative border-b border-white/10">
                <div className="max-w-4xl">
                    <p className="font-inter text-[#ff3c00] text-sm uppercase tracking-widest mb-4">
                        Miracle Okeke — UI/UX Designer
                    </p>
                    <h1 className="font-anton text-[15vw] leading-[0.85] uppercase tracking-tighter">
                        Design Is<br />Decision.
                    </h1>
                </div>
            </section>

            {/* 2. PHILOSOPHY (Why I Am Good) */}
            <section id="philosophy" className="py-32 px-6 md:px-12 bg-[#f4f4f0] text-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start border-b border-black/10 pb-12 mb-12">
                        <div className="md:w-1/3">
                            <p className="font-inter text-xs uppercase tracking-widest text-[#ff3c00] mb-4">The Philosophy</p>
                            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.85]">
                                Make it<br />Simple.<br />Make it<br />Significant.
                            </h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="font-inter text-xl md:text-2xl leading-relaxed text-[#0a0a0a]/80">
                                Most websites are noise. I build signals. I combine <span className="font-bold border-b-2 border-[#ff3c00]">strategic UX</span> with <span className="font-bold border-b-2 border-[#ff3c00]">immersive motion</span> to create digital products that don't just inform—they convert.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SELECTED WORK (Interactive List) */}
            <section id="work" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden flex flex-col justify-center bg-[#0a0a0a]">
                <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 pointer-events-none">
                    <AnimatePresence mode='wait'>
                        {activeImage && (
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 0.6, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={activeImage}
                                    fill
                                    className="object-cover grayscale"
                                    alt="Project background"
                                    priority={true}
                                    sizes="100vw"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <p className="font-inter text-xs uppercase tracking-widest text-gray-500 mb-12">Selected Case Studies</p>
                    <div className="flex flex-col">
                        {PROJECTS.map((project) => (
                            <Link
                                key={project.id}
                                href={project.link}
                                onMouseEnter={() => setActiveProject(project.id)}
                                onMouseLeave={() => setActiveProject(null)}
                                className="group border-b border-white/20 py-12 flex flex-col md:flex-row md:items-baseline md:justify-between cursor-pointer transition-colors duration-300 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3c00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                            >
                                <h2
                                    className="font-anton text-[8vw] md:text-[6vw] leading-none uppercase transition-all duration-300 group-hover:text-white"
                                    style={{
                                        color: activeProject === project.id ? 'white' : 'transparent',
                                        WebkitTextStroke: '1px #f4f4f0'
                                    }}
                                >
                                    {project.title}
                                </h2>
                                <div className="mt-4 md:mt-0 font-inter text-xs md:text-sm uppercase tracking-widest text-gray-500 group-hover:text-[#ff3c00] transition-colors">
                                    {project.category} — {project.year}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CONTACT FORM - Secure & Accessible */}
            <ContactForm />
        </main>
    );
}
