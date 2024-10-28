// Exercícios

// 1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function imprimeElementos(array) {
    for (let i of array) {
        console.log(i);
    }
}

imprimeElementos(numeros)

// 2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function indiceElemento(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(`Índice: ${i} | Número: ${array[i]}`);
    }
}

indiceElemento(numeros);

// 3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function somaNumeros(array) {
    let soma = 0
    for (numero of array) {
        soma += numero
    }
    const total = soma
    console.log(`A soma do array é: ${total}`);
}

somaNumeros(numeros);

function soma(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  console.log(soma(numeros));

// 4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

function imprimeMaiorEMenor(array) {

    let maior = 0;
    let menor = 0;
  
    for(let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i]
      }
      if (array[i] < menor) {
        menor = array[i]
      }
    }
    return `o maior número é ${maior} e o menor número é ${menor}`;
  }
  
  console.log(imprimeMaiorEMenor(numeros))

// 5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

function arrayPar(array) {
    for(i = 0; i < array.length; i++) {
        if (array[i] %2 === 0) {
            console.log(`Números pares do array: ${array[i]}`);
        }
    }
}

arrayPar(numeros)

// 6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

function mediaArray(array) {
    let soma = 0
    for (numero of array) {
        soma += numero
    }
    const media = soma/array.length
    console.log(`A media do array é: ${media}`);
}

mediaArray(numeros);
