const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10];

// spread operator
// novaListaNotas.push(10);

// let nota = 9.75;
// let novaNota = nota;

// nota = 10

console.log(notas);
console.log(novaListaNotas);

//-----------------------------------------------------------

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);

//-----------------------------------------------------------

const notas2 = [7, 7, 8, 9];

const novasNotas = notas2;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas2}`);

//-----------------------------------------------------------


const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]);