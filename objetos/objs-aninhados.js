const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
  }

  estudante.endereco = {
    rua: 'Rua 1',
    numero: '45',
    complemento: 'apto 43'
  }

  console.log(estudante);
  console.log(estudante.endereco);
  console.log(estudante.endereco.rua);