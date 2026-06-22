# Почему rollup, а не tsdown

## Краткий ответ

У нас CSS-модули и непубликуемый `cakeinpanic-shared` — tsdown не умеет нормально работать с обоими.

## Подробно

### 1. CSS-модули — главная причина

`rollup-plugin-postcss` обрабатывает CSS-модули прямо в дереве сборки:
- запускает весь PostCSS-пайплайн (mixins, nested, autoprefixer)
- скопирует имена классов
- извлекает всё в `dist/index.css` за один проход

tsdown не имеет полноценной поддержки PostCSS-модулей. В режиме `unbundle: true` CSS-классы перестают скопиться. Пришлось добавить отдельный скрипт `bundle-css.mjs`, который просто конкатенирует CSS-файлы по алфавиту — без postcss-обработки, без гарантии порядка.

### 2. `cakeinpanic-shared` не публикуется

`shared` — внутренний пакет, существует только в монорепо, в npm не выходит. `lido-ui-landing` и `lido-ui-widget` должны инлайнить его содержимое в свой `dist`.

В tsdown для этого нужен `noExternal: ['cakeinpanic-shared']`, но это работает только для JS-части. CSS-файлы из shared при этом не обрабатываются postcss и теряют скопированные классы.

Rollup с исключением shared из `external` инлайнит его честно: JS обрабатывается babel, CSS — postcss-plugin. Всё в одном проходе, никаких костылей.

### 3. Babel-трансформы для SVG

У нас `babel-plugin-react-inline-svg-unique-id` — делает id в SVG уникальными при монтировании нескольких копий иконки. tsdown использует esbuild/oxc, Babel-плагины там не запускаются. Иконки с одинаковыми id ломаются в Safari.

### 4. `preserveModules`

Rollup с `preserveModules: true` выдаёт один файл на каждый исходный — это нужно для tree-shaking. У tsdown есть `unbundle: true`, но он не работает вместе с нашими CSS-модулями (см. п. 1).

### 5. Генерация типов

tsdown генерирует `.d.mts`/`.d.cts` через собственный механизм, который не справляется с реэкспортами из shared. Rollup использует `tsc --project tsconfig.production.json` — стандартный компилятор, полная совместимость с IDE.

## Когда tsdown подходит

[reef-knot](https://github.com/lidofinance/reef-knot) использует tsdown с `unbundle: true` — и у них всё работает. Причина: там **styled-components**, никаких CSS-файлов вообще, и нет непубликуемых internal-пакетов с CSS. Стили генерируются в рантайме — PostCSS-пайплайн не нужен.

У нас CSS-модули + shared без npm — tsdown для этого не подходит.

## Итог

tsdown хорош для TS-утилит и CSS-in-JS библиотек без статических стилей. Для React-библиотеки с CSS-модулями, Babel-трансформами и непубликуемым internal-пакетом — rollup.
