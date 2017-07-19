## Блок карусель (carousel)

#### Пример HTML

```html
// По умолчанию:
+carousel()
```
```html
// Карусель содержит один слайд, во всю ширину экрана и точки для управления слайдами
+carousel(null, {
  items: 1,
  loop:false,
  nav:false,
  dots:true
})
```
```html
// Карусель содержит нксколько слайдов, распологая их с лева на право друг за другом
+carousel(null, {
  autoWidth:true,
  loop:false,
  nav:false,
  dots:false
})
```