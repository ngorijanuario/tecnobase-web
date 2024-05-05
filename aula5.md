# Laços e iterações (Continuação)

## Estrutura de repetição Label
Um label provê um identificador que permite que este seja referenciado em outro lugar no seu programa. Por exemplo, você pode usar uma label para identificar um laço, e então usar break ou continue para indicar quando o programa deverá interromper o laço ou continuar sua execução.

Sintaxe da instrução label:
```js
label : declaracao
```
Obs: Um label pode usar qualquer idenficador que não seja uma palavra reservada do JavaScript. Você pode identificar qualquer instrução com um label.

Exemplo
Neste exemplo, o label markLoop idenfica um laço while.
```js
markLoop: while (theMark == true) {
  // facaAlgo();
}
```
## Laço Break
Use break para terminar laços, switch, ou um conjunto que utiliza label.

- Quando você utiliza break sem um label, ele encerrará imediatamente o laço mais interno while, do-while, for, ou switch e transferirá o controle para a próxima instrução.
- Quando você utiliza break com um label, ele encerrará o label específico.

Sintaxe do break:
```js
break;
break label;
```
Na primeira opção será encerrado o laço de repetição mais interno ou switch. Já na segunda opção será encerrada o bloco de código referente a label.

Exemplo 1

O exemplo a seguir percorre os elementos de um array até que ele encontre o índice do elemento que possui o valor contido em theValue:
```js
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```

Exemplo 2

Utillizando o Break na Label
```js
var x = 0;
var z = 0;
labelCancelaLaco: while (true) {
  console.log("Laço exterior: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Laço interior: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelaLaco;
    } else if (z === 10) {
      break;
    }
  }
}
```

## Laço continue
A declaração continue pode ser usada para reiniciar uma instrução while, do-while, for, ou label.

- Quando você utiliza continue sem uma label, ele encerrará a iteração atual mais interna de uma instrução while, do-while, ou for e continuará a execução do laço a partir da próxima iteração. Ao contrário da instrução break, continue não encerra a execução completa do laço. Em um laço while, ele voltará para a condição. Em um laço for, ele pulará para a expressão de incrementação.
- Quando você utiliza continue com uma label, o continue será aplicado ao laço identificado por esta label.

Sintaxe do continue:
```js
continue;
continuelabel;
```
Exemplo 1

O exemplo a seguir mostra um laço while utilizando continue que executará quando o valor de i for igual a 3. Desta forma, n recebe os valores um, três, sete, e doze.
```js
i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
```
Exemplo 2

Uma instrução label checkiandj contém uma instrução label checkj. Se o continue for executado, o programa terminará a iteração atual de checkj e começará a próxima iteração. Toda vez que o continue for executado, checkj recomeçará até que a condição do while for falsa. Quando isto ocorrer checkiandj executará até que sua condição seja falsa.

Se o continue estivesse referenciando checkiandj, o programa deveria continuar do topo de checkiandj.
```js
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    console.log(j + " é estranho.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```



