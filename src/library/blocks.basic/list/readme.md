## Блок список (list)

#### Модификаторы:

* Список отступ с права

```html
.list_ident
```

* Список в строку

```html
.list__item_inline
```

#### Пример HTML

```html
// По умолчанию:
+list()
  ="Текст заголовок"
  +list__item()
```
```html
// Список в строку:
+list()
  ="Текст заголовок"
  +list__item(list__item_inline)
```