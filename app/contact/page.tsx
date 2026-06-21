'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@shapioso.com',
    href: 'mailto:info@shapioso.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Kolkata, West Bengal',
  },
  { icon: Clock, label: 'Hours', value: 'Mon — Fri: 9:00 AM — 6:00 PM' },
];

const services = [
  'Website Design',
  'Website Development',
  'Domain & Hosting',
  'Digital Marketing',
  'Graphic Design & Animation',
  'Video Editing & Creation',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft border border-hairline-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-muted mb-6">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-ink leading-[1.1]">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-body max-w-2xl leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Fill out
              the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-canvas border border-hairline-soft flex items-center justify-center text-muted shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted hover:text-ink transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="pt-6 border-t border-hairline-soft">
                <p className="text-sm font-medium text-ink mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-xs font-medium text-muted-soft hover:text-ink transition-colors"
                      >
                        {platform}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="rounded-xl bg-canvas border border-hairline-soft p-8 md:p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-ink">Thank You!</h3>
                  <p className="mt-2 text-sm text-muted">
                    Your message has been received. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: '',
                        message: '',
                      });
                    }}
                    className="mt-6 inline-flex items-center justify-center h-11 px-7 rounded-md border border-hairline text-ink text-sm font-semibold transition-colors hover:bg-surface-soft"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl bg-canvas border border-hairline-soft p-8 md:p-10 space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-ink mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full h-11 px-4 rounded-lg bg-surface-soft border border-hairline-soft text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-hairline focus:bg-canvas transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-ink mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full h-11 px-4 rounded-lg bg-surface-soft border border-hairline-soft text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-hairline focus:bg-canvas transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-ink mb-1.5"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-lg bg-surface-soft border border-hairline-soft text-sm text-ink focus:outline-none focus:border-hairline focus:bg-canvas transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg bg-surface-soft border border-hairline-soft text-sm text-ink placeholder:text-muted-soft focus:outline-none focus:border-hairline focus:bg-canvas transition-colors resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-primary text-on-primary text-sm font-semibold transition-colors hover:bg-primary-active"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
