import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg tracking-[0.3em] uppercase font-light text-white mb-4">
              Rich Exposure
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Premium photography by RM Bibeault. NYC-based, specializing in weddings, portraits, travel, and street photography.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-white/80 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/portfolio" className="text-sm text-white/50 hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="text-sm text-white/50 hover:text-accent transition-colors">
                Services & Pricing
              </Link>
              <Link href="/about" className="text-sm text-white/50 hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-white/50 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-white/80 mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <p>New York City, NY</p>
              <p>Available for travel worldwide</p>
              <Link href="/contact" className="text-accent hover:text-accent-light transition-colors">
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} Rich Exposure Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
