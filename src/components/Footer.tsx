"use client";

import { useLang } from "./LanguageProvider";
import { SunDecor } from "./Decor";
import { NAV_IDS } from "./Header";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-cream-deep">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-8 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div className="flex items-center gap-2.5">
          <SunDecor className="h-9 w-9" />
          <p className="text-[0.9rem] font-bold text-ink">ЖШС «Амир-шах» бөбекжай-балабақшасы</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[0.85rem] font-semibold text-ink-soft">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-peach-deep">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-[0.8rem] text-ink-soft">
          © {new Date().getFullYear()} «Амир-шах». {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
