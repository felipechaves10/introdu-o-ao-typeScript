
abstract class Paymenthod {

    abstract processPaymet(amout: number):string;
    
}






class Creditcard extends Paymenthod {
    processPaymet(amout: number): string {
        return`pagamento de R$${amout} via cartão de credito`;
    }
}

class Pix extends Paymenthod {
    processPaymet(amout: number): string {
        return`pagamento de R$${amout} via Pix`;
    }
}

const creditPayment = new Creditcard()
const pixPayment = new Pix()

console.log(creditPayment.processPaymet(100))
console.log(pixPayment.processPaymet(600))