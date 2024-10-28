const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosImclonpletos = filtraPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosImclonpletos);