// Execícios

// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:
// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.

const pessoa = {
    nome: 'Ilie',
    notas: [10, 8.5, 10, 9.5],
    calcularMediaNotas: function () {
        const somaDasNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        const media = somaDasNotas / this.notas.length;
        return media.toFixed(2);
    },
    classificarDesempenho: function () {
        const media = this.calcularMediaNotas();

        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.5 && media < 9) {
            return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho insuficiente';
        }
    }
}

const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);

// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:
// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.

const carro = {
    marca: 'Audi',
    modelo: 'rs3',
    ano: 2019,
    cor: 'cinza',
}

carro.combutivel = 'gasolina';
carro.cambio = "Automático";
carro.kmRodados = 5000;


for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.
// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:
// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.

// Definição do objeto carro com as propriedades e métodos solicitados
const carro2 = {
    marca: 'Audi',
    modelo: 'RS3',
    ano: 2019,
    cor: 'cinza',
    ligado: false, // Propriedade que indica se o carro está ligado ou não

    // Método para ligar o carro
    ligar: function () {
        if (this.ligado) {
            console.log('O carro já está ligado');
        } else {
            this.ligado = true;
            console.log('Ligando o carro');
        }
    },

    // Método para desligar o carro
    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            console.log('Desligando o carro');
        } else {
            console.log('O carro já está desligado');
        }
    },

    // Método para obter os detalhes do carro
    obterDetalhes: function () {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Ligado: ${this.ligado ? 'Sim' : 'Não'}`;
    }
};

// Chamando os métodos ligar e desligar do objeto carro e imprimindo as mensagens resultantes
carro2.ligar(); // Ligando o carro
carro2.desligar(); // Desligando o carro
carro2.ligar(); // Ligando o carro
carro2.ligar(); // O carro já está ligado
carro2.desligar(); // Desligando o carro
carro2.desligar(); // O carro já está desligado

// Chamando o método obterDetalhes e imprimindo a string retornada
console.log(carro2.obterDetalhes()); // Marca: Audi, Modelo: RS3, Ano: 2019, Cor: cinza, Ligado: Não


// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

const carro3 = {
    marca: 'Audi',
    modelo: 'rs3',
    ano: 2019,
    cor: 'cinza',
    ligado: false, 
    placa: "ABC1234" // Nova propriedade representando a placa do veículo
};

// Defina a propriedade placa como não enumerável
Object.defineProperty(carro3, "placa", { enumerable: false });

// Utilize um loop for...in para percorrer as propriedades enumeráveis do objeto carro
console.log("Propriedades Enumeráveis do Carro:");
for (let propriedade in carro3) {
    console.log(`${propriedade}: ${carro3[propriedade]}`);
}

// Utilize Object.keys() para obter um array com as chaves enumeráveis do objeto carro
const chavesEnumeraveis = Object.keys(carro3);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

// Tente acessar a propriedade placa diretamente e imprima o resultado obtido
console.log("\nAcesso direto à propriedade placa:");
console.log(carro3.placa);


// 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.
// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alteraçõe

const carro4 = {
    marca: 'Audi',
    modelo: 'rs3',
    ano: 2019,
    cor: 'cinza',
    ligado: false, 
    placa: "ABC1234"
};

const carroNovo = {
    marca: 'Bmw',
    modelo: 'm3',
    ano: 2020,
    cor: 'Preta',
};

const carroComNovosDetalhes = {... carro4, ... carroNovo};

// Imprima no console o objeto carroComNovosDetalhes
console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes
carroComNovosDetalhes.modelo = "x6";

// Imprima novamente no console o objeto carroComNovosDetalhes
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);