const object = {
    name: 'goshow',
    age: 0,
    makeSound: function () {
        console.log('bZzZzz/..')
    },
    makeCalc: (a, b) => a * b,
    sayHello() {console.log('sayHello')},
}

console.log(object.name);
console.log(object.age);
console.log(object.sayHello());
console.log(object.sayHello);

object.makeSound();
console.log(object.makeCalc(5, 6))


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        // return `This is my name ${this.name}`;
        console.log(`This is my name ${this.name}`);
    }

    makeAWish() {
        console.log('All the best! :P')
    }
}


const person1 = new Person('Valeria', 21);
const person2 = new Person('Misho', 22);

person1.makeAWish();
let aa = person1.makeSound;
let bb = person1.makeSound();

console.log(aa)
console.log(aa.prototype)


person1.makeAWish ?? person1.makeAWish();

let person = { name:'Peter', age:20, height:183 };


function createPerson(fName, lName, age) {
    let person = {};
    person.FirstName = fName;
    person.LastName = lName;
    person.Age = age;

    return person;
}

console.log(createPerson('Iliq', 'John', 20));



let person22 = { name: 'Peter', age: 20, height: 183, hobby: 'haha' };

console.log(Object.keys(person22));
console.log(Object.values(person22));
console.log(Object.entries(person22));


