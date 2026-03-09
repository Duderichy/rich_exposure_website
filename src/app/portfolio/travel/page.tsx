import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Travel Photography",
  description: "Travel photography by Rich Exposure — landscapes, cultures, and stories from Iceland, Ireland, California, and beyond.",
};

const travelPhotos = [
  { id: 1, src: "/images/travel/01-skogafoss-rainbow.jpg", title: "Skogafoss Rainbow", location: "Iceland", width: 2000, height: 1334 },
  { id: 2, src: "/images/travel/02-black-sand-cliffs.jpg", title: "Black Sand Cliffs", location: "Iceland", width: 2000, height: 1334 },
  { id: 3, src: "/images/travel/06-green-moss-iceland.jpg", title: "Icelandic Moss", location: "Iceland", width: 2000, height: 3000 },
  { id: 4, src: "/images/travel/03-reynisfjara-beach.jpg", title: "Reynisfjara Beach", location: "Iceland", width: 2000, height: 1205 },
  { id: 5, src: "/images/travel/04-glacier-ice.jpg", title: "Glacier Ice", location: "Iceland", width: 2000, height: 1333 },
  { id: 6, src: "/images/travel/05-mountain-glacier.jpg", title: "Mountain Peaks & Glacier", location: "Iceland", width: 2000, height: 1333 },
  { id: 7, src: "/images/travel/07-silhouette-black-beach.jpg", title: "Black Beach Silhouette", location: "Iceland", width: 2000, height: 1334 },
  { id: 8, src: "/images/travel/17-red-hair-moss-portrait.jpg", title: "Portrait on Moss", location: "Iceland", width: 2000, height: 1334 },
  { id: 9, src: "/images/travel/08-glacier-lagoon.jpg", title: "Glacier Lagoon", location: "Iceland", width: 2000, height: 1334 },
  { id: 10, src: "/images/travel/09-snow-mountain-bw.jpg", title: "Snow Mountain", location: "Iceland", width: 2000, height: 1016 },
  { id: 11, src: "/images/travel/16-sunset-snow-valley.jpg", title: "Sunset Over Snow Valley", location: "Iceland", width: 2000, height: 1334 },
  { id: 12, src: "/images/travel/18-basalt-columns-portrait.jpg", title: "Basalt Columns", location: "Iceland", width: 2000, height: 1559 },
  { id: 13, src: "/images/travel/11-trinity-college.jpg", title: "Trinity College Long Room", location: "Dublin, Ireland", width: 2000, height: 1583 },
  { id: 14, src: "/images/travel/12-custom-house-dublin.jpg", title: "Custom House at Night", location: "Dublin, Ireland", width: 2000, height: 1334 },
  { id: 15, src: "/images/travel/13-temple-bar-dublin.jpg", title: "Temple Bar", location: "Dublin, Ireland", width: 2000, height: 1449 },
  { id: 16, src: "/images/travel/14-dublin-bay-sunset.jpg", title: "Dublin Bay Sunset", location: "Dublin, Ireland", width: 2000, height: 1334 },
  { id: 17, src: "/images/travel/10-cypress-tunnel.jpg", title: "Cypress Tree Tunnel", location: "California", width: 2000, height: 1333 },
  { id: 18, src: "/images/travel/15-palace-fine-arts.jpg", title: "Palace of Fine Arts", location: "San Francisco", width: 2000, height: 1184 },
  { id: 19, src: "/images/travel/19-hapenny-bridge-bw.jpg", title: "Ha'penny Bridge", location: "Dublin, Ireland", width: 2000, height: 1334 },
  { id: 20, src: "/images/travel/20-gothic-door-ivy.jpg", title: "Gothic Doorway", location: "Ireland", width: 2000, height: 1334 },
];

export default function TravelGallery() {
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
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Travel Photography</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Around the World
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            From Icelandic glaciers to Dublin&apos;s cobblestone streets — a visual journey
            through the places and cultures that inspire me most.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {travelPhotos.map((photo) => (
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
        <p className="text-white/50 mb-6">Interested in travel photography prints or licensing?</p>
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
