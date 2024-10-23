// 1.Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

function exibeNome(nome) {
    return `Olá ${nome}, seja bem vindo!`;
}

const nome = 'Ilie';
const saudacao = exibeNome(nome)

console.log(saudacao);
console.log(exibeNome('Belle'));

// 2.Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

function maioridade(idade) {
    if (idade >= 18){
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(maioridade(30));

// 3.Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("Frase")); 

// 4.Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `O ${num1} é o maior número`
    } else if ( num2 > num1 && num2 > num3) {
        return `O ${num2} é o maior número`
    } else {
        return `O ${num3} é o maior número`
    }
}

console.log(maiorNumero(5, 8, 13))

// 5.Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => {
    return base ** expoente;
    //return Math.pow(base, expoente);
}

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);

console.log(calculaPotencia(2, 10));