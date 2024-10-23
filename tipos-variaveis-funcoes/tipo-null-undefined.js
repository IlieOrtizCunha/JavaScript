let nomeEstudante;
let telefoneEstudante = null;
const professora = 'Ana';

console.log(nomeEstudante);
console.log(typeof professora);
console.log(typeof nomeEstudante);
console.log(typeof telefoneEstudante);
console.log(telefoneEstudante + 3);
console.log(nomeEstudante + 3);

// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição (opcional)
const simboloComDescricao = Symbol('descricao_do_simbolo');

// Símbolos são únicos
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // Saída: false

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
  [meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'
