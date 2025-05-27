import { networkInterfaces } from "os";

class user{
    //atributos
    name: string
    age: number

    //construtor
    constructor(name: string, age: number) {
        this.name = name;
        this. age = age;
    }
    //metodos
    greet():string{
        return `ola, sou o ${this.name}!`;
    }
}

const user1 = new user("lucas", 28)
const user2 = new user('joana',28)

console.log(user1.name)
console.log(user1.age)
console.log(user1.greet())
console.log(user2.greet())
