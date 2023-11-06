const nota = 8;
let conceito;

if (nota >= 0 && nota <= 10){
    if(nota < 4.5){
        conceito = 'F';
    }
    if(nota >= 4.5 && nota < 4.9){
        conceito = 'D';
    }
    if(nota >= 5 && nota < 6.9){
        conceito = 'C';
    }
    if(nota >= 7 && nota <= 8.9){
        conceito = 'B';
    }
    if(nota >= 9){
        conceito = 'A';
    }
}

console.log(conceito);