const object = {
    name: 'goshow',
    age: 0,
    makeSound: function () {
        console.log('bZzZzz/..')
    },
    makeCalc: (a, b) => a * b,
}

console.log(object.name);
console.log(object.age);

object.makeSound();
console.log(object.makeCalc(5, 6))

