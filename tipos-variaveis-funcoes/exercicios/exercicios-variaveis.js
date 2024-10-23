const nome = 'ilie';
const idade = 30;
const dev = true;
const primeiroNome = 'Ilie';
const ultimoNome = 'Ortiz Cunha';
const nomeCompleto = primeiroNome + ' ' + ultimoNome;
const nomeCompleto2 = `Meu nome é ${primeiroNome} ${ultimoNome}`;
const apresentacao = `Meu nome é ${primeiroNome} e tenho ${idade} anos de idade `;

console.log(typeof nome, typeof idade, typeof dev) 
console.log(nomeCompleto);
console.log(nomeCompleto2);
console.log(apresentacao);

let valor = 10;
console.log(valor);
valor = 20;
console.log(valor);

var escopo = 'escopo global';

if (true){
    var escopoGlobal = 'escopo de bloco'
}

console.log(`Variavel ${escopo} dentro do bloco`);
console.log(`Variavel ${escopoGlobal} dentro do bloco`);

let escopoLet = 'escopo global';

if (1>0){
    let escopoGlobalLet = 'escopo de bloco';
}

console.log(`Variavel ${escopoLet} dentro do bloco`);
//console.log(`Variavel ${escopoGlobalLet} dentro do bloco`);

const chovendo = false;

if (chovendo){
    console.log('Leve seu guarda-chuva')
}else{
    console.log('Não precisa levar seu guarda-chuva')
}


