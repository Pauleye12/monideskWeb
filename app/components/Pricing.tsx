import React, { useState } from "react";

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual",
  );

  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 overflow-hidden bg-surface-canvas border-t border-surface-100"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-112.5 bg-linear-to-b from-[#e6f4f6]/60 via-mint-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-surface-900 tracking-tight leading-[1.18]">
            One price for{" "}
            <span className="text-mint-700">everyone on your team.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-surface-500 mt-4 leading-relaxed">
            No per-user fees. Bring the people who do the work.
          </p>

          {/* Billing Toggle (Monthly vs Annual 35% off) */}
          <div className="inline-flex items-center mt-8 p-1 rounded-2xl bg-mint-700/20 border border-[#cbe6ea]">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-surface-900 shadow-xs"
                  : "text-surface-600 hover:text-surface-900"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-white text-surface-900 shadow-xs"
                  : "text-surface-600 hover:text-surface-900"
              }`}
            >
              <span>Annual</span>
              <span className="bg-mint-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                35% off
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card 1: Startups */}
          <div className="bg-white rounded-3xl border border-surface-200/80 p-8 sm:p-10 shadow-xs hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Tag */}
              <div className="text-[11px] font-bold tracking-[0.2em] text-mint-700 uppercase font-sans mb-3">
                FOR YOUR FIRST CHAPTER
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-surface-900 tracking-tight">
                Startups
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-surface-500 mt-3 leading-relaxed min-h-[44px]">
                Qualified startups get 6 months free, because we&apos;ve been
                there.
              </p>

              {/* Features List */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    <strong className="text-surface-900 font-semibold">
                      Up to 10
                    </strong>{" "}
                    users
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    <strong className="text-surface-900 font-semibold">
                      Every
                    </strong>{" "}
                    feature
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    <strong className="text-surface-900 font-semibold">
                      15GB
                    </strong>{" "}
                    space
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    Support from the MoniDesk team
                  </span>
                </div>
              </div>
            </div>

            {/* Price & CTA Bottom */}
            <div className=" pt-6">
              <div className="min-h-[76px] flex items-baseline">
                <span className="font-heading font-black text-5xl sm:text-6xl text-surface-900 tracking-tight leading-none">
                  6
                </span>
                <span className="text-xs sm:text-sm text-surface-500 font-sans ml-2.5">
                  months free
                </span>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl border border-surface-200/90 bg-white hover:bg-surface-50 text-mint-700 font-semibold text-sm transition-all shadow-2xs hover:border-surface-300 active:scale-[0.99] cursor-pointer"
                >
                  Apply now
                </button>
                <p className="text-[11px] text-surface-400 text-center mt-3 font-sans">
                  Eligibility criteria apply.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Pro plan (Highlighted Center Card) */}
          <div className="bg-white rounded-3xl border-2 border-mint-700 p-8 sm:p-10 shadow-soft relative flex flex-col justify-between ring-4 ring-mint-700/10">
            <div>
              {/* Tag */}
              <div className="text-[11px] font-bold tracking-[0.2em] text-mint-700 uppercase font-sans mb-3">
                YOUR EVERYDAY WORKSPACE
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-surface-900 tracking-tight">
                Pro plan
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-surface-500 mt-3 leading-relaxed min-h-[44px]">
                One plan for up to 100 people. No per-user fees.
              </p>

              {/* Features List */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    <strong className="text-surface-900 font-semibold">
                      Up to 100
                    </strong>{" "}
                    people
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    <strong className="text-surface-900 font-semibold">
                      Every
                    </strong>{" "}
                    feature
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    <strong className="text-surface-900 font-semibold">
                      15GB+
                    </strong>{" "}
                    space
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    Support from the MoniDesk team
                  </span>
                </div>
              </div>
            </div>

            {/* Price & CTA Bottom */}
            <div className=" pt-6">
              <div className="min-h-19 flex flex-col justify-end">
                {billingCycle === "annual" ? (
                  <>
                    <span className="line-through text-xs text-surface-400 font-medium block mb-1">
                      $2,388 with monthly billing
                    </span>
                    <div className="flex items-baseline">
                      <span className="font-heading font-black text-5xl sm:text-6xl text-surface-900 tracking-tight leading-none">
                        $1,552
                      </span>
                      <span className="text-xs sm:text-sm text-surface-500 font-sans ml-2.5">
                        USD / year
                      </span>
                    </div>
                    <span className="text-xs text-surface-400 mt-1 font-sans">
                      One payment, billed annually.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xs text-surface-400 font-medium block mb-1">
                      Standard monthly plan
                    </span>
                    <div className="flex items-baseline">
                      <span className="font-heading font-black text-5xl sm:text-6xl text-surface-900 tracking-tight leading-none">
                        $199
                      </span>
                      <span className="text-xs sm:text-sm text-surface-500 font-sans ml-2.5">
                        USD / month
                      </span>
                    </div>
                    <span className="text-xs text-surface-400 mt-1 font-sans">
                      Billed monthly. Cancel anytime.
                    </span>
                  </>
                )}
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl bg-mint-700 hover:bg-mint-900/90 text-white font-semibold text-sm transition-all shadow-sm active:scale-[0.99] cursor-pointer"
                >
                  Start FREE Trial
                </button>
                <p className="text-[11px] text-surface-400 text-center mt-3 font-sans">
                  Up to 100 people. Every feature.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: For larger teams */}
          <div className="bg-white rounded-3xl border border-surface-200/80 p-8 sm:p-10 shadow-xs hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Tag */}
              <div className="text-[11px] font-bold tracking-[0.2em] text-mint-700 uppercase font-sans mb-3">
                BUILT AROUND YOUR REQUIREMENTS
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-surface-900 tracking-tight">
                For larger teams
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-surface-500 mt-3 leading-relaxed min-h-[44px]">
                Flexible deployment, integrations and security for teams of more
                than 100 people.
              </p>

              {/* Features List */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    All features, with advanced configuration
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    On-premise deployment available
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    Advanced AI and customized DATA
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    SLAs and advanced security
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-mint-700 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-surface-600">
                    Migration and hands-on onboarding
                  </span>
                </div>
              </div>
            </div>

            {/* Price & CTA Bottom */}
            <div className=" pt-6">
              <div className="min-h-19 flex flex-col justify-end">
                <span className="font-heading font-bold text-2xl text-surface-900 tracking-tight leading-none">
                  Custom
                </span>
                <span className="text-xs text-surface-400 mt-2 font-sans">
                  Tailored SLA, governance and volume limits.
                </span>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl border border-surface-200/90 bg-white hover:bg-surface-50 text-mint-700 font-semibold text-sm transition-all shadow-2xs hover:border-surface-300 active:scale-[0.99] cursor-pointer"
                >
                  Request pricing
                </button>
                <p className="text-[11px] text-surface-400 text-center mt-3 font-sans">
                  Tell us what your team needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee and Terms bar */}
        <div className="mt-14 pt-8 border-t border-surface-100 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-surface-500 text-center font-sans">
          <span>
            30-day money-back guarantee.{" "}
            <a
              href="#refund-policy"
              className="underline text-surface-700 hover:text-[#08828f] transition-colors"
            >
              See refund eligibility.
            </a>
          </span>
          <span className="hidden sm:inline text-surface-300">•</span>
          <span>Cancel anytime, export anytime.</span>
          <span className="hidden sm:inline text-surface-300">•</span>
          <span>Up to 100 people on the Pro plan.</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
