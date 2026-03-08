"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Destination Wedding",
  "NYC / Local Wedding",
  "Travel Photography",
  "Event Photography",
  "Portrait Session",
  "Professional Headshots",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to your email service (e.g., Resend, SendGrid, Formspree)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-accent/30 bg-accent/5 p-12 text-center">
        <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-light mb-2">Thank you!</h3>
        <p className="text-white/50">
          Your message has been received. I&apos;ll get back to you within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm tracking-wider text-white/60 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full bg-transparent border border-card-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm tracking-wider text-white/60 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full bg-transparent border border-card-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm tracking-wider text-white/60 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border border-card-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm tracking-wider text-white/60 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-transparent border border-card-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="service" className="block text-sm tracking-wider text-white/60 mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full bg-transparent border border-card-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
        >
          <option value="" className="bg-[#141414]">Select a service...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="bg-[#141414]">
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Event Date */}
      <div>
        <label htmlFor="date" className="block text-sm tracking-wider text-white/60 mb-2">
          Preferred Date (if applicable)
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full bg-transparent border border-card-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm tracking-wider text-white/60 mb-2">
          Tell Me About Your Project *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Share any details — location, vision, questions, or anything else you'd like me to know."
          className="w-full bg-transparent border border-card-border px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full sm:w-auto px-10 py-4 bg-accent text-black text-sm tracking-widest uppercase hover:bg-accent-light transition-all duration-300 font-medium"
      >
        Send Message
      </button>
    </form>
  );
}
