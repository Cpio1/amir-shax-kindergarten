"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { Flower, SectionTitle, Star, Wave } from "./Decor";
import { IconBaby, IconBowl, IconChat, IconClock, IconHeart, IconSun, IconUsers } from "./Icons";

export function About() {
  const { t } = useLang();
  const a = t.about;

  const facts = [
    { ...a.facts.age, icon: IconBaby, cls: "bg-peach-soft", ic: "bg-peach text-white", shape: "rounded-[2rem_2rem_2rem_0.6rem]" },
    { ...a.facts.groups, icon: IconUsers, cls: "bg-leaf-soft", ic: "bg-leaf text-white", shape: "rounded-[0.6rem_2rem_2rem_2rem]" },
    { ...a.facts.hours, icon: IconClock, cls: "bg-sky-soft", ic: "bg-sky text-white", shape: "rounded-[2rem_0.6rem_2rem_2rem]" },
    { ...a.facts.food, icon: IconBowl, cls: "bg-sun-soft", ic: "bg-sun text-white", shape: "rounded-[2rem_2rem_0.6rem_2rem]" },
  ];

  const advIcons = [IconChat, IconUsers, IconBowl, IconSun];
  const advColors = ["text-peach-deep bg-peach-soft", "text-leaf-deep bg-leaf-soft", "text-sun-deep bg-sun-soft", "text-sky-deep bg-sky-soft"];

  return (
    <section id="about" className="relative bg-white">
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <Flower className="animate-sway absolute top-10 right-6 hidden h-12 w-12 opacity-80 md:block" petal="#9fd9a6" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <Reveal>
            <SectionTitle eyebrow={a.eyebrow} title={a.title} align="left" accent="bg-peach-soft text-peach-deep" />
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{a.lead}</p>

            <div className="mt-6 flex items-center gap-3 rounded-[1.5rem_3rem_1.5rem_1.5rem] bg-cream px-5 py-4">
              <span className="blob-1 flex h-11 w-11 shrink-0 items-center justify-center bg-sun text-white">
                <IconHeart className="h-5.5 w-5.5" />
              </span>
              <p className="text-[0.95rem] text-ink">
                <span className="font-bold">{a.facts.lang.label}:</span> {a.facts.lang.value}
              </p>
            </div>
          </Reveal>

          {/* Карточки фактов — разные скругления, шахматное смещение */}
          <ul className="grid grid-cols-2 gap-3.5 sm:gap-5">
            {facts.map((f, i) => (
              <Reveal
                as="li"
                key={f.label}
                delay={i * 90}
                className={`${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
              >
                <div
                  className={`group h-full p-4 transition-transform duration-300 hover:-translate-y-1.5 sm:p-6 ${f.cls} ${f.shape}`}
                >
                  <span className={`blob-${(i % 3) + 1} flex h-11 w-11 items-center justify-center transition-transform duration-500 group-hover:rotate-12 sm:h-12 sm:w-12 ${f.ic}`}>
                    <f.icon className="h-5.5 w-5.5" />
                  </span>
                  <p className="mt-4 text-[0.8rem] font-semibold text-ink-soft sm:text-[0.85rem]">{f.label}</p>
                  <p className="mt-1 font-display text-[1.15rem] leading-tight font-bold text-ink sm:text-[1.35rem]">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Преимущества */}
        <div className="mt-16 lg:mt-20">
          <Reveal>
            <h3 className="flex items-center justify-center gap-2 text-center font-display text-[1.3rem] font-bold text-ink sm:text-[1.5rem]">
              <Star className="h-5 w-5" fill="#ffb89c" />
              {a.advantagesTitle}
              <Star className="h-5 w-5" fill="#a9dbf5" />
            </h3>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {a.advantages.map((adv, i) => {
              const Icon = advIcons[i];
              return (
                <Reveal as="li" key={adv.title} delay={i * 80}>
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border-2 border-dashed border-cream-deep bg-cream/60 p-5 transition-all duration-300 hover:border-solid hover:border-sun hover:bg-white hover:shadow-[0_16px_30px_-18px_rgba(59,51,82,0.35)]">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${advColors[i]} ${i % 2 ? "rounded-tr-[0.4rem]" : "rounded-bl-[0.4rem]"}`}>
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <h4 className="mt-4 text-[1.02rem] font-extrabold text-ink">{adv.title}</h4>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">{adv.text}</p>
                    <span className="absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-sun-soft/0 transition-colors duration-300 group-hover:bg-sun-soft/70" aria-hidden="true" />
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
      <Wave fill="#e2f3fc" variant={2} />
    </section>
  );
}
