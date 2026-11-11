"use client";

import { useRef, useState } from "react";
import { useLang } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { Cloud, Star, Wave } from "../Decor";
import { IllBackpack, IllBear, IllDuck, IllKite } from "../Icons";
import { MTitle } from "./shared";

const styles = [
  { ill: IllDuck, bg: "bg-sun-soft", blob: "bg-sun", shape: "rounded-[2.8rem_2.8rem_2.8rem_0.8rem]", age: "bg-sun", dot: "bg-sun-deep" },
  { ill: IllBear, bg: "bg-peach-soft", blob: "bg-peach", shape: "rounded-[0.8rem_2.8rem_2.8rem_2.8rem]", age: "bg-peach", dot: "bg-peach-deep" },
  { ill: IllKite, bg: "bg-white", blob: "bg-sky", shape: "rounded-[2.8rem_0.8rem_2.8rem_2.8rem]", age: "bg-sky", dot: "bg-sky-deep" },
  { ill: IllBackpack, bg: "bg-leaf-soft", blob: "bg-leaf", shape: "rounded-[2.8rem_2.8rem_0.8rem_2.8rem]", age: "bg-leaf", dot: "bg-leaf-deep" },
];

export function MobileGroups() {
  const { t } = useLang();
  const g = t.groups;
  const scroller = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 14;
    setCurrent(Math.min(g.items.length - 1, Math.round(el.scrollLeft / step)));
  };

  const goTo = (i: number) => {
    const el = scroller.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 16, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="m-groups" className="relative overflow-hidden bg-sky-soft">
      <Cloud className="animate-drift pointer-events-none absolute top-6 right-4 w-16" />
      <div className="pt-8 pb-10">
        <Reveal className="mx-auto max-w-[34rem] px-4">
          <MTitle eyebrow={g.eyebrow} title={g.title} lead={g.lead} tone="white" />
        </Reveal>

        {/* Горизонтальный слайдер со snap-прокруткой */}
        <ul
          ref={scroller}
          onScroll={onScroll}
          aria-label={g.title}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory scroll-px-4 gap-3.5 overflow-x-auto overscroll-x-contain px-4 pt-2 pb-5"
        >
          {g.items.map((item, i) => {
            const s = styles[i];
            const Ill = s.ill;
            return (
              <li key={item.name} className="w-[70%] max-w-[16rem] shrink-0 snap-start">
                <Reveal delay={i * 90} className="h-full">
                  <article
                    className={`relative flex h-full flex-col items-center overflow-hidden px-4 pt-5 pb-5 text-center shadow-[0_16px_30px_-20px_rgba(53,132,184,0.7)] transition-transform duration-300 active:scale-[0.97] ${s.bg} ${s.shape}`}
                  >
                    <span aria-hidden="true" className="absolute top-3 right-5 font-display text-[2.4rem] font-bold text-ink/[0.07]">
                      0{i + 1}
                    </span>
                    <div className="relative h-24 w-24">
                      <span className={`blob-${(i % 3) + 1} absolute inset-0 opacity-50 ${s.blob}`} />
                      <Ill className="relative h-full w-full p-2.5 animate-[m-bob_6s_ease-in-out_infinite]" />
                    </div>
                    <h3 className="mt-3 font-display text-[1.08rem] leading-snug font-bold text-ink">{item.name}</h3>
                    {item.sub && <p className="mt-0.5 text-[0.8rem] font-semibold text-ink-soft">{item.sub}</p>}
                    <div className="mt-auto pt-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.82rem] font-extrabold text-ink ${s.age}`}>
                        <Star className="h-3.5 w-3.5" fill="#fff" />
                        {g.ageLabel}: {item.age}
                      </span>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mx-auto flex max-w-[34rem] items-center justify-between px-5">
          <div className="flex gap-1.5">
            {g.items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1} / ${g.items.length}: ${item.name}`}
                aria-current={current === i ? "true" : undefined}
                className="flex h-6 items-center"
              >
                <span className={`block h-2.5 rounded-full transition-all duration-300 ${current === i ? `w-7 ${styles[i].dot}` : "w-2.5 bg-white"}`} />
              </button>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[0.75rem] font-extrabold text-sky-deep" aria-hidden="true">
            {t.mobile.swipe}
            <svg viewBox="0 0 24 24" className="h-4 w-4 animate-[m-nudge_1.6s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </span>
        </div>
      </div>
      <Wave fill="#fff8ec" variant={3} />
    </section>
  );
}
