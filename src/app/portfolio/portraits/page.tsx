import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portrait Photography",
  description: "Portrait photography by Rich Exposure — authentic, cinematic portraits in New York City.",
};

const portraitPhotos = [
  { id: 1, src: "/images/portraits-new/01-unicorn-tapestry.jpg", title: "At the Cloisters", location: "New York City", width: 2000, height: 2831 },
  { id: 2, src: "/images/portraits-new/02-cloisters-arches.jpg", title: "Gothic Arches", location: "New York City", width: 2000, height: 2830 },
  { id: 3, src: "/images/portraits-new/03-autumn-golden-hour.jpg", title: "Golden Hour", location: "New York City", width: 2000, height: 1658 },
  { id: 4, src: "/images/portraits-new/04-cat-eye-sunglasses.jpg", title: "Cat Eye", location: "New York City", width: 2000, height: 1426 },
  { id: 5, src: "/images/portraits-new/05-laughing-hallway.jpg", title: "Warm Light", location: "New York City", width: 2000, height: 3000 },
  { id: 6, src: "/images/portraits-new/06-bengal-cat.jpg", title: "Quiet Moment", location: "New York City", width: 2000, height: 2107 },
  { id: 7, src: "/images/portraits-new/07-magenta-editorial.jpg", title: "Magenta", location: "New York City", width: 2000, height: 2477 },
  { id: 8, src: "/images/portraits/01-autumn-portrait.jpg", title: "Autumn Portrait", location: "New York City", width: 2000, height: 3000 },
  { id: 9, src: "/images/portraits/02-cinematic-profile.jpg", title: "Cinematic Profile", location: "New York City", width: 2000, height: 1334 },
  { id: 10, src: "/images/portraits/03-evening-park-bench.jpg", title: "Evening in the Park", location: "New York City", width: 2000, height: 3000 },
  { id: 11, src: "/images/portraits/04-golden-hour-portrait.jpg", title: "Golden Hour Portrait", location: "New York City", width: 2000, height: 3000 },
  { id: 12, src: "/images/portraits/05-mirror-portrait.jpg", title: "Mirror", location: "New York City", width: 2000, height: 3000 },
];

export default function PortraitGallery() {
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
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Portrait Photography</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Authentic & Cinematic
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Every portrait session is an exploration — finding the light, the mood, and the
            authentic expression that makes each person unique.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {portraitPhotos.map((photo) => (
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
        <p className="text-white/50 mb-6">Ready to book a portrait session?</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase hover:bg-accent hover:text-black transition-all duration-300"
        >
          Book a Session
        </Link>
      </section>
    </div>
  );
}
