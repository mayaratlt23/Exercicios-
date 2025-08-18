console.log('Minha idade atual é: ', idade)

var idade = 28
// variável global não pode ser referenciada antes da declaração
// var pode
// let e const não podem ser referenciadas antes da inicialização

console.log('Minha idade depois de declarar é: ', idade)

//Em JavaScript, hoisting é um comportamento no qual as declarações de variáveis e funções são movidas 
// para o topo do seu contexto  de execução antes do código ser executado. Isso significa que, independentemente 
// de onde você declara suas variáveis e funções no seu código, o JavaScript as "eleva" para o início do escopo atual.
// No entanto, é importante notar que apenas a declaração é elevada, e não a inicialização. Isso pode levar a resultados 
// inesperados, especialmente com var, onde a variável estará acessível antes da declaração, mas com o valor undefined.