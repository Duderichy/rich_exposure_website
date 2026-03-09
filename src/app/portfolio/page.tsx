import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse the Rich Exposure photography portfolio — travel photography, street photography, weddings, and portraits by RM Bibeault.",
};

const galleries = [
  {
    title: "Travel Photography",
    description: "From remote landscapes to bustling markets — stories from every corner of the globe.",
    href: "/portfolio/travel",
    src: "/images/travel/01-skogafoss-rainbow.jpg",
    count: "20 images",
  },
  {
    title: "Street Photography",
    description: "Candid moments and urban scenes that reveal the rhythm of city life.",
    href: "/portfolio/street",
    src: "/images/street/14-snowy-steam-spring-st.jpg",
    count: "20 images",
  },
  {
    title: "Night Photography",
    description: "The cinematic beauty of New York City after dark — warm light, wet streets, and quiet drama.",
    href: "/portfolio/night",
    src: "/images/night/01-oculus-reflections.jpg",
    count: "12 images",
  },
  {
    title: "Ballet & Performance",
    description: "Capturing the raw power, grace, and dramatic storytelling of dance.",
    href: "/portfolio/ballet",
    src: "/images/ballet/05-ballerina-spin.jpg",
    count: "10 images",
  },
  {
    title: "Portraits",
    description: "Authentic, cinematic portraits that reveal character and mood.",
    href: "/portfolio/portraits",
    src: "/images/portraits-new/01-unicorn-tapestry.jpg",
    count: "12 images",
  },
  {
    title: "Nature",
    description: "Birds, blooms, and the quiet beauty of the natural world.",
    href: "/portfolio/nature",
    src: "/images/nature/01-eastern-bluebird.jpg",
    count: "7 images",
  },
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Selected Work
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            A curated selection of my travel and street photography. For wedding and portrait
            galleries, please{" "}
            <Link href="/contact" className="text-accent hover:text-accent-light transition-colors">
              get in touch
            </Link>{" "}
            to view full client galleries.
          </p>
        </div>
      </section>

      {/* Gallery Links */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {galleries.map((gallery, index) => (
            <Link
              key={gallery.title}
              href={gallery.href}
              className={`group relative overflow-hidden aspect-[21/9] animate-fade-in-up ${index === 1 ? "animate-delay-200" : ""}`}
            >
              <Image
                src={gallery.src}
                alt={gallery.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">
                  {gallery.count}
                </p>
                <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide mb-4">
                  {gallery.title}
                </h2>
                <p className="text-white/50 max-w-lg text-sm md:text-base">
                  {gallery.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  <span className="text-sm tracking-widest uppercase">View Gallery</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
