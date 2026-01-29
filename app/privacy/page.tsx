import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Miracle Okeke',
    description: 'Privacy policy and data collection practices for Miracle Okeke\'s portfolio.',
};

export default function PrivacyPage() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-[#f4f4f0] py-32 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <Link href="/" className="font-inter text-xs uppercase tracking-widest text-[#ff3c00] hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="font-anton text-6xl mt-6 uppercase">Privacy Policy</h1>
                    <p className="mt-4 text-gray-400 font-inter">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose prose-invert prose-lg font-inter">
                    <section className="mb-12">
                        <h2 className="font-anton text-3xl uppercase mb-6 text-[#f4f4f0]">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I respect your privacy and am committed to protecting it through my compliance with this policy. This policy describes the types of information I may collect from you or that you may provide when you visit this portfolio website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-anton text-3xl uppercase mb-6 text-[#f4f4f0]">2. Information We Collect</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I collect several types of information from and about users of our Website, including information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                            <li>By which you may be personally identified, such as name and e-mail address ("personal information") when you fill out the contact form.</li>
                            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-anton text-3xl uppercase mb-6 text-[#f4f4f0]">3. How We Use Your Information</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I use information that we collect about you or that you provide to us:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it (e.g., responding to project inquiries).</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-anton text-3xl uppercase mb-6 text-[#f4f4f0]">4. Data Security</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide is transmitted using SSL (Secure Socket Layer) encryption.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="font-anton text-3xl uppercase mb-6 text-[#f4f4f0]">5. Contact Information</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            To ask questions or comment about this privacy policy and our privacy practices, contact me via the contact form on the homepage.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
