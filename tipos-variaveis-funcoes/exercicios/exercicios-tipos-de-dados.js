// 1.Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const frase1 = 'frase com letras maiúsculas.'

console.log("Comprimento da frase:", frase1.length);
console.log("Frase em letras maiúsculas:", frase1.toUpperCase());

// 2.Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

const valor1 = null;
let valor2;

console.log(valor1);
console.log(valor2);

// 3.Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const numero = 1
const texto = 'texto'
const boolean = true

console.log(`Variável ${numero} é um número, variável ${texto} é do tipo texto e variável ${boolean} é do tipo boolean`)


// 4.Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

const variavelNumerica = 1
const variavelString = '123'

console.log(typeof String(variavelNumerica));
console.log(typeof Number(variavelString));

// 5.Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

const manipulaçãoDeStrings = 'Primeira parte da frase SEGUNDA PARTE DA FRASE'

console.log(`${manipulaçãoDeStrings.slice(0, 24).toLocaleUpperCase()} em maiúsculo, ${manipulaçãoDeStrings.slice(24).toLowerCase()} em minusculo`);

