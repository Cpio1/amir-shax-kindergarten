"use client";

import { useLang } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { Dots, Star, Wave } from "../Decor";
import { IllBrain, IllPuzzle, IllSalt, IllSpeech } from "../Icons";
import { MTitle } from "./shared";

/** Каждая карточка — свой цвет, своя форма и своё смещение */
const cards = [
  { ill: IllSpeech, bg: "bg-peach-soft", blob: "bg-peach/45", tag: "text-peach-deep", shape: "rounded-[3rem_1rem_3rem_1rem]", offset: "mr-5" },
  { ill: IllBrain, bg: "bg-sky-soft", blob: "bg-sky/55", tag: "text-sky-deep", shape: "rounded-[1rem_3rem_1rem_3rem]", offset: "ml-5" },
  { ill: IllPuzzle, bg: "bg-leaf-soft", blob: "bg-leaf/55", tag: "text-leaf-deep", shape: "rounded-[2.8rem_2.8rem_0.8rem_2.8rem]", offset: "mr-5" },
  { ill: IllSalt, bg: "bg-sun-soft", blob: "bg-white/80", tag: "text-sun-deep", shape: "rounded-[0.8rem_2.8rem_2.8rem_2.8rem]", offset: "ml-5" },
];

export function MobileClasses() {
  const { t } = useLang();
  const c = t.classes;

  return (
    <section id="m-classes" className="relative overflow-hidden bg-white">
      <Dots className="pointer-events-none absolute top-6 right-3 w-12 opacity-60" fill="#ffb89c" />
      <div className="mx-auto max-w-[34rem] px-4 pt-8 pb-10">
        <Reveal>
          <MTitle eyebrow={c.eyebrow} title={c.title} lead={c.lead} tone="leaf" />
        </Reveal>

        <ul className="mt-7 space-y-3.5">
          {c.items.map((item, i) => {
            const s = cards[i];
            const Ill = s.ill;
            const flip = i % 2 === 1;
            return (
              <Reveal as="li" key={i} delay={i * 80} className={s.offset}>
                <article
                  className={`relative flex items-center gap-3.5 overflow-hidden p-4 transition-transform duration-300 active:scale-[0.97] ${s.bg} ${s.shape} ${
                    flip ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div className="relative h-[4.6rem] w-[4.6rem] shrink-0">
                    <span aria-hidden="true" className={`blob-${(i % 3) + 1} absolute inset-0 ${s.blob}`} />
                    <Ill className="relative h-full w-full p-1.5 animate-[m-bob_5s_ease-in-out_infinite]" />
                  </div>
                  <div className="min-w-0">
                    <span className={`inline-flex items-center gap-1 text-[0.7rem] font-extrabold tracking-wider ${s.tag}`}>
                      <Star className="h-3 w-3" fill="currentColor" />0{i + 1}
                    </span>
                    <h3 className="font-display text-[1.05rem] leading-snug font-bold text-ink">{item.name}</h3>
                    <p className="mt-1 text-[0.85rem] leading-snug text-ink-soft">{item.text}</p>
                  </div>
                  <span aria-hidden="true" className={`pointer-events-none absolute -bottom-8 h-20 w-20 rounded-full bg-white/40 ${flip ? "-left-6" : "-right-6"}`} />
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
      <Wave fill="#def3dc" variant={2} />
    </section>
  );
}
