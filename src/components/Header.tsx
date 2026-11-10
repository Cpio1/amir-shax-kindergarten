"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
import { SunDecor } from "./Decor";
import type { Lang } from "@/lib/i18n";

export const NAV_IDS = ["home", "about", "groups", "classes", "nutrition", "gallery", "documents", "contact"] as const;

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const opts: { id: Lang; label: string }[] = [
    { id: "kk", label: "ҚАЗ" },
    { id: "ru", label: "РУС" },
  ];
  return (
    <div role="group" aria-label="Тіл / Язык" className={`relative flex rounded-full bg-cream-deep p-1 text-xs font-extrabold ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-sun shadow-sm transition-transform duration-300 ${
          lang === "ru" ? "translate-x-full" : "translate-x-0"
        }`}
        style={{ left: 4 }}
      />
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={`relative z-10 w-11 rounded-full py-1.5 transition-colors ${lang === o.id ? "text-ink" : "text-ink-soft hover:text-ink"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Подсветка активного пункта меню
  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Блокировка прокрутки при открытом мобильном меню
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-cream/90 shadow-[0_6px_24px_-12px_rgba(59,51,82,0.25)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        {t.skip}
      </a>
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <SunDecor className="h-9 w-9 transition-transform duration-500 group-hover:rotate-45 lg:h-10 lg:w-10" />
          <span className="leading-none">
            <span className="block font-display text-[1.08rem] font-bold text-ink">Амир-шах</span>
            <span className="mt-0.5 block text-[0.68rem] font-semibold text-ink-soft">бөбекжай-балабақшасы</span>
          </span>
        </a>

        <nav aria-label="Негізгі мәзір" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative rounded-full px-3 py-2 text-[0.88rem] font-bold transition-colors ${
                    active === id ? "bg-white text-ink shadow-sm" : "text-ink-soft hover:bg-white/70 hover:text-ink"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch className="hidden sm:flex" />
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute top-1.5 left-0 h-0.5 w-5 rounded bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Мобильное меню (вне header: backdrop-filter шапки ломает position: fixed) */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto bg-cream/97 backdrop-blur-md transition-all duration-300 xl:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label={t.menu} className="mx-auto max-w-md px-5 pt-4 pb-10">
          <ul className="grid gap-2">
            {NAV_IDS.map((id, i) => {
              const tints = ["bg-sun-soft", "bg-leaf-soft", "bg-sky-soft", "bg-peach-soft"];
              return (
                <li
                  key={id}
                  className="transition-all duration-300"
                  style={{ transitionDelay: open ? `${i * 35}ms` : "0ms", transform: open ? "none" : "translateY(8px)", opacity: open ? 1 : 0 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-[1.4rem] px-5 py-3.5 text-[1.05rem] font-bold text-ink ${
                      active === id ? tints[i % 4] : "bg-white"
                    } ${i % 2 ? "rounded-tl-md" : "rounded-br-md"}`}
                  >
                    {t.nav[id]}
                    <span className={`h-2.5 w-2.5 rounded-full ${active === id ? "bg-sun-deep" : "bg-cream-deep"}`} />
                  </a>
                </li>
              );
            })}
          </ul>
          <LangSwitch className="mx-auto mt-6 w-max sm:hidden" />
        </nav>
      </div>
    </>
  );
}
