import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "About Rich Exposure — premium photography by RM Bibeault. NYC-based, specializing in weddings, portraits, travel, and street photography.",
};

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photographer Photo — replace src with your headshot/portrait */}
          <div className="animate-fade-in-up">
            <div className="aspect-[3/4] bg-[#141414] relative overflow-hidden">
              {/*
                TODO: Add your photographer portrait here.
                Replace this placeholder with an <Image> tag like:
                <Image
                  src="/images/about/photographer.jpg"
                  alt="RM Bibeault - Photographer"
                  fill
                  className="object-cover"
                />
              */}
              <div className="absolute inset-0 flex items-center justify-center border border-dashed border-white/10">
                <div className="text-center px-8">
                  <svg className="w-12 h-12 text-white/15 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-white/20 text-sm tracking-widest uppercase">
                    Add your portrait
                  </p>
                  <p className="text-white/10 text-xs mt-2">
                    /images/about/photographer.jpg
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-fade-in-up animate-delay-200">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
              Rich Exposure
            </h1>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                I&apos;m a photographer based in New York City with a passion for
                capturing authentic moments — whether that&apos;s the joy of a
                wedding day, the quiet drama of a city street, or the wonder of
                discovering a new place.
              </p>
              <p>
                My work is rooted in documentary-style storytelling. I believe the
                best photographs happen when people forget the camera is there, when
                the light is just right, and when genuine emotion takes center stage.
                I strive to create images that feel both timeless and alive.
              </p>
              <p>
                When I&apos;m not behind the camera, you can probably find me
                exploring a new neighborhood, planning my next trip, or searching for
                the perfect cup of coffee. I&apos;m always up for an adventure — and
                I&apos;d love to be part of yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Work Strip */}
      <section className="py-4 overflow-hidden">
        <div className="flex gap-4 animate-fade-in-up">
          {[
            { src: "/images/portraits/01-autumn-portrait.jpg", alt: "Autumn portrait session", w: 2000, h: 1333 },
            { src: "/images/travel/01-skogafoss-rainbow.jpg", alt: "Skogafoss waterfall, Iceland", w: 2000, h: 1334 },
            { src: "/images/street/02-subway-stairs.jpg", alt: "NYC subway stairwell", w: 2000, h: 1414 },
            { src: "/images/travel/12-custom-house-dublin.jpg", alt: "Custom House, Dublin", w: 2000, h: 1334 },
            { src: "/images/portraits/05-mirror-portrait.jpg", alt: "Mirror portrait", w: 2000, h: 1333 },
          ].map((img) => (
            <div key={img.src} className="relative flex-shrink-0 w-72 aspect-[3/2] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">My Approach</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              How I work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic",
                description:
                  "I prioritize genuine moments over posed perfection. The most powerful images come from real emotions and natural interactions.",
              },
              {
                title: "Intentional",
                description:
                  "Every frame is composed with purpose. I pay attention to light, composition, and context to create images with depth and meaning.",
              },
              {
                title: "Collaborative",
                description:
                  "Your vision matters. I take the time to understand what you want, offer creative direction when needed, and adapt to your comfort level.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 border border-card-border"
              >
                <h3 className="text-xl font-light tracking-wide mb-4">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-[#0d0d0d] text-center">
        <h2 className="text-3xl font-light tracking-tight mb-6">
          Let&apos;s work together
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mb-10">
          I&apos;d love to hear about your project. Whether it&apos;s a wedding, a portrait
          session, or a creative collaboration — let&apos;s make something great.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-black text-sm tracking-widest uppercase hover:bg-accent-light transition-all duration-300"
          >
            Get In Touch
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3 border border-white/20 text-white/80 text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
