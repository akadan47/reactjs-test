## Блок лейбл (label)

#### Модификаторы:

* Рамка
```html
// Зеленая рамка
label_border_success
```
```html
// Красная рамка
label_border_danger
```

* Без рамки
```html
// Зеленая рамка
label_border_none
```

* Цвета
```html
// Зленый цвет
label_success
```
```html
// Серый цвет
label_accent
```
```html
// Белый цвет
label_white
```
```html
// Желтый цвет
label_warning
```
```html
// Красный цвет
label_danger
```

* Зачеркнутый лейбл
```html
label_line_through
```

* Текст
```html
// Верхний регистр
label_text_uppercase
```
```html
// Шрифт bold
label_text_bold
```
```html
// Шрифт extrabold
label_text_extrabold
```

#### Пример HTML

```html
// По умолчанию:
+label()
```
```html
// Лейбл зеленого цвета:
+label(label_success)
```
```html
// Лейбл зеленого цвета, все буквы большие:
+label(label_success label_text_uppercase)
```
```html
// Лейбл с зеленой рамкой, для жирного текста:
+label(label_success label_text_bold text_bold)
```