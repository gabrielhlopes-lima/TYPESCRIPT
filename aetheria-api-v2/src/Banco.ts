enum TipoConta{
    Corrente ='CORRENTE',
    Poupanca ='POUPANCA',
    Salario ='SALARIO'
}

class ContaBancaria{
    public titular:string
    protected saldo : number
    public tipo : TipoConta

    constructor(titular:string,tipo:TipoConta){
        this.titular = titular
        this.saldo = 0
        this.tipo = tipo
    }
    
    sacar(valor:number):void{
        if(this.saldo >= valor){
            this.saldo-= valor 
            console.log(`Saque de valor R$${valor} realizado com sucesso!`)
        } else{
            console.log(`Saldo insuficiente!`)
        }
    }
    
    depositar(valor:number):void{
        if(valor > 0){
            this.saldo += valor
            console.log(`O valor R$${valor}, foi depositado com sucesso!`)
        } else{
            console.log(`Valor invalido!`)
        }
    }
    getSaldo():number{
        return this.saldo
    }
}

class ContaPopanca extends ContaBancaria{
    constructor(titular:string){
        super(titular,TipoConta.Poupanca)
    }

    renderJuros():void{
        this.saldo *=1.01
        console.log(`OS juros rederam! Novo saldo: ${this.saldo}`)
    }
}

class ContaCorrente extends ContaBancaria{
    public LimiteChequeEspecial: number

    constructor(titular:string){
        super(titular,TipoConta.Corrente)
        this.LimiteChequeEspecial = 500
    }

    public sacar(valor: number): void {
        const limiteDisponivel = this.saldo + this.LimiteChequeEspecial
        if(limiteDisponivel <= this.saldo){
            this.saldo-valor
            console.log(`Saque de R$${valor} realizado com sucesso!`)
        } else{
            console.log(`Limite indisponivel!`)
        }
    }
}

let contaJoao = new ContaPopanca("João")
contaJoao.depositar(1000)
contaJoao.renderJuros()

console.log(`Saldo: R$${contaJoao.getSaldo()}`)

const contaMaria = new ContaCorrente("Maria")
contaMaria.sacar(300)

const contas: ContaBancaria[] = [contaJoao, contaMaria]

contas.forEach(conta =>{
    console.log(`Titular:${[conta.titular]} | Tipo: ${[conta.tipo]} | Saldo: R$${conta.getSaldo()}`)
})