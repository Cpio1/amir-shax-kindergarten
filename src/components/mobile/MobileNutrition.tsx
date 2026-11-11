"use client";

import { useLang } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { Star, Wave } from "../Decor";
import { IllApple, IllBread, IllCarrot, IllMilk, IllPear, IllSoup } from "../Icons";
import { MTitle } from "./shared";

/** Четыре «приёма» вокруг тарелки — только нумерация, без выдуманного меню */
const meals = [
  { n: 1, Ill: IllMilk, pos: "top-0 left-1/2 -translate-x-1/2", bg: "bg-sky-soft", delay: "0s" },
  { n: 2, Ill: IllSoup, pos: "top-1/2 right-0 -translate-y-1/2", bg: "bg-peach-soft", delay: "-1.5s" },
  { n: 3, Ill: IllApple, pos: "bottom-0 left-1/2 -translate-x-1/2", bg: "bg-leaf-soft", delay: "-3s" },
  { n: 4, Ill: IllBread, pos: "top-1/2 left-0 -translate-y-1/2", bg: "bg-white", delay: "-4.5s" },
];

export function MobileNutrition() {
  const { t } = useLang();
  const n = t.nutrition;

  return (
    <section id="m-nutrition" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-[34rem] px-4 pt-8 pb-10">
        <Reveal>
          <MTitle eyebrow={n.eyebrow} title={n.title} tone="sun" />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-6 overflow-hidden rounded-[3rem_1.4rem_3rem_1.4rem] bg-sun-soft px-4 pt-6 pb-6 shadow-[0_20px_40px_-28px_rgba(233,163,22,0.9)]">
            <IllCarrot className="pointer-events-none absolute -top-1 -left-2 h-12 w-12 rotate-[-20deg] opacity-70" />
            <IllPear className="pointer-events-none absolute -right-1 -bottom-1 h-12 w-12 rotate-12 opacity-70" />

            {/* Тарелка с цифрой 4 и приёмами пищи по кругу */}
            <div className="relative mx-auto aspect-square w-[min(15rem,78%)]">
              <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-[8%]" aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#e9a316" strokeWidth="1" strokeDasharray="2 4" />
              </svg>
              <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full border-[8px] border-white bg-cream shadow-[0_14px_30px_-14px_rgba(233,163,22,0.8)]">
                <span className="font-display text-[3rem] leading-none font-bold text-sun-deep">4</span>
                <span className="text-[0.75rem] font-extrabold text-ink-soft">{n.meal}</span>
              </div>
              {meals.map(({ n: num, Ill, pos, bg, delay }) => (
                <div key={num} className={`absolute h-[26%] w-[26%] ${pos}`}>
                  <div
                    className={`relative flex h-full w-full items-center justify-center shadow-sm animate-float blob-${(num % 3) + 1} ${bg}`}
                    style={{ animationDelay: delay }}
                  >
                    <Ill className="h-[66%] w-[66%]" />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink font-display text-[0.65rem] font-bold text-white">
                      {num}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center">
              <span className="inline-flex items-center gap-2 rounded-[1rem_2rem_1rem_2rem] bg-white px-5 py-2 font-display text-[1.25rem] font-bold text-leaf-deep">
                <Star className="h-4 w-4" fill="#ffc94d" />
                {n.big}
              </span>
            </p>
            <p className="mt-4 text-center text-[0.95rem] leading-relaxed text-ink">{n.text}</p>
          </div>
        </Reveal>
      </div>
      <Wave fill="#ffffff" variant={1} />
    </section>
  );
}
