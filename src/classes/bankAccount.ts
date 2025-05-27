class BankAccount{

  private balance: number

constructor(initialbalance: number) {
    this.balance = initialbalance
}
//definir metodos getters e setters

public getbalance(): number{
    return this.balance
}
//deposito

public deposit(amount: number) {
    if (amount>0) this.balance += amount
}
//saque
public withdrawl(amount: number) {
    if (amount > 0) this.balance -= amount
}

}

const contaBancaria1 = new BankAccount(100.00)

//mostrar o saldo
console.log(contaBancaria1.getbalance())

//depositar 100 reais ao saldo
contaBancaria1.withdrawl(100)

//sacar 50
contaBancaria1.withdrawl(50)

//mostrar o saldo
console.log(contaBancaria1.getbalance())//150
