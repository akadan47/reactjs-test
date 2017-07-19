## Блок бейдж (badge)

#### Модификаторы:

* Цвета
```html
// Красный бейдж
badge_type_danger
```

* Расположение
```html
// Бейдж в правом верхнем углу
badge_pos_top-right
```

#### Пример HTML

```html
// По умолчанию:
+badge()
```
```html
// Бейдж красного цвета:
+badge('badge_type_danger')
```
```html
// Позиция в левом верхнем углу блока родителя:
+badge('badge_pos_top-left')
```
```html
// Позиция в правом верхнем углу блока родителя:
+badge('badge_pos_top-right')
```
```html
// Позиция в левом нижнем углу блока родителя:
+badge('badge_pos_bottom-left')
```
```html
// Позиция в правом нижнем углу блока родителя:
+badge('badge_pos_bottom-right')
```