import React from "react";

export const GettingStarted: React.FC = () => {
  return (
    <section
      id="thesis"
      className="relative py-24 sm:py-32 overflow-hidden bg-surface-canvas border-t border-surface-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-surface-900 tracking-tight leading-[1.15]">
            Where a thesis <span className="text-mint-700">goes to work.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-surface-500 mt-4 leading-relaxed max-w-xl mx-auto">
            Everything below starts from the same object: a call with a target,
            a horizon, and your name on it.
          </p>
        </div>

        {/* Feature 1: Your record */}
        <div className="flex justify-between gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left Text */}
          <div className=" space-y-4">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-surface-900 tracking-tight">
              Your record
            </h3>
            <p className="font-sans text-sm sm:text-base text-surface-500 leading-relaxed max-w-md">
              Every closed thesis becomes part of your public record, including
              misses. Your hit rate, past calls, and results stay available on
              your profile.
            </p>
          </div>

          {/* Right Card: Record Showcase */}
          <div className=" flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white border border-surface-200/80 p-6 sm:p-7 shadow-soft">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-100 text-surface-700 font-bold text-xs flex items-center justify-center">
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

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-surface-200/80 text-[11px] font-medium text-surface-500">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>Open to anyone</span>
                </div>
              </div>

              {/* Hit Rate Stat */}
              <div className="mt-6">
                <div className="font-heading font-black text-4xl text-surface-900 leading-none">
                  58%
                </div>
                <div className="text-xs font-semibold text-surface-400 mt-1 uppercase tracking-wider">
                  Hit Rate
                </div>
              </div>

              {/* 3-Column Numbers */}
              <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-surface-100">
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    42
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Theses closed
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    24
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Hit
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    14
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Missed, all still readable
                  </div>
                </div>
              </div>

              {/* Last 10 Closes Dots */}
              <div className="mt-6 pt-5 border-t border-surface-100">
                <div className="text-[10px] font-bold text-surface-400 uppercase tracking-wider mb-2.5">
                  Last 10 Closes
                </div>
                <div className="flex items-center gap-2">
                  {/* Green = Hit, Red = Miss */}
                  {[
                    true,
                    false,
                    true,
                    true,
                    true,
                    false,
                    true,
                    false,
                    true,
                    false,
                  ].map((isHit, idx) => (
                    <span
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        isHit ? "bg-mint-500" : "bg-rose-500"
                      }`}
                      title={isHit ? "Hit" : "Missed"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Zenith */}
        <div className="flex justify-between gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left Text */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white border border-surface-200/80 p-6 sm:p-7 shadow-soft">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-100 text-surface-700 font-bold text-xs flex items-center justify-center">
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

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-surface-200/80 text-[11px] font-medium text-surface-500">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>Open to anyone</span>
                </div>
              </div>

              {/* Hit Rate Stat */}
              <div className="mt-6">
                <div className="font-heading font-black text-4xl text-surface-900 leading-none">
                  58%
                </div>
                <div className="text-xs font-semibold text-surface-400 mt-1 uppercase tracking-wider">
                  Hit Rate
                </div>
              </div>

              {/* 3-Column Numbers */}
              <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-surface-100">
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    42
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Theses closed
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    24
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Hit
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    14
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Missed, all still readable
                  </div>
                </div>
              </div>

              {/* Last 10 Closes Dots */}
              <div className="mt-6 pt-5 border-t border-surface-100">
                <div className="text-[10px] font-bold text-surface-400 uppercase tracking-wider mb-2.5">
                  Last 10 Closes
                </div>
                <div className="flex items-center gap-2">
                  {/* Green = Hit, Red = Miss */}
                  {[
                    true,
                    false,
                    true,
                    true,
                    true,
                    false,
                    true,
                    false,
                    true,
                    false,
                  ].map((isHit, idx) => (
                    <span
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        isHit ? "bg-mint-500" : "bg-rose-500"
                      }`}
                      title={isHit ? "Hit" : "Missed"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Record Showcase */}
          <div className=" space-y-4">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-surface-900 tracking-tight">
              Your record
            </h3>
            <p className="font-sans text-sm sm:text-base text-surface-500 leading-relaxed max-w-md">
              Every closed thesis becomes part of your public record, including
              misses. Your hit rate, past calls, and results stay available on
              your profile.
            </p>
          </div>
        </div>

        {/* Feature 3: Brokerage trading */}
        <div className="flex justify-between gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left Text */}
          <div className=" space-y-4">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-surface-900 tracking-tight">
              Your record
            </h3>
            <p className="font-sans text-sm sm:text-base text-surface-500 leading-relaxed max-w-md">
              Every closed thesis becomes part of your public record, including
              misses. Your hit rate, past calls, and results stay available on
              your profile.
            </p>
          </div>

          {/* Right Card: Record Showcase */}
          <div className=" flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white border border-surface-200/80 p-6 sm:p-7 shadow-soft">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-100 text-surface-700 font-bold text-xs flex items-center justify-center">
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

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-surface-200/80 text-[11px] font-medium text-surface-500">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>Open to anyone</span>
                </div>
              </div>

              {/* Hit Rate Stat */}
              <div className="mt-6">
                <div className="font-heading font-black text-4xl text-surface-900 leading-none">
                  58%
                </div>
                <div className="text-xs font-semibold text-surface-400 mt-1 uppercase tracking-wider">
                  Hit Rate
                </div>
              </div>

              {/* 3-Column Numbers */}
              <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-surface-100">
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    42
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Theses closed
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    24
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Hit
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl text-surface-900 leading-none">
                    14
                  </div>
                  <div className="text-[11px] text-surface-500 mt-1 leading-tight">
                    Missed, all still readable
                  </div>
                </div>
              </div>

              {/* Last 10 Closes Dots */}
              <div className="mt-6 pt-5 border-t border-surface-100">
                <div className="text-[10px] font-bold text-surface-400 uppercase tracking-wider mb-2.5">
                  Last 10 Closes
                </div>
                <div className="flex items-center gap-2">
                  {/* Green = Hit, Red = Miss */}
                  {[
                    true,
                    false,
                    true,
                    true,
                    true,
                    false,
                    true,
                    false,
                    true,
                    false,
                  ].map((isHit, idx) => (
                    <span
                      key={idx}
                      className={`w-3 h-3 rounded-full ${
                        isHit ? "bg-mint-500" : "bg-rose-500"
                      }`}
                      title={isHit ? "Hit" : "Missed"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
