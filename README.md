# Portfolio BTS SIO (Radix UI + React + TypeScript)

Портфолио для BTS SIO SLAM на **React + Vite + TypeScript** с UI на **Radix Themes** и иконками **Radix Icons**.

## 1) Что нужно установить

Перед запуском убедитесь, что у вас установлены:

- **Node.js 20+** (рекомендуется LTS)
- **npm 10+**

Проверка:

```bash
node -v
npm -v
```

## 2) Установка зависимостей

```bash
npm install
```

## 3) Запуск в режиме разработки (dev)

```bash
npm run dev
```

После запуска откройте адрес из терминала (обычно `http://localhost:5173`).

## 4) Проверка production-сборки

### Сборка

```bash
npm run build
```

### Локальный запуск production-версии

```bash
npm run preview
```

## 5) Где что находится

- `src/App.tsx` — меню, тема, выбор текущей страницы/детальной страницы.
- `src/data/content.ts` — **главный файл контента** (карточки и детальные тексты).
- `src/pages/SectionOverviewPage.tsx` — сетка карточек раздела.
- `src/pages/DetailContentPage.tsx` — детальная страница (tabs + таблица + placeholder).
- `src/pages/VeillePage.tsx` — страница veille technologique (RSS).

---

## 6) Как работает файл контента (`src/data/content.ts`)

В `contentItems` каждый объект — это одна карточка, которая открывает свою детальную страницу.

Пример структуры:

```ts
{
  key: 'parcours-competences',
  section: 'parcours',
  title: 'Compétences',
  summary: 'Короткий текст на карточке',
  paragraphs: ['Абзац 1', 'Абзац 2'],
  table: [
    { label: 'Champ', value: 'Valeur' }
  ]
}
```

### Поля:
- `key` — уникальный ID страницы (маршрут внутри приложения).
- `section` — к какому разделу карточка относится (`presentation`, `parcours`, `realisations`).
- `title` — заголовок карточки и детальной страницы.
- `summary` — короткий текст на карточке.
- `paragraphs` — основной текст на вкладке **Texte**.
- `table` — данные на вкладке **Tableau**.

---

## 7) Как добавить НОВУЮ карточку + новую детальную страницу

### Шаг 1. Добавьте ключ в тип маршрутов
Откройте `src/types.ts` и добавьте новый `RouteKey`, например:

```ts
| 'parcours-stage-2026'
```

### Шаг 2. Добавьте объект в `src/data/content.ts`
Добавьте новый элемент в `contentItems`:

```ts
{
  key: 'parcours-stage-2026',
  section: 'parcours',
  title: 'Stage 2026',
  summary: 'Résumé court du stage',
  paragraphs: [
    'Lorem ipsum ...',
    'Détails du stage ...'
  ],
  table: [
    { label: 'Entreprise', value: 'Nom entreprise' },
    { label: 'Période', value: 'Janvier - Mars 2026' }
  ]
}
```

### Шаг 3. Готово
Больше ничего менять не нужно:
- карточка автоматически появится в нужном разделе;
- при клике откроется детальная страница.

---

## 8) Как добавить НОВЫЙ ОСНОВНОЙ раздел (новая вкладка в меню)

Если нужен новый раздел (например `certifications` как отдельная вкладка), нужно:

1. Добавить раздел в `MainPage` (`src/types.ts`).
2. Добавить пункт в меню `Tabs.List` в `src/App.tsx`.
3. Добавить ветку рендера в `content` внутри `App.tsx`.
4. Добавить объекты с `section: 'certifications'` в `src/data/content.ts`.

---

## 9) Частые проблемы

### `npm install` возвращает 403
Это ограничение сети/registry в вашей среде, не ошибка кода.
Проверьте доступ к `https://registry.npmjs.org/`, прокси/firewall и `.npmrc`.

### Добавил карточку, но не открывается
Проверьте:
- `key` добавлен в `RouteKey` (`src/types.ts`)
- `key` в `contentItems` совпадает 1-в-1
- `section` указан корректно (`presentation|parcours|realisations`)

