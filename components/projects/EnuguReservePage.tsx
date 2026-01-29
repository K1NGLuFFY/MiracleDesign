'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';

interface Props {
    project: Project;
}

export default function EnuguReservePage({ project }: Props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    // Handle Scroll Effect for Navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Loader State (Simulated)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    if (loading) {
        return (
            <div className="fixed inset-0 bg-enugu-forest z-[9999] flex justify-center items-center">
                <div className="text-enugu-bone font-anton text-4xl tracking-wider animate-pulse">ENR</div>
            </div>
        );
    }

    return (
        <div className="bg-enugu-bone text-gray-800 font-inter antialiased overflow-x-hidden selection:bg-enugu-accent selection:text-white">

            {/* GLOBAL BACK BUTTON (Floating) */}
            <Link href="/" className="fixed bottom-8 left-8 z-[100] bg-black text-white px-6 py-3 font-anton uppercase tracking-widest text-xs hover:bg-enugu-accent transition-colors shadow-2xl">
                ← Back to Portfolio
            </Link>

            {/* NAVIGATION */}
            <nav
                className={`fixed w-full z-40 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center group ${isScrolled ? 'bg-white shadow-md py-4 text-enugu-forest' : 'text-white'
                    }`}
            >
                <div className="text-2xl font-anton tracking-wide relative z-50 ">
                    ENUGU <span className="text-enugu-accent">NR.</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10 items-center">
                    {['About', 'Wildlife', 'Trails'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-bold uppercase tracking-widest hover:text-enugu-accent transition-colors relative ${isScrolled ? 'text-enugu-forest' : 'text-white'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="bg-enugu-accent hover:bg-orange-600 text-white px-6 py-3 font-bold text-sm tracking-widest transition-all transform hover:-translate-y-1 shadow-lg">
                        VISIT
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden z-50 focus:outline-none transition-colors duration-300"
                >
                    <div className="space-y-2">
                        <span className={`block w-8 h-0.5 transition-colors ${mobileMenuOpen ? 'bg-white transform rotate-45 translate-y-2.5' : (isScrolled ? 'bg-enugu-forest' : 'bg-white')}`}></span>
                        <span className={`block w-8 h-0.5 transition-colors ${mobileMenuOpen ? 'opacity-0' : (isScrolled ? 'bg-enugu-forest' : 'bg-white')}`}></span>
                        <span className={`block w-8 h-0.5 transition-colors ${mobileMenuOpen ? 'bg-white transform -rotate-45 -translate-y-2.5' : (isScrolled ? 'bg-enugu-forest' : 'bg-white')}`}></span>
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="fixed inset-0 bg-enugu-forest z-40 flex flex-col justify-center items-center space-y-8 text-white"
                    >
                        {['About', 'Wildlife', 'Trails', 'Conservation', 'Visit'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-3xl font-anton ${item === 'Visit' ? 'text-enugu-accent' : ''}`}
                            >
                                {item === 'Visit' ? 'Plan Visit' : item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 1. HERO SECTION */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2072&q=80"
                        alt="Enugu Reserve Hero"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,61,32,0.3)] to-[rgba(11,61,32,0.6)]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-anton text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight tracking-tight"
                    >
                        ENUGU <br /> NATIONAL RESERVE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="font-inter text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
                    >
                        Preserving Nature, Protecting Life, Inspiring Generations.
                        <span className="block mt-2 font-playfair italic text-enugu-accent">The heart of the Coal City beats green.</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                    >
                        <a href="#visit" className="bg-enugu-accent text-white px-8 py-4 font-bold tracking-widest hover:bg-white hover:text-enugu-forest transition-all duration-300">
                            VISIT THE RESERVE
                        </a>
                        <a href="#wildlife" className="border border-white text-white px-8 py-4 font-bold tracking-widest hover:bg-white hover:text-enugu-forest transition-all duration-300">
                            DISCOVER WILDLIFE
                        </a>
                    </motion.div>
                </div>
            </header>

            {/* 2. ABOUT THE RESERVE */}
            <section id="about" className="py-24 px-6 md:px-12 bg-enugu-bone relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <span className="text-enugu-accent font-bold tracking-widest text-sm uppercase mb-2 block">Established 1998</span>
                        <h2 className="font-anton text-enugu-forest text-5xl md:text-7xl mb-8 leading-none">A NATURAL <br /> SANCTUARY</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Enugu National Reserve spans thousands of hectares of undisturbed forests, savannahs, and rivers, hosting endemic species and migratory wildlife.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed font-playfair italic border-l-4 border-enugu-earth pl-4">
                            "A window into Nigeria’s ecological heritage, protecting the lungs of the East."
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="bg-white p-6 shadow-sm border-b-4 border-enugu-forest hover:shadow-md transition-shadow">
                                <div className="font-anton text-4xl text-enugu-forest">15k</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Hectares</div>
                            </div>
                            <div className="bg-white p-6 shadow-sm border-b-4 border-enugu-accent hover:shadow-md transition-shadow">
                                <div className="font-anton text-4xl text-enugu-forest">250+</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Wildlife Species</div>
                            </div>
                            <div className="bg-white p-6 shadow-sm border-b-4 border-enugu-sky hover:shadow-md transition-shadow">
                                <div className="font-anton text-4xl text-enugu-forest">180+</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Bird Species</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2071&q=80"
                            alt="Enugu Landscape"
                            fill
                            className="object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                            unoptimized
                        />
                        {/* Overlay Card */}
                        <div className="absolute -bottom-10 -left-10 bg-enugu-forest text-white p-8 max-w-xs hidden md:block shadow-xl">
                            <p className="font-playfair text-xl italic mb-2">Did you know?</p>
                            <p className="text-sm opacity-80">The reserve is home to rare medicinal plants used by Igbo healers for centuries.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DID YOU KNOW / FUN FACTS */}
            <section className="py-24 bg-white px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-anton text-5xl text-enugu-forest mb-12">DID YOU KNOW?</h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: "🐾", title: "250+ Wildlife Species", desc: "Including forest elephants, rare antelopes, and endangered migratory birds that call this sanctuary home." },
                            { icon: "🍃", title: "Rare Medicinal Plants", desc: "The reserve protects ancient flora used for centuries in traditional Igbo medicine and healing practices." },
                            { icon: "🕊️", title: "Birdwatching Paradise", desc: "Over 180 species of migratory and endemic birds can be spotted from our observation towers." }
                        ].map((fact, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="p-8 border border-gray-200 rounded-sm hover:border-enugu-accent transition-colors duration-300"
                            >
                                <div className="text-enugu-accent text-3xl mb-4">{fact.icon}</div>
                                <h3 className="font-anton text-2xl text-enugu-forest mb-3">{fact.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{fact.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. WILDLIFE & FLORA */}
            <section id="wildlife" className="py-24 bg-enugu-forest text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="font-anton text-5xl md:text-7xl mb-2">HOME TO THE WILD</h2>
                            <p className="text-gray-400 max-w-md">Witness biodiversity at its peak. From the forest floor to the canopy.</p>
                        </div>
                        <a href="#" className="hidden md:inline-block text-enugu-accent hover:text-white transition-colors border-b border-enugu-accent pb-1 mt-6 md:mt-0">
                            View Full Species List →
                        </a>
                    </div>

                    {/* Horizontal Scroll / Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Forest Elephants", sci: "Loxodonta cyclotis", img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1932&q=80", mt: "" },
                            { name: "Grey Parrots", sci: "Psittacus erithacus", img: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1887&q=80", mt: "lg:mt-12" },
                            { name: "Leopards", sci: "Panthera pardus", img: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=2070&q=80", mt: "" },
                            { name: "Giant Mahogany", sci: "Khaya anthotheca", img: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=2070&q=80", mt: "lg:mt-12" }
                        ].map((animal, i) => (
                            <div key={i} className={`group relative overflow-hidden h-[400px] cursor-pointer ${animal.mt}`}>
                                <Image
                                    src={animal.img}
                                    alt={animal.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="font-anton text-2xl text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform">{animal.name}</h3>
                                    <p className="text-enugu-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{animal.sci}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TRAILS & EXPERIENCES */}
            <section id="trails" className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-enugu-earth font-bold tracking-widest text-sm uppercase">Adventure Awaits</span>
                        <h2 className="font-anton text-enugu-forest text-5xl md:text-7xl">EXPLORE THE WILD</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Hiking Trails", icon: "🥾", desc: "5 levels from beginner nature walks to expert terrain trekking. Discover hidden waterfalls and ancient groves.", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2070&q=80" },
                            { title: "Canopy Camping", icon: "⛺", desc: "Sleep under the stars in our secure riverbank tents or elevated canopy lodges. A true immersion in night sounds.", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=2070&q=80" },
                            { title: "Birdwatching", icon: "🔭", desc: "Access our 360-degree observation towers. Best viewing times are sunrise and dusk for migratory species.", img: "https://images.unsplash.com/photo-1552728089-57bdde30ebd1?auto=format&fit=crop&w=2070&q=80" }
                        ].map((activity, i) => (
                            <div key={i} className="group border border-gray-200 hover:border-enugu-forest transition-colors p-8">
                                <div className="w-12 h-12 bg-enugu-bone rounded-full flex items-center justify-center text-enugu-forest mb-6 group-hover:bg-enugu-forest group-hover:text-white transition-colors text-xl">
                                    {activity.icon}
                                </div>
                                <h3 className="font-anton text-2xl text-enugu-forest mb-4">{activity.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    {activity.desc}
                                </p>
                                <div className="relative w-full h-48 mb-4">
                                    <Image
                                        src={activity.img}
                                        alt={activity.title}
                                        fill
                                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all"
                                        unoptimized
                                    />
                                </div>
                                <a href="#" className="text-enugu-forest font-bold text-sm uppercase tracking-wide group-hover:text-enugu-accent">Details →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CONSERVATION (Parallax) */}
            <section id="conservation" className="py-32 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?auto=format&fit=crop&w=2100&q=80"
                        alt="Conservation Background"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-enugu-forest/80"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
                    <h2 className="font-anton text-5xl md:text-7xl mb-8">PRESERVATION IN ACTION</h2>
                    <p className="text-xl leading-relaxed mb-12 font-light">
                        We partner with local communities and NGOs to research biodiversity, prevent poaching, and restore degraded areas. Every visit supports these efforts.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
                        {[
                            { val: "10k+", label: "Trees Planted" },
                            { val: "0", label: "Poaching Incidents '25" },
                            { val: "50+", label: "Rangers Employed" }
                        ].map((stat, i) => (
                            <div key={i} className="p-4 border border-white/20 backdrop-blur-sm min-w-[150px]">
                                <div className="text-4xl font-anton text-enugu-accent mb-2">{stat.val}</div>
                                <div className="text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUPPORTING LOCAL COMMUNITIES */}
            <section className="py-24 px-6 md:px-12 bg-enugu-earth/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-anton text-5xl text-enugu-forest mb-8">SUPPORTING LOCAL COMMUNITIES</h2>
                    <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
                        Conservation is about people too. The reserve works hand-in-hand with nearby villages to promote sustainable livelihoods and cultural pride.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "🎓", title: "Education Programs", desc: "Environmental education programs in schools to raise the next generation of rangers." },
                            { icon: "🗺️", title: "Local Guides", desc: "Eco-tourism guides trained directly from local residents, providing sustainable jobs." },
                            { icon: "🧺", title: "Artisan Markets", desc: "Spaces for local artisans to sell traditional handicrafts and arts to visitors." }
                        ].map((prog, i) => (
                            <div key={i} className="bg-white p-8 shadow-sm border-b-4 border-enugu-earth">
                                <div className="text-4xl mb-4">{prog.icon}</div>
                                <h3 className="font-anton text-xl text-enugu-forest mb-2">{prog.title}</h3>
                                <p className="text-sm text-gray-600">{prog.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CULTURAL HERITAGE */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="relative h-64 w-full">
                            <Image src="https://images.unsplash.com/photo-1621258280628-98c4309395f1?auto=format&fit=crop&w=1887&q=80" alt="Culture" fill className="object-cover rounded-sm mb-8" unoptimized />
                        </div>
                        <div className="relative h-64 w-full mt-8">
                            <Image src="https://images.unsplash.com/photo-1533633310069-4a949e295484?auto=format&fit=crop&w=1965&q=80" alt="Culture 2" fill className="object-cover rounded-sm" unoptimized />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <span className="text-enugu-earth font-bold tracking-widest text-sm uppercase block mb-2">Roots & Traditions</span>
                        <h2 className="font-anton text-enugu-forest text-5xl md:text-6xl mb-6">IGBO HERITAGE</h2>
                        <p className="text-gray-700 text-lg mb-6 font-playfair italic">
                            "The land and the people are one."
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Enugu National Reserve sits amid regions rich in Igbo culture. We believe in inclusive conservation. Visitors can explore local crafts, traditional music, and cultural events integrated respectfully into the eco-tourism experience.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-enugu-forest font-semibold"><span className="text-enugu-accent mr-3">✔</span> Traditional Pottery Workshops</li>
                            <li className="flex items-center text-enugu-forest font-semibold"><span className="text-enugu-accent mr-3">✔</span> Masquerade Festivals (Seasonal)</li>
                            <li className="flex items-center text-enugu-forest font-semibold"><span className="text-enugu-accent mr-3">✔</span> Local Cuisine Tasting</li>
                        </ul>
                        <button className="bg-enugu-forest text-white px-8 py-3 hover:bg-enugu-earth transition-colors">View Cultural Calendar</button>
                    </div>
                </div>
            </section>

            {/* 7. GALLERY GRID */}
            <section className="py-24 bg-enugu-bone">
                <div className="text-center mb-12">
                    <h2 className="font-anton text-enugu-forest text-5xl">CAPTURED MOMENTS</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4 h-[600px] md:h-[800px]">
                    <div className="relative group overflow-hidden h-full row-span-2 col-span-2">
                        <Image src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2072&q=80" alt="Gallery 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                    </div>
                    <div className="relative group overflow-hidden h-full">
                        <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2071&q=80" alt="Gallery 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                    </div>
                    <div className="relative group overflow-hidden h-full">
                        <Image src="https://images.unsplash.com/photo-1444464666117-6e6e3b958495?auto=format&fit=crop&w=2070&q=80" alt="Gallery 3" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                    </div>
                    <div className="relative group overflow-hidden h-full col-span-2 md:col-span-1 md:row-span-1">
                        <Image src="https://images.unsplash.com/photo-1596706979685-51d020d1487b?auto=format&fit=crop&w=1974&q=80" alt="Gallery 4" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                    </div>
                    <div className="relative group overflow-hidden h-full">
                        <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1974&q=80" alt="Gallery 5" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                    </div>
                </div>
            </section>

            {/* 8. TESTIMONIALS */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-anton text-enugu-forest text-4xl mb-12">VOICES OF THE WILD</h2>
                    <div className="relative bg-enugu-bone p-12 shadow-lg border-t-4 border-enugu-accent">
                        <span className="text-6xl text-enugu-earth/20 absolute top-8 left-8 font-serif">"</span>
                        <p className="text-xl md:text-2xl text-gray-700 font-playfair italic mb-8 relative z-10">
                            "I've hiked across Africa, but the morning mist over the Enugu hills is something spiritual. The conservation team is doing incredible work."
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-12 h-12 rounded-full border-2 border-enugu-accent overflow-hidden relative">
                                <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" fill className="object-cover" unoptimized />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-enugu-forest font-anton tracking-wide">AMARA OKAFOR</div>
                                <div className="text-xs text-gray-500 uppercase">Eco-Tourist, Lagos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISITOR INFO */}
            <section className="py-24 bg-enugu-forest/5 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="font-anton text-5xl text-enugu-forest mb-6">VISITOR INFORMATION</h2>
                        <p className="text-gray-700 mb-6 text-lg">
                            Open daily from <span className="font-bold">6:00 AM to 6:00 PM</span>. All entry fees directly support our conservation and anti-poaching efforts.
                        </p>
                        <ul className="list-none text-gray-700 space-y-4">
                            {[
                                { icon: "ℹ️", label: "Guided Tours: Available for groups of 5+ (Booking recommended)" },
                                { icon: "🗑️", label: "Eco-Facilities: Picnic areas with strict waste management bins" },
                                { icon: "🏪", label: "Souvenir Shop: Featuring local eco-friendly crafts" },
                                { icon: "♿", label: "Accessibility: Main trails are wheelchair accessible" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="mr-3">{item.icon}</span>
                                    <div>{item.label}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/3 bg-white p-8 shadow-lg border-l-4 border-enugu-forest w-full">
                        <h3 className="font-anton text-2xl text-enugu-forest mb-4">Gate Fees</h3>
                        <div className="space-y-4">
                            {[
                                { label: "Adults", price: "₦2,000" },
                                { label: "Children (Under 12)", price: "₦1,000" },
                                { label: "Students (with ID)", price: "₦1,500" },
                                { label: "Guided Tour (Group)", price: "₦10,000" }
                            ].map((fee, i) => (
                                <div key={i} className={`flex justify-between ${i !== 3 ? 'border-b border-gray-100 pb-2' : 'pt-2'}`}>
                                    <span>{fee.label}</span>
                                    <span className="font-bold text-enugu-earth">{fee.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CTA & FOOTER */}
            <footer id="visit" className="bg-enugu-forest text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto border-b border-white/10 pb-16 mb-16 text-center">
                    <h2 className="font-anton text-5xl md:text-8xl mb-6">EXPERIENCE ENUGU</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Ready to reconnect with nature? Book your visit today or support our conservation efforts.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <button className="bg-enugu-accent text-white px-10 py-4 font-bold tracking-widest hover:bg-white hover:text-enugu-forest transition-all">PLAN YOUR VISIT</button>
                        <button className="border border-white text-white px-10 py-4 font-bold tracking-widest hover:bg-white hover:text-enugu-forest transition-all">BECOME A MEMBER</button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-400">
                    <div>
                        <div className="text-2xl font-anton tracking-wide mb-6 text-white">ENUGU <span className="text-enugu-accent">NR.</span></div>
                        <p className="leading-relaxed">A protected national heritage site dedicated to the conservation of Nigeria's unique biodiversity.</p>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-enugu-accent">Explore</h4>
                        <ul className="space-y-3">
                            {['Wildlife', 'Hiking Trails', 'Camping', 'Cultural Tours'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-enugu-accent">Contact</h4>
                        <ul className="space-y-3">
                            <li>Enugu State, Nigeria</li>
                            <li>+234 800 RESERVE</li>
                            <li>visit@enugureserve.ng</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6 text-enugu-accent">Newsletter</h4>
                        <div className="flex">
                            <input type="email" placeholder="Email Address" className="bg-white/10 border-none outline-none px-4 py-2 text-white placeholder-gray-400 w-full focus:ring-1 focus:ring-enugu-accent" />
                            <button className="bg-enugu-accent px-4 py-2 text-white hover:bg-orange-600 transition-colors">Go</button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2026 Enugu National Reserve. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
