"use client";

import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        title: "Website Design",
        description: "Beautiful, responsive designs tailored to your brand",
        gradient: "from-brand-pink to-rose-400",
        slug: "website-design",
      },
      {
        title: "Website Development",
        description: "Robust, scalable websites built with modern tech",
        gradient: "from-brand-teal to-emerald-600",
        slug: "website-development",
      },
      {
        title: "Domain & Hosting",
        description: "Reliable domain registration and hosting solutions",
        gradient: "from-brand-lavender to-purple-400",
        slug: "domain-hosting",
      },
      {
        title: "Digital Marketing",
        description: "Data-driven strategies to grow your online presence",
        gradient: "from-brand-peach to-orange-400",
        slug: "digital-marketing",
      },
      {
        title: "Graphic Design & Animation",
        description: "Stunning visuals and motion graphics that captivate",
        gradient: "from-brand-ochre to-yellow-500",
        slug: "graphic-design-animation",
      },
      {
        title: "Video Editing & Creation",
        description: "Professional video production from concept to final cut",
        gradient: "from-brand-mint to-teal-400",
        slug: "video-editing-creation",
      },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 border-b border-hairline bg-canvas z-50 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="mx-auto flex min-h-[60px] items-center justify-between px-6 md:min-h-[75px] md:px-10 max-w-7xl">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Shapioso" className="h-8 w-auto" />
          <span className="text-xl font-display font-medium tracking-tight text-ink">Shapioso</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => showDropdown(item.label)}
              onMouseLeave={hideDropdown}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-[-0.3px] text-body transition-colors hover:text-ink rounded-lg hover:bg-surface-soft"
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div
                  onMouseEnter={() => showDropdown(item.label)}
                  onMouseLeave={hideDropdown}
                  className="absolute left-0 top-full mt-2 w-[640px] grid grid-cols-2 gap-3 rounded-xl bg-canvas p-4 shadow-[0_24px_64px_rgba(10,10,10,0.12)] border border-hairline-soft">
                  {item.dropdown.map((service) => (
                      <a
                        key={service.title}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-surface-soft group"
                      >
                      <div
                        className={`shrink-0 w-12 h-12 rounded-md bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-lg font-bold`}
                      >
                        {service.title.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink group-hover:text-primary">
                          {service.title}
                        </p>
                        <p className="text-xs text-muted mt-0.5 leading-snug">
                          {service.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/contact"
            className="flex items-center justify-center h-11 px-6 rounded-md bg-primary text-on-primary text-sm font-semibold tracking-[-0.3px] transition-colors hover:bg-primary-active"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-hairline bg-canvas px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-body hover:text-ink rounded-lg hover:bg-surface-soft"
                  onClick={() => {
                    if (item.dropdown) {
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.dropdown && activeDropdown === item.label && (
                  <div className="ml-3 mt-1 flex flex-col gap-1 pb-2">
                    {item.dropdown.map((service) => (
                      <a
                        key={service.title}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-surface-soft"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div
                          className={`shrink-0 w-8 h-8 rounded-md bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-xs font-bold`}
                        >
                          {service.title.charAt(0)}
                        </div>
                        <span className="text-sm text-body">{service.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-4 px-3">
            <a
              href="/contact"
              className="flex items-center justify-center h-11 w-full rounded-md bg-primary text-on-primary text-sm font-semibold tracking-[-0.3px] transition-colors hover:bg-primary-active"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
