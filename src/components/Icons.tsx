type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconClock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IconPin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const IconUsers = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19c.8-3.4 3.2-5 6-5s5.2 1.6 6 5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M16.5 14c2.3.2 3.8 1.6 4.5 4" />
  </svg>
);
export const IconBaby = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0" />
    <path d="M12 3c-1 1.5-.5 3 1 3" />
  </svg>
);
export const IconBowl = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M3 11h18a9 9 0 0 1-18 0Z" />
    <path d="M9 7c0-1.5 1-1.5 1-3M13 7c0-1.5 1-1.5 1-3" />
  </svg>
);
export const IconChat = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M4 17.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 3.5Z" />
    <path d="M8.5 9h7M8.5 12.5h4.5" />
  </svg>
);
export const IconHeart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
  </svg>
);
export const IconSun = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const IconFolder = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M8 13h8M8 16h5" />
  </svg>
);
export const IconArrow = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconExternal = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
  </svg>
);
export const IconWhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.9L2.3 21.8l4.8-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.3 1 2.5.1.2 1.7 2.6 4.2 3.7 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3Z" />
  </svg>
);
export const IconInstagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
  </svg>
);
export const IconImage = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="9" cy="10" r="2" />
    <path d="m21 16-5-5-9 9" />
  </svg>
);

/* ---------- Детские иллюстрации ---------- */

export const IllDuck = ({ className }: P) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
    <ellipse cx="40" cy="56" rx="24" ry="16" fill="#ffc94d" />
    <circle cx="46" cy="32" r="14" fill="#ffc94d" />
    <path d="M58 33l10 2-10 4Z" fill="#e0704a" />
    <circle cx="49" cy="29" r="2.4" fill="#3b3352" />
    <path d="M26 54c6 4 14 4 18-2" stroke="#e9a316" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M46 18c-2-4 2-7 4-5" stroke="#e9a316" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);
export const IllBear = ({ className }: P) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
    <circle cx="22" cy="24" r="9" fill="#e9b48a" />
    <circle cx="58" cy="24" r="9" fill="#e9b48a" />
    <circle cx="22" cy="24" r="4.5" fill="#ffb89c" />
    <circle cx="58" cy="24" r="4.5" fill="#ffb89c" />
    <circle cx="40" cy="44" r="25" fill="#e9b48a" />
    <ellipse cx="40" cy="53" rx="11" ry="8" fill="#fbe1c8" />
    <circle cx="31" cy="40" r="2.6" fill="#3b3352" />
    <circle cx="49" cy="40" r="2.6" fill="#3b3352" />
    <ellipse cx="40" cy="50" rx="3.6" ry="2.6" fill="#3b3352" />
    <path d="M36 56c2.5 2 5.5 2 8 0" stroke="#3b3352" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);
export const IllKite = ({ className }: P) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
    <path d="M40 6 62 30 40 56 18 30Z" fill="#a9dbf5" />
    <path d="M40 6v50M18 30h44" stroke="#fff" strokeWidth="2.5" />
    <path d="M40 6 62 30H40Z" fill="#3584b8" opacity=".35" />
    <path d="M40 56c-4 6 4 8 0 14s4 6 2 8" stroke="#3b3352" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M37 64l-5 2 5 2ZM43 72l5-2-5-2Z" fill="#ffb89c" />
  </svg>
);
export const IllBackpack = ({ className }: P) => (
  <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
    <path d="M30 18a10 10 0 0 1 20 0" stroke="#3d9358" strokeWidth="4" fill="none" />
    <rect x="16" y="18" width="48" height="54" rx="16" fill="#9fd9a6" />
    <rect x="24" y="44" width="32" height="20" rx="7" fill="#3d9358" opacity=".8" />
    <path d="M24 52h32" stroke="#def3dc" strokeWidth="2.5" />
    <circle cx="40" cy="31" r="5" fill="#ffc94d" />
  </svg>
);

