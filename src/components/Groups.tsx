"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { Cloud, SectionTitle, Star, Wave } from "./Decor";
import { IllBackpack, IllBear, IllDuck, IllKite } from "./Icons";

const styles = [
  { ill: IllDuck, bg: "bg-sun-soft", ring: "bg-sun", shape: "rounded-[2.6rem_2.6rem_2.6rem_0.8rem]", age: "bg-sun text-ink" },
  { ill: IllBear, bg: "bg-peach-soft", ring: "bg-peach", shape: "rounded-[0.8rem_2.6rem_2.6rem_2.6rem]", age: "bg-peach text-ink" },
  { ill: IllKite, bg: "bg-white", ring: "bg-sky", shape: "rounded-[2.6rem_0.8rem_2.6rem_2.6rem]", age: "bg-sky text-ink" },
  { ill: IllBackpack, bg: "bg-leaf-soft", ring: "bg-leaf", shape: "rounded-[2.6rem_2.6rem_0.8rem_2.6rem]", age: "bg-leaf text-ink" },
];

export function Groups() {
  const { t } = useLang();
  const g = t.groups;

  return (
    <section id="groups" className="relative overflow-hidden bg-sky-soft">
      <Cloud className="animate-drift pointer-events-none absolute top-8 left-[8%] w-24 opacity-90" />
      <Cloud className="animate-drift pointer-events-none absolute right-[6%] bottom-16 hidden w-28 [animation-delay:-10s] md:block" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionTitle eyebrow={g.eyebrow} title={g.title} lead={g.lead} accent="bg-white text-sky-deep" />
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {g.items.map((item, i) => {
            const s = styles[i];
            const Ill = s.ill;
            return (
              <Reveal as="li" key={item.name} delay={i * 100} className={i % 2 === 1 ? "lg:mt-8" : ""}>
                <article
                  className={`group relative flex h-full flex-col items-center overflow-hidden px-5 pt-6 pb-6 text-center shadow-[0_14px_30px_-20px_rgba(53,132,184,0.6)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_40px_-20px_rgba(53,132,184,0.7)] ${s.bg} ${s.shape}`}
                >
                  <span className="absolute top-4 right-5 font-display text-4xl font-bold text-ink/[0.06]" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div className="relative h-24 w-24">
                    <span className={`blob-${(i % 3) + 1} absolute inset-0 opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 ${s.ring}`} />
                    <Ill className="relative h-full w-full p-2.5 transition-transform duration-500 group-hover:-rotate-6" />
                  </div>
                  <h3 className="mt-4 font-display text-[1.12rem] leading-snug font-bold text-ink">{item.name}</h3>
                  {item.sub && <p className="mt-0.5 text-[0.85rem] font-semibold text-ink-soft">{item.sub}</p>}
                  <div className="mt-auto pt-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[0.88rem] font-extrabold ${s.age}`}>
                      <Star className="h-3.5 w-3.5" fill="#fff" />
                      {g.ageLabel}: {item.age}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
      <Wave fill="#fff8ec" variant={3} />
    </section>
  );
}
