'use client';
import Link from 'next/link';

export default function PulseCaseStudy() {
    return (
        <main className="bg-[#f4f4f2] text-[#0f1712] min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#526b55] selection:text-white">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto border-b border-black/10 pb-12 mb-12">
                <h1 className="font-anton text-[10vw] leading-[0.85] text-[#0f1712] uppercase">
                    PULSE<br />FITNESS
                </h1>
                <div className="mt-8 flex justify-between items-end">
                    <p className="font-inter text-sm uppercase tracking-widest text-[#526b55]">Brand Identity & Web Design</p>
                    <p className="font-inter text-sm uppercase tracking-widest">2024</p>
                </div>
            </div>

            {/* CONTEXT */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                <div className="col-span-2">
                    <h3 className="font-anton text-3xl mb-6">THE VISION</h3>
                    <p className="font-inter text-xl leading-relaxed text-gray-700">
                        Fitness marketing is usually loud, neon, and full of hype. Pulse needed to be the opposite.
                        We created a "Brutalist Sanctuary" aesthetic—using deep forest greens (#0f1712) and muted steel tones to communicate discipline, consistency, and silence.
                    </p>
                </div>
                <div>
                    <h3 className="font-anton text-3xl mb-6">THE SYSTEM</h3>
                    <ul className="font-inter text-sm uppercase tracking-widest space-y-2 text-gray-600">
                        <li className="border-b border-black/10 pb-2">Next.js 14</li>
                        <li className="border-b border-black/10 pb-2">Tailwind CSS</li>
                        <li className="border-b border-black/10 pb-2">Custom Typography</li>
                    </ul>
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
