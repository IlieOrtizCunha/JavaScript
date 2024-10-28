// Execícios

// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const arrayNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arrayNumero.forEach((element, index) => {
    console.log(`Índice: ${index}, Valor: ${element}`);
});

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback); // Executa a função de callback em cada elemento do array
}

function dobraNumero(num) {
    return num * 2; // Função de exemplo para dobrar o número
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados); // Saída: [2, 4, 6]

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)

const alunoProcurado = todasAsTurmas.find(nome => nome === 'Ana Souza');

if (alunoProcurado) {
  console.log('Aluno encontrado:', alunoProcurado);
} else {
  console.log('Aluno não encontrado.');
}

// 5 - Considere um array de números inteiros.

const numeros2 = [6, 9, 12, 15, 18, 21];

// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

console.log('Elementos do array multiplicados por 3:');

numeros2.forEach(num => {
    const result = num * 3;
    console.log(result);
}); 

const indiceDoNumero18 = numeros2.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}