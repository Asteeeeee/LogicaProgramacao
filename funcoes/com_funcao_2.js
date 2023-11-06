const d1 = 3;
const m1 = 7;
const a1 = 2021;

function exibirData1() {
    console.log(`Dia: ${d1}/${m1}/${a1}`);
}

const d2 = 23;
const m2 = 12;
const a2 = 2022;

function exibirData2() {
    console.log(`Dia: ${d2}-${m2}-${a2}`);
}

function exibirData(d, m, a){
    console.log(`${d}/${m}/${a}`)
}

exibirData(d1, m1, a1);
exibirData(d2, m2, a2);