const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
};

data.dia = 27;
data.mes = 24;

// data = {}; -> Nao pode alterar o tipo de variavel que tem la dentro do obj

console.log(`${data.dia}/${data.mes}/${data.ano}`);
