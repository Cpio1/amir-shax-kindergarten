"use client";

import { useLang } from "../LanguageProvider";
import { Star } from "../Decor";
import type { Lang } from "@/lib/i18n";

/** Порядок разделов мобильной версии (совпадает с мобильным меню) */
export const M_NAV = ["home", "about", "groups", "nutrition", "classes", "gallery", "documents", "contact"] as const;
export type MNavId = (typeof M_NAV)[number];

/** id мобильных секций с префиксом, чтобы не конфликтовать с десктопными (#about и т.д.) */
export const mId = (id: string) => `m-${id}`;

export const isMNavId = (id: string): id is MNavId => (M_NAV as readonly string[]).includes(id);

/** Плавная прокрутка к мобильной секции с учётом высоты фиксированной шапки */
export function scrollToSection(id: MNavId, smooth = true) {
  const el = document.getElementById(mId(id));
  if (!el) return;
  const header = document.getElementById("m-header")?.offsetHeight ?? 64;
  const top = id === "home" ? 0 : el.getBoundingClientRect().top + window.scrollY - header + 2;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: smooth && !reduce ? "smooth" : "auto" });
  // Единый URL: в адресе тот же #about, что и у десктопной версии
  history.replaceState(null, "", id === "home" ? window.location.pathname + window.location.search : `#${id}`);
}

const tones = {
  sun: { chip: "bg-sun-soft text-sun-deep", line: "#ffc94d" },
  leaf: { chip: "bg-leaf-soft text-leaf-deep", line: "#9fd9a6" },
  sky: { chip: "bg-sky-soft text-sky-deep", line: "#a9dbf5" },
  peach: { chip: "bg-peach-soft text-peach-deep", line: "#ffb89c" },
  white: { chip: "bg-white text-ink-soft", line: "#ffc94d" },
} as const;

/** Компактный заголовок раздела с волнистым подчёркиванием */
export function MTitle({
  eyebrow,
  title,
  lead,
  tone = "sun",
  center = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: keyof typeof tones;
  center?: boolean;
}) {
  const tn = tones[tone];
  return (
    <div className={center ? "text-center" : ""}>
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.72rem] font-extrabold tracking-wide ${tn.chip}`}>
        <Star className="h-3 w-3" fill="currentColor" />
        {eyebrow}
      </span>
      <h2 className={`relative mt-2.5 block w-fit font-display text-[1.6rem] leading-tight font-bold text-ink min-[400px]:text-[1.75rem] ${center ? "mx-auto" : ""}`}>
        {title}
        <svg viewBox="0 0 120 10" preserveAspectRatio="none" className="absolute -bottom-1.5 left-0 h-2 w-[min(100%,7rem)]" aria-hidden="true">
          <path d="M2 6c12-6 22 4 34-1s22-5 34 0 22 5 34-1 10-3 14-2" stroke={tn.line} strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </h2>
      {lead && <p className={`mt-4 text-[0.98rem] leading-relaxed text-ink-soft ${center ? "mx-auto max-w-md" : ""}`}>{lead}</p>}
    </div>
  );
}

/** Переключатель языка ҚАЗ / РУС */
export function MLangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const opts: { id: Lang; label: string }[] = [
    { id: "kk", label: "ҚАЗ" },
    { id: "ru", label: "РУС" },
  ];
  return (
    <div role="group" aria-label="Тіл / Язык" className={`relative flex rounded-full bg-cream-deep p-0.5 text-[0.7rem] font-extrabold ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-sun shadow-sm transition-transform duration-300 ${
          lang === "ru" ? "translate-x-full" : ""
        }`}
      />
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={`relative z-10 w-10 rounded-full py-1.5 transition-colors ${lang === o.id ? "text-ink" : "text-ink-soft"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
