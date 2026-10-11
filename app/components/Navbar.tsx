import React, { useState, useEffect } from "react";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface NavbarProps {
  brandName?: string;
  items?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  initialActiveItem?: string;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "MoniDesk", href: "#ubverse" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export const Navbar: React.FC<NavbarProps> = ({
  brandName = "MoniDesk",
  items = DEFAULT_ITEMS,
  ctaText = "Get started",
  ctaHref = "#get-started",
  onCtaClick,
  initialActiveItem = "Home",
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>(initialActiveItem);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    setActiveItem(item.label);
    setMobileMenuOpen(false);
    if (item.href.startsWith("#")) {
      const target = document.querySelector(item.href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "pt-3 sm:pt-4 px-4 sm:px-6" : "pt-0 px-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ease-in-out ${
          isScrolled
            ? "max-w-5xl w-full rounded-full bg-white/90 dark:bg-surface-900/90 backdrop-blur-md border border-surface-200/80 dark:border-surface-700/60 shadow-soft px-4 sm:px-6 py-2.5"
            : "w-full rounded-none bg-surface-canvas/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-surface-100/70 dark:border-surface-800/60 shadow-none px-6 sm:px-8 lg:px-12 py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group select-none cursor-pointer"
            onClick={(e) =>
              handleItemClick(e, { label: "Home", href: "#home" })
            }
          >
            {/* Glossy gradient logo icon matching the screenshot */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-linear-to-tr from-amber-500 via-rose-500 to-indigo-600 p-[1.5px] shadow-sm transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xs flex items-center justify-center">
                <svg
                  viewBox="0 0 28 28"
                  className="w-5 h-5 text-white drop-shadow-sm fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Modern Stylized Ribbon / Monogram curve */}
                  <path
                    d="M7 6.5C7 5.67 7.67 5 8.5 5H10C10.83 5 11.5 5.67 11.5 6.5V14.5C11.5 16.71 13.29 18.5 15.5 18.5C17.71 18.5 19.5 16.71 19.5 14.5V6.5C19.5 5.67 20.17 5 21 5H22.5C23.33 5 24 5.67 24 6.5V14.5C24 19.19 20.19 23 15.5 23C10.81 23 7 19.19 7 14.5V6.5Z"
                    fill="url(#logo-gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="logo-gradient"
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

            <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-surface-900 dark:text-white group-hover:text-surface-700 transition-colors">
              Monidesk
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {items.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`relative py-1 text-sm transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-surface-900 dark:text-white font-semibold"
                      : "text-surface-700 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 sm:w-6 h-[2.5px] rounded-full bg-cobalt-500 transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:scale-105 active:bg-surface-950 text-surface-950 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] group cursor-pointer"
            >
              <span>{ctaText}</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10h12" />
                <path d="M11 5l5 5-5 5" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-surface-100 dark:border-surface-800 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {items.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleItemClick(e, item)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-cobalt-100/60 dark:bg-cobalt-700/20 text-cobalt-700 dark:text-cobalt-300 font-semibold"
                        : "text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 font-medium"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-cobalt-500" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
