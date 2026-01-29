import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Message Received | Miracle Okeke',
    description: 'Thank you for reaching out. I will get back to you within 24 hours.',
};

export default function ThanksPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
            <div className="max-w-[720px] text-center">
                <h1 className="font-anton text-5xl md:text-7xl uppercase tracking-tight text-[#f4f4f0] mb-6">
                    Message Received.
                </h1>
                <p className="font-inter text-lg md:text-xl text-[#f4f4f0]/70 mb-12">
                    Thanks for reaching out — I'll get back to you within 24 hours.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-[#ff3c00] text-white px-8 py-4 font-anton text-lg uppercase tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
