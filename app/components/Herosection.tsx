import React from "react";

export const Herosection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-20 h-screen pb-20 sm:pt-32 sm:pb-32 overflow-hidden bg-surface-canvas"
    >
      {/* Background Subtle Gradient Blobs using theme colors */}
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-surface-50 to-transparent -z-10 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-125 h-125 bg-cobalt-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-60 -left-40 w-112.5 h-112.5 bg-mint-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill Announcement Badge */}

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

          {/* Right Column: Visual Dashboard Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Glass Glow effect behind image */}
              <div className="absolute inset-0 bg-linear-to-tr from-cobalt-300/30 via-mint-100/40 to-transparent  blur-2xl " />

              <div className="relative rounded-2xl overflow-hidden  backdrop-blur-xs">
                <img
                  src="/heroSectionBG.png"
                  alt="Monidesk Fintech Dashboard in Hand"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
