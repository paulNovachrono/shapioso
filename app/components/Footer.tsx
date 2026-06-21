import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const services = [
  { label: 'Website Design', href: '/services' },
  { label: 'Web Development', href: '/services' },
  { label: 'Domain & Hosting', href: '/services' },
  { label: 'Digital Marketing', href: '/services' },
  { label: 'Graphic Design', href: '/services' },
  { label: 'Video Editing', href: '/services' },
];

const SocialIcon = ({
  name,
  ...props
}: { name: string } & React.SVGProps<SVGSVGElement>) => {
  const paths: Record<string, string> = {
    instagram:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    linkedin:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    facebook:
      'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  };
  const d = paths[name];
  if (!d) return null;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d={d} />
    </svg>
  );
};

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <SocialIcon name="instagram" className="w-3.5 h-3.5" {...props} />
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <SocialIcon name="linkedin" className="w-3.5 h-3.5" {...props} />
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
        {...props}
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <SocialIcon name="facebook" className="w-3.5 h-3.5" {...props} />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-soft border-t border-hairline-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-3">
            <Link href="/" className="block w-36 md:w-44">
              <Image
                src="/logo.svg"
                alt="Shapioso"
                width={500}
                height={486}
                className="w-full h-auto rounded-2xl "
              />
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed ">
              Transforming ideas into digital reality. We craft websites, apps,
              and experiences that captivate and convert.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-wider text-muted uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-body hover:text-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-wider text-muted uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-body hover:text-ink transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-wider text-muted uppercase mb-4">
              Social
            </h4>
            <ul className="space-y-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="inline-flex items-center gap-2 text-sm text-body hover:text-ink transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 text-muted" />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-wider text-muted uppercase mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@shapioso.com"
                  className="flex items-center gap-2 text-sm text-body hover:text-ink transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-muted" />
                  hello@shapioso.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-body hover:text-ink transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0 text-muted" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-body">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-muted mt-0.5" />
                  <span>Kolkata, West Bengal, India</span>
                </div>
              </li>
            </ul>
            {/* Embedded Map */}
            <div className="mt-4 p-2 rounded-xl border border-hairline-soft bg-canvas">
              <div className="rounded-lg overflow-hidden embed-map-fixed">
                <div className="embed-map-container">
                  <iframe
                    className="embed-map-frame"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Kolkata,%20West%20Bengal,%20India&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-hairline-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>
            &copy; {new Date().getFullYear()} Shapioso. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-ink transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
