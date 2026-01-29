'use client';
import Link from 'next/link';
import { getProjectById } from '@/data/projects';

export default function PulseCaseStudy() {
    const project = getProjectById('pulse-fitness');

    if (!project) return null;

    return (
        <main className="bg-[#f4f4f2] text-[#0f1712] min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#526b55] selection:text-white">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto border-b border-black/10 pb-12 mb-12">
                <p className="font-inter text-xs uppercase tracking-widest text-[#ff3c00] mb-4">{project.label}</p>
                <h1 className="font-anton text-[10vw] leading-[0.85] text-[#0f1712] uppercase">
                    PULSE<br />FITNESS
                </h1>
                <div className="mt-8 flex justify-between items-end">
                    <p className="font-inter text-sm uppercase tracking-widest text-[#526b55]">{project.category}</p>
                    <p className="font-inter text-sm uppercase tracking-widest">{project.year}</p>
                </div>
            </div>

            {/* WHY / CONTEXT */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="col-span-2">
                    <h3 className="font-anton text-3xl mb-6">WHY THIS PROJECT</h3>
                    <p className="font-inter text-xl leading-relaxed text-gray-700">
                        {project.why}
                    </p>
                </div>
                <div>
                    <h3 className="font-anton text-3xl mb-6">MY ROLE</h3>
                    <p className="font-inter text-lg text-gray-700">
                        {project.role}
                    </p>
                </div>
            </div>

            {/* STACK */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                <div>
                    <h3 className="font-anton text-3xl mb-6">TECH STACK</h3>
                    <ul className="font-inter text-sm uppercase tracking-widest space-y-2 text-gray-600">
                        {project.stack.map((tech, index) => (
                            <li key={index} className="border-b border-black/10 pb-2">{tech}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-anton text-3xl mb-6">DESIGN</h3>
                    <p className="font-inter text-sm uppercase tracking-widest text-gray-600">
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
                            className="bg-[#526b55] text-white px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-[#ff3c00] transition-all duration-300"
                        >
                            View Live
                        </a>
                    ) : (
                        <span className="bg-gray-300 text-gray-600 px-8 py-4 font-anton text-lg uppercase tracking-widest cursor-not-allowed">
                            Coming Soon
                        </span>
                    )}
                    {project.githubUrl ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#526b55] text-[#526b55] px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-[#526b55] hover:text-white transition-all duration-300"
                        >
                            View GitHub
                        </a>
                    ) : (
                        <span className="border border-gray-300 text-gray-500 px-8 py-4 font-anton text-lg uppercase tracking-widest cursor-not-allowed">
                            GitHub Coming Soon
                        </span>
                    )}
                </div>
            </div>

            {/* LAUNCH BUTTON */}
            <div className="h-[60vh] flex flex-col items-center justify-center bg-[#0f1712] text-[#f4f4f2] -mx-6 md:-mx-12 px-6 relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>

                <div className="relative z-10 text-center">
                    <p className="font-inter text-xs uppercase tracking-widest mb-6 opacity-70">Experience the silence</p>
                    <Link href="/work/pulse-fitness/live">
                        <button className="bg-[#526b55] text-white px-12 py-6 font-anton text-2xl uppercase tracking-widest hover:bg-white hover:text-[#0f1712] transition-all duration-300">
                            Enter The Gym
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
