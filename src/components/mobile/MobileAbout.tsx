"use client";

import Image from "next/image";
import { useLang } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { Flower, Star, SunDecor, Wave } from "../Decor";
import { IconBaby, IconBowl, IconChat, IconClock, IconHeart, IconSun, IconUsers } from "../Icons";
import { siteConfig } from "@/lib/site";
import { MTitle } from "./shared";

export function MobileAbout() {
  const { t, lang } = useLang();
  const a = t.about;
  const photo = siteConfig.aboutImage;

  // Четыре «лепестка» вокруг солнышка: острый угол каждой карточки смотрит в центр
  const petals = [
    { ...a.facts.age, icon: IconBaby, cls: "bg-peach-soft", ic: "bg-peach", shape: "rounded-[50%_50%_0.9rem_50%]" },
    { ...a.facts.groups, icon: IconUsers, cls: "bg-leaf-soft", ic: "bg-leaf", shape: "rounded-[50%_50%_50%_0.9rem]" },
    { ...a.facts.hours, icon: IconClock, cls: "bg-sky-soft", ic: "bg-sky", shape: "rounded-[50%_0.9rem_50%_50%]" },
    { ...a.facts.food, icon: IconBowl, cls: "bg-sun-soft", ic: "bg-sun", shape: "rounded-[0.9rem_50%_50%_50%]" },
  ];
  const advIcons = [IconChat, IconUsers, IconBowl, IconSun];
  const advColors = ["bg-peach-soft text-peach-deep", "bg-leaf-soft text-leaf-deep", "bg-sun-soft text-sun-deep", "bg-sky-soft text-sky-deep"];

  return (
    <section id="m-about" className="relative overflow-hidden bg-white">
      <Flower className="animate-sway pointer-events-none absolute top-6 right-4 h-9 w-9 opacity-80" petal="#9fd9a6" />
      <div className="mx-auto max-w-[34rem] px-4 pt-8 pb-10">
        <Reveal>
          <MTitle eyebrow={a.eyebrow} title={a.title} lead={a.lead} tone="peach" />
        </Reveal>

        {photo ? (
          <Reveal delay={80} className="relative mt-7 mb-4">
            <div aria-hidden="true" className="m-shape-soft absolute inset-0 translate-x-2.5 translate-y-2.5 rotate-[2deg] bg-leaf-soft" />
            <div className="m-shape-soft relative aspect-[16/11] overflow-hidden border-4 border-white shadow-[0_18px_36px_-22px_rgba(59,51,82,0.55)]">
              <Image
                src={photo.src}
                alt={photo.alt[lang]}
                fill
                sizes="(max-width: 767px) 92vw, 1px"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
            </div>
            <p className="absolute -bottom-4 left-4 inline-flex max-w-[85%] items-center gap-2 rounded-[1.2rem_1.2rem_1.2rem_0.4rem] bg-white py-2 pr-4 pl-2 text-[0.82rem] text-ink shadow-md">
              <span className="blob-1 flex h-7 w-7 shrink-0 items-center justify-center bg-sun text-white">
                <IconHeart className="h-4 w-4" />
              </span>
              <span>
                <b>{a.facts.lang.label}:</b> {a.facts.lang.value}
              </span>
            </p>
          </Reveal>
        ) : (
          <Reveal className="mt-6 flex items-center gap-3 rounded-[1.4rem_2.6rem_1.4rem_1.4rem] bg-cream px-4 py-3.5">
            <span className="blob-1 flex h-10 w-10 shrink-0 items-center justify-center bg-sun text-white">
              <IconHeart className="h-5 w-5" />
            </span>
            <p className="text-[0.92rem] text-ink">
              <b>{a.facts.lang.label}:</b> {a.facts.lang.value}
            </p>
          </Reveal>
        )}

        {/* Цветок из карточек-фактов */}
        <div className="relative mx-auto mt-10 max-w-[22rem]">
          <ul className="grid grid-cols-2 gap-2.5">
            {petals.map((f, i) => (
              <Reveal as="li" key={f.label} delay={i * 90}>
                <div className={`flex aspect-square flex-col items-center justify-center px-3 text-center transition-transform active:scale-95 ${f.cls} ${f.shape}`}>
                  <span className={`blob-${(i % 3) + 1} flex h-9 w-9 items-center justify-center text-white ${f.ic}`}>
                    <f.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-2 font-display text-[1.02rem] leading-tight font-bold text-ink min-[400px]:text-[1.12rem]">{f.value}</p>
                  <p className="mt-1 text-[0.7rem] leading-tight font-bold text-ink-soft">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <span aria-hidden="true" className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
            <SunDecor className="h-12 w-12 animate-[spin_20s_linear_infinite]" />
          </span>
        </div>

        {/* Условия для детей */}
        <Reveal className="mt-10">
          <h3 className="flex items-center gap-2 font-display text-[1.15rem] font-bold text-ink">
            <Star className="h-4 w-4" fill="#ffb89c" />
            {a.advantagesTitle}
          </h3>
        </Reveal>
        <ul className="mt-4 space-y-2.5">
          {a.advantages.map((adv, i) => {
            const Icon = advIcons[i];
            return (
              <Reveal as="li" key={adv.title} delay={i * 70}>
                <div
                  className={`flex items-start gap-3 border-2 border-dashed border-cream-deep bg-cream/60 p-3.5 ${
                    i % 2 ? "rounded-[0.6rem_1.8rem_1.8rem_1.8rem]" : "rounded-[1.8rem_1.8rem_1.8rem_0.6rem]"
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${advColors[i]}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[0.95rem] font-extrabold text-ink">{adv.title}</h4>
                    <p className="mt-0.5 text-[0.86rem] leading-snug text-ink-soft">{adv.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
      <Wave fill="#e2f3fc" variant={2} />
    </section>
  );
}
