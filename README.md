# «Амир-шах» бөбекжай-балабақшасы — лендинг

Next.js 15 · TypeScript · Tailwind CSS v4. Тексты на казахском с переключением на русский (выбор сохраняется в браузере).

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production-сборка
```

## Что заполнить позже

Все настройки — в `src/lib/site.ts`. Пока значение `null`, кнопка показывается как «Жақында».

| Поле | Что указать |
|---|---|
| `whatsappUrl` | `https://wa.me/7XXXXXXXXXX` |
| `instagramUrl` | `https://instagram.com/...` |
| `documentsUrl` | ссылка на папку Google Drive с документами |
| `heroImage` | главное фото или логотип, например `/images/hero.jpg` |
| `galleryImages` | список фото из `public/images/gallery` |

Тексты на обоих языках — в `src/lib/i18n.ts`.

### Галерея

1. Положите фото в `public/images/gallery/` (jpg/png/webp).
2. Добавьте их в `galleryImages`:

```ts
export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/1.jpg", alt: { kk: "Топ бөлмесі", ru: "Групповая комната" } },
];
```

Фото оптимизируются через `next/image`. Когда список пуст, показываются декоративные заглушки с подписью «Фото жақында».

## Деплой на Vercel

Импортируйте папку/репозиторий в Vercel: фреймворк Next.js определится автоматически, дополнительная настройка не нужна.
Необязательно: переменная `NEXT_PUBLIC_SITE_URL` (например `https://amir-shah.kz`) задаёт базовый URL для метаданных Open Graph.
