import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Photography services and pricing by Rich Exposure — premium weddings, destination weddings, portraits, headshots, and travel photography.",
};

const services = [
  {
    id: "destination-weddings",
    category: "Weddings",
    title: "Destination Weddings",
    description: "Your dream wedding, wherever it takes you. From Icelandic glaciers to Mediterranean coastlines — I bring the same editorial eye and storytelling instinct that defines my travel work to your most important day.",
    startingPrice: "$12,000",
    includes: [
      "Pre-wedding consultation & detailed timeline planning",
      "8 hours of coverage (base)",
      "Second photographer included",
      "Engagement session (local or at destination)",
      "Online gallery with 600+ fully edited images",
      "Curated highlight collection (50+ images with advanced retouching)",
      "Travel & accommodation included (continental US)",
      "Cinematic highlight slideshow",
    ],
    note: "International travel quoted separately based on destination. Multi-day celebrations, rehearsal dinners, and welcome events available. Premium packages with 10-12 hours of coverage and additional days start at $18,000.",
  },
  {
    id: "nyc-weddings",
    category: "Weddings",
    title: "NYC & Local Weddings",
    description: "From intimate elopements in Central Park to grand celebrations at The Plaza — I know every corner of this city, every pocket of golden light, and exactly how to make your day feel as extraordinary as it is.",
    startingPrice: "$8,500",
    includes: [
      "Pre-wedding consultation & detailed timeline planning",
      "8 hours of coverage (base)",
      "Second photographer included",
      "Engagement session in NYC",
      "Online gallery with 500+ fully edited images",
      "Curated highlight collection (40+ images with advanced retouching)",
      "Coverage within the tri-state area included",
      "Cinematic highlight slideshow",
    ],
    note: "Elopement and micro-wedding packages (up to 4 hours, intimate ceremonies) start at $5,000. Extended coverage available at $600/hr.",
  },
  {
    id: "travel-photography",
    category: "Commercial",
    title: "Travel & Editorial Photography",
    description: "Editorial and commercial travel photography for publications, tourism boards, hotels, and luxury brands. The same eye that captures Iceland's raw beauty and Dublin's intimate streets — applied to your brand's story.",
    startingPrice: "$3,000/day",
    includes: [
      "Creative brief & concept development",
      "Full day of shooting (up to 10 hours)",
      "Location scouting & pre-production",
      "Full set of edited images (80-120 per day)",
      "Advanced retouching on select images",
      "Usage licensing (negotiated per project)",
      "Digital delivery with quick turnaround",
    ],
    note: "Day rate is for shooting time only — travel days, expenses, and accommodation billed separately. Multi-day projects and extended licensing available. Minimum 2-day booking for international assignments.",
  },
  {
    id: "events",
    category: "Events",
    title: "Event Photography",
    description: "Corporate events, private parties, product launches, galas, performances, and everything in between. Polished, candid coverage that captures the energy and key moments of your event.",
    startingPrice: "$1,500",
    includes: [
      "Pre-event consultation & shot list planning",
      "3 hours of coverage (base)",
      "Online gallery with 100+ fully edited images",
      "Select images with advanced retouching",
      "Same-day preview selects available on request",
      "Print-ready high-resolution files",
      "Quick turnaround (5-7 business days)",
    ],
    note: "Extended coverage available at $600/hr. Multi-day events, conferences, and festivals quoted individually. Second photographer available for larger events.",
  },
  {
    id: "portraits",
    category: "Portraits",
    title: "Portrait Sessions",
    description: "Whether it's personal branding, a milestone celebration, or simply capturing who you are right now — every portrait session is intentional, relaxed, and crafted to reflect your personality.",
    startingPrice: "$750",
    includes: [
      "Pre-session consultation & creative direction",
      "1-hour session at a location of your choice (NYC area)",
      "Wardrobe & styling guidance",
      "Online gallery with 30+ fully edited images",
      "3 images with advanced retouching",
      "Print-ready high-resolution files",
      "Hair & makeup artist referrals available",
    ],
    note: "Extended sessions (2 hours, multiple locations/looks) available for $1,200. Locations outside the NYC metro area subject to a travel fee. Creative/editorial portrait projects quoted individually.",
  },
  {
    id: "headshots",
    category: "Portraits",
    title: "Professional Headshots",
    description: "Polished, authentic headshots for actors, executives, creatives, and professionals. Whether it's studio or on-location, the result is an image that feels confident, current, and unmistakably you.",
    startingPrice: "$400",
    includes: [
      "Pre-session consultation",
      "45-minute session",
      "Studio or on-location in NYC",
      "Multiple background and lighting setups",
      "Online gallery with 15+ edited images",
      "Retouched final selects (5 images)",
      "Web & print-ready files in multiple formats",
    ],
    note: "Corporate and group rates available — teams of 5+ at $500/person. On-site corporate sessions (full or half day) quoted individually. Turnaround within 5 business days.",
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Services & Pricing</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Investment Guide
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Every project is unique. The packages below are starting points — I&apos;m happy to
            create a custom package that fits your vision.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 lg:px-8 pb-24 max-w-5xl mx-auto">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id === "nyc-weddings" || service.id === "destination-weddings" ? "weddings" : service.id === "portraits" || service.id === "headshots" ? "portraits" : undefined}
              className={`border border-card-border bg-card-bg p-8 md:p-12 animate-fade-in-up ${
                index > 0 ? "animate-delay-200" : ""
              }`}
            >
              {/* Category tag */}
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
                {service.category}
              </p>

              {/* Title & Price */}
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  {service.title}
                </h2>
                <div className="text-right">
                  <p className="text-sm text-white/40 tracking-wider uppercase">Starting at</p>
                  <p className="text-3xl font-light text-accent">{service.startingPrice}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/50 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* What's Included */}
              <div className="mb-8">
                <h3 className="text-sm tracking-widest uppercase text-white/70 mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              {service.note && (
                <p className="text-xs text-white/30 border-t border-white/5 pt-6 italic">
                  {service.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light tracking-tight text-center mb-12">
            Popular Add-Ons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Album Design", price: "$800+", desc: "Handcrafted fine art albums" },
              { name: "Rush Editing", price: "$500", desc: "48-hour turnaround" },
              { name: "Extra Hour", price: "$600/hr", desc: "Extended event coverage" },
              { name: "Print Package", price: "$500+", desc: "Fine art prints & canvases" },
            ].map((addon) => (
              <div key={addon.name} className="border border-card-border bg-card-bg p-6 text-center">
                <h3 className="font-light text-lg mb-1">{addon.name}</h3>
                <p className="text-accent text-sm mb-2">{addon.price}</p>
                <p className="text-xs text-white/40">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-light tracking-tight text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {[
            {
              q: "How far in advance should I book?",
              a: "For weddings, I recommend booking 10-14 months in advance, especially for peak season (May-October) and destination events. Portrait sessions and headshots can usually be scheduled within 2-4 weeks.",
            },
            {
              q: "What is your booking process?",
              a: "After our initial consultation, I'll send over a custom proposal. A signed contract and 40% retainer secures your date. The remaining balance is due 30 days before the event.",
            },
            {
              q: "How long until I receive my photos?",
              a: "Wedding galleries are delivered within 6-8 weeks. Portraits and headshots within 2-3 weeks. Rush delivery is available for an additional fee.",
            },
            {
              q: "Do you travel for destination weddings?",
              a: "Absolutely — destination work is one of my specialties. Travel within the continental US is included in the destination wedding package. International travel is quoted based on location, with a minimum booking requirement for overseas events.",
            },
            {
              q: "What equipment do you shoot with?",
              a: "I shoot primarily with Sony and Leica systems — a combination that gives me the versatility for any lighting condition and the image quality that holds up at any print size. I always carry full backup gear to every shoot.",
            },
            {
              q: "Can I get a custom package?",
              a: "Absolutely. Every project is different, and most of my clients end up with a package tailored to their specific needs. Reach out and let's build something that works for you.",
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-white/5 pb-8">
              <h3 className="text-lg font-light mb-3">{faq.q}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-[#0d0d0d] text-center">
        <h2 className="text-3xl font-light tracking-tight mb-6">
          Ready to book?
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mb-10">
          Tell me about your project and I&apos;ll put together a custom quote. No pressure, no obligations — just a conversation.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-accent text-black text-sm tracking-widest uppercase hover:bg-accent-light transition-all duration-300"
        >
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
