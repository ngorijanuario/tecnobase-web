# CSS - Cascading Style Sheets (Selectores e propiedades)
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

## Propriedades
Propriedades CSS definem as características visuais dos elementos selecionados.
Existem diversas propriedades CSS, como:
```html
Propriedades de cor: color, background-color e border-color.
Propriedades de tipografia: font-family, font-size, font-weight, font-style.
Propriedades de espaçamento: margin, padding e text-align.
Propriedades de tamanho: width, height, box-sizing.
Propriedades de borda: border-style, border-width, border-color.
```

## Propriedades de cor
Controlam a cor do texto, do plano de fundo e das bordas

color: Define a cor do texto de um elemento.
```css
Exemplo: p { color: red; }
```
background-color: Define a cor do plano de fundo de um elemento.
```css
div { background-color: #f0f0f0; }
```
border-color: Define a cor da borda de um elemento.
```css
img { border-color: blue; }
```

## Propriedades de tipografia
Controlam a fonte, o tamanho da fonte, o peso da fonte e o estilo da fonte.

font-family: Define a família de fontes a ser usada para o texto de um elemento.
```css
h1 { font-family: Arial, sans-serif; }
```
font-size: Define o tamanho da fonte do texto de um elemento.
```css
p { font-size: 16px; }
```
font-weight: Define o peso da fonte do texto de um elemento (normal, negrito, etc.).
```css
strong { font-weight: bold; }
```
font-style: Define o estilo da fonte do texto de um elemento (normal, itálico, etc.).
```css
em { font-style: italic; }
```

## Propriedades de espaçamento
Controlam as margens, o preenchimento e o alinhamento dos elementos

margin: Define a margem ao redor do conteúdo de um elemento.
```css
div { margin: 20px; }
```
padding: Define o preenchimento entre o conteúdo e a borda de um elemento.
```css
p { padding: 10px; }
```
text-align: Alinha o texto dentro de um elemento.
```css
h1 { text-align: center; }
```

## Propriedades de tamanho
Controlam a largura, a altura e o dimensionamento dos elementos

width: Define a largura de um elemento.
```css
img { width: 50%; }
```
height: Define a altura de um elemento.
```css
div { height: 300px; }
```

## Propriedades de borda
Controlam o estilo, a largura e a cor da borda dos elementos

border-style: Define o estilo da borda de um elemento (sólido, tracejado, etc.).
```css
img { border-style: dashed; }
```

border-width: Define a largura da borda de um elemento.
```css
h1 { border-width: 5px; }
```

border-color: Define a cor da borda de um elemento.
```css
p { border-color: green; }
```
