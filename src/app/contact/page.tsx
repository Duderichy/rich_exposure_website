import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Rich Exposure for premium wedding photography, portraits, headshots, or travel photography inquiries.",
};

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-24 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Have a project in mind? Fill out the form below and I&apos;ll get back to you
            within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 lg:px-8 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="space-y-10">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-white/70 mb-3">
                  Based In
                </h3>
                <p className="text-white/50">New York City, NY</p>
                <p className="text-white/50">Available for travel worldwide</p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-white/70 mb-3">
                  Response Time
                </h3>
                <p className="text-white/50">
                  I typically respond within 24-48 hours. For urgent inquiries, please
                  note that in the subject line.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-white/70 mb-3">
                  What to Include
                </h3>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>- Type of session or event</li>
                  <li>- Preferred date(s)</li>
                  <li>- Location / venue</li>
                  <li>- Any special requirements</li>
                  <li>- How you heard about me</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-white/70 mb-3">
                  Follow Along
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-white/40 hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
