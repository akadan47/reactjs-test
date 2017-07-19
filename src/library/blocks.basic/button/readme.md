## Блок кнопки (button)

#### Модификаторы:

* Размеры
```html
// Маленькая кнопка
button_size_small

// Средняя кнопка
button_size_medium

// Большая кнопка
button_size_large

// Очень большая кнопка
button_size_xlarge
```

* Форматы
```html
// Растянуть на всю ширину
button_format_wide
```

* Состояния
```html
// Успех
button_success

// Неактивна
button_disable

// Ошибка
button_error

// Предупреждение
button_warning
```

#### Пример HTML
```html
// По умолчанию:
+button()

// Маленький размер кнопки:
+button('button_size_small')

// Маленький размер кнопки и текст кнопки:
+button('button_size_small', {text: 'Тестовая кнопка'})

// Текст кнопки:
+button('', {text: 'Тестовая кнопка 2'})

// Текст кнопки и тип кнопки input-submit:
+button('', {text: 'Тестовая кнопка 3', type: 'input-submit'})

// Текст кнопки и тип кнопки input-submit и иконка:
+button('', {type: 'button'})
  +icon('icon_vk')
  | Кнопка с иконкой
```