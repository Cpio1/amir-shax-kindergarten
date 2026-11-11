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
  heroImage: "/images/gallery/main-page.jpeg" as string | null,
  /** Фокус кадра для главного фото (CSS object-position), чтобы лица детей не обрезались */
  heroImagePosition: "80% 50%",
  /**
   * Фото для раздела «Біз туралы». Файла main-page2 нет — используется одно из загруженных фото.
   * Если поставить null, блок с фото просто не показывается.
   */
  aboutImage: {
    src: "/images/gallery/image7.jpeg",
    position: "50% 40%",
    alt: { kk: "Балалар дастархан басында", ru: "Дети за общим столом во время трапезы" },
  } as { src: string; position: string; alt: { kk: string; ru: string } } | null,
};

const addressQuery = "Ұзынағаш, Азербаева көшесі, 93";
export const twoGisUrl = `https://2gis.kz/search/${encodeURIComponent(addressQuery)}`;

export type GalleryImage = {
  src: string;
  /** Реальные размеры файла — плитка сохраняет пропорции фото, поэтому лица не обрезаются */
  width: number;
  height: number;
  alt: { kk: string; ru: string };
};

/**
 * Галерея: положите фото в public/images/gallery и перечислите их здесь.
 * Пример:
 *   { src: "/images/gallery/1.jpg", alt: { kk: "Топ бөлмесі", ru: "Групповая комната" } },
 * Пока список пуст, показываются декоративные заглушки.
 */
export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/image8.jpeg", width: 900, height: 1600, alt: { kk: "Екі бала алма салынған себетпен", ru: "Два мальчика с корзиной яблок" } },
  { src: "/images/gallery/image3.jpeg", width: 1200, height: 1600, alt: { kk: "Екі қыз себеттегі кәмпиттермен", ru: "Две девочки с корзинкой конфет" } },
  { src: "/images/gallery/image1.jpeg", width: 1600, height: 902, alt: { kk: "Балалар үстел басында сабақ оқып отыр", ru: "Дети занимаются за столом в группе" } },
  { src: "/images/gallery/image7.jpeg", width: 1280, height: 720, alt: { kk: "Балалар дастархан басында", ru: "Дети за общим столом во время трапезы" } },
  { src: "/images/gallery/image2.jpeg", width: 1599, height: 899, alt: { kk: "Қыз тақтада сандарды үйреніп жатыр", ru: "Девочка изучает цифры у доски вместе с воспитателем" } },
  { src: "/images/gallery/image6.jpeg", width: 1600, height: 900, alt: { kk: "Қыздар мерекелік шарада", ru: "Девочки на праздничном мероприятии" } },
  { src: "/images/gallery/image4.jpeg", width: 1600, height: 900, alt: { kk: "Балалар мерекелік киіммен сапта тұр", ru: "Дети в праздничной форме стоят в строю" } },
  { src: "/images/gallery/image5.jpeg", width: 1600, height: 900, alt: { kk: "Балабақшадағы мерекелік шара", ru: "Праздничное мероприятие в детском саду" } },
];
