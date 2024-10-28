const estudante = {
    nome: 'ilie',
    idade: 31,
    cpf: '12345678910',
    turma: 'JavaScript'
}

function exibeinfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante['nome']);
console.log(estudante['cpf']);
console.log(exibeinfoEstudante(estudante, 'nome'));
console.log(exibeinfoEstudante(estudante, 'cpf'));