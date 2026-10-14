import React, { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    id: "mobile",
    src: "/heroSectionBG.png",
    alt: "Monidesk Mobile Dashboard in Hand",
    label: "Mobile View",
  },
  {
    id: "desktop",
    src: "/dashLight.png",
    alt: "Monidesk Web Finance Command Center",
    label: "Desktop View",
  },
];

export const Herosection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen pb-20 sm:pt-32 sm:pb-32 overflow-hidden bg-surface-canvas flex items-center"
    >
      {/* Background Subtle Gradient Blobs using theme colors */}
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-surface-50 to-transparent -z-10 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-125 h-125 bg-cobalt-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-60 -left-40 w-112.5 h-112.5 bg-mint-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-surface-900 tracking-tight leading-[1.12]">
              Command your wealth with{" "}
              <span className="text-mint-700">Effortless Clarity.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-surface-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Monidesk consolidates your revenue streams, asset flows, and
              predictive cash metrics into a unified, high-precision dashboard
              designed for modern builders.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#get-started"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-surface-900 hover:bg-surface-800 text-white font-semibold text-sm transition-all duration-200 shadow-soft hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start free trial</span>
                <span className="bg-white rounded-full w-8 h-8 grid place-items-center group-hover:translate-x-4 transition-all duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0f2238"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-50 hover:bg-surface-100 border border-surface-200/80 text-surface-800 font-semibold text-sm transition-all duration-200"
              >
                <span>Watch 2-min demo</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-surface-100 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div>
                <div className="font-heading font-bold text-2xl text-surface-900">
                  $2.4B+
                </div>
                <div className="text-xs text-surface-500">Volume tracked</div>
              </div>
              <div className="h-8 w-px bg-surface-200/60 hidden sm:block" />
              <div>
                <div className="font-heading font-bold text-2xl text-surface-900">
                  99.98%
                </div>
                <div className="text-xs text-surface-500">
                  Uptime reliability
                </div>
              </div>
              <div className="h-8 w-px bg-surface-200/60 hidden sm:block" />
              <div>
                <div className="font-heading font-bold text-2xl text-surface-900">
                  &lt; 150ms
                </div>
                <div className="text-xs text-surface-500">Real-time sync</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup with Floating 5s Animation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Glass Glow effect behind images */}
              <div className="absolute inset-0 bg-linear-to-tr from-cobalt-300/30 via-mint-100/40 to-transparent blur-2xl pointer-events-none" />

              {/* Floating Container (Applies subtle perpetual floating movement) */}
              <div className="animate-float relative w-full h-[440px] sm:h-[500px] lg:h-[540px] flex items-center justify-center">
                {/* Slide 1: Mobile Phone in Hand */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeSlide === 0
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10"
                      : "opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
                  }`}
                >
                  <img
                    src="/heroSectionBG.png"
                    alt="Monidesk Fintech Dashboard in Hand"
                    className="w-full h-full max-h-130 object-contain drop-shadow-2xl select-none"
                    loading="eager"
                  />
                </div>

                {/* Slide 2: Desktop Dashboard View */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeSlide === 1
                      ? "opacity-100 translate-y-0 scale-140 pointer-events-auto z-10"
                      : "opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
                  }`}
                >
                  <img
                    src="/desktopHero.png"
                    alt="Monidesk Fintech Desktop Dashboard"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Interactive View Switcher & Slide Indicators */}
              <div className="flex items-center justify-center gap-2 mt-4 select-none">
                <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/90 backdrop-blur-md border border-surface-200/80 shadow-soft">
                  {HERO_SLIDES.map((slide, idx) => {
                    const isActive = activeSlide === idx;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                          isActive
                            ? "bg-surface-900 text-white shadow-xs"
                            : "text-surface-500 hover:text-surface-900 hover:bg-surface-100"
                        }`}
                        aria-label={`Switch to ${slide.label}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isActive
                              ? "bg-mint-500 animate-pulse"
                              : "bg-surface-300"
                          }`}
                        />
                        <span>{slide.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
