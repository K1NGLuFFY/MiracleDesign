import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { createMetadata } from "@/lib/metadata";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const anton = Anton({
    variable: "--font-anton",
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

export const metadata: Metadata = createMetadata({
    title: "Miracle | Design Portfolio",
    description: "UI/UX Designer & Frontend Engineer combining strategic UX with immersive motion.",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Miracle Okeke Portfolio",
        "url": "https://miracleokeke.com", // TODO: Update domain
        "author": {
            "@type": "Person",
            "name": "Miracle Okeke",
            "jobTitle": "UI/UX Designer & Frontend Engineer"
        }
    };

    return (
        <html lang="en" className={`${inter.variable} ${anton.variable} scroll-smooth`}>
            <body className="font-sans antialiased bg-[#0a0a0a] text-[#f4f4f0]">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
