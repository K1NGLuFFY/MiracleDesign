'use client';
import Link from 'next/link';

export default function NoireCaseStudy() {
    return (
        <main className="bg-[#0A0A0A] text-[#F4F4F2] min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto border-b border-white/10 pb-12 mb-12">
                <h1 className="font-anton text-[10vw] leading-[0.85] uppercase">
                    NOIRÉ<br />MODELS
                </h1>
                <div className="mt-8 flex justify-between items-end text-[#9A9A9A]">
                    <p className="font-inter text-sm uppercase tracking-widest">Fashion & Editorial</p>
                    <p className="font-inter text-sm uppercase tracking-widest">2025</p>
                </div>
            </div>

            {/* CONTEXT */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                <div className="col-span-2">
                    <h3 className="font-anton text-3xl mb-6">THE BRIEF</h3>
                    <p className="font-inter text-xl leading-relaxed text-[#9A9A9A]">
                        Fashion portfolios are often cluttered. Noiré needed to be invisible.
                        We built a "Stage-First" interface where the UI recedes entirely, leaving only the talent in focus.
                        The aesthetic is stark, high-contrast, and strictly monochromatic.
                    </p>
                </div>
                <div>
                    <h3 className="font-anton text-3xl mb-6">THE TECH</h3>
                    <ul className="font-inter text-sm uppercase tracking-widest space-y-2 text-[#9A9A9A]">
                        <li className="border-b border-white/10 pb-2">React / Next.js</li>
                        <li className="border-b border-white/10 pb-2">CSS Blend Modes</li>
                        <li className="border-b border-white/10 pb-2">Scroll Observers</li>
                    </ul>
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
