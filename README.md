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

Проект использует такие ключевые зависимости:

- `react`
- `react-dom`
- `@radix-ui/themes`
- `@radix-ui/react-icons`
- `vite`
- `typescript`
- `@vitejs/plugin-react`

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

- `src/App.tsx` — контент портфолио + RSS veille technologique
- `src/main.tsx` — подключение темы Radix
- `src/styles.css` — кастомные стили и responsive-адаптация
- `package.json` — скрипты и зависимости

## 6) Responsive

Верстка уже адаптивная:

- сетки переключаются между `1` и `2` колонками;
- отступы и типографика уменьшаются на мобильных;
- карточки и RSS-блоки корректно переносятся на узких экранах.

## 7) Частые проблемы

### `npm install` возвращает 403

Это не ошибка проекта, а ограничение сети/registry в вашей среде.
Проверьте:

- доступ к `https://registry.npmjs.org/`
- корпоративный proxy/firewall
- настройки `.npmrc`

