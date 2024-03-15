class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}


function solve(arrOfStrings) {

    for (const line of arrOfStrings) {
        const [catName, catAge] = line.split(' ');
        const instanceCat = new Cat(catName, catAge);
        instanceCat.meow();

    }
}