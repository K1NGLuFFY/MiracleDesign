'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // FIX: If we are on a "Live" project page, do NOT render this navbar.
    // This prevents it from overlapping with the Enugu/Pulse specific navbars.
    if (pathname.includes('/live')) {
        return null;
    }

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const linkVariants = {
        appHidden: { opacity: 0, y: 20 },
        appVisible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i + 0.3,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        })
    };

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full px-6 py-6 z-50 text-[#f4f4f0] flex justify-between items-center pointer-events-none mix-blend-difference"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link href="/" className="group cursor-pointer pointer-events-auto relative z-[60]">
                    <span className="font-anton text-2xl md:text-3xl uppercase tracking-tighter leading-none block">
                        MIRACLE
                        <span className="inline-block text-xs align-top mt-1 ml-1 group-hover:rotate-180 transition-transform duration-500">™</span>
                    </span>
                </Link>

                {/* Navigation Pill (Desktop) */}
                <div className="hidden md:flex gap-8 items-center bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 pointer-events-auto">
                    {isHome ? (
                        <>
                            <a href="#philosophy" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">About</a>
                            <a href="#work" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">Selected Work</a>
                            <a href="#contact" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">Contact</a>
                        </>
                    ) : (
                        <Link href="/" className="font-inter text-xs uppercase tracking-widest hover:text-[#ff3c00] transition-colors">Back Home</Link>
                    )}
                </div>

                {/* CTA (Desktop) */}
                <Link href="#contact" className="hidden md:flex items-center gap-2 group pointer-events-auto">
                    <span className="font-anton uppercase text-lg underline decoration-transparent group-hover:decoration-[#ff3c00] underline-offset-4 transition-all">
                        Let's Talk
                    </span>
                    <div className="w-2 h-2 bg-[#ff3c00] rounded-full animate-pulse"></div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden font-inter text-xs uppercase tracking-widest pointer-events-auto relative z-[60]"
                >
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {isHome ? (
                                <>
                                    {['About', 'Work', 'Contact'].map((item, i) => (
                                        <motion.a
                                            key={item}
                                            href={`#${item.toLowerCase() === 'work' ? 'work' : item.toLowerCase() === 'about' ? 'philosophy' : 'contact'}`}
                                            custom={i}
                                            variants={linkVariants}
                                            initial="appHidden"
                                            animate="appVisible"
                                            onClick={toggleMenu}
                                            className="font-anton text-4xl uppercase tracking-wider hover:text-[#ff3c00] transition-colors text-[#f4f4f0]"
                                        >
                                            {item}
                                        </motion.a>
                                    ))}
                                </>
                            ) : (
                                <motion.div
                                    custom={0}
                                    variants={linkVariants}
                                    initial="appHidden"
                                    animate="appVisible"
                                >
                                    <Link
                                        href="/"
                                        onClick={toggleMenu}
                                        className="font-anton text-4xl uppercase tracking-wider hover:text-[#ff3c00] transition-colors text-[#f4f4f0]"
                                    >
                                        Back Home
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
