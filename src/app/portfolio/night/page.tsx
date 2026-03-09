import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Night Photography",
  description: "Night and architectural photography by Rich Exposure — the cinematic beauty of New York City after dark.",
};

const nightPhotos = [
  { id: 1, src: "/images/night/01-oculus-reflections.jpg", title: "Oculus Reflections", location: "World Trade Center, NYC", width: 2000, height: 1415 },
  { id: 2, src: "/images/night/02-oculus-curves.jpg", title: "Oculus Curves", location: "World Trade Center, NYC", width: 2000, height: 2828 },
  { id: 3, src: "/images/night/03-crescent-moon.jpg", title: "Crescent Moon", location: "New York City", width: 2000, height: 1334 },
  { id: 4, src: "/images/night/04-food-cart-lights.jpg", title: "Fairy Light Cart", location: "New York City", width: 2000, height: 1334 },
  { id: 5, src: "/images/night/05-hot-dog-cart-noir.jpg", title: "Sabrett Noir", location: "New York City", width: 2000, height: 1415 },
  { id: 6, src: "/images/night/06-hopper-restaurant.jpg", title: "Through the Window", location: "New York City", width: 2000, height: 1710 },
  { id: 7, src: "/images/night/07-capital-grille.jpg", title: "Capital Grille", location: "New York City", width: 2000, height: 1194 },
  { id: 8, src: "/images/night/08-holiday-trees.jpg", title: "Holiday Lights", location: "New York City", width: 2000, height: 2404 },
  { id: 9, src: "/images/night/09-woman-walking.jpg", title: "Night Walk", location: "New York City", width: 2000, height: 1614 },
  { id: 10, src: "/images/night/10-ghost-figures.jpg", title: "Ghosts of Broadway", location: "New York City", width: 2000, height: 1334 },
  { id: 11, src: "/images/night/11-williamsburg-bridge.jpg", title: "Williamsburg Bridge", location: "Brooklyn, NYC", width: 2000, height: 1372 },
  { id: 12, src: "/images/night/12-memorial-flag.jpg", title: "9/11 Memorial", location: "World Trade Center, NYC", width: 2000, height: 2828 },
];

export default function NightGallery() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm tracking-widest uppercase mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Portfolio
          </Link>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Night Photography</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            After Dark
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            New York City transforms after sunset — warm pools of light, rain-slicked
            reflections, and the quiet drama of the city at night. Inspired by Edward
            Hopper and film noir.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {nightPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden break-inside-avoid"
            >
              <Image
                src={photo.src}
                alt={`${photo.title} — ${photo.location}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-light text-lg">{photo.title}</h3>
                  <p className="text-white/60 text-sm tracking-wider">{photo.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8 bg-[#0d0d0d] text-center">
        <p className="text-white/50 mb-6">Interested in architectural or night photography prints?</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase hover:bg-accent hover:text-black transition-all duration-300"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
