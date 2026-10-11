import React from "react";

interface PartnerLogo {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "iwm",
    name: "IWM Network",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        {/* Isometric 3D Cube with M graph waveform */}
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
          {/* Waveform track */}
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
    id: "ctrl-alt-del",
    name: "Ctrl+Alt+Del",
    renderLogo: () => (
      <div className="flex items-center">
        <svg
          viewBox="0 0 46 42"
          className="w-9 h-8 text-surface-700"
          fill="none"
        >
          {/* Rounded keycap box with speech notch */}
          <path
            d="M6 4 H38 C40.2 4 42 5.8 42 8 V28 C42 30.2 40.2 32 38 32 H14 L8 38 V32 H6 C3.8 32 2 30.2 2 28 V8 C2 5.8 3.8 4 6 4 Z"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="8"
            y="13"
            fontFamily="ui-monospace, monospace"
            fontWeight="700"
            fontSize="7.5"
            fill="currentColor"
          >
            CTRL+
          </text>
          <text
            x="8"
            y="21.5"
            fontFamily="ui-monospace, monospace"
            fontWeight="700"
            fontSize="7.5"
            fill="currentColor"
          >
            ALT+
          </text>
          <text
            x="8"
            y="30"
            fontFamily="ui-monospace, monospace"
            fontWeight="800"
            fontSize="7.5"
            fill="currentColor"
          >
            DEL
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "zikol",
    name: "Zikol",
    renderLogo: () => (
      <div className="flex flex-col items-center leading-none">
        <div className="flex items-baseline">
          <span className="font-heading font-black text-xl tracking-wider text-surface-800">
            ZIK
          </span>
          {/* Stylized O with house silhouette */}
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
  {
    id: "synapse",
    name: "Synapse Aviation",
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
    id: "alme-law",
    name: "Alme Law",
    renderLogo: () => (
      <div className="flex flex-col items-center text-center leading-none">
        {/* Classical Law Column Icon */}
        <svg
          viewBox="0 0 28 22"
          className="w-6 h-5 text-surface-500 mb-1"
          fill="currentColor"
        >
          {/* Capital */}
          <path
            d="M2 3 H26 V5 C26 6.5 24.5 7.5 23 7.5 H5 C3.5 7.5 2 6.5 2 5 Z"
            opacity="0.85"
          />
          {/* Columns */}
          <rect x="5.5" y="8" width="2" height="10" rx="0.5" />
          <rect x="10.5" y="8" width="2" height="10" rx="0.5" />
          <rect x="15.5" y="8" width="2" height="10" rx="0.5" />
          <rect x="20.5" y="8" width="2" height="10" rx="0.5" />
          {/* Base */}
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
    id: "glitch",
    name: "glitch",
    renderLogo: () => (
      <div className="flex items-center">
        {/* Pixel / Cyber stencil typography */}
        <span className="font-mono font-black text-2xl tracking-tight text-surface-800 select-none">
          gl
          <span className="inline-block relative">
            i
            <span className="absolute -top-1 left-0.5 w-1 h-1 bg-surface-800" />
          </span>
          tch
        </span>
      </div>
    ),
  },
  {
    id: "sport-life",
    name: "Sport Life",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        {/* Runner pictogram inside square */}
        <div className="w-6 h-6 rounded border-2 border-surface-700 flex items-center justify-center p-0.5 shrink-0">
          <svg
            viewBox="0 0 20 20"
            className="w-full h-full text-surface-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="5" r="1.8" fill="currentColor" stroke="none" />
            <path
              d="M12 7 L10 12 L14 14 M10 12 L7 17 M9 9 L13 10 L15 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="font-heading font-bold text-[13px] tracking-wide text-surface-800 uppercase">
          Sport Life
        </span>
      </div>
    ),
  },
  {
    id: "xessable",
    name: "Xessable",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        {/* Multifaceted geometric crystal mark */}
        <svg
          viewBox="0 0 28 28"
          className="w-6 h-6 text-surface-700 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M14 2 L24 8 V20 L14 26 L4 20 V8 Z" strokeLinejoin="round" />
          <path d="M14 2 V26" />
          <path d="M4 8 L14 14 L24 8" />
          <path d="M4 20 L14 14 L24 20" />
        </svg>
        <span className="font-sans font-bold text-[10px] tracking-[0.28em] text-surface-800 uppercase">
          Xessable
        </span>
      </div>
    ),
  },
  {
    id: "finki",
    name: "Faculty of Computer Science and Engineering",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        {/* IO Bold Monogram */}
        <div className="flex items-center shrink-0">
          <div className="w-2.5 h-6 rounded-xs bg-surface-700 mr-1" />
          <div className="w-5 h-5 rounded-full border-[3.5px] border-surface-700" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-sans text-[5.5px] text-surface-400 font-medium">
            Ss. Cyril and Methodius University in Skopje
          </span>
          <span className="font-heading font-bold text-[7px] tracking-tight text-surface-800">
            FACULTY OF COMPUTER
          </span>
          <span className="font-heading font-bold text-[7px] tracking-tight text-surface-800">
            SCIENCE AND ENGINEERING
          </span>
        </div>
      </div>
    ),
  },
];

export const TrustedPartners: React.FC = () => {
  return (
    <section className="relative py-14 overflow-hidden bg-surface-canvas border-y border-surface-100">
      {/* Delicate Atmospheric Ambient Glow matching the screenshot's soft cyan/mint tint on the right */}
      <div className="absolute top-0 right-0 w-125 h-full bg-linear-to-l from-mint-700/20 to-mint-500/20  z-10 pointer-events-none blur-3xl " />

      {/* Subtle Architectural Technical Grid Background Lines */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 234, 244, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 234, 244, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: "180px 72px",
          backgroundPosition: "center top",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Small Uppercase Header Title */}
        <div className="text-center mb-9">
          <p className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-surface-500 uppercase">
            Already part of the working day at
          </p>
        </div>
      </div>

      {/* Logos Container with Left/Right Soft Fade Masks and Infinite Smooth Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Soft Left & Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-surface-canvas via-surface-canvas/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-surface-canvas via-surface-canvas/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track: Double list for continuous seamless looping */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] border-y border-surface-200/50 bg-white/40 backdrop-blur-[2px]">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center justify-center w-48 sm:w-56 h-24 px-6 border-r border-surface-200/50 transition-all duration-200 opacity-75 hover:opacity-100 hover:bg-surface-50/50 group"
              title={partner.name}
            >
              <div className="transition-transform duration-200 group-hover:scale-105">
                {partner.renderLogo()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