/* Иллюстрации к дополнительным занятиям */
export const IllSpeech = ({ className }: P) => (
  <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
    <path d="M14 24a12 12 0 0 1 12-12h36a12 12 0 0 1 12 12v22a12 12 0 0 1-12 12H36L20 70V58a12 12 0 0 1-6-10Z" fill="#ffb89c" />
    <path d="M30 32c4-5 8 5 12 0s8 5 12 0" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <circle cx="74" cy="64" r="14" fill="#ffc94d" />
    <path d="M68 62h.1M80 62h.1" stroke="#3b3352" strokeWidth="3.2" strokeLinecap="round" />
    <ellipse cx="74" cy="69" rx="3.2" ry="3.8" fill="#3b3352" />
    <path d="M86 46c3 3 3 9 0 12M90 42c5 5 5 15 0 20" stroke="#e0704a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);
export const IllBrain = ({ className }: P) => (
  <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
    <path d="M48 18c-5-6-16-6-20 1-8 0-13 8-10 15-6 5-5 15 2 18-1 8 7 14 14 11 4 6 12 6 14 0Z" fill="#a9dbf5" />
    <path d="M48 18c5-6 16-6 20 1 8 0 13 8 10 15 6 5 5 15-2 18 1 8-7 14-14 11-4 6-12 6-14 0Z" fill="#c6e8f8" />
    <path d="M48 18v45M32 30c4 2 6 6 4 10M30 48c4-1 8 1 9 5M64 30c-4 2-6 6-4 10M66 48c-4-1-8 1-9 5" stroke="#3584b8" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    <circle cx="22" cy="78" r="6" fill="#9fd9a6" />
    <circle cx="48" cy="82" r="6" fill="#ffc94d" />
    <circle cx="74" cy="78" r="6" fill="#ffb89c" />
    <path d="M28 78h14M54 82l14-4" stroke="#6c6582" strokeWidth="2" strokeDasharray="2 3" />
  </svg>
);
export const IllPuzzle = ({ className }: P) => (
  <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
    <path d="M14 20h22c-3-9 13-9 10 0h10v12c9-3 9 13 0 10v12H44c3 9-13 9-10 0H14Z" fill="#9fd9a6" />
    <path d="M56 42h26v32H56V62c-9 3-9-13 0-10Z" fill="#ffc94d" />
    <path d="M14 54h20c-3 9 13 9 10 0h12v20H14Z" fill="#ffb89c" />
    <circle cx="32" cy="34" r="3" fill="#3d9358" />
    <path d="M66 58h.1M74 58h.1" stroke="#3b3352" strokeWidth="3" strokeLinecap="round" />
    <path d="M66 64c3 3 6 3 8 0" stroke="#3b3352" strokeWidth="2.2" fill="none" strokeLinecap="round" />
  </svg>
);
export const IllSalt = ({ className }: P) => (
  <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
    <path d="M10 82c6-26 20-40 38-40s32 14 38 40Z" fill="#ffe4d7" />
    <path d="M24 82 34 52l8 30M52 82l10-34 12 34" fill="#ffd3bf" />
    <path d="M38 30 46 12l8 18-8 10Z" fill="#fff" stroke="#a9dbf5" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M18 40 23 30l5 10-5 6Z" fill="#fff" stroke="#ffb89c" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M68 38l5-10 5 10-5 6Z" fill="#fff" stroke="#9fd9a6" strokeWidth="2.2" strokeLinejoin="round" />
    <circle cx="30" cy="66" r="2" fill="#fff" />
    <circle cx="64" cy="70" r="2.4" fill="#fff" />
    <circle cx="48" cy="60" r="1.8" fill="#fff" />
    <path d="M10 82h76" stroke="#e0704a" strokeWidth="2.5" strokeLinecap="round" opacity=".5" />
  </svg>
);

/* Еда */
export const IllApple = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M32 18c-10-6-22 0-22 14 0 14 10 26 22 22 12 4 22-8 22-22 0-14-12-20-22-14Z" fill="#ff8f73" />
    <path d="M32 18c0-6 2-9 5-11" stroke="#3b3352" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M34 12c4-5 11-4 12-1-4 4-9 4-12 1Z" fill="#3d9358" />
    <ellipse cx="22" cy="30" rx="3" ry="5" fill="#fff" opacity=".5" />
  </svg>
);
export const IllCarrot = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M44 20 14 54c-2 2 0 4 2 2l34-30Z" fill="#ffa45c" />
    <path d="M44 20c0-8 4-12 8-14M46 22c6-2 12 0 14 2M44 20c-4-6-2-12 0-14" stroke="#3d9358" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M30 38l5 3M24 45l4 2" stroke="#e0704a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
export const IllMilk = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M22 14h20v8l6 10v24a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V32l6-10Z" fill="#fff" stroke="#a9dbf5" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="22" y="8" width="20" height="7" rx="2" fill="#3584b8" />
    <path d="M16 38h32v10H16Z" fill="#a9dbf5" />
    <circle cx="32" cy="43" r="2.5" fill="#fff" />
  </svg>
);
export const IllBread = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M10 30c0-10 10-16 22-16s22 6 22 16c0 4-3 5-5 5v17a4 4 0 0 1-4 4H19a4 4 0 0 1-4-4V35c-2 0-5-1-5-5Z" fill="#f6c27a" />
    <path d="M24 30c2-3 4-3 6 0M34 30c2-3 4-3 6 0" stroke="#d69238" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);
export const IllPear = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M32 14c-6 0-8 8-8 14-8 4-12 10-12 17 0 9 9 14 20 14s20-5 20-14c0-7-4-13-12-17 0-6-2-14-8-14Z" fill="#b9e08a" />
    <path d="M32 14c0-4 1-6 3-8" stroke="#3b3352" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M35 9c4-3 9-2 10 0-3 3-7 3-10 0Z" fill="#3d9358" />
  </svg>
);
export const IllSoup = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M24 16c0-4 3-4 3-8M32 16c0-4 3-4 3-8M40 16c0-4 3-4 3-8" stroke="#ffb89c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M8 28h48c0 14-10 24-24 24S8 42 8 28Z" fill="#a9dbf5" />
    <ellipse cx="32" cy="28" rx="24" ry="5" fill="#ffc94d" />
    <circle cx="24" cy="27" r="2" fill="#e0704a" />
    <circle cx="38" cy="28" r="2.2" fill="#3d9358" />
    <path d="M22 54h20" stroke="#3584b8" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
