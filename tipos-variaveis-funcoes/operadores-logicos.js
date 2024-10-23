const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

if (notaFinal < 7 || faltas > 4) {
    console.log('reprovado');
} else {
    console.log('Aprovado, boas festas');
}

if (notaFinal < 7 && faltas > 4) {
    console.log('reprovado');
} else {
    console.log('Aprovado, boas festas');
}

if (faltas >= 2 && !advertencias) {
    console.log('recebeu bônus');
} else {
    console.log('não recebeu bônus');
}