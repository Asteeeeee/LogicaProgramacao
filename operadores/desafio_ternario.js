const a = 8;
const b = 4;
const operacao = 'b'; // + - * /

 
const resultado = operacao == '+' ? (a + b) : 
    operacao == '-' ? (a - b) : 
        operacao == '*' ? (a * b) : 
            operacao == '/' ? (a / b) : 
                "Não consigo realizar essa operação";
console.log(resultado);