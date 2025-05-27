
class Animal {


    public name: string


    constructor(name:string) {
        this.name = name
    }

    move(): string {
        return `${this.name} se mover`

    }

    }

class dog  extends Animal {
    bark(): string {
        return "Au Au!"
    }
}
class frog extends Animal{
            move(): string {
                return `${this.name} pula!`
            }
}


const forg1 = new frog('Sapão')
console.log(forg1.move())

const dog1 = new dog("rex")

console.log(dog1.move())
console.log(dog1.bark())
