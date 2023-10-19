const nota = 4;
const bomComportamento = true;
let notaInsuficiente = nota < 7

if (!notaInsuficiente && bomComportamento)
console.log('Parabens!');

if (notaInsuficiente || !bomComportamento)
    console.log('Uma pena!');

console.log('Fim');