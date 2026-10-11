import React, { useState, useEffect, useCallback, useRef } from "react";

interface TestimonialItem {
  id: string;
  tag: string;
  quotePrefix: string;
  underlinedText: string;
  quoteSuffix: string;
  author: string;
  role: string;
  image: string;
  imageAlt: string;
  layout: "text-left" | "image-left";
  renderLogo: () => React.ReactNode;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "dejan-aleksov",
    tag: "TESTIMONIAL",
    quotePrefix: "“Aqtos has been a game-changer for ",
    underlinedText: "consolidating tasks and communication within our office",
    quoteSuffix:
      ", ensuring everything stays organized and efficient. The public board feature has been particularly impactful, allowing our clients to view and track requests in real-time.”",
    author: "Dejan Aleksov",
    role: "Lawyer, ALME LAW",
    image: "/Fintech Dashboard in Hand.png",
    imageAlt: "Dejan Aleksov - Lawyer at ALME LAW",
    layout: "text-left",
    renderLogo: () => (
      <div className="flex flex-col items-center text-center leading-none">
        {/* Classical Law Column Icon */}
        <svg
          viewBox="0 0 28 22"
          className="w-6 h-5 text-surface-500 mb-1"
          fill="currentColor"
        >
          <path
            d="M2 3 H26 V5 C26 6.5 24.5 7.5 23 7.5 H5 C3.5 7.5 2 6.5 2 5 Z"
            opacity="0.85"
          />
          <rect x="5.5" y="8" width="2" height="10" rx="0.5" />
          <rect x="10.5" y="8" width="2" height="10" rx="0.5" />
          <rect x="15.5" y="8" width="2" height="10" rx="0.5" />
          <rect x="20.5" y="8" width="2" height="10" rx="0.5" />
          <rect x="2" y="18" width="24" height="3" rx="0.8" opacity="0.9" />
        </svg>
        <span className="font-heading font-bold text-[9.5px] tracking-[0.18em] text-surface-800">
          ALME LAW
        </span>
        <span className="font-sans font-medium text-[5.5px] tracking-[0.24em] text-surface-400 mt-0.5">
          LAW FIRM
        </span>
      </div>
    ),
  },
  {
    id: "momir-polonakovikj",
    tag: "TESTIMONIAL",
    quotePrefix:
      "“Aqtos has revolutionized the way we operate as a growing startup by consolidating our CRM, finances, task planning, project management, and HR into one central platform. ",
    underlinedText:
      "The project management module stands out as the best we've tested...",
    quoteSuffix: "”",
    author: "Momir Polonakovikj",
    role: "Operations Manager, Synapse Aviation",
    image: "/heroSectionBG.png",
    imageAlt: "Momir Polonakovikj - Operations Manager at Synapse Aviation",
    layout: "image-left",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        {/* 4-Blade Aviation Turbine / Synapse symbol */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-surface-700 shrink-0"
          fill="currentColor"
        >
          <path d="M12 2 L17 8 L13 11 L8 5 Z" opacity="0.95" />
          <path d="M22 12 L16 17 L13 13 L19 8 Z" opacity="0.75" />
          <path d="M12 22 L7 16 L11 13 L16 19 Z" opacity="0.85" />
          <path d="M2 12 L8 7 L11 11 L5 16 Z" opacity="1" />
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span className="font-heading font-extrabold text-[13px] tracking-[0.16em] text-surface-800">
            SYNAPSE
          </span>
          <span className="font-sans font-medium text-[6px] tracking-[0.38em] text-surface-500 mt-1">
            AVIATION
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "elena-kostova",
    tag: "TESTIMONIAL",
    quotePrefix: "“Connecting our cross-border operations took minimal setup. ",
    underlinedText:
      "The automated reconciliation cut our month-end close by four full days",
    quoteSuffix:
      ", keeping all regional subsidiaries in perfect continuous alignment without any manual spreadsheets.”",
    author: "Elena Kostova",
    role: "VP Operations, IWM Network",
    image: "/Fintech Dashboard in Hand.png",
    imageAlt: "Elena Kostova - VP Operations at IWM Network",
    layout: "text-left",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg
          viewBox="0 0 36 36"
          className="w-8 h-8 text-surface-700 shrink-0"
          fill="currentColor"
        >
          <path
            d="M6 13 L18 6 L30 13 L30 27 L18 34 L6 27 Z"
            fill="#9db5d0"
            opacity="0.35"
          />
          <path d="M6 13 L18 6 L18 20 L6 27 Z" fill="#4e729a" opacity="0.8" />
          <path d="M18 6 L30 13 L18 20 Z" fill="#9db5d0" opacity="0.55" />
          <path d="M18 20 L30 13 L30 27 L18 34 Z" fill="#203f62" />
          <path
            d="M8 23 L12 17 L15 22 L18 18 L21 22 L24 17 L28 23"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col text-left leading-none">
          <span className="font-heading font-extrabold text-[15px] tracking-tight text-surface-800">
            IWM
          </span>
          <span className="font-sans font-semibold text-[8px] tracking-[0.22em] text-surface-500 mt-0.5">
            NETWORK
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "goran-stojanovski",
    tag: "TESTIMONIAL",
    quotePrefix:
      "“We consolidated multiple fragmented tools into one fluid workspace. ",
    underlinedText:
      "Visibility across company initiatives is instantaneous and foolproof",
    quoteSuffix:
      ", allowing our leadership team to forecast milestones with complete operational clarity.”",
    author: "Goran Stojanovski",
    role: "Director of Product, Zikol",
    image: "/heroSectionBG.png",
    imageAlt: "Goran Stojanovski - Director of Product at Zikol",
    layout: "image-left",
    renderLogo: () => (
      <div className="flex flex-col items-center leading-none">
        <div className="flex items-baseline">
          <span className="font-heading font-black text-xl tracking-wider text-surface-800">
            ZIK
          </span>
          <span className="relative inline-flex items-center justify-center w-5 h-5 mx-0.5 rounded-full border-[3px] border-surface-800">
            <svg
              viewBox="0 0 14 14"
              className="w-2.5 h-2.5 text-surface-800"
              fill="currentColor"
            >
              <path d="M7 1.5 L1.5 6 V12 H5 V8.5 H9 V12 H12.5 V6 Z" />
            </svg>
          </span>
          <span className="font-heading font-black text-xl tracking-wider text-surface-800">
            L
          </span>
        </div>
        <span className="font-sans font-medium text-[6.5px] tracking-normal text-surface-500 mt-1">
          Build your future today.
        </span>
      </div>
    ),
  },
];

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Advance right-to-left
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  // Back left-to-right
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  }, []);

  // Auto-scroll from right to left every 5.5 seconds, paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch gesture support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    // Swiped left -> Next
    if (diff > 50) {
      handleNext();
    }
    // Swiped right -> Prev
    if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 overflow-hidden bg-mint-700 border-t border-surface-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Delicate background ambiance */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cobalt-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-mint-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Interactive Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-surface-100 text-surface-700 mb-3.5 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-mint-500 animate-pulse" />
              Testimonials
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Trusted by teams transforming their daily workflow
            </h2>
          </div>

          {/* Interactive Navigation Arrows & Slide Indicators */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Step Counter */}
            <div className="text-xs font-mono font-medium text-white select-none">
              <span className="font-bold text-white">0{currentIndex + 1}</span>
              <span className="mx-1">/</span>
              <span className="text-white">0{TESTIMONIALS.length}</span>
            </div>

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-surface-200 bg-white hover:bg-surface-50 text-surface-600 hover:text-surface-900 flex items-center justify-center transition-all shadow-xs hover:border-surface-300 active:scale-95 cursor-pointer group"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-surface-200 bg-white hover:bg-surface-50 text-surface-600 hover:text-surface-900 flex items-center justify-center transition-all shadow-xs hover:border-surface-300 active:scale-95 cursor-pointer group"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track that scrolls from right to left */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {TESTIMONIALS.map((item, idx) => {
              const isImageLeft = item.layout === "image-left";

              return (
                <div
                  key={item.id}
                  className="w-full shrink-0 px-1 sm:px-2"
                  aria-hidden={idx !== currentIndex}
                >
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-surface-200/80 p-6 sm:p-10 lg:p-12 shadow-soft overflow-hidden transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* === Text Column === */}
                      <div
                        className={`flex flex-col justify-between h-full md:col-span-7 ${
                          isImageLeft
                            ? "md:order-2 order-1"
                            : "md:order-1 order-1"
                        }`}
                      >
                        {/* Upper tag */}
                        <div>
                          <div className="text-[11px] font-bold tracking-[0.22em] text-surface-400 uppercase font-sans mb-5 sm:mb-6">
                            {item.tag}
                          </div>

                          {/* Quote with teal/cyan underline accent matching screenshot */}
                          <p className="font-sans text-base sm:text-lg md:text-xl lg:text-[22px] text-surface-900 leading-relaxed sm:leading-[1.6]">
                            {item.quotePrefix}
                            <span className="relative inline-block font-medium text-surface-900 border-b-2 border-mint-500 pb-0.5">
                              {item.underlinedText}
                            </span>
                            {item.quoteSuffix}
                          </p>
                        </div>

                        {/* Author info & Company Logo */}
                        <div className="flex items-end justify-between pt-8 sm:pt-10 mt-6 sm:mt-8 border-t border-surface-100">
                          <div>
                            <div className="font-heading font-bold text-sm sm:text-base text-surface-900">
                              {item.author}
                            </div>
                            <div className="text-xs text-surface-400 font-sans mt-0.5">
                              {item.role}
                            </div>
                          </div>

                          {/* Company Logo rendered on bottom right */}
                          <div className="shrink-0">{item.renderLogo()}</div>
                        </div>
                      </div>

                      {/* === Portrait Image Column === */}
                      <div
                        className={`md:col-span-5 ${
                          isImageLeft
                            ? "md:order-1 order-2"
                            : "md:order-2 order-2"
                        }`}
                      >
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] max-h-[360px] w-full bg-surface-100 border border-surface-200/70 shadow-sm group/photo">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/photo:scale-105"
                          />
                          {/* Soft ambient tint overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-surface-900/15 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Interactive corner arrow button matching the reference images */}
                    <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next story"
                        className="w-8 h-8 rounded-lg bg-surface-50 hover:bg-surface-100 border border-surface-200/80 flex items-center justify-center text-surface-400 hover:text-surface-800 transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                        title="Next story"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Dots & Auto-scroll indicator */}
        <div className="flex items-center justify-between mt-8 sm:mt-10 pt-4">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, index) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-8 bg-surface-900"
                    : "w-2 bg-surface-300 hover:bg-surface-400"
                }`}
              />
            ))}
          </div>

          {/* Auto-scroll status indicator */}
          {/* <div className="text-[11px] text-surface-400 flex items-center gap-2 font-sans select-none">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPaused ? "bg-amber-400" : "bg-mint-500 animate-pulse"
              }`}
            />
            <span>{isPaused ? "Paused on hover" : "Auto-scrolling"}</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
