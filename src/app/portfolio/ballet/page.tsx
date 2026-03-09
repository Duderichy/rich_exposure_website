import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ballet & Performance Photography",
  description: "Ballet and performance photography by Rich Exposure — capturing the drama, grace, and raw athleticism of dance.",
};

const balletPhotos = [
  { id: 1, src: "/images/ballet/01-wolf-crawling.jpg", title: "The Wolf", location: "NYC Studio", width: 2000, height: 1334 },
  { id: 2, src: "/images/ballet/02-wolf-backbend.jpg", title: "Wolf Prowling", location: "NYC Studio", width: 2000, height: 2628 },
  { id: 3, src: "/images/ballet/03-ballerina-lunge.jpg", title: "Joy in Motion", location: "NYC Studio", width: 2000, height: 2851 },
  { id: 4, src: "/images/ballet/04-ballerina-pointe.jpg", title: "On Pointe", location: "NYC Studio", width: 2000, height: 3000 },
  { id: 5, src: "/images/ballet/05-ballerina-spin.jpg", title: "The Spin", location: "NYC Studio", width: 2000, height: 3134 },
  { id: 6, src: "/images/ballet/06-pas-de-deux.jpg", title: "Pas de Deux", location: "NYC Studio", width: 2000, height: 1334 },
  { id: 7, src: "/images/ballet/07-fairy-tale.jpg", title: "Red Riding Hood", location: "NYC Studio", width: 2000, height: 1334 },
  { id: 8, src: "/images/ballet/08-wolf-combat.jpg", title: "The Confrontation", location: "NYC Studio", width: 2000, height: 2694 },
  { id: 9, src: "/images/ballet/09-arabesque-studio.jpg", title: "Arabesque", location: "NYC Studio", width: 2000, height: 3006 },
  { id: 10, src: "/images/ballet/10-overhead-lift.jpg", title: "The Finale", location: "NYC Studio", width: 2000, height: 1130 },
];

export default function BalletGallery() {
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
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Performance Photography</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Movement & Drama
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            A ballet retelling of Little Red Riding Hood — capturing the raw power of the wolf,
            the grace of the ballerina, and the dramatic storytelling of dance.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {balletPhotos.map((photo) => (
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
        <p className="text-white/50 mb-6">Interested in performance or dance photography?</p>
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
