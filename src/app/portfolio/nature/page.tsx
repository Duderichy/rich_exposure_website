import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nature Photography",
  description: "Nature and wildlife photography by Rich Exposure — birds, flowers, and the quiet beauty of the natural world.",
};

const naturePhotos = [
  { id: 1, src: "/images/nature/01-eastern-bluebird.jpg", title: "Eastern Bluebird", location: "New York", width: 2000, height: 1924 },
  { id: 2, src: "/images/nature/02-autumn-sparrow.jpg", title: "Autumn Sparrow", location: "New York", width: 2000, height: 1426 },
  { id: 3, src: "/images/nature/03-starlings-teal.jpg", title: "Starlings at Dusk", location: "Ireland", width: 2000, height: 1301 },
  { id: 4, src: "/images/nature/04-roses-blue-house.jpg", title: "Roses & Blue", location: "New York", width: 2000, height: 1477 },
  { id: 5, src: "/images/nature/05-mockingbird-golden.jpg", title: "Mockingbird", location: "New York", width: 2000, height: 1268 },
  { id: 6, src: "/images/nature/06-blue-flower-macro.jpg", title: "Blue Bloom", location: "New York", width: 2000, height: 1334 },
  { id: 7, src: "/images/nature/07-autumn-foliage-bridge.jpg", title: "Autumn Tapestry", location: "New York", width: 2000, height: 3000 },
];

export default function NatureGallery() {
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
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Nature Photography</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            The Quiet World
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Finding beauty in the details — from the flash of a bluebird&apos;s wing to the last golden leaves of autumn.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {naturePhotos.map((photo) => (
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
        <p className="text-white/50 mb-6">Interested in nature photography prints?</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase hover:bg-accent hover:text-black transition-all duration-300"
        >
          Inquire About Prints
        </Link>
      </section>
    </div>
  );
}
