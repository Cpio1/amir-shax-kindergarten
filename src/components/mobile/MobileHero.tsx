"use client";

import Image from "next/image";
import { useLang } from "../LanguageProvider";
import { Cloud, Dots, Flower, Star, SunDecor, Wave } from "../Decor";
import { IconArrow, IconBaby, IconClock } from "../Icons";
import { siteConfig } from "@/lib/site";
import { scrollToSection } from "./shared";

const TITLE = "Амир-шах";
const letterColors = ["text-peach-deep", "text-sun-deep", "text-leaf-deep", "text-sky-deep"];

export function MobileHero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="m-home" className="relative overflow-hidden bg-cream pt-[calc(var(--header-h)+1rem)]">
      {/* Мягкий фон */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob-1 absolute -top-20 -right-16 h-64 w-64 bg-sun-soft/80" />
        <div className="blob-2 absolute top-40 -left-24 h-56 w-56 bg-sky-soft" />
        <div className="blob-3 absolute right-[-20%] bottom-16 h-52 w-52 bg-peach-soft/70" />
        <Cloud className="animate-drift absolute top-[4.6rem] left-3 w-14 opacity-90" />
        <Star className="animate-float absolute top-[7.5rem] right-6 h-4 w-4" fill="#ffb89c" />
        <Dots className="absolute top-[13rem] right-2 w-12 opacity-60" />
      </div>

      <div className="relative mx-auto max-w-[34rem] px-4 text-center">
        {/* Заголовок: буквы появляются по очереди */}
        <h1 aria-label={TITLE} className="font-display text-[2.7rem] leading-none font-bold min-[400px]:text-[3rem]">
          {TITLE.split("").map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`inline-block ${ch === "-" ? "text-ink/40" : letterColors[i % letterColors.length]}`}
              style={{ animation: `m-letter .6s cubic-bezier(.2,.8,.2,1) ${120 + i * 60}ms both` }}
            >
              {ch}
            </span>
          ))}
        </h1>
        <svg viewBox="0 0 200 14" className="mx-auto mt-1 h-3 w-40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M3 9c22-8 42 4 64-1s42-8 64-1 42 4 66-3" stroke="#ffc94d" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
        <p className="mt-1 text-[0.8rem] font-extrabold tracking-wide text-ink-soft">{t.mobile.subtitle}</p>

        <p
          className="mx-auto mt-3 max-w-[20rem] text-[1rem] leading-relaxed text-ink"
          style={{ animation: "pop-in .7s ease .55s both" }}
        >
          {t.mobile.greeting}
        </p>

        {/* Фото в мягкой органической форме с декором */}
        {siteConfig.heroImage && (
          <div className="relative mx-auto mt-7 w-[88%] max-w-[24rem]" style={{ animation: "zoom-in .8s cubic-bezier(.2,.8,.2,1) .35s both" }}>
            <div className="relative aspect-[4/3]">
              <div aria-hidden="true" className="m-shape-hero absolute -inset-3 bg-sun/75 animate-[m-wobble_9s_ease-in-out_infinite]" />
              <div
                aria-hidden="true"
                className="m-shape-hero absolute -inset-5 border-2 border-dashed border-peach/70 animate-[m-wobble_12s_ease-in-out_infinite_reverse]"
              />
              <div className="m-shape-hero absolute inset-0 overflow-hidden border-[5px] border-white bg-sky-soft shadow-[0_22px_44px_-22px_rgba(59,51,82,0.55)]">
                <Image
                  src={siteConfig.heroImage}
                  alt="«Амир-шах» бөбекжай-балабақшасы"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 80vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 50%" }}
                />
              </div>

              <SunDecor className="absolute -top-8 -right-6 h-16 w-16 animate-[spin_30s_linear_infinite]" />
              <Flower className="animate-sway absolute -top-5 -left-5 h-11 w-11" />
              <Flower className="animate-sway absolute top-[30%] -right-6 h-8 w-8 [animation-delay:-3s]" petal="#a9dbf5" center="#fff8ec" />
              <Star className="animate-float absolute top-[42%] -left-6 h-5 w-5" fill="#9fd9a6" />

              <span className="absolute -bottom-4 left-0 inline-flex items-center gap-1.5 rounded-[1rem_1rem_1rem_0.3rem] bg-white px-3 py-1.5 text-[0.78rem] font-extrabold text-ink shadow-md animate-[m-bob_5s_ease-in-out_infinite]">
                <IconClock className="h-4 w-4 text-sky-deep" />
                {h.chips.hours}
              </span>
              <span className="absolute bottom-[12%] -right-4 inline-flex items-center gap-1 rounded-[1rem_1rem_0.3rem_1rem] bg-leaf px-2.5 py-1.5 text-[0.75rem] font-extrabold text-ink shadow-md animate-[m-bob_6s_ease-in-out_infinite] [animation-delay:-2s]">
                <IconBaby className="h-4 w-4" />
                {h.chips.age}
              </span>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="group mt-10 inline-flex items-center gap-2 rounded-[1.6rem_1.6rem_1.6rem_0.6rem] bg-ink px-7 py-3.5 font-bold text-white shadow-[0_12px_26px_-12px_rgba(59,51,82,0.8)] transition-transform active:scale-95"
        >
          {t.mobile.more}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sun text-ink">
            <IconArrow className="h-3.5 w-3.5 rotate-90" />
          </span>
        </button>

        <ul className="mt-6 flex flex-wrap justify-center gap-2 pb-6">
          {[
            { label: h.chips.groups, cls: "bg-peach-soft text-peach-deep" },
            { label: t.about.facts.lang.value, cls: "bg-sky-soft text-sky-deep" },
            { label: t.nutrition.big, cls: "bg-leaf-soft text-leaf-deep" },
          ].map((c) => (
            <li key={c.label} className={`rounded-full px-3 py-1 text-[0.75rem] font-extrabold ${c.cls}`}>
              {c.label}
            </li>
          ))}
        </ul>
      </div>
      <Wave fill="#ffffff" variant={1} />
    </section>
  );
}
