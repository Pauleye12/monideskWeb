import React from "react";

export const ProblemSolution: React.FC = () => {
  return (
    <section
      id="problem-solution"
      className="relative py-24 sm:py-32 overflow-hidden bg-surface-canvas border-b border-surface-100"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-112.5 bg-linear-to-b from-cobalt-100/30 via-mint-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-surface-900 tracking-tight leading-[1.14]">
            One app for your sales, stock, and{" "}
            <span className="text-mint-700">Business Insights.</span>
          </h2>

          <p className="font-heading font-semibold text-base sm:text-lg md:text-xl text-surface-700 max-w-2xl mx-auto mt-4 sm:mt-5 leading-relaxed">
            Record every sale in one place. Stock updates as you sell, customer
            balances stay visible, and every day MoniDesk tells you what to
            restock, who to chase, and what to improve
          </p>

          <p className="text-[11px] sm:text-xs text-surface-400 mt-3 tracking-wide">
            Notebook or MoniDesk? See the difference below ↓
          </p>
        </div>

        {/* Comparison Grid: Problem vs Solution */}
        <div className="max-w-5xl mx-auto relative">
          {/* Centered "VS" Badge for Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white border border-surface-200/90 shadow-soft flex items-center justify-center text-xs font-bold text-surface-500">
              VS
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: The Problem (Online Noise / Social Media) */}
            <div className="rounded-3xl bg-surface-50/70 border border-surface-200/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xs">
              <div>
                {/* Column Headline */}
                <h3 className="font-heading font-semibold text-sm sm:text-base text-surface-500 text-center mb-6">
                  In notebooks and chats, you’re left to guess
                </h3>

                {/* Social Media Post Simulation */}
                <div className="rounded-2xl bg-white border border-surface-200/60 p-5 shadow-xs">
                  {/* Author Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                          C
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-white flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C16.58 3.67 20.28 7.37 20.28 11.91C20.28 16.45 16.58 20.15 12.04 20.15Z" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <div className="font-heading font-bold text-sm text-surface-900 leading-none">
                          Customer
                        </div>
                        <div className="text-xs text-surface-400 mt-1">
                          WhatsApp
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-surface-400 font-medium">2h</span>
                  </div>

                  {/* Message Content */}
                  <div className="mt-3.5 bg-surface-50/80 border border-surface-200/60 rounded-2xl rounded-tl-xs p-3.5 shadow-2xs">
                    <p className="text-sm text-surface-800 leading-relaxed font-sans">
                      “Do you still have the queen size? I’ll come by tomorrow.”
                    </p>
                  </div>

                  {/* Footer Row */}
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-surface-400 mt-4 pb-3.5 border-b border-surface-100 font-medium">
                    <div className="flex items-center gap-1.5 text-surface-500">
                      <svg
                        className="w-3.5 h-3.5 text-surface-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span>
                        Notebook,{" "}
                        <strong className="text-surface-700">page 14</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center justify-center min-w-4.5 h-4.5 px-1.5 text-[10px] font-bold bg-[#25D366] text-white rounded-full">
                        38
                      </span>
                      <span className="text-surface-600">unread chats</span>
                    </div>
                  </div>

                  {/* Reply Line */}
                  <div className="flex items-start gap-2.5 mt-3 pt-1">
                    <div className="w-6 h-6 rounded-full bg-surface-100 text-surface-600 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      You
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-surface-700">
                          You
                        </span>
                        <span
                          className="text-surface-400 flex items-center"
                          title="Delivered"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-surface-400"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M15 4.5L7.5 12L4.5 9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.5 4.5L6.5 8.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="text-xs text-surface-500 mt-0.5">
                        “I think so? Let me check what’s left.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* No Track Record Bottom Banner */}
              <div className="rounded-2xl border border-dashed border-surface-300/80 bg-white/50 p-4 text-center mt-6">
                <div className="font-heading font-semibold text-xs sm:text-sm text-surface-400">
                  What your notebook can’t tell you
                </div>
                <div className="text-[11px] sm:text-xs text-surface-400 mt-1">
                  No stock count. No balances. No weekly totals. No next step
                </div>
              </div>
            </div>

            {/* Mobile "VS" separator */}
            <div className="flex md:hidden items-center justify-center -my-3 z-10">
              <div className="w-10 h-10 rounded-full bg-white border border-surface-200 shadow-sm flex items-center justify-center text-xs font-bold text-surface-500">
                VS
              </div>
            </div>

            {/* Right Column: The Solution (MoniDesk Verified Intelligence) */}
            <div className="relative rounded-3xl bg-white border-2 border-mint-700/85 p-6 sm:p-7 flex flex-col justify-between shadow-soft transition-all duration-300 hover:shadow-md">
              {/* Monidesk Pill Badge on top edge */}
              <div className="absolute -top-3.5 right-8 sm:right-10 bg-mint-700 text-white text-[11px] font-bold tracking-tight px-3.5 py-0.5 rounded-full shadow-sm z-10 flex items-center gap-1.5">
                <span>Monidesk</span>
              </div>

              <div>
                {/* Column Headline */}
                <h3 className="font-heading font-bold text-sm sm:text-base text-surface-900 text-center mb-6">
                  Here, you can check.
                </h3>

                {/* Verified Thesis Post Simulation */}
                <div className="rounded-2xl bg-white border border-surface-200/80 p-5 shadow-xs">
                  {/* Author Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-cobalt-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                        JM
                      </div>
                      <div>
                        <div className="font-heading font-bold text-sm text-surface-900 leading-none">
                          Jacob Martin
                        </div>
                        <div className="text-xs text-surface-400 mt-1">
                          @jmartin
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-surface-400">
                      <span>90d ago</span>
                      <svg
                        className="w-4 h-4 text-surface-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Thesis Title */}
                  <h4 className="font-heading font-bold text-sm sm:text-base text-surface-900 mt-3.5 leading-snug">
                    NVDA rerates as data center demand outruns supply
                  </h4>

                  {/* Thesis Body */}
                  <p className="text-xs sm:text-sm text-surface-500 mt-1.5 leading-relaxed">
                    Capacity guidance keeps slipping while supply stays tight
                    into next year. The setup supports the target, not a melt
                    up, and the risk is a single quarte...
                  </p>

                  {/* Target & Horizon Parameters Box */}
                  <div className="rounded-xl bg-surface-50/90 border border-surface-100 p-3 mt-3.5 flex items-center gap-6 text-xs text-surface-500 font-medium">
                    <div>
                      Target{" "}
                      <span className="font-heading font-bold text-surface-900 ml-1 text-sm">
                        $280
                      </span>
                    </div>
                    <div>
                      Horizon{" "}
                      <span className="font-heading font-bold text-surface-900 ml-1 text-sm">
                        90d
                      </span>
                    </div>
                  </div>

                  {/* Social Counts & Verified Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-surface-100 text-xs">
                    {/* Likes & Comments */}
                    <div className="flex items-center gap-4 text-surface-600 font-medium">
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="w-3.5 h-3.5 text-surface-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        100
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="w-3.5 h-3.5 text-surface-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        734
                      </span>
                    </div>

                    {/* Verified Outcome Tags */}
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-mint-50 border border-mint-200/80 text-mint-700 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
                        Hit
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-surface-100 text-surface-800 text-xs font-bold font-mono">
                        $NVDA
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-mint-100 text-mint-700 text-xs font-semibold">
                        Bullish
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Track Record Bottom Card */}
              <div className="rounded-2xl bg-surface-50/80 border border-surface-200/70 p-4 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cobalt-100 text-cobalt-700 font-bold text-xs flex items-center justify-center shrink-0">
                    JM
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xs sm:text-sm text-surface-900">
                      Jacob&apos;s record
                    </div>
                    <div className="text-[11px] sm:text-xs text-surface-500 mt-0.5">
                      41 theses closed · 17 missed · public, nothing deleted
                    </div>
                  </div>
                </div>

                <div className="text-right pl-3 shrink-0">
                  <div className="font-heading font-black text-xl sm:text-2xl text-surface-900 leading-none">
                    58%
                  </div>
                  <div className="text-[10px] text-surface-500 font-semibold uppercase tracking-wider mt-0.5">
                    Hit rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
