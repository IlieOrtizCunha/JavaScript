const user = {
    nome: 'Ilie',
    email: 'ilie@hotmail.com',
    nascimento: '12/07/1993',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

user.exibirInfos()

const exibir = function() {
    console.log(this.nome, this.email);
}

const exibirNome = exibir.bind(user);
exibirNome()

function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
exibeInfos.call(user)