# CSS - Cascading Style Sheets
## Seletores CSS
Seletores CSS identificam os elementos HTML que você deseja estilizar.
Existem diversos tipos de seletores CSS, como:
```html
Seletores de elemento: h1, p, img, etc.
Seletores de ID: #id.
Seletores de classe: .classe.
Seletores de descendente: div p.
Seletores de filho: div > p.
Seletores de atributo: a[href].

```

## Seletores de elemento
Selecionam elementos por tipo de elemento (por exemplo, h1, p, img).
```css
h1 {
  color: red; 
  font-size: 24px;
}
```
## Selector do tipo ID
Selecionam elementos por um ID único (#id).
```css
#meu-titulo {
  background-color: #f0f0f0;
  padding: 15px;
}
```

## Selector de Classe
Selecionam elementos por uma classe (.classe).
```css
.destaque {
  font-weight: bold; /* Torna o texto em negrito */
  text-decoration: underline; /* Sublinha o texto */
}
```

## Selector Descendentes
Selecionam elementos descendentes de outro elemento (div p).
```css
div p {
  color: blue; /* Muda a cor do texto para azul */
  margin-left: 20px; /* Adiciona uma margem esquerda de 20px */
}
```

## Selectores de Filho
Selecionam elementos filhos diretos de outro elemento (div > p).
```css
div > p {
  font-style: italic; /* Torna o texto em itálico */
  margin-top: 5px; /* Adiciona uma margem superior de 5px */
}
```

## Selectores de Atributo
Selecionam elementos com base em um atributo (a[href]).
```css
a[href^="https://www.tecno.co/"] {
  color: green; /* Muda a cor do texto para verde */
  text-decoration: none; /* Remove a sublinhação padrão */
}
```
