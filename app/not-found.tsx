"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-off-black px-6">
            {/* Animated 404 Text */}
            <motion.h1
                className="font-anton text-giant text-bone-white leading-[0.85] mb-8"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                404
            </motion.h1>

            {/* Subtext */}
            <motion.p
                className="text-bone-white/70 text-xl md:text-2xl mb-12 text-center max-w-2xl font-inter"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                The page you are looking for has been decided against.
            </motion.p>

            {/* Back to Home Button with Anthon hover effect */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <Link href="/" className="group relative inline-block">
                    <span className="font-anton text-2xl uppercase tracking-wide text-bone-white">
                        Back to Home
                    </span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-bottom-right scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:origin-bottom-left group-hover:scale-x-100" />
                </Link>
            </motion.div>
        </div>
    );
}
