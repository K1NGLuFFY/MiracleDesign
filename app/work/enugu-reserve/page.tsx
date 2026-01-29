'use client';
import Link from 'next/link';

export default function EnuguCaseStudy() {
    return (
        <main className="bg-[#f4f4f0] text-[#0a0a0a] min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#0B3D20] selection:text-white">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto border-b border-black/10 pb-12 mb-12">
                <h1 className="font-anton text-[10vw] leading-[0.85] text-[#0B3D20] uppercase">ENUGU<br />RESERVE</h1>
            </div>

            {/* CONTEXT */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                <div className="col-span-2">
                    <h3 className="font-anton text-3xl mb-6">THE CHALLENGE</h3>
                    <p className="font-inter text-xl leading-relaxed text-gray-700">
                        Enugu National Reserve needed a digital identity that reflected its raw, untouched nature without feeling primitive. The goal was to build a site that felt like a "window" into the forest.
                    </p>
                </div>
                <div>
                    <h3 className="font-anton text-3xl mb-6">THE STACK</h3>
                    <ul className="font-inter text-sm uppercase tracking-widest space-y-2 text-gray-600">
                        <li>Next.js 14</li>
                        <li>Tailwind CSS</li>
                        <li>Framer Motion</li>
                    </ul>
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
