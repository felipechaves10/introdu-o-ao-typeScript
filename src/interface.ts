
interface usuario {
    id: number
    nome: string
    email:string
    idade?:number
}

function criarUsuario(usuario: usuario){
    console.log(`usuario ${usuario.nome} criado`!)
}
criarUsuario({
    id:1,
    email: "jonas@gmail.com",
    nome: "jonas"
})

 interface Produto2{
id: number
nome: string
Preco: number
emEstoque?: boolean
}
function exibirProduto(Produto: Produto2){
    console.log(`
        seus produtos são 
        id ${Produto.id}
        nome ${Produto.nome}
        Preco ${Produto.Preco}
        `)
}

exibirProduto({
    id: 1,
    nome: "mesa",
    Preco: 20
})