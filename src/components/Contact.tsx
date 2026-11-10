"use client";

import { useLang } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { Cloud, Flower, SectionTitle, Wave } from "./Decor";
import { IconClock, IconExternal, IconInstagram, IconPin, IconWhatsApp } from "./Icons";
import { siteConfig, twoGisUrl } from "@/lib/site";

function SocialButton({
  href,
  label,
  soon,
  icon: Icon,
  activeCls,
}: {
  href: string | null;
  label: string;
  soon: string;
  icon: (p: { className?: string }) => React.ReactElement;
  activeCls: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 font-bold text-white transition-all hover:-translate-y-0.5 ${activeCls}`}
      >
        <Icon className="h-5 w-5" />
        {label}
      </a>
    );
  }
  return (
    <span
      aria-disabled="true"
      title={soon}
      className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full border-2 border-dashed border-ink/15 bg-white/60 px-5 py-2.5 font-bold text-ink-soft"
    >
      <Icon className="h-5 w-5 opacity-60" />
      {label}
      <span className="rounded-full bg-cream-deep px-2 py-0.5 text-[0.68rem]">{soon}</span>
    </span>
  );
}

export function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="relative overflow-hidden bg-peach-soft">
      <Wave fill="#fff8ec" variant={2} className="rotate-180" />
      <Cloud className="animate-drift pointer-events-none absolute top-16 right-[8%] w-24 opacity-90" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <Reveal>
          <SectionTitle eyebrow={c.eyebrow} title={c.title} accent="bg-white text-peach-deep" />
        </Reveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
          <Reveal>
            <address className="h-full rounded-[2.4rem_1.2rem_2.4rem_2.4rem] bg-white p-6 not-italic shadow-[0_18px_40px_-28px_rgba(224,112,74,0.7)] sm:p-7">
              <div className="flex items-start gap-4">
                <span className="blob-1 flex h-12 w-12 shrink-0 items-center justify-center bg-peach text-white">
                  <IconPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[0.82rem] font-bold text-ink-soft">{c.addressLabel}</p>
                  <p className="mt-1 text-[1.05rem] leading-snug font-bold text-ink">{c.address}</p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4 border-t-2 border-dashed border-cream-deep pt-5">
                <span className="blob-2 flex h-12 w-12 shrink-0 items-center justify-center bg-sky text-white">
                  <IconClock className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[0.82rem] font-bold text-ink-soft">{c.hoursLabel}</p>
                  <p className="mt-1 font-display text-[1.3rem] font-bold text-ink">{c.hours}</p>
                </div>
              </div>

              <a
                href={twoGisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf-deep px-6 py-3.5 font-bold text-white shadow-[0_10px_24px_-12px_rgba(61,147,88,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[#347f4c] sm:w-auto"
              >
                <IconPin className="h-5 w-5" />
                {c.map}
                <IconExternal className="h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5" />
              </a>
            </address>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.2rem_2.4rem_2.4rem_2.4rem] bg-sun-soft p-6 sm:p-7">
              <Flower className="animate-sway pointer-events-none absolute -right-3 -bottom-3 h-20 w-20 opacity-60" petal="#ffffff" center="#ffc94d" />
              <h3 className="font-display text-[1.2rem] font-bold text-ink">{c.socialTitle}</h3>
              <div className="relative mt-5 flex flex-col gap-3">
                <SocialButton href={siteConfig.whatsappUrl} label="WhatsApp" soon={c.soon} icon={IconWhatsApp} activeCls="bg-[#25a35a] hover:bg-[#1f8c4d]" />
                <SocialButton href={siteConfig.instagramUrl} label="Instagram" soon={c.soon} icon={IconInstagram} activeCls="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
