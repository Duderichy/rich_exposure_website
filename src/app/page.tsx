import Link from "next/link";
import Image from "next/image";

const featuredWork = [
  {
    title: "Travel",
    subtitle: "Stories from around the world",
    href: "/portfolio/travel",
    src: "/images/featured/travel.jpg",
    width: 2000,
    height: 1334,
  },
  {
    title: "Street",
    subtitle: "The soul of the city",
    href: "/portfolio/street",
    src: "/images/featured/street.jpg",
    width: 2000,
    height: 2312,
  },
  {
    title: "Portraits",
    subtitle: "Authentic & timeless",
    href: "/services#portraits",
    src: "/images/featured/portraits.jpg",
    width: 2000,
    height: 3000,
  },
  {
    title: "Architecture",
    subtitle: "Form, light & structure",
    href: "/portfolio/travel",
    src: "/images/featured/architecture.jpg",
    width: 2000,
    height: 2106,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Pelicans flying over the Pacific Ocean at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <p className="text-accent text-sm tracking-[0.4em] uppercase mb-6">
            New York City &middot; Worldwide
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6">
            Rich Exposure
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light tracking-wide max-w-xl mx-auto mb-10">
            Weddings &middot; Portraits &middot; Travel &middot; Street Photography
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 border border-white/30 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-accent text-black text-sm tracking-widest uppercase hover:bg-accent-light transition-all duration-300"
            >
              Book a Session
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40" />
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Capturing moments that matter
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredWork.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative aspect-[4/3] overflow-hidden animate-fade-in-up"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 tracking-wider uppercase">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">About</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
            Every frame tells a story
          </h2>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
            Based in New York City and available worldwide, I specialize in capturing
            authentic moments — from intimate weddings to the vibrant energy of city streets.
            My approach blends documentary-style storytelling with a fine art sensibility.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 border border-white/20 text-white/80 text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Photography for every occasion
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            From destination weddings to corporate headshots, I offer a range of
            photography services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { name: "Destination Weddings", start: "$12,000" },
            { name: "NYC Weddings", start: "$8,500" },
            { name: "Travel Photography", start: "$3,000/day" },
            { name: "Event Photography", start: "$1,500" },
            { name: "Portrait Sessions", start: "$750" },
            { name: "Headshots", start: "$400" },
          ].map((service) => (
            <div
              key={service.name}
              className="p-8 border border-card-border bg-card-bg hover:border-accent/30 transition-all duration-300 animate-fade-in-up"
            >
              <h3 className="text-lg font-light tracking-wide mb-2">{service.name}</h3>
              <p className="text-accent text-sm tracking-wider">Starting at {service.start}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-accent text-black text-sm tracking-widest uppercase hover:bg-accent-light transition-all duration-300"
          >
            View All Services & Pricing
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Let&apos;s create something beautiful
          </h2>
          <p className="text-white/50 mb-10 max-w-lg mx-auto">
            Whether you&apos;re planning a wedding, need updated headshots, or want to
            collaborate on a creative project, I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase hover:bg-accent hover:text-black transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
