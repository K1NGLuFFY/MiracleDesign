'use client';
import Link from 'next/link';
import { getProjectById } from '@/data/projects';

export default function EnuguCaseStudy() {
    const project = getProjectById('enugu-reserve');

    if (!project) return null;

    return (
        <main className="bg-[#f4f4f0] text-[#0a0a0a] min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#0B3D20] selection:text-white">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto border-b border-black/10 pb-12 mb-12">
                <p className="font-inter text-xs uppercase tracking-widest text-[#ff3c00] mb-4">{project.label}</p>
                <h1 className="font-anton text-[10vw] leading-[0.85] text-[#0B3D20] uppercase">ENUGU<br />RESERVE</h1>
                <div className="mt-8 flex justify-between items-end text-gray-600">
                    <p className="font-inter text-sm uppercase tracking-widest">{project.category}</p>
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
                            className="bg-[#0B3D20] text-white px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-[#ff3c00] transition-all duration-300"
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
                            className="border border-[#0B3D20] text-[#0B3D20] px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-[#0B3D20] hover:text-white transition-all duration-300"
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
            <div className="h-[60vh] flex flex-col items-center justify-center bg-[#0B3D20] text-[#f4f4f0] -mx-6 md:-mx-12 px-6">
                <p className="font-inter text-xs uppercase tracking-widest mb-6 opacity-70">Ready to explore?</p>
                <Link href="/work/enugu-reserve/live">
                    <button className="bg-[#FF5C2D] text-white px-12 py-6 font-anton text-2xl uppercase tracking-widest hover:bg-white hover:text-[#0B3D20] transition-all duration-300">
                        Launch Live Project
                    </button>
                </Link>
            </div>
        </main>
    );
}
