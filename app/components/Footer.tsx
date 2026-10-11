import React from "react";

export interface FooterProps {
  brandName?: string;
  taglinePrefix?: string;
  taglineAccent?: string;
  subtext?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = "UnBound X",
  taglinePrefix = "Connect. Share.",
  taglineAccent = "Invest.",
  subtext = "Where investment ideas build a record.",
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-surface-900 text-white mt-24 sm:mt-32 pt-0 pb-12">
      {/* 
        ========================================================================
        FLOATING CTA BANNER:
        Overlaps top border of the dark navy footer with -translate-y-1/2,
        half on the light canvas above and half on bg-surface-900.
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-1/2">
        <div className="relative rounded-3xl sm:rounded-[32px] bg-white text-surface-900 border border-surface-200/90 shadow-[0_20px_50px_rgba(15,34,56,0.14)] p-6 sm:p-8 lg:p-10 backdrop-blur-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Thesis Mini Widget (NVDA Long Card) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="w-full max-w-[320px] rounded-2xl bg-white border border-surface-200/80 p-5 shadow-xs transition-all duration-300 hover:shadow-soft">
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-surface-100">
                  <span className="font-heading font-black text-lg text-surface-900 tracking-tight">
                    NVDA
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-cobalt-100 text-cobalt-700 text-xs font-bold tracking-wide uppercase">
                    LONG
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="py-3.5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-surface-500 font-medium">Entered</span>
                    <span className="text-surface-900 font-bold font-mono text-sm">
                      $219.86
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-surface-500 font-medium">Target</span>
                    <span className="text-surface-900 font-bold font-mono text-sm">
                      $260.00
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-surface-500 font-medium">By</span>
                    <span className="text-surface-900 font-bold text-sm">
                      Dec 2026
                    </span>
                  </div>
                </div>

                {/* Timeline Progress Bar */}
                <div className="pt-2">
                  <div className="relative flex items-center my-2">
                    {/* Background line */}
                    <div className="w-full h-1 bg-surface-100 rounded-full" />
                    {/* Active line */}
                    <div className="absolute left-0 w-3/4 h-1 bg-cobalt-500 rounded-full" />

                    {/* Left Dot (Published) */}
                    <div className="absolute left-0 w-3 h-3 rounded-full bg-cobalt-500 ring-2 ring-white" />
                    {/* Middle Dot */}
                    <div className="absolute left-3/4 -translate-x-1/2 w-3 h-3 rounded-full bg-cobalt-500 ring-2 ring-white" />
                    {/* Right Dot (Settled) */}
                    <div className="absolute right-0 w-3 h-3 rounded-full bg-white border-2 border-surface-300 ring-2 ring-white" />
                  </div>

                  {/* Timeline Labels */}
                  <div className="flex items-center justify-between text-[11px] mt-1.5 font-medium">
                    <span className="text-cobalt-500 font-semibold">Published</span>
                    <span className="text-surface-400">Settled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Headline, Pitch & CTA Button */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-[34px] text-surface-900 tracking-tight leading-[1.16]">
                Put your market ideas on the record.
              </h3>
              <p className="font-sans text-sm sm:text-base text-surface-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Write down what you think and see how it holds up when the market decides.
              </p>
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="#get-started"
                  onClick={(e) => handleLinkClick(e, "#get-started")}
                  className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-cobalt-500 hover:bg-cobalt-600 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_10px_25px_rgba(73,124,242,0.32)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Start your record</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: QR Code Box & Mobile App CTA */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-end gap-4">
              {/* QR Code Container */}
              <div className="p-2 sm:p-2.5 rounded-2xl bg-white border border-surface-200/90 shadow-xs shrink-0 transition-transform duration-200 hover:scale-105">
                <svg
                  className="w-18 h-18 sm:w-20 sm:h-20 text-surface-900"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  aria-label="QR Code"
                >
                  {/* Top-Left Finder */}
                  <rect x="6" y="6" width="28" height="28" rx="5" fill="#0f2238" />
                  <rect x="12" y="12" width="16" height="16" rx="3" fill="#ffffff" />
                  <rect x="16" y="16" width="8" height="8" rx="2" fill="#0f2238" />

                  {/* Top-Right Finder */}
                  <rect x="66" y="6" width="28" height="28" rx="5" fill="#0f2238" />
                  <rect x="72" y="12" width="16" height="16" rx="3" fill="#ffffff" />
                  <rect x="76" y="16" width="8" height="8" rx="2" fill="#0f2238" />

                  {/* Bottom-Left Finder */}
                  <rect x="6" y="66" width="28" height="28" rx="5" fill="#0f2238" />
                  <rect x="12" y="72" width="16" height="16" rx="3" fill="#ffffff" />
                  <rect x="16" y="76" width="8" height="8" rx="2" fill="#0f2238" />

                  {/* Realistic Data Modules Matrix */}
                  <rect x="40" y="8" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="50" y="8" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="40" y="18" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="52" y="22" width="8" height="6" rx="1.2" fill="#0f2238" />

                  <rect x="8" y="40" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="20" y="42" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="8" y="52" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="22" y="52" width="6" height="6" rx="1.2" fill="#0f2238" />

                  {/* Center Pattern */}
                  <rect x="38" y="38" width="8" height="8" rx="2" fill="#497cf2" />
                  <rect x="52" y="38" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="40" y="50" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="50" y="48" width="8" height="8" rx="1.5" fill="#0f2238" />

