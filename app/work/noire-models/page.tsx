'use client';
import Link from 'next/link';
import { getProjectById } from '@/data/projects';

export default function NoireCaseStudy() {
    const project = getProjectById('noire-models');

    if (!project) return null;

    return (
        <main className="bg-[#0A0A0A] text-[#F4F4F2] min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto border-b border-white/10 pb-12 mb-12">
                <p className="font-inter text-xs uppercase tracking-widest text-[#ff3c00] mb-4">{project.label}</p>
                <h1 className="font-anton text-[10vw] leading-[0.85] uppercase">
                    NOIRÉ<br />MODELS
                </h1>
                <div className="mt-8 flex justify-between items-end text-[#9A9A9A]">
                    <p className="font-inter text-sm uppercase tracking-widest">{project.category}</p>
                    <p className="font-inter text-sm uppercase tracking-widest">{project.year}</p>
                </div>
            </div>

            {/* WHY / CONTEXT */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="col-span-2">
                    <h3 className="font-anton text-3xl mb-6">WHY THIS PROJECT</h3>
                    <p className="font-inter text-xl leading-relaxed text-[#9A9A9A]">
                        {project.why}
                    </p>
                </div>
                <div>
                    <h3 className="font-anton text-3xl mb-6">MY ROLE</h3>
                    <p className="font-inter text-lg text-[#9A9A9A]">
                        {project.role}
                    </p>
                </div>
            </div>

            {/* STACK */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                <div>
                    <h3 className="font-anton text-3xl mb-6">TECH STACK</h3>
                    <ul className="font-inter text-sm uppercase tracking-widest space-y-2 text-[#9A9A9A]">
                        {project.stack.map((tech, index) => (
                            <li key={index} className="border-b border-white/10 pb-2">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-anton text-3xl mb-6">DESIGN</h3>
                    <p className="font-inter text-sm uppercase tracking-widest text-[#9A9A9A]">
                        {project.designTool}
                    </p>
                </div>
            </div>

            {/* LINKS SECTION */}
            <div className="max-w-7xl mx-auto mb-24">
                <h3 className="font-anton text-3xl mb-6">VIEW PROJECT</h3>
                <div className="flex flex-wrap gap-4">
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#F4F4F2] text-black px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-[#ff3c00] hover:text-white transition-all duration-300"
                        >
                            View Live
                        </a>
                    ) : (
                        <span className="bg-[#333] text-[#666] px-8 py-4 font-anton text-lg uppercase tracking-widest cursor-not-allowed">
                            Coming Soon
                        </span>
                    )}
                    {project.githubUrl ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#F4F4F2] text-[#F4F4F2] px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-[#F4F4F2] hover:text-black transition-all duration-300"
                        >
                            View GitHub
                        </a>
                    ) : (
                        <span className="border border-[#333] text-[#666] px-8 py-4 font-anton text-lg uppercase tracking-widest cursor-not-allowed">
                            GitHub Coming Soon
                        </span>
                    )}
                </div>
            </div>

            {/* LAUNCH BUTTON */}
            <div className="h-[60vh] flex flex-col items-center justify-center bg-[#1a1a1a] -mx-6 md:-mx-12 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>

                <div className="relative z-10 text-center">
                    <p className="font-inter text-xs uppercase tracking-widest mb-6 opacity-70">View the Casting Board</p>
                    <Link href="/work/noire-models/live">
                        <button className="bg-[#F4F4F2] text-black px-12 py-6 font-anton text-2xl uppercase tracking-widest hover:bg-[#9A9A9A] hover:text-white transition-all duration-300">
                            Open Agency Site
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
