const nota1 = 1.8;
const nota2 = 3.1;
const nota3 = 1.7;

// Calcular a media com as duas maiores notas
function minimo(n1, n2){
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if(menorNota === n1){
        return (n2 + n3) / 2
    } else if(menorNota === n2){
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

function status(media) {
    if (media >= 7) {
        return 'Aprovado';
    } else if (media >= 4){
        return 'Recuperacao';
    } else {
        return 'Reprovado';
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = status(mediaFinal);
console.log(`O resultado final do aluno e ${statusFinal}`);


// Mostrar os status (Aprovado (>= 7), Recuperacao (4 <= nota < 7))
// (Reprovado (< 4))