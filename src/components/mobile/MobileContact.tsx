"use client";

import { useLang } from "../LanguageProvider";
import { Reveal } from "../Reveal";
import { Cloud, SunDecor, Wave } from "../Decor";
import { IconClock, IconExternal, IconInstagram, IconPin, IconWhatsApp } from "../Icons";
import { siteConfig, twoGisUrl } from "@/lib/site";
import { MTitle, scrollToSection } from "./shared";

/** Иллюстрированная мини-карта (ведёт в 2ГИС) */
function MapArt() {
  return (
    <svg viewBox="0 0 320 170" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="170" fill="#def3dc" />
      <path d="M-10 120C60 96 110 140 180 112s110-40 150-22v90H-10Z" fill="#e2f3fc" />
      <path d="M0 48h320M0 132h320" stroke="#fff" strokeWidth="12" />
      <path d="M96 0v170M232 0v170" stroke="#fff" strokeWidth="10" />
      <path d="M0 90c70-10 140 14 220-6s80-14 100-12" stroke="#ffeaa8" strokeWidth="8" fill="none" strokeLinecap="round" />
      <rect x="20" y="62" width="58" height="22" rx="8" fill="#ffe4d7" />
      <rect x="250" y="10" width="54" height="28" rx="10" fill="#ffe4d7" />
      <rect x="112" y="142" width="96" height="20" rx="8" fill="#fcefd9" />
      <circle cx="270" cy="150" r="10" fill="#9fd9a6" />
      <circle cx="40" cy="20" r="9" fill="#9fd9a6" />
      <circle cx="56" cy="28" r="7" fill="#9fd9a6" />
      <ellipse cx="164" cy="98" rx="16" ry="5" fill="#3b3352" opacity=".15" />
    </svg>
  );
}

function Social({ href, label, icon: Icon, cls }: { href: string; label: string; icon: (p: { className?: string }) => React.ReactElement; cls: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 font-bold text-white transition-transform active:scale-95 ${cls}`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </a>
  );
}

export function MobileContact() {
  const { t } = useLang();
  const c = t.contact;
  const hasSocial = Boolean(siteConfig.whatsappUrl || siteConfig.instagramUrl);

  return (
    <section id="m-contact" className="relative overflow-hidden bg-peach-soft">
      <Wave fill="#fff8ec" variant={2} className="rotate-180" />
      <Cloud className="animate-drift pointer-events-none absolute top-14 right-4 w-16" />
      <div className="mx-auto max-w-[34rem] px-4 pt-6 pb-10">
        <Reveal>
          <MTitle eyebrow={c.eyebrow} title={c.title} tone="white" />
        </Reveal>

        <div className="mt-6 grid gap-3">
          <Reveal>
            <address className="flex items-start gap-3 rounded-[2rem_2rem_2rem_0.6rem] bg-white p-4 not-italic shadow-[0_16px_34px_-26px_rgba(224,112,74,0.8)]">
              <span className="blob-1 flex h-11 w-11 shrink-0 items-center justify-center bg-peach text-white">
                <IconPin className="h-5.5 w-5.5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.75rem] font-bold text-ink-soft">{c.addressLabel}</p>
                <p className="mt-0.5 text-[0.95rem] leading-snug font-bold text-ink">{c.address}</p>
              </div>
            </address>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex items-center gap-3 rounded-[0.6rem_2rem_2rem_2rem] bg-sky-soft p-4">
              <span className="blob-2 flex h-11 w-11 shrink-0 items-center justify-center bg-sky text-white">
                <IconClock className="h-5.5 w-5.5" />
              </span>
              <div>
                <p className="text-[0.75rem] font-bold text-ink-soft">{c.hoursLabel}</p>
                <p className="font-display text-[1.25rem] font-bold text-ink">{c.hours}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Карта 2ГИС */}
        <Reveal delay={120}>
          <a
            href={twoGisUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-4 block overflow-hidden rounded-[2.4rem_1rem_2.4rem_1rem] border-4 border-white shadow-[0_18px_36px_-24px_rgba(59,51,82,0.6)] transition-transform active:scale-[0.98]"
          >
            <div className="aspect-[16/9]">
              <MapArt />
            </div>
            <span className="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
              <span className="blob-1 flex h-11 w-11 items-center justify-center bg-peach-deep text-white shadow-lg animate-[m-pin_2s_ease-in-out_infinite]">
                <IconPin className="h-6 w-6" />
              </span>
            </span>
            <span className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full bg-leaf-deep px-4 py-2.5 text-[0.95rem] font-bold text-white shadow-md">
              <IconPin className="h-4.5 w-4.5" />
              {c.map}
              <IconExternal className="h-4 w-4 opacity-80" />
            </span>
          </a>
        </Reveal>

        {/* Соцсети — только если ссылки указаны в siteConfig */}
        {hasSocial && (
          <Reveal delay={160} className="mt-4">
            <div className="rounded-[2rem_0.8rem_2rem_2rem] bg-sun-soft p-4">
              <h3 className="font-display text-[1.05rem] font-bold text-ink">{c.socialTitle}</h3>
              <div className="mt-3 flex flex-col gap-2.5">
                {siteConfig.whatsappUrl && <Social href={siteConfig.whatsappUrl} label="WhatsApp" icon={IconWhatsApp} cls="bg-[#25a35a]" />}
                {siteConfig.instagramUrl && (
                  <Social href={siteConfig.instagramUrl} label="Instagram" icon={IconInstagram} cls="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
                )}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function MobileFooter() {
  const { t } = useLang();
  return (
    <footer className="bg-cream-deep px-4 pt-7 pb-8 text-center">
      <SunDecor className="mx-auto h-10 w-10" />
      <p className="mt-2 text-[0.88rem] font-bold text-ink">ЖШС «Амир-шах» бөбекжай-балабақшасы</p>
      <p className="mt-1 text-[0.75rem] text-ink-soft">
        © {new Date().getFullYear()} «Амир-шах». {t.footer.rights}
      </p>
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[0.82rem] font-bold text-ink shadow-sm transition-transform active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <path d="m6 15 6-6 6 6" />
        </svg>
        {t.mobile.toTop}
      </button>
    </footer>
  );
}
