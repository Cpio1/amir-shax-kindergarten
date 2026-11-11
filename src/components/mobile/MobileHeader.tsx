"use client";

import { useEffect, useState } from "react";
import { useLang } from "../LanguageProvider";
import { Cloud, Flower, Star, SunDecor } from "../Decor";
import { IconBowl, IconChat, IconClock, IconFolder, IconHeart, IconImage, IconPin, IconSun, IconUsers } from "../Icons";
import { M_NAV, MLangToggle, mId, scrollToSection, type MNavId } from "./shared";

const navStyle: Record<MNavId, { icon: (p: { className?: string }) => React.ReactElement; bg: string; ic: string }> = {
  home: { icon: IconSun, bg: "bg-sun-soft", ic: "bg-sun text-white" },
  about: { icon: IconHeart, bg: "bg-peach-soft", ic: "bg-peach text-white" },
  groups: { icon: IconUsers, bg: "bg-sky-soft", ic: "bg-sky text-white" },
  nutrition: { icon: IconBowl, bg: "bg-leaf-soft", ic: "bg-leaf text-white" },
  classes: { icon: IconChat, bg: "bg-sun-soft", ic: "bg-sun text-white" },
  gallery: { icon: IconImage, bg: "bg-peach-soft", ic: "bg-peach text-white" },
  documents: { icon: IconFolder, bg: "bg-sky-soft", ic: "bg-sky text-white" },
  contact: { icon: IconPin, bg: "bg-leaf-soft", ic: "bg-leaf text-white" },
};
const itemShapes = [
  "rounded-[1.6rem_1.6rem_1.6rem_0.5rem]",
  "rounded-[0.5rem_1.6rem_1.6rem_1.6rem]",
  "rounded-[1.6rem_0.5rem_1.6rem_1.6rem]",
  "rounded-[1.6rem_1.6rem_0.5rem_1.6rem]",
];

export function MobileHeader() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<MNavId>("home");

  const label = (id: MNavId) => (id === "classes" ? t.mobile.classesNav : t.nav[id]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Активный раздел для подсветки в меню
  useEffect(() => {
    const els = M_NAV.map((id) => document.getElementById(mId(id))).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id.slice(2) as MNavId)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Блокировка прокрутки под меню, Esc и автозакрытие при переходе на десктоп
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const go = (id: MNavId) => {
    setOpen(false);
    // ждём снятия блокировки прокрутки
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(id)));
  };

  return (
    <>
      <header
        id="m-header"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          open ? "bg-transparent" : scrolled ? "bg-cream/90 shadow-[0_8px_24px_-14px_rgba(59,51,82,0.35)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <a
          href="#m-main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          {t.skip}
        </a>
        <div className="flex h-[var(--header-h)] items-center justify-between gap-2 px-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="flex min-w-0 items-center gap-2"
          >
            <SunDecor className="h-9 w-9 shrink-0 animate-[spin_24s_linear_infinite]" />
            <span className="min-w-0 leading-none">
              <span className="block font-display text-[1.05rem] font-bold text-ink">Амир-шах</span>
              <span className="mt-0.5 block truncate text-[0.66rem] font-semibold text-ink-soft">{t.mobile.subtitle}</span>
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <MLangToggle />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="m-menu"
              aria-label={open ? t.closeMenu : t.menu}
              onClick={() => setOpen((v) => !v)}
              className={`blob-1 flex h-11 w-11 items-center justify-center shadow-sm transition-colors duration-300 ${open ? "bg-ink" : "bg-white"}`}
            >
              <span className="relative block h-3.5 w-5">
                <span className={`absolute left-0 h-0.5 rounded transition-all duration-300 ${open ? "top-1.5 w-5 rotate-45 bg-white" : "top-0 w-5 bg-ink"}`} />
                <span className={`absolute top-1.5 left-0 h-0.5 rounded bg-ink transition-all duration-200 ${open ? "w-0 opacity-0" : "w-3.5"}`} />
                <span className={`absolute left-0 h-0.5 rounded transition-all duration-300 ${open ? "top-1.5 w-5 -rotate-45 bg-white" : "top-3 w-4 bg-ink"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Меню раскрывается кругом из кнопки-гамбургера */}
      <div
        id="m-menu"
        aria-hidden={!open}
        inert={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-cream"
        style={{
          clipPath: open ? "circle(150% at calc(100% - 38px) 32px)" : "circle(0px at calc(100% - 38px) 32px)",
          visibility: open ? "visible" : "hidden",
          transition: `clip-path 0.55s cubic-bezier(0.65, 0, 0.35, 1), visibility 0s linear ${open ? "0s" : "0.55s"}`,
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-2 absolute -top-16 -left-20 h-56 w-56 bg-sun-soft/80" />
          <div className="blob-3 absolute -right-24 bottom-10 h-64 w-64 bg-sky-soft" />
          <Cloud className="animate-drift absolute top-24 right-6 w-20" />
          <Star className="animate-float absolute bottom-28 left-6 h-6 w-6" fill="#ffb89c" />
          <Flower className="animate-sway absolute right-8 bottom-6 h-10 w-10" petal="#9fd9a6" />
        </div>

        <nav aria-label={t.menu} className="relative mx-auto max-w-md px-4 pt-[calc(var(--header-h)+0.75rem)] pb-8">
          <ul className="grid grid-cols-2 gap-2.5">
            {M_NAV.map((id, i) => {
              const s = navStyle[id];
              const Icon = s.icon;
              const isActive = active === id;
              return (
                <li
                  key={id}
                  className={id === "home" || id === "contact" ? "col-span-2" : ""}
                  style={{
                    transition: "opacity .4s ease, transform .5s cubic-bezier(.2,.8,.2,1)",
                    transitionDelay: open ? `${120 + i * 45}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(14px) scale(.96)",
                  }}
                >
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(id);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex h-full items-center gap-2.5 px-3 py-3 font-bold text-ink transition-transform active:scale-95 ${s.bg} ${itemShapes[i % 4]} ${
                      isActive ? "ring-2 ring-ink/80 ring-offset-2 ring-offset-cream" : ""
                    }`}
                  >
                    <span className={`blob-${(i % 3) + 1} flex h-9 w-9 shrink-0 items-center justify-center ${s.ic}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0 text-[0.92rem] leading-tight">{label(id)}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            className="mt-5 flex items-center gap-3 rounded-[1.4rem_2.4rem_1.4rem_2.4rem] bg-white px-4 py-3.5 shadow-sm"
            style={{ transition: "opacity .5s ease .5s", opacity: open ? 1 : 0 }}
          >
            <span className="blob-2 flex h-10 w-10 shrink-0 items-center justify-center bg-sky text-white">
              <IconClock className="h-5 w-5" />
            </span>
            <div className="min-w-0 text-[0.85rem]">
              <p className="font-bold text-ink-soft">{t.contact.hoursLabel}</p>
              <p className="font-display text-[1.05rem] font-bold text-ink">{t.contact.hours}</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
