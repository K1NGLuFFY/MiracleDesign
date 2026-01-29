"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-bone-white/20 py-16 px-6 md:px-12">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Branding */}
                    <div>
                        <h3 className="font-anton text-2xl md:text-3xl mb-4 tracking-wide">
                            ANTHON
                        </h3>
                        <p className="text-bone-white/60 font-inter">
                            Design is Decision
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-anton text-xl mb-4 tracking-wide">
                            WORK
                        </h4>
                        <ul className="space-y-2 text-bone-white/60 font-inter">
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    Strategy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    Identity
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    Digital
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-anton text-xl mb-4 tracking-wide">
                            CONNECT
                        </h4>
                        <ul className="space-y-2 text-bone-white/60 font-inter">
                            <li>
                                <a href="mailto:hello@anthon.design" className="hover:text-accent transition-colors">
                                    hello@anthon.design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent transition-colors">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-bone-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-6">
                        <p className="text-bone-white/40 text-sm font-inter">
                            Est {currentYear}
                        </p>
                        <a href="/privacy" className="text-bone-white/40 text-sm font-inter hover:text-[#ff3c00] transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                    <p className="text-bone-white/40 text-sm font-inter">
                        All decisions reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
