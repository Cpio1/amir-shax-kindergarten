"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { Cloud, Flower, SectionTitle, Star, SunDecor, Wave } from "./Decor";
import { IconImage } from "./Icons";
import { galleryImages } from "@/lib/site";

const INITIAL = 6;
const PLACEHOLDER_COUNT = 9;

/** Разные размеры плиток для заглушек (когда фото ещё нет) */
const tileSpan = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "sm:col-span-2",
  "",
];
const tileShape = [
  "rounded-[2.4rem_1rem_2.4rem_1rem]",
  "rounded-[1rem_2rem_1rem_2rem]",
  "rounded-[2rem]",
  "rounded-[1rem_2.4rem_2.4rem_2.4rem]",
  "rounded-[2rem_2rem_0.8rem_2rem]",
  "rounded-[2.4rem_1rem_2.4rem_1rem]",
];
const tints = [
  "from-sun-soft to-peach-soft",
  "from-sky-soft to-white",
  "from-leaf-soft to-sky-soft",
  "from-peach-soft to-sun-soft",
  "from-white to-leaf-soft",
  "from-sky-soft to-peach-soft",
];
/** Цветная «подложка», выглядывающая из-под фото при наведении */
const ring = ["bg-sun", "bg-sky", "bg-peach", "bg-leaf"];
const decor = [SunDecor, Flower, Cloud, Star];

function Chevron({ dir, className = "" }: { dir: "left" | "right" | "down"; className?: string }) {
  const d = dir === "left" ? "m15 6-6 6 6 6" : dir === "right" ? "m9 6 6 6-6 6" : "m6 9 6 6 6-6";
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function Gallery() {
  const { t, lang } = useLang();
  const g = t.gallery;
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const hasPhotos = galleryImages.length > 0;
  const total = hasPhotos ? galleryImages.length : PLACEHOLDER_COUNT;
  const visible = expanded ? total : Math.min(INITIAL, total);

  return (
    <section id="gallery" className="relative overflow-hidden bg-leaf-soft">
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionTitle eyebrow={g.eyebrow} title={g.title} lead={g.lead} accent="bg-white text-leaf-deep" />
        </Reveal>

        {hasPhotos ? (
          /* Мозаика: каждая плитка сохраняет пропорции фото — лица не обрезаются */
          <ul className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3">
            {galleryImages.slice(0, visible).map((img, i) => (
              <li
                key={img.src}
                className="mb-3 break-inside-avoid sm:mb-4"
                style={{ animation: `pop-in 0.6s cubic-bezier(0.2,0.7,0.2,1) ${i >= INITIAL ? (i - INITIAL) * 90 : 0}ms both` }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${g.open}: ${img.alt[lang]}`}
                  className="group relative block w-full cursor-zoom-in text-left focus-visible:outline-none"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 ${ring[i % ring.length]} ${tileShape[i % tileShape.length]} rotate-0 opacity-0 transition-all duration-500 group-hover:rotate-[-2.5deg] group-hover:opacity-100 group-focus-visible:rotate-[-2.5deg] group-focus-visible:opacity-100`}
                  />
                  <span
                    className={`relative block overflow-hidden border-4 border-white bg-white shadow-[0_14px_30px_-20px_rgba(59,51,82,0.5)] transition-transform duration-500 group-hover:-translate-y-1 ${tileShape[i % tileShape.length]}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt[lang]}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1024px) 360px, 50vw"
                      className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute right-2.5 bottom-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="6.5" />
                        <path d="m20 20-4.2-4.2M11 8.5v5M8.5 11h5" />
                      </svg>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className="mx-auto mt-5 flex max-w-xl items-start gap-2 rounded-2xl bg-white/70 px-4 py-3 text-left text-[0.88rem] text-ink-soft">
              <IconImage className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-deep" />
              {g.placeholderNote}
            </p>
            <ul className="mt-8 grid grid-flow-dense auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] sm:grid-cols-4 sm:gap-4">
              {Array.from({ length: visible }).map((_, i) => {
                const D = decor[i % decor.length];
                return (
                  <li
                    key={i}
                    aria-hidden="true"
                    className={`group relative flex items-center justify-center overflow-hidden border-2 border-dashed border-white bg-gradient-to-br ${tints[i % tints.length]} ${i === 0 ? "col-span-2" : ""} ${tileSpan[i % tileSpan.length]} ${tileShape[i % tileShape.length]} transition-transform duration-300 hover:-translate-y-1`}
                    style={{ animation: i >= INITIAL ? "float 0.6s ease-out 1" : undefined }}
                  >
                    <D className="h-14 w-14 opacity-70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 sm:h-16 sm:w-20" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 text-[0.7rem] font-bold text-ink-soft">
                      <IconImage className="h-3.5 w-3.5" />
                      {g.placeholder}
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {total > INITIAL && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-deep px-6 py-3 font-bold text-white shadow-[0_10px_24px_-12px_rgba(61,147,88,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[#347f4c]"
            >
              {expanded ? g.less : g.more}
              <Chevron dir="down" className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
      <Wave fill="#fff8ec" variant={3} />

      {hasPhotos && active !== null && (
        <Lightbox index={active} onChange={setActive} onClose={() => setActive(null)} labels={g} lang={lang} />
      )}
    </section>
  );
}

type LightboxProps = {
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
  labels: { close: string; prev: string; next: string };
  lang: "kk" | "ru";
};

export function Lightbox({ index, onChange, onClose, labels, lang }: LightboxProps) {
  const count = galleryImages.length;
  const img = galleryImages[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((step: number) => onChange((index + step + count) % count), [index, count, onChange]);

  // Клавиатура: Esc — закрыть, стрелки — листать
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Блокируем прокрутку страницы и возвращаем фокус после закрытия
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, []);

  const navBtn =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-all hover:scale-110 hover:bg-sun sm:h-12 sm:w-12";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt[lang]}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/90 px-3 py-16 backdrop-blur-sm sm:px-20"
      style={{ animation: "fade-in 0.25s ease-out both" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition-all hover:rotate-90 hover:bg-peach sm:top-5 sm:right-5"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      {count > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label={labels.prev} className={`${navBtn} left-2 sm:left-5`}>
            <Chevron dir="left" className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label={labels.next} className={`${navBtn} right-2 sm:right-5`}>
            <Chevron dir="right" className="h-5 w-5" />
          </button>
        </>
      )}

      <figure key={img.src} className="flex w-full max-w-6xl flex-col items-center" style={{ animation: "zoom-in 0.35s cubic-bezier(0.2,0.7,0.2,1) both" }}>
        <Image
          src={img.src}
          alt={img.alt[lang]}
          width={img.width}
          height={img.height}
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="h-auto rounded-[1.6rem_0.8rem_1.6rem_0.8rem] border-4 border-white object-contain shadow-2xl"
          style={{ width: `min(100%, calc((100dvh - 9rem) * ${img.width / img.height}))` }}
        />
        <figcaption className="mt-3 flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-center text-[0.85rem] font-bold text-ink">
          <span className="text-peach-deep">
            {index + 1}/{count}
          </span>
          {img.alt[lang]}
        </figcaption>
      </figure>
    </div>
  );
}
