export class ContaCorrente{
    agencia;
    _cliente;
    
    set Cliente
    _saldo = 0;

    sacar(valor){
        if(this._saldo > valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = 'Sao Paulo';
        valor = 20;
    }
}