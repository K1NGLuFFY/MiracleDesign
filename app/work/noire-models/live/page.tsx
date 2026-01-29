'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NoireLivePage() {
    const [isVisible, setIsVisible] = useState(false);

    // Simple scroll reveal effect
    useEffect(() => {
        setIsVisible(true);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className="bg-[#0A0A0A] text-[#F4F4F2] font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">

            {/* Back Button */}
            <Link href="/work/noire-models" className="fixed bottom-8 left-8 z-[100] bg-[#F4F4F2] text-black px-6 py-3 font-anton uppercase tracking-widest text-xs hover:bg-[#9A9A9A] hover:text-white transition-colors mix-blend-difference">
                ← Exit
            </Link>

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-start mix-blend-difference text-[#F4F4F2] pointer-events-none">
                <a href="#" className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium pointer-events-auto cursor-pointer" onClick={() => window.scrollTo(0, 0)}>Noiré</a>
                <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest opacity-80 pointer-events-auto">
                    {['Women', 'Men', 'About', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-100 transition-opacity">{item}</a>
                    ))}
                </div>
                <div className="md:hidden text-xs uppercase tracking-widest pointer-events-auto">Menu</div>
            </nav>

            {/* Hero */}
            <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" className={`w-full h-full object-cover grayscale transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} alt="Model" />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="relative z-10 text-center px-4 mix-blend-difference text-white">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-tighter leading-none mb-6">Noiré Models</h1>
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300">International Model & Talent Representation</p>
                </div>
            </section>

            {/* Agency Statement */}
            <section className="py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#0A0A0A]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 hidden lg:block">
                        <span className="block w-full h-[1px] bg-[#333] mb-4"></span>
                        <p className="text-xs uppercase tracking-widest text-[#9A9A9A]">Agency Profile</p>
                    </div>
                    <div className="lg:col-span-8 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-12 text-[#F4F4F2]">
                            NOIRÉ is a selective modeling agency representing faces with <span className="text-gray-500">presence</span>, <span className="text-gray-500">discipline</span>, and <span className="text-gray-500">longevity</span>.
                        </h2>
                        <div className="flex gap-8 text-[#9A9A9A] text-xs uppercase tracking-widest mt-12">
                            <span>Paris</span><span>Milan</span><span>London</span><span>New York</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faces Grid */}
            <section id="faces" className="px-6 md:px-12 pb-24 bg-[#0A0A0A]">
                <div className="flex justify-between items-end mb-12 border-b border-[#333] pb-4">
                    <h3 className="text-xs uppercase tracking-widest text-[#9A9A9A]">Select Board</h3>
                    <span className="text-xs uppercase tracking-widest text-[#9A9A9A]">S/S 2026</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
                    {[
                        { name: "Elena K.", city: "Berlin", img: "https://images.unsplash.com/photo-1611558709796-cfd328701e19?q=80&w=1288&auto=format&fit=crop" },
                        { name: "Sasha V.", city: "Kyiv", img: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1287&auto=format&fit=crop" },
                        { name: "Julian R.", city: "London", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop" },
                        { name: "Adut M.", city: "Nairobi", img: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1281&auto=format&fit=crop" },
                        { name: "Mei L.", city: "Tokyo", img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1287&auto=format&fit=crop" },
                        { name: "Freja", city: "Copenhagen", img: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1494&auto=format&fit=crop" },
                    ].map((model, i) => (
                        <div key={i} className="group cursor-pointer reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="aspect-[3/4] bg-[#111] mb-4 overflow-hidden">
                                <img src={model.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={model.name} />
                            </div>
                            <div className="flex justify-between items-baseline border-t border-transparent group-hover:border-[#333] pt-3 transition-colors">
                                <h4 className="text-lg uppercase tracking-tight font-medium">{model.name}</h4>
                                <span className="text-[10px] text-[#9A9A9A] uppercase tracking-widest">{model.city}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 md:px-12 bg-[#0A0A0A] text-[#555] text-[10px] md:text-xs uppercase tracking-widest border-t border-[#1a1a1a]">
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h4 className="text-[#F4F4F2] mb-4">Noiré Models</h4>
                        <p>104 Rue Amelot, Paris</p>
                    </div>
                    <div>&copy; 2026 NOIRÉ</div>
                </div>
            </footer>
        </div>
    );
}
