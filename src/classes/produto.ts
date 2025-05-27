class Produto{
   name: string
   preco: number
   estoque: number
  
constructor(name:string, preco: number, estoque: number){
    this.preco = preco
    this.name = name
    this.estoque = estoque
}
comprar(qtd:number):number{
    this.estoque =this.estoque - qtd
    return this.estoque

}
repor(qtd:number):number {
    this.estoque = this.estoque + qtd
    return this.estoque
}

}
 
const paes = new Produto("pão",1.00, 10)
console.log(`conprado 2 paes. estoque atual
    ${paes.comprar(2)}//8`)

console.log(`repondo 6 paes. estoque atual ${paes.repor(6)}//14`)
