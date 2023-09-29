/* 
 * Um bloco de codigo e definido por um 
 * par de chaver {}
 * Serve para agrupar sentencas de codigos
 * Posso criar blocos um dentro do outro
 * Porem, o de dentro tem que fechar dentro do de fora
*/

let num = 5;
{

    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
}

if (num == 5){ 
    console.log("Passo #04");
    console.log("Passo #05");
}

console.log("Fim!");
