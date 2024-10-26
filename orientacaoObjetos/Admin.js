import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = "true") {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}

const novoAdmin = new Admin("Isabelle", "bele@hotmail.com", "2024-01-01")

console.log(novoAdmin);
console.log(novoAdmin.exibirInfo());
console.log(novoAdmin.criarCurso('JavaScript', '20'));



