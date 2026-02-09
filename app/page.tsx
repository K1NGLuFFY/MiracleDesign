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
        <main id="main-content" className="bg-[#0a0a0a] min-h-screen text-[#f4f4f0] selection:bg-[#ff3c00] selection:text-black">

            {/* 1. HERO */}
            <section className="min-h-[100svh] flex flex-col justify-center md:justify-end pt-24 pb-16 md:pb-24 px-6 md:px-12 relative border-b border-white/10">
                <div className="max-w-5xl">
                    <p className="font-inter text-[#ff3c00] text-sm uppercase tracking-widest mb-4">
                        Miracle Okeke — UI/UX Designer & Frontend Developer
                    </p>
                    <h1 className="font-anton text-[10vw] md:text-[8vw] leading-[0.9] uppercase tracking-tighter mb-6">
                        I design and build<br />high-end digital products.
                    </h1>
                    <p className="font-inter text-lg md:text-xl text-[#f4f4f0]/70 mb-10 max-w-xl">
                        Advanced Software Development student based in Enugu, Nigeria.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#work"
                            className="bg-[#ff3c00] text-white px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-white hover:text-[#0a0a0a] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ff3c00]/25 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="/Miracle-Okeke-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#f4f4f0]/40 text-[#f4f4f0] px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-[#f4f4f0] hover:text-[#0a0a0a] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT */}
            <section id="philosophy" className="py-32 px-6 md:px-12 bg-[#f4f4f0] text-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start border-b border-black/10 pb-12 mb-12">
                        <div className="md:w-1/3">
                            <p className="font-inter text-xs uppercase tracking-widest text-[#ff3c00] mb-4">About</p>
                            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.85]">
                                Make it<br />Simple.<br />Make it<br />Significant.
                            </h2>
                        </div>
                        <div className="md:w-2/3 space-y-6">
                            <p className="font-inter text-xl md:text-2xl leading-relaxed text-[#0a0a0a]/80">
                                I'm a developer and designer currently studying <span className="font-bold border-b-2 border-[#ff3c00]">Advanced Software Development Engineering</span> at Aptech Enugu. I bridge the gap between complex code and editorial design.
                            </p>
                            <p className="font-inter text-xl md:text-2xl leading-relaxed text-[#0a0a0a]/80">
                                My focus is on creating signals in a world of digital noise—clean layouts, purposeful motion, and scalable code using <span className="font-bold border-b-2 border-[#ff3c00]">Python, Django, Flutter</span>, and modern frontend tools.
                            </p>
                        </div>
                    </div>

                    {/* Process Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {[
                            { step: "01", title: "Discover", desc: "Clarify goals, users, and constraints." },
                            { step: "02", title: "Design", desc: "Create wireframes, UI, and interactive prototypes." },
                            { step: "03", title: "Develop", desc: "Implement responsive, accessible interfaces in code." },
                            { step: "04", title: "Refine", desc: "Polish details, motion, and microcopy to ship confidently." }
                        ].map((item, i) => (
                            <div key={i} className="border-l-2 border-[#ff3c00] pl-4">
                                <span className="font-anton text-xs text-[#ff3c00] uppercase tracking-widest">{item.step}</span>
                                <h4 className="font-anton text-xl uppercase mt-1">{item.title}</h4>
                                <p className="font-inter text-sm text-[#0a0a0a]/60 mt-2">{item.desc}</p>
                            </div>
                        ))}
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
                    <p className="font-inter text-xs uppercase tracking-widest text-[#f4f4f0]/60 mb-12">Selected Case Studies</p>
                    <div className="flex flex-col">
                        {PROJECTS.map((project) => (
                            <Link
                                key={project.id}
                                href={project.link}
                                onMouseEnter={() => setActiveProject(project.id)}
                                onMouseLeave={() => setActiveProject(null)}
                                className="group border-b border-white/20 py-12 flex flex-col md:flex-row md:items-baseline md:justify-between cursor-pointer transition-colors duration-300 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3c00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                            >
                                <div className="flex items-baseline gap-4">
                                    <span className="px-2 py-1 text-[10px] font-inter uppercase tracking-widest border border-[#ff3c00] text-[#ff3c00]">
                                        {project.status}
                                    </span>
                                    <h2
                                        className="font-anton text-[8vw] md:text-[6vw] leading-none uppercase transition-all duration-300 group-hover:text-white"
                                        style={{
                                            color: activeProject === project.id ? 'white' : 'transparent',
                                            WebkitTextStroke: '1px #f4f4f0'
                                        }}
                                    >
                                        {project.title}
                                    </h2>
                                </div>
                                <div className="mt-4 md:mt-0 font-inter text-xs md:text-sm uppercase tracking-widest text-[#f4f4f0]/60 group-hover:text-[#ff3c00] transition-colors">
                                    {project.category} — {project.year}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SKILLS & TOOLS */}
            <section id="skills" className="py-32 px-6 md:px-12 bg-[#f4f4f0] text-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="border-b border-black/10 pb-12 mb-12">
                        <p className="font-inter text-xs uppercase tracking-widest text-[#ff3c00] mb-4">Skills & Tools</p>
                        <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.85] mb-4">
                            What I<br />Build With
                        </h2>
                        <p className="font-inter text-lg text-[#0a0a0a]/70 max-w-xl">
                            I currently focus on dashboards, landing pages, and concept apps for the web.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-anton text-xl uppercase mb-4 text-[#ff3c00]">Languages & Frameworks</h3>
                            <ul className="font-inter text-lg space-y-2 text-[#0a0a0a]/80">
                                <li>Python (Django)</li>
                                <li>Flutter</li>
                                <li>SQL</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-anton text-xl uppercase mb-4 text-[#ff3c00]">Frontend & UI</h3>
                            <ul className="font-inter text-lg space-y-2 text-[#0a0a0a]/80">
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-anton text-xl uppercase mb-4 text-[#ff3c00]">Design</h3>
                            <ul className="font-inter text-lg space-y-2 text-[#0a0a0a]/80">
                                <li>Figma</li>
                                <li>UI/UX Research</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-anton text-xl uppercase mb-4 text-[#ff3c00]">Tools</h3>
                            <ul className="font-inter text-lg space-y-2 text-[#0a0a0a]/80">
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Vercel</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CONTACT FORM - Secure & Accessible */}
            <ContactForm />
        </main>
    );
}
