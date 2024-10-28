const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

for (let chave in meuObjeto) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}

console.log(Object.keys(meuObjeto));

//-------------------------------------------------------------

const meuObjeto1 = {};

// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto1, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto1)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto1.propriedadeNaoEnumeravel); // Saída: 42