                  {/* Alignment & Bottom-Right Data Area */}
                  <rect x="68" y="40" width="8" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="82" y="40" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="68" y="52" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="80" y="50" width="8" height="6" rx="1.2" fill="#0f2238" />

                  <rect x="40" y="66" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="52" y="68" width="6" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="40" y="78" width="8" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="52" y="82" width="6" height="6" rx="1.2" fill="#0f2238" />

                  <rect x="68" y="68" width="12" height="6" rx="1.2" fill="#0f2238" />
                  <rect x="68" y="78" width="6" height="10" rx="1.2" fill="#0f2238" />
                  <rect x="80" y="76" width="8" height="8" rx="1.5" fill="#0f2238" />
                </svg>
              </div>

              {/* Text label next to QR */}
              <div className="max-w-[130px] sm:max-w-[150px] text-left">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-surface-900 leading-tight">
                  Take {brandName} with you.
                </h4>
                <p className="font-sans text-[11px] text-surface-500 mt-1 leading-snug">
                  Scan to get started on your phone.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        MAIN FOOTER CONTENT:
        Deep surface-900 background, brand identity, navigation columns, 
        social icons, copyright and scroll to top button.
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Brand Info & Socials (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo + Brand Heading */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              {/* Glossy gradient logo icon */}
              <div className="relative w-9 h-9 rounded-full bg-linear-to-tr from-amber-500 via-rose-500 to-indigo-600 p-[1.5px] shadow-sm transition-transform duration-200 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center">
                  <svg
                    viewBox="0 0 28 28"
                    className="w-5 h-5 text-white drop-shadow-sm fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 6.5C7 5.67 7.67 5 8.5 5H10C10.83 5 11.5 5.67 11.5 6.5V14.5C11.5 16.71 13.29 18.5 15.5 18.5C17.71 18.5 19.5 16.71 19.5 14.5V6.5C19.5 5.67 20.17 5 21 5H22.5C23.33 5 24 5.67 24 6.5V14.5C24 19.19 20.19 23 15.5 23C10.81 23 7 19.19 7 14.5V6.5Z"
                      fill="url(#footer-logo-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="footer-logo-gradient"
                        x1="7"
                        y1="5"
                        x2="24"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ffffff" />
                        <stop offset="0.6" stopColor="#fed7aa" />
                        <stop offset="1" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight leading-none block">
                  {brandName}
                </span>
                <span className="font-sans text-[11px] text-surface-400 font-medium tracking-wide block mt-0.5">
                  {taglinePrefix}{" "}
                  <span className="text-cobalt-400 font-bold">{taglineAccent}</span>
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="font-sans text-sm text-surface-400 max-w-sm leading-relaxed">
              {subtext}
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-surface-800/80 hover:bg-surface-700 text-surface-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-surface-800/80 hover:bg-surface-700 text-surface-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-surface-800/80 hover:bg-surface-700 text-surface-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-surface-800/80 hover:bg-surface-700 text-surface-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Columns (Col 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Product */}
            <div>
              <h5 className="font-heading font-bold text-sm text-white tracking-wide mb-4">
                Product
              </h5>
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <a
                    href="#thesis"
                    onClick={(e) => handleLinkClick(e, "#thesis")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Thesis
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleLinkClick(e, "#features")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Spaces
                  </a>
                </li>
                <li>
                  <a
                    href="#problem-solution"
                    onClick={(e) => handleLinkClick(e, "#problem-solution")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Beyond the feed
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: UBVerse */}
            <div>
              <h5 className="font-heading font-bold text-sm text-white tracking-wide mb-4">
                UBVerse
              </h5>
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => handleLinkClick(e, "#home")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleLinkClick(e, "#pricing")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    For Founders
                  </a>
                </li>
                <li>
                  <a
                    href="#newsletter"
                    onClick={(e) => handleLinkClick(e, "#newsletter")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="col-span-2 sm:col-span-1">
              <h5 className="font-heading font-bold text-sm text-white tracking-wide mb-4">
                Resources
              </h5>
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <a
                    href="#legal"
                    onClick={(e) => handleLinkClick(e, "#legal")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Legal Hub
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleLinkClick(e, "#faq")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    onClick={(e) => handleLinkClick(e, "#community")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 
          ======================================================================
          BOTTOM BAR:
          Divider line, copyright notice, legal terms, and scroll-to-top button
          ======================================================================
        */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-surface-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="font-sans text-xs text-surface-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {brandName.replace(/\s+/g, "")}. All rights reserved.
          </div>

          {/* Legal Links & Scroll-to-Top Button */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="#privacy"
              onClick={(e) => handleLinkClick(e, "#privacy")}
              className="font-sans text-xs text-surface-400 hover:text-surface-200 transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => handleLinkClick(e, "#terms")}
              className="font-sans text-xs text-surface-400 hover:text-surface-200 transition-colors duration-150"
            >
              Terms &amp; Condition
            </a>
            <a
              href="#disclaimers"
              onClick={(e) => handleLinkClick(e, "#disclaimers")}
              className="font-sans text-xs text-surface-400 hover:text-surface-200 transition-colors duration-150"
            >
              Disclaimers
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-surface-900 hover:bg-surface-100 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ml-2"
              aria-label="Scroll back to top"
              title="Scroll to top"
            >
              <svg
                className="w-4 h-4 text-surface-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
