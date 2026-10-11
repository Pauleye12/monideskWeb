import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "what-is-monidesk",
    question: "What is MoniDesk?",
    answer:
      "MoniDesk is a unified financial intelligence and workspace operating system designed for modern finance and executive teams. It consolidates ledger telemetry, live bank accounts, CRM data, and team workflows into one real-time surface with zero per-user seat penalties.",
  },
  {
    id: "who-is-it-for",
    question: "Who is MoniDesk for?",
    answer:
      "It is built for fast-growing startups, multi-entity holdings, and forward-thinking finance leaders who need real-time clarity across liquidity, runway, and deliverables without juggling fragmented spreadsheets and outdated SaaS tools.",
  },
  {
    id: "how-is-it-different",
    question: "How is MoniDesk different from a project management tool?",
    answer:
      "Traditional tools treat tasks in isolation. MoniDesk bridges operational deliverables directly with real-time financial telemetry, cash allocation horizons, and public transparency boards so every initiative connects to verified bottom-line impact.",
  },
  {
    id: "chatgpt-claude-ai",
    question: "What can ChatGPT or Claude do with MoniDesk?",
    answer:
      "AI models connected to MoniDesk can analyze incoming receipts, automate multi-currency ledger reconciliations, surface anomalies in burn rate, synthesize team progress updates, and answer natural language financial inquiries based on verified company data.",
  },
  {
    id: "ai-agent-access",
    question: "What can an AI agent access in MoniDesk?",
    answer:
      "All workspace data is governed by strict role-based access controls (RBAC). AI agents only access documents and metrics explicitly authorized by workspace administrators, running within isolated sandbox environments with comprehensive SOC-2 compliant audit logging.",
  },
  {
    id: "use-without-ai",
    question: "Can we use MoniDesk without AI?",
    answer:
      "Absolutely. Every core capability—including real-time reporting, task planning, treasury dashboards, and client tracking boards—operates independently with full manual and deterministic rule-based controls.",
  },
  {
    id: "move-existing-data",
    question: "How do we move existing data into MoniDesk?",
    answer:
      "We offer one-click automated importers for Notion, Jira, Linear, QuickBooks, and Xero, alongside standard CSV/JSON sync APIs. Our dedicated onboarding team also assists with custom database migrations for larger organizations.",
  },
  {
    id: "connect-existing-tools",
    question: "Can MoniDesk connect to the tools we already use?",
    answer:
      "Yes. MoniDesk integrates seamlessly with Stripe, Plaid, Google Workspace, Slack, GitHub, HubSpot, and over 100+ native banking rails via open REST and webhook architecture.",
  },
  {
    id: "pricing-scaling",
    question: "How much does MoniDesk cost?",
    answer:
      "Unlike legacy seat-taxed software, MoniDesk features flat organizational plans. Our Pro Plan supports up to 100 collaborators with no incremental user fees, ensuring every contributor can participate freely.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 overflow-hidden bg-surface-canvas border-t border-surface-100"
    >
      {/* Delicate background ambient glow matching codebase theme */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cobalt-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-mint-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subtitle & Demo link */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-surface-900 tracking-tight leading-[1.08]">
              Get the context.
            </h2>

            <div className="mt-6 sm:mt-8 space-y-3">
              <p className="font-sans text-base sm:text-lg text-surface-500">
                Have a workflow you want to check?
              </p>
              <div>
                <a
                  href="#contact"
                  className="font-sans font-semibold text-base sm:text-lg text-cobalt-600 hover:text-cobalt-700 underline underline-offset-4 transition-colors inline-block"
                >
                  Bring it to a demo.
                </a>
              </div>
            </div>

            {/* Quick contact badge */}
            <div className="mt-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-50 border border-surface-200/80 text-xs text-surface-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-mint-500" />
              <span>Dedicated onboarding for all teams</span>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-7 divide-y divide-surface-200/80 border-t border-b border-surface-200/80">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`font-heading font-semibold text-base sm:text-lg transition-colors pr-6 ${
                        isOpen
                          ? "text-cobalt-600"
                          : "text-surface-800 group-hover:text-cobalt-600"
                      }`}
                    >
                      {item.question}
                    </span>

                    {/* Plus / Minus indicator button */}
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-cobalt-100 text-cobalt-700 rotate-45"
                          : "bg-surface-50 border border-surface-200/80 text-surface-400 group-hover:border-surface-300 group-hover:text-surface-700"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable answer panel */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-sm sm:text-base text-surface-500 leading-relaxed pr-6 sm:pr-10">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
