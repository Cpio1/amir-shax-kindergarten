"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { Dots, Flower, SectionTitle, Star, Wave } from "./Decor";
import { IllBrain, IllPuzzle, IllSalt, IllSpeech } from "./Icons";

const cards = [
  {
    ill: IllSpeech,
    bg: "bg-peach-soft",
    blob: "bg-peach/45",
    shape: "rounded-[3rem_1.2rem_3rem_1.2rem]",
    tag: "text-peach-deep",
  },
  {
    ill: IllBrain,
    bg: "bg-sky-soft",
    blob: "bg-sky/50",
    shape: "rounded-[1.2rem_3rem_1.2rem_3rem]",
    tag: "text-sky-deep",
  },
  {
    ill: IllPuzzle,
    bg: "bg-leaf-soft",
    blob: "bg-leaf/50",
    shape: "rounded-[3rem_3rem_1.2rem_3rem]",
    tag: "text-leaf-deep",
  },
  {
    ill: IllSalt,
    bg: "bg-sun-soft/70",
    blob: "bg-white/80",
    shape: "rounded-[3rem_1.2rem_3rem_3rem]",
    tag: "text-sun-deep",
  },
];

export function Classes() {
  const { t } = useLang();
  const c = t.classes;

  return (
    <section id="classes" className="relative overflow-hidden bg-cream">
      <Dots className="pointer-events-none absolute top-12 left-4 w-16 opacity-60 sm:w-20" fill="#ffb89c" />
      <Flower className="animate-sway pointer-events-none absolute right-6 bottom-20 hidden h-12 w-12 md:block" petal="#a9dbf5" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionTitle eyebrow={c.eyebrow} title={c.title} lead={c.lead} accent="bg-leaf-soft text-leaf-deep" />
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {c.items.map((item, i) => {
            const s = cards[i];
            const Ill = s.ill;
            return (
              <Reveal as="li" key={i} delay={i * 100}>
                <article
                  className={`group relative flex h-full items-center gap-4 overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-24px_rgba(59,51,82,0.45)] sm:gap-6 sm:p-7 ${s.bg} ${s.shape} ${
                    i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                  }`}
                >
                  <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                    <span
                      className={`blob-${(i % 3) + 1} absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[20deg] ${s.blob}`}
                      aria-hidden="true"
                    />
                    <Ill className="animate-float relative h-full w-full p-2" />
                  </div>
                  <div className="min-w-0">
                    <span className={`inline-flex items-center gap-1 text-[0.75rem] font-extrabold tracking-wider ${s.tag}`}>
                      <Star className="h-3 w-3" fill="currentColor" />0{i + 1}
                    </span>
                    <h3 className="mt-1 font-display text-[1.15rem] leading-snug font-bold text-ink sm:text-[1.28rem]">{item.name}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{item.text}</p>
                  </div>
                  <span
                    className="pointer-events-none absolute -right-8 -bottom-10 h-24 w-24 rounded-full bg-white/40 transition-transform duration-500 group-hover:scale-125"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
      <Wave fill="#ffffff" variant={1} />
    </section>
  );
}
