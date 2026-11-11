"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { Flower, Wave } from "../Decor";
import { Lightbox } from "../Gallery";
import { galleryImages } from "@/lib/site";
import { MTitle, mId } from "./shared";

const INITIAL = 4;
const shapes = [
  "rounded-[2rem_0.8rem_2rem_0.8rem]",
  "rounded-[0.8rem_2rem_0.8rem_2rem]",
  "rounded-[1.8rem]",
  "rounded-[2rem_2rem_0.8rem_2rem]",
  "rounded-[0.8rem_2rem_2rem_2rem]",
];
const under = ["bg-sun", "bg-sky", "bg-peach", "bg-leaf"];

export function MobileGallery() {
  const { t, lang } = useLang();
  const g = t.gallery;
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  // Нет фото — раздел не показываем (никаких пустых блоков)
  if (galleryImages.length === 0) return null;

  const visible = expanded ? galleryImages.length : Math.min(INITIAL, galleryImages.length);

  const toggle = () => {
    if (expanded) {
      const el = document.getElementById(mId("gallery"));
      const header = document.getElementById("m-header")?.offsetHeight ?? 64;
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - header + 2, behavior: "auto" });
    }
    setExpanded((v) => !v);
  };

  return (
    <section id="m-gallery" className="relative overflow-hidden bg-leaf-soft">
      <Flower className="animate-sway pointer-events-none absolute top-6 right-4 h-9 w-9" petal="#ffffff" />
      <div className="mx-auto max-w-[34rem] px-4 pt-8 pb-10">
        <Reveal>
          <MTitle eyebrow={g.eyebrow} title={g.title} lead={g.lead} tone="white" />
        </Reveal>

        {/* Мозаика в 2 колонки: пропорции фото сохраняются, лица не обрезаются */}
        <ul className="mt-6 columns-2 gap-2.5">
          {galleryImages.slice(0, visible).map((img, i) => (
            <li
              key={img.src}
              className="mb-2.5 break-inside-avoid"
              style={{ animation: `pop-in .55s cubic-bezier(.2,.7,.2,1) ${i >= INITIAL ? (i - INITIAL) * 80 : i * 60}ms both` }}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${g.open}: ${img.alt[lang]}`}
                className="relative block w-full transition-transform duration-200 active:scale-[0.96]"
              >
                <span aria-hidden="true" className={`absolute inset-0 translate-x-1 translate-y-1.5 opacity-70 ${under[i % under.length]} ${shapes[i % shapes.length]}`} />
                <span className={`relative block overflow-hidden border-[3px] border-white bg-white ${shapes[i % shapes.length]}`}>
                  <Image
                    src={img.src}
                    alt={img.alt[lang]}
                    width={img.width}
                    height={img.height}
                    sizes="(max-width: 767px) 48vw, 1px"
                    className="block h-auto w-full"
                  />
                  <span className="absolute right-1.5 bottom-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink shadow">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
                    </svg>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {galleryImages.length > INITIAL && (
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-[1.6rem_1.6rem_0.6rem_1.6rem] bg-leaf-deep px-6 py-3 font-bold text-white shadow-[0_10px_24px_-12px_rgba(61,147,88,0.9)] transition-transform active:scale-95"
            >
              {expanded ? g.less : g.more}
              {!expanded && (
                <span className="rounded-full bg-white/25 px-2 py-0.5 text-[0.75rem]">+{galleryImages.length - INITIAL}</span>
              )}
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <Wave fill="#fff8ec" variant={3} />

      {active !== null && <Lightbox index={active} onChange={setActive} onClose={() => setActive(null)} labels={g} lang={lang} />}
    </section>
  );
}
