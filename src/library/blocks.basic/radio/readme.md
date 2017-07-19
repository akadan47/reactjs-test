## Блок примитив (radio)

#### Пример PUG вызова
```html
+radio(null, {type: 'input', name: 'group-3', val: '', text: 'Радио кнопка', index: '1', link: 'tab-3-1'})

```

# Атрибуты

1. `null` - добавляет класс

2. `type` - есть два типа
  * `input` — формат вывода будет следущим. 
    ```html
      <label class="radio">
        <input class="radio__input" type="radio">
        <span class="radio__text">Радио кнопка</span>
      </label>
    ```
  * `button` — формат вывода будет следущим. 
    ```html
      <button class="radio__button" type="button">Радио кнопка</button>
    ```
  по умолчанию тип никакой не выбирается, необходимо указать один из вариантов.

3. `name` - значение добавляется в атрибут name, радио инпута.

4. `val` - значение добавляется в атрибут value

5. `text` - название кнопки

6. `index` - значение добавляется в атрибут tabindex, устанавливает последовательное переключение между элементами.

7. `link` - id таба, не обязательно.