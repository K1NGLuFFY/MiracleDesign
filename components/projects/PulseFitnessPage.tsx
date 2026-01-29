"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface Props {
    project: Project;
}

export default function PulseFitnessPage({ project }: Props) {
    return (
        <div className="bg-[#f4f4f2] text-[#0f1712]">
            {/* Back Button */}
            <Link href="/">
                <div className="fixed top-6 left-6 z-50 bg-white/90 backdrop-blur-sm px-6 py-3 shadow-lg cursor-pointer hover:bg-white transition-colors">
                    <span className="font-bold text-sm uppercase tracking-wider">← Back</span>
                </div>
            </Link>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `linear-gradient(to right bottom, rgba(15, 23, 18, 0.9), rgba(5, 10, 6, 0.95)), url('${project.image}')` }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
                    <div className="max-w-4xl">
                        <h1 className="font-anton text-7xl md:text-9xl text-white leading-[0.9] tracking-tight mb-8">
                            TRAIN<br />
                            WITH PURPOSE.
                        </h1>
                        <p className="font-inter text-[#9ca3af] text-lg md:text-xl max-w-lg mb-12 border-l-2 border-[#526b55] pl-6">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* PROJECT INFO BLOCK */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-anton text-2xl text-[#0f1712] uppercase mb-4">Overview</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{project.why}</p>
                        </div>
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-anton text-sm text-[#526b55] uppercase tracking-widest mb-2">My Role</h4>
                                    <p className="text-[#0f1712]">{project.role}</p>
                                </div>
                                <div>
                                    <h4 className="font-anton text-sm text-[#526b55] uppercase tracking-widest mb-2">Status</h4>
                                    <span className="inline-block px-3 py-1 bg-[#526b55]/10 text-[#526b55] text-sm font-medium uppercase">
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-anton text-sm text-[#526b55] uppercase tracking-widest mb-3">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-[#0f1712] text-white text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#526b55] text-white px-6 py-3 font-anton text-sm uppercase tracking-widest hover:bg-[#0f1712] transition-colors"
                                    >
                                        View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-[#0f1712] text-[#0f1712] px-6 py-3 font-anton text-sm uppercase tracking-widest hover:bg-[#0f1712] hover:text-white transition-colors"
                                    >
                                        View Code
                                    </a>
                                )}
                                {!project.liveUrl && !project.githubUrl && (
                                    <span className="text-gray-400 text-sm uppercase tracking-widest italic">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-[#f4f4f2]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <h2 className="font-anton text-6xl md:text-8xl text-[#0f1712] leading-none">
                                NO GIMMICKS.<br />
                                NO EXCUSES.
                            </h2>
                            <div className="w-24 h-2 bg-[#526b55] mt-6" />
                        </div>
                        <div>
                            <p className="text-[#0f1712]/80 text-xl leading-relaxed font-light">
                                We focus on fundamentals: strength, conditioning, recovery, and discipline. Everything else is noise.
                                We don't sell shortcuts or magic pills. We provide the space, the equipment, and the atmosphere for serious work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="bg-[#0f1712] py-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {[
                        {
                            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1770&auto=format&fit=crop",
                            title: "STRENGTH FLOOR",
                            desc: "Free weights, racks, and machines designed for real progression. Heavy iron for serious lifters."
                        },
                        {
                            img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1769&auto=format&fit=crop",
                            title: "CONDITIONING",
                            desc: "Cardio equipment without distraction. Rowers, assault bikes, and sleds built for pure endurance."
                        },
                        {
                            img: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1770&auto=format&fit=crop",
                            title: "RECOVERY",
                            desc: "Stretching zones and guided recovery sessions. Maintain mobility to keep showing up."
                        }
                    ].map((item, i) => (
                        <div key={i} className="group relative h-[600px] overflow-hidden border-r border-white/10 last:border-r-0">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                                <h3 className="font-anton text-4xl text-white mb-4 group-hover:text-[#526b55] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-[#9ca3af] font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Visual Proof */}
            <section className="py-24 bg-[#f4f4f2]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="font-anton text-5xl text-[#0f1712] mb-12 uppercase tracking-wide">Built For Work.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop", label: "Morning Strength" },
                            { img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1769&auto=format&fit=crop", label: "Evening Conditioning" },
                            { img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1769&auto=format&fit=crop", label: "Functional Area" },
                            { img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1770&auto=format&fit=crop", label: "Focus & Grip" }
                        ].map((item, i) => (
                            <div key={i} className={`group relative aspect-[3/4] bg-neutral/10 overflow-hidden ${i % 2 === 1 ? 'lg:mt-12' : ''}`}>
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    fill
                                    className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 left-4 bg-[#0f1712] px-3 py-1">
                                    <span className="text-white text-xs font-anton tracking-wider uppercase">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Approach */}
            <section className="py-24 bg-[#0f1712] text-white border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/2">
                            <h2 className="font-anton text-6xl md:text-8xl leading-none text-white">
                                CONSISTENCY<br />
                                <span className="text-[#526b55]">BEATS</span><br />
                                INTENSITY.
                            </h2>
                        </div>
                        <div className="md:w-1/2 pt-4">
                            <p className="text-[#9ca3af] text-xl font-light mb-12">
                                Programs are designed to be repeatable. Sustainable progress matters more than burnout. We don't train for one day; we train for a lifetime of capability.
                            </p>
                            <ul className="space-y-6">
                                {["Structured Weekly Routines", "Optional Expert Coaching", "Scalable Difficulty"].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="block w-2 h-2 mt-2 bg-[#526b55] mr-4" />
                                        <span className="font-anton tracking-wide text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Access */}
            <section className="py-24 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-anton text-7xl text-[#0f1712] leading-none mb-6">
                                OPEN EARLY.<br />
                                CLOSE LATE.
                            </h2>
                            <p className="text-gray-600 font-inter text-lg">Designed to fit real schedules. Because the work has to get done.</p>
                        </div>
                        <div className="bg-[#f4f4f2] p-8 flex flex-col justify-center space-y-6">
                            <div>
                                <h4 className="font-anton text-[#0f1712] text-xl mb-1">HOURS</h4>
                                <p className="text-gray-600">Mon - Fri: 04:00 - 23:00</p>
                                <p className="text-gray-600">Sat - Sun: 06:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-[#0f1712] text-center relative">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="font-anton text-7xl md:text-9xl text-white leading-none mb-6">
                        START<br />SHOWING UP.
                    </h2>
                    <p className="text-[#526b55] text-xl md:text-2xl font-light mb-12">Your first session starts today.</p>

                    <Link href="/">
                        <button className="bg-white text-[#0f1712] px-12 py-5 font-anton uppercase text-xl tracking-widest hover:bg-[#526b55] hover:text-white transition-all duration-300">
                            Back to Projects
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
