// Exercícios

// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).


array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 10];
array3 = ['ilie', 'belle', 'toninha'];
array4 = ['eliane', 'pedro', 'andrea'];

function unindoArray(arr1, arr2, arr3, arr4) {
    const arrayUnido = [...arr1, ...arr2, ...arr3, ...arr4]
    return arrayUnido
}

console.log(unindoArray(array1, array2, array3, array4));

//------------------------------------------------------------

function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const arraysConcatenados = concatArrays(array1, array2, array3, array4);
console.log(arraysConcatenados);

// 2 - Crie um array de números chamado valores. Depois, escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [100, 200, 300]

function somandoArray(arr) {
    const arraySomado = arr.reduce((acumulador, array) => acumulador + array, 0);
    return arraySomado 
}

console.log(`O array somado é: ${somandoArray(valores)}`);


// 3 - Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

function removendoDuplicadas (arr1, arr2){
    const semDuplicados = [...new Set([...arr1, ...arr2])];
    return semDuplicados
}

console.log(`O array sem duplicação é: ${removendoDuplicadas(coresLista1, coresLista2)}`)

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}

const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);

console.log(`Os números pares do array são: ${listaNumerosPares}`);

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); 
}

const numerosFiltrados = filtraNumeros(listaNumeros);
console.log(`Os números múltiplos de 3 e maiores que 5 são: ${numerosFiltrados}`); 

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaElementosDoArray(arr) {
    return arr.reduce((acum, atual) => acum + atual, 0);
  }
  
  const listaNumeros2 = [1, 2, 3, 4, 5];
  const somaTotal = somaElementosDoArray(listaNumeros2);
  console.log(`O array somado é: ${somaTotal}`);