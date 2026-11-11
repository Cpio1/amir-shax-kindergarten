"use client";

import { useEffect } from "react";
import { MobileHeader } from "./MobileHeader";
import { MobileHero } from "./MobileHero";
import { MobileAbout } from "./MobileAbout";
import { MobileGroups } from "./MobileGroups";
import { MobileNutrition } from "./MobileNutrition";
import { MobileClasses } from "./MobileClasses";
import { MobileGallery } from "./MobileGallery";
import { MobileDocuments } from "./MobileDocuments";
import { MobileContact, MobileFooter } from "./MobileContact";
import { isMNavId, scrollToSection } from "./shared";

/**
 * Отдельная мобильная версия (< 768px).
 * Переключение версий делается только CSS (md:hidden / hidden md:block),
 * поэтому сервер и клиент рендерят одинаковую разметку — без ошибок гидратации.
 */
export function MobileSite() {
  // Единый URL: ссылки вида /#gallery ведут к мобильной секции #m-gallery
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const follow = (smooth: boolean) => {
      const id = window.location.hash.slice(1);
      if (mq.matches && isMNavId(id)) scrollToSection(id, smooth);
    };
    const timer = window.setTimeout(() => follow(false), 60);
    const onHash = () => follow(true);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <>
      <MobileHeader />
      <main id="m-main">
        <MobileHero />
        <MobileAbout />
        <MobileGroups />
        <MobileNutrition />
        <MobileClasses />
        <MobileGallery />
        <MobileDocuments />
        <MobileContact />
      </main>
      <MobileFooter />
    </>
  );
}
