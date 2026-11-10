"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionTitle, Wave } from "./Decor";
import { IllApple, IllBread, IllCarrot, IllMilk, IllPear, IllSoup } from "./Icons";

const orbit = [
  { Ill: IllApple, pos: "top-[2%] left-[14%]", bg: "bg-peach-soft", delay: "0s" },
  { Ill: IllMilk, pos: "top-[0%] right-[14%]", bg: "bg-sky-soft", delay: "-1.5s" },
  { Ill: IllCarrot, pos: "top-[40%] -right-[2%]", bg: "bg-sun-soft", delay: "-3s" },
  { Ill: IllPear, pos: "bottom-[2%] right-[16%]", bg: "bg-leaf-soft", delay: "-2s" },
  { Ill: IllBread, pos: "bottom-[0%] left-[16%]", bg: "bg-sun-soft", delay: "-4s" },
  { Ill: IllSoup, pos: "top-[40%] -left-[2%]", bg: "bg-sky-soft", delay: "-.8s" },
];

export function Nutrition() {
  const { t } = useLang();
  const n = t.nutrition;

  return (
    <section id="nutrition" className="relative overflow-hidden bg-white">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16">
        {/* Визуал: тарелка с «4» и летающими продуктами */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[24rem]">
            <div className="blob-3 absolute inset-[16%] bg-sun-soft" aria-hidden="true" />
            <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full border-[10px] border-white bg-cream shadow-[0_18px_40px_-20px_rgba(233,163,22,0.7)]">
              <span className="font-display text-[3.4rem] leading-none font-bold text-sun-deep sm:text-[4rem]">4</span>
              <span className="mt-1 text-[0.85rem] font-extrabold text-ink-soft">{n.meal}</span>
            </div>
            <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-[10%]" aria-hidden="true">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#ffc94d" strokeWidth="0.8" strokeDasharray="2 4" />
            </svg>
            {orbit.map(({ Ill, pos, bg, delay }, i) => (
              <div
                key={i}
                className={`animate-float absolute flex h-[22%] w-[22%] items-center justify-center shadow-sm ${bg} ${pos} blob-${(i % 3) + 1}`}
                style={{ animationDelay: delay }}
              >
                <Ill className="h-[68%] w-[68%] transition-transform duration-300 hover:scale-125" />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 text-center lg:order-2 lg:text-left" delay={100}>
          <SectionTitle eyebrow={n.eyebrow} title={n.title} align="left" accent="bg-sun-soft text-sun-deep" />
          <p className="mt-5 inline-block rounded-[1.2rem_2.4rem_1.2rem_2.4rem] bg-leaf-soft px-6 py-3 font-display text-[1.4rem] font-bold text-leaf-deep sm:text-[1.6rem]">
            {n.big}
          </p>
          <p className="mx-auto mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink-soft lg:mx-0">{n.text}</p>

          <ol className="mt-6 flex justify-center gap-2.5 lg:justify-start" aria-label={n.big}>
            {[1, 2, 3, 4].map((k) => (
              <li
                key={k}
                className={`flex h-12 w-12 items-center justify-center font-display text-lg font-bold text-ink transition-transform duration-300 hover:-translate-y-1 ${
                  ["bg-sun-soft", "bg-peach-soft", "bg-sky-soft", "bg-leaf-soft"][k - 1]
                } blob-${(k % 3) + 1}`}
              >
                {k}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
      <Wave fill="#def3dc" variant={2} />
    </section>
  );
}
