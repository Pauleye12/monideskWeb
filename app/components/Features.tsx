import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

interface FeatureBullet {
  label: string;
  icon: (className?: string) => React.ReactNode;
}

interface FeatureTab {
  id: string;
  name: string;
  img: string;
  headline: string;
  description: string;
  bullets: FeatureBullet[];
  card1: {
    title: string;
    meta: string;
    spent: string;
    budget: string;
    percent: number;
    avatarEmoji: string;
  };
  card2: {
    title: string;
    meta: string;
    spent: string;
    budget: string;
    percent: number;
    iconEmoji: string;
    barColor: string;
  };
}

const FEATURE_TABS: FeatureTab[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    img: "/dashboardFeat.png",
    headline: "Instant Analysis at a glance",
    description:
      "Monidesk provides a detailed overview of your business finances, inventory and customers at a single glance. ",
    bullets: [
      {
        label: "Business Insights",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
      },
      {
        label: "Recent Activity",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        ),
      },

      {
        label: "Customer Insights",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ),
      },
      {
        label: "Sales vs Expenditure",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
    ],
    card1: {
      title: "Pets",
      meta: "1 transaction · 135%",
      spent: "€351",
      budget: "€260",
      percent: 135,
      avatarEmoji: "🐶",
    },
    card2: {
      title: "Food & Drinks",
      meta: "8 transactions · 121%",
      spent: "€146",
      budget: "€120",
      percent: 121,
      iconEmoji: "🥦",
      barColor: "bg-rose-500",
    },
  },
  {
    id: "Inventory",
    name: "Inventory Management",
    img: "/inventory.png",
    headline: "Track and Monitor your Inventory with Clarity and Ease",
    description:
      "Monidesk allows you to create your inventory, create variants of each inventory, monitor and track each item, record bad stocks and expirations, and finally Low stock alert .",
    bullets: [
      {
        label: "Monitor Inventory",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        label: "Low stock alerts",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        ),
      },
      {
        label: "Inventory Ledger",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        ),
      },

      {
        label: "Stocks adjustments",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
    card1: {
      title: "Emergency Fund",
      meta: "6 contributions · 84%",
      spent: "€8,400",
      budget: "€10,000",
      percent: 84,
      avatarEmoji: "🛡️",
    },
    card2: {
      title: "Dream Vacation",
      meta: "Automated roundups · 92%",
      spent: "€2,760",
      budget: "€3,000",
      percent: 92,
      iconEmoji: "✈️",
      barColor: "bg-mint-500",
    },
  },
  {
    id: "sales",
    name: "Sales",
    img: "/sales.png",
    headline: "Record, Track and Organize Sales Digitally",
    description:
      "Monidesk helps you record, track and organize your sales all in one go.",
    bullets: [
      {
        label: "Record Sales",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
        ),
      },
      {
        label: "Track Sales",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        label: "Anomaly alerts",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        ),
      },
    ],
    card1: {
      title: "Monthly Burn Rate",
      meta: "-14% vs last month",
      spent: "€1,850",
      budget: "€2,200",
      percent: 84,
      avatarEmoji: "📉",
    },
    card2: {
      title: "Investment Portfolio",
      meta: "+18.4% YTD · 14 assets",
      spent: "€42,910",
      budget: "€50,000",
      percent: 85,
      iconEmoji: "💎",
      barColor: "bg-cobalt-500",
    },
  },
  {
    id: "Expenses",
    name: "Expenses",
    img: "/expenses.png",
    headline: " Record Your Expenses With Monidesk ",
    description:
      "Monidesk provides a digital record of your expenses  and helps you do the maths to stay informed",
    bullets: [
      {
        label: "Expense Tracking",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        ),
      },
      {
        label: "Profit calculations",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
            />
          </svg>
        ),
      },
    ],
    card1: {
      title: "Chase Checking",
      meta: "Synced 2m ago · Active",
      spent: "€12,450",
      budget: "€15,000",
      percent: 83,
      avatarEmoji: "🏦",
    },
    card2: {
      title: "Stripe Revenue",
      meta: "12 invoices settled today",
      spent: "€4,120",
      budget: "€5,000",
      percent: 82,
      iconEmoji: "⚡",
      barColor: "bg-cobalt-500",
    },
  },
  {
    id: "customers",
    name: "Customers",
    img: "/customer.png",
    headline: "Keep Your Customers Organized and Updated",
    description:
      "Monidesk helps you keep track of all your customers in one central location, manage them and group them.",
    bullets: [
      {
        label: "Customer Organization",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
      {
        label: "Customer Grouping",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
      },
      {
        label: "Custom tags",
        icon: (cls) => (
          <svg
            className={cls}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        ),
      },
    ],
    card1: {
      title: "Tax Statement 2025",
      meta: "Reviewed by controller",
      spent: "€64,800",
      budget: "€70,000",
      percent: 92,
      avatarEmoji: "📑",
    },
    card2: {
      title: "Quarterly Summary",
      meta: "P&L positive · 98% audited",
      spent: "€18,250",
      budget: "€20,000",
      percent: 91,
      iconEmoji: "📊",
      barColor: "bg-mint-500",
    },
  },
  //   {
  //     id: "loyalty-cards",
  //     name: "Loyalty Cards",
  //     img: "",
  //     headline: "Never miss reward points or member perks",
  //     description:
  //       "Scan and store all your membership barcodes, frequent flyer tiers, and merchant cashback cards in one lightweight digital wallet.",
  //     bullets: [
  //       {
  //         label: "Barcode digitizer",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Real-time points",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Expiry alerts",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Partner cashback",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
  //             />
  //           </svg>
  //         ),
  //       },
  //     ],
  //     card1: {
  //       title: "Airline Miles",
  //       meta: "Silver status · 48,200 pts",
  //       spent: "€320",
  //       budget: "€500",
  //       percent: 64,
  //       avatarEmoji: "✈️",
  //     },
  //     card2: {
  //       title: "Grocery Rewards",
  //       meta: "€45 cashback voucher available",
  //       spent: "€280",
  //       budget: "€300",
  //       percent: 93,
  //       iconEmoji: "🛒",
  //       barColor: "bg-gold-500",
  //     },
  //   },
  //   {
  //     id: "documents",
  //     name: "Documents",
  //     img: "",
  //     headline: "Bank-grade encrypted vault for records",
  //     description:
  //       "Attach receipts, warranties, contracts, and insurance slips directly to corresponding transactions with automatic OCR metadata extraction.",
  //     bullets: [
  //       {
  //         label: "AES-256 encryption",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "OCR receipt scan",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Smart tag indexing",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Instant cloud recall",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  //             />
  //           </svg>
  //         ),
  //       },
  //     ],
  //     card1: {
  //       title: "Health Insurance 2026",
  //       meta: "Policy slip · Encrypted",
  //       spent: "€1,200",
  //       budget: "€1,200",
  //       percent: 100,
  //       avatarEmoji: "📋",
  //     },
  //     card2: {
  //       title: "MacBook Warranty",
  //       meta: "Auto-matched to Apple receipt",
  //       spent: "€2,499",
  //       budget: "€2,499",
  //       percent: 100,
  //       iconEmoji: "💻",
  //       barColor: "bg-cobalt-500",
  //     },
  //   },
  //   {
  //     id: "debts-loans",
  //     name: "Debts & Loans",
  //     img: "",
  //     headline: "Accelerate your debt-free timeline",
  //     description:
  //       "Compare Avalanche versus Snowball repayment models, project amortized interest savings, and celebrate debt-free milestones.",
  //     bullets: [
  //       {
  //         label: "Avalanche & Snowball",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M13 10V3L4 14h7v7l9-11h-7z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Amortization chart",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Extra payment tool",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         label: "Interest savings meter",
  //         icon: (cls) => (
  //           <svg
  //             className={cls}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  //             />
  //           </svg>
  //         ),
  //       },
  //     ],
  //     card1: {
  //       title: "Student Loan",
  //       meta: "18 months left · On track",
  //       spent: "€4,800",
  //       budget: "€12,000",
  //       percent: 40,
  //       avatarEmoji: "🎓",
  //     },
  //     card2: {
  //       title: "Home Mortgage",
  //       meta: "Extra payment saved €4,100",
  //       spent: "€142,000",
  //       budget: "€210,000",
  //       percent: 68,
  //       iconEmoji: "🏡",
  //       barColor: "bg-mint-500",
  //     },
  //   },
];

