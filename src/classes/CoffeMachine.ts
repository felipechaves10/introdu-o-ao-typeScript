
abstract class coffeeMachine {
    abstract brew(): void

    preparecoffee(): void {
        this.heatWater()
        this.brew()
    }

    private heatWater(): void {
        console.log("Aquecendo agua...");

    }

}

class EspressoMachine extends coffeeMachine {
    brew(): void {
        console.log("Extraindo espresso...");
    }

}

const cafe = new EspressoMachine()
cafe.brew()
cafe.preparecoffee()


