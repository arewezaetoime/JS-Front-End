function createPerson(fName, lName, age) {
    let person = {};
    person.FirstName = fName;
    person.LastName = lName;
    person.Age = age;

    console.log(person);
}

console.log(createPerson('Iliq', 'John', 20));