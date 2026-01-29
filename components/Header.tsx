"use client";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference text-bone-white flex justify-between items-start pointer-events-none">
            <div className="pointer-events-auto cursor-pointer group">
                <h1 className="font-anton text-3xl uppercase tracking-tighter leading-none">
                    ANTHON
                    <span className="inline-block text-sm align-top mt-1 group-hover:rotate-180 transition-transform duration-500">
                        ™
                    </span>
                </h1>
            </div>
            <div className="text-xs font-inter uppercase tracking-widest text-right hidden md:block">
                <div>Est. 2026</div>
                <div>Lagos / Berlin</div>
                <div className="mt-2">Scroll to Decide ↓</div>
            </div>
        </header>
    );
}
