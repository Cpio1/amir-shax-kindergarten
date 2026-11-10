"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { Cloud, Flower, SectionTitle, Star, SunDecor, Wave } from "./Decor";
import { IconImage } from "./Icons";
import { galleryImages } from "@/lib/site";

const INITIAL = 6;
const PLACEHOLDER_COUNT = 9;

/** Разные размеры плиток для «живой» сетки */
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
const decor = [SunDecor, Flower, Cloud, Star];

export function Gallery() {
  const { t, lang } = useLang();
  const g = t.gallery;
  const [expanded, setExpanded] = useState(false);

  const hasPhotos = galleryImages.length > 0;
  const total = hasPhotos ? galleryImages.length : PLACEHOLDER_COUNT;
  const visible = expanded ? total : Math.min(INITIAL, total);

  return (
    <section id="gallery" className="relative overflow-hidden bg-leaf-soft">
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionTitle eyebrow={g.eyebrow} title={g.title} lead={g.lead} accent="bg-white text-leaf-deep" />
        </Reveal>

        {!hasPhotos && (
          <p className="mx-auto mt-5 flex max-w-xl items-start gap-2 rounded-2xl bg-white/70 px-4 py-3 text-left text-[0.88rem] text-ink-soft">
            <IconImage className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-deep" />
            {g.placeholderNote}
          </p>
        )}

        <ul className="mt-8 grid grid-flow-dense auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] sm:grid-cols-4 sm:gap-4">
          {Array.from({ length: visible }).map((_, i) => {
            const span = tileSpan[i % tileSpan.length];
            const shape = tileShape[i % tileShape.length];
            const first = i === 0 ? "col-span-2" : "";
            if (hasPhotos) {
              const img = galleryImages[i];
              return (
                <li key={img.src} className={`group relative overflow-hidden bg-white ${first} ${span} ${shape}`}>
                  <Image
                    src={img.src}
                    alt={img.alt[lang]}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </li>
              );
            }
            const D = decor[i % decor.length];
            return (
              <li
                key={i}
                aria-hidden="true"
                className={`group relative flex items-center justify-center overflow-hidden border-2 border-dashed border-white bg-gradient-to-br ${tints[i % tints.length]} ${first} ${span} ${shape} transition-transform duration-300 hover:-translate-y-1`}
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

        {total > INITIAL && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-deep px-6 py-3 font-bold text-white shadow-[0_10px_24px_-12px_rgba(61,147,88,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[#347f4c]"
            >
              {expanded ? g.less : g.more}
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
    </section>
  );
}
