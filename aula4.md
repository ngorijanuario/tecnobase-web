# Laços e iterações

Podemos pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma:

```js
var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log("Ande um passo para o leste");
}
```

Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes). 

Os laços de repetição em JavaScript:
- for
- do...while
- while
- label
- break
- continue
- for...in
- for...of

## Laço de repetição For
Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:
```js
for ([expressaoInicial]; [condicao]; [incremento]){
  // declaracao
}
```
Onde: 
- expressaoInicial: é inicializada e, caso possível, é executada.
- condicao: é avaliada. caso o resultado de condicao seja verdadeiro, o laço é executado. Se o valor de condicao é falso, então o laço terminará.
- incremento: atualisa a expressaoIniciall apartir da soma ou subtração de um incremento.

Exemplo

A função a seguir contém uma declaração for que contará o número de opções selecionadas em uma lista (um elemento <select> permite várias seleções). Dentro do for é declarado uma váriavel i inicializada com zero. A declaração for verifica se i é menor que o número de opções no elemento <select>, executa sucessivas declaração if, e incrementa i de um em um a cada passagem pelo laço.
```html
<form name="selectForm">
  <p>
    <label for="tipoMusica"
      >Escolha alguns tipos de música, em seguida, clique no botão
      abaixo:</label
    >
    <select id="tipoMusica" name="tipoMusica" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classico</option>
      <option>Ópera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="Quantos foram selecionados?" /></p>
</form>

<script>
  function howMany(selectObject) {
    var numeroSelecionadas = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numeroSelecionadas++;
      }
    }
    return numeroSelecionadas;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    alert(
      "Total de opções selecionadas: " +
        howMany(document.selectForm.tipoMusica),
    );
  });
</script>
```

## Laço de repetição do...while
A instrução do...while repetirá até que a condição especificada seja falsa.
```js
do{
  //declaracao
}while (condicao);
```

Exemplo
No exemplo a seguir, o laço é executado pelo menos uma vez e irá executar até que i seja menor que 5.
```js
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## Laço de repetição While
Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração while:
```js
while (condicao){
  declaracao
}
```
Exemplo
```js
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

A cada iteração, o laço incrementa n e adiciona este valor para x. Portanto, x e n recebem os seguintes valores:
- Depois de executar pela primeira vez: n = 1 e x = 1
- Depois da segunda vez: n = 2 e x = 3
- Depois da terceira vez: n = 3 e x = 6
  
Depois de executar pela terceira vez, a condição n < 3 não será mais verdadeira, então o laço encerrará.
