/**
 * Негізгі баптаулар / Основные настройки сайта.
 *
 * Настоящие ссылки добавляйте сюда — кнопки активируются автоматически.
 * Пока значение равно null, кнопка показывается как «Жақында».
 */

export const siteConfig = {
  /** WhatsApp: например "https://wa.me/77001234567" */
  whatsappUrl: null as string | null,
  /** Instagram: например "https://instagram.com/username" */
  instagramUrl: null as string | null,
  /** Google Drive папка с официальными документами */
  documentsUrl: null as string | null,
  /** Главное фото или логотип: положите файл в public/images и укажите путь, например "/images/hero.jpg" */
  heroImage: null as string | null,
};

const addressQuery = "Ұзынағаш, Азербаева көшесі, 93";
export const twoGisUrl = `https://2gis.kz/search/${encodeURIComponent(addressQuery)}`;

export type GalleryImage = { src: string; alt: { kk: string; ru: string } };

/**
 * Галерея: положите фото в public/images/gallery и перечислите их здесь.
 * Пример:
 *   { src: "/images/gallery/1.jpg", alt: { kk: "Топ бөлмесі", ru: "Групповая комната" } },
 * Пока список пуст, показываются декоративные заглушки.
 */
export const galleryImages: GalleryImage[] = [];