export const Features: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(FEATURE_TABS[0].id);
  const [direction, setDirection] = useState<number>(0);

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTabId) return;
    const currentIndex = FEATURE_TABS.findIndex(
      (tab) => tab.id === activeTabId,
    );
    const nextIndex = FEATURE_TABS.findIndex((tab) => tab.id === newTabId);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTabId(newTabId);
  };

  const currentTab =
    FEATURE_TABS.find((tab) => tab.id === activeTabId) || FEATURE_TABS[0];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 36 : dir < 0 ? -36 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 32 },
        opacity: { duration: 0.28, ease: "easeOut" },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -36 : dir < 0 ? 36 : 0,
      opacity: 0,
      transition: {
        x: { duration: 0.2, ease: "easeIn" },
        opacity: { duration: 0.18, ease: "easeIn" },
      },
    }),
  };

  return (
    <section
      id="features"
      className="relative py-24 sm:py-32 overflow-hidden bg-surface-canvas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-surface-900 tracking-tight leading-[1.15]">
            Managing your business finances starts with Monidesk
          </h2>
          <p className="font-sans text-sm sm:text-base text-surface-500 mt-4 leading-relaxed">
            A clear financial overview and tracking brings peace of mind, while
            a budgeting app provides insights and helps you save smarter.
            Business finance is key to managing daily needs and planning for the
            future.
          </p>
        </motion.div>

        {/* Overlapping Tabs + Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative"
        >
          {/* Tab Switcher Pills Overlaying the top border of the content card */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar gap-1.5 px-3 sm:px-6 relative z-20">
            {FEATURE_TABS.map((tab) => {
              const isActive = tab.id === currentTab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? "text-mint-950 font-bold"
                      : "bg-white hover:bg-surface-50 text-surface-600 hover:text-surface-900 border border-surface-200/70 shadow-xs"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTabIndicator"
                      className="absolute inset-0 bg-[#d8f5ec] border border-mint-200/90 rounded-t-xl shadow-xs z-0"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Main Showcase Big Rounded Card */}
          <div className="rounded-3xl lg:rounded-[2.5rem] bg-linear-to-br from-mint-50/70 via-surface-50/50 to-cobalt-100/30 border border-mint-100 pt-12 sm:pt-16 p-6 sm:p-10 lg:p-14 shadow-soft overflow-hidden min-h-135 flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTab.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Left Content Column */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Vibrant 3D Torus / Ring Icon badge */}
                  <div className="w-12 h-12 rounded-full p-1 bg-white shadow-xs border border-surface-200/50 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        stroke="url(#ring-grad-1)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="60 30"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        stroke="url(#ring-grad-2)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="25 65"
                        strokeDashoffset="-40"
                      />
                      <defs>
                        <linearGradient
                          id="ring-grad-1"
                          x1="0"
                          y1="0"
                          x2="36"
                          y2="36"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#f97316" />
                          <stop offset="0.5" stopColor="#ec4899" />
                          <stop offset="1" stopColor="#497cf2" />
                        </linearGradient>
                        <linearGradient
                          id="ring-grad-2"
                          x1="36"
                          y1="0"
                          x2="0"
                          y2="36"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#27c25c" />
                          <stop offset="1" stopColor="#f8c20d" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Headline */}
                  <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-surface-900 tracking-tight leading-tight">
                    {currentTab.headline}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-surface-600 leading-relaxed max-w-lg">
                    {currentTab.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://monidesk-frontend-dev-i3pu.onrender.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-surface-900 hover:bg-surface-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Get Started
                    </a>
                    <a
                      href="#learn-more"
                      className="px-6 py-3 rounded-full bg-white hover:bg-surface-50 text-surface-800 border border-surface-200/80 font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* 4 Feature Bullets (2x2 Grid) */}
                  <div className="pt-8 border-t border-surface-200/60 grid grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm font-semibold text-surface-800">
                    {currentTab.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="text-surface-700 shrink-0">
                          {bullet.icon("w-4 h-4")}
                        </div>
                        <span className="truncate">{bullet.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Visual Dashboard Mockup Column */}
                <div className="lg:col-span-7 relative flex justify-center">
                  <div className="relative w-full rounded-3xl bg-linear-to-br from-mint-50/70 via-white/70 to-cobalt-100/40 p-4 flex items-center justify-center border border-white/80 shadow-xs min-h-115 overflow-visible">
                    {/* Animated Image Preview Container */}
                    <motion.div
                      key={`img-wrap-${currentTab.id}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.38,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.04,
                      }}
                      className="relative flex justify-center items-center py-4"
                    >
                      <img
                        src={currentTab.img}
                        alt={`${currentTab.name} Preview`}
                        className="max-h-95 sm:max-h-110 scale-115 w-auto object-contain rounded-2xl drop-shadow-2xl transition-all duration-500 hover:scale-[1.2]"
                        loading="eager"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
