function executar(funcao){
    if (typeof funcao === 'function'){
        console.log(funcao());
    }
}


function bomDia(){
    return 'Bom dia';
}

executar(bomDia);
executar(bomDia());

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);