## Блок текст (text)

#### Модификаторы:

* Размер шрифта
```html
// Размер шрифта - 9px
text_size_xx-small
```
```html
// Размер шрифта - 11px
text_size_x-small
```
```html
// Размер шрифта - 12px
text_size_small
```
```html
// Размер шрифта - 13px
text_size_medium
```
```html
// Размер шрифта - 14px
text_size_x-medium
```
```html
// Размер шрифта - 15px
text_size_xx-medium
```
```html
// Размер шрифта - 16px
text_size_large
```
```html
// Размер шрифта - 17px
text_size_x-large
```
```html
// Размер шрифта - 18px
text_size_xx-large
```
```html
// Размер шрифта - 20px
text_size_xxx-large
```

* Ширина шрифта
```html
// Ширина шрифта - light
text_light
```
```html
// Ширина шрифта - bold
text_bold
```
```html
// Ширина шрифта - extrabold
text_extrabold
```

* Цвета
```html
// Зеленый цвет
text_color_success
```
```html
// Красный цвет
text_color_danger
```
```html
// Синий цвет
text_color_primary
```
```html
// белый цвет
text_color_contrast
```
```html
// серый цвет
text_color_accent
```

#### Пример HTML

```html
// По умолчанию:
+text()
```
```html
// Текст - шрифт 14px bold:
+text(text_size_x-medium text_bold)
```
```html
// Текст - шрифт 14px bold зеленого цвета:
+text(text_size_x-medium text_bold text_color_danger)
```