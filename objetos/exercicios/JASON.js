// Exercícios

// 1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.
// Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.
// Imprima no console o conteúdo importado utilizando a função console.log().
// Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.

const dados = require('./dados.json');
console.log(dados);
console.log("Produtos 1:", dados.produtos[0]);
console.log("Produtos 2:", dados.produtos[1]);
console.log("Usuários 1:", dados.usuarios[0]);
console.log("Usuários 2:", dados.usuarios[1]);


// 2 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:
// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.
// Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

const stringProduto = JSON.stringify(produto);
console.log("String do Produto:");
console.log(stringProduto);

// 3 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.
// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

// a) Leia o conteúdo do arquivo animais.json.

const animais = require('./animais.json')
console.log(animais);

// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

const stringAnimais = JSON.stringify(animais);
console.log(stringAnimais);
const objAnimais = JSON.parse(stringAnimais)
console.log(objAnimais);

// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};

objAnimais.animais.push(novoAnimal);
console.log(objAnimais);

// d) Modifique o habitat de um animal existente no array de animais.

const animalParaModificar = objAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

console.log(objAnimais);

// e) Remova um animal do array de animais.

const indiceAnimalRemover = objAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objAnimais.animais.splice(indiceAnimalRemover, 1);
}

console.log(objAnimais);

// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

const converteStringAnimais = JSON.stringify(objAnimais);

// g) Imprima no console o objeto JavaScript resultante das operações.

console.log(converteStringAnimais);

// 4 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};


// Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

function clonarObj (obj) {
    return JSON.parse(JSON.stringify(obj));
}

const pessoaModificada = clonarObj(pessoaOriginal);

// Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

pessoaModificada.nome = 'Ilie'

// Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.

console.log(pessoaOriginal);
console.log(pessoaModificada);