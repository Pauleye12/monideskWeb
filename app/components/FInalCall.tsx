import React, { useState, useEffect } from "react";

const TICKERS = [
  "The Best",
  "AI Insights",
  "An Upgrade.",
  "A System.",
  "Digital Records.",
];

export const FInalCall: React.FC = () => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKERS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="final-call"
      className="relative py-24 sm:py-32 overflow-hidden bg-surface-canvas border-t border-surface-100"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-125 bg-cobalt-100/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-112.5 h-112.5 bg-mint-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Mobile Phone Mockups with Halftone Dot Matrix */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-140 flex items-center justify-center py-6 sm:py-10">
              {/* Radial Halftone Dot Grid Background */}
              <div
                className="absolute -inset-8 sm:-inset-12 opacity-65 pointer-events-none -z-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #9db5d0 1.6px, transparent 1.6px)",
                  backgroundSize: "20px 20px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                }}
              />

              {/* Secondary Phone (Behind, tilted right) */}
              <div className="absolute right-0 sm:right-6 top-2 sm:top-6 w-57.5 sm:w-67.5 aspect-9/19 rounded-[42px] bg-surface-900 p-2.5 shadow-2xl rotate-8 sm:rotate-12 translate-x-4 sm:translate-x-8 border-2 border-surface-800 hidden xs:flex flex-col justify-between overflow-hidden opacity-90 transition-all duration-300 hover:opacity-100">
                <div className="bg-white rounded-[34px] w-full h-full flex flex-col justify-between overflow-hidden relative border border-surface-200/50 p-4">
                  {/* Status header */}
                  <div className="flex items-center justify-between text-[11px] text-surface-500 font-semibold mb-2">
                    <span>Invest</span>
                    <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
                  </div>

                  {/* Stock metric chart with placeholder */}
                  <div className="relative my-auto">
                    <div className="text-xs text-surface-400 font-medium">
                      Portfolio Growth
                    </div>
                    <div className="font-heading font-black text-2xl text-surface-900 mt-0.5">
                      $100.00
                    </div>
                    <div className="text-[11px] font-bold text-mint-700 mt-0.5">
                      +10.00% today
                    </div>

                    {/* Chart SVG graphic curve */}
                    <div className="h-28 w-full mt-3">
                      <svg
                        viewBox="0 0 100 45"
                        className="w-full h-full overflow-visible"
                      >
                        <path
                          d="M0 35 Q 20 32, 35 24 T 65 18 T 100 8"
                          fill="none"
                          stroke="#27c25c"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 35 Q 20 32, 35 24 T 65 18 T 100 8 L 100 45 L 0 45 Z"
                          fill="url(#greenGrad)"
                          opacity="0.25"
                        />
                        <defs>
                          <linearGradient
                            id="greenGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#27c25c" />
                            <stop
                              offset="100%"
                              stopColor="#27c25c"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Placeholder preview banner using public image */}
                    <div className="mt-4 rounded-xl overflow-hidden border border-surface-200/60 shadow-2xs">
                      <img
                        src="/Fintech Dashboard in Hand.png"
                        alt="Fintech Telemetry Preview"
                        className="w-full h-14 object-cover object-top opacity-85"
                      />
                    </div>
                  </div>

                  <div className="w-20 h-1 bg-surface-300 rounded-full mx-auto mt-2" />
                </div>
              </div>

              {/* Primary Phone (In Front, centered) */}
              <div className="relative z-10 w-70 sm:w-80 aspect-[9/19.2] rounded-[46px] bg-surface-900 p-2.5 sm:p-3 shadow-[0_28px_65px_-15px_rgba(15,34,56,0.32)] border-4 border-surface-800 flex flex-col justify-between overflow-hidden">
                <div className="bg-white rounded-[36px] w-full h-full flex flex-col justify-between overflow-hidden relative border border-surface-200/50">
                  {/* Phone Top Notch & Dynamic Island */}
                  <div className="pt-2 px-5 flex items-center justify-between text-[11px] font-semibold text-surface-800">
                    <span>12:26</span>
                    {/* Dynamic Island Pill */}
                    <div className="w-20 h-4.5 bg-surface-900 rounded-full flex items-center justify-end px-2 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-surface-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cobalt-500" />
                    </div>
                    {/* Status icons */}
                    <div className="flex items-center gap-1.5 text-surface-700">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.55 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                      </svg>
                      <div className="w-4 h-2 border border-surface-700 rounded-xs p-0.5 flex items-center">
                        <div className="w-2 h-full bg-surface-700 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* App Navigation Header */}
                  <div className="px-4 pt-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 flex flex-col justify-center gap-1 cursor-pointer">
                        <span className="w-4 h-0.5 bg-surface-800 rounded-full" />
                        <span className="w-3 h-0.5 bg-surface-800 rounded-full" />
                      </div>
                      <span className="font-heading font-extrabold text-sm text-surface-900 tracking-tight">
                        Home
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-surface-600">
                      <button
                        type="button"
                        className="p-1 hover:text-surface-900"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.2}
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="p-1 hover:text-surface-900 relative"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.2}
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-rose-500 rounded-full" />
                      </button>
                    </div>
                  </div>

                  {/* Feed Tabs: For You, Spaces, Saved */}
                  <div className="px-4 pt-2.5 flex items-center gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-cobalt-100 text-cobalt-700 font-bold">
                      For You
                    </span>
                    <span className="px-2.5 py-1 text-surface-500 font-medium">
                      Spaces
                    </span>
                    <span className="px-2.5 py-1 text-surface-500 font-medium">
                      Saved
                    </span>
                  </div>

                  {/* Stories / Member Avatars Row */}
                  <div className="px-4 py-2.5 flex items-center gap-2.5 overflow-x-hidden border-b border-surface-100">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <div className="w-9 h-9 rounded-full bg-cobalt-500 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-surface-500 font-semibold">
                        All
                      </span>
                    </div>

                    {[
                      { name: "Riley", time: "Just now" },
                      { name: "Casey", time: "1m ago" },
                      { name: "Jordan", time: "30m ago" },
                      { name: "Avery", time: "1h ago" },
                    ].map((person, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-1 shrink-0"
                      >
                        <div className="w-9 h-9 rounded-full p-0.5 ring-2 ring-cobalt-400 bg-surface-100 flex items-center justify-center text-[11px] font-bold text-surface-700">
                          {person.name[0]}
                        </div>
                        <span className="text-[9px] text-surface-500 font-medium">
                          {person.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Scrollable Feed Mockup Container */}
                  <div className="px-3.5 py-2 space-y-2.5 overflow-hidden flex-1">
                    {/* Post Card 1 */}
                    <div className="p-3 rounded-2xl bg-surface-50 border border-surface-200/70 text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-cobalt-700 text-white text-[10px] font-bold flex items-center justify-center">
                            MH
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-surface-900 leading-tight">
                              Marcelo Hernandez
                            </div>
                            <div className="text-[9px] text-surface-400">
                              @marcelohernandez · 2h
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-[10px] text-surface-700 mt-2 line-clamp-2 leading-relaxed">
                        I&apos;ve been reflecting on the ongoing discussions
                        about the A.I. Bubble, and here&apos;s my perspective...
                      </p>

                      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-surface-200/50 text-[9px] text-surface-500">
                        <span>
                          Target:{" "}
                          <strong className="text-surface-900">$280</strong>
                        </span>
                        <span>
                          Horizon:{" "}
                          <strong className="text-surface-900">90d</strong>
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="px-1.5 py-0.5 rounded-full bg-mint-100 text-mint-700 font-bold text-[8.5px]">
                            On track
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full bg-cobalt-100 text-cobalt-700 font-bold text-[8.5px]">
                            $BTC
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Post Card 2 */}
                    <div className="p-3 rounded-2xl bg-surface-50 border border-surface-200/70 text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-surface-700 text-white text-[10px] font-bold flex items-center justify-center">
                            ED
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-surface-900 leading-tight">
                              Elena Dimitrova
                            </div>
                            <div className="text-[9px] text-surface-400">
                              @elena_d · 4h
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-surface-200/50 text-[9px] text-surface-500">
                        <span>
                          Target:{" "}
                          <strong className="text-surface-900">$145</strong>
                        </span>
                        <span>
                          Horizon:{" "}
                          <strong className="text-surface-900">45d</strong>
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold text-[8.5px]">
                            Bearish
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full bg-cobalt-100 text-cobalt-700 font-bold text-[8.5px]">
                            $NVDA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Action '+' Button */}
                  <div className="absolute bottom-14 right-4 z-20">
                    <button
                      type="button"
                      aria-label="New thesis"
                      className="w-8 h-8 rounded-full bg-surface-900 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom App Navigation Bar */}
                  <div className="bg-white border-t border-surface-200/70 py-2 px-6 flex items-center justify-between text-[9px] font-semibold text-surface-400">
                    <div className="flex flex-col items-center text-cobalt-600 gap-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span>Social</span>
                    </div>

                    <div className="flex flex-col items-center gap-0.5 hover:text-surface-700 cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                      <span>Invest</span>
                    </div>

                    <div className="flex flex-col items-center gap-0.5 hover:text-surface-700 cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.004 0V5.625c0-.621-.504-1.125-1.125-1.125H9.75c-.621 0-1.125.504-1.125 1.125v8.625"
                        />
                      </svg>
                      <span>Compete</span>
                    </div>

                    <div className="flex flex-col items-center gap-0.5 hover:text-surface-700 cursor-pointer">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <span>Profile</span>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="w-24 h-1 bg-surface-900 rounded-full mx-auto my-1.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Headline, Subtitle and Action Button */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-surface-900 tracking-tight leading-[1.12]">
              Your business deserves{" "}
              <span className="text-mint-700 inline-flex items-center">
                {TICKERS[tickerIndex]}
                <span className="w-0.5 sm:w-0.75 h-8 sm:h-12 bg-mint-700 ml-1 inline-block animate-pulse" />
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-surface-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              You do not need a portfolio. You need a reason and a number.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#get-started"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-surface-900 hover:bg-surface-800 text-white font-semibold text-sm transition-all duration-200 shadow-soft hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start your record</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FInalCall;
