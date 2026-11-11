"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { Cloud, Dots, Flower, Star, SunDecor, Wave } from "./Decor";
import { IconArrow, IconClock, IconImage, IconUsers, IconBaby } from "./Icons";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="home" className="relative overflow-hidden pt-[calc(var(--header-h)+1.5rem)] lg:pt-[calc(var(--header-h)+2.5rem)]">
      {/* Фон: мягкие пятна и облака */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob-1 absolute -top-24 -left-24 h-72 w-72 bg-sun-soft/70 blur-2xl sm:h-96 sm:w-96" />
        <div className="blob-2 absolute top-32 -right-28 h-80 w-80 bg-sky-soft blur-2xl" />
        <div className="blob-3 absolute bottom-10 left-1/3 h-56 w-56 bg-peach-soft/70 blur-3xl" />
        <Cloud className="animate-drift absolute top-[18%] left-[4%] w-24 opacity-90 drop-shadow-sm sm:w-32" />
        <Cloud className="animate-drift absolute top-[10%] right-[30%] hidden w-20 opacity-80 [animation-delay:-8s] md:block" />
        <Star className="animate-float absolute top-[30%] left-[46%] hidden h-6 w-6 lg:block" fill="#ffb89c" />
        <Star className="animate-float-slow absolute bottom-[26%] left-[6%] h-5 w-5" fill="#a9dbf5" />
        <Dots className="absolute right-[4%] bottom-[18%] hidden w-20 opacity-70 lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-16">
        {/* Текст */}
        <div className="text-center lg:text-left">
          <span className="reveal is-visible inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.78rem] font-bold text-ink-soft shadow-sm">
            <span className="h-2 w-2 rounded-full bg-leaf-deep" />
            {h.badge}
          </span>

          <h1 className="mt-5 font-display text-[2.05rem] leading-[1.15] font-bold text-ink sm:text-[2.6rem] lg:text-[3rem]">
            {h.titleA}{" "}
            <span className="relative inline-block text-peach-deep">
              {h.titleHighlight}
              <svg viewBox="0 0 200 14" className="absolute -bottom-1.5 left-0 h-2.5 w-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9c40-8 80-8 120-3s60 3 76-2" stroke="#ffc94d" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            {h.titleB}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft lg:mx-0">{h.text}</p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#about"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-bold text-white shadow-[0_10px_24px_-10px_rgba(59,51,82,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#2c2640] sm:w-auto"
            >
              {h.cta}
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-ink/10 bg-white/70 px-6 py-3 font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-sun hover:bg-white sm:w-auto"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {[
              { icon: IconClock, label: h.chips.hours, cls: "bg-sky-soft text-sky-deep" },
              { icon: IconBaby, label: h.chips.age, cls: "bg-peach-soft text-peach-deep" },
              { icon: IconUsers, label: h.chips.groups, cls: "bg-leaf-soft text-leaf-deep" },
            ].map(({ icon: Icon, label, cls }) => (
              <li key={label} className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.85rem] font-bold ${cls}`}>
                <Icon className="h-4 w-4" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Фото / логотип */}
        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
          <div className="relative aspect-square">
            <div className="blob-2 animate-[spin_60s_linear_infinite] absolute inset-[3%] bg-sun/70" aria-hidden="true" />
            <div className="blob-1 absolute inset-[9%] overflow-hidden border-[6px] border-white bg-gradient-to-br from-sky-soft via-white to-leaf-soft shadow-[0_24px_50px_-24px_rgba(59,51,82,0.45)]">
              {siteConfig.heroImage ? (
                <Image
                  src={siteConfig.heroImage}
                  alt="«Амир-шах» бөбекжай-балабақшасы"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 80vw"
                  className="object-cover"
                  style={{ objectPosition: siteConfig.heroImagePosition }}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <SunDecor className="animate-float h-28 w-28 sm:h-32 sm:w-32" />
                  <p className="font-display text-xl font-bold text-ink">Амир-шах</p>
                  <p className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink-soft">
                    <IconImage className="h-3.5 w-3.5" />
                    {h.photoSoon}
                  </p>
                </div>
              )}
            </div>

            <Flower className="animate-sway absolute top-[4%] left-[2%] h-14 w-14 sm:h-16 sm:w-16" />
            <Flower className="animate-sway absolute right-[0%] bottom-[14%] h-11 w-11 [animation-delay:-3s]" petal="#a9dbf5" center="#fff8ec" />
            <div className="animate-float absolute right-[6%] top-[6%] flex h-16 w-16 flex-col items-center justify-center rounded-[46%_54%_40%_60%] bg-leaf text-center font-display text-ink shadow-md sm:h-20 sm:w-20">
              <span className="text-xl font-bold leading-none sm:text-2xl">4</span>
              <span className="text-[0.62rem] font-bold">{h.chips.groups.replace(/^4\s*/, "")}</span>
            </div>
            <div className="animate-float-slow absolute bottom-[4%] left-[8%] rounded-[1.2rem_1.2rem_1.2rem_0.3rem] bg-white px-3.5 py-2 text-[0.8rem] font-bold text-ink shadow-md">
              <span className="text-peach-deep">●</span> {h.chips.hours}
            </div>
          </div>
        </div>
      </div>

      <Wave fill="#ffffff" variant={1} />
    </section>
  );
}
