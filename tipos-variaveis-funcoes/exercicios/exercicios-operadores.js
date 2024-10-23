// 1.Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 0
let deposito = 2500
let saque = 500

let operacao = saldo += deposito;
console.log(operacao);
operacao -= saque;
console.log(operacao);

// 2.Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

let numero = 12;
let parImpar = numero % 2 === 0 ? 'O número é par' : 'O número é impar'
console.log(parImpar);

// 3.Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

const logado = true;
const admin = false;

const resultado = logado && admin;

console.log('Administrador logado no sistema:', resultado); 

if ( logado === true && admin === true) {
    console.log('Autorizado!');
} else {
    console.log('Erro!');
}

// 4.Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const resultado2 = logado || admin;

console.log('Administrador logado no sistema:', resultado2); 

if ( logado === true || adm === true) {
    console.log('Autorizado!');
} else {
    console.log('Erro!');
}

// 5.Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

let idadeMinima = 18;
let idadeUsuario = 18;

if (idadeMinima > idadeUsuario) {
    console.log('É preciso ter 18 anos ou mais para poder compra o ingresso');
} else {
    console.log('Compra realizada com sucesso!');
}