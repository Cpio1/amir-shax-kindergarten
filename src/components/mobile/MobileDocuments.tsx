"use client";

import { useLang } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { Dots, Star } from "../Decor";
import { IconExternal, IconFolder } from "../Icons";
import { siteConfig } from "@/lib/site";
import { MTitle } from "./shared";

export function MobileDocuments() {
  const { t } = useLang();
  const d = t.documents;
  const url = siteConfig.documentsUrl;

  return (
    <section id="m-documents" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-[34rem] px-4 pt-8 pb-12">
        <Reveal>
          <MTitle eyebrow={d.eyebrow} title={d.title} tone="sky" />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-6 overflow-hidden rounded-[2.6rem_1rem_2.6rem_1rem] bg-white px-5 pt-6 pb-5 text-center shadow-[0_18px_40px_-26px_rgba(59,51,82,0.5)]">
            <Dots className="pointer-events-none absolute -top-2 -right-2 w-20 opacity-50" fill="#ffc94d" />

            {/* Папка с листами */}
            <div className="relative mx-auto h-24 w-28" aria-hidden="true">
              <div className="absolute top-1 left-5 h-20 w-16 rotate-[-8deg] rounded-xl bg-peach-soft" />
              <div className="absolute top-0 left-8 h-20 w-16 rotate-[6deg] rounded-xl bg-sky-soft" />
              <div className="blob-2 absolute right-0 bottom-0 left-0 flex h-16 items-center justify-center bg-sun text-white">
                <IconFolder className="h-8 w-8" />
              </div>
              <Star className="animate-float absolute -top-2 -right-1 h-5 w-5" fill="#9fd9a6" />
            </div>

            <h3 className="mt-4 font-display text-[1.15rem] font-bold text-ink">{d.cardTitle}</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">{d.text}</p>

            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-deep px-5 py-3 font-bold text-white transition-transform active:scale-95"
              >
                {d.open}
                <IconExternal className="h-4 w-4" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-dashed border-sky px-5 py-2.5 font-bold text-sky-deep/80"
              >
                <IconFolder className="h-4 w-4" />
                {d.soon}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
