'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PulseLivePage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#f4f4f2] text-[#0f1712] font-inter antialiased overflow-x-hidden selection:bg-[#526b55] selection:text-white">

            {/* FLOATING BACK BUTTON */}
            <Link href="/work/pulse-fitness" className="fixed bottom-8 left-8 z-[100] bg-[#0f1712] text-white px-6 py-3 font-anton uppercase tracking-widest text-xs hover:bg-[#526b55] transition-colors shadow-2xl">
                ← Exit Preview
            </Link>

            {/* NAVBAR */}
            <nav className={`fixed w-full z-40 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center ${isScrolled ? 'bg-[#0f1712] shadow-lg py-4' : 'bg-[#0f1712]/95 backdrop-blur-sm'}`}>
                <div className="font-anton text-3xl tracking-wide text-white cursor-pointer" onClick={() => window.scrollTo(0, 0)}>PULSE</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12 items-center">
                    {['Philosophy', 'Membership', 'Community'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-[#9ca3af] hover:text-white text-sm uppercase tracking-widest transition-colors duration-200">{item}</a>
                    ))}
                    <button className="bg-[#526b55] hover:bg-white hover:text-[#0f1712] text-white px-6 py-2 font-anton uppercase tracking-wider text-sm transition-all duration-200">Join Now</button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
                    <div className="space-y-2">
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                    </div>
                </button>
            </nav>

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f1712]/90 to-[#050a06]/95"></div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
                    <div className="max-w-4xl">
                        <h1 className="font-anton text-7xl md:text-9xl text-white leading-[0.9] tracking-tight mb-8">TRAIN<br />WITH PURPOSE.</h1>
                        <p className="font-inter text-[#9ca3af] text-lg md:text-xl max-w-lg mb-12 border-l-2 border-[#526b55] pl-6">
                            A gym built for consistency, not trends. No hype badges. No animated counters. Just iron.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="bg-white text-[#0f1712] px-10 py-4 font-anton uppercase text-lg tracking-widest hover:bg-[#526b55] hover:text-white transition-all duration-300">Join the Gym</button>
                            <button className="border border-white/30 text-white px-10 py-4 font-anton uppercase text-lg tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300">View Memberships</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PHILOSOPHY SECTION */}
            <section id="philosophy" className="py-24 bg-[#f4f4f2]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <h2 className="font-anton text-6xl md:text-8xl text-[#0f1712] leading-none">NO GIMMICKS.<br />NO EXCUSES.</h2>
                        <div className="w-24 h-2 bg-[#526b55] mt-6"></div>
                    </div>
                    <div>
                        <p className="text-[#0f1712]/80 text-xl leading-relaxed font-light">
                            We focus on fundamentals: strength, conditioning, recovery, and discipline. Everything else is noise.
                            We don't sell shortcuts or magic pills. We provide the space, the equipment, and the atmosphere for serious work.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. ZONES (WHAT YOU GET) */}
            <section className="bg-[#0f1712] py-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {[
                        { title: 'STRENGTH FLOOR', desc: 'Free weights, racks, and machines designed for real progression.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1770&auto=format&fit=crop' },
                        { title: 'CONDITIONING', desc: 'Cardio equipment without distraction. Rowers, assault bikes, and sleds.', img: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1769&auto=format&fit=crop' },
                        { title: 'RECOVERY', desc: 'Stretching zones and guided recovery sessions.', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1770&auto=format&fit=crop' }
                    ].map((zone, i) => (
                        <div key={i} className="group relative h-[600px] overflow-hidden border-r border-white/10 last:border-r-0">
                            <img src={zone.img} alt={zone.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500 filter grayscale" />
                            <div className="absolute inset-0 flex flex-col justify-end p-10 z-10 pointer-events-none">
                                <h3 className="font-anton text-4xl text-white mb-4 group-hover:text-[#526b55] transition-colors duration-300">{zone.title}</h3>
                                <p className="text-[#9ca3af] font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">{zone.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. VISUAL PROOF (RESTORED) */}
            <section className="py-24 bg-[#f4f4f2]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="font-anton text-5xl text-[#0f1712] mb-12 uppercase tracking-wide">Built For Work.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { tag: "Morning Strength", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop" },
                            { tag: "Evening Conditioning", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1769&auto=format&fit=crop" },
                            { tag: "Functional Area", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1769&auto=format&fit=crop" },
                            { tag: "Focus & Grip", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1770&auto=format&fit=crop" }
                        ].map((item, i) => (
                            <div key={i} className={`group relative aspect-[3/4] bg-[#9ca3af]/10 overflow-hidden ${i % 2 !== 0 ? 'lg:mt-12' : ''}`}>
                                <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125" alt={item.tag} />
                                <div className="absolute bottom-4 left-4 bg-[#0f1712] px-3 py-1">
                                    <span className="text-white text-xs font-anton tracking-wider uppercase">{item.tag}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TRAINING APPROACH (RESTORED) */}
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
                                {['Structured Weekly Routines', 'Optional Expert Coaching', 'Scalable Difficulty'].map(li => (
                                    <li key={li} className="flex items-start">
                                        <span className="block w-2 h-2 mt-2 bg-[#526b55] mr-4"></span>
                                        <span className="font-anton tracking-wide text-lg">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. MEMBERSHIP */}
            <section id="membership" className="py-24 bg-[#f4f4f2]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="mb-16">
                        <h2 className="font-anton text-5xl text-[#0f1712]">MEMBERSHIP</h2>
                        <p className="font-inter text-[#0f1712]/60 mt-2">Transparent pricing. No hidden fees.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Monthly */}
                        <div className="bg-white p-10 border border-gray-200 hover:border-[#0f1712] transition-colors duration-300 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="font-anton text-3xl text-[#0f1712] mb-2">MONTHLY</h3>
                                <p className="text-3xl font-inter font-bold text-[#0f1712] mb-6">$75 <span className="text-sm font-normal text-gray-500">/mo</span></p>
                                <p className="text-gray-600 mb-8 text-sm">Full access. Cancel anytime.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="text-sm text-[#0f1712] flex items-center"><span className="mr-2 text-[#526b55]">■</span> All Access Hours</li>
                                    <li className="text-sm text-[#0f1712] flex items-center"><span className="mr-2 text-[#526b55]">■</span> Full Equipment Usage</li>
                                </ul>
                            </div>
                            <button className="w-full border-2 border-[#0f1712] text-[#0f1712] font-anton uppercase py-3 hover:bg-[#0f1712] hover:text-white transition-all duration-200 tracking-wide">Start Monthly</button>
                        </div>

                        {/* Quarterly */}
                        <div className="bg-[#0f1712] p-10 border border-[#0f1712] flex flex-col justify-between h-full relative transform md:-translate-y-4 shadow-xl">
                            <div>
                                <h3 className="font-anton text-3xl text-white mb-2">QUARTERLY</h3>
                                <p className="text-3xl font-inter font-bold text-white mb-6">$200 <span className="text-sm font-normal text-gray-400">/3 mo</span></p>
                                <p className="text-gray-400 mb-8 text-sm">Commit longer. Save more.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="text-sm text-white flex items-center"><span className="mr-2 text-[#526b55]">■</span> All Access Hours</li>
                                    <li className="text-sm text-white flex items-center"><span className="mr-2 text-[#526b55]">■</span> 2 Guest Passes / Month</li>
                                </ul>
                            </div>
                            <button className="w-full bg-[#526b55] text-white border-2 border-[#526b55] font-anton uppercase py-3 hover:bg-white hover:text-[#0f1712] hover:border-white transition-all duration-200 tracking-wide">Start Quarterly</button>
                        </div>

                        {/* Annual */}
                        <div className="bg-white p-10 border border-gray-200 hover:border-[#0f1712] transition-colors duration-300 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="font-anton text-3xl text-[#0f1712] mb-2">ANNUAL</h3>
                                <p className="text-3xl font-inter font-bold text-[#0f1712] mb-6">$750 <span className="text-sm font-normal text-gray-500">/yr</span></p>
                                <p className="text-gray-600 mb-8 text-sm">Best for routine builders.</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="text-sm text-[#0f1712] flex items-center"><span className="mr-2 text-[#526b55]">■</span> All Access Hours</li>
                                    <li className="text-sm text-[#0f1712] flex items-center"><span className="mr-2 text-[#526b55]">■</span> Unlimited Classes</li>
                                </ul>
                            </div>
                            <button className="w-full border-2 border-[#0f1712] text-[#0f1712] font-anton uppercase py-3 hover:bg-[#0f1712] hover:text-white transition-all duration-200 tracking-wide">Start Annual</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. COMMUNITY SECTION (RESTORED) */}
            <section id="community" className="py-24 bg-[#0f1712] relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none select-none">
                    <span className="font-anton text-[20rem] text-white leading-none">FOCUS</span>
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-anton text-6xl text-white mb-6">TRAIN AROUND<br /><span className="text-[#526b55]">SERIOUS PEOPLE.</span></h2>
                            <p className="text-[#9ca3af] text-xl font-light mb-8">
                                No filming culture. No influencer mirrors. Just training. We maintain an environment where focus is respected.
                            </p>
                            <div className="bg-white/5 p-6 border-l-4 border-[#526b55]">
                                <h4 className="text-white font-anton tracking-wide mb-2">CODE OF CONDUCT</h4>
                                <p className="text-sm text-[#9ca3af]">Re-rack your weights. Respect personal space. Silence your phone.</p>
                            </div>
                        </div>
                        <div className="h-96 bg-gray-900 relative">
                            <img src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-60" alt="Community" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. LOCATION (RESTORED) */}
            <section className="py-24 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-anton text-7xl text-[#0f1712] leading-none mb-6">OPEN EARLY.<br />CLOSE LATE.</h2>
                            <p className="text-gray-600 font-inter text-lg">Designed to fit real schedules.</p>
                        </div>
                        <div className="bg-[#f4f4f2] p-8 flex flex-col justify-center space-y-6">
                            <div>
                                <h4 className="font-anton text-[#0f1712] text-xl mb-1">LOCATION</h4>
                                <p className="text-gray-600">1204 Ironworks District, Suite 100</p>
                            </div>
                            <div>
                                <h4 className="font-anton text-[#0f1712] text-xl mb-1">HOURS</h4>
                                <p className="text-gray-600">Mon - Fri: 04:00 - 23:00</p>
                            </div>
                            <div>
                                <h4 className="font-anton text-[#0f1712] text-xl mb-1">CONTACT</h4>
                                <p className="text-gray-600">555.019.2834</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA (RESTORED) */}
            <section id="join" className="py-32 bg-[#0f1712] text-center relative">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="font-anton text-7xl md:text-9xl text-white leading-none mb-6">START<br />SHOWING UP.</h2>
                    <p className="text-[#526b55] text-xl md:text-2xl font-light mb-12">Your first session starts today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-white text-[#0f1712] px-12 py-5 font-anton uppercase text-xl tracking-widest hover:bg-[#526b55] hover:text-white transition-all duration-300">Join Now</button>
                        <button className="border border-white/30 text-white px-12 py-5 font-anton uppercase text-xl tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300">Visit the Gym</button>
                    </div>
                </div>
            </section>

            {/* 10. FOOTER (RESTORED) */}
            <footer className="bg-[#0f1712] border-t border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-anton text-2xl text-white tracking-wide block mb-2">PULSE</span>
                        <p className="text-[#9ca3af] text-xs">&copy; 2024 Pulse Fitness.</p>
                    </div>
                    <div className="flex space-x-8">
                        <a href="#" className="text-[#9ca3af] hover:text-white text-xs uppercase tracking-wider transition-colors">Terms</a>
                        <a href="#" className="text-[#9ca3af] hover:text-white text-xs uppercase tracking-wider transition-colors">Instagram</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}
