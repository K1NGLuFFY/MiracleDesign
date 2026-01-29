'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    // FIX: If we are on a "Live" project page, do NOT render this navbar.
    // This prevents it from overlapping with the Enugu/Pulse specific navbars.
    if (pathname.includes('/live')) {
        return null;
    }

    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-6 z-50 mix-blend-difference text-[#f4f4f0] flex justify-between items-center pointer-events-none">
            {/* Logo */}
            <Link href="/" className="group cursor-pointer pointer-events-auto">
                <h1 className="font-anton text-2xl md:text-3xl uppercase tracking-tighter leading-none">
                    ANTHON
                    <span className="inline-block text-xs align-top mt-1 ml-1 group-hover:rotate-180 transition-transform duration-500">™</span>
                </h1>
            </Link>

            {/* Navigation Pill */}
            <div className="hidden md:flex gap-8 items-center bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 pointer-events-auto">
                {isHome ? (
                    <>
                        <a href="#philosophy" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">Philosophy</a>
                        <a href="#work" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">Selected Work</a>
                        <a href="#contact" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">Contact</a>
                    </>
                ) : (
                    <Link href="/" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">Back Home</Link>
                )}
            </div>

            {/* CTA */}
            <Link href="#contact" className="hidden md:flex items-center gap-2 group pointer-events-auto">
                <span className="font-anton uppercase text-lg underline decoration-transparent group-hover:decoration-[#ff3c00] underline-offset-4 transition-all">
                    Let's Talk
                </span>
                <div className="w-2 h-2 bg-[#ff3c00] rounded-full animate-pulse"></div>
            </Link>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden font-inter text-xs uppercase tracking-widest pointer-events-auto">
                Menu
            </div>
        </nav>
    );
}
