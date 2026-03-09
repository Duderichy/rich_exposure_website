import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Street Photography",
  description: "Street photography by Rich Exposure — candid urban moments captured on the streets of New York City, Reykjavik, and Dublin.",
};

const streetPhotos = [
  { id: 1, src: "/images/street/01-cowboy-skateboard-nyc.jpg", title: "Cowboy Boots & Skateboard", location: "New York City", width: 2000, height: 2312 },
  { id: 2, src: "/images/street/02-subway-stairs.jpg", title: "Subway Stairwell", location: "New York City", width: 2000, height: 1414 },
  { id: 3, src: "/images/street/03-hot-dog-cart.jpg", title: "Sabrett Stand", location: "New York City", width: 2000, height: 2740 },
  { id: 4, src: "/images/street/04-subway-platform-bw.jpg", title: "Platform Divide", location: "New York City", width: 2000, height: 3000 },
  { id: 5, src: "/images/street/05-reykjavik-dusk.jpg", title: "Dusk on the Avenue", location: "Reykjavik, Iceland", width: 2000, height: 2375 },
  { id: 6, src: "/images/street/06-hallgrimskirkja.jpg", title: "Hallgrimskirkja", location: "Reykjavik, Iceland", width: 2000, height: 3000 },
  { id: 7, src: "/images/street/07-busker-dublin.jpg", title: "Street Musician", location: "Dublin, Ireland", width: 2000, height: 2117 },
  { id: 8, src: "/images/street/11-subway-station.jpg", title: "Hoyt Street Station", location: "New York City", width: 2000, height: 1414 },
  { id: 9, src: "/images/street/09-laughing-man.jpg", title: "Golden Light Portrait", location: "New York City", width: 2000, height: 3000 },
  { id: 10, src: "/images/street/10-gyro-stand-nyc.jpg", title: "Souvla King", location: "New York City", width: 2000, height: 2605 },
  { id: 11, src: "/images/street/08-man-light-pool.jpg", title: "Pool of Light", location: "Dublin, Ireland", width: 2000, height: 3000 },
  { id: 12, src: "/images/street/12-broadway-workers.jpg", title: "Broadway Morning", location: "New York City", width: 2000, height: 1414 },
  { id: 13, src: "/images/street/13-57th-st-subway.jpg", title: "57th Street Platform", location: "New York City", width: 2000, height: 1404 },
  { id: 14, src: "/images/street/14-snowy-steam-spring-st.jpg", title: "Spring Street Steam", location: "New York City", width: 2000, height: 1336 },
  { id: 15, src: "/images/street/15-woman-reading-bench.jpg", title: "Lost in a Book", location: "New York City", width: 2000, height: 1426 },
  { id: 16, src: "/images/street/16-subway-pillar-bw.jpg", title: "Divided", location: "New York City", width: 2000, height: 3000 },
  { id: 17, src: "/images/street/17-nyc-crosswalk.jpg", title: "Crosswalk", location: "New York City", width: 2000, height: 1912 },
  { id: 18, src: "/images/street/18-graffiti-tunnel.jpg", title: "Tunnel Vision", location: "New York City", width: 2000, height: 1334 },
  { id: 19, src: "/images/street/19-umbrella-rain-bw.jpg", title: "Rainy Day", location: "Dublin, Ireland", width: 2000, height: 1334 },
  { id: 20, src: "/images/street/20-subway-candid.jpg", title: "Underground Stories", location: "New York City", width: 2000, height: 2806 },
];

export default function StreetGallery() {
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
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Street Photography</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            City Pulse
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            The raw energy of the world&apos;s cities — unscripted moments, fleeting light,
            and the beautiful chaos of urban life from New York to Reykjavik to Dublin.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {streetPhotos.map((photo) => (
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
        <p className="text-white/50 mb-6">Interested in fine art prints of street photography?</p>
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
