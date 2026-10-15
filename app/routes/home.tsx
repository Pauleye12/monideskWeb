import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import TrustedPartners from "../components/TrustedPartners";
import ProblemSolution from "../components/ProblemSolution";
import Features from "../components/Features";
import GettingStarted from "../components/GettingStarted";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import FInalCall from "../components/FInalCall";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UnBound X / MoniDesk — Modern Financial Intelligence" },
    {
      name: "description",
      content:
        "High-precision fintech workspace with fluid floating navigation and real-time revenue analytics.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-canvas text-surface-900 selection:bg-cobalt-100 selection:text-cobalt-700">
      {/* Dynamic Floating Navbar: Flat on first render, reshapes to floating rounded pill on 100px scroll */}
      <Navbar
        brandName="UnBound X"
        items={[
          { label: "Home", href: "#home" },
          // { label: "", href: "#ubverse" },
          { label: "Features", href: "#features" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaText="Get started"
        ctaHref="https://monidesk-frontend-dev-i3pu.onrender.com/login"
      />

      {/* Hero Section */}
      <Herosection />

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* Problem & Solution Comparison Section */}
      <ProblemSolution />

      {/* Interactive Features Showcase Section */}
      <Features />

      {/* Where a Thesis Goes to Work Section */}
      <GettingStarted />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final Call CTA Section */}
      <FInalCall />

      {/* Footer Section */}
      <Footer />

      {/* UBverse Section */}
      {/* <section id="ubverse" className="py-24 bg-surface-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cobalt-100 text-cobalt-700 mb-3">
              UBverse Ecosystem
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-surface-900 tracking-tight">
              A single operating system for global liquidity
            </h2>
            <p className="mt-4 text-base sm:text-lg text-surface-500">
              UnBound X bridges traditional multi-currency banking rails with
              on-chain liquidity, giving your finance team superpowers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-surface-200/80 shadow-soft transition-transform duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cobalt-100 flex items-center justify-center text-cobalt-700 mb-6 font-bold text-xl">
                01
              </div>
              <h3 className="font-heading font-bold text-xl text-surface-900 mb-3">
                Automated Reconciliation
              </h3>
              <p className="text-surface-500 text-sm leading-relaxed">
                Connect your Stripe, banking feeds, and custody accounts with
                sub-second auto-ledgering and zero manual spreadsheets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-surface-200/80 shadow-soft transition-transform duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-mint-100 flex items-center justify-center text-mint-700 mb-6 font-bold text-xl">
                02
              </div>
              <h3 className="font-heading font-bold text-xl text-surface-900 mb-3">
                Yield Maximization
              </h3>
              <p className="text-surface-500 text-sm leading-relaxed">
                Automatically allocate idle cash into safe, short-duration
                treasury instruments delivering top-tier risk-adjusted APY.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-surface-200/80 shadow-soft transition-transform duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center text-amber-700 mb-6 font-bold text-xl">
                03
              </div>
              <h3 className="font-heading font-bold text-xl text-surface-900 mb-3">
                Multi-Entity Visibility
              </h3>
              <p className="text-surface-500 text-sm leading-relaxed">
                Consolidate international subsidiaries, currencies, and tax
                jurisdictions into clean, auditable boards with roll-up charts.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section id="features" className="py-24 bg-surface-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-mint-100 text-mint-700">
                Precision Insights
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-surface-900 tracking-tight leading-tight">
                Designed to give modern CFOs complete operational confidence
              </h2>
              <p className="text-surface-500 text-base leading-relaxed">
                Stop waiting for month-end close. Monitor incoming runway,
                recurring MRR fluctuations, and burn volatility in real-time
                with continuous anomaly detection.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Live scenario planning with parameterized forecasts",
                  "Automated burn rate alerts and runway guardrails",
                  "One-click SOC-2 compliant audit exports",
                  "Custom role-based permissions for founders & controllers",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-mint-500 text-white flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-surface-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-surface-900 text-white shadow-soft">
              <div className="flex items-center justify-between pb-6 border-b border-surface-800">
                <div>
                  <div className="text-xs text-surface-300">
                    Total Treasury Balance
                  </div>
                  <div className="text-3xl font-heading font-bold mt-1">
                    $14,290,410.50
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-mint-500/20 text-mint-500 text-xs font-semibold">
                  +18.4% YoY
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-surface-800/60 border border-surface-700">
                  <div className="text-xs text-surface-300">Net Cash Flow</div>
                  <div className="text-lg font-bold mt-1 text-mint-500">
                    +$284,100 / mo
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-800/60 border border-surface-700">
                  <div className="text-xs text-surface-300">Runway</div>
                  <div className="text-lg font-bold mt-1 text-cobalt-300">
                    38.4 months
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-800 text-xs text-surface-300 flex justify-between items-center">
                <span>Synchronized across 8 accounts</span>
                <span className="text-cobalt-300 font-semibold cursor-pointer hover:underline">
                  View Full Breakdown &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing / CTA Section */}
      {/* <section
        id="pricing"
        className="py-24 bg-surface-50 border-t border-surface-100"
      >
        <div
          id="get-started"
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8"
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-surface-900 tracking-tight">
            Ready to upgrade your financial command center?
          </h2>
          <p className="text-base sm:text-lg text-surface-500 max-w-xl mx-auto">
            Get started in less than 5 minutes. No credit card required. Cancel
            or upgrade anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#signup"
              className="px-8 py-3.5 rounded-full bg-surface-900 hover:bg-surface-800 text-white font-semibold text-sm shadow-soft transition-all hover:scale-[1.02]"
            >
              Get started for free
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-surface-50 text-surface-800 border border-surface-200 font-semibold text-sm transition-all"
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
