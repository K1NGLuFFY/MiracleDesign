'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-[#f4f4f0] selection:bg-accent selection:text-black">
            <Navbar />

            <div className="min-h-screen flex flex-col md:flex-row">

                {/* Left Side: The Hook */}
                <div className="w-full md:w-1/2 pt-32 px-6 md:px-12 flex flex-col justify-between pb-12 border-r border-white/10">
                    <div>
                        <p className="font-inter text-accent text-xs uppercase tracking-widest mb-6">Start a Project</p>
                        <h1 className="font-anton text-[12vw] md:text-[8vw] leading-[0.8]">
                            LET'S<br />TALK.
                        </h1>
                    </div>
                    <div className="mt-12">
                        <p className="font-inter text-gray-400 text-lg max-w-md">
                            Available for freelance projects and consulting.
                            Currently accepting bookings for Q2 2026.
                        </p>
                        <div className="mt-8 flex flex-col gap-2 font-inter text-sm uppercase tracking-widest">
                            <a href="mailto:miracle@anthon.design" className="hover:text-accent transition-colors">miracle@anthon.design</a>
                            <span>+234 (0) 906 049 5111</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <div className="w-full md:w-1/2 pt-32 px-6 md:px-12 pb-12">
                    <form className="space-y-12 max-w-lg mx-auto md:mr-auto md:ml-0">

                        <div className="group">
                            <label className="block font-anton text-xl uppercase mb-2 text-gray-500 group-focus-within:text-accent transition-colors">What's your name?</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-white/10" />
                        </div>

                        <div className="group">
                            <label className="block font-anton text-xl uppercase mb-2 text-gray-500 group-focus-within:text-accent transition-colors">Your Email?</label>
                            <input type="email" placeholder="john@company.com" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-white/10" />
                        </div>

                        <div className="group">
                            <label className="block font-anton text-xl uppercase mb-2 text-gray-500 group-focus-within:text-accent transition-colors">Tell me about the project</label>
                            <textarea rows={4} placeholder="I need a website that..." className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-white/10 resize-none"></textarea>
                        </div>

                        <button type="submit" className="group flex items-center gap-4 w-full pt-8">
                            <div className="h-[1px] bg-white/20 flex-grow group-hover:bg-accent transition-colors"></div>
                            <span className="font-anton text-3xl uppercase group-hover:text-accent transition-colors">Send Request</span>
                            <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300 group-hover:text-accent">→</span>
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}
