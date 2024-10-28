const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

const chaveObjeto = Object.keys(estudante);// Fornece as chaves presentes em um objeto.
const chaveObjeto1 = Object.values(estudante);// Fornece os valores presentes em um objeto.
const chaveObjeto2 = Object.entries(estudante); // Retorna um array de arrays que representam pares chave-valor. É útil em situações que demandam iterações mais complexas ou manipulação mais minuciosa dos dados.
console.log(chaveObjeto);
console.log(chaveObjeto1);
console.log(chaveObjeto2);

if (!chaveObjeto.includes('enderecos')) {
    console.error('è necessário ter um endereço cadastrado');
}

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);// Usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto.

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }