export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || "estudante"
        this.ativo = ativo
    }

    exibirInfo () {
        return `Nome: ${this.nome}, Email: ${this.email}`
    }

}

const novoUser = new User('Ilie', 'ilie@hotmail.com', '2024-01-01')

// console.log(novoUser);
// console.log(novoUser.exibirInfo());
// console.log(User.prototype.isPrototypeOf(novoUser));

