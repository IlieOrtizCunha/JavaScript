const user = {
    nome: 'Ilie',
    email: 'ilie@hotmail.com',
    nascimento: '01/01/2024',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}


const admin = {
    nome: 'Isabelle',
    email: 'isabelle@hotmail.com',
    nascimento: '01/01/2024',
    role: 'estudante',
    ativo: true,
    criarCurso: function() {
        console.log('curso criado');
    }
}

Object.setPrototypeOf(admin, user)
admin.exibirInfos()
admin.criarCurso()
