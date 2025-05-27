class caixaEletronico{
    private saldo: number

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }
   
    public versaldo():number {
        return this.saldo
    }

    public depositar(amount: number) {
        if (amount > 0) {
            this.saldo += amount
            return
        }
    }
   public sacar(amount:number){
    if(amount <= this.saldo && amount > 0) {
        this.saldo -= amount
        return
    }
   } 
}

const contaBancaria2 = new caixaEletronico(100.00)

//ver saldo
console.log(contaBancaria2.versaldo())
//Depositar
contaBancaria2.depositar(100)
    //sacar
 
contaBancaria2.sacar(201)

console.log(contaBancaria2.versaldo())

