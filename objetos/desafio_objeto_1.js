// Objeto Data 
// Atributos: dia, mes, ano
// Metodo: exibir -> "dia/mes/ano"

const dataNascimento = {
    dia: 1,
    mes: 12,
    ano: 2004,

    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(dataNascimento.exibir());