"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface Props {
    project: Project;
}

export default function NoireModelsPage({ project }: Props) {
    const models = [
        { img: "https://images.unsplash.com/photo-1611558709796-cfd328701e19?q=80&w=1288&auto=format&fit=crop", name: "Elena K.", location: "Berlin" },
        { img: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1287&auto=format&fit=crop", name: "Sasha V.", location: "Kyiv" },
        { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop", name: "Julian R.", location: "London" },
        { img: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1281&auto=format&fit=crop", name: "Adut M.", location: "Nairobi" },
        { img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1287&auto=format&fit=crop", name: "Mei L.", location: "Tokyo" },
        { img: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1494&auto=format&fit=crop", name: "Freja", location: "Copenhagen" },
    ];

    return (
        <div className="bg-[#0A0A0A] text-[#F4F4F2]">
            {/* Back Button */}
            <Link href="/">
                <div className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-sm px-6 py-3 cursor-pointer hover:bg-white/20 transition-colors mix-blend-difference">
                    <span className="font-bold text-sm uppercase tracking-wider text-white">← Back</span>
                </div>
            </Link>

            {/* Hero Section */}
            <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={project.image} alt="Model Portrait" fill className="object-cover grayscale opacity-40" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 text-center px-4 mix-blend-difference text-white">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-tighter leading-none mb-6 font-anton">
                        Noiré Models
                    </h1>
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 font-inter">
                        {project.category}
                    </p>
                </div>
            </section>

            {/* Agency Statement */}
            <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#0A0A0A]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 hidden lg:block">
                        <span className="block w-full h-[1px] bg-[#333] mb-4" />
                        <p className="text-xs uppercase tracking-widest text-[#9A9A9A]">Agency Profile</p>
                    </div>
                    <div className="lg:col-span-8">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-12 text-[#F4F4F2]">
                            {project.description}
                        </h2>
                        <p className="text-xl md:text-3xl font-light leading-tight tracking-tight text-[#9A9A9A]">
                            We work with fashion houses, editors, casting directors, and cultural institutions worldwide.
                        </p>

                        <div className="flex gap-8 text-[#9A9A9A] text-xs uppercase tracking-widest mt-12">
                            <span>Paris</span>
                            <span>Milan</span>
                            <span>London</span>
                            <span>New York</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Faces */}
            <section className="px-6 md:px-12 pb-24 bg-[#0A0A0A]">
                <div className="flex justify-between items-end mb-12 border-b border-[#333] pb-4">
                    <h3 className="text-xs uppercase tracking-widest text-[#9A9A9A]">Select Board</h3>
                    <span className="text-xs uppercase tracking-widest text-[#9A9A9A]">S/S 2026</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
                    {models.map((model, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[3/4] bg-[#111] mb-4 overflow-hidden">
                                <Image
                                    src={model.img}
                                    alt={model.name}
                                    width={600}
                                    height={800}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-baseline border-t border-transparent group-hover:border-[#333] pt-3 transition-colors duration-300">
                                <h4 className="text-lg uppercase tracking-tight font-medium">{model.name}</h4>
                                <span className="text-[10px] text-[#9A9A9A] uppercase tracking-widest">{model.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Editorial Work */}
            <section className="py-0 bg-[#0A0A0A]">
                <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
                    <Image
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop"
                        alt="Editorial Campaign"
                        fill
                        className="object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute bottom-6 left-6 md:left-12">
                        <p className="text-white text-xs italic">Vogue Italia, September 2024</p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-t border-[#1a1a1a]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-3 text-[#555] text-xs uppercase tracking-widest">
                        Philosophy
                    </div>
                    <div className="lg:col-span-9">
                        <p className="text-xl md:text-3xl italic leading-relaxed text-[#9A9A9A]">
                            "We believe in long-term careers, not trends. NOIRÉ develops talent with a focus on international placement, professional longevity, and creative integrity."
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 md:px-12 bg-[#0A0A0A] text-[#555] text-xs uppercase tracking-widest border-t border-[#1a1a1a]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <h4 className="text-[#F4F4F2] mb-4">Noiré Models</h4>
                        <p className="mb-1">104 Rue Amelot</p>
                        <p>75011 Paris, France</p>
                    </div>

                    <Link href="/">
                        <button className="border border-[#F4F4F2] bg-transparent text-[#F4F4F2] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#F4F4F2] hover:text-[#0A0A0A] transition-colors duration-300">
                            Back to Projects
                        </button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}
