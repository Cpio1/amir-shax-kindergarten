"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { Dots, SectionTitle, Star } from "./Decor";
import { IconExternal, IconFolder } from "./Icons";
import { siteConfig } from "@/lib/site";

export function Documents() {
  const { t } = useLang();
  const d = t.documents;
  const url = siteConfig.documentsUrl;

  return (
    <section id="documents" className="relative bg-cream">
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <Reveal>
          <SectionTitle eyebrow={d.eyebrow} title={d.title} accent="bg-sky-soft text-sky-deep" />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-9 overflow-hidden rounded-[2.5rem_1.2rem_2.5rem_1.2rem] bg-white p-6 shadow-[0_18px_40px_-26px_rgba(59,51,82,0.5)] sm:p-8">
            <Dots className="pointer-events-none absolute -top-2 -right-2 w-24 opacity-50" fill="#ffc94d" />
            <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              {/* Иллюстрация папки с листами */}
              <div className="relative h-24 w-28 shrink-0" aria-hidden="true">
                <div className="absolute top-1 left-5 h-20 w-16 rotate-[-8deg] rounded-xl bg-peach-soft" />
                <div className="absolute top-0 left-8 h-20 w-16 rotate-[6deg] rounded-xl bg-sky-soft" />
                <div className="blob-2 absolute right-0 bottom-0 left-0 flex h-16 items-center justify-center bg-sun text-white">
                  <IconFolder className="h-8 w-8" />
                </div>
                <Star className="animate-float absolute -top-2 -right-1 h-5 w-5" fill="#9fd9a6" />
              </div>

              <div className="flex-1">
                <h3 className="font-display text-[1.25rem] font-bold text-ink">{d.cardTitle}</h3>
                <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink-soft">{d.text}</p>
              </div>

              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sky-deep px-5 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2c709e]"
                >
                  {d.open}
                  <IconExternal className="h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 rounded-full border-2 border-dashed border-sky px-5 py-2.5 font-bold text-sky-deep/80"
                >
                  <IconFolder className="h-4 w-4" />
                  {d.soon}
                </span>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